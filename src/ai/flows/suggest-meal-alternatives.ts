
'use server';

/**
 * @fileOverview Provides meal alternatives based on a food database.
 * The logic finds meals with protein and carbs within a 20% range, relaxing constraints if no initial matches are found.
 *
 * - suggestMealAlternatives - A function that suggests meal alternatives based on user input.
 * - SuggestMealAlternativesInput - The input type for the suggestMealAlternatives function.
 * - SuggestMealAlternativesOutput - The return type for the suggestMealAlternatives function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';
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
  ).describe('An array of up to two meal alternatives.'),
});
export type SuggestMealAlternativesOutput = z.infer<typeof SuggestMealAlternativesOutputSchema>;

// This is the exported function that the frontend calls.
export async function suggestMealAlternatives(input: SuggestMealAlternativesInput): Promise<SuggestMealAlternativesOutput> {
  return suggestMealAlternativesFlow(input);
}

// Helper function to find alternatives
const findAlternatives = (originalMeal: FoodItem, sameCuisineOnly: boolean): FoodItem[] => {
    // 1. Extract nutrition targets from the original meal
    const originalProtein = originalMeal.nutritionFacts.protein.value;
    const originalCarbs = originalMeal.nutritionFacts.totalCarbohydrate.value;
    const proteinMin = originalProtein * 0.8;
    const proteinMax = originalProtein * 1.2;
    const carbsMin = originalCarbs * 0.8;
    const carbsMax = originalCarbs * 1.2;

    // 2. Filter the database for suitable alternatives based on nutrition
    const suitableAlternatives = foodDatabase.filter(meal => {
        // Must not be the same meal
        if (meal.slug === originalMeal.slug) return false;

        // Cuisine check (optional)
        if (sameCuisineOnly && meal.cuisine !== originalMeal.cuisine) {
            return false;
        }

        // Relaxed meal category check for Lunch/Dinner
        const originalCategory = originalMeal.mealCategory;
        const alternativeCategory = meal.mealCategory;
        const lunchDinnerCategories = ['Lunch', 'Dinner', 'Lunch/Dinner'];

        let isCategoryMatch = false;
        if (lunchDinnerCategories.includes(originalCategory) && lunchDinnerCategories.includes(alternativeCategory)) {
            isCategoryMatch = true;
        } else {
            isCategoryMatch = originalCategory === alternativeCategory;
        }

        if (!isCategoryMatch) {
            return false;
        }


        // Must be within the 20% protein and carb range
        const protein = meal.nutritionFacts.protein.value;
        const carbs = meal.nutritionFacts.totalCarbohydrate.value;

        const isProteinMatch = protein >= proteinMin && protein <= proteinMax;
        const isCarbsMatch = carbs >= carbsMin && carbs <= carbsMax;
        
        return isProteinMatch && isCarbsMatch;
    });

    return suitableAlternatives;
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

    // First pass: Prioritize same cuisine
    let suitableAlternatives = findAlternatives(originalMeal, true);
    
    // Second pass: If no matches, broaden search to all cuisines
    if (suitableAlternatives.length === 0) {
      suitableAlternatives = findAlternatives(originalMeal, false);
    }
    
    // 3. Format the output
    // Take the first two suitable alternatives found
    const alternatives = suitableAlternatives.slice(0, 2).map(alt => ({
        name: alt.name,
        description: alt.nutritionSummary.summaryText,
        nutrientInformation: `Protein: ${alt.nutritionFacts.protein.value}g, Carbs: ${alt.nutritionFacts.totalCarbohydrate.value}g, Sodium: ${alt.nutritionFacts.sodium.value}mg`,
        calories: alt.nutritionFacts.calories,
    }));
    
    return { alternatives };
  }
);
