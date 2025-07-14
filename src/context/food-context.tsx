
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { FoodItem, MealCategory } from '@/lib/food-data';
import { FoodService, getFoodService } from '@/lib/food-service';
import { useToast } from '@/hooks/use-toast';

type FoodDataContextType = {
  foodDatabase: FoodItem[];
  isFoodDataLoading: boolean;
  findFoodBySlug: (slug: string) => FoodItem | undefined;
  updateMealCategories: (slug: string, categories: MealCategory[]) => void;
  getCategoryOverrides: () => Record<string, MealCategory[]>;
  updateAliases: (slug: string, aliases: string[]) => void;
  getAliasOverrides: () => Record<string, string[]>;
};

const FoodDataContext = createContext<FoodDataContextType | undefined>(undefined);

const safelyParseJSON = (jsonString: string | null, defaultValue: any) => {
    if (!jsonString) return defaultValue;
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error("Failed to parse JSON from localStorage", e);
        return defaultValue;
    }
}

export const FoodDataProvider = ({ children }: { children: ReactNode }) => {
  const [foodDatabase, setFoodDatabase] = useState<FoodItem[]>([]);
  const [isFoodDataLoading, setIsFoodDataLoading] = useState(true);
  const [categoryOverrides, setCategoryOverrides] = useState<Record<string, MealCategory[]>>({});
  const [aliasOverrides, setAliasOverrides] = useState<Record<string, string[]>>({});
  const { toast } = useToast();

  useEffect(() => {
    const loadData = async () => {
      setIsFoodDataLoading(true);
      
      let storedCatOverrides: Record<string, MealCategory[]> = {};
      let storedAliasOverrides: Record<string, string[]> = {};
      
      try {
        storedCatOverrides = safelyParseJSON(localStorage.getItem('foodCategoryOverrides'), {});
        storedAliasOverrides = safelyParseJSON(localStorage.getItem('foodAliasOverrides'), {});
      } catch (e) {
        console.error("Failed to access overrides from localStorage", e);
      }
      
      setCategoryOverrides(storedCatOverrides);
      setAliasOverrides(storedAliasOverrides);

      await FoodService.initialize();
      const userSpecificFoodService = getFoodService(storedCatOverrides, storedAliasOverrides);
      setFoodDatabase(userSpecificFoodService.getFoodDatabase());
      setIsFoodDataLoading(false);
    };
    
    loadData();
  }, []);

  const saveOverrides = useCallback((key: string, data: any) => {
      try {
          localStorage.setItem(key, JSON.stringify(data));
      } catch (e) {
          console.error(`Failed to save ${key} to localStorage`, e);
          toast({
              variant: 'destructive',
              title: 'Error Saving Customization',
              description: 'Your changes could not be saved due to a browser storage issue.'
          });
      }
  }, [toast]);

  const updateMealCategories = useCallback((slug: string, categories: MealCategory[]) => {
    const newOverrides = { ...categoryOverrides, [slug]: categories };
    setCategoryOverrides(newOverrides);
    saveOverrides('foodCategoryOverrides', newOverrides);
    const updatedService = getFoodService(newOverrides, aliasOverrides);
    setFoodDatabase(updatedService.getFoodDatabase());
    toast({
      title: "Categories Updated",
      description: "Your changes have been saved locally.",
    });
  }, [categoryOverrides, aliasOverrides, toast, saveOverrides]);

  const updateAliases = useCallback((slug: string, aliases: string[]) => {
    const newOverrides = { ...aliasOverrides, [slug]: aliases };
    setAliasOverrides(newOverrides);
    saveOverrides('foodAliasOverrides', newOverrides);
    const updatedService = getFoodService(categoryOverrides, newOverrides);
    setFoodDatabase(updatedService.getFoodDatabase());
     toast({
      title: "Aliases Updated",
      description: `Aliases for the item have been saved locally.`,
    });
  }, [aliasOverrides, categoryOverrides, toast, saveOverrides]);

  const findFoodBySlug = useCallback((slug: string): FoodItem | undefined => {
    return foodDatabase.find(item => item.slug === slug);
  }, [foodDatabase]);

  const getCategoryOverrides = useCallback(() => categoryOverrides, [categoryOverrides]);
  const getAliasOverrides = useCallback(() => aliasOverrides, [aliasOverrides]);

  return (
    <FoodDataContext.Provider value={{ foodDatabase, isFoodDataLoading, findFoodBySlug, updateMealCategories, getCategoryOverrides, updateAliases, getAliasOverrides }}>
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
