
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

  private constructor() {
    this.foodDatabase = this.loadInitialData();
  }

  private loadInitialData(): FoodItem[] {
    const allData = [
        ...(data1 as FoodItem[]),
        ...(data2 as FoodItem[]),
        ...(data3 as FoodItem[]),
        ...(data4 as FoodItem[]),
        ...(data5 as FoodItem[]),
        ...(dairyAndEggsData as FoodItem[]),
        ...(nutsAndSeedsData as FoodItem[]),
        ...(fruitsData as FoodItem[]),
    ];
    // This removes duplicates by slug, preferring the last one found.
    const uniqueData = Array.from(new Map(allData.map(item => [item.slug, item])).values());
    return uniqueData;
  }

  public static getInstance(): FoodService {
    if (!FoodService.instance) {
      FoodService.instance = new FoodService();
    }
    return FoodService.instance;
  }

  public getFoodDatabase(): FoodItem[] {
    return this.foodDatabase;
  }
  
  public findFoodBySlug(slug: string): FoodItem | undefined {
    return this.getFoodDatabase().find(item => item.slug === slug);
  }
}

export const foodService = FoodService.getInstance();
