
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { FoodItem, MealCategory } from '@/lib/food-data';
import { foodService } from '@/services/food-service';
import { useToast } from '@/hooks/use-toast';

type FoodDataContextType = {
  foodDatabase: FoodItem[];
  findFoodBySlug: (slug: string) => FoodItem | undefined;
  updateMealCategories: (slug: string, categories: MealCategory[]) => void;
};

const FoodDataContext = createContext<FoodDataContextType | undefined>(undefined);

export const FoodDataProvider = ({ children }: { children: ReactNode }) => {
  const [foodDatabase, setFoodDatabase] = useState<FoodItem[]>([]);
  const [categoryOverrides, setCategoryOverrides] = useState<Record<string, MealCategory[]>>({});
  const { toast } = useToast();

  // Load base data and overrides from localStorage on initial mount
  useEffect(() => {
    const baseData = foodService.getFoodDatabase();
    let storedOverrides: Record<string, MealCategory[]> = {};
    
    try {
      const stored = localStorage.getItem('foodCategoryOverrides');
      if (stored) {
        storedOverrides = JSON.parse(stored);
        foodService.setCategoryOverrides(storedOverrides); // Sync service
      }
    } catch (e) {
      console.error("Failed to parse category overrides from localStorage", e);
    }
    
    setCategoryOverrides(storedOverrides);
    setFoodDatabase(foodService.getFoodDatabase()); // Get data with overrides applied
  }, []);

  const updateMealCategories = useCallback((slug: string, categories: MealCategory[]) => {
    const newOverrides = { ...categoryOverrides, [slug]: categories };
    setCategoryOverrides(newOverrides);
    
    try {
      localStorage.setItem('foodCategoryOverrides', JSON.stringify(newOverrides));
      foodService.setCategoryOverrides(newOverrides); // Update singleton
      setFoodDatabase(foodService.getFoodDatabase()); // Refresh state with new overrides
      toast({
        title: "Categories Updated",
        description: "Your changes have been saved locally.",
      });
    } catch (e) {
      console.error("Failed to save category overrides to localStorage", e);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not save your changes.",
      });
    }
  }, [categoryOverrides, toast]);

  const findFoodBySlug = useCallback((slug: string): FoodItem | undefined => {
    return foodDatabase.find(item => item.slug === slug);
  }, [foodDatabase]);

  return (
    <FoodDataContext.Provider value={{ foodDatabase, findFoodBySlug, updateMealCategories }}>
      {children}
    </FoodDataContext.Provider>
  );
};

export const useFoodData = () => {
  const context = useContext(FoodDataContext);
  if (context === undefined) {
    throw new Error('useFoodData must be used within a FoodDataProvider');
  }
  return context;
};
