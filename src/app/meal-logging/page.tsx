
"use client";

import { useState } from "react";
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

export default function MealLoggingPage() {
  const [meals, setMeals] = useState(initialMeals);
  const [dialogOpen, setDialogOpen] = useState(false);

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
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Add a meal</DialogTitle>
                        <DialogDescription>
                            Select the meal type and enter the details of what you ate.
                        </DialogDescription>
                    </DialogHeader>
                    <AddMealForm
                        onAddMeal={handleAddMeal}
                        onCancel={() => setDialogOpen(false)}
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
}

function AddMealForm({ onAddMeal, onCancel }: AddMealFormProps) {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [portion, setPortion] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<MealCategory | null>(null);
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCategory || !name || !calories || !portion) return;
        
        onAddMeal(selectedCategory, {
            name,
            calories: parseInt(calories),
            portion,
        });

        setName('');
        setCalories('');
        setPortion('');
        setSelectedCategory(null);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-6 py-4">
                <div>
                    <Label className="text-base font-semibold">Meal type</Label>
                    <RadioGroup 
                        className="grid grid-cols-2 gap-4 mt-2" 
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

                <div className="space-y-2">
                    <Label htmlFor="name">What did you eat?</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g., Scrambled Eggs" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="calories">Calories</Label>
                        <Input id="calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} placeholder="e.g., 250" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="portion">Portion</Label>
                        <Input id="portion" value={portion} onChange={(e) => setPortion(e.target.value)} placeholder="e.g., 2 eggs" required />
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
