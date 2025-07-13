
'use server';

/**
 * @fileOverview Generates a personalized 7-day diet plan based on user's health requirements, preferences, and the available food database.
 * The AI's role is to select appropriate meal names from the database to form realistic, multi-item meals that meet nutritional goals.
 *
 * - generateDietPlan - A function that generates the diet plan.
 * - GenerateDietPlanInput - The input type for the generateDietPlan function.
 * - GenerateDietPlanOutput - The return type for the generateDietPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { FoodService } from '@/lib/food-service';
import { MealCategoryEnum, type FoodItem, type MealCategory } from '@/lib/food-data';

const GenerateDietPlanInputSchema = z.object({
  healthRequirements: z
    .string()
    .describe('Specific health requirements for the user, e.g., potassium levels, protein restrictions, fluid intake limits.'),
  preferences: z
    .string()
    .describe('Dietary preferences of the user, e.g., vegetarian, low-sodium, favorite foods, foods to avoid.'),
  meals: z.array(z.string()).describe("Array of meals to generate, e.g., ['breakfast', 'lunch', 'dinner', 'morning snack', 'afternoon snack', 'evening snack']"),
  dailyCalorieGoal: z.number().optional().describe("User's daily calorie goal in kcal."),
  dailyProteinGoal: z.number().optional().describe("User's daily protein goal in grams."),
  // User-specific overrides for the food database
  categoryOverrides: z.record(z.array(MealCategoryEnum)).optional().describe("A map of food slugs to their user-defined meal categories."),
  aliasOverrides: z.record(z.array(z.string())).optional().describe("A map of food slugs to their user-defined aliases."),
});
export type GenerateDietPlanInput = z.infer<typeof GenerateDietPlanInputSchema>;


const AiMealItemSchema = z.object({
    name: z.string().describe("Name of the food item. This MUST be a name chosen directly from the provided food list for the specific meal type."),
});

const AiDailyPlanSchema = z.object({
    day: z.string().describe("The day of the week (e.g., 'Monday', 'Tuesday')."),
    meals: z.array(z.object({
        type: z.enum(["breakfast", "lunch", "dinner", "morning snack", "afternoon snack", "evening snack"]),
        items: z.array(AiMealItemSchema).describe("An array of food items for this meal. Major meals like lunch and dinner should be a combination of multiple items (e.g., a grain, a protein source, a vegetable). Snacks are usually single items."),
    })).describe("An array of meals for the day."),
    notes: z.string().optional().describe("Any specific notes or tips for the day's meals."),
});

const AiResponseSchema = z.object({
    plan: z.array(AiDailyPlanSchema).describe("An array of 7 daily diet plans, one for each day of the week.")
});
type AiResponseType = z.infer<typeof AiResponseSchema>;


// This is the final, user-facing output structure, created by code, not AI.
const MealDetailsSchema = z.object({
    name: z.string(),
    calories: z.number(),
    description: z.string(),
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

const generateDietPlanFlow = ai.defineFlow(
  {
    name: 'generateDietPlanFlow',
    inputSchema: GenerateDietPlanInputSchema,
    outputSchema: GenerateDietPlanOutputSchema,
  },
  async (input) => {
    // Instantiate a FoodService with user-specific overrides
    const userFoodService = new FoodService(input.categoryOverrides, input.aliasOverrides);
    const foodDatabase = userFoodService.getFoodDatabase();
    
    // 1. Determine base dietary filter (vegetarian, vegan, etc.)
    const isVegetarian = input.preferences.toLowerCase().includes('vegetarian');
    const isNonVegetarian = input.preferences.toLowerCase().includes('non-vegetarian');
    const isVegan = input.preferences.toLowerCase().includes('vegan');

    let relevantFoods = foodDatabase;
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

    // 2. Build food lists for each specific meal type requested by the user, now including nutrition data
    const foodListsForPrompt = input.meals.map(mealType => {
      const mealTypeNormalized = mealType.toLowerCase().replace(/ /g, "") as MealCategory;

      const mealSpecificFoods = relevantFoods
        .filter(food => {
          if (!food.mealCategory) return false;
          // Handle both array and string meal categories from the database
          const categories = Array.isArray(food.mealCategory) ? food.mealCategory : [food.mealCategory];
          // Normalize categories for comparison
          const normalizedCategories = categories.map(cat => cat.toLowerCase().replace(/ /g, ""));
          return normalizedCategories.includes(mealTypeNormalized);
        })
        // Enrich the food item string with calorie and protein data
        .map(food => `${food.name} (${food.nutritionFacts.calories} kcal, ${food.nutritionFacts.protein.value}g protein)`);

      if (mealSpecificFoods.length === 0) {
        return `For the meal type "${mealType}", there are no available food items based on the user's dietary profile. Do not generate a meal for this slot.`;
      }
      
      return `For the meal type "${mealType}", you MUST choose from this list ONLY: [${mealSpecificFoods.join(', ')}]`;
    }).join('\n\n');
    

    const prompt = ai.definePrompt({
      name: 'generateDietPlanPrompt',
      input: {schema: z.any()}, // We construct the prompt manually
      output: {schema: AiResponseSchema},
      prompt: `You are an expert dietitian creating a realistic, varied, and nutritionally balanced 7-day diet plan.

      **USER PROFILE:**
      - Health Requirements: ${input.healthRequirements}
      - Preferences: ${input.preferences}
      - Daily Calorie Goal: ~${input.dailyCalorieGoal || 2000} kcal
      - Daily Protein Goal: ~${input.dailyProteinGoal || 70} g

      **CRITICAL INSTRUCTIONS:**
      1.  **Generate a Full 7-Day Plan:** You MUST create a complete diet plan for all seven days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
      2.  **Strict Food Selection:** For each meal type (e.g., breakfast, lunch), you MUST select food items *exclusively* from the specific list provided for that meal type below. Do NOT invent or use any food not on these lists. This is a strict rule.
      3.  **Create Multi-Item Meals:** For major meals like "lunch" and "dinner", combine multiple items to create a balanced meal (e.g., a grain like 'Chapati (1 no.) (147 kcal, 3.6g protein)', a protein like 'Plain dal (1 Katori) (101 kcal, 6.7g protein)', a vegetable side). Snacks can be single items. Aim for variety throughout the week. A diet should not have the same meal every day.
      4.  **Meet Nutritional Goals:** You are provided with the calorie and protein content for each food item. You MUST use this information to create a daily plan where the total calories and protein are as close as possible to the user's daily goals. A plan with only 600 calories when the goal is 2000 is not acceptable. Use snacks if needed to meet the calorie goal.
      5.  **Adhere to Schema:** Your entire response must strictly adhere to the provided JSON schema, which expects a 'plan' array containing 7 daily plans. In your output, you MUST provide the *exact* food name as it appears in the list (e.g., 'Chapati (1 no.)'). Do NOT include calorie counts or other details in the output \`name\` field.
      6.  **Plan for Requested Meals:** Create a plan for the following meal slots each day: ${input.meals.join(', ')}.

      **--- AVAILABLE FOODS PER MEAL TYPE (WITH NUTRITIONAL DATA) ---**
      ${foodListsForPrompt}
      `,
    });


    // 3. Get the meal name recommendations from the AI.
    const { output: aiOutput } = await prompt({}); // Input is now built into the prompt string itself

    if (!aiOutput || !aiOutput.plan) {
      throw new Error('AI failed to generate a diet plan structure.');
    }

    // 4. Build the final, code-verified diet plan.
    const finalPlan: GenerateDietPlanOutput = {
      plan: aiOutput.plan.map(aiDay => {
        const verifiedMeals = aiDay.meals
          .map(aiMeal => {
            if (!aiMeal || !aiMeal.items) return null;

            const verifiedItems = aiMeal.items
              .map(aiItem => {
                // The AI might return the full string like "Chapati (1 no.) (147 kcal, 3.6g protein)".
                // We need to extract the pure name to find it in our database.
                const cleanedName = aiItem.name.split(' (')[0].trim();
                
                // Find the corresponding food item in our actual database.
                const dbEntry = foodDatabase.find(food => food.name === cleanedName);

                // If the AI hallucinated a meal not in our DB, we skip it.
                if (!dbEntry) {
                  console.warn(`AI recommended meal "${aiItem.name}" which was cleaned to "${cleanedName}" and not found in database. Skipping.`);
                  return null;
                }

                // Construct the meal details with VERIFIED data from our database.
                return {
                  name: dbEntry.name,
                  calories: dbEntry.nutritionFacts.calories,
                  description: dbEntry.nutritionSummary.summaryText,
                };
              })
              .filter((item): item is z.infer<typeof MealDetailsSchema> => item !== null); // Filter out any nulls

            if (verifiedItems.length === 0) {
                return null;
            }

            return {
              type: aiMeal.type,
              items: verifiedItems,
            };
          })
          .filter((meal): meal is z.infer<typeof MealSchema> => meal !== null);

        return {
          day: aiDay.day,
          meals: verifiedMeals,
          notes: aiDay.notes,
        };
      }),
    };

    return finalPlan;
  }
);

    