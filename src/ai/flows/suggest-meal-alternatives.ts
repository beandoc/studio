
'use server';

/**
 * @fileOverview Provides meal alternatives based on a food database.
 * The logic finds the two most nutritionally similar meals based on a scoring system.
 *
 * - suggestMealAlternatives - A function that suggests meal alternatives based on user input.
 * - SuggestMealAlternativesInput - The input type for the suggestMealAlternatives function.
 * - SuggestMealAlternativesOutput - The return type for the suggestMealAlternatives function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { foodService } from '@/services/food-service';
import type { FoodItem } from '@/lib/food-data';

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
  ).describe('An array of up to two meal alternatives.'),
});
export type SuggestMealAlternativesOutput = z.infer<typeof SuggestMealAlternativesOutputSchema>;

// This is the exported function that the frontend calls.
export async function suggestMealAlternatives(input: SuggestMealAlternativesInput): Promise<SuggestMealAlternativesOutput> {
  return suggestMealAlternativesFlow(input);
}


// Helper function to calculate a similarity score. A lower score means a better match.
const calculateSimilarityScore = (original: FoodItem, alternative: FoodItem): number => {
    const originalProtein = original.nutritionFacts.protein.value;
    const originalCarbs = original.nutritionFacts.totalCarbohydrate.value;

    const altProtein = alternative.nutritionFacts.protein.value;
    const altCarbs = alternative.nutritionFacts.totalCarbohydrate.value;
    
    // Calculate percentage difference for protein and carbs.
    // This normalizes the differences so one nutrient doesn't overpower the other.
    const proteinDiff = originalProtein > 0 ? Math.abs(originalProtein - altProtein) / originalProtein : (altProtein > 0 ? 1 : 0);
    const carbsDiff = originalCarbs > 0 ? Math.abs(originalCarbs - altCarbs) / originalCarbs : (altCarbs > 0 ? 1 : 0);

    // Combine differences into a single score. Lower is better.
    // We can weigh them if one is more important than the other. Here they are weighted equally.
    return proteinDiff + carbsDiff;
}


// Main flow definition
const suggestMealAlternativesFlow = ai.defineFlow(
  {
    name: 'suggestMealAlternativesFlow',
    inputSchema: SuggestMealAlternativesInputSchema,
    outputSchema: SuggestMealAlternativesOutputSchema,
  },
  async (input) => {
    // We must instantiate foodService inside the flow to get user-specific data
    const foodDb = foodService.getFoodDatabase();
    
    // 1. Find the original meal in the database
    const originalMeal = foodDb.find(meal => meal.slug === input.mealSlug);

    if (!originalMeal) {
      throw new Error(`Meal with slug "${input.mealSlug}" not found in the database.`);
    }

    // 2. Calculate similarity scores for all other meals in the database
    const scoredAlternatives = foodDb
        .filter(meal => meal.slug !== originalMeal.slug) // Exclude the original meal itself
        .map(meal => ({
            ...meal,
            // Calculate a score for each potential alternative
            similarityScore: calculateSimilarityScore(originalMeal, meal) 
        }))
        // Sort by the similarity score in ascending order (lowest score is the best match)
        .sort((a, b) => a.similarityScore - b.similarityScore); 

    
    // 3. Format the output with the top 2 best-scoring alternatives
    const alternatives = scoredAlternatives.slice(0, 2).map(alt => ({
        name: alt.name,
        description: alt.nutritionSummary.summaryText,
        nutrientInformation: `Protein: ${alt.nutritionFacts.protein.value}g, Carbs: ${alt.nutritionFacts.totalCarbohydrate.value}g, Sodium: ${alt.nutritionFacts.sodium.value}mg`,
        calories: alt.nutritionFacts.calories,
    }));
    
    return { alternatives };
  }
);
    
