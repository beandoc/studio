// src/ai/flows/suggest-meal-alternatives.ts
'use server';

/**
 * @fileOverview Provides kidney-friendly meal alternatives with nutrient information.
 *
 * - suggestMealAlternatives - A function that suggests meal alternatives based on user input.
 * - SuggestMealAlternativesInput - The input type for the suggestMealAlternatives function.
 * - SuggestMealAlternativesOutput - The return type for the suggestMealAlternatives function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestMealAlternativesInputSchema = z.object({
  mealDescription: z
    .string()
    .describe('Description of the meal for which alternatives are needed.'),
  dietaryRestrictions: z
    .string()
    .describe('Dietary restrictions for kidney health (e.g., low sodium, low phosphorus).'),
  calorieTarget: z
    .number()
    .describe('Target calorie range for the meal (e.g., 300-400).'),
});
export type SuggestMealAlternativesInput = z.infer<typeof SuggestMealAlternativesInputSchema>;

const SuggestMealAlternativesOutputSchema = z.object({
  alternatives: z.array(
    z.object({
      name: z.string().describe('Name of the meal alternative.'),
      description: z.string().describe('A detailed description of the meal.'),
      nutrientInformation: z
        .string()
        .describe('Key nutrient information relevant to kidney health (e.g., sodium, phosphorus, potassium content).'),
      calories: z.number().describe('The calorie count of the meal alternative.'),
    })
  ).describe('An array of kidney-friendly meal alternatives.'),
});
export type SuggestMealAlternativesOutput = z.infer<typeof SuggestMealAlternativesOutputSchema>;

export async function suggestMealAlternatives(input: SuggestMealAlternativesInput): Promise<SuggestMealAlternativesOutput> {
  return suggestMealAlternativesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestMealAlternativesPrompt',
  input: {schema: SuggestMealAlternativesInputSchema},
  output: {schema: SuggestMealAlternativesOutputSchema},
  prompt: `You are a registered dietician specializing in kidney health. A patient is looking for alternatives to a meal, taking into account their dietary restrictions and calorie target.

  Suggest at least three kidney-friendly meal alternatives that meet the following criteria:

  Meal Description: {{{mealDescription}}}
  Dietary Restrictions: {{{dietaryRestrictions}}}
  Calorie Target: {{{calorieTarget}}} calories

  Format your output as a JSON array of meal objects. Each object should include the meal's name, description, nutrient information relevant to kidney health (sodium, phosphorus, potassium), and calorie count.
  `,
});

const suggestMealAlternativesFlow = ai.defineFlow(
  {
    name: 'suggestMealAlternativesFlow',
    inputSchema: SuggestMealAlternativesInputSchema,
    outputSchema: SuggestMealAlternativesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
