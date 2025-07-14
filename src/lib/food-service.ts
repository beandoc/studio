
import { FoodItem, MealCategory } from '@/lib/food-data';

import data1 from '@/lib/food-data-split/food-data-1.json';
import data2 from '@/lib/food-data-split/food-data-2.json';
import data3 from '@/lib/food-data-split/food-data-3.json';
import data4 from '@/lib/food-data-split/food-data-4.json';
import data5 from '@/lib/food-data-split/food-data-5.json';
import dairyAndEggsData from '@/lib/food-data-split/dairy-and-eggs.json';
import nutsAndSeedsData from '@/lib/food-data-split/nuts-and-seeds.json';
import fruitsData from '@/lib/food-data-split/fruits.json';

const baseFoodDatabase: FoodItem[] = (() => {
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
    return Array.from(new Map(allData.map(item => [item.slug, item])).values());
})();

export class FoodService {
  private foodDatabase: FoodItem[];

  constructor(
    categoryOverrides: Record<string, MealCategory[]> = {},
    aliasOverrides: Record<string, string[]> = {}
  ) {
    this.foodDatabase = this.applyOverrides(baseFoodDatabase, categoryOverrides, aliasOverrides);
  }

  private applyOverrides(
    baseData: FoodItem[],
    catOverrides: Record<string, MealCategory[]>,
    aliasOverrides: Record<string, string[]>
  ): FoodItem[] {
    return baseData.map(item => ({
      ...item,
      mealCategory: catOverrides[item.slug] || item.mealCategory,
      aliases: aliasOverrides[item.slug] || item.aliases,
    }));
  }

  public getFoodDatabase(): FoodItem[] {
    return this.foodDatabase;
  }
  
  public findFoodBySlug(slug: string): FoodItem | undefined {
    return this.getFoodDatabase().find(item => item.slug === slug);
  }
}

export const foodService = new FoodService();
