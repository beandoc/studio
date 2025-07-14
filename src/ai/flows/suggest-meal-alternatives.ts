
'use server';

/**
 * @fileOverview Provides meal alternatives based on a food database.
 * This is a deterministic flow that does not use an LLM.
 * The logic finds the two most nutritionally similar meals based on a scoring system
 * that considers calories and protein, constrained by the meal category.
 * This approach is faster, cheaper, and more reliable than using an AI for this task.
 *
 * - suggestMealAlternatives - A function that suggests meal alternatives based on user input.
 * - SuggestMealAlternativesInput - The input type for the suggestMealAlternatives function.
 * - SuggestMealAlternativesOutput - The return type for the suggestMealAlternatives function.
 */

import {z} from 'zod';
import { FoodService, getFoodService } from '@/lib/food-service';
import type { FoodItem } from '@/lib/food-data';

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


const calculateSimilarityScore = (original: FoodItem, alternative: FoodItem): number => {
    const originalCalories = original.nutritionFacts.calories;
    const altCalories = alternative.nutritionFacts.calories;
    const originalProtein = original.nutritionFacts.protein.value;
    const altProtein = alternative.nutritionFacts.protein.value;
    
    // Normalize differences to prevent one nutrient from dominating the score
    const calorieDiff = originalCalories > 0 ? Math.abs(originalCalories - altCalories) / originalCalories : (altCalories > 0 ? 1 : 0);
    const proteinDiff = originalProtein > 0 ? Math.abs(originalProtein - altProtein) / originalProtein : (altProtein > 0 ? 1 : 0);

    // Weighted sum. We can adjust weights if one factor is more important.
    return (calorieDiff * 0.6) + (proteinDiff * 0.4);
}

export async function suggestMealAlternatives(input: SuggestMealAlternativesInput): Promise<SuggestMealAlternativesOutput> {
    await FoodService.initialize();
    const foodService = getFoodService(); 
    const foodDb = foodService.getFoodDatabase();
    
    const originalMeal = foodDb.find(meal => meal.slug === input.mealSlug);

    if (!originalMeal) {
      throw new Error(`Meal with slug "${input.mealSlug}" not found in the database.`);
    }

    const potentialAlternatives = foodDb.filter(meal => {
        if (meal.slug === originalMeal.slug) return false;
        
        const mealCategories = Array.isArray(meal.mealCategory) ? meal.mealCategory : [meal.mealCategory].filter(Boolean);
        // Ensure alternatives are in the same general meal category (e.g., Breakfast for Breakfast)
        return mealCategories.map(c => c.toLowerCase()).includes(input.mealType.toLowerCase());
    });

    if (potentialAlternatives.length === 0) {
        return { alternatives: [] };
    }

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
