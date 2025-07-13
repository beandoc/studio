
'use server';

/**
 * @fileOverview Provides meal alternatives based on a food database.
 * The logic finds the two most nutritionally similar meals based on a scoring system
 * that considers calories and protein, constrained by the meal category.
 *
 * - suggestMealAlternatives - A function that suggests meal alternatives based on user input.
 * - SuggestMealAlternativesInput - The input type for the suggestMealAlternatives function.
 * - SuggestMealAlternativesOutput - The return type for the suggestMealAlternatives function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
import { foodService } from '@/services/food-service';
import type { FoodItem, MealCategory } from '@/lib/food-data';

const SuggestMealAlternativesInputSchema = z.object({
  mealSlug: z.string().describe('The slug of the meal to find alternatives for.'),
  mealType: z.string().describe("The category of the meal (e.g., 'Breakfast', 'Lunch') to constrain the search."),
});
export type SuggestMealAlternativesInput = z.infer<typeof SuggestMealAlternativesInputSchema>;

const SuggestMealAlternativesOutputSchema = z.object({
  alternatives: z.array(
    z.object({
      name: z.string().describe('Name of the meal alternative.'),
      slug: z.string().describe('The slug of the meal alternative.'),
      description: z.string().describe('A detailed description of the meal.'),
      nutrientInformation: z
        .string()
        .describe('Key nutrient information (e.g., calories, protein content).'),
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
// This is like finding the "best fit" baggage based on multiple constraints (weight and size).
const calculateSimilarityScore = (original: FoodItem, alternative: FoodItem): number => {
    // Analogy: Calories are the "weight" of the baggage.
    const originalCalories = original.nutritionFacts.calories;
    const altCalories = alternative.nutritionFacts.calories;

    // Analogy: Protein is the "size" of the baggage.
    const originalProtein = original.nutritionFacts.protein.value;
    const altProtein = alternative.nutritionFacts.protein.value;
    
    // Calculate normalized percentage difference for calories and protein.
    // This prevents one nutrient with a larger absolute value from dominating the score.
    const calorieDiff = originalCalories > 0 ? Math.abs(originalCalories - altCalories) / originalCalories : (altCalories > 0 ? 1 : 0);
    const proteinDiff = originalProtein > 0 ? Math.abs(originalProtein - altProtein) / originalProtein : (altProtein > 0 ? 1 : 0);

    // Combine differences into a single score. Lower is better.
    // We weigh them equally to find a balanced nutritional alternative.
    return calorieDiff + proteinDiff;
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

    // 2. Filter the database to ONLY include items from the same meal category.
    const potentialAlternatives = foodDb.filter(meal => {
        if (meal.slug === originalMeal.slug) return false; // Exclude the original meal itself
        
        // This logic handles both string and array mealCategory formats correctly.
        const mealCategories = Array.isArray(meal.mealCategory) ? meal.mealCategory : [meal.mealCategory].filter(Boolean);
        return mealCategories.map(c => c.toLowerCase()).includes(input.mealType.toLowerCase());
    });

    // 3. Calculate similarity scores for all potential alternatives.
    const scoredAlternatives = potentialAlternatives
        .map(meal => ({
            ...meal,
            // Calculate a score for each potential alternative
            similarityScore: calculateSimilarityScore(originalMeal, meal) 
        }))
        // Sort by the similarity score in ascending order (lowest score is the best match)
        .sort((a, b) => a.similarityScore - b.similarityScore); 

    
    // 4. Format the output with the top 2 best-scoring alternatives
    const alternatives = scoredAlternatives.slice(0, 2).map(alt => ({
        name: alt.name,
        slug: alt.slug,
        description: alt.nutritionSummary.summaryText,
        nutrientInformation: `Calories: ${alt.nutritionFacts.calories} kcal, Protein: ${alt.nutritionFacts.protein.value}g`,
        calories: alt.nutritionFacts.calories,
    }));
    
    return { alternatives };
  }
);
    
