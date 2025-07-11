
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

export type FoodItem = {
    slug: string;
    name: string;
    cuisine: 'Maharashtrian' | 'Gujarati' | 'North Indian' | 'Generic' | 'South Indian';
    mealCategory: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Beverages' | 'Other' | 'Soups';
    foodGroup: FoodGroup;
    nutritionFacts: {
        servingSize: string;
        calories: number;
        totalFat: { value: number; percent?: number };
        saturatedFat: { value: number; percent?: number };
        transFat?: { value: number };
        polyunsaturatedFat?: { value: number };
        monounsaturatedFat?: { value: number };
        cholesterol: { value: number; percent?: number };
        sodium: { value: number; percent?: number };
        totalCarbohydrate: { value: number; percent?: number };
        dietaryFiber?: { value: number; percent?: number };
        sugars?: { value: number };
        protein: { value: number };
        vitaminD?: { value: number; percent: number };
        calcium?: { value: number; percent: number };
        iron?: { value: number; percent: number };
        potassium: { value: number; percent?: number };
        vitaminA?: { value: number; percent: number };
        vitaminC?: { value: number; percent: number };
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
    relatedTypes?: {
        [key: string]: string[];
    }
};

export const foodDatabase: FoodItem[] = [
    {
        slug: 'hot-tea',
        name: 'Hot tea (Garam Chai)',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 16.14,
            totalFat: { value: 0.53 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 3.12 },
            totalCarbohydrate: { value: 2.58 },
            dietaryFiber: { value: 0 },
            sugars: { value: 2.58 },
            protein: { value: 0.39 },
            calcium: { value: 14.2, percent: 1 },
            iron: { value: 0.02, percent: 0 },
            potassium: { value: 0 },
            vitaminC: { value: 0.5, percent: 1 }
        },
        nutritionSummary: {
            calories: 16,
            fat: '0.5g',
            carbs: '2.6g',
            protein: '0.4g',
            summaryText: 'A serving of hot tea.',
            breakdown: '29% fat, 64% carbs, 7% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 16 }
        ]
    },
    {
        slug: 'instant-coffee',
        name: 'Instant coffee',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 23.16,
            totalFat: { value: 0.75 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 4.92 },
            totalCarbohydrate: { value: 3.65 },
            dietaryFiber: { value: 0 },
            sugars: { value: 3.62 },
            protein: { value: 0.64 },
            calcium: { value: 20.87, percent: 2 },
            iron: { value: 0.06, percent: 0 },
            potassium: { value: 0 },
            vitaminC: { value: 1.51, percent: 2 }
        },
        nutritionSummary: {
            calories: 23,
            fat: '0.8g',
            carbs: '3.7g',
            protein: '0.6g',
            summaryText: 'A serving of instant coffee.',
            breakdown: '29% fat, 63% carbs, 8% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 23 }
        ]
    },
    {
        slug: 'espreso-coffee',
        name: 'Espresso coffee',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 51.54,
            totalFat: { value: 2.14 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 13.98 },
            totalCarbohydrate: { value: 6.62 },
            dietaryFiber: { value: 0 },
            sugars: { value: 6.53 },
            protein: { value: 1.75 },
            calcium: { value: 58.1, percent: 4 },
            iron: { value: 0.15, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 1.51, percent: 2 }
        },
        nutritionSummary: {
            calories: 52,
            fat: '2.1g',
            carbs: '6.6g',
            protein: '1.8g',
            summaryText: 'A serving of espresso coffee.',
            breakdown: '37% fat, 51% carbs, 12% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 52 }
        ]
    },
    {
        slug: 'iced-tea',
        name: 'Iced tea',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 10.34,
            totalFat: { value: 0.01 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 0.23 },
            totalCarbohydrate: { value: 2.7 },
            dietaryFiber: { value: 0 },
            sugars: { value: 2.7 },
            protein: { value: 0.03 },
            calcium: { value: 1.18, percent: 0 },
            iron: { value: 0.02, percent: 0 },
            potassium: { value: 0 },
            vitaminC: { value: 5.95, percent: 7 }
        },
        nutritionSummary: {
            calories: 10,
            fat: '0.0g',
            carbs: '2.7g',
            protein: '0.0g',
            summaryText: 'A serving of iced tea.',
            breakdown: '0% fat, 99% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 10 }
        ]
    },
    {
        slug: 'aam-panna',
        name: 'Raw mango drink (Aam panna)',
        cuisine: 'North Indian',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 35.92,
            totalFat: { value: 0.03 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 79.82 },
            totalCarbohydrate: { value: 9.05 },
            dietaryFiber: { value: 0.61 },
            sugars: { value: 7.49 },
            protein: { value: 0.16 },
            calcium: { value: 7.08, percent: 1 },
            iron: { value: 0.14, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 45.3, percent: 50 }
        },
        nutritionSummary: {
            calories: 36,
            fat: '0.0g',
            carbs: '9.1g',
            protein: '0.2g',
            summaryText: 'A refreshing raw mango drink.',
            breakdown: '1% fat, 97% carbs, 2% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 36 }
        ]
    },
    {
        slug: 'fruit-punch-fresh',
        name: 'Fruit Punch (with fresh juices)',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 36.12,
            totalFat: { value: 0.03 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 2.63 },
            totalCarbohydrate: { value: 9.38 },
            dietaryFiber: { value: 0.06 },
            sugars: { value: 9.25 },
            protein: { value: 0.14 },
            calcium: { value: 5.07, percent: 0 },
            iron: { value: 0.1, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 41.44, percent: 46 }
        },
        nutritionSummary: {
            calories: 36,
            fat: '0.0g',
            carbs: '9.4g',
            protein: '0.1g',
            summaryText: 'A serving of fruit punch made with fresh juices.',
            breakdown: '1% fat, 97% carbs, 2% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 36 }
        ]
    },
    {
        slug: 'lemonade',
        name: 'Lemonade',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 20.8,
            totalFat: { value: 0.01 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 28.52 },
            totalCarbohydrate: { value: 5.48 },
            dietaryFiber: { value: 0.02 },
            sugars: { value: 5.47 },
            protein: { value: 0.03 },
            calcium: { value: 1.84, percent: 0 },
            iron: { value: 0.05, percent: 0 },
            potassium: { value: 0 },
            vitaminC: { value: 5.27, percent: 6 }
        },
        nutritionSummary: {
            calories: 21,
            fat: '0.0g',
            carbs: '5.5g',
            protein: '0.0g',
            summaryText: 'A serving of lemonade.',
            breakdown: '0% fat, 99% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 21 }
        ]
    },
    {
        slug: 'cumin-infused-water',
        name: 'Cumin infused water (Jeera pani)',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 9.09,
            totalFat: { value: 0.11 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 189.6 },
            totalCarbohydrate: { value: 1.86 },
            dietaryFiber: { value: 0.46 },
            sugars: { value: 1.46 },
            protein: { value: 0.17 },
            calcium: { value: 10.84, percent: 1 },
            iron: { value: 0.32, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 3.61, percent: 4 }
        },
        nutritionSummary: {
            calories: 9,
            fat: '0.1g',
            carbs: '1.9g',
            protein: '0.2g',
            summaryText: 'A serving of cumin infused water.',
            breakdown: '11% fat, 82% carbs, 7% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 9 }
        ]
    },
    {
        slug: 'cold-coffee-with-ice-cream',
        name: 'Cold coffee with ice cream',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 67.85,
            totalFat: { value: 2.11 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 13.84 },
            totalCarbohydrate: { value: 11.24 },
            dietaryFiber: { value: 0.01 },
            sugars: { value: 11.18 },
            protein: { value: 1.57 },
            calcium: { value: 53.29, percent: 4 },
            iron: { value: 0.12, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 2.53, percent: 3 }
        },
        nutritionSummary: {
            calories: 68,
            fat: '2.1g',
            carbs: '11.2g',
            protein: '1.6g',
            summaryText: 'A serving of cold coffee with ice cream.',
            breakdown: '28% fat, 66% carbs, 6% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 68 }
        ]
    },
    {
        slug: 'banana-milkshake',
        name: 'Banana milkshake',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 65.31,
            totalFat: { value: 2.37 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 13.61 },
            totalCarbohydrate: { value: 9.15 },
            dietaryFiber: { value: 0.26 },
            sugars: { value: 7.96 },
            protein: { value: 1.84 },
            calcium: { value: 62.64, percent: 5 },
            iron: { value: 0.13, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 6.84, percent: 8 }
        },
        nutritionSummary: {
            calories: 65,
            fat: '2.4g',
            carbs: '9.2g',
            protein: '1.8g',
            summaryText: 'A serving of banana milkshake.',
            breakdown: '33% fat, 56% carbs, 11% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 65 }
        ]
    },
    {
        slug: 'mango-milkshake',
        name: 'Mango milkshake',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 56.9,
            totalFat: { value: 2.35 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 13.27 },
            totalCarbohydrate: { value: 7.23 },
            dietaryFiber: { value: 0.26 },
            sugars: { value: 7.15 },
            protein: { value: 1.73 },
            calcium: { value: 62.33, percent: 5 },
            iron: { value: 0.15, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 20.1, percent: 22 }
        },
        nutritionSummary: {
            calories: 57,
            fat: '2.4g',
            carbs: '7.2g',
            protein: '1.7g',
            summaryText: 'A serving of mango milkshake.',
            breakdown: '37% fat, 51% carbs, 12% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 57 }
        ]
    },
    {
        slug: 'sweet-lassi',
        name: 'Sweet Lassi (Meethi lassi)',
        cuisine: 'North Indian',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 35.66,
            totalFat: { value: 0.68 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 18.31 },
            totalCarbohydrate: { value: 6.51 },
            dietaryFiber: { value: 0 },
            sugars: { value: 6.51 },
            protein: { value: 1.29 },
            calcium: { value: 45.65, percent: 3 },
            iron: { value: 0.03, percent: 0 },
            potassium: { value: 0 },
            vitaminC: { value: 1, percent: 1 }
        },
        nutritionSummary: {
            calories: 36,
            fat: '0.7g',
            carbs: '6.5g',
            protein: '1.3g',
            summaryText: 'A serving of sweet lassi.',
            breakdown: '17% fat, 73% carbs, 10% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 36 }
        ]
    },
    {
        slug: 'salted-lassi',
        name: 'Lassi (salted)',
        cuisine: 'North Indian',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 18.84,
            totalFat: { value: 0.72 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 65.4 },
            totalCarbohydrate: { value: 1.86 },
            dietaryFiber: { value: 0.02 },
            sugars: { value: 1.84 },
            protein: { value: 1.35 },
            calcium: { value: 47.78, percent: 4 },
            iron: { value: 0.04, percent: 0 },
            potassium: { value: 0 },
            vitaminC: { value: 1.02, percent: 1 }
        },
        nutritionSummary: {
            calories: 19,
            fat: '0.7g',
            carbs: '1.9g',
            protein: '1.4g',
            summaryText: 'A serving of salted lassi.',
            breakdown: '34% fat, 40% carbs, 26% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 19 }
        ]
    },
    {
        slug: 'cheese-chilli-sandwich',
        name: 'Cheese and chilli sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 218.11,
            totalFat: { value: 9.78 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 437.5 },
            totalCarbohydrate: { value: 27.4 },
            dietaryFiber: { value: 2.08 },
            sugars: { value: 2.38 },
            protein: { value: 6.8 },
            calcium: { value: 113.79, percent: 9 },
            iron: { value: 0.99, percent: 6 },
            potassium: { value: 0 },
            vitaminC: { value: 12.3, percent: 14 }
        },
        nutritionSummary: {
            calories: 218,
            fat: '9.8g',
            carbs: '27.4g',
            protein: '6.8g',
            summaryText: 'A cheese and chilli sandwich.',
            breakdown: '40% fat, 50% carbs, 10% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 218 }
        ]
    },
    {
        slug: 'egg-sandwich',
        name: 'Egg sandwich',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 285.96,
            totalFat: { value: 15.8 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 461.67 },
            totalCarbohydrate: { value: 29.16 },
            dietaryFiber: { value: 1.88 },
            sugars: { value: 1.86 },
            protein: { value: 8.69 },
            calcium: { value: 110.13, percent: 8 },
            iron: { value: 1.44, percent: 8 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 286,
            fat: '15.8g',
            carbs: '29.2g',
            protein: '8.7g',
            summaryText: 'An egg sandwich.',
            breakdown: '50% fat, 41% carbs, 9% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 286 }
        ]
    },
    {
        slug: 'cucumber-sandwich',
        name: 'Cucumber sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 188.6,
            totalFat: { value: 8 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 362.64 },
            totalCarbohydrate: { value: 25.77 },
            dietaryFiber: { value: 2.45 },
            sugars: { value: 1.64 },
            protein: { value: 4.8 },
            calcium: { value: 87.84, percent: 7 },
            iron: { value: 1.02, percent: 6 },
            potassium: { value: 0 },
            vitaminC: { value: 1.53, percent: 2 }
        },
        nutritionSummary: {
            calories: 189,
            fat: '8.0g',
            carbs: '25.8g',
            protein: '4.8g',
            summaryText: 'A cucumber sandwich.',
            breakdown: '38% fat, 55% carbs, 7% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 189 }
        ]
    },
    {
        slug: 'chicken-sandwich',
        name: 'Chicken sandwich',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 253.27,
            totalFat: { value: 11.75 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 389.67 },
            totalCarbohydrate: { value: 25.38 },
            dietaryFiber: { value: 1.64 },
            sugars: { value: 1.6 },
            protein: { value: 13.12 },
            calcium: { value: 89.56, percent: 7 },
            iron: { value: 1.19, percent: 7 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 253,
            fat: '11.8g',
            carbs: '25.4g',
            protein: '13.1g',
            summaryText: 'A chicken sandwich.',
            breakdown: '42% fat, 40% carbs, 18% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 253 }
        ]
    },
    {
        slug: 'chapati-roti',
        name: 'Chapati/Roti',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 202.31,
            totalFat: { value: 3.56 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 1.16 },
            totalCarbohydrate: { value: 35.65 },
            dietaryFiber: { value: 6.31 },
            sugars: { value: 1 },
            protein: { value: 5.88 },
            calcium: { value: 17.22, percent: 1 },
            iron: { value: 2.28, percent: 13 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 202,
            fat: '3.6g',
            carbs: '35.7g',
            protein: '5.9g',
            summaryText: 'A piece of chapati or roti.',
            breakdown: '16% fat, 70% carbs, 14% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 202 }
        ]
    },
    {
        slug: 'plain-paratha',
        name: 'Plain parantha/paratha',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 298.3,
            totalFat: { value: 16.86 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 62.07 },
            totalCarbohydrate: { value: 30.69 },
            dietaryFiber: { value: 5.43 },
            sugars: { value: 0.86 },
            protein: { value: 5.06 },
            calcium: { value: 14.81, percent: 1 },
            iron: { value: 1.98, percent: 11 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 298,
            fat: '16.9g',
            carbs: '30.7g',
            protein: '5.1g',
            summaryText: 'A piece of plain paratha.',
            breakdown: '51% fat, 41% carbs, 8% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 298 }
        ]
    },
    {
        slug: 'aloo-paratha',
        name: 'Potato parantha/paratha (Aloo ka parantha)',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 205.04,
            totalFat: { value: 10.22 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 127.2 },
            totalCarbohydrate: { value: 23.92 },
            dietaryFiber: { value: 4.18 },
            sugars: { value: 1.15 },
            protein: { value: 3.7 },
            calcium: { value: 17.38, percent: 1 },
            iron: { value: 1.52, percent: 8 },
            potassium: { value: 0 },
            vitaminC: { value: 7.98, percent: 9 }
        },
        nutritionSummary: {
            calories: 205,
            fat: '10.2g',
            carbs: '23.9g',
            protein: '3.7g',
            summaryText: 'A piece of aloo paratha.',
            breakdown: '45% fat, 47% carbs, 8% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 205 }
        ]
    },
    {
        slug: 'gobi-paratha',
        name: 'Cauliflower parantha/paratha (Gobi parantha)',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 178.07,
            totalFat: { value: 9.47 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 190.03 },
            totalCarbohydrate: { value: 18.84 },
            dietaryFiber: { value: 4.68 },
            sugars: { value: 1.15 },
            protein: { value: 3.73 },
            calcium: { value: 22, percent: 2 },
            iron: { value: 1.59, percent: 9 },
            potassium: { value: 0 },
            vitaminC: { value: 17.61, percent: 20 }
        },
        nutritionSummary: {
            calories: 178,
            fat: '9.5g',
            carbs: '18.8g',
            protein: '3.7g',
            summaryText: 'A piece of gobi paratha.',
            breakdown: '48% fat, 42% carbs, 10% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 178 }
        ]
    },
    {
        slug: 'paneer-paratha',
        name: 'Paneer parantha/paratha',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 262.97,
            totalFat: { value: 14.62 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 142.52 },
            totalCarbohydrate: { value: 24.33 },
            dietaryFiber: { value: 4 },
            sugars: { value: 3.77 },
            protein: { value: 7.98 },
            calcium: { value: 127.65, percent: 10 },
            iron: { value: 1.7, percent: 9 },
            potassium: { value: 0 },
            vitaminC: { value: 1.69, percent: 2 }
        },
        nutritionSummary: {
            calories: 263,
            fat: '14.6g',
            carbs: '24.3g',
            protein: '8.0g',
            summaryText: 'A piece of paneer paratha.',
            breakdown: '50% fat, 37% carbs, 13% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 263 }
        ]
    },
    {
        slug: 'poori',
        name: 'Poori',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 737.63,
            totalFat: { value: 77.61 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 31.73 },
            totalCarbohydrate: { value: 8.22 },
            dietaryFiber: { value: 1.46 },
            sugars: { value: 0.23 },
            protein: { value: 1.35 },
            calcium: { value: 3.98, percent: 0 },
            iron: { value: 0.6, percent: 3 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 738,
            fat: '77.6g',
            carbs: '8.2g',
            protein: '1.4g',
            summaryText: 'A piece of deep-fried poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 738 }
        ]
    },
    {
        slug: 'palak-poori',
        name: 'Spinach poori (Palak poori)',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 684.25,
            totalFat: { value: 71.86 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 35.47 },
            totalCarbohydrate: { value: 7.76 },
            dietaryFiber: { value: 1.55 },
            sugars: { value: 0.24 },
            protein: { value: 1.42 },
            calcium: { value: 10.02, percent: 1 },
            iron: { value: 0.79, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 3.03, percent: 3 }
        },
        nutritionSummary: {
            calories: 684,
            fat: '71.9g',
            carbs: '7.8g',
            protein: '1.4g',
            summaryText: 'A piece of spinach poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 684 }
        ]
    },
    {
        slug: 'methi-poori',
        name: 'Methi poori',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 710.02,
            totalFat: { value: 74.6 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 35.37 },
            totalCarbohydrate: { value: 7.98 },
            dietaryFiber: { value: 1.61 },
            sugars: { value: 0.26 },
            protein: { value: 1.45 },
            calcium: { value: 14.61, percent: 1 },
            iron: { value: 0.81, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 2.91, percent: 3 }
        },
        nutritionSummary: {
            calories: 710,
            fat: '74.6g',
            carbs: '8.0g',
            protein: '1.5g',
            summaryText: 'A piece of methi poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 710 }
        ]
    },
    {
        slug: 'boiled-rice',
        name: 'Boiled rice (Uble chawal)',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '100g',
            calories: 117.19,
            totalFat: { value: 0.18 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 1.05 },
            totalCarbohydrate: { value: 25.72 },
            dietaryFiber: { value: 1.25 },
            sugars: { value: 0.22 },
            protein: { value: 2.6 },
            calcium: { value: 2.7, percent: 0 },
            iron: { value: 0.24, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 117,
            fat: '0.2g',
            carbs: '25.7g',
            protein: '2.6g',
            summaryText: 'A serving of boiled rice.',
            breakdown: '1% fat, 88% carbs, 11% protein.',
        },
        servingSizes: [
            { size: '100g', calories: 117 }
        ]
    },
    {
        slug: 'plain-pulao',
        name: 'Plain pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 140.21,
            totalFat: { value: 4.62 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 193.76 },
            totalCarbohydrate: { value: 21.82 },
            dietaryFiber: { value: 1.69 },
            sugars: { value: 1.15 },
            protein: { value: 2.34 },
            calcium: { value: 12.76, percent: 1 },
            iron: { value: 0.41, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 3.42, percent: 4 }
        },
        nutritionSummary: {
            calories: 140,
            fat: '4.6g',
            carbs: '21.8g',
            protein: '2.3g',
            summaryText: 'A serving of plain pulao.',
            breakdown: '30% fat, 62% carbs, 8% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 140 }
        ]
    },
    {
        slug: 'veg-pulao',
        name: 'Mixed vegetable pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 113.05,
            totalFat: { value: 3.33 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 187.92 },
            totalCarbohydrate: { value: 17.49 },
            dietaryFiber: { value: 2.67 },
            sugars: { value: 1.35 },
            protein: { value: 2.72 },
            calcium: { value: 19.61, percent: 2 },
            iron: { value: 0.6, percent: 3 },
            potassium: { value: 0 },
            vitaminC: { value: 26.15, percent: 29 }
        },
        nutritionSummary: {
            calories: 113,
            fat: '3.3g',
            carbs: '17.5g',
            protein: '2.7g',
            summaryText: 'A serving of mixed vegetable pulao.',
            breakdown: '26% fat, 62% carbs, 12% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 113 }
        ]
    },
    {
        slug: 'mutton-biryani',
        name: 'Mutton biryani/biriyani',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 190.76,
            totalFat: { value: 7.72 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 262.64 },
            totalCarbohydrate: { value: 22.5 },
            dietaryFiber: { value: 2.42 },
            sugars: { value: 2.39 },
            protein: { value: 7.38 },
            calcium: { value: 68.58, percent: 5 },
            iron: { value: 1.29, percent: 7 },
            potassium: { value: 0 },
            vitaminC: { value: 10.28, percent: 11 }
        },
        nutritionSummary: {
            calories: 191,
            fat: '7.7g',
            carbs: '22.5g',
            protein: '7.4g',
            summaryText: 'A serving of mutton biryani.',
            breakdown: '36% fat, 47% carbs, 17% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 191 }
        ]
    },
    {
        slug: 'veg-biryani',
        name: 'Vegetable biryani/biriyani',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 174.61,
            totalFat: { value: 9.51 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 183.79 },
            totalCarbohydrate: { value: 18.56 },
            dietaryFiber: { value: 3.31 },
            sugars: { value: 2.14 },
            protein: { value: 3.16 },
            calcium: { value: 33.52, percent: 3 },
            iron: { value: 0.86, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 39.35, percent: 44 }
        },
        nutritionSummary: {
            calories: 175,
            fat: '9.5g',
            carbs: '18.6g',
            protein: '3.2g',
            summaryText: 'A serving of vegetable biryani.',
            breakdown: '49% fat, 43% carbs, 8% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 175 }
        ]
    },
    {
        slug: 'lemon-rice',
        name: 'Lemon rice',
        cuisine: 'South Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 176.3,
            totalFat: { value: 7.88 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 187.11 },
            totalCarbohydrate: { value: 21.62 },
            dietaryFiber: { value: 2.52 },
            sugars: { value: 0.78 },
            protein: { value: 4.26 },
            calcium: { value: 12.7, percent: 1 },
            iron: { value: 0.77, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 10.2, percent: 11 }
        },
        nutritionSummary: {
            calories: 176,
            fat: '7.9g',
            carbs: '21.6g',
            protein: '4.3g',
            summaryText: 'A serving of lemon rice.',
            breakdown: '40% fat, 49% carbs, 11% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 176 }
        ]
    },
    {
        slug: 'curd-rice',
        name: 'Curd rice',
        cuisine: 'South Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 195.74,
            totalFat: { value: 4.32 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 213.29 },
            totalCarbohydrate: { value: 32.93 },
            dietaryFiber: { value: 2.13 },
            sugars: { value: 3.91 },
            protein: { value: 5.75 },
            calcium: { value: 101.52, percent: 8 },
            iron: { value: 0.59, percent: 3 },
            potassium: { value: 0 },
            vitaminC: { value: 5.1, percent: 6 }
        },
        nutritionSummary: {
            calories: 196,
            fat: '4.3g',
            carbs: '32.9g',
            protein: '5.8g',
            summaryText: 'A serving of curd rice.',
            breakdown: '20% fat, 67% carbs, 13% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 196 }
        ]
    },
    {
        slug: 'tamarind-rice',
        name: 'Tamarind rice',
        cuisine: 'South Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 373.04,
            totalFat: { value: 8.53 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 162.41 },
            totalCarbohydrate: { value: 65.08 },
            dietaryFiber: { value: 5.12 },
            sugars: { value: 11.65 },
            protein: { value: 7.45 },
            calcium: { value: 50.94, percent: 4 },
            iron: { value: 2.89, percent: 16 },
            potassium: { value: 0 },
            vitaminC: { value: 0.84, percent: 1 }
        },
        nutritionSummary: {
            calories: 373,
            fat: '8.5g',
            carbs: '65.1g',
            protein: '7.5g',
            summaryText: 'A serving of tamarind rice.',
            breakdown: '21% fat, 70% carbs, 9% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 373 }
        ]
    },
    {
        slug: 'naan',
        name: 'Naan',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 286.45,
            totalFat: { value: 4.99 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 326.11 },
            totalCarbohydrate: { value: 51.75 },
            dietaryFiber: { value: 1.91 },
            sugars: { value: 5.59 },
            protein: { value: 8.05 },
            calcium: { value: 88.01, percent: 7 },
            iron: { value: 1.29, percent: 7 },
            potassium: { value: 0 },
            vitaminC: { value: 0.23, percent: 0 }
        },
        nutritionSummary: {
            calories: 286,
            fat: '5.0g',
            carbs: '51.8g',
            protein: '8.1g',
            summaryText: 'A piece of naan bread.',
            breakdown: '16% fat, 72% carbs, 12% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 286 }
        ]
    },
    {
        slug: 'bhatura',
        name: 'Bhatura',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 793.2,
            totalFat: { value: 82.56 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 28.3 },
            totalCarbohydrate: { value: 10.73 },
            dietaryFiber: { value: 0.38 },
            sugars: { value: 0.69 },
            protein: { value: 1.63 },
            calcium: { value: 12.12, percent: 1 },
            iron: { value: 0.33, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 0.05, percent: 0 }
        },
        nutritionSummary: {
            calories: 793,
            fat: '82.6g',
            carbs: '10.7g',
            protein: '1.6g',
            summaryText: 'A piece of bhatura.',
            breakdown: '94% fat, 5% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 793 }
        ]
    },
    {
        slug: 'idli',
        name: 'Idli',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 137.54,
            totalFat: { value: 0.33 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 100.83 },
            totalCarbohydrate: { value: 28.18 },
            dietaryFiber: { value: 2.31 },
            sugars: { value: 0.28 },
            protein: { value: 4.64 },
            calcium: { value: 8, percent: 1 },
            iron: { value: 0.68, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 138,
            fat: '0.3g',
            carbs: '28.2g',
            protein: '4.6g',
            summaryText: 'A piece of idli.',
            breakdown: '2% fat, 82% carbs, 16% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 138 }
        ]
    },
    {
        slug: 'masala-dosa',
        name: 'Masala dosa',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 164.58,
            totalFat: { value: 7.84 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 191.28 },
            totalCarbohydrate: { value: 19.57 },
            dietaryFiber: { value: 2.52 },
            sugars: { value: 1.33 },
            protein: { value: 3.29 },
            calcium: { value: 15.58, percent: 1 },
            iron: { value: 0.79, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 14.14, percent: 16 }
        },
        nutritionSummary: {
            calories: 165,
            fat: '7.8g',
            carbs: '19.6g',
            protein: '3.3g',
            summaryText: 'A piece of masala dosa.',
            breakdown: '43% fat, 48% carbs, 9% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 165 }
        ]
    },
    {
        slug: 'makki-ki-roti',
        name: 'Makki ki roti',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 263.97,
            totalFat: { value: 16.85 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 236.22 },
            totalCarbohydrate: { value: 24.19 },
            dietaryFiber: { value: 5.19 },
            sugars: { value: 0.7 },
            protein: { value: 3.49 },
            calcium: { value: 14.76, percent: 1 },
            iron: { value: 1.11, percent: 6 },
            potassium: { value: 0 },
            vitaminC: { value: 1.99, percent: 2 }
        },
        nutritionSummary: {
            calories: 264,
            fat: '16.9g',
            carbs: '24.2g',
            protein: '3.5g',
            summaryText: 'A piece of makki ki roti.',
            breakdown: '58% fat, 37% carbs, 5% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 264 }
        ]
    },
    {
        slug: 'washed-moong-dal',
        name: 'Washed moong dal',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 50,
            totalFat: { value: 1.68 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 150.64 },
            totalCarbohydrate: { value: 5.91 },
            dietaryFiber: { value: 1.17 },
            sugars: { value: 0.12 },
            protein: { value: 2.68 },
            calcium: { value: 8.48, percent: 1 },
            iron: { value: 0.64, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 0.04, percent: 0 }
        },
        nutritionSummary: {
            calories: 50,
            fat: '1.7g',
            carbs: '5.9g',
            protein: '2.7g',
            summaryText: 'A serving of washed moong dal.',
            breakdown: '30% fat, 47% carbs, 23% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 50 }
        ]
    },
    {
        slug: 'mixed-dal',
        name: 'Mixed dal',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 61.93,
            totalFat: { value: 3.1 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 141.36 },
            totalCarbohydrate: { value: 5.79 },
            dietaryFiber: { value: 1.62 },
            sugars: { value: 0.34 },
            protein: { value: 2.51 },
            calcium: { value: 11, percent: 1 },
            iron: { value: 0.78, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 1.1, percent: 1 }
        },
        nutritionSummary: {
            calories: 62,
            fat: '3.1g',
            carbs: '5.8g',
            protein: '2.5g',
            summaryText: 'A serving of mixed dal.',
            breakdown: '45% fat, 37% carbs, 18% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 62 }
        ]
    },
    {
        slug: 'whole-moong-dal',
        name: 'Whole moong dal',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 53.7,
            totalFat: { value: 2.56 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 123.86 },
            totalCarbohydrate: { value: 5.22 },
            dietaryFiber: { value: 2.02 },
            sugars: { value: 0.59 },
            protein: { value: 2.25 },
            calcium: { value: 13.58, percent: 1 },
            iron: { value: 0.68, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 11.04, percent: 12 }
        },
        nutritionSummary: {
            calories: 54,
            fat: '2.6g',
            carbs: '5.2g',
            protein: '2.3g',
            summaryText: 'A serving of whole moong dal.',
            breakdown: '43% fat, 39% carbs, 18% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 54 }
        ]
    },
    {
        slug: 'whole-masoor-dal',
        name: 'Whole masoor dal',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 54.05,
            totalFat: { value: 2.52 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 123.72 },
            totalCarbohydrate: { value: 5.37 },
            dietaryFiber: { value: 1.98 },
            sugars: { value: 0.67 },
            protein: { value: 2.28 },
            calcium: { value: 12.2, percent: 1 },
            iron: { value: 0.95, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 11.04, percent: 12 }
        },
        nutritionSummary: {
            calories: 54,
            fat: '2.5g',
            carbs: '5.4g',
            protein: '2.3g',
            summaryText: 'A serving of whole masoor dal.',
            breakdown: '42% fat, 40% carbs, 18% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 54 }
        ]
    },
    {
        slug: 'whole-moth-dal',
        name: 'Whole moth dal',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 55,
            totalFat: { value: 2.62 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 125.08 },
            totalCarbohydrate: { value: 5.74 },
            dietaryFiber: { value: 1.85 },
            sugars: { value: 0.66 },
            protein: { value: 2.01 },
            calcium: { value: 18.98, percent: 1 },
            iron: { value: 0.95, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 11.04, percent: 12 }
        },
        nutritionSummary: {
            calories: 55,
            fat: '2.6g',
            carbs: '5.7g',
            protein: '2.0g',
            summaryText: 'A serving of whole moth dal.',
            breakdown: '43% fat, 42% carbs, 15% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 55 }
        ]
    },
    {
        slug: 'kale-chane-curry',
        name: 'Black channa curry/Bengal gram curry',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 140.68,
            totalFat: { value: 6.61 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 358.63 },
            totalCarbohydrate: { value: 14.11 },
            dietaryFiber: { value: 7.99 },
            sugars: { value: 2.36 },
            protein: { value: 5.67 },
            calcium: { value: 53.87, percent: 4 },
            iron: { value: 2.43, percent: 14 },
            potassium: { value: 0 },
            vitaminC: { value: 15.13, percent: 17 }
        },
        nutritionSummary: {
            calories: 141,
            fat: '6.6g',
            carbs: '14.1g',
            protein: '5.7g',
            summaryText: 'A serving of black channa curry.',
            breakdown: '42% fat, 40% carbs, 18% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 141 }
        ]
    },
    {
        slug: 'chickpeas-curry',
        name: 'Chickpeas curry (Safed channa curry)',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 163.43,
            totalFat: { value: 6.84 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 357.99 },
            totalCarbohydrate: { value: 19.98 },
            dietaryFiber: { value: 4.73 },
            sugars: { value: 4.78 },
            protein: { value: 6.1 },
            calcium: { value: 30.61, percent: 2 },
            iron: { value: 1.82, percent: 10 },
            potassium: { value: 0 },
            vitaminC: { value: 16.33, percent: 18 }
        },
        nutritionSummary: {
            calories: 163,
            fat: '6.8g',
            carbs: '20.0g',
            protein: '6.1g',
            summaryText: 'A serving of chickpeas curry.',
            breakdown: '38% fat, 49% carbs, 13% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 163 }
        ]
    },
    {
        slug: 'lobia-curry',
        name: 'Lobia curry',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 148.99,
            totalFat: { value: 5.62 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 355.41 },
            totalCarbohydrate: { value: 17.88 },
            dietaryFiber: { value: 4.57 },
            sugars: { value: 2.51 },
            protein: { value: 6.06 },
            calcium: { value: 36.8, percent: 3 },
            iron: { value: 2.21, percent: 12 },
            potassium: { value: 0 },
            vitaminC: { value: 15.13, percent: 17 }
        },
        nutritionSummary: {
            calories: 149,
            fat: '5.6g',
            carbs: '17.9g',
            protein: '6.1g',
            summaryText: 'A serving of lobia curry.',
            breakdown: '34% fat, 48% carbs, 18% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 149 }
        ]
    },
    {
        slug: 'soyabean-curry',
        name: 'Soyabean curry',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 163.28,
            totalFat: { value: 10.19 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 352.69 },
            totalCarbohydrate: { value: 6.76 },
            dietaryFiber: { value: 7.34 },
            sugars: { value: 2.66 },
            protein: { value: 10.43 },
            calcium: { value: 65.13, percent: 5 },
            iron: { value: 2.79, percent: 16 },
            potassium: { value: 0 },
            vitaminC: { value: 15.13, percent: 17 }
        },
        nutritionSummary: {
            calories: 163,
            fat: '10.2g',
            carbs: '6.8g',
            protein: '10.4g',
            summaryText: 'A serving of soyabean curry.',
            breakdown: '56% fat, 17% carbs, 27% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 163 }
        ]
    },
    {
        slug: 'rajma-curry',
        name: 'Kidney bean curry (Rajmah curry)',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 143.73,
            totalFat: { value: 5.77 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 354.6 },
            totalCarbohydrate: { value: 16.38 },
            dietaryFiber: { value: 5.83 },
            sugars: { value: 2.49 },
            protein: { value: 5.95 },
            calcium: { value: 47.87, percent: 4 },
            iron: { value: 2.27, percent: 13 },
            potassium: { value: 0 },
            vitaminC: { value: 16.33, percent: 18 }
        },
        nutritionSummary: {
            calories: 144,
            fat: '5.8g',
            carbs: '16.4g',
            protein: '6.0g',
            summaryText: 'A serving of kidney bean curry.',
            breakdown: '36% fat, 46% carbs, 18% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 144 }
        ]
    },
    {
        slug: 'sambar',
        name: 'Sambar',
        cuisine: 'South Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 96.92,
            totalFat: { value: 4.38 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 159.54 },
            totalCarbohydrate: { value: 10.57 },
            dietaryFiber: { value: 3.52 },
            sugars: { value: 3.31 },
            protein: { value: 3.35 },
            calcium: { value: 30.24, percent: 2 },
            iron: { value: 1.24, percent: 7 },
            potassium: { value: 450, percent: 10 },
            vitaminC: { value: 20.35, percent: 23 }
        },
        nutritionSummary: {
            calories: 97,
            fat: '4.4g',
            carbs: '10.6g',
            protein: '3.4g',
            summaryText: 'A lentil-based vegetable stew, cooked with tamarind broth.',
            breakdown: '41% fat, 44% carbs, 15% protein.',
        },
        servingSizes: [
            { size: '1 cup', calories: 97 },
            { size: '1 bowl (250ml)', calories: 121 },
        ]
    },
    {
        slug: 'aloo-gobi',
        name: 'Potato cauliflower (Aloo gobhi)',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 106.18,
            totalFat: { value: 8.13 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 254.76 },
            totalCarbohydrate: { value: 5.99 },
            dietaryFiber: { value: 3.02 },
            sugars: { value: 0.44 },
            protein: { value: 1.9 },
            calcium: { value: 22.87, percent: 2 },
            iron: { value: 1.07, percent: 6 },
            potassium: { value: 400, percent: 9 },
            vitaminC: { value: 61.11, percent: 68 }
        },
        nutritionSummary: {
            calories: 106,
            fat: '8.1g',
            carbs: '6.0g',
            protein: '1.9g',
            summaryText: 'A dry curry made with potatoes (aloo) and cauliflower (gobi).',
            breakdown: '69% fat, 23% carbs, 8% protein.',
        },
        servingSizes: [
            { size: '1 cup', calories: 106 }
        ]
    },
    {
        slug: 'matar-paneer',
        name: 'Pea paneer curry (Matar paneer)',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 134.83,
            totalFat: { value: 7.75 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 157.34 },
            totalCarbohydrate: { value: 9.29 },
            dietaryFiber: { value: 3.3 },
            sugars: { value: 3.89 },
            protein: { value: 6.61 },
            calcium: { value: 105.2, percent: 8 },
            iron: { value: 1.08, percent: 6 },
            potassium: { value: 0 },
            vitaminC: { value: 58.44, percent: 65 }
        },
        nutritionSummary: {
            calories: 135,
            fat: '7.8g',
            carbs: '9.3g',
            protein: '6.6g',
            summaryText: 'Peas and paneer in a tomato-based sauce.',
            breakdown: '52% fat, 28% carbs, 20% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 135 }
        ]
    },
    {
        slug: 'palak-paneer',
        name: 'Spinach paneer (Palak paneer)',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 77.68,
            totalFat: { value: 4.76 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 166.87 },
            totalCarbohydrate: { value: 4.43 },
            dietaryFiber: { value: 1.91 },
            sugars: { value: 2.55 },
            protein: { value: 4.03 },
            calcium: { value: 113.25, percent: 9 },
            iron: { value: 1.85, percent: 10 },
            potassium: { value: 0 },
            vitaminC: { value: 60.21, percent: 67 }
        },
        nutritionSummary: {
            calories: 78,
            fat: '4.8g',
            carbs: '4.4g',
            protein: '4.0g',
            summaryText: 'A classic Indian dish with spinach and paneer cheese.',
            breakdown: '55% fat, 23% carbs, 22% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 78 }
        ]
    },
    {
        slug: 'sarson-ka-saag',
        name: 'Sarson ka saag',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 87.84,
            totalFat: { value: 5.86 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 165.45 },
            totalCarbohydrate: { value: 5.33 },
            dietaryFiber: { value: 3.69 },
            sugars: { value: 0.75 },
            protein: { value: 3 },
            calcium: { value: 134.41, percent: 10 },
            iron: { value: 2.43, percent: 14 },
            potassium: { value: 0 },
            vitaminC: { value: 59.58, percent: 66 }
        },
        nutritionSummary: {
            calories: 88,
            fat: '5.9g',
            carbs: '5.3g',
            protein: '3.0g',
            summaryText: 'A popular Punjabi dish made from mustard greens.',
            breakdown: '60% fat, 24% carbs, 16% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 88 }
        ]
    },
    {
        slug: 'shahi-paneer',
        name: 'Shahi paneer',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Cheese, Milk & Dairy',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 156.5,
            totalFat: { value: 12.34 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 215.35 },
            totalCarbohydrate: { value: 6.64 },
            dietaryFiber: { value: 1.4 },
            sugars: { value: 5.01 },
            protein: { value: 5.06 },
            calcium: { value: 125.38, percent: 10 },
            iron: { value: 0.62, percent: 3 },
            potassium: { value: 0 },
            vitaminC: { value: 30.83, percent: 34 }
        },
        nutritionSummary: {
            calories: 157,
            fat: '12.3g',
            carbs: '6.6g',
            protein: '5.1g',
            summaryText: 'A creamy and rich paneer dish.',
            breakdown: '71% fat, 17% carbs, 12% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 157 }
        ]
    },
    {
        slug: 'butter-chicken',
        name: 'Butter chicken',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 137,
            totalFat: { value: 8.7 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 26.21 },
            totalCarbohydrate: { value: 3.74 },
            dietaryFiber: { value: 1.32 },
            sugars: { value: 2.37 },
            protein: { value: 10.92 },
            calcium: { value: 25.28, percent: 2 },
            iron: { value: 0.92, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 32.65, percent: 36 }
        },
        nutritionSummary: {
            calories: 137,
            fat: '8.7g',
            carbs: '3.7g',
            protein: '10.9g',
            summaryText: 'A popular Indian chicken curry.',
            breakdown: '57% fat, 11% carbs, 32% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 137 }
        ]
    },
    {
        slug: 'chilli-paneer',
        name: 'Chilli paneer',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Cheese, Milk & Dairy',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 777.51,
            totalFat: { value: 84.01 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 89.04 },
            totalCarbohydrate: { value: 3.31 },
            dietaryFiber: { value: 0.5 },
            sugars: { value: 1.5 },
            protein: { value: 2.1 },
            calcium: { value: 42.9, percent: 3 },
            iron: { value: 0.36, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 4.87, percent: 5 }
        },
        nutritionSummary: {
            calories: 778,
            fat: '84.0g',
            carbs: '3.3g',
            protein: '2.1g',
            summaryText: 'A spicy Indo-Chinese paneer dish.',
            breakdown: '97% fat, 2% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 778 }
        ]
    },
    {
        slug: 'kadhai-paneer',
        name: 'Kadhai Paneer',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Cheese, Milk & Dairy',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 107.99,
            totalFat: { value: 6.81 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 144.33 },
            totalCarbohydrate: { value: 7.34 },
            dietaryFiber: { value: 2.07 },
            sugars: { value: 5.54 },
            protein: { value: 4.33 },
            calcium: { value: 91.53, percent: 7 },
            iron: { value: 0.65, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 85.83, percent: 95 }
        },
        nutritionSummary: {
            calories: 108,
            fat: '6.8g',
            carbs: '7.3g',
            protein: '4.3g',
            summaryText: 'Paneer and bell peppers cooked in a spicy masala.',
            breakdown: '57% fat, 27% carbs, 16% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 108 }
        ]
    },
    {
        slug: 'roghan-josh',
        name: 'Roghan josh',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 139.59,
            totalFat: { value: 9.02 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 204.31 },
            totalCarbohydrate: { value: 4.93 },
            dietaryFiber: { value: 2.08 },
            sugars: { value: 2.66 },
            protein: { value: 9.56 },
            calcium: { value: 112.33, percent: 9 },
            iron: { value: 1.77, percent: 10 },
            potassium: { value: 0 },
            vitaminC: { value: 12.41, percent: 14 }
        },
        nutritionSummary: {
            calories: 140,
            fat: '9.0g',
            carbs: '4.9g',
            protein: '9.6g',
            summaryText: 'An aromatic lamb or mutton dish.',
            breakdown: '58% fat, 14% carbs, 28% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 140 }
        ]
    },
    {
        slug: 'palak-mutton',
        name: 'Spinach mutton (Palak mutton)',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 80.32,
            totalFat: { value: 4.71 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 121.1 },
            totalCarbohydrate: { value: 3.45 },
            dietaryFiber: { value: 2.23 },
            sugars: { value: 1.42 },
            protein: { value: 5.74 },
            calcium: { value: 96.88, percent: 7 },
            iron: { value: 2.38, percent: 13 },
            potassium: { value: 0 },
            vitaminC: { value: 88.11, percent: 98 }
        },
        nutritionSummary: {
            calories: 80,
            fat: '4.7g',
            carbs: '3.5g',
            protein: '5.7g',
            summaryText: 'Mutton cooked with spinach.',
            breakdown: '53% fat, 17% carbs, 30% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 80 }
        ]
    },
    {
        slug: 'tandoori-chicken',
        name: 'Tandoori chicken',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 145.2,
            totalFat: { value: 7.93 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 158 },
            totalCarbohydrate: { value: 2.34 },
            dietaryFiber: { value: 0.5 },
            sugars: { value: 1.58 },
            protein: { value: 16.26 },
            calcium: { value: 44.33, percent: 3 },
            iron: { value: 0.9, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 39.53, percent: 44 }
        },
        nutritionSummary: {
            calories: 145,
            fat: '7.9g',
            carbs: '2.3g',
            protein: '16.3g',
            summaryText: 'Chicken marinated in yogurt and spices, roasted in a tandoor.',
            breakdown: '49% fat, 6% carbs, 45% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 145 }
        ]
    },
    {
        slug: 'fish-curry',
        name: 'Fish curry',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Fish & Seafood',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 111.13,
            totalFat: { value: 6.69 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 184.71 },
            totalCarbohydrate: { value: 3.77 },
            dietaryFiber: { value: 1.89 },
            sugars: { value: 2.02 },
            protein: { value: 8.76 },
            calcium: { value: 52.06, percent: 4 },
            iron: { value: 1.09, percent: 6 },
            potassium: { value: 0 },
            vitaminC: { value: 22.48, percent: 25 }
        },
        nutritionSummary: {
            calories: 111,
            fat: '6.7g',
            carbs: '3.8g',
            protein: '8.8g',
            summaryText: 'A flavorful fish curry.',
            breakdown: '54% fat, 14% carbs, 32% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 111 }
        ]
    },
    {
        slug: 'prawn-curry-coconut',
        name: 'Prawn curry (with coconut)',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Fish & Seafood',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 109.55,
            totalFat: { value: 6.93 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 375.86 },
            totalCarbohydrate: { value: 3.1 },
            dietaryFiber: { value: 1.56 },
            sugars: { value: 2.03 },
            protein: { value: 8.54 },
            calcium: { value: 37.25, percent: 3 },
            iron: { value: 0.96, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 3.72, percent: 4 }
        },
        nutritionSummary: {
            calories: 110,
            fat: '6.9g',
            carbs: '3.1g',
            protein: '8.5g',
            summaryText: 'A delicious prawn curry made with coconut.',
            breakdown: '57% fat, 11% carbs, 32% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 110 }
        ]
    },
    {
        slug: 'aloo-sabzi',
        name: 'Potato curry (Aloo ki sabzi)',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 89.56,
            totalFat: { value: 4.47 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 78.4 },
            totalCarbohydrate: { value: 10.42 },
            dietaryFiber: { value: 2.42 },
            sugars: { value: 1.58 },
            protein: { value: 1.52 },
            calcium: { value: 23.74, percent: 2 },
            iron: { value: 0.97, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 42.18, percent: 47 }
        },
        nutritionSummary: {
            calories: 90,
            fat: '4.5g',
            carbs: '10.4g',
            protein: '1.5g',
            summaryText: 'A simple potato curry.',
            breakdown: '45% fat, 47% carbs, 8% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 90 }
        ]
    },
    {
        slug: 'anda-curry',
        name: 'Egg curry (Anda curry)',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Eggs',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 117.52,
            totalFat: { value: 8.81 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 142.12 },
            totalCarbohydrate: { value: 4.03 },
            dietaryFiber: { value: 2.09 },
            sugars: { value: 1.9 },
            protein: { value: 5.38 },
            calcium: { value: 41.59, percent: 3 },
            iron: { value: 1.52, percent: 8 },
            potassium: { value: 0 },
            vitaminC: { value: 19.03, percent: 21 }
        },
        nutritionSummary: {
            calories: 118,
            fat: '8.8g',
            carbs: '4.0g',
            protein: '5.4g',
            summaryText: 'A flavorful egg curry.',
            breakdown: '67% fat, 14% carbs, 19% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 118 }
        ]
    },
    {
        slug: 'veg-curry-coconut',
        name: 'Vegetable curry with coconut',
        cuisine: 'South Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 83.07,
            totalFat: { value: 4.66 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 43.4 },
            totalCarbohydrate: { value: 7.19 },
            dietaryFiber: { value: 3.35 },
            sugars: { value: 1.41 },
            protein: { value: 2.77 },
            calcium: { value: 19.63, percent: 2 },
            iron: { value: 0.95, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 69.6, percent: 77 }
        },
        nutritionSummary: {
            calories: 83,
            fat: '4.7g',
            carbs: '7.2g',
            protein: '2.8g',
            summaryText: 'A vegetable curry with coconut milk.',
            breakdown: '50% fat, 35% carbs, 15% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 83 }
        ]
    },
    {
        slug: 'dahi-aloo',
        name: 'Curd with potatoes (Dahi aloo)',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 59.9,
            totalFat: { value: 2.72 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 51.99 },
            totalCarbohydrate: { value: 7.15 },
            dietaryFiber: { value: 1.19 },
            sugars: { value: 1.82 },
            protein: { value: 1.56 },
            calcium: { value: 36.36, percent: 3 },
            iron: { value: 0.47, percent: 3 },
            potassium: { value: 0 },
            vitaminC: { value: 42.93, percent: 48 }
        },
        nutritionSummary: {
            calories: 60,
            fat: '2.7g',
            carbs: '7.2g',
            protein: '1.6g',
            summaryText: 'Potatoes in a yogurt-based gravy.',
            breakdown: '41% fat, 48% carbs, 11% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 60 }
        ]
    },
    {
        slug: 'veg-jalfrezi',
        name: 'Vegetable jalfrezi',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 68.48,
            totalFat: { value: 4.38 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 79.46 },
            totalCarbohydrate: { value: 5.43 },
            dietaryFiber: { value: 2.97 },
            sugars: { value: 1.79 },
            protein: { value: 1.4 },
            calcium: { value: 27.11, percent: 2 },
            iron: { value: 0.68, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 26.08, percent: 29 }
        },
        nutritionSummary: {
            calories: 68,
            fat: '4.4g',
            carbs: '5.4g',
            protein: '1.4g',
            summaryText: 'A stir-fry of mixed vegetables in a thick, spicy sauce.',
            breakdown: '58% fat, 32% carbs, 10% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 68 }
        ]
    },
    {
        slug: 'dhansak-veg',
        name: 'Dhansak (vegetarian)',
        cuisine: 'Gujarati',
        mealCategory: 'Lunch',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 82.8,
            totalFat: { value: 4.18 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 34.18 },
            totalCarbohydrate: { value: 7.28 },
            dietaryFiber: { value: 4.17 },
            sugars: { value: 0.91 },
            protein: { value: 3.32 },
            calcium: { value: 26.4, percent: 2 },
            iron: { value: 1.26, percent: 7 },
            potassium: { value: 0 },
            vitaminC: { value: 13.25, percent: 15 }
        },
        nutritionSummary: {
            calories: 83,
            fat: '4.2g',
            carbs: '7.3g',
            protein: '3.3g',
            summaryText: 'A popular Parsi dish made with lentils, vegetables, and spices.',
            breakdown: '45% fat, 35% carbs, 20% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 83 }
        ]
    },
    {
        slug: 'rice-kheer',
        name: 'Rice kheer',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 75.03,
            totalFat: { value: 2.97 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 16.24 },
            totalCarbohydrate: { value: 10.05 },
            dietaryFiber: { value: 0.17 },
            sugars: { value: 8.02 },
            protein: { value: 2.3 },
            calcium: { value: 75.57, percent: 6 },
            iron: { value: 0.17, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 5.06, percent: 6 }
        },
        nutritionSummary: {
            calories: 75,
            fat: '3.0g',
            carbs: '10.1g',
            protein: '2.3g',
            summaryText: 'A creamy rice pudding.',
            breakdown: '36% fat, 54% carbs, 10% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 75 }
        ]
    },
    {
        slug: 'phirni',
        name: 'Phirni',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 116.12,
            totalFat: { value: 4.34 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 22.47 },
            totalCarbohydrate: { value: 16.11 },
            dietaryFiber: { value: 0.36 },
            sugars: { value: 10.79 },
            protein: { value: 3.49 },
            calcium: { value: 104.57, percent: 8 },
            iron: { value: 0.23, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 5.04, percent: 6 }
        },
        nutritionSummary: {
            calories: 116,
            fat: '4.3g',
            carbs: '16.1g',
            protein: '3.5g',
            summaryText: 'A classic Indian sweet pudding made from ground rice.',
            breakdown: '34% fat, 55% carbs, 11% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 116 }
        ]
    },
    {
        slug: 'suji-halwa',
        name: 'Semolina halwa (Suji ka halwa)',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 225.65,
            totalFat: { value: 13.38 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 1.28 },
            totalCarbohydrate: { value: 24.67 },
            dietaryFiber: { value: 1.86 },
            sugars: { value: 13.98 },
            protein: { value: 2.16 },
            calcium: { value: 11.77, percent: 1 },
            iron: { value: 0.65, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 0.05, percent: 0 }
        },
        nutritionSummary: {
            calories: 226,
            fat: '13.4g',
            carbs: '24.7g',
            protein: '2.2g',
            summaryText: 'A sweet Indian dish made from semolina.',
            breakdown: '53% fat, 44% carbs, 3% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 226 }
        ]
    },
    {
        slug: 'gajar-halwa',
        name: 'Carrot halwa (Gajar ka halwa)',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 172.64,
            totalFat: { value: 9.73 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 39.96 },
            totalCarbohydrate: { value: 18.53 },
            dietaryFiber: { value: 2.65 },
            sugars: { value: 16.85 },
            protein: { value: 3.11 },
            calcium: { value: 106.94, percent: 8 },
            iron: { value: 0.76, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 6.53, percent: 7 }
        },
        nutritionSummary: {
            calories: 173,
            fat: '9.7g',
            carbs: '18.5g',
            protein: '3.1g',
            summaryText: 'A sweet dessert pudding made from carrots.',
            breakdown: '51% fat, 43% carbs, 6% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 173 }
        ]
    },
    {
        slug: 'moong-dal-halwa',
        name: 'Moong dal halwa',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 349.8,
            totalFat: { value: 17.68 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 11.19 },
            totalCarbohydrate: { value: 40.23 },
            dietaryFiber: { value: 2.65 },
            sugars: { value: 25.59 },
            protein: { value: 8.35 },
            calcium: { value: 110.4, percent: 8 },
            iron: { value: 1.51, percent: 8 },
            potassium: { value: 0 },
            vitaminC: { value: 0.03, percent: 0 }
        },
        nutritionSummary: {
            calories: 350,
            fat: '17.7g',
            carbs: '40.2g',
            protein: '8.4g',
            summaryText: 'A rich and sweet lentil pudding.',
            breakdown: '46% fat, 46% carbs, 8% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 350 }
        ]
    },
    {
        slug: 'kulfi',
        name: 'Kulfi',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 98.43,
            totalFat: { value: 4.7 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 23.97 },
            totalCarbohydrate: { value: 11.3 },
            dietaryFiber: { value: 0.12 },
            sugars: { value: 10.39 },
            protein: { value: 3.21 },
            calcium: { value: 111.86, percent: 9 },
            iron: { value: 0.2, percent: 1 },
            potassium: { value: 0 },
            vitaminC: { value: 5.04, percent: 6 }
        },
        nutritionSummary: {
            calories: 98,
            fat: '4.7g',
            carbs: '11.3g',
            protein: '3.2g',
            summaryText: 'Traditional Indian ice cream.',
            breakdown: '43% fat, 46% carbs, 11% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 98 }
        ]
    },
    {
        slug: 'plain-burfi',
        name: 'Plain burfi',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 408.32,
            totalFat: { value: 27.96 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 31.65 },
            totalCarbohydrate: { value: 30.88 },
            dietaryFiber: { value: 0.17 },
            sugars: { value: 30.43 },
            protein: { value: 9.82 },
            calcium: { value: 355.78, percent: 27 },
            iron: { value: 1.5, percent: 8 },
            potassium: { value: 0 },
            vitaminC: { value: 0.05, percent: 0 }
        },
        nutritionSummary: {
            calories: 408,
            fat: '28.0g',
            carbs: '30.9g',
            protein: '9.8g',
            summaryText: 'A dense milk-based sweet.',
            breakdown: '61% fat, 30% carbs, 9% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 408 }
        ]
    },
    {
        slug: 'coconut-burfi',
        name: 'Coconut burfi',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 467.64,
            totalFat: { value: 34.63 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 27.63 },
            totalCarbohydrate: { value: 32.15 },
            dietaryFiber: { value: 3.5 },
            sugars: { value: 31.5 },
            protein: { value: 8.81 },
            calcium: { value: 272.81, percent: 21 },
            iron: { value: 1.82, percent: 10 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 468,
            fat: '34.6g',
            carbs: '32.2g',
            protein: '8.8g',
            summaryText: 'A sweet coconut fudge.',
            breakdown: '67% fat, 28% carbs, 5% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 468 }
        ]
    },
    {
        slug: 'kaju-katli',
        name: 'Cashewnut burfi (Kaju katli)',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 421.74,
            totalFat: { value: 28.46 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 4.23 },
            totalCarbohydrate: { value: 37.92 },
            dietaryFiber: { value: 1.12 },
            sugars: { value: 31.43 },
            protein: { value: 5.48 },
            calcium: { value: 12.95, percent: 1 },
            iron: { value: 1.79, percent: 10 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 422,
            fat: '28.5g',
            carbs: '37.9g',
            protein: '5.5g',
            summaryText: 'A popular cashew-based sweet.',
            breakdown: '61% fat, 36% carbs, 3% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 422 }
        ]
    },
    {
        slug: 'besan-ladoo',
        name: 'Gram flour ladoo (Besan ladoo)',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 476.91,
            totalFat: { value: 22.76 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 5.48 },
            totalCarbohydrate: { value: 62.61 },
            dietaryFiber: { value: 4.43 },
            sugars: { value: 37.76 },
            protein: { value: 8.93 },
            calcium: { value: 25.35, percent: 2 },
            iron: { value: 1.51, percent: 8 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 477,
            fat: '22.8g',
            carbs: '62.6g',
            protein: '8.9g',
            summaryText: 'Sweet balls made from gram flour.',
            breakdown: '43% fat, 53% carbs, 4% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 477 }
        ]
    },
    {
        slug: 'til-ladoo',
        name: 'Sesame ladoo (Til ke ladoo)',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 396.96,
            totalFat: { value: 19.64 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 18.55 },
            totalCarbohydrate: { value: 43.5 },
            dietaryFiber: { value: 7.72 },
            sugars: { value: 38.63 },
            protein: { value: 10.7 },
            calcium: { value: 631.82, percent: 49 },
            iron: { value: 8.94, percent: 50 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 397,
            fat: '19.6g',
            carbs: '43.5g',
            protein: '10.7g',
            summaryText: 'Sweet balls made from sesame seeds.',
            breakdown: '44% fat, 44% carbs, 12% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 397 }
        ]
    },
    {
        slug: 'gulab-jamun',
        name: 'Gulab Jamun with khoya',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 586.06,
            totalFat: { value: 53.23 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 15.09 },
            totalCarbohydrate: { value: 26.09 },
            dietaryFiber: { value: 0.07 },
            sugars: { value: 24.12 },
            protein: { value: 2.03 },
            calcium: { value: 67.32, percent: 5 },
            iron: { value: 0.39, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 0.02, percent: 0 }
        },
        nutritionSummary: {
            calories: 586,
            fat: '53.2g',
            carbs: '26.1g',
            protein: '2.0g',
            summaryText: 'A classic Indian sweet made of milk solids, deep-fried and soaked in syrup.',
            breakdown: '82% fat, 18% carbs, 0% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 586 }
        ]
    },
    {
        slug: 'malpua',
        name: 'Mal pua',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 566.68,
            totalFat: { value: 54.64 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 6.35 },
            totalCarbohydrate: { value: 17.56 },
            dietaryFiber: { value: 0.62 },
            sugars: { value: 11.77 },
            protein: { value: 1.71 },
            calcium: { value: 30.05, percent: 2 },
            iron: { value: 0.33, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 0.67, percent: 1 }
        },
        nutritionSummary: {
            calories: 567,
            fat: '54.6g',
            carbs: '17.6g',
            protein: '1.7g',
            summaryText: 'A sweet pancake-like dessert, popular in many parts of India.',
            breakdown: '87% fat, 12% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 567 }
        ]
    },
    {
        slug: 'aloo-pakora',
        name: 'Potato pakora/pakoda',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 677.19,
            totalFat: { value: 71.84 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 63.38 },
            totalCarbohydrate: { value: 6.04 },
            dietaryFiber: { value: 1.03 },
            sugars: { value: 0.22 },
            protein: { value: 1.9 },
            calcium: { value: 6.59, percent: 1 },
            iron: { value: 0.38, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 18.53, percent: 21 }
        },
        nutritionSummary: {
            calories: 677,
            fat: '71.8g',
            carbs: '6.0g',
            protein: '1.9g',
            summaryText: 'A deep-fried potato fritter.',
            breakdown: '95% fat, 4% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 677 }
        ]
    },
    {
        slug: 'onion-pakora',
        name: 'Onion pakora/pakoda',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 674.61,
            totalFat: { value: 71.84 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 63.55 },
            totalCarbohydrate: { value: 5.41 },
            dietaryFiber: { value: 1.11 },
            sugars: { value: 0.88 },
            protein: { value: 1.9 },
            calcium: { value: 7.95, percent: 1 },
            iron: { value: 0.36, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 5.36, percent: 6 }
        },
        nutritionSummary: {
            calories: 675,
            fat: '71.8g',
            carbs: '5.4g',
            protein: '1.9g',
            summaryText: 'A deep-fried onion fritter.',
            breakdown: '95% fat, 4% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 675 }
        ]
    },
    {
        slug: 'gobi-pakora',
        name: 'Cauliflower pakora/pakoda',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 671.63,
            totalFat: { value: 71.86 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 66.54 },
            totalCarbohydrate: { value: 4.52 },
            dietaryFiber: { value: 1.26 },
            sugars: { value: 0.23 },
            protein: { value: 1.98 },
            calcium: { value: 8.44, percent: 1 },
            iron: { value: 0.42, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 37.72, percent: 42 }
        },
        nutritionSummary: {
            calories: 672,
            fat: '71.9g',
            carbs: '4.5g',
            protein: '2.0g',
            summaryText: 'A deep-fried cauliflower fritter.',
            breakdown: '96% fat, 3% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 672 }
        ]
    },
    {
        slug: 'mixed-veg-pakora',
        name: 'Mixed vegetable pakora/pakoda',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 673.81,
            totalFat: { value: 71.86 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 65.35 },
            totalCarbohydrate: { value: 5.12 },
            dietaryFiber: { value: 1.13 },
            sugars: { value: 0.38 },
            protein: { value: 1.94 },
            calcium: { value: 9.55, percent: 1 },
            iron: { value: 0.46, percent: 3 },
            potassium: { value: 0 },
            vitaminC: { value: 21.46, percent: 24 }
        },
        nutritionSummary: {
            calories: 674,
            fat: '71.9g',
            carbs: '5.1g',
            protein: '1.9g',
            summaryText: 'A deep-fried mixed vegetable fritter.',
            breakdown: '95% fat, 4% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 674 }
        ]
    },
    {
        slug: 'bread-pakora',
        name: 'Bread pakora/pakoda',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 710.99,
            totalFat: { value: 74.2 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 101.49 },
            totalCarbohydrate: { value: 8.87 },
            dietaryFiber: { value: 1.11 },
            sugars: { value: 0.46 },
            protein: { value: 2.57 },
            calcium: { value: 19.83, percent: 2 },
            iron: { value: 0.46, percent: 3 },
            potassium: { value: 0 },
            vitaminC: { value: 0.01, percent: 0 }
        },
        nutritionSummary: {
            calories: 711,
            fat: '74.2g',
            carbs: '8.9g',
            protein: '2.6g',
            summaryText: 'A deep-fried bread fritter.',
            breakdown: '94% fat, 5% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 711 }
        ]
    },
    {
        slug: 'paneer-pakora',
        name: 'Paneer pakora/pakoda',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 718.12,
            totalFat: { value: 76.05 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 131.7 },
            totalCarbohydrate: { value: 5.52 },
            dietaryFiber: { value: 0.89 },
            sugars: { value: 1.08 },
            protein: { value: 3.27 },
            calcium: { value: 43.38, percent: 3 },
            iron: { value: 0.43, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 0.07, percent: 0 }
        },
        nutritionSummary: {
            calories: 718,
            fat: '76.1g',
            carbs: '5.5g',
            protein: '3.3g',
            summaryText: 'A deep-fried paneer fritter.',
            breakdown: '95% fat, 3% carbs, 2% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 718 }
        ]
    },
    {
        slug: 'aloo-samosa',
        name: 'Potato samosa (Aloo ka samosa)',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 577.39,
            totalFat: { value: 59.19 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 77.1 },
            totalCarbohydrate: { value: 9.21 },
            dietaryFiber: { value: 1.19 },
            sugars: { value: 0.29 },
            protein: { value: 1.71 },
            calcium: { value: 7.63, percent: 1 },
            iron: { value: 0.5, percent: 3 },
            potassium: { value: 0 },
            vitaminC: { value: 11.27, percent: 13 }
        },
        nutritionSummary: {
            calories: 577,
            fat: '59.2g',
            carbs: '9.2g',
            protein: '1.7g',
            summaryText: 'A deep-fried pastry with a savory potato filling.',
            breakdown: '92% fat, 6% carbs, 2% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 577 }
        ]
    },
    {
        slug: 'mathri',
        name: 'Mathri',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 805.12,
            totalFat: { value: 83.1 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 64.7 },
            totalCarbohydrate: { value: 12.32 },
            dietaryFiber: { value: 0.6 },
            sugars: { value: 0.29 },
            protein: { value: 1.75 },
            calcium: { value: 5.23, percent: 0 },
            iron: { value: 0.43, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 805,
            fat: '83.1g',
            carbs: '12.3g',
            protein: '1.8g',
            summaryText: 'A crispy, savory Indian snack.',
            breakdown: '93% fat, 6% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 805 }
        ]
    },
    {
        slug: 'veg-cutlet',
        name: 'Vegetable cutlet',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 665.45,
            totalFat: { value: 71.33 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 85.38 },
            totalCarbohydrate: { value: 4.68 },
            dietaryFiber: { value: 0.93 },
            sugars: { value: 0.35 },
            protein: { value: 1.25 },
            calcium: { value: 13.55, percent: 1 },
            iron: { value: 0.4, percent: 2 },
            potassium: { value: 0 },
            vitaminC: { value: 16.89, percent: 19 }
        },
        nutritionSummary: {
            calories: 665,
            fat: '71.3g',
            carbs: '4.7g',
            protein: '1.3g',
            summaryText: 'A savory vegetable patty.',
            breakdown: '96% fat, 3% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 665 }
        ]
    },
    {
        slug: 'veg-burger',
        name: 'Vegetable burger',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Fast Food',
        nutritionFacts: {
            servingSize: '1 burger',
            calories: 519.93,
            totalFat: { value: 50.63 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 168.97 },
            totalCarbohydrate: { value: 13.69 },
            dietaryFiber: { value: 1.7 },
            sugars: { value: 1.88 },
            protein: { value: 3.26 },
            calcium: { value: 26.08, percent: 2 },
            iron: { value: 0.7, percent: 4 },
            potassium: { value: 0 },
            vitaminC: { value: 24.68, percent: 27 }
        },
        nutritionSummary: {
            calories: 520,
            fat: '50.6g',
            carbs: '13.7g',
            protein: '3.3g',
            summaryText: 'A vegetable burger patty in a bun.',
            breakdown: '88% fat, 11% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 burger', calories: 520 }
        ]
    },
    {
        slug: 'cheese-pizza',
        name: 'Cheese pizza',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Fast Food',
        nutritionFacts: {
            servingSize: '1 slice',
            calories: 249.5,
            totalFat: { value: 12.43 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 397.73 },
            totalCarbohydrate: { value: 30.62 },
            dietaryFiber: { value: 1.95 },
            sugars: { value: 3.42 },
            protein: { value: 5.79 },
            calcium: { value: 96.51, percent: 7 },
            iron: { value: 1.09, percent: 6 },
            potassium: { value: 0 },
            vitaminC: { value: 6.72, percent: 7 }
        },
        nutritionSummary: {
            calories: 250,
            fat: '12.4g',
            carbs: '30.6g',
            protein: '5.8g',
            summaryText: 'A slice of cheese pizza.',
            breakdown: '45% fat, 49% carbs, 6% protein.',
        },
        servingSizes: [
            { size: '1 slice', calories: 250 }
        ]
    },
    {
        slug: 'spring-roll',
        name: 'Spring roll',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 roll',
            calories: 623.87,
            totalFat: { value: 64.63 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 132.84 },
            totalCarbohydrate: { value: 8.56 },
            dietaryFiber: { value: 0.67 },
            sugars: { value: 0.6 },
            protein: { value: 1.81 },
            calcium: { value: 9.51, percent: 1 },
            iron: { value: 0.49, percent: 3 },
            potassium: { value: 0 },
            vitaminC: { value: 4.59, percent: 5 }
        },
        nutritionSummary: {
            calories: 624,
            fat: '64.6g',
            carbs: '8.6g',
            protein: '1.8g',
            summaryText: 'A deep-fried spring roll.',
            breakdown: '93% fat, 6% carbs, 1% protein.',
        },
        servingSizes: [
            { size: '1 roll', calories: 624 }
        ]
    },
    {
        slug: 'coconut-chutney',
        name: 'Coconut chutney (Nariyal ki chutney)',
        cuisine: 'South Indian',
        mealCategory: 'Other',
        foodGroup: 'Sauces, Spices & Spreads',
        nutritionFacts: {
            servingSize: '1 tbsp',
            calories: 265.92,
            totalFat: { value: 25 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 428.28 },
            totalCarbohydrate: { value: 8.29 },
            dietaryFiber: { value: 6.73 },
            sugars: { value: 3.79 },
            protein: { value: 3.59 },
            calcium: { value: 15.7, percent: 1 },
            iron: { value: 1.25, percent: 7 },
            potassium: { value: 0 },
            vitaminC: { value: 4.13, percent: 5 }
        },
        nutritionSummary: {
            calories: 266,
            fat: '25.0g',
            carbs: '8.3g',
            protein: '3.6g',
            summaryText: 'A traditional South Indian coconut chutney.',
            breakdown: '85% fat, 12% carbs, 3% protein.',
        },
        servingSizes: [
            { size: '1 tbsp', calories: 266 }
        ]
    },
    {
        slug: 'mint-coriander-chutney',
        name: 'Mint and coriander chutney',
        cuisine: 'North Indian',
        mealCategory: 'Other',
        foodGroup: 'Sauces, Spices & Spreads',
        nutritionFacts: {
            servingSize: '1 tbsp',
            calories: 102.6,
            totalFat: { value: 0.51 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 391.66 },
            totalCarbohydrate: { value: 21.18 },
            dietaryFiber: { value: 4.33 },
            sugars: { value: 15.88 },
            protein: { value: 2.81 },
            calcium: { value: 107.45, percent: 8 },
            iron: { value: 4.76, percent: 26 },
            potassium: { value: 0 },
            vitaminC: { value: 3.62, percent: 4 }
        },
        nutritionSummary: {
            calories: 103,
            fat: '0.5g',
            carbs: '21.2g',
            protein: '2.8g',
            summaryText: 'A flavorful chutney made with mint and coriander.',
            breakdown: '4% fat, 83% carbs, 13% protein.',
        },
        servingSizes: [
            { size: '1 tbsp', calories: 103 }
        ]
    },
    {
        slug: 'dhokla',
        name: 'Dhokla',
        cuisine: 'Gujarati',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 216.49,
            totalFat: { value: 5.28 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 376.02 },
            totalCarbohydrate: { value: 30.68 },
            dietaryFiber: { value: 4.95 },
            sugars: { value: 4.78 },
            protein: { value: 13.45 },
            calcium: { value: 123.21, percent: 9 },
            iron: { value: 1.39, percent: 8 },
            potassium: { value: 150, percent: 3 },
            vitaminC: { value: 0.68, percent: 1 }
        },
        nutritionSummary: {
            calories: 216,
            fat: '5.3g',
            carbs: '30.7g',
            protein: '13.5g',
            summaryText: 'A savory and spongy steamed cake from Gujarat made from a fermented batter.',
            breakdown: '22% fat, 57% carbs, 21% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 54 },
            { size: '100g', calories: 216 },
        ]
    },
    {
        slug: 'suji-rava-upma',
        name: 'Semolina upma (Suji/Rava upma)',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 147.89,
            totalFat: { value: 7.49 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 101.59 },
            totalCarbohydrate: { value: 16.31 },
            dietaryFiber: { value: 3.24 },
            sugars: { value: 1.31 },
            protein: { value: 3.3 },
            calcium: { value: 21.57, percent: 2 },
            iron: { value: 1.1, percent: 6 },
            potassium: { value: 180, percent: 4 },
            vitaminC: { value: 4.64, percent: 5 }
        },
        nutritionSummary: {
            calories: 148,
            fat: '7.5g',
            carbs: '16.3g',
            protein: '3.3g',
            summaryText: 'A savory South Indian breakfast porridge made from semolina.',
            breakdown: '45% fat, 44% carbs, 11% protein.',
        },
        servingSizes: [
            { size: '1 cup', calories: 148 },
            { size: '1 bowl (150g)', calories: 222 }
        ]
    },
    {
        slug: 'poha',
        name: 'Poha',
        cuisine: 'Maharashtrian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 294.53,
            totalFat: { value: 14.14 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 377.1 },
            totalCarbohydrate: { value: 35.05 },
            dietaryFiber: { value: 3.72 },
            sugars: { value: 0.87 },
            protein: { value: 6.09 },
            calcium: { value: 37.67, percent: 3 },
            iron: { value: 3.01, percent: 17 },
            potassium: { value: 150, percent: 3 },
            vitaminC: { value: 6.62, percent: 7 }
        },
        nutritionSummary: {
            calories: 295,
            fat: '14.1g',
            carbs: '35.1g',
            protein: '6.1g',
            summaryText: 'A light and popular Maharashtrian breakfast.',
            breakdown: '43% fat, 48% carbs, 9% protein.',
        },
        servingSizes: [{ size: '1 cup', calories: 295 }]
    },
    {
        slug: 'sago-khichdi',
        name: 'Sago khitchdi/khichri (Sabudana khichdi)',
        cuisine: 'Maharashtrian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 187.16,
            totalFat: { value: 10.1 },
            saturatedFat: { value: 0 },
            transFat: { value: 0 },
            cholesterol: { value: 0 },
            sodium: { value: 100.26 },
            totalCarbohydrate: { value: 22.41 },
            dietaryFiber: { value: 1.82 },
            sugars: { value: 1.03 },
            protein: { value: 2.72 },
            calcium: { value: 15.13, percent: 1 },
            iron: { value: 0.86, percent: 5 },
            potassium: { value: 0 },
            vitaminC: { value: 13.41, percent: 15 }
        },
        nutritionSummary: {
            calories: 187,
            fat: '10.1g',
            carbs: '22.4g',
            protein: '2.7g',
            summaryText: 'A popular Indian dish made from soaked sago.',
            breakdown: '49% fat, 48% carbs, 3% protein.',
        },
        servingSizes: [
            { size: '1 serving', calories: 187 }
        ]
    }
];
