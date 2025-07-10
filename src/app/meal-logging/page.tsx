
"use client";

import { useState, useEffect, Suspense, useMemo } from "react";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlusCircle, Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
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
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { Progress } from "@/components/ui/progress";

type Meal = {
  id: string;
  name: string;
  portion: string;
  calories: number;
  carbs: number;
  fat: number;
  protein: number;
};

type MealCategory = "Breakfast" | "Lunch" | "Dinner" | "Morning Snack" | "Afternoon Snack" | "Evening Snack";

const initialMeals: Record<MealCategory, Meal[]> = {
  Breakfast: [
    { id: "b1", name: "Oatmeal with berries", calories: 350, portion: "1 cup", carbs: 66, fat: 7, protein: 17 },
  ],
  Lunch: [
    { id: "l1", name: "Grilled Chicken Salad", calories: 450, portion: "1 large bowl", carbs: 10, fat: 20, protein: 40 },
  ],
  Dinner: [],
  "Morning Snack": [],
  "Afternoon Snack": [
     { id: "s1", name: "Apple slices", calories: 95, portion: "1 medium apple", carbs: 25, fat: 0.3, protein: 0.5 },
  ],
  "Evening Snack": [],
};

const mealCategories: MealCategory[] = ["Breakfast", "Lunch", "Dinner", "Morning Snack", "Afternoon Snack", "Evening Snack"];
const recommendedMacros = { carbs: 55, fat: 25, protein: 20 };
const calorieGoal = 2000;
const COLORS = {
    carbs: "hsl(var(--chart-1))",
    fat: "hsl(var(--chart-2))",
    protein: "hsl(var(--chart-3))",
};

