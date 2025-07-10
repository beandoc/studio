
"use client";

import { useState, useEffect, useMemo } from 'react';
import { foodDatabase, type FoodItem } from '@/lib/food-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Plus } from 'lucide-react';

type AddMealDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onAddMeal: (meal: Omit<LoggedMeal, 'id'>) => void;
  category: MealCategory;
  dailyLog: DailyLog;
};

type MealCategory = "Breakfast" | "Lunch" | "Dinner" | "Snacks";
type LoggedMeal = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  category: MealCategory;
};
type DailyLog = Record<MealCategory, LoggedMeal[]>;


export default function AddMealDialog({ isOpen, onClose, onAddMeal, category, dailyLog }: AddMealDialogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<FoodItem[]>([]);

  const frequentItems = useMemo(() => {
    const allItemsInCategory = dailyLog[category];
    const itemCounts: Record<string, number> = {};
    allItemsInCategory.forEach(item => {
      itemCounts[item.name] = (itemCounts[item.name] || 0) + 1;
    });

    const sortedItems = Object.entries(itemCounts)
      .sort(([, a], [, b]) => b - a)
      .map(([name]) => foodDatabase.find(food => food.name === name))
      .filter((item): item is FoodItem => !!item);
      
    return sortedItems.slice(0, 5);
  }, [dailyLog, category]);


  useEffect(() => {
    if (searchTerm.length > 1) {
      const results = foodDatabase.filter(food =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);
  
  const handleAdd = (food: FoodItem) => {
    onAddMeal({
      name: food.name,
      calories: food.nutritionFacts.calories,
      protein: food.nutritionFacts.protein.value,
      fat: food.nutritionFacts.totalFat.value,
      carbs: food.nutritionFacts.totalCarbohydrate.value,
      category: category,
    });
    onClose();
  };

  const itemsToShow = searchTerm.length > 1 ? searchResults : frequentItems;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
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
                                <p className="text-xs text-muted-foreground">{food.nutritionFacts.calories} kcal, {food.nutritionFacts.protein.value}g protein</p>
                            </div>
                            <Button size="sm" onClick={() => handleAdd(food)}>
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
      </DialogContent>
    </Dialog>
  );
}
