
'use server';

/**
 * @fileOverview Generates a personalized 7-day diet plan based on user's health requirements and preferences.
 *
 * - generateDietPlan - A function that generates the diet plan.
 * - GenerateDietPlanInput - The input type for the generateDietPlan function.
 * - GenerateDietPlanOutput - The return type for the generateDietPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateDietPlanInputSchema = z.object({
  healthRequirements: z
    .string()
    .describe('Specific health requirements for the user, e.g., potassium levels, protein restrictions, fluid intake limits.'),
  preferences: z
    .string()
    .describe('Dietary preferences of the user, e.g., vegetarian, low-sodium, favorite foods, foods to avoid.'),
  meals: z.string().describe("Comma-separated list of meals to generate, e.g., 'breakfast, lunch, dinner, morning snack, afternoon snack, evening snack'"),
});
export type GenerateDietPlanInput = z.infer<typeof GenerateDietPlanInputSchema>;

const MealSchema = z.object({
    name: z.string().describe("Name of the meal. Keep it concise (max 3 words)."),
    calories: z.number().describe("Estimated calories for the meal."),
    description: z.string().describe("A brief description of the meal (max 15 words)."),
});

const DailyPlanSchema = z.object({
    day: z.string().describe("The day of the week (e.g., 'Monday', 'Tuesday')."),
    meals: z.array(z.object({
        type: z.enum(["breakfast", "lunch", "dinner", "morning snack", "afternoon snack", "evening snack"]).describe("The type of the meal."),
        details: MealSchema,
    })).describe("An array of meals for the day."),
    notes: z.string().optional().describe("Any specific notes or tips for the day's meals."),
});

const GenerateDietPlanOutputSchema = z.object({
    plan: z.array(DailyPlanSchema).describe("An array of 7 daily diet plans, one for each day of the week.")
});
export type GenerateDietPlanOutput = z.infer<typeof GenerateDietPlanOutputSchema>;

export async function generateDietPlan(input: GenerateDietPlanInput): Promise<GenerateDietPlanOutput> {
  return generateDietPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDietPlanPrompt',
  input: {schema: GenerateDietPlanInputSchema},
  output: {schema: GenerateDietPlanOutputSchema},
  prompt: `You are an expert dietitian specializing in creating personalized diet plans.

  Based on the user's health requirements and preferences, generate a personalized 7-day diet plan as a list of daily plans.
  For each day, provide the day name, a list of meals, and optional daily notes.
  Each meal in the list should have a 'type' (one of: {{{meals}}}) and 'details' containing the name, description, and calorie count.
  The meal name MUST be concise, containing a maximum of three words.
  The meal description MUST be brief, containing a maximum of 15 words.
  Ensure the generated plan strictly adheres to the provided health requirements.

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
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
