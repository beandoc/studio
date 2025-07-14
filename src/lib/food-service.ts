
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
        // This is a fallback for server-side rendering where initialize() might not have been called.
        // It's not ideal but prevents crashes. The client-side will be fast.
        console.warn("FoodService used before explicit initialization.");
    }
    this.foodDatabase = this.applyOverrides(baseFoodDatabase, categoryOverrides, aliasOverrides);
  }

  public static async initialize() {
    if (isInitialized) {
      return;
    }
    
    const [
        data1, data2, data3, data4, data5, 
        dairyAndEggsData, nutsAndSeedsData, fruitsData
    ] = await Promise.all([
        import('@/lib/food-data-split/food-data-1.json'),
        import('@/lib/food-data-split/food-data-2.json'),
        import('@/lib/food-data-split/food-data-3.json'),
        import('@/lib/food-data-split/food-data-4.json'),
        import('@/lib/food-data-split/food-data-5.json'),
        import('@/lib/food-data-split/dairy-and-eggs.json'),
        import('@/lib/food-data-split/nuts-and-seeds.json'),
        import('@/lib/food-data-split/fruits.json')
    ]);

    const allData = [
      ...data1.default,
      ...data2.default,
      ...data3.default,
      ...data4.default,
      ...data5.default,
      ...dairyAndEggsData.default,
      ...nutsAndSeedsData.default,
      ...fruitsData.default,
    ];
    
    // Using a Map to ensure unique items by slug, preventing duplicates.
    const foodMap = new Map<string, FoodItem>();
    allData.forEach(item => {
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

// We now export a function to get an instance, but initialization is separate.
export const getFoodService = (
  categoryOverrides?: Record<string, MealCategory[]>,
  aliasOverrides?: Record<string, string[]>
) => {
  return new FoodService(categoryOverrides, aliasOverrides);
};

// A default instance for cases where overrides are not needed, mainly for server components.
export const foodService = new FoodService();
