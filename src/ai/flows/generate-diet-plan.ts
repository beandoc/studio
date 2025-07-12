
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
import { foodService } from '@/services/food-service';

const GenerateDietPlanInputSchema = z.object({
  healthRequirements: z
    .string()
    .describe('Specific health requirements for the user, e.g., potassium levels, protein restrictions, fluid intake limits.'),
  preferences: z
    .string()
    .describe('Dietary preferences of the user, e.g., vegetarian, low-sodium, favorite foods, foods to avoid.'),
  meals: z.string().describe("Comma-separated list of meals to generate, e.g., 'breakfast, lunch, dinner, morning snack, afternoon snack, evening snack'"),
  foodList: z.string().describe("A comma-separated list of available food items to choose from for creating the diet plan."),
  dailyCalorieGoal: z.number().optional().describe("User's daily calorie goal in kcal."),
  dailyProteinGoal: z.number().optional().describe("User's daily protein goal in grams."),
});
export type GenerateDietPlanInput = z.infer<typeof GenerateDietPlanInputSchema>;

const AiMealItemSchema = z.object({
    name: z.string().describe("Name of the food item. This MUST be a name chosen directly from the provided food list."),
});

const AiDailyPlanSchema = z.object({
    day: z.string().describe("The day of the week (e.g., 'Monday', 'Tuesday')."),
    meals: z.array(z.object({
        type: z.enum(["breakfast", "lunch", "dinner", "morning snack", "afternoon snack", "evening snack"]).describe("The type of the meal."),
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
    items: z.array(MealDetailsSchema), // Changed from 'details' to 'items' and made it an array
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

  const foodList = relevantFoods.map(food => `${food.name} (Cals: ${food.nutritionFacts.calories}, Protein: ${food.nutritionFacts.protein.value}g)`).join(', ');

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
  prompt: `You are an expert dietitian creating a realistic 7-day diet plan.

  **CRITICAL RULE: You MUST select food items *exclusively* from the following list. Each item includes its calorie and protein content to help you:**
  {{{foodList}}}

  **IMPORTANT INSTRUCTIONS:**
  1.  **Create Multi-Item Meals:** For major meals like "lunch" and "dinner", combine multiple items to create a balanced meal (e.g., a grain like Roti/Rice, a protein like Dal, a vegetable side). Snacks can be single items.
  2.  **Meet Nutritional Goals:** The combination of all meals for each day should come as close as possible to the user's daily targets:
      - Daily Calorie Goal: ~{{{dailyCalorieGoal}}} kcal
      - Daily Protein Goal: ~{{{dailyProteinGoal}}} g
  3.  **Use the Provided List ONLY:** Do NOT invent any food items. Do not provide descriptions or calorie counts in your output. Your entire response must strictly adhere to the provided JSON schema.
  4.  **Plan for Requested Meals:** Create a plan for the following meal slots each day: {{{meals}}}.
  
  Base your selections on the user's profile:
  - Health Requirements: {{{healthRequirements}}}
  - Preferences: {{{preferences}}}
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

            const verifiedItems = aiMeal.items
              .map(aiItem => {
                // Find the corresponding food item in our actual database.
                const dbEntry = foodDatabase.find(food => food.name === aiItem.name);

                // If the AI hallucinated a meal not in our DB, we skip it.
                if (!dbEntry) {
                  console.warn(`AI recommended meal "${aiItem.name}" not found in database. Skipping.`);
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
