
import { z } from 'zod';

export type FoodGroup = 
    | 'Beans & Legumes'
    | 'Beverages'
    | 'Breads & Cereals'
    | 'Cheese, Milk & Dairy'
    | 'Eggs'
    | 'Fast Food'
    | 'Fish & Seafood'
    | 'Fruit'
    | 'Meat'
    | 'Nuts & Seeds'
    | 'Pasta, Rice & Noodles'
    | 'Salads'
    | 'Sauces, Spices & Spreads'
    | 'Snacks'
    | 'Soups'
    | 'Sweets, Candy & Desserts'
    | 'Vegetables'
    | 'Other';

export type MealCategory = 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Beverages' | 'Other' | 'Soups'| 'Sweets, Candy & Desserts' | 'Lunch/Dinner' | 'Fruit';

export const MealCategoryEnum = z.enum(['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Beverages', 'Other', 'Soups', 'Sweets, Candy & Desserts', 'Lunch/Dinner', 'Fruit']);

export type FoodItem = {
    slug: string;
    name: string;
    cuisine: 'Maharashtrian' | 'Gujarati' | 'North Indian' | 'Generic' | 'South Indian' | 'Punjabi' | 'Bengali' | 'Jain' | 'Indian';
    mealCategory: MealCategory | MealCategory[];
    foodGroup: FoodGroup;
    nutritionFacts: {
        servingSize: string;
        calories: number;
        totalFat: { value: number; percent?: number };
        saturatedFat?: { value: number; percent?: number };
        transFat?: { value: number };
        polyunsaturatedFat?: { value: number };
        monounsaturatedFat?: { value: number };
        cholesterol: { value: number; percent?: number };
        sodium: { value: number; percent?: number };
        totalCarbohydrate: { value: number; percent?: number };
        dietaryFiber?: { value: number; percent?: number };
        sugars?: { value: number };
        protein: { value: number };
        vitaminD?: { value: number; percent?: number };
        calcium?: { value: number; percent?: number };
        iron?: { value: number; percent?: number };
        potassium?: { value: number; percent?: number };
        vitaminA?: { value: number; percent?: number };
        vitaminC?: { value: number; percent?: number };
        vitaminE?: { value: number; };
        vitaminK?: { value: number; };
        vitaminB12?: { value: number; };
        vitaminB6?: { value: number; };
        riboflavin?: { value: number; };
        selenium?: { value: number; };
        copper?: { value: number; };
        manganese?: { value: number; };
        magnesium?: { value: number; };
        phosphorus?: { value: number; };
        zinc?: { value: number; };
        choline?: { value: number; };
        folate?: { value: number; };
    };
    nutritionSummary: {
        calories: number;
        fat: string;
        carbs: string;
        protein: string;
        summaryText: string;
        breakdown: string;
    };
    servingSizes: {
        size: string;
        calories: number;
    }[];
    aliases?: string[];
    imageUrl?: string;
    cookingInstructions?: string;
};
