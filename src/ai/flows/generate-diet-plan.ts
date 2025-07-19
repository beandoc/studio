
'use server';

/**
 * @fileOverview Generates a personalized 7-day diet plan based on ICMR-NIN guidelines.
 * This flow combines AI creativity with programmatic structure to ensure balanced, varied, and palatable meals.
 * The AI's role is to suggest a diverse pool of suitable food items. The code then constructs the daily
 * meals according to the "My Plate for the Day" principle, ensuring a healthy balance of food groups.
 *
 * - generateDietPlan - A function that generates the diet plan.
 * - GenerateDietPlanInput - The input type for the generateDietPlan function.
 * - GenerateDietPlanOutput - The return type for the generateDietPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { FoodService, getFoodService } from '@/lib/food-service';
import { MealCategoryEnum, type MealCategory, type FoodItem, type FoodGroup } from '@/lib/food-data';

const GenerateDietPlanInputSchema = z.object({
  healthRequirements: z
    .string()
    .describe('Specific health requirements for the user, e.g., potassium levels, protein restrictions, fluid intake limits.'),
  preferences: z
    .string()
    .describe('Dietary preferences of the user, e.g., vegetarian, low-sodium, favorite foods, foods to avoid.'),
  meals: z.array(z.string()).describe("Array of meals to generate, e.g., ['breakfast', 'lunch', 'dinner', 'morning snack']"),
  dailyCalorieGoal: z.number().optional().describe("User's daily calorie goal in kcal."),
  dailyProteinGoal: z.number().optional().describe("User's daily protein goal in grams."),
  categoryOverrides: z.record(z.array(MealCategoryEnum)).optional().describe("A map of food slugs to their user-defined meal categories."),
  aliasOverrides: z.record(z.array(z.string())).optional().describe("A map of food slugs to their user-defined aliases."),
});
export type GenerateDietPlanInput = z.infer<typeof GenerateDietPlanInputSchema>;


const AiSuggestedFoodItemSchema = z.object({
    name: z.string().describe("Name of the food item. This MUST be a name chosen directly from the provided food list."),
});

const AiResponseSchema = z.object({
    suggested_foods: z.array(AiSuggestedFoodItemSchema).describe("A flat list of 25-35 varied food items suitable for the user's weekly plan, based on their profile. Do not categorize them by day or meal."),
});


const MealDetailsSchema = z.object({
    name: z.string(),
    calories: z.number(),
    servingSize: z.string(),
});

const MealSchema = z.object({
    type: z.enum(["breakfast", "lunch", "dinner", "morning snack", "afternoon snack", "evening snack"]),
    items: z.array(MealDetailsSchema),
});

const DailyPlanSchema = z.object({
    day: z.string(),
    meals: z.array(MealSchema),
    notes: z.string().optional(),
});

const GenerateDietPlanOutputSchema = z.object({
    plan: z.array(DailyPlanSchema)
});
export type GenerateDietPlanOutput = z.infer<typeof GenerateDietPlanOutputSchema>;


export async function generateDietPlan(input: GenerateDietPlanInput): Promise<GenerateDietPlanOutput> {
  return generateDietPlanFlow(input);
}

// Helper function to shuffle an array
const shuffleArray = <T>(array: T[]): T[] => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const generateDietPlanFlow = ai.defineFlow(
  {
    name: 'generateDietPlanFlow',
    inputSchema: GenerateDietPlanInputSchema,
    outputSchema: GenerateDietPlanOutputSchema,
  },
  async (input) => {
    // Initialize the service to ensure data is loaded
    await FoodService.initialize();
    const userFoodService = getFoodService(input.categoryOverrides, input.aliasOverrides);
    const foodDatabase = userFoodService.getFoodDatabase();
    
    const isVegetarian = input.preferences.toLowerCase().includes('vegetarian');
    const isNonVegetarian = input.preferences.toLowerCase().includes('non-vegetarian');
    const isVegan = input.preferences.toLowerCase().includes('vegan');

    let relevantFoods: FoodItem[] = foodDatabase;
    if(isVegan) {
      relevantFoods = foodDatabase.filter(food => 
          food.foodGroup !== 'Meat' && 
          food.foodGroup !== 'Fish & Seafood' && 
          food.foodGroup !== 'Eggs' &&
          food.foodGroup !== 'Cheese, Milk & Dairy'
      );
    } else if (isVegetarian && !isNonVegetarian) {
        relevantFoods = foodDatabase.filter(food => 
            food.foodGroup !== 'Meat' && 
            food.foodGroup !== 'Fish & Seafood'
        );
    }
    
    const foodListForPrompt = relevantFoods.map(food => `${food.name} (calories: ${food.nutritionFacts.calories}, protein: ${food.nutritionFacts.protein.value}g)`).join('; ');

    const prompt = ai.definePrompt({
      name: 'generateDietPlanPrompt',
      model: 'googleai/gemini-1.5-flash-latest',
      output: {schema: AiResponseSchema},
      prompt: `You are an expert dietitian creating a list of suitable foods for a 7-day diet plan based on Indian nutritional guidelines.

      **USER PROFILE:**
      - Health Requirements: ${input.healthRequirements}
      - Preferences: ${input.preferences}
      - Daily Calorie Goal: ~${input.dailyCalorieGoal || 2000} kcal
      - Daily Protein Goal: ~${input.dailyProteinGoal || 70} g

      **CRITICAL INSTRUCTIONS:**
      1.  **Suggest a Food Pool:** Your only task is to suggest a list of 25-35 varied food items suitable for a full week's plan.
      2.  **Strictly Use Provided Foods:** You MUST select food items *exclusively* from the list provided at the end of this prompt. Do NOT invent or use any food not on the list.
      3.  **Ensure Variety:** Provide a wide variety of foods from different food groups (grains, proteins (pulses/legumes), vegetables, fruits, snacks) to ensure a balanced and interesting weekly plan. This is the most important instruction.
      4.  **Follow the Schema:** Your response must be a flat array of food items under the 'suggested_foods' key. Do not add any daily or meal-based structure.

      **--- AVAILABLE FOODS (with nutritional data for your reference) ---**
      [${foodListForPrompt}]
      `,
    });

    const { output: aiOutput } = await prompt({});

    if (!aiOutput || !aiOutput.suggested_foods || aiOutput.suggested_foods.length < 10) {
      throw new Error('AI failed to generate a sufficient list of food suggestions.');
    }

    const suggestedFoodItems = aiOutput.suggested_foods
        .map(item => userFoodService.findFoodBySlug(item.name.toLowerCase().replace(/\s+/g, '-')) || foodDatabase.find(f => f.name.toLowerCase() === item.name.toLowerCase()))
        .filter((item): item is FoodItem => !!item);

    const mealCategories = new Set(input.meals);
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const finalPlan: GenerateDietPlanOutput = { plan: [] };
    
    const categorizedFoods: Record<MealCategory, FoodItem[]> = {
        'Breakfast': [], 'Lunch': [], 'Dinner': [], 'Snack': [], 'Beverages': [], 'Other': [], 'Soups': [], 'Sweets, Candy & Desserts': [], 'Lunch/Dinner': [], 'Fruit': []
    };
    
    suggestedFoodItems.forEach(item => {
      const categories = Array.isArray(item.mealCategory) ? item.mealCategory : [item.mealCategory];
      categories.forEach(cat => {
        if(cat === 'Lunch/Dinner'){
            categorizedFoods['Lunch'].push(item);
            categorizedFoods['Dinner'].push(item);
        } else if (cat) {
            categorizedFoods[cat].push(item);
        }
      });
    });

    // Helper to get a random item from a list, avoiding duplicates in the same day
    const getUniqueRandomItem = (list: FoodItem[], usedInDay: Set<string>): FoodItem | undefined => {
        const availableItems = shuffleArray(list.filter(item => !usedInDay.has(item.slug)));
        return availableItems[0];
    };

    const getMainMealComponent = (foodGroup: FoodGroup, dayFoods: Set<string>, category: MealCategory): FoodItem | undefined => {
        const foods = shuffleArray(categorizedFoods[category].filter(f => f.foodGroup === foodGroup && !dayFoods.has(f.slug)));
        return foods[0];
    }
    
    for (const day of days) {
        const dailyPlan: DailyPlanSchema = { day, meals: [] };
        const usedToday = new Set<string>();

        if (mealCategories.has('breakfast')) {
            const breakfastItem = getUniqueRandomItem(categorizedFoods['Breakfast'], usedToday);
            if (breakfastItem) {
                dailyPlan.meals.push({ type: 'breakfast', items: [breakfastItem] });
                usedToday.add(breakfastItem.slug);
            }
        }
        
        if (mealCategories.has('lunch')) {
            const lunchItems: FoodItem[] = [];
            const mainCourse = getMainMealComponent('Beans & Legumes', usedToday, 'Lunch') || getMainMealComponent('Meat', usedToday, 'Lunch') || getMainMealComponent('Fish & Seafood', usedToday, 'Lunch');
            if (mainCourse) lunchItems.push(mainCourse);

            const side = getMainMealComponent('Breads & Cereals', usedToday, 'Lunch') || getMainMealComponent('Pasta, Rice & Noodles', usedToday, 'Lunch');
            if (side) lunchItems.push(side);
            
            if(lunchItems.length > 0) {
              dailyPlan.meals.push({ type: 'lunch', items: lunchItems });
              lunchItems.forEach(i => usedToday.add(i.slug));
            }
        }
        
        if (mealCategories.has('dinner')) {
             const dinnerItems: FoodItem[] = [];
            const mainCourse = getMainMealComponent('Beans & Legumes', usedToday, 'Dinner') || getMainMealComponent('Meat', usedToday, 'Dinner') || getMainMealComponent('Fish & Seafood', usedToday, 'Dinner');
            if (mainCourse) dinnerItems.push(mainCourse);

            const side = getMainMealComponent('Breads & Cereals', usedToday, 'Dinner') || getMainMealComponent('Pasta, Rice & Noodles', usedToday, 'Dinner');
            if (side) dinnerItems.push(side);
            
            if(dinnerItems.length > 0) {
              dailyPlan.meals.push({ type: 'dinner', items: dinnerItems });
              dinnerItems.forEach(i => usedToday.add(i.slug));
            }
        }

        ['morning snack', 'afternoon snack', 'evening snack'].forEach(snackType => {
            if (mealCategories.has(snackType)) {
                const snackItem = getUniqueRandomItem([...categorizedFoods['Snack'], ...categorizedFoods['Fruit']], usedToday);
                if (snackItem) {
                    dailyPlan.meals.push({ type: snackType as any, items: [snackItem] });
                    usedToday.add(snackItem.slug);
                }
            }
        });

        // Convert FoodItem to MealDetailsSchema
        dailyPlan.meals = dailyPlan.meals.map(meal => ({
            ...meal,
            items: meal.items.map(item => ({
                name: item.name,
                calories: item.nutritionFacts.calories,
                servingSize: item.nutritionFacts.servingSize,
            })),
        }));

        finalPlan.plan.push(dailyPlan);
    }
    
    const hasContent = finalPlan.plan.some(day => day.meals.length > 0 && day.meals.some(meal => meal.items.length > 0));
    if (!hasContent) {
        throw new Error("Failed to construct a valid diet plan from the AI's suggestions. The AI may not have provided enough variety.");
    }

    return finalPlan;
  }
);
