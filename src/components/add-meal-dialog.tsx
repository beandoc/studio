
"use client";

import { useState, useEffect, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus, ArrowLeft, Minus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import type { DailyLog, MealCategory, LoggedMeal } from '@/app/my-meal-tracker/page';
import { useFoodData } from '@/context/food-context';
import type { FoodItem } from '@/lib/food-data';

type AddMealDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddMeal: (meal: Omit<LoggedMeal, 'id'>) => void;
  category: MealCategory;
  dailyLog: DailyLog;
};

export default function AddMealDialog({ isOpen, onClose, onAddMeal, category, dailyLog }: AddMealDialogProps) {
  const { foodDatabase } = useFoodData();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedServing, setSelectedServing] = useState<string>("");

  const frequentItems = useMemo(() => {
    const allItemsInCategory = dailyLog.meals[category];
    if (!allItemsInCategory) return [];
    
    const itemCounts: Record<string, number> = {};
    allItemsInCategory.forEach(item => {
      const baseName = item.name.replace(/ \(.*/, ''); // remove quantity specifier
      itemCounts[baseName] = (itemCounts[baseName] || 0) + 1;
    });

    const sortedItems = Object.entries(itemCounts)
      .sort(([, a], [, b]) => b - a)
      .map(([name]) => foodDatabase.find(food => food.name === name))
      .filter((item): item is FoodItem => !!item);
      
    return sortedItems.slice(0, 5);
  }, [dailyLog, category, foodDatabase]);


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
  
  const handleSelectFood = (food: FoodItem) => {
    setSelectedFood(food);
    // Set default serving size to the primary one
    setSelectedServing(food.nutritionFacts.servingSize);
    setQuantity(1);
  };

  const handleAddMealClick = () => {
    if (!selectedFood) return;

    const servingSizeData = selectedFood.servingSizes.find(s => s.size === selectedServing);
    const primaryServingSize = selectedFood.servingSizes[0] || { size: selectedFood.nutritionFacts.servingSize, calories: selectedFood.nutritionFacts.calories};
    const primaryNutrients = selectedFood.nutritionFacts;

    let baseCalories, baseProtein, baseFat, baseCarbs;

    // Use primary serving size as the base for ratio calculation
    const baseNutrientCalories = primaryServingSize.calories;
    
    if(servingSizeData && baseNutrientCalories > 0) {
        // Calculate based on selected serving size
        const ratio = servingSizeData.calories / baseNutrientCalories;
        baseCalories = servingSizeData.calories;
        baseProtein = primaryNutrients.protein.value * ratio;
        baseFat = primaryNutrients.totalFat.value * ratio;
        baseCarbs = primaryNutrients.totalCarbohydrate.value * ratio;
    } else {
        // Fallback to primary nutrients if something goes wrong or calories are 0
        baseCalories = primaryNutrients.calories;
        baseProtein = primaryNutrients.protein.value;
        baseFat = primaryNutrients.totalFat.value;
        baseCarbs = primaryNutrients.totalCarbohydrate.value;
    }

    const numQuantity = quantity;

    onAddMeal({
      name: `${selectedFood.name} (${numQuantity}x ${selectedServing})`,
      calories: baseCalories * numQuantity,
      protein: baseProtein * numQuantity,
      fat: baseFat * numQuantity,
      carbs: baseCarbs * numQuantity,
      category: category,
    });
    handleClose();
  };

  const itemsToShow = searchTerm.length > 1 ? searchResults : frequentItems;

  const handleClose = () => {
    setSelectedFood(null);
    setSearchTerm('');
    onClose();
  }
  
  const handleQuantityChange = (amount: number) => {
    setQuantity(prev => {
        const newValue = prev + amount;
        return newValue < 0.5 ? 0.5 : newValue;
    });
  }

  const renderSearchStep = () => (
    <>
      <DialogHeader>
        <DialogTitle>Add to {category}</DialogTitle>
        <DialogDescription>
          Search for a food item or select from your frequent items.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <Input
          placeholder="Search for a food..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ScrollArea className="h-72">
          <div className="pr-4 space-y-2">
              {itemsToShow.length > 0 ? (
                   itemsToShow.map(food => (
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
                      {searchTerm ? 'No results found.' : 'No frequent items yet for this category.'}
                  </p>
              )}
          </div>
        </ScrollArea>
      </div>
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
                    {selectedFood.servingSizes.map(serving => (
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
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        {selectedFood ? renderQuantityStep() : renderSearchStep()}
      </DialogContent>
    </Dialog>
  );
}
