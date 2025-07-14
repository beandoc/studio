
"use client";

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, ArrowLeft, Minus, Star, Loader2, AlertTriangle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import type { MealCategory, LoggedMeal } from '@/app/my-meal-tracker/page';
import { useFoodData } from '@/context/food-context';
import type { FoodItem } from '@/lib/food-data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProfile } from '@/context/profile-context';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

type AddMealDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddMeal: (meal: Omit<LoggedMeal, 'id'>) => void;
  category: MealCategory;
};

type WarningInfo = {
  type: 'allergen' | 'nutrient';
  message: string;
};

export default function AddMealDialog({ isOpen, onClose, onAddMeal, category }: AddMealDialogProps) {
  const { foodDatabase, findFoodBySlug, isFoodDataLoading } = useFoodData();
  const { activeProfile, getDailyLog } = useProfile();

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedServing, setSelectedServing] = useState<string>("");
  const [warning, setWarning] = useState<WarningInfo | null>(null);

  const favoriteItems = useMemo(() => {
    if (!activeProfile || isFoodDataLoading) return [];
    return (activeProfile.favorites || [])
        .map(slug => findFoodBySlug(slug))
        .filter((item): item is FoodItem => !!item);
  }, [activeProfile, findFoodBySlug, isFoodDataLoading]);

  useEffect(() => {
    if (searchTerm.length > 1) {
      const lowercasedTerm = searchTerm.toLowerCase();
      const results = foodDatabase.filter(food =>
        food.name.toLowerCase().includes(lowercasedTerm) ||
        (food.aliases && food.aliases.some(alias => alias.toLowerCase().includes(lowercasedTerm)))
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm, foodDatabase]);
  
  const getMealToAdd = useCallback(() => {
    if (!selectedFood) return null;
    
    const servingSizeData = selectedFood.servingSizes?.find(s => s.size === selectedServing);
    const primaryServingSize = selectedFood.servingSizes?.[0] || { size: selectedFood.nutritionFacts.servingSize, calories: selectedFood.nutritionFacts.calories};
    const primaryNutrients = selectedFood.nutritionFacts;

    let baseCalories, baseProtein, baseFat, baseCarbs, basePotassium, basePhosphorus;

    const baseNutrientCalories = primaryServingSize.calories;
    
    if(servingSizeData && baseNutrientCalories > 0) {
        const ratio = servingSizeData.calories / baseNutrientCalories;
        baseCalories = servingSizeData.calories;
        baseProtein = (primaryNutrients.protein.value || 0) * ratio;
        baseFat = (primaryNutrients.totalFat.value || 0) * ratio;
        baseCarbs = (primaryNutrients.totalCarbohydrate.value || 0) * ratio;
        basePotassium = (primaryNutrients.potassium?.value || 0) * ratio;
        basePhosphorus = (primaryNutrients.phosphorus || 0) * ratio; // Phosphorus might not be in the base data
    } else {
        baseCalories = primaryNutrients.calories || 0;
        baseProtein = primaryNutrients.protein.value || 0;
        baseFat = primaryNutrients.totalFat.value || 0;
        baseCarbs = primaryNutrients.totalCarbohydrate.value || 0;
        basePotassium = primaryNutrients.potassium?.value || 0;
        basePhosphorus = primaryNutrients.phosphorus || 0;
    }

    const numQuantity = quantity;

    return {
      name: `${selectedFood.name} (${numQuantity}x ${selectedServing})`,
      calories: baseCalories * numQuantity,
      protein: baseProtein * numQuantity,
      fat: baseFat * numQuantity,
      carbs: baseCarbs * numQuantity,
      potassium: basePotassium * numQuantity,
      phosphorus: basePhosphorus * numQuantity,
      category: category,
    };
  }, [selectedFood, quantity, selectedServing, category]);

  const checkForWarnings = useCallback((meal: ReturnType<typeof getMealToAdd>) => {
    if (!activeProfile || !meal || !selectedFood) return null;
    
    // Allergen Check
    const allergies = (activeProfile.allergies || "").toLowerCase().split(',').map(a => a.trim()).filter(Boolean);
    if(allergies.length > 0) {
        const foodNameLower = selectedFood.name.toLowerCase();
        for (const allergy of allergies) {
            if (foodNameLower.includes(allergy)) {
                return {
                    type: 'allergen',
                    message: `This food, "${selectedFood.name}", may contain a known allergen: ${allergy}. Are you sure you want to add it?`
                };
            }
        }
    }

    // Nutrient Check
    const dailyLog = getDailyLog(activeProfile.id, new Date());
    const totals = dailyLog?.meals ? Object.values(dailyLog.meals).flat().reduce((acc, item) => {
        const foodDetails = findFoodBySlug(item.name.split(' (')[0].toLowerCase().replace(/\s+/g, '-'));
        acc.potassium += foodDetails?.nutritionFacts.potassium?.value || 0;
        // Assume phosphorus is tracked if a goal is set, but it may not be in all food data
        acc.phosphorus += (foodDetails?.nutritionFacts as any).phosphorus || 0; 
        return acc;
    }, { potassium: 0, phosphorus: 0 }) : { potassium: 0, phosphorus: 0 };
    
    if (activeProfile.potassiumGoal && (totals.potassium + (meal.potassium || 0)) > activeProfile.potassiumGoal) {
      return {
        type: 'nutrient',
        message: `Adding this meal would exceed your daily potassium goal of ${activeProfile.potassiumGoal}mg. Are you sure you want to add it?`
      };
    }
    
    if (activeProfile.phosphorusGoal && (totals.phosphorus + (meal.phosphorus || 0)) > activeProfile.phosphorusGoal) {
      return {
        type: 'nutrient',
        message: `Adding this meal would exceed your daily phosphorus goal of ${activeProfile.phosphorusGoal}mg. Are you sure you want to add it?`
      };
    }

    return null;
  }, [activeProfile, selectedFood, getDailyLog, findFoodBySlug]);

  const handleSelectFood = (food: FoodItem) => {
    setSelectedFood(food);
    if (food.servingSizes && food.servingSizes.length > 0) {
      setSelectedServing(food.servingSizes[0].size);
    } else {
      setSelectedServing(food.nutritionFacts.servingSize);
    }
    setQuantity(1);
  };
  
  const proceedWithAddingMeal = () => {
    const meal = getMealToAdd();
    if(meal){
        const { potassium, phosphorus, ...mealToLog } = meal;
        onAddMeal(mealToLog);
    }
    handleClose();
  }

  const handleAddMealClick = () => {
    const meal = getMealToAdd();
    const potentialWarning = checkForWarnings(meal);
    
    if (potentialWarning) {
      setWarning(potentialWarning);
    } else {
      proceedWithAddingMeal();
    }
  };

  const handleClose = () => {
    setSelectedFood(null);
    setSearchTerm('');
    setWarning(null);
    onClose();
  };
  
  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => {
        const newValue = prev + amount;
        return newValue < 0.5 ? 0.5 : newValue;
    });
  };

  const FoodList = ({ items }: { items: FoodItem[] }) => (
     <div className="pr-4 space-y-2">
        {items.length > 0 ? (
            items.map(food => (
            <div key={food.slug} className="flex items-center justify-between p-2 rounded-md border">
                <div>
                    <p className="font-semibold">{food.name}</p>
                    <p className="text-xs text-muted-foreground">{food.nutritionFacts.calories} kcal, {food.nutritionFacts.protein.value.toFixed(1)}g protein</p>
                </div>
                <Button size="sm" onClick={() => handleSelectFood(food)}>
                    <Plus className="mr-2 h-4 w-4" /> Add
                </Button>
            </div>
            ))
        ) : (
            <p className="text-center text-muted-foreground pt-8">
                {searchTerm ? 'No results found.' : 'No items in this list.'}
            </p>
        )}
    </div>
  );

  const renderSearchStep = () => (
    <>
      <DialogHeader>
        <DialogTitle>Add to {category}</DialogTitle>
        <DialogDescription>
          Select from favorites or search the database.
        </DialogDescription>
      </DialogHeader>
      {isFoodDataLoading ? (
        <div className="h-80 flex items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <Tabs defaultValue="favorites" className="w-full">
            <div className="flex justify-between items-center pr-1">
                <TabsList>
                    <TabsTrigger value="favorites">
                        <Star className="mr-2 h-4 w-4" /> Favorites
                    </TabsTrigger>
                    <TabsTrigger value="search">Search</TabsTrigger>
                </TabsList>
                <Input
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-[150px]"
                />
            </div>
            <ScrollArea className="h-72 mt-2">
                {searchTerm ? (
                    <FoodList items={searchResults} />
                ) : (
                    <>
                    <TabsContent value="favorites">
                        {favoriteItems.length > 0 ? (
                            <FoodList items={favoriteItems} />
                        ) : (
                            <p className="text-center text-muted-foreground pt-8">No favorite items yet. Add some from the Food Database!</p>
                        )}
                    </TabsContent>
                    <TabsContent value="search">
                        <FoodList items={foodDatabase} />
                    </TabsContent>
                    </>
                )}
            </ScrollArea>
        </Tabs>
      )}
    </>
  );
  
  const renderQuantityStep = () => {
    if (!selectedFood) return null;
    return (
    <>
      <DialogHeader>
        <div className='flex items-center gap-2'>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedFood(null)}>
                <ArrowLeft className="h-4 w-4" />
            </Button>
            <div>
                <DialogTitle>{selectedFood.name}</DialogTitle>
                <DialogDescription>
                Specify the quantity and serving size.
                </DialogDescription>
            </div>
        </div>
      </DialogHeader>
      <div className="grid grid-cols-2 gap-4 py-4">
        <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
             <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => handleQuantityChange(-0.5)}>
                    <Minus className="h-4 w-4" />
                </Button>
                <Input 
                    id="quantity"
                    type="number"
                    value={quantity}
                    readOnly
                    className="text-center font-bold text-lg"
                />
                <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => handleQuantityChange(0.5)}>
                    <Plus className="h-4 w-4" />
                </Button>
            </div>
        </div>
        <div className="space-y-2">
            <Label htmlFor="serving">Serving</Label>
            <Select value={selectedServing} onValueChange={setSelectedServing}>
                <SelectTrigger id="serving">
                    <SelectValue placeholder="Select a serving" />
                </SelectTrigger>
                <SelectContent>
                    {selectedFood.servingSizes?.map(serving => (
                        <SelectItem key={serving.size} value={serving.size}>
                            {serving.size} ({Math.round(serving.calories)} kcal)
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
      </div>
      <DialogFooter>
        <Button onClick={handleAddMealClick}>Add Meal to Log</Button>
      </DialogFooter>
    </>
    )
  }

  return (
    <>
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        {selectedFood ? renderQuantityStep() : renderSearchStep()}
      </DialogContent>
    </Dialog>
    {warning && (
        <AlertDialog open={!!warning} onOpenChange={() => setWarning(null)}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className="flex items-center gap-2">
                        <AlertTriangle className="text-destructive h-6 w-6" />
                        Potential Issue Detected
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {warning.message}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={() => setWarning(null)}>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={proceedWithAddingMeal}>Add Anyway</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )}
    </>
  );
}
