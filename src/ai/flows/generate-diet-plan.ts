
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
import { MealCategoryEnum, type MealCategory } from '@/lib/food-data';

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
    const userFoodService = new FoodService(input.categoryOverrides, input.aliasOverrides);
    const foodDatabase = userFoodService.getFoodDatabase();
    
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

    const foodListsForPrompt = input.meals.map(mealType => {
      const mealTypeNormalized = mealType.toLowerCase().replace(/\s/g, "") as MealCategory;

      const mealSpecificFoods = relevantFoods
        .filter(food => {
          if (!food.mealCategory) return false;
          const categories = Array.isArray(food.mealCategory) ? food.mealCategory : [food.mealCategory];
          const normalizedCategories = categories.map(cat => cat.toLowerCase().replace(/\s/g, ""));
          return normalizedCategories.includes(mealTypeNormalized);
        })
        .map(food => `${food.name} (${food.nutritionFacts.calories} kcal, ${food.nutritionFacts.protein.value}g protein)`);

      if (mealSpecificFoods.length === 0) {
        return `For the meal type "${mealType}", there are no available food items based on the user's dietary profile. Do not generate a meal for this slot.`;
      }
      
      return `For the meal type "${mealType}", you MUST choose from this list ONLY: [${mealSpecificFoods.join(', ')}]`;
    }).join('\n\n');
    

    const prompt = ai.definePrompt({
      name: 'generateDietPlanPrompt',
      input: {schema: z.any()},
      output: {schema: AiResponseSchema},
      prompt: `You are an expert dietitian creating a realistic, varied, and nutritionally balanced 7-day diet plan.

      **USER PROFILE:**
      - Health Requirements: ${input.healthRequirements}
      - Preferences: ${input.preferences}
      - Daily Calorie Goal: ~${input.dailyCalorieGoal || 2000} kcal
      - Daily Protein Goal: ~${input.dailyProteinGoal || 70} g

      **CRITICAL INSTRUCTIONS:**
      1.  **Generate a Full 7-Day Plan:** You MUST create a complete diet plan for all seven days of the week: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.
      2.  **Strict Food Selection:** For each meal type (e.g., breakfast, lunch), you MUST select food items *exclusively* from the specific list provided for that meal type below. Do NOT invent or use any food not on these lists.
      3.  **Create Multi-Item Meals:** For major meals like "lunch" and "dinner", combine multiple items to create a balanced meal (e.g., a grain, a protein source, a vegetable). Snacks can be single items. Aim for variety throughout the week. A diet should not have the same meal every day.
      4.  **Meet Nutritional Goals:** Use the provided calorie and protein data for each food item to create daily plans that are as close as possible to the user's goals. A plan with only 600 calories when the goal is 2000 is unacceptable. Use snacks if needed to meet the calorie goal.
      5.  **Adhere to Schema:** Your entire response must strictly adhere to the provided JSON schema. You MUST provide the *exact* food name as it appears in the list (e.g., 'Chapati (1 no.)'). Do NOT include calorie counts or other details in the output \`name\` field.
      6.  **Plan for Requested Meals:** Create a plan for the following meal slots each day: ${input.meals.join(', ')}.

      **--- AVAILABLE FOODS PER MEAL TYPE (WITH NUTRITIONAL DATA) ---**
      ${foodListsForPrompt}
      `,
    });

    const { output: aiOutput } = await prompt({});

    if (!aiOutput || !aiOutput.plan) {
      throw new Error('AI failed to generate a diet plan structure. The AI response was either null or did not contain a plan.');
    }

    const finalPlan: GenerateDietPlanOutput = {
      plan: aiOutput.plan.map(aiDay => {
        const verifiedMeals = aiDay.meals
          .map(aiMeal => {
            if (!aiMeal || !aiMeal.items) return null;

            const verifiedItems = aiMeal.items
              .map(aiItem => {
                const cleanedName = aiItem.name.split(' (')[0].trim();
                const dbEntry = foodDatabase.find(food => food.name === cleanedName);

                if (!dbEntry) {
                  console.warn(`AI recommended meal "${aiItem.name}" which was cleaned to "${cleanedName}" and not found in database. Skipping.`);
                  return null;
                }

                return {
                  name: dbEntry.name,
                  calories: dbEntry.nutritionFacts.calories,
                  description: dbEntry.nutritionSummary.summaryText,
                };
              })
              .filter((item): item is z.infer<typeof MealDetailsSchema> => item !== null);

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
