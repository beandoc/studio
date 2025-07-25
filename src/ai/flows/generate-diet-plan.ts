
'use server';

/**
 * @fileOverview Generates a personalized 7-day diet plan based on ICMR-NIN guidelines.
 * This flow combines AI creativity with programmatic structure to ensure balanced, varied, and palatable meals.
 * The AI's role is to suggest a diverse pool of suitable food items categorized by food group. The code then
 * constructs the daily meals according to the "My Plate for the Day" principle, ensuring a healthy balance.
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

// New AI Response schema, categorized by food group for balanced meal construction.
const AiResponseSchema = z.object({
    suggested_breakfasts: z.array(AiSuggestedFoodItemSchema).describe("A list of 7-10 varied breakfast items."),
    suggested_cereals: z.array(AiSuggestedFoodItemSchema).describe("A list of 5-7 varied cereals/grains (like rice, roti, millets)."),
    suggested_proteins: z.array(AiSuggestedFoodItemSchema).describe("A list of 7-10 varied protein sources (like dals, legumes, chicken, paneer)."),
    suggested_vegetables: z.array(AiSuggestedFoodItemSchema).describe("A list of 10-15 varied vegetable dishes."),
    suggested_snacks: z.array(AiSuggestedFoodItemSchema).describe("A list of 7-10 varied snacks."),
    suggested_fruits: z.array(AiSuggestedFoodItemSchema).describe("A list of 5-7 varied fruits."),
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

// Helper to get a unique random item from a list, using a cursor to avoid reusing the same item
const getUniqueItem = (list: FoodItem[], cursor: { index: number }): FoodItem | undefined => {
    if (!list || list.length === 0) return undefined;
    const item = list[cursor.index % list.length];
    cursor.index++;
    return item;
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
    
    const foodListForPrompt = relevantFoods.map(food => `${food.name} (food group: ${food.foodGroup})`).join('; ');

    const prompt = ai.definePrompt({
      name: 'generateDietPlanPrompt',
      model: 'googleai/gemini-1.5-flash-latest',
      output: {schema: AiResponseSchema},
      prompt: `You are an expert dietitian creating a list of suitable foods for a 7-day diet plan based on Indian nutritional guidelines and the "My Plate for the Day" principle.

      **USER PROFILE:**
      - Health Requirements: ${input.healthRequirements}
      - Preferences: ${input.preferences}
      - Daily Calorie Goal: ~${input.dailyCalorieGoal || 2000} kcal
      - Daily Protein Goal: ~${input.dailyProteinGoal || 70} g

      **CRITICAL INSTRUCTIONS:**
      1.  **Suggest Food Pools by Category:** Your only task is to suggest lists of food items for each of the specified categories in the output schema (breakfasts, cereals, proteins, vegetables, snacks, fruits).
      2.  **Ensure Variety:** This is the most important instruction. Provide a wide variety of foods within each category to ensure a balanced and interesting weekly plan. The user should not eat the same thing every day.
      3.  **Strictly Use Provided Foods:** You MUST select food items *exclusively* from the list provided at the end of this prompt. Do NOT invent or use any food not on this list.
      4.  **Follow the Schema:** Your response must adhere to the schema precisely.

      **--- AVAILABLE FOODS (with food groups for your reference) ---**
      [${foodListForPrompt}]
      `,
    });

    const { output: aiOutput } = await prompt({});
    
    if (!aiOutput) {
      throw new Error('AI failed to generate food suggestions.');
    }

    const findFood = (name: string) => userFoodService.findFoodBySlug(name.toLowerCase().replace(/\s+/g, '-')) || foodDatabase.find(f => f.name.toLowerCase() === name.toLowerCase());

    const breakfastPool = shuffleArray(aiOutput.suggested_breakfasts.map(i => findFood(i.name)).filter((i): i is FoodItem => !!i));
    const cerealPool = shuffleArray(aiOutput.suggested_cereals.map(i => findFood(i.name)).filter((i): i is FoodItem => !!i));
    const proteinPool = shuffleArray(aiOutput.suggested_proteins.map(i => findFood(i.name)).filter((i): i is FoodItem => !!i));
    const vegetablePool = shuffleArray(aiOutput.suggested_vegetables.map(i => findFood(i.name)).filter((i): i is FoodItem => !!i));
    const snackPool = shuffleArray(aiOutput.suggested_snacks.map(i => findFood(i.name)).filter((i): i is FoodItem => !!i));
    const fruitPool = shuffleArray(aiOutput.suggested_fruits.map(i => findFood(i.name)).filter((i): i is FoodItem => !!i));

    if (breakfastPool.length < 3 || cerealPool.length < 2 || proteinPool.length < 3 || vegetablePool.length < 3) {
      throw new Error("AI did not provide enough variety of items to build a balanced plan. Please try generating again.");
    }


    const mealCategories = new Set(input.meals);
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    const finalPlan: GenerateDietPlanOutput = { plan: [] };
    
    const cursors = {
        breakfast: { index: 0 },
        cereal: { index: 0 },
        protein: { index: 0 },
        vegetable: { index: 0 },
        snack: { index: 0 },
        fruit: { index: 0 },
    };
    
    for (const day of days) {
        const dailyPlan: DailyPlanSchema = { day, meals: [] };

        if (mealCategories.has('breakfast')) {
            const breakfastItem = getUniqueItem(breakfastPool, cursors.breakfast);
            if (breakfastItem) {
                dailyPlan.meals.push({ type: 'breakfast', items: [breakfastItem] });
            }
        }
        
        if (mealCategories.has('lunch')) {
            const lunchItems: FoodItem[] = [];
            const cereal = getUniqueItem(cerealPool, cursors.cereal);
            const protein = getUniqueItem(proteinPool, cursors.protein);
            const vegetable = getUniqueItem(vegetablePool, cursors.vegetable);
            
            if (cereal) lunchItems.push(cereal);
            if (protein) lunchItems.push(protein);
            if (vegetable) lunchItems.push(vegetable);
            
            if(lunchItems.length > 0) {
              dailyPlan.meals.push({ type: 'lunch', items: lunchItems });
            }
        }
        
        if (mealCategories.has('dinner')) {
            const dinnerItems: FoodItem[] = [];
            const cereal = getUniqueItem(cerealPool, cursors.cereal);
            const protein = getUniqueItem(proteinPool, cursors.protein);
            const vegetable = getUniqueItem(vegetablePool, cursors.vegetable);

            if (cereal) dinnerItems.push(cereal);
            if (protein) dinnerItems.push(protein);
            if (vegetable) dinnerItems.push(vegetable);
            
            if(dinnerItems.length > 0) {
              dailyPlan.meals.push({ type: 'dinner', items: dinnerItems });
            }
        }

        ['morning snack', 'afternoon snack', 'evening snack'].forEach(snackType => {
            if (mealCategories.has(snackType)) {
                // Alternate between snack and fruit pools for variety
                const pool = cursors.snack.index % 2 === 0 ? snackPool : fruitPool;
                const snackItem = getUniqueItem(pool, cursors.snack);
                if (snackItem) {
                    dailyPlan.meals.push({ type: snackType as any, items: [snackItem] });
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
        throw new Error("Failed to construct a valid diet plan from the AI's suggestions. The AI may not have provided enough variety, or there may be insufficient items in the food database for the requested categories.");
    }

    return finalPlan;
  }
);
