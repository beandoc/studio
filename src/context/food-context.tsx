
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { FoodItem, MealCategory } from '@/lib/food-data';
import { FoodService, foodService as staticFoodService } from '@/lib/food-service';
import { useToast } from '@/hooks/use-toast';

type FoodDataContextType = {
  foodDatabase: FoodItem[];
  findFoodBySlug: (slug: string) => FoodItem | undefined;
  updateMealCategories: (slug: string, categories: MealCategory[]) => void;
  getCategoryOverrides: () => Record<string, MealCategory[]>;
  updateAliases: (slug: string, aliases: string[]) => void;
  getAliasOverrides: () => Record<string, string[]>;
};

const FoodDataContext = createContext<FoodDataContextType | undefined>(undefined);

export const FoodDataProvider = ({ children }: { children: ReactNode }) => {
  const [foodDatabase, setFoodDatabase] = useState<FoodItem[]>([]);
  const [categoryOverrides, setCategoryOverrides] = useState<Record<string, MealCategory[]>>({});
  const [aliasOverrides, setAliasOverrides] = useState<Record<string, string[]>>({});
  const { toast } = useToast();

  useEffect(() => {
    // This effect runs once on mount to load data from localStorage
    // and initialize the stateful FoodService for the UI.
    let storedCatOverrides: Record<string, MealCategory[]> = {};
    let storedAliasOverrides: Record<string, string[]> = {};
    
    try {
      const storedCategories = localStorage.getItem('foodCategoryOverrides');
      if (storedCategories) {
        storedCatOverrides = JSON.parse(storedCategories);
      }
      const storedAliases = localStorage.getItem('foodAliasOverrides');
      if (storedAliases) {
        storedAliasOverrides = JSON.parse(storedAliases);
      }
    } catch (e) {
      console.error("Failed to parse overrides from localStorage", e);
    }
    
    setCategoryOverrides(storedCatOverrides);
    setAliasOverrides(storedAliasOverrides);
    
    // Instantiate a FoodService with the loaded overrides for the UI
    const userSpecificFoodService = new FoodService(storedCatOverrides, storedAliasOverrides);
    setFoodDatabase(userSpecificFoodService.getFoodDatabase());
  }, []);

  const updateMealCategories = useCallback((slug: string, categories: MealCategory[]) => {
    const newOverrides = { ...categoryOverrides, [slug]: categories };
    setCategoryOverrides(newOverrides);
    try {
      localStorage.setItem('foodCategoryOverrides', JSON.stringify(newOverrides));
      // Update the UI's food database instance with the new overrides
      const updatedService = new FoodService(newOverrides, aliasOverrides);
      setFoodDatabase(updatedService.getFoodDatabase());
      toast({
        title: "Categories Updated",
        description: "Your changes have been saved locally.",
      });
    } catch (e) {
      console.error("Failed to save category overrides to localStorage", e);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not save your category changes.",
      });
    }
  }, [categoryOverrides, aliasOverrides, toast]);

  const updateAliases = useCallback((slug: string, aliases: string[]) => {
    const newOverrides = { ...aliasOverrides, [slug]: aliases };
    setAliasOverrides(newOverrides);
    try {
      localStorage.setItem('foodAliasOverrides', JSON.stringify(newOverrides));
      // Update the UI's food database instance with the new overrides
      const updatedService = new FoodService(categoryOverrides, newOverrides);
      setFoodDatabase(updatedService.getFoodDatabase());
       toast({
        title: "Aliases Updated",
        description: `Aliases for the item have been saved locally.`,
      });
    } catch (e) {
      console.error("Failed to save alias overrides to localStorage", e);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Could not save your alias changes.",
      });
    }
  }, [aliasOverrides, categoryOverrides, toast]);

  const findFoodBySlug = useCallback((slug: string): FoodItem | undefined => {
    return foodDatabase.find(item => item.slug === slug);
  }, [foodDatabase]);

  const getCategoryOverrides = useCallback(() => categoryOverrides, [categoryOverrides]);
  const getAliasOverrides = useCallback(() => aliasOverrides, [aliasOverrides]);

  return (
    <FoodDataContext.Provider value={{ foodDatabase, findFoodBySlug, updateMealCategories, getCategoryOverrides, updateAliases, getAliasOverrides }}>
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
