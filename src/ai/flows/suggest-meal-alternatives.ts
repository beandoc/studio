
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
import { FoodService } from '@/lib/food-service';
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

export async function suggestMealAlternatives(input: SuggestMealAlternativesInput): Promise<SuggestMealAlternativesOutput> {
  return suggestMealAlternativesFlow(input);
}


const calculateSimilarityScore = (original: FoodItem, alternative: FoodItem): number => {
    const originalCalories = original.nutritionFacts.calories;
    const altCalories = alternative.nutritionFacts.calories;
    const originalProtein = original.nutritionFacts.protein.value;
    const altProtein = alternative.nutritionFacts.protein.value;
    
    const calorieDiff = originalCalories > 0 ? Math.abs(originalCalories - altCalories) / originalCalories : (altCalories > 0 ? 1 : 0);
    const proteinDiff = originalProtein > 0 ? Math.abs(originalProtein - altProtein) / originalProtein : (altProtein > 0 ? 1 : 0);

    return calorieDiff + proteinDiff;
}

const suggestMealAlternativesFlow = ai.defineFlow(
  {
    name: 'suggestMealAlternativesFlow',
    inputSchema: SuggestMealAlternativesInputSchema,
    outputSchema: SuggestMealAlternativesOutputSchema,
  },
  async (input) => {
    // Initialize the service to ensure data is loaded
    await FoodService.initialize();
    const foodService = new FoodService(); // use default instance
    const foodDb = foodService.getFoodDatabase();
    
    const originalMeal = foodDb.find(meal => meal.slug === input.mealSlug);

    if (!originalMeal) {
      throw new Error(`Meal with slug "${input.mealSlug}" not found in the database.`);
    }

    const potentialAlternatives = foodDb.filter(meal => {
        if (meal.slug === originalMeal.slug) return false;
        
        const mealCategories = Array.isArray(meal.mealCategory) ? meal.mealCategory : [meal.mealCategory].filter(Boolean);
        return mealCategories.map(c => c.toLowerCase()).includes(input.mealType.toLowerCase());
    });

    const scoredAlternatives = potentialAlternatives
        .map(meal => ({
            meal,
            similarityScore: calculateSimilarityScore(originalMeal, meal) 
        }))
        .sort((a, b) => a.similarityScore - b.similarityScore); 

    
    const alternatives = scoredAlternatives.slice(0, 2).map(alt => ({
        name: alt.meal.name,
        slug: alt.meal.slug,
        description: alt.meal.nutritionSummary.summaryText,
        nutrientInformation: `Calories: ${alt.meal.nutritionFacts.calories} kcal, Protein: ${alt.meal.nutritionFacts.protein.value}g`,
        calories: alt.meal.nutritionFacts.calories,
    }));
    
    return { alternatives };
  }
);
