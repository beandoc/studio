import { FoodItem } from '@/lib/food-data';

import data1 from '@/lib/food-data-split/food-data-1.json';
import data2 from '@/lib/food-data-split/food-data-2.json';
import data3 from '@/lib/food-data-split/food-data-3.json';
import data4 from '@/lib/food-data-split/food-data-4.json';
import data5 from '@/lib/food-data-split/food-data-5.json';

class FoodService {
  private static instance: FoodService;
  private foodDatabase: FoodItem[];

  private constructor() {
    // Combine all the JSON files into one array
    this.foodDatabase = [
        ...(data1 as FoodItem[]),
        ...(data2 as FoodItem[]),
        ...(data3 as FoodItem[]),
        ...(data4 as FoodItem[]),
        ...(data5 as FoodItem[]),
    ];
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
    return this.foodDatabase.find(item => item.slug === slug);
  }
}

export const foodService = FoodService.getInstance();
