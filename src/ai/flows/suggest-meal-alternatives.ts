
'use server';

/**
 * @fileOverview Provides meal alternatives based on a food database.
 * The logic finds meals of the same cuisine and category with protein and carbs within a 20% range.
 *
 * - suggestMealAlternatives - A function that suggests meal alternatives based on user input.
 * - SuggestMealAlternativesInput - The input type for the suggestMealAlternatives function.
 * - SuggestMealAlternativesOutput - The return type for the suggestMealAlternatives function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { foodDatabase, type FoodItem } from '@/lib/food-data';

const SuggestMealAlternativesInputSchema = z.object({
  mealSlug: z.string().describe('The slug of the meal to find alternatives for.'),
});
export type SuggestMealAlternativesInput = z.infer<typeof SuggestMealAlternativesInputSchema>;

const SuggestMealAlternativesOutputSchema = z.object({
  alternatives: z.array(
    z.object({
      name: z.string().describe('Name of the meal alternative.'),
      description: z.string().describe('A detailed description of the meal.'),
      nutrientInformation: z
        .string()
        .describe('Key nutrient information (e.g., sodium, phosphorus, potassium content).'),
      calories: z.number().describe('The calorie count of the meal alternative.'),
    })
  ).describe('An array of two meal alternatives.'),
});
export type SuggestMealAlternativesOutput = z.infer<typeof SuggestMealAlternativesOutputSchema>;

// This is the exported function that the frontend calls.
export async function suggestMealAlternatives(input: SuggestMealAlternativesInput): Promise<SuggestMealAlternativesOutput> {
  return suggestMealAlternativesFlow(input);
}


// Main flow definition
const suggestMealAlternativesFlow = ai.defineFlow(
  {
    name: 'suggestMealAlternativesFlow',
    inputSchema: SuggestMealAlternativesInputSchema,
    outputSchema: SuggestMealAlternativesOutputSchema,
  },
  async (input) => {
    // 1. Find the original meal in the database
    const originalMeal = foodDatabase.find(meal => meal.slug === input.mealSlug);

    if (!originalMeal) {
      throw new Error(`Meal with slug "${input.mealSlug}" not found in the database.`);
    }

    // 2. Extract nutrition targets from the original meal
    const originalProtein = originalMeal.nutritionFacts.protein.value;
    const originalCarbs = originalMeal.nutritionFacts.totalCarbohydrate.value;
    const proteinMin = originalProtein * 0.8;
    const proteinMax = originalProtein * 1.2;
    const carbsMin = originalCarbs * 0.8;
    const carbsMax = originalCarbs * 1.2;

    // 3. Filter the database for suitable alternatives
    const suitableAlternatives = foodDatabase.filter(meal => {
      // Must not be the same meal
      if (meal.slug === originalMeal.slug) return false;

      // Must match cuisine and meal category
      if (meal.cuisine !== originalMeal.cuisine || meal.mealCategory !== originalMeal.mealCategory) {
        return false;
      }

      // Must be within the 20% protein and carb range
      const protein = meal.nutritionFacts.protein.value;
      const carbs = meal.nutritionFacts.totalCarbohydrate.value;

      const isProteinMatch = protein >= proteinMin && protein <= proteinMax;
      const isCarbsMatch = carbs >= carbsMin && carbs <= carbsMax;
      
      return isProteinMatch && isCarbsMatch;
    });

    // 4. Format the output
    // Take the first two suitable alternatives found
    const alternatives = suitableAlternatives.slice(0, 2).map(alt => ({
        name: alt.name,
        description: alt.nutritionSummary.summaryText,
        nutrientInformation: `Protein: ${alt.nutritionFacts.protein.value}g, Carbs: ${alt.nutritionFacts.totalCarbohydrate.value}g, Sodium: ${alt.nutritionFacts.sodium.value}mg`,
        calories: alt.nutritionFacts.calories,
    }));
    
    // If we didn't find enough alternatives, we can add a fallback or throw an error.
    // For now, we will just return what we have.

    return { alternatives };
  }
);
