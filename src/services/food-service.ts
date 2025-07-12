
import { FoodItem, MealCategory } from '@/lib/food-data';

import data1 from '@/lib/food-data-split/food-data-1.json';
import data2 from '@/lib/food-data-split/food-data-2.json';
import data3 from '@/lib/food-data-split/food-data-3.json';
import data4 from '@/lib/food-data-split/food-data-4.json';
import data5 from '@/lib/food-data-split/food-data-5.json';
import dairyAndEggsData from '@/lib/food-data-split/dairy-and-eggs.json';
import nutsAndSeedsData from '@/lib/food-data-split/nuts-and-seeds.json';
import fruitsData from '@/lib/food-data-split/fruits.json';

class FoodService {
  private static instance: FoodService;
  private foodDatabase: FoodItem[];
  private categoryOverrides: Record<string, MealCategory[]> = {};

  private constructor() {
    this.foodDatabase = this.loadInitialData();
  }

  private loadInitialData(): FoodItem[] {
    return [
        ...(data1 as FoodItem[]),
        ...(data2 as FoodItem[]),
        ...(data3 as FoodItem[]),
        ...(data4 as FoodItem[]),
        ...(data5 as FoodItem[]),
        ...(dairyAndEggsData as FoodItem[]),
        ...(nutsAndSeedsData as FoodItem[]),
        ...(fruitsData as FoodItem[]),
    ];
  }

  public static getInstance(): FoodService {
    if (!FoodService.instance) {
      FoodService.instance = new FoodService();
    }
    return FoodService.instance;
  }

  public getFoodDatabase(): FoodItem[] {
    // Apply overrides to the base data
    return this.foodDatabase.map(item => {
        if (this.categoryOverrides[item.slug]) {
            return {
                ...item,
                mealCategory: this.categoryOverrides[item.slug],
            };
        }
        return item;
    });
  }
  
  public setCategoryOverrides(overrides: Record<string, MealCategory[]>) {
    this.categoryOverrides = overrides;
    // No need to reload the whole database, just apply overrides on get
  }

  public findFoodBySlug(slug: string): FoodItem | undefined {
    // Important: get the database with overrides applied
    return this.getFoodDatabase().find(item => item.slug === slug);
  }
}

export const foodService = FoodService.getInstance();