function NutrientSummary({ meals }: { meals: Record<MealCategory, Meal[]> }) {
    const totals = useMemo(() => {
        return Object.values(meals).flat().reduce((acc, meal) => {
            acc.calories += meal.calories;
            acc.carbs += meal.carbs;
            acc.fat += meal.fat;
            acc.protein += meal.protein;
            return acc;
        }, { calories: 0, carbs: 0, fat: 0, protein: 0 });
    }, [meals]);

    const totalMacros = totals.carbs + totals.fat + totals.protein;
    
    const actualMacroDistribution = [
        { name: 'Carbs', value: totalMacros > 0 ? (totals.carbs / totalMacros) * 100 : 0 },
        { name: 'Fat', value: totalMacros > 0 ? (totals.fat / totalMacros) * 100 : 0 },
        { name: 'Protein', value: totalMacros > 0 ? (totals.protein / totalMacros) * 100 : 0 },
    ];
    
    const recommendedMacroDistribution = [
        { name: 'Carbs', value: recommendedMacros.carbs },
        { name: 'Fat', value: recommendedMacros.fat },
        { name: 'Protein', value: recommendedMacros.protein },
    ];
    
    const calorieProgress = (totals.calories / calorieGoal) * 100;

    return (
        <Card className="mb-8">
            <CardContent className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                <div className="flex flex-col items-center gap-4 text-center md:border-r md:pr-6">
                    <div className="w-full">
                      <p className="text-2xl font-bold">{Math.round(totals.calories)} <span className="text-sm text-muted-foreground">/ {calorieGoal} kcal</span></p>
                       <Progress value={calorieProgress} className="h-2 mt-2" />
                    </div>
                </div>

                <div className="md:col-span-2">
                    <div className="grid grid-cols-3 text-center mb-4 border-b pb-4">
                        <div>
                            <p className="text-sm text-muted-foreground">Carbs</p>
                            <p className="font-bold text-lg" style={{color: COLORS.carbs}}>{totals.carbs.toFixed(0)}g</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Fat</p>
                            <p className="font-bold text-lg" style={{color: COLORS.fat}}>{totals.fat.toFixed(0)}g</p>
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Protein</p>
                            <p className="font-bold text-lg" style={{color: COLORS.protein}}>{totals.protein.toFixed(0)}g</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 h-32">
                         <div className="text-center">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={recommendedMacroDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={20} outerRadius={40} paddingAngle={2}>
                                        <Cell fill={COLORS.carbs} />
                                        <Cell fill={COLORS.fat} />
                                        <Cell fill={COLORS.protein} />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                            <p className="text-xs font-medium text-muted-foreground -mt-2">Recommended</p>
                        </div>
                        <div className="text-center">
                             <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie data={actualMacroDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={20} outerRadius={40} paddingAngle={2}>
                                        <Cell fill={COLORS.carbs} />
                                        <Cell fill={COLORS.fat} />
                                        <Cell fill={COLORS.protein} />
                                    </Pie>
                                </PieChart>
                            </ResponsiveContainer>
                             <p className="text-xs font-medium text-muted-foreground -mt-2">Actual</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

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
        <NutrientSummary meals={meals} />

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
    const [portion, setPortion] = useState('1 serving');
    const [quantity, setQuantity] = useState('1');
    const [calories, setCalories] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fat, setFat] = useState(0);
    const [protein, setProtein] = useState(0);

    const [selectedCategory, setSelectedCategory] = useState<MealCategory | null>(null);
    const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
    const [selectedServingSize, setSelectedServingSize] = useState<string | null>(null);
    const [searchResults, setSearchResults] = useState<FoodItem[]>([]);
    
    useEffect(() => {
        if (initialFoodName) {
          const foundFood = foodDatabase.find(item => item.name.toLowerCase() === initialFoodName.toLowerCase());
          if (foundFood) {
              handleSelectFood(foundFood);
          } else {
              setName(initialFoodName);
          }
        }
    }, [initialFoodName]);
    
    useEffect(() => {
        if (!selectedFood) return;

        let baseServing: { size: string, calories: number } | undefined;
        let baseNutrition = selectedFood.nutritionFacts;

        if (selectedServingSize) {
            baseServing = selectedFood.servingSizes?.find(s => s.size === selectedServingSize);
        }
        
        if (!baseServing) {
            baseServing = { size: baseNutrition.servingSize, calories: baseNutrition.calories };
        }

        const numQuantity = parseFloat(quantity) || 0;
        const servingRatio = baseNutrition.calories > 0 ? (baseServing.calories / baseNutrition.calories) : 1;
        
        const calculatedCalories = baseServing.calories * numQuantity;
        setCalories(Math.round(calculatedCalories));
        setPortion(`${numQuantity} x ${baseServing.size}`);
        
        const ratio = (calculatedCalories / baseNutrition.calories);
        
        if (isFinite(ratio)) {
            setCarbs(baseNutrition.totalCarbohydrate.value * ratio);
            setFat(baseNutrition.totalFat.value * ratio);
            setProtein(baseNutrition.protein.value * ratio);
        }

    }, [quantity, selectedServingSize, selectedFood]);


    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const query = e.target.value;
        setName(query);
        setSelectedFood(null); 
        
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
        setQuantity('1');
        setSelectedFood(food);
        const defaultServing = food.nutritionFacts.servingSize;
        setSelectedServingSize(defaultServing);
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
            portion,
            calories,
            carbs,
            fat,
            protein,
        });
        resetForm();
    };

    const resetForm = () => {
        setName('');
        setPortion('1 serving');
        setQuantity('1');
        setCalories(0);
        setCarbs(0);
        setFat(0);
        setProtein(0);
        setSelectedCategory(null);
        setSelectedFood(null);
        setSelectedServingSize(null);
    }

    const isFoodSelected = !!selectedFood;
    const availableServingSizes = useMemo(() => {
      if (!selectedFood) return [];
      const sizes = new Set<string>();
      sizes.add(selectedFood.nutritionFacts.servingSize);
      selectedFood.servingSizes?.forEach(s => sizes.add(s.size));
      return Array.from(sizes);
    }, [selectedFood]);


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
                         {isFoodSelected && availableServingSizes.length > 0 ? (
                            <Select onValueChange={handleServingSizeChange} value={selectedServingSize || ''}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select portion size" />
                                </SelectTrigger>
                                <SelectContent>
                                    {availableServingSizes.map((serving) => (
                                        <SelectItem key={serving} value={serving}>
                                            {serving}
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

                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="calories">Calories (kcal)</Label>
                        <Input id="calories" type="number" value={Math.round(calories)} onChange={(e) => setCalories(Number(e.target.value))} placeholder="e.g., 250" required disabled={isFoodSelected} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="protein">Protein (g)</Label>
                        <Input id="protein" type="number" value={protein.toFixed(1)} onChange={(e) => setProtein(Number(e.target.value))} placeholder="e.g., 20" step="0.1" required disabled={isFoodSelected} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="fat">Fat (g)</Label>
                        <Input id="fat" type="number" value={fat.toFixed(1)} onChange={(e) => setFat(Number(e.target.value))} placeholder="e.g., 10" step="0.1" required disabled={isFoodSelected} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="carbs">Carbs (g)</Label>
                        <Input id="carbs" type="number" value={carbs.toFixed(1)} onChange={(e) => setCarbs(Number(e.target.value))} placeholder="e.g., 30" step="0.1" required disabled={isFoodSelected} />
                    </div>
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

    