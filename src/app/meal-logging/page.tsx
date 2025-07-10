
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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Meal = {
  id: string;
  name: string;
  calories: number;
  portion: string;
};

type MealCategory = "Breakfast" | "Lunch" | "Dinner" | "Snacks";

const initialMeals: Record<MealCategory, Meal[]> = {
  Breakfast: [
    { id: "b1", name: "Oatmeal with berries", calories: 350, portion: "1 cup" },
  ],
  Lunch: [
    { id: "l1", name: "Grilled Chicken Salad", calories: 450, portion: "1 large bowl" },
  ],
  Dinner: [],
  Snacks: [
    { id: "s1", name: "Apple slices", calories: 95, portion: "1 medium apple" },
  ],
};

export default function MealLoggingPage() {
  const [meals, setMeals] = useState(initialMeals);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<MealCategory | null>(null);

  const handleAddMeal = (category: MealCategory, newMeal: Omit<Meal, 'id'>) => {
    const mealWithId = { ...newMeal, id: `${category.toLowerCase()}${Date.now()}` };
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

  const openAddMealDialog = (category: MealCategory) => {
    setCurrentCategory(category);
    setDialogOpen(true);
  };

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Daily Meal Log"
        description="Log your meals to track your nutrient intake."
      />
      <main className="flex-1 p-4 md:p-8">
        <Accordion type="multiple" defaultValue={["Breakfast", "Lunch"]} className="w-full">
          {(Object.keys(meals) as MealCategory[]).map((category) => (
            <AccordionItem value={category} key={category}>
              <AccordionTrigger className="text-lg font-medium">
                {category}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
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
                  <Button variant="outline" className="w-full" onClick={() => openAddMealDialog(category)}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Add Meal to {category}
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add a meal to {currentCategory}</DialogTitle>
                <DialogDescription>
                    Enter the details of your meal below.
                </DialogDescription>
            </DialogHeader>
            <AddMealForm
                category={currentCategory}
                onAddMeal={handleAddMeal}
                onCancel={() => setDialogOpen(false)}
            />
        </DialogContent>
      </Dialog>
    </div>
  );
}


type AddMealFormProps = {
    category: MealCategory | null;
    onAddMeal: (category: MealCategory, meal: Omit<Meal, 'id'>) => void;
    onCancel: () => void;
}

function AddMealForm({ category, onAddMeal, onCancel }: AddMealFormProps) {
    const [name, setName] = useState('');
    const [calories, setCalories] = useState('');
    const [portion, setPortion] = useState('');
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!category || !name || !calories || !portion) return;
        
        onAddMeal(category, {
            name,
            calories: parseInt(calories),
            portion,
        });

        setName('');
        setCalories('');
        setPortion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">Meal</Label>
                    <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" placeholder="e.g., Scrambled Eggs" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="calories" className="text-right">Calories</Label>
                    <Input id="calories" type="number" value={calories} onChange={(e) => setCalories(e.target.value)} className="col-span-3" placeholder="e.g., 250" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="portion" className="text-right">Portion</Label>
                    <Input id="portion" value={portion} onChange={(e) => setPortion(e.target.value)} className="col-span-3" placeholder="e.g., 2 eggs" required />
                </div>
            </div>
            <DialogFooter>
                <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>
                <Button type="submit">Add Meal</Button>
            </DialogFooter>
        </form>
    )
}
