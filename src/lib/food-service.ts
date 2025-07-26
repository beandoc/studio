
import type { FoodItem, MealCategory } from '@/lib/food-data';

let baseFoodDatabase: FoodItem[] = [];
let isInitialized = false;

export class FoodService {
  private foodDatabase: FoodItem[];

  constructor(
    categoryOverrides: Record<string, MealCategory[]> = {},
    aliasOverrides: Record<string, string[]> = {}
  ) {
    if (!isInitialized) {
        console.warn("FoodService used before explicit initialization. This may lead to an empty food database on first load.");
    }
    this.foodDatabase = this.applyOverrides(baseFoodDatabase, categoryOverrides, aliasOverrides);
  }

  public static async initialize() {
    if (isInitialized) {
      return;
    }
    
    const foodData = await import('@/lib/food-data.json');
    
    // Using a Map to ensure unique items by slug, preventing duplicates.
    const foodMap = new Map<string, FoodItem>();
    foodData.default.forEach(item => {
        foodMap.set(item.slug, item as FoodItem);
    });

    baseFoodDatabase = Array.from(foodMap.values());
    isInitialized = true;
  }

  private applyOverrides(
    baseData: FoodItem[],
    catOverrides: Record<string, MealCategory[]>,
    aliasOverrides: Record<string, string[]>
  ): FoodItem[] {
    if (!baseData || baseData.length === 0) {
        return [];
    }
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

export const getFoodService = (
  categoryOverrides?: Record<string, MealCategory[]>,
  aliasOverrides?: Record<string, string[]>
) => {
  return new FoodService(categoryOverrides, aliasOverrides);
};

export const foodService = new FoodService();
