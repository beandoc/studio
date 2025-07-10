
'use server';

/**
 * @fileOverview Generates a personalized 7-day kidney-friendly diet plan based on user's health requirements and preferences.
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
});
export type GenerateDietPlanInput = z.infer<typeof GenerateDietPlanInputSchema>;

const MealSchema = z.object({
    name: z.string().describe("Name of the meal."),
    calories: z.number().describe("Estimated calories for the meal."),
    description: z.string().describe("A brief description of the meal."),
});

const DailyPlanSchema = z.object({
    breakfast: MealSchema.optional(),
    lunch: MealSchema.optional(),
    dinner: MealSchema.optional(),
    snacks: MealSchema.optional(),
    notes: z.string().optional().describe("Any specific notes or tips for the day's meals."),
});

const GenerateDietPlanOutputSchema = z.object({
  monday: DailyPlanSchema,
  tuesday: DailyPlanSchema,
  wednesday: DailyPlanSchema,
  thursday: DailyPlanSchema,
  friday: DailyPlanSchema,
  saturday: DailyPlanSchema,
  sunday: DailyPlanSchema,
});
export type GenerateDietPlanOutput = z.infer<typeof GenerateDietPlanOutputSchema>;

export async function generateDietPlan(input: GenerateDietPlanInput): Promise<GenerateDietPlanOutput> {
  return generateDietPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateDietPlanPrompt',
  input: {schema: GenerateDietPlanInputSchema},
  output: {schema: GenerateDietPlanOutputSchema},
  prompt: `You are an expert dietitian specializing in creating kidney-friendly diet plans.

  Based on the user's health requirements and preferences, generate a personalized 7-day diet plan.
  The diet plan should include specific meals for breakfast, lunch, dinner, and snacks for each day of the week.
  For each meal, provide a name, a short description, and an estimated calorie count.
  Also include brief daily notes with preparation tips or hydration advice.
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
