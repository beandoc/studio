
'use server';

/**
 * @fileOverview Generates a personalized 7-day diet plan based on user's health requirements, preferences, and the available food database.
 * The AI's role is strictly to select appropriate meal names from the database. The code then populates all nutritional details.
 *
 * - generateDietPlan - A function that generates the diet plan.
 * - GenerateDietPlanInput - The input type for the generateDietPlan function.
 * - GenerateDietPlanOutput - The return type for the generateDietPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { foodService } from '@/services/food-service';
import type { FoodItem } from '@/lib/food-data';

const GenerateDietPlanInputSchema = z.object({
  healthRequirements: z
    .string()
    .describe('Specific health requirements for the user, e.g., potassium levels, protein restrictions, fluid intake limits.'),
  preferences: z
    .string()
    .describe('Dietary preferences of the user, e.g., vegetarian, low-sodium, favorite foods, foods to avoid.'),
  meals: z.string().describe("Comma-separated list of meals to generate, e.g., 'breakfast, lunch, dinner, morning snack, afternoon snack, evening snack'"),
  foodList: z.string().describe("A comma-separated list of available food items to choose from for creating the diet plan.")
});
export type GenerateDietPlanInput = z.infer<typeof GenerateDietPlanInputSchema>;

const AiMealSchema = z.object({
    name: z.string().describe("Name of the meal. This MUST be a name chosen directly from the provided food list."),
});

const AiDailyPlanSchema = z.object({
    day: z.string().describe("The day of the week (e.g., 'Monday', 'Tuesday')."),
    meals: z.array(z.object({
        type: z.enum(["breakfast", "lunch", "dinner", "morning snack", "afternoon snack", "evening snack"]).describe("The type of the meal."),
        details: AiMealSchema,
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
    details: MealDetailsSchema,
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


export async function generateDietPlan(input: Omit<GenerateDietPlanInput, 'foodList'>): Promise<GenerateDietPlanOutput> {
  const foodDatabase = foodService.getFoodDatabase();
  
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

  const foodList = relevantFoods.map(food => food.name).join(', ');

  const flowInput: GenerateDietPlanInput = {
    ...input,
    foodList,
  };

  return generateDietPlanFlow(flowInput);
}

const prompt = ai.definePrompt({
  name: 'generateDietPlanPrompt',
  input: {schema: GenerateDietPlanInputSchema},
  output: {schema: AiResponseSchema},
  prompt: `You are an expert dietitian creating a 7-day diet plan. Your ONLY task is to select appropriate meal names from a given list.

  **CRITICAL RULE: You MUST select meal names *exclusively* from the following list of available foods:**
  {{{foodList}}}

  Do NOT invent any food items. Do not provide descriptions or calorie counts. Your entire response must strictly adhere to the provided JSON schema.

  For each day of the week, provide a plan. For each meal slot (e.g., {{{meals}}}), select ONE suitable meal name from the list above.
  
  Base your selections on the user's profile:
  Health Requirements: {{{healthRequirements}}}
  Preferences: {{{preferences}}}
  `,
});

const generateDietPlanFlow = ai.defineFlow(
  {
    name: 'generateDietPlanFlow',
    inputSchema: GenerateDietPlanInputSchema,
    outputSchema: GenerateDietPlanOutputSchema,
  },
  async (input) => {
    const foodDatabase = foodService.getFoodDatabase();
    
    // 1. Get the meal name recommendations from the AI.
    const { output: aiOutput } = await prompt(input);

    if (!aiOutput || !aiOutput.plan) {
      throw new Error('AI failed to generate a diet plan structure.');
    }

    // 2. Build the final, code-verified diet plan.
    const finalPlan: GenerateDietPlanOutput = {
      plan: aiOutput.plan.map(aiDay => {
        const verifiedMeals = aiDay.meals
          .map(aiMeal => {
            // Find the corresponding food item in our actual database.
            const dbEntry = foodDatabase.find(food => food.name === aiMeal.details.name);

            // If the AI hallucinated a meal not in our DB, we skip it.
            if (!dbEntry) {
              console.warn(`AI recommended meal "${aiMeal.details.name}" not found in database. Skipping.`);
              return null;
            }

            // Construct the meal details with VERIFIED data from our database.
            return {
              type: aiMeal.type,
              details: {
                name: dbEntry.name,
                calories: dbEntry.nutritionFacts.calories,
                description: dbEntry.nutritionSummary.summaryText,
              },
            };
          })
          .filter((meal): meal is z.infer<typeof MealSchema> => meal !== null); // Filter out any nulls

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
