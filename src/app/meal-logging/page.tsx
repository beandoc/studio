
"use client";

import { useState, useEffect, Suspense } from "react";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusCircle, Trash2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { foodDatabase, type FoodItem } from "@/lib/food-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";


type Meal = {
  id: string;
  name: string;
  calories: number;
  portion: string;
};

type MealCategory = "Breakfast" | "Lunch" | "Dinner" | "Morning Snack" | "Afternoon Snack" | "Evening Snack";

const initialMeals: Record<MealCategory, Meal[]> = {
  Breakfast: [
    { id: "b1", name: "Oatmeal with berries", calories: 350, portion: "1 cup" },
  ],
  Lunch: [
    { id: "l1", name: "Grilled Chicken Salad", calories: 450, portion: "1 large bowl" },
  ],
  Dinner: [],
  "Morning Snack": [],
  "Afternoon Snack": [
     { id: "s1", name: "Apple slices", calories: 95, portion: "1 medium apple" },
  ],
  "Evening Snack": [],
};

const mealCategories: MealCategory[] = ["Breakfast", "Lunch", "Dinner", "Morning Snack", "Afternoon Snack", "Evening Snack"];

function MealLoggingPageContent() {
  const [meals, setMeals] = useState(initialMeals);
  const [dialogOpen, setDialogOpen] = useState(false);
  const searchParams = useSearchParams();
  const foodNameFromUrl = searchParams.get('foodName');

  useEffect(() => {
    if (foodNameFromUrl) {
      setDialogOpen(true);
    }
  }, [foodNameFromUrl]);

  const handleAddMeal = (category: MealCategory, newMeal: Omit<Meal, 'id'>) => {
    const mealWithId = { ...newMeal, id: `${category.toLowerCase().replace(' ', '-')}${Date.now()}` };
    setMeals(prev => ({
      ...prev,
      [category]: [...prev[category], mealWithId],
    }));
    setDialogOpen(false);
  };

  const handleRemoveMeal = (category: MealCategory, mealId: string) => {
    setMeals(prev => ({
        ...prev,
        [category]: prev[category].filter(m => m.id !== mealId),
    }));
  };

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Daily Meal Log"
        description="Log your meals to track your nutrient intake."
      />
      <main className="flex-1 p-4 md:p-8">
        <div className="mb-6">
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogTrigger asChild>
                    <Button size="lg">
                        <PlusCircle className="mr-2 h-5 w-5" />
                        Log Meal or Snack
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[480px]">
                    <DialogHeader>
                        <DialogTitle>Add a meal</DialogTitle>
                        <DialogDescription>
                            Search for a food or enter the details manually.
                        </DialogDescription>
                    </DialogHeader>
                    <AddMealForm
                        onAddMeal={handleAddMeal}
                        onCancel={() => setDialogOpen(false)}
                        initialFoodName={foodNameFromUrl}
                    />
                </DialogContent>
            </Dialog>
        </div>

        <Accordion type="multiple" defaultValue={["Breakfast", "Lunch", "Afternoon Snack"]} className="w-full">
          {(Object.keys(meals) as MealCategory[]).map((category) => (
            <AccordionItem value={category} key={category}>
              <AccordionTrigger className="text-lg font-medium">
                {category}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  {meals[category].length > 0 ? (
                    meals[category].map((meal) => (
                      <Card key={meal.id} className="flex justify-between items-center p-4">
                        <div>
                          <p className="font-semibold">{meal.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {meal.calories} kcal - {meal.portion}
                          </p>
                        </div>
                        <Button variant="ghost" size="icon" onClick={() => handleRemoveMeal(category, meal.id)}>
                            <Trash2 className="h-4 w-4 text-destructive"/>
                        </Button>
                      </Card>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No meals logged for {category.toLowerCase()}.
                    </p>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
    </div>
  );
}


type AddMealFormProps = {
    onAddMeal: (category: MealCategory, meal: Omit<Meal, 'id'>) => void;
    onCancel: () => void;
    initialFoodName?: string | null;
}

function AddMealForm({ onAddMeal, onCancel, initialFoodName }: AddMealFormProps) {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [portion, setPortion] = useState('1 serving');
    const [quantity, setQuantity] = useState('1');

    const [selectedCategory, setSelectedCategory] = useState<MealCategory | null>(null);
    const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
    const [selectedServingSize, setSelectedServingSize] = useState<string | null>(null);

    const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
    
    useEffect(() => {
        if (initialFoodName) {
          handleSearch({ target: { value: initialFoodName } } as React.ChangeEvent<HTMLInputElement>);
        }
    }, [initialFoodName]);
    
    useEffect(() => {
        if (!selectedFood) return;

        const baseServingSize = selectedServingSize 
            ? selectedFood.servingSizes.find(s => s.size === selectedServingSize)
            : { calories: selectedFood.nutritionFacts.calories, size: selectedFood.nutritionFacts.servingSize };

        if (baseServingSize) {
            const numQuantity = parseFloat(quantity) || 0;
            const calculatedCalories = Math.round(baseServingSize.calories * numQuantity);
            setCalories(String(calculatedCalories));
            setPortion(`${numQuantity} x ${baseServingSize.size}`);
        }

    }, [quantity, selectedServingSize, selectedFood]);


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setName(query);
        setSelectedFood(null); // Clear selected food if user types again
        
        if (query.length > 1) {
            const results = foodDatabase.filter(item => 
                item.name.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(results);
        } else {
            setSearchResults([]);
        }
    };
    
    const handleSelectFood = (food: FoodItem) => {
        setName(food.name);
        setCalories(String(food.nutritionFacts.calories));
        setPortion(food.nutritionFacts.servingSize);
        setQuantity('1');
        setSelectedFood(food);
        // Use main serving size as default for the select
        setSelectedServingSize(food.nutritionFacts.servingSize);
        setSearchResults([]);
    };

    const handleServingSizeChange = (value: string) => {
        setSelectedServingSize(value);
    }
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCategory || !name || !calories || !portion) return;
        
        onAddMeal(selectedCategory, {
            name,
            calories: parseInt(calories),
            portion,
        });
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setCalories('');
        setPortion('1 serving');
        setQuantity('1');
        setSelectedCategory(null);
        setSelectedFood(null);
        setSelectedServingSize(null);
    }

    const isFoodSelected = !!selectedFood;

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-6 py-4">
                <div>
                    <Label className="text-base font-semibold">Meal type</Label>
                    <RadioGroup 
                        className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2" 
                        value={selectedCategory || ""} 
                        onValueChange={(value) => setSelectedCategory(value as MealCategory)}
                        required
                    >
                        {mealCategories.map(cat => (
                           <div key={cat} className="flex items-center space-x-2">
                             <RadioGroupItem value={cat} id={cat.toLowerCase().replace(' ', '-')}/>
                             <Label htmlFor={cat.toLowerCase().replace(' ', '-')}>{cat}</Label>
                           </div>
                        ))}
                    </RadioGroup>
                </div>

                <div className="space-y-2 relative">
                    <Label htmlFor="name">What did you eat?</Label>
                    <Input id="name" value={name} onChange={handleSearch} placeholder="e.g., Scrambled Eggs" autoComplete="off" required />
                    {searchResults.length > 0 && (
                        <Card className="absolute z-10 w-full mt-1 bg-background shadow-lg">
                            <ScrollArea className="h-48">
                                <ul className="p-2">
                                {searchResults.map(item => (
                                    <li 
                                        key={item.slug} 
                                        className="p-2 hover:bg-muted rounded-md cursor-pointer"
                                        onClick={() => handleSelectFood(item)}
                                    >
                                        {item.name}
                                    </li>
                                ))}
                                </ul>
                            </ScrollArea>
                        </Card>
                    )}
                </div>
                
                <div className={cn("grid gap-4", isFoodSelected ? 'grid-cols-2' : 'grid-cols-1')}>
                    <div className="space-y-2">
                         <Label htmlFor="portion">Portion</Label>
                         {isFoodSelected && selectedFood.servingSizes.length > 0 ? (
                            <Select onValueChange={handleServingSizeChange} value={selectedServingSize || ''}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select portion size" />
                                </SelectTrigger>
                                <SelectContent>
                                    {selectedFood.servingSizes.map((serving) => (
                                        <SelectItem key={serving.size} value={serving.size}>
                                            {serving.size}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                         ) : (
                            <Input id="portion" value={portion} onChange={(e) => setPortion(e.target.value)} placeholder="e.g., 1 cup" required disabled={isFoodSelected} />
                         )}
                    </div>
                    {isFoodSelected && (
                        <div className="space-y-2">
                            <Label htmlFor="quantity">Quantity</Label>
                            <Input id="quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="e.g., 1.5" required min="0.1" step="0.1" />
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="calories">Calories (kcal)</Label>
                    <Input id="calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="e.g., 250" required disabled={isFoodSelected} />
                </div>
            </div>
            <DialogFooter>
                <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>
                <Button type="submit">Add Meal</Button>
            </DialogFooter>
        </form>
    )
}

export default function MealLoggingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MealLoggingPageContent />
    </Suspense>
  )
}
