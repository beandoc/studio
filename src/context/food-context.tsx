
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { FoodItem, MealCategory } from '@/lib/food-data';
import { foodService } from '@/services/food-service';
import { useToast } from '@/hooks/use-toast';

type FoodDataContextType = {
  foodDatabase: FoodItem[];
  findFoodBySlug: (slug: string) => FoodItem | undefined;
  updateMealCategories: (slug: string, categories: MealCategory[]) => void;
  updateAliases: (slug: string, aliases: string[]) => void;
};

const FoodDataContext = createContext<FoodDataContextType | undefined>(undefined);

export const FoodDataProvider = ({ children }: { children: ReactNode }) => {
  const [foodDatabase, setFoodDatabase] = useState<FoodItem[]>([]);
  const [categoryOverrides, setCategoryOverrides] = useState<Record<string, MealCategory[]>>({});
  const [aliasOverrides, setAliasOverrides] = useState<Record<string, string[]>>({});
  const { toast } = useToast();

  const applyOverrides = useCallback((baseData: FoodItem[], catOverrides: Record<string, MealCategory[]>, aliasOverrides: Record<string, string[]>) => {
    return baseData.map(item => ({
      ...item,
      mealCategory: catOverrides[item.slug] || item.mealCategory,
      aliases: aliasOverrides[item.slug] || item.aliases,
    }));
  }, []);

  useEffect(() => {
    const baseData = foodService.getFoodDatabase();
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
    setFoodDatabase(applyOverrides(baseData, storedCatOverrides, storedAliasOverrides));
  }, [applyOverrides]);

  const updateMealCategories = useCallback((slug: string, categories: MealCategory[]) => {
    const newOverrides = { ...categoryOverrides, [slug]: categories };
    setCategoryOverrides(newOverrides);
    try {
      localStorage.setItem('foodCategoryOverrides', JSON.stringify(newOverrides));
      setFoodDatabase(applyOverrides(foodService.getFoodDatabase(), newOverrides, aliasOverrides));
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
  }, [categoryOverrides, aliasOverrides, applyOverrides, toast]);

  const updateAliases = useCallback((slug: string, aliases: string[]) => {
    const newOverrides = { ...aliasOverrides, [slug]: aliases };
    setAliasOverrides(newOverrides);
    try {
      localStorage.setItem('foodAliasOverrides', JSON.stringify(newOverrides));
      setFoodDatabase(applyOverrides(foodService.getFoodDatabase(), categoryOverrides, newOverrides));
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
  }, [aliasOverrides, categoryOverrides, applyOverrides, toast]);

  const findFoodBySlug = useCallback((slug: string): FoodItem | undefined => {
    return foodDatabase.find(item => item.slug === slug);
  }, [foodDatabase]);

  return (
    <FoodDataContext.Provider value={{ foodDatabase, findFoodBySlug, updateMealCategories, updateAliases }}>
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
