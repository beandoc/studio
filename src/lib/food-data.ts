
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
        vitaminD?: { value: number; percent: number };
        calcium?: { value: number; percent?: number };
        iron?: { value: number; percent?: number };
        potassium?: { value: number; percent?: number };
        vitaminA?: { value: number; percent: number };
        vitaminC?: { value: number; percent?: number };
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
            cholesterol: { value: 0 },
            sodium: { value: 3.12 },
            totalCarbohydrate: { value: 2.58 },
            dietaryFiber: { value: 0 },
            sugars: { value: 2.58 },
            protein: { value: 0.39 },
            calcium: { value: 14.2 },
            iron: { value: 0.02 },
            vitaminC: { value: 0.5 },
            folate: { value: 1.8 }
        },
        nutritionSummary: {
            calories: 16,
            fat: '0.5g',
            carbs: '2.6g',
            protein: '0.4g',
            summaryText: 'A serving of hot tea.',
            breakdown: '29% fat, 64% carbs, 7% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 4.92 },
            totalCarbohydrate: { value: 3.65 },
            dietaryFiber: { value: 0 },
            sugars: { value: 3.62 },
            protein: { value: 0.64 },
            calcium: { value: 20.87 },
            iron: { value: 0.06 },
            vitaminC: { value: 1.51 },
            folate: { value: 5.6 }
        },
        nutritionSummary: {
            calories: 23,
            fat: '0.8g',
            carbs: '3.7g',
            protein: '0.6g',
            summaryText: 'A serving of instant coffee.',
            breakdown: '29% fat, 63% carbs, 8% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 13.98 },
            totalCarbohydrate: { value: 6.62 },
            dietaryFiber: { value: 0 },
            sugars: { value: 6.53 },
            protein: { value: 1.75 },
            calcium: { value: 58.1 },
            iron: { value: 0.15 },
            vitaminC: { value: 1.51 },
            folate: { value: 5.53 }
        },
        nutritionSummary: {
            calories: 52,
            fat: '2.1g',
            carbs: '6.6g',
            protein: '1.8g',
            summaryText: 'A serving of espresso coffee.',
            breakdown: '37% fat, 51% carbs, 12% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 0.23 },
            totalCarbohydrate: { value: 2.7 },
            dietaryFiber: { value: 0 },
            sugars: { value: 2.7 },
            protein: { value: 0.03 },
            calcium: { value: 1.18 },
            iron: { value: 0.02 },
            vitaminC: { value: 5.95 },
            folate: { value: 1.28 }
        },
        nutritionSummary: {
            calories: 10,
            fat: '0.0g',
            carbs: '2.7g',
            protein: '0.0g',
            summaryText: 'A serving of iced tea.',
            breakdown: '0% fat, 99% carbs, 1% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 79.82 },
            totalCarbohydrate: { value: 9.05 },
            dietaryFiber: { value: 0.61 },
            sugars: { value: 7.49 },
            protein: { value: 0.16 },
            calcium: { value: 7.08 },
            iron: { value: 0.14 },
            vitaminC: { value: 45.3 },
            folate: { value: 14.05 }
        },
        nutritionSummary: {
            calories: 36,
            fat: '0.0g',
            carbs: '9.1g',
            protein: '0.2g',
            summaryText: 'A refreshing raw mango drink.',
            breakdown: '1% fat, 97% carbs, 2% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 2.63 },
            totalCarbohydrate: { value: 9.38 },
            dietaryFiber: { value: 0.06 },
            sugars: { value: 9.25 },
            protein: { value: 0.14 },
            calcium: { value: 5.07 },
            iron: { value: 0.1 },
            vitaminC: { value: 41.44 },
            folate: { value: 24.57 }
        },
        nutritionSummary: {
            calories: 36,
            fat: '0.0g',
            carbs: '9.4g',
            protein: '0.1g',
            summaryText: 'A serving of fruit punch with fresh juices.',
            breakdown: '1% fat, 97% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 36 }
        ]
    },
    {
        slug: 'fruit-punch-squash',
        name: 'Fruit Punch (with squashes)',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 23.13,
            totalFat: { value: 0.02 },
            cholesterol: { value: 0 },
            sodium: { value: 2.26 },
            totalCarbohydrate: { value: 5.99 },
            dietaryFiber: { value: 0.17 },
            sugars: { value: 5.88 },
            protein: { value: 0.07 },
            calcium: { value: 3.3 },
            iron: { value: 0.06 },
            vitaminC: { value: 15.08 },
            folate: { value: 9.13 }
        },
        nutritionSummary: {
            calories: 23,
            fat: '0.0g',
            carbs: '6.0g',
            protein: '0.1g',
            summaryText: 'A serving of fruit punch with squashes.',
            breakdown: '1% fat, 98% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 23 }
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
            cholesterol: { value: 0 },
            sodium: { value: 28.52 },
            totalCarbohydrate: { value: 5.48 },
            dietaryFiber: { value: 0.02 },
            sugars: { value: 5.47 },
            protein: { value: 0.03 },
            calcium: { value: 1.84 },
            iron: { value: 0.05 },
            vitaminC: { value: 5.27 },
            folate: { value: 2.11 }
        },
        nutritionSummary: {
            calories: 21,
            fat: '0.0g',
            carbs: '5.5g',
            protein: '0.0g',
            summaryText: 'A serving of lemonade.',
            breakdown: '0% fat, 99% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 21 }
        ]
    },
    {
        slug: 'lem-o-gin',
        name: 'Lem-o-gin',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 21.52,
            totalFat: { value: 0.03 },
            cholesterol: { value: 0 },
            sodium: { value: 28.13 },
            totalCarbohydrate: { value: 5.55 },
            dietaryFiber: { value: 0.13 },
            sugars: { value: 5.38 },
            protein: { value: 0.08 },
            calcium: { value: 2.2 },
            iron: { value: 0.09 },
            vitaminC: { value: 5.68 },
            folate: { value: 2.92 }
        },
        nutritionSummary: {
            calories: 22,
            fat: '0.0g',
            carbs: '5.6g',
            protein: '0.1g',
            summaryText: 'A serving of Lem-o-gin.',
            breakdown: '1% fat, 98% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 22 }
        ]
    },
    {
        slug: 'cumin-infused-water',
        name: 'Cumin infused water (Jeere/Zeere ka pani)',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 9.09,
            totalFat: { value: 0.11 },
            cholesterol: { value: 0 },
            sodium: { value: 189.6 },
            totalCarbohydrate: { value: 1.86 },
            dietaryFiber: { value: 0.46 },
            sugars: { value: 1.46 },
            protein: { value: 0.17 },
            calcium: { value: 10.84 },
            iron: { value: 0.32 },
            vitaminC: { value: 3.61 },
            folate: { value: 3.14 }
        },
        nutritionSummary: {
            calories: 9,
            fat: '0.1g',
            carbs: '1.9g',
            protein: '0.2g',
            summaryText: 'A serving of cumin infused water.',
            breakdown: '11% fat, 82% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 9 }
        ]
    },
    {
        slug: 'coco-pine-cooler',
        name: 'Coco pine cooler',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 32.75,
            totalFat: { value: 1 },
            cholesterol: { value: 0 },
            sodium: { value: 23.2 },
            totalCarbohydrate: { value: 5.72 },
            dietaryFiber: { value: 0.26 },
            sugars: { value: 5.52 },
            protein: { value: 0.56 },
            calcium: { value: 17.81 },
            iron: { value: 0.13 },
            vitaminC: { value: 10.67 },
            folate: { value: 12.64 }
        },
        nutritionSummary: {
            calories: 33,
            fat: '1.0g',
            carbs: '5.7g',
            protein: '0.6g',
            summaryText: 'A serving of coco pine cooler.',
            breakdown: '28% fat, 69% carbs, 3% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 33 }
        ]
    },
    {
        slug: 'summer-cooler',
        name: 'Summer cooler',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 22.43,
            totalFat: { value: 0.04 },
            cholesterol: { value: 0 },
            sodium: { value: 1.57 },
            totalCarbohydrate: { value: 5.43 },
            dietaryFiber: { value: 0.2 },
            sugars: { value: 5.21 },
            protein: { value: 0.37 },
            calcium: { value: 8.13 },
            iron: { value: 0.28 },
            vitaminC: { value: 103.5 },
            folate: { value: 63.89 }
        },
        nutritionSummary: {
            calories: 22,
            fat: '0.0g',
            carbs: '5.4g',
            protein: '0.4g',
            summaryText: 'A serving of summer cooler.',
            breakdown: '1% fat, 96% carbs, 3% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 22 }
        ]
    },
    {
        slug: 'hot-cocoa',
        name: 'Hot cocoa',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 90.1,
            totalFat: { value: 4.56 },
            cholesterol: { value: 0 },
            sodium: { value: 24.2 },
            totalCarbohydrate: { value: 9.23 },
            dietaryFiber: { value: 0 },
            sugars: { value: 9.01 },
            protein: { value: 3.36 },
            calcium: { value: 113.66 },
            iron: { value: 0.31 },
            vitaminC: { value: 3.62 },
            folate: { value: 13.79 }
        },
        nutritionSummary: {
            calories: 90,
            fat: '4.6g',
            carbs: '9.2g',
            protein: '3.4g',
            summaryText: 'A serving of hot cocoa.',
            breakdown: '46% fat, 41% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 90 }
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
            cholesterol: { value: 0 },
            sodium: { value: 13.84 },
            totalCarbohydrate: { value: 11.24 },
            dietaryFiber: { value: 0.01 },
            sugars: { value: 11.18 },
            protein: { value: 1.57 },
            calcium: { value: 53.29 },
            iron: { value: 0.12 },
            vitaminC: { value: 2.53 },
            folate: { value: 9.49 }
        },
        nutritionSummary: {
            calories: 68,
            fat: '2.1g',
            carbs: '11.2g',
            protein: '1.6g',
            summaryText: 'A serving of cold coffee with ice cream.',
            breakdown: '28% fat, 66% carbs, 6% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 68 }
        ]
    },
    {
        slug: 'banana-milkshake',
        name: 'Banana milkshake (Kele milkshake)',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 65.31,
            totalFat: { value: 2.37 },
            cholesterol: { value: 0 },
            sodium: { value: 13.61 },
            totalCarbohydrate: { value: 9.15 },
            dietaryFiber: { value: 0.26 },
            sugars: { value: 7.96 },
            protein: { value: 1.84 },
            calcium: { value: 62.64 },
            iron: { value: 0.13 },
            vitaminC: { value: 6.84 },
            folate: { value: 19.83 }
        },
        nutritionSummary: {
            calories: 65,
            fat: '2.4g',
            carbs: '9.2g',
            protein: '1.8g',
            summaryText: 'A serving of banana milkshake.',
            breakdown: '33% fat, 56% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 65 }
        ]
    },
    {
        slug: 'mango-milkshake',
        name: 'Mango milkshake (Aam milkshake)',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 56.9,
            totalFat: { value: 2.35 },
            cholesterol: { value: 0 },
            sodium: { value: 13.27 },
            totalCarbohydrate: { value: 7.23 },
            dietaryFiber: { value: 0.26 },
            sugars: { value: 7.15 },
            protein: { value: 1.73 },
            calcium: { value: 62.33 },
            iron: { value: 0.15 },
            vitaminC: { value: 20.1 },
            folate: { value: 53.68 }
        },
        nutritionSummary: {
            calories: 57,
            fat: '2.4g',
            carbs: '7.2g',
            protein: '1.7g',
            summaryText: 'A serving of mango milkshake.',
            breakdown: '37% fat, 51% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 57 }
        ]
    },
    {
        slug: 'pineapple-milkshake',
        name: 'Pineapple milkshake (Ananas milkshake)',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 55.72,
            totalFat: { value: 2.23 },
            cholesterol: { value: 0 },
            sodium: { value: 14.05 },
            totalCarbohydrate: { value: 7.62 },
            dietaryFiber: { value: 0 },
            sugars: { value: 7.6 },
            protein: { value: 1.66 },
            calcium: { value: 59.92 },
            iron: { value: 0.11 },
            vitaminC: { value: 10.22 },
            folate: { value: 17.45 }
        },
        nutritionSummary: {
            calories: 56,
            fat: '2.2g',
            carbs: '7.6g',
            protein: '1.7g',
            summaryText: 'A serving of pineapple milkshake.',
            breakdown: '36% fat, 55% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 56 }
        ]
    },
    {
        slug: 'orange-milkshake',
        name: 'Orange milkshake (Narangi milkshake)',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 57.42,
            totalFat: { value: 2.52 },
            cholesterol: { value: 0 },
            sodium: { value: 14.63 },
            totalCarbohydrate: { value: 7.11 },
            dietaryFiber: { value: 0 },
            sugars: { value: 7.08 },
            protein: { value: 1.86 },
            calcium: { value: 67.42 },
            iron: { value: 0.11 },
            vitaminC: { value: 10.82 },
            folate: { value: 16.85 }
        },
        nutritionSummary: {
            calories: 57,
            fat: '2.5g',
            carbs: '7.1g',
            protein: '1.9g',
            summaryText: 'A serving of orange milkshake.',
            breakdown: '39% fat, 50% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 57 }
        ]
    },
    {
        slug: 'egg-nog',
        name: 'Egg nog',
        cuisine: 'Generic',
        mealCategory: 'Beverages',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 97.14,
            totalFat: { value: 5.11 },
            cholesterol: { value: 0 },
            sodium: { value: 40.65 },
            totalCarbohydrate: { value: 8.15 },
            dietaryFiber: { value: 0.02 },
            sugars: { value: 8.06 },
            protein: { value: 4.78 },
            calcium: { value: 102.13 },
            iron: { value: 0.43 },
            vitaminC: { value: 4.82 },
            folate: { value: 41.91 }
        },
        nutritionSummary: {
            calories: 97,
            fat: '5.1g',
            carbs: '8.2g',
            protein: '4.8g',
            summaryText: 'A serving of egg nog.',
            breakdown: '47% fat, 34% carbs, 19% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 97 }
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
            cholesterol: { value: 0 },
            sodium: { value: 18.31 },
            totalCarbohydrate: { value: 6.51 },
            dietaryFiber: { value: 0 },
            sugars: { value: 6.51 },
            protein: { value: 1.29 },
            calcium: { value: 45.65 },
            iron: { value: 0.03 },
            vitaminC: { value: 1 },
            folate: { value: 18 }
        },
        nutritionSummary: {
            calories: 36,
            fat: '0.7g',
            carbs: '6.5g',
            protein: '1.3g',
            summaryText: 'A serving of sweet lassi.',
            breakdown: '17% fat, 73% carbs, 10% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 65.4 },
            totalCarbohydrate: { value: 1.86 },
            dietaryFiber: { value: 0.02 },
            sugars: { value: 1.84 },
            protein: { value: 1.35 },
            calcium: { value: 47.78 },
            iron: { value: 0.04 },
            vitaminC: { value: 1.02 },
            folate: { value: 18.07 }
        },
        nutritionSummary: {
            calories: 19,
            fat: '0.7g',
            carbs: '1.9g',
            protein: '1.4g',
            summaryText: 'A serving of salted lassi.',
            breakdown: '34% fat, 40% carbs, 26% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 437.5 },
            totalCarbohydrate: { value: 27.4 },
            dietaryFiber: { value: 2.08 },
            sugars: { value: 2.38 },
            protein: { value: 6.8 },
            calcium: { value: 113.79 },
            iron: { value: 0.99 },
            vitaminC: { value: 12.3 },
            folate: { value: 16.14 }
        },
        nutritionSummary: {
            calories: 218,
            fat: '9.8g',
            carbs: '27.4g',
            protein: '6.8g',
            summaryText: 'A cheese and chilli sandwich.',
            breakdown: '40% fat, 50% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 218 }
        ]
    },
    {
        slug: 'egg-sandwich',
        name: 'Egg sandwich (Ande ka sandwich)',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 285.96,
            totalFat: { value: 15.8 },
            cholesterol: { value: 0 },
            sodium: { value: 461.67 },
            totalCarbohydrate: { value: 29.16 },
            dietaryFiber: { value: 1.88 },
            sugars: { value: 1.86 },
            protein: { value: 8.69 },
            calcium: { value: 110.13 },
            iron: { value: 1.44 },
            vitaminC: { value: 0 },
            folate: { value: 14.92 }
        },
        nutritionSummary: {
            calories: 286,
            fat: '15.8g',
            carbs: '29.2g',
            protein: '8.7g',
            summaryText: 'An egg sandwich.',
            breakdown: '50% fat, 41% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 286 }
        ]
    },
    {
        slug: 'cucumber-sandwich',
        name: 'Cucumber sandwich (Kheere ka sandwich)',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 188.6,
            totalFat: { value: 8 },
            cholesterol: { value: 0 },
            sodium: { value: 362.64 },
            totalCarbohydrate: { value: 25.77 },
            dietaryFiber: { value: 2.45 },
            sugars: { value: 1.64 },
            protein: { value: 4.8 },
            calcium: { value: 87.84 },
            iron: { value: 1.02 },
            vitaminC: { value: 1.53 },
            folate: { value: 12.96 }
        },
        nutritionSummary: {
            calories: 189,
            fat: '8.0g',
            carbs: '25.8g',
            protein: '4.8g',
            summaryText: 'A cucumber sandwich.',
            breakdown: '38% fat, 55% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 189 }
        ]
    },
    {
        slug: 'cheese-pineapple-sandwich',
        name: 'Cheese and pineapple sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 257.71,
            totalFat: { value: 12.8 },
            cholesterol: { value: 0 },
            sodium: { value: 571.96 },
            totalCarbohydrate: { value: 29.1 },
            dietaryFiber: { value: 2.33 },
            sugars: { value: 4.1 },
            protein: { value: 8.2 },
            calcium: { value: 199.73 },
            iron: { value: 1.04 },
            vitaminC: { value: 3.64 },
            folate: { value: 12.08 }
        },
        nutritionSummary: {
            calories: 258,
            fat: '12.8g',
            carbs: '29.1g',
            protein: '8.2g',
            summaryText: 'A cheese and pineapple sandwich.',
            breakdown: '45% fat, 45% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 258 }
        ]
    },
    {
        slug: 'cheese-tomato-sandwich',
        name: 'Cheese and tomato sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 243.32,
            totalFat: { value: 12.27 },
            cholesterol: { value: 0 },
            sodium: { value: 549.71 },
            totalCarbohydrate: { value: 26.92 },
            dietaryFiber: { value: 1.97 },
            sugars: { value: 2.85 },
            protein: { value: 7.92 },
            calcium: { value: 191.2 },
            iron: { value: 1 },
            vitaminC: { value: 3.16 },
            folate: { value: 12.18 }
        },
        nutritionSummary: {
            calories: 243,
            fat: '12.3g',
            carbs: '26.9g',
            protein: '7.9g',
            summaryText: 'A cheese and tomato sandwich.',
            breakdown: '45% fat, 44% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 243 }
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
            cholesterol: { value: 0 },
            sodium: { value: 389.67 },
            totalCarbohydrate: { value: 25.38 },
            dietaryFiber: { value: 1.64 },
            sugars: { value: 1.6 },
            protein: { value: 13.12 },
            calcium: { value: 89.56 },
            iron: { value: 1.19 },
            vitaminC: { value: 0 },
            folate: { value: 11.1 }
        },
        nutritionSummary: {
            calories: 253,
            fat: '11.8g',
            carbs: '25.4g',
            protein: '13.1g',
            summaryText: 'A chicken sandwich.',
            breakdown: '42% fat, 40% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 253 }
        ]
    },
    {
        slug: 'peanut-tomato-sandwich',
        name: 'Peanut and tomato sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 291.43,
            totalFat: { value: 16.14 },
            cholesterol: { value: 0 },
            sodium: { value: 364.99 },
            totalCarbohydrate: { value: 28.54 },
            dietaryFiber: { value: 4.03 },
            sugars: { value: 2.82 },
            protein: { value: 9.53 },
            calcium: { value: 94.03 },
            iron: { value: 1.58 },
            vitaminC: { value: 3.16 },
            folate: { value: 22.04 }
        },
        nutritionSummary: {
            calories: 291,
            fat: '16.1g',
            carbs: '28.5g',
            protein: '9.5g',
            summaryText: 'A peanut and tomato sandwich.',
            breakdown: '50% fat, 39% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 291 }
        ]
    },
    {
        slug: 'rainbow-sandwich',
        name: 'Rainbow sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 272.75,
            totalFat: { value: 12.54 },
            cholesterol: { value: 0 },
            sodium: { value: 612.49 },
            totalCarbohydrate: { value: 34.26 },
            dietaryFiber: { value: 2.1 },
            sugars: { value: 4.05 },
            protein: { value: 7.75 },
            calcium: { value: 172.04 },
            iron: { value: 1.2 },
            vitaminC: { value: 1.01 },
            folate: { value: 10.38 }
        },
        nutritionSummary: {
            calories: 273,
            fat: '12.5g',
            carbs: '34.3g',
            protein: '7.8g',
            summaryText: 'A colorful rainbow sandwich.',
            breakdown: '41% fat, 50% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 273 }
        ]
    },
    {
        slug: 'club-sandwich',
        name: 'Club sandwich',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 235.32,
            totalFat: { value: 15.12 },
            cholesterol: { value: 0 },
            sodium: { value: 461.66 },
            totalCarbohydrate: { value: 18.51 },
            dietaryFiber: { value: 1.81 },
            sugars: { value: 2.01 },
            protein: { value: 7.31 },
            calcium: { value: 115.68 },
            iron: { value: 0.86 },
            vitaminC: { value: 6 },
            folate: { value: 17.42 }
        },
        nutritionSummary: {
            calories: 235,
            fat: '15.1g',
            carbs: '18.5g',
            protein: '7.3g',
            summaryText: 'A classic club sandwich.',
            breakdown: '58% fat, 31% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 235 }
        ]
    },
    {
        slug: 'vegetarian-club-sandwich',
        name: 'Vegetarian club sandwich',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 198.33,
            totalFat: { value: 11.33 },
            cholesterol: { value: 0 },
            sodium: { value: 305.36 },
            totalCarbohydrate: { value: 19.68 },
            dietaryFiber: { value: 2.06 },
            sugars: { value: 2.08 },
            protein: { value: 5.45 },
            calcium: { value: 122.44 },
            iron: { value: 0.77 },
            vitaminC: { value: 6 },
            folate: { value: 17.53 }
        },
        nutritionSummary: {
            calories: 198,
            fat: '11.3g',
            carbs: '19.7g',
            protein: '5.5g',
            summaryText: 'A vegetarian club sandwich.',
            breakdown: '51% fat, 40% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 198 }
        ]
    },
    {
        slug: 'pin-wheel-sandwich',
        name: 'Pin wheel sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 311.52,
            totalFat: { value: 24.93 },
            cholesterol: { value: 0 },
            sodium: { value: 374.39 },
            totalCarbohydrate: { value: 14 },
            dietaryFiber: { value: 0.93 },
            sugars: { value: 1.45 },
            protein: { value: 8.77 },
            calcium: { value: 67.75 },
            iron: { value: 1.36 },
            vitaminC: { value: 0 },
            folate: { value: 9.04 }
        },
        nutritionSummary: {
            calories: 312,
            fat: '24.9g',
            carbs: '14.0g',
            protein: '8.8g',
            summaryText: 'A pin wheel sandwich.',
            breakdown: '72% fat, 18% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 312 }
        ]
    },
    {
        slug: 'carrot-apple-sandwich',
        name: 'Carrot apple sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 214.11,
            totalFat: { value: 9.12 },
            cholesterol: { value: 0 },
            sodium: { value: 302.88 },
            totalCarbohydrate: { value: 29.04 },
            dietaryFiber: { value: 3.66 },
            sugars: { value: 5.3 },
            protein: { value: 5.3 },
            calcium: { value: 118.05 },
            iron: { value: 1.8 },
            vitaminC: { value: 2.7 },
            folate: { value: 21.7 }
        },
        nutritionSummary: {
            calories: 214,
            fat: '9.1g',
            carbs: '29.0g',
            protein: '5.3g',
            summaryText: 'A carrot and apple sandwich.',
            breakdown: '38% fat, 54% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 214 }
        ]
    },
    {
        slug: 'salami-sandwich',
        name: 'Salami sandwich',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 255.59,
            totalFat: { value: 15.51 },
            cholesterol: { value: 0 },
            sodium: { value: 662.75 },
            totalCarbohydrate: { value: 21.54 },
            dietaryFiber: { value: 1.97 },
            sugars: { value: 2 },
            protein: { value: 8.7 },
            calcium: { value: 73.54 },
            iron: { value: 1.11 },
            vitaminC: { value: 1.25 },
            folate: { value: 12.65 }
        },
        nutritionSummary: {
            calories: 256,
            fat: '15.5g',
            carbs: '21.5g',
            protein: '8.7g',
            summaryText: 'A salami sandwich.',
            breakdown: '55% fat, 34% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 256 }
        ]
    },
    {
        slug: 'vegetable-mayonnaise-sandwich',
        name: 'Vegetable and mayonnaise sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 244.26,
            totalFat: { value: 15.4 },
            cholesterol: { value: 0 },
            sodium: { value: 342.7 },
            totalCarbohydrate: { value: 23.2 },
            dietaryFiber: { value: 2.35 },
            sugars: { value: 2.35 },
            protein: { value: 4.47 },
            calcium: { value: 79.53 },
            iron: { value: 0.91 },
            vitaminC: { value: 12.9 },
            folate: { value: 17.05 }
        },
        nutritionSummary: {
            calories: 244,
            fat: '15.4g',
            carbs: '23.2g',
            protein: '4.5g',
            summaryText: 'A vegetable and mayonnaise sandwich.',
            breakdown: '57% fat, 38% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 244 }
        ]
    },
    {
        slug: 'egg-tomato-sandwich',
        name: 'Egg and tomato sandwich',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 222.11,
            totalFat: { value: 10.51 },
            cholesterol: { value: 0 },
            sodium: { value: 423.26 },
            totalCarbohydrate: { value: 25.9 },
            dietaryFiber: { value: 1.77 },
            sugars: { value: 2.09 },
            protein: { value: 7.66 },
            calcium: { value: 95.71 },
            iron: { value: 1.3 },
            vitaminC: { value: 1.98 },
            folate: { value: 16.33 }
        },
        nutritionSummary: {
            calories: 222,
            fat: '10.5g',
            carbs: '25.9g',
            protein: '7.7g',
            summaryText: 'An egg and tomato sandwich.',
            breakdown: '42% fat, 47% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 222 }
        ]
    },
    {
        slug: 'sweet-open-sandwich',
        name: 'Sweet open sandwich',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 244.25,
            totalFat: { value: 8.15 },
            cholesterol: { value: 0 },
            sodium: { value: 205.27 },
            totalCarbohydrate: { value: 39.24 },
            dietaryFiber: { value: 2.36 },
            sugars: { value: 12.23 },
            protein: { value: 4.99 },
            calcium: { value: 85.18 },
            iron: { value: 1.15 },
            vitaminC: { value: 1.65 },
            folate: { value: 13.05 }
        },
        nutritionSummary: {
            calories: 244,
            fat: '8.2g',
            carbs: '39.2g',
            protein: '5.0g',
            summaryText: 'A sweet open sandwich.',
            breakdown: '30% fat, 64% carbs, 6% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 244 }
        ]
    },
    {
        slug: 'mushroom-cheese-sandwich-toasted',
        name: 'Mushroom and cheese sandwich (toasted)',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 227.42,
            totalFat: { value: 13.01 },
            cholesterol: { value: 0 },
            sodium: { value: 456.57 },
            totalCarbohydrate: { value: 21.01 },
            dietaryFiber: { value: 2.28 },
            sugars: { value: 2.11 },
            protein: { value: 7.79 },
            calcium: { value: 172.35 },
            iron: { value: 0.84 },
            vitaminC: { value: 0 },
            folate: { value: 12.7 }
        },
        nutritionSummary: {
            calories: 227,
            fat: '13.0g',
            carbs: '21.0g',
            protein: '7.8g',
            summaryText: 'A toasted mushroom and cheese sandwich.',
            breakdown: '51% fat, 37% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 227 }
        ]
    },
    {
        slug: 'cheese-tomato-sandwich-toasted',
        name: 'Cheese and tomato sandwich (toasted)',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 224.58,
            totalFat: { value: 12.95 },
            cholesterol: { value: 0 },
            sodium: { value: 457.94 },
            totalCarbohydrate: { value: 21.42 },
            dietaryFiber: { value: 1.78 },
            sugars: { value: 2.67 },
            protein: { value: 6.82 },
            calcium: { value: 169.22 },
            iron: { value: 0.82 },
            vitaminC: { value: 6.32 },
            folate: { value: 14.48 }
        },
        nutritionSummary: {
            calories: 225,
            fat: '13.0g',
            carbs: '21.4g',
            protein: '6.8g',
            summaryText: 'A toasted cheese and tomato sandwich.',
            breakdown: '52% fat, 38% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 225 }
        ]
    },
    {
        slug: 'pea-potato-sandwich-toasted',
        name: 'Pea potato sandwich (toasted)',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 164.9,
            totalFat: { value: 5.43 },
            cholesterol: { value: 0 },
            sodium: { value: 262.63 },
            totalCarbohydrate: { value: 25.17 },
            dietaryFiber: { value: 2.89 },
            sugars: { value: 1.33 },
            protein: { value: 4.6 },
            calcium: { value: 64.15 },
            iron: { value: 1.11 },
            vitaminC: { value: 14.11 },
            folate: { value: 21.01 }
        },
        nutritionSummary: {
            calories: 165,
            fat: '5.4g',
            carbs: '25.2g',
            protein: '4.6g',
            summaryText: 'A toasted pea and potato sandwich.',
            breakdown: '29% fat, 61% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 165 }
        ]
    },
    {
        slug: 'paneer-pea-sandwich-toasted',
        name: 'Paneer pea sandwich (toasted)',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 249.56,
            totalFat: { value: 11.98 },
            cholesterol: { value: 0 },
            sodium: { value: 268.9 },
            totalCarbohydrate: { value: 24.05 },
            dietaryFiber: { value: 2.12 },
            sugars: { value: 6.4 },
            protein: { value: 12.4 },
            calcium: { value: 274.1 },
            iron: { value: 1.26 },
            vitaminC: { value: 4.85 },
            folate: { value: 52.13 }
        },
        nutritionSummary: {
            calories: 250,
            fat: '12.0g',
            carbs: '24.1g',
            protein: '12.4g',
            summaryText: 'A toasted paneer and pea sandwich.',
            breakdown: '43% fat, 39% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 250 }
        ]
    },
    {
        slug: 'chicken-sandwich-toasted',
        name: 'Chicken sandwich (toasted)',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 167.37,
            totalFat: { value: 5.32 },
            cholesterol: { value: 0 },
            sodium: { value: 327.55 },
            totalCarbohydrate: { value: 18.82 },
            dietaryFiber: { value: 1.64 },
            sugars: { value: 2.13 },
            protein: { value: 12.08 },
            calcium: { value: 99.99 },
            iron: { value: 0.99 },
            vitaminC: { value: 12.97 },
            folate: { value: 20.71 }
        },
        nutritionSummary: {
            calories: 167,
            fat: '5.3g',
            carbs: '18.8g',
            protein: '12.1g',
            summaryText: 'A toasted chicken sandwich.',
            breakdown: '28% fat, 45% carbs, 27% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 167 }
        ]
    },
    {
        slug: 'pea-keema-sandwich-toasted',
        name: 'Pea keema sandwich (toasted)',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 171.78,
            totalFat: { value: 5.61 },
            cholesterol: { value: 0 },
            sodium: { value: 290.07 },
            totalCarbohydrate: { value: 20.26 },
            dietaryFiber: { value: 2.45 },
            sugars: { value: 1.94 },
            protein: { value: 11.06 },
            calcium: { value: 70.79 },
            iron: { value: 1.51 },
            vitaminC: { value: 5.5 },
            folate: { value: 18.29 }
        },
        nutritionSummary: {
            calories: 172,
            fat: '5.6g',
            carbs: '20.3g',
            protein: '11.1g',
            summaryText: 'A toasted pea and keema sandwich.',
            breakdown: '29% fat, 47% carbs, 24% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 172 }
        ]
    },
    {
        slug: 'classic-club-sandwich',
        name: 'Classic club sandwich',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 200.83,
            totalFat: { value: 11.56 },
            cholesterol: { value: 0 },
            sodium: { value: 277.49 },
            totalCarbohydrate: { value: 18.49 },
            dietaryFiber: { value: 1.62 },
            sugars: { value: 1.86 },
            protein: { value: 6.74 },
            calcium: { value: 107.73 },
            iron: { value: 1.09 },
            vitaminC: { value: 16.19 },
            folate: { value: 56.9 }
        },
        nutritionSummary: {
            calories: 201,
            fat: '11.6g',
            carbs: '18.5g',
            protein: '6.7g',
            summaryText: 'A classic club sandwich.',
            breakdown: '52% fat, 37% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 201 }
        ]
    },
    {
        slug: 'sesame-toast',
        name: 'Sesame toast',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 495.19,
            totalFat: { value: 49.38 },
            cholesterol: { value: 0 },
            sodium: { value: 128.78 },
            totalCarbohydrate: { value: 11.15 },
            dietaryFiber: { value: 1.32 },
            sugars: { value: 1.46 },
            protein: { value: 1.9 },
            calcium: { value: 43.44 },
            iron: { value: 0.72 },
            vitaminC: { value: 6.92 },
            folate: { value: 8.87 }
        },
        nutritionSummary: {
            calories: 495,
            fat: '49.4g',
            carbs: '11.2g',
            protein: '1.9g',
            summaryText: 'A serving of sesame toast.',
            breakdown: '90% fat, 9% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 495 }
        ]
    },
    {
        slug: 'cracked-wheat-porridge',
        name: 'Cracked wheat porridge (Meetha daliya)',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 81.57,
            totalFat: { value: 4.08 },
            cholesterol: { value: 0 },
            sodium: { value: 15.89 },
            totalCarbohydrate: { value: 8.87 },
            dietaryFiber: { value: 0.62 },
            sugars: { value: 5.12 },
            protein: { value: 2.64 },
            calcium: { value: 75.88 },
            iron: { value: 0.32 },
            vitaminC: { value: 5.03 },
            folate: { value: 17.58 }
        },
        nutritionSummary: {
            calories: 82,
            fat: '4.1g',
            carbs: '8.9g',
            protein: '2.6g',
            summaryText: 'A serving of cracked wheat porridge.',
            breakdown: '45% fat, 44% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 82 }
        ]
    },
    {
        slug: 'semolina-porridge',
        name: 'Semolina porridge (Suji/Rava daliya)',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 100.89,
            totalFat: { value: 4.08 },
            cholesterol: { value: 0 },
            sodium: { value: 23.21 },
            totalCarbohydrate: { value: 12.39 },
            dietaryFiber: { value: 0.7 },
            sugars: { value: 7.54 },
            protein: { value: 3.75 },
            calcium: { value: 108.52 },
            iron: { value: 0.36 },
            vitaminC: { value: 5.03 },
            folate: { value: 22.71 }
        },
        nutritionSummary: {
            calories: 101,
            fat: '4.1g',
            carbs: '12.4g',
            protein: '3.8g',
            summaryText: 'A serving of semolina porridge.',
            breakdown: '36% fat, 49% carbs, 15% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 101 }
        ]
    },
    {
        slug: 'oatmeal-porridge',
        name: 'Oatmeal Porridge',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 72.85,
            totalFat: { value: 3.22 },
            cholesterol: { value: 0 },
            sodium: { value: 16.14 },
            totalCarbohydrate: { value: 8.77 },
            dietaryFiber: { value: 0.39 },
            sugars: { value: 5.2 },
            protein: { value: 2.6 },
            calcium: { value: 76.83 },
            iron: { value: 0.28 },
            vitaminC: { value: 5.03 },
            folate: { value: 23.98 }
        },
        nutritionSummary: {
            calories: 73,
            fat: '3.2g',
            carbs: '8.8g',
            protein: '2.6g',
            summaryText: 'A serving of oatmeal porridge.',
            breakdown: '40% fat, 48% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 73 }
        ]
    },
    {
        slug: 'cornflakes-with-milk',
        name: 'Cornflakes with milk',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 117.33,
            totalFat: { value: 5.12 },
            cholesterol: { value: 0 },
            sodium: { value: 26.55 },
            totalCarbohydrate: { value: 14.95 },
            dietaryFiber: { value: 0.78 },
            sugars: { value: 9.97 },
            protein: { value: 3.59 },
            calcium: { value: 106.47 },
            iron: { value: 0.42 },
            vitaminC: { value: 4.82 },
            folate: { value: 43.87 }
        },
        nutritionSummary: {
            calories: 117,
            fat: '5.1g',
            carbs: '15.0g',
            protein: '3.6g',
            summaryText: 'A serving of cornflakes with milk.',
            breakdown: '39% fat, 51% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 117 }
        ]
    },
    {
        slug: 'rice-flakes',
        name: 'Rice flakes (Chiwda/Aval)',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 112.44,
            totalFat: { value: 3.99 },
            cholesterol: { value: 0 },
            sodium: { value: 22.4 },
            totalCarbohydrate: { value: 15.57 },
            dietaryFiber: { value: 0.37 },
            sugars: { value: 7.28 },
            protein: { value: 3.62 },
            calcium: { value: 103.15 },
            iron: { value: 0.62 },
            vitaminC: { value: 4.82 },
            folate: { value: 19.41 }
        },
        nutritionSummary: {
            calories: 112,
            fat: '4.0g',
            carbs: '15.6g',
            protein: '3.6g',
            summaryText: 'A serving of rice flakes.',
            breakdown: '32% fat, 55% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 112 }
        ]
    },
    {
        slug: 'wheat-flakes',
        name: 'Wheat flakes',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 112.44,
            totalFat: { value: 3.99 },
            cholesterol: { value: 0 },
            sodium: { value: 22.4 },
            totalCarbohydrate: { value: 15.57 },
            dietaryFiber: { value: 0.37 },
            sugars: { value: 7.28 },
            protein: { value: 3.62 },
            calcium: { value: 103.15 },
            iron: { value: 0.62 },
            vitaminC: { value: 4.82 },
            folate: { value: 19.41 }
        },
        nutritionSummary: {
            calories: 112,
            fat: '4.0g',
            carbs: '15.6g',
            protein: '3.6g',
            summaryText: 'A serving of wheat flakes.',
            breakdown: '32% fat, 55% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 112 }
        ]
    },
    {
        slug: 'puffed-rice',
        name: 'Puffed rice (Murmura)',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 113.32,
            totalFat: { value: 4.04 },
            cholesterol: { value: 0 },
            sodium: { value: 22.52 },
            totalCarbohydrate: { value: 15.67 },
            dietaryFiber: { value: 0.28 },
            sugars: { value: 7.31 },
            protein: { value: 3.62 },
            calcium: { value: 103.79 },
            iron: { value: 0.63 },
            vitaminC: { value: 4.82 },
            folate: { value: 16.87 }
        },
        nutritionSummary: {
            calories: 113,
            fat: '4.0g',
            carbs: '15.7g',
            protein: '3.6g',
            summaryText: 'A serving of puffed rice.',
            breakdown: '32% fat, 55% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 113 }
        ]
    },
    {
        slug: 'puffed-wheat',
        name: 'Puffed wheat (Murmure/Moori)',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 113.32,
            totalFat: { value: 4.04 },
            cholesterol: { value: 0 },
            sodium: { value: 22.52 },
            totalCarbohydrate: { value: 15.67 },
            dietaryFiber: { value: 0.28 },
            sugars: { value: 7.31 },
            protein: { value: 3.62 },
            calcium: { value: 103.79 },
            iron: { value: 0.63 },
            vitaminC: { value: 4.82 },
            folate: { value: 16.87 }
        },
        nutritionSummary: {
            calories: 113,
            fat: '4.0g',
            carbs: '15.7g',
            protein: '3.6g',
            summaryText: 'A serving of puffed wheat.',
            breakdown: '32% fat, 55% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 113 }
        ]
    },
    {
        slug: 'boiled-egg',
        name: 'Boiled egg (Ubla anda)',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Eggs',
        nutritionFacts: {
            servingSize: '1 egg',
            calories: 45.35,
            totalFat: { value: 3.04 },
            cholesterol: { value: 0 },
            sodium: { value: 170.94 },
            totalCarbohydrate: { value: 0.12 },
            dietaryFiber: { value: 0.11 },
            sugars: { value: 0 },
            protein: { value: 4.43 },
            calcium: { value: 17.75 },
            iron: { value: 0.64 },
            vitaminC: { value: 0 },
            folate: { value: 24.77 }
        },
        nutritionSummary: {
            calories: 45,
            fat: '3.0g',
            carbs: '0.1g',
            protein: '4.4g',
            summaryText: 'A single boiled egg.',
            breakdown: '60% fat, 1% carbs, 39% protein.'
        },
        servingSizes: [
            { size: '1 egg', calories: 45 }
        ]
    },
    {
        slug: 'fried-egg',
        name: 'Fried Egg',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Eggs',
        nutritionFacts: {
            servingSize: '1 egg',
            calories: 223.67,
            totalFat: { value: 19.62 },
            cholesterol: { value: 0 },
            sodium: { value: 446.96 },
            totalCarbohydrate: { value: 0.31 },
            dietaryFiber: { value: 0.29 },
            sugars: { value: 0 },
            protein: { value: 11.59 },
            calcium: { value: 46.4 },
            iron: { value: 1.69 },
            vitaminC: { value: 0 },
            folate: { value: 24.77 }
        },
        nutritionSummary: {
            calories: 224,
            fat: '19.6g',
            carbs: '0.3g',
            protein: '11.6g',
            summaryText: 'A single fried egg.',
            breakdown: '79% fat, 1% carbs, 20% protein.'
        },
        servingSizes: [
            { size: '1 egg', calories: 224 }
        ]
    },
    {
        slug: 'poached-egg',
        name: 'Poached egg',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Eggs',
        nutritionFacts: {
            servingSize: '1 egg',
            calories: 123.87,
            totalFat: { value: 8.19 },
            cholesterol: { value: 0 },
            sodium: { value: 1163.07 },
            totalCarbohydrate: { value: 0.37 },
            dietaryFiber: { value: 0.3 },
            sugars: { value: 0.05 },
            protein: { value: 11.98 },
            calcium: { value: 48.24 },
            iron: { value: 1.75 },
            vitaminC: { value: 0 },
            folate: { value: 24.77 }
        },
        nutritionSummary: {
            calories: 124,
            fat: '8.2g',
            carbs: '0.4g',
            protein: '12.0g',
            summaryText: 'A single poached egg.',
            breakdown: '59% fat, 1% carbs, 40% protein.'
        },
        servingSizes: [
            { size: '1 egg', calories: 124 }
        ]
    },
    {
        slug: 'scrambled-egg',
        name: 'Scrambled egg (Ande ki bhurji)',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Eggs',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 155.97,
            totalFat: { value: 12.21 },
            cholesterol: { value: 0 },
            sodium: { value: 374.66 },
            totalCarbohydrate: { value: 1.35 },
            dietaryFiber: { value: 0.24 },
            sugars: { value: 1.08 },
            protein: { value: 10.29 },
            calcium: { value: 64.59 },
            iron: { value: 1.42 },
            vitaminC: { value: 0.3 },
            folate: { value: 25.82 }
        },
        nutritionSummary: {
            calories: 156,
            fat: '12.2g',
            carbs: '1.4g',
            protein: '10.3g',
            summaryText: 'A serving of scrambled eggs.',
            breakdown: '70% fat, 3% carbs, 27% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 156 }
        ]
    },
    {
        slug: 'baked-egg',
        name: 'Baked egg',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Eggs',
        nutritionFacts: {
            servingSize: '1 egg',
            calories: 218.85,
            totalFat: { value: 12.65 },
            cholesterol: { value: 0 },
            sodium: { value: 523.29 },
            totalCarbohydrate: { value: 15.42 },
            dietaryFiber: { value: 1.03 },
            sugars: { value: 1.66 },
            protein: { value: 11.88 },
            calcium: { value: 164.05 },
            iron: { value: 1.48 },
            vitaminC: { value: 0 },
            folate: { value: 35.72 }
        },
        nutritionSummary: {
            calories: 219,
            fat: '12.7g',
            carbs: '15.4g',
            protein: '11.9g',
            summaryText: 'A single baked egg.',
            breakdown: '52% fat, 28% carbs, 20% protein.'
        },
        servingSizes: [
            { size: '1 egg', calories: 219 }
        ]
    },
    {
        slug: 'plain-omelette',
        name: 'Plain omelette/omlet',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Eggs',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 272.41,
            totalFat: { value: 25.74 },
            cholesterol: { value: 0 },
            sodium: { value: 226.18 },
            totalCarbohydrate: { value: 0.64 },
            dietaryFiber: { value: 0.12 },
            sugars: { value: 0.51 },
            protein: { value: 9.66 },
            calcium: { value: 48.4 },
            iron: { value: 1.35 },
            vitaminC: { value: 0.3 },
            folate: { value: 50.48 }
        },
        nutritionSummary: {
            calories: 272,
            fat: '25.7g',
            carbs: '0.6g',
            protein: '9.7g',
            summaryText: 'A plain omelette.',
            breakdown: '85% fat, 1% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 272 }
        ]
    },
    {
        slug: 'stuffed-egg-omelette',
        name: 'Stuffed egg omelette/omlet',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Eggs',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 203.51,
            totalFat: { value: 17.77 },
            cholesterol: { value: 0 },
            sodium: { value: 267.19 },
            totalCarbohydrate: { value: 2.3 },
            dietaryFiber: { value: 0.75 },
            sugars: { value: 1.57 },
            protein: { value: 8.6 },
            calcium: { value: 89.91 },
            iron: { value: 0.91 },
            vitaminC: { value: 8.29 },
            folate: { value: 70.23 }
        },
        nutritionSummary: {
            calories: 204,
            fat: '17.8g',
            carbs: '2.3g',
            protein: '8.6g',
            summaryText: 'A stuffed egg omelette.',
            breakdown: '78% fat, 5% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 204 }
        ]
    },
    {
        slug: 'pancake',
        name: 'Pancake',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 203.36,
            totalFat: { value: 10.82 },
            cholesterol: { value: 0 },
            sodium: { value: 143.7 },
            totalCarbohydrate: { value: 20.49 },
            dietaryFiber: { value: 0.65 },
            sugars: { value: 3.32 },
            protein: { value: 5.68 },
            calcium: { value: 79.49 },
            iron: { value: 0.69 },
            vitaminC: { value: 0.5 },
            folate: { value: 5.43 }
        },
        nutritionSummary: {
            calories: 203,
            fat: '10.8g',
            carbs: '20.5g',
            protein: '5.7g',
            summaryText: 'A serving of pancake.',
            breakdown: '48% fat, 40% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 203 }
        ]
    },
    {
        slug: 'keema-pancake',
        name: 'Keema pancake',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 176.27,
            totalFat: { value: 11.25 },
            cholesterol: { value: 0 },
            sodium: { value: 125.4 },
            totalCarbohydrate: { value: 9.56 },
            dietaryFiber: { value: 0.84 },
            sugars: { value: 2.2 },
            protein: { value: 9.01 },
            calcium: { value: 40.96 },
            iron: { value: 0.93 },
            vitaminC: { value: 4.64 },
            folate: { value: 12.23 }
        },
        nutritionSummary: {
            calories: 176,
            fat: '11.3g',
            carbs: '9.6g',
            protein: '9.0g',
            summaryText: 'A keema pancake.',
            breakdown: '58% fat, 22% carbs, 20% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 176 }
        ]
    },
    {
        slug: 'vegetable-pancake',
        name: 'Vegetable pancake',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 125.18,
            totalFat: { value: 6.57 },
            cholesterol: { value: 0 },
            sodium: { value: 116.69 },
            totalCarbohydrate: { value: 12.24 },
            dietaryFiber: { value: 2.48 },
            sugars: { value: 2.09 },
            protein: { value: 3.87 },
            calcium: { value: 42.89 },
            iron: { value: 0.79 },
            vitaminC: { value: 20.63 },
            folate: { value: 28.57 }
        },
        nutritionSummary: {
            calories: 125,
            fat: '6.6g',
            carbs: '12.2g',
            protein: '3.9g',
            summaryText: 'A vegetable pancake.',
            breakdown: '47% fat, 39% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 125 }
        ]
    },
    {
        slug: 'jam-fruit-pancake',
        name: 'Jam and fruit pancake',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 162.02,
            totalFat: { value: 7.01 },
            cholesterol: { value: 0 },
            sodium: { value: 93.09 },
            totalCarbohydrate: { value: 20.73 },
            dietaryFiber: { value: 1.21 },
            sugars: { value: 7.85 },
            protein: { value: 3.79 },
            calcium: { value: 54.06 },
            iron: { value: 0.52 },
            vitaminC: { value: 6.48 },
            folate: { value: 8.42 }
        },
        nutritionSummary: {
            calories: 162,
            fat: '7.0g',
            carbs: '20.7g',
            protein: '3.8g',
            summaryText: 'A jam and fruit pancake.',
            breakdown: '39% fat, 51% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 162 }
        ]
    },
    {
        slug: 'khoa-coconut-pancake',
        name: 'Khoa and coconut pancake',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Sweets, Candy & Desserts',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 271.98,
            totalFat: { value: 15.29 },
            cholesterol: { value: 0 },
            sodium: { value: 101 },
            totalCarbohydrate: { value: 27.32 },
            dietaryFiber: { value: 1.65 },
            sugars: { value: 16.47 },
            protein: { value: 6.98 },
            calcium: { value: 157.22 },
            iron: { value: 1.12 },
            vitaminC: { value: 0.73 },
            folate: { value: 19.12 }
        },
        nutritionSummary: {
            calories: 272,
            fat: '15.3g',
            carbs: '27.3g',
            protein: '7.0g',
            summaryText: 'A khoa and coconut pancake.',
            breakdown: '51% fat, 40% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 272 }
        ]
    },
    {
        slug: 'brown-stock',
        name: 'Brown stock',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 21.32,
            totalFat: { value: 1.38 },
            cholesterol: { value: 0 },
            sodium: { value: 44.6 },
            totalCarbohydrate: { value: 0.25 },
            dietaryFiber: { value: 0.09 },
            sugars: { value: 0.14 },
            protein: { value: 1.95 },
            calcium: { value: 17.16 },
            iron: { value: 0.3 },
            vitaminC: { value: 1.5 },
            folate: { value: 6.33 }
        },
        nutritionSummary: {
            calories: 21,
            fat: '1.4g',
            carbs: '0.3g',
            protein: '2.0g',
            summaryText: 'A serving of brown stock.',
            breakdown: '58% fat, 5% carbs, 37% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 21 }
        ]
    },
    {
        slug: 'vegetable-stock',
        name: 'Vegetable stock',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 17.6,
            totalFat: { value: 1.38 },
            cholesterol: { value: 0 },
            sodium: { value: 49.75 },
            totalCarbohydrate: { value: 0.96 },
            dietaryFiber: { value: 0.38 },
            sugars: { value: 0.44 },
            protein: { value: 0.3 },
            calcium: { value: 5.08 },
            iron: { value: 0.12 },
            vitaminC: { value: 7.58 },
            folate: { value: 13.92 }
        },
        nutritionSummary: {
            calories: 18,
            fat: '1.4g',
            carbs: '1.0g',
            protein: '0.3g',
            summaryText: 'A serving of vegetable stock.',
            breakdown: '70% fat, 22% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 18 }
        ]
    },
    {
        slug: 'chicken-stock',
        name: 'Chicken stock',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 29.88,
            totalFat: { value: 1.51 },
            cholesterol: { value: 0 },
            sodium: { value: 58.58 },
            totalCarbohydrate: { value: 0.37 },
            dietaryFiber: { value: 0.1 },
            sugars: { value: 0.2 },
            protein: { value: 3.69 },
            calcium: { value: 3.57 },
            iron: { value: 0.18 },
            vitaminC: { value: 0.84 },
            folate: { value: 10.19 }
        },
        nutritionSummary: {
            calories: 30,
            fat: '1.5g',
            carbs: '0.4g',
            protein: '3.7g',
            summaryText: 'A serving of chicken stock.',
            breakdown: '45% fat, 5% carbs, 50% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 30 }
        ]
    },
    {
        slug: 'clear-tomato-soup',
        name: 'Clear tomato soup (Tamatar ka soup)',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 80.07,
            totalFat: { value: 12.22 },
            cholesterol: { value: 0 },
            sodium: { value: 5135.74 },
            totalCarbohydrate: { value: 3.45 },
            dietaryFiber: { value: 1.96 },
            sugars: { value: 1.44 },
            protein: { value: 4.79 },
            calcium: { value: 29.05 },
            iron: { value: 1.14 },
            vitaminC: { value: 53.16 },
            folate: { value: 43.91 }
        },
        nutritionSummary: {
            calories: 80,
            fat: '12.2g',
            carbs: '3.5g',
            protein: '4.8g',
            summaryText: 'A serving of clear tomato soup.',
            breakdown: '86% fat, 9% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 80 }
        ]
    },
    {
        slug: 'lentil-soup',
        name: 'Lentil soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 31.17,
            totalFat: { value: 11.68 },
            cholesterol: { value: 0 },
            sodium: { value: 10418.84 },
            totalCarbohydrate: { value: 3.94 },
            dietaryFiber: { value: 2.57 },
            sugars: { value: 1.06 },
            protein: { value: 9.65 },
            calcium: { value: 40.57 },
            iron: { value: 2.26 },
            vitaminC: { value: 17.9 },
            folate: { value: 34.92 }
        },
        nutritionSummary: {
            calories: 31,
            fat: '11.7g',
            carbs: '3.9g',
            protein: '9.7g',
            summaryText: 'A serving of lentil soup.',
            breakdown: '84% fat, 5% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 31 }
        ]
    },
    {
        slug: 'chicken-consomme',
        name: 'Chicken consomme (Clear chicken soup)',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 47.94,
            totalFat: { value: 12.02 },
            cholesterol: { value: 0 },
            sodium: { value: 8953.64 },
            totalCarbohydrate: { value: 1.19 },
            dietaryFiber: { value: 1.57 },
            sugars: { value: 0.54 },
            protein: { value: 11.47 },
            calcium: { value: 35.48 },
            iron: { value: 1.82 },
            vitaminC: { value: 2.1 },
            folate: { value: 11.38 }
        },
        nutritionSummary: {
            calories: 48,
            fat: '12.0g',
            carbs: '1.2g',
            protein: '11.5g',
            summaryText: 'A serving of chicken consomme.',
            breakdown: '85% fat, 2% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 48 }
        ]
    },
    {
        slug: 'cream-of-tomato-soup',
        name: 'Cream of tomato soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 97.81,
            totalFat: { value: 13.12 },
            cholesterol: { value: 0 },
            sodium: { value: 4461.22 },
            totalCarbohydrate: { value: 3.93 },
            dietaryFiber: { value: 1.38 },
            sugars: { value: 1.81 },
            protein: { value: 4.61 },
            calcium: { value: 39.61 },
            iron: { value: 0.95 },
            vitaminC: { value: 53.23 },
            folate: { value: 44.01 }
        },
        nutritionSummary: {
            calories: 98,
            fat: '13.1g',
            carbs: '3.9g',
            protein: '4.6g',
            summaryText: 'A serving of cream of tomato soup.',
            breakdown: '85% fat, 10% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 98 }
        ]
    },
    {
        slug: 'cream-of-green-peas-soup',
        name: 'Cream of green peas soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 127.84,
            totalFat: { value: 14.78 },
            cholesterol: { value: 0 },
            sodium: { value: 4999.7 },
            totalCarbohydrate: { value: 6.75 },
            dietaryFiber: { value: 2.95 },
            sugars: { value: 1.61 },
            protein: { value: 7.13 },
            calcium: { value: 51.01 },
            iron: { value: 1.48 },
            vitaminC: { value: 52.28 },
            folate: { value: 88.58 }
        },
        nutritionSummary: {
            calories: 128,
            fat: '14.8g',
            carbs: '6.8g',
            protein: '7.1g',
            summaryText: 'A serving of cream of green peas soup.',
            breakdown: '82% fat, 11% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 128 }
        ]
    },
    {
        slug: 'cream-of-spinach-soup',
        name: 'Cream of spinach soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 100.54,
            totalFat: { value: 13.31 },
            cholesterol: { value: 0 },
            sodium: { value: 4429.81 },
            totalCarbohydrate: { value: 3.45 },
            dietaryFiber: { value: 1.74 },
            sugars: { value: 1.13 },
            protein: { value: 5.21 },
            calcium: { value: 70.77 },
            iron: { value: 2.1 },
            vitaminC: { value: 63.34 },
            folate: { value: 298.06 }
        },
        nutritionSummary: {
            calories: 101,
            fat: '13.3g',
            carbs: '3.5g',
            protein: '5.2g',
            summaryText: 'A serving of cream of spinach soup.',
            breakdown: '86% fat, 9% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 101 }
        ]
    },
    {
        slug: 'cream-of-mixed-vegetable-soup',
        name: 'Cream of mixed vegetable soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 59.65,
            totalFat: { value: 9.05 },
            cholesterol: { value: 0 },
            sodium: { value: 5655.45 },
            totalCarbohydrate: { value: 4.93 },
            dietaryFiber: { value: 2.14 },
            sugars: { value: 2.1 },
            protein: { value: 6.84 },
            calcium: { value: 65.26 },
            iron: { value: 1.36 },
            vitaminC: { value: 39.02 },
            folate: { value: 54.46 }
        },
        nutritionSummary: {
            calories: 60,
            fat: '9.1g',
            carbs: '4.9g',
            protein: '6.8g',
            summaryText: 'A serving of cream of mixed vegetable soup.',
            breakdown: '83% fat, 8% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 60 }
        ]
    },
    {
        slug: 'cream-of-mushroom-soup',
        name: 'Cream of mushroom soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 117.28,
            totalFat: { value: 15.5 },
            cholesterol: { value: 0 },
            sodium: { value: 5276.06 },
            totalCarbohydrate: { value: 3.74 },
            dietaryFiber: { value: 1.34 },
            sugars: { value: 1.93 },
            protein: { value: 6.64 },
            calcium: { value: 70.56 },
            iron: { value: 1.81 },
            vitaminC: { value: 5.79 },
            folate: { value: 30.72 }
        },
        nutritionSummary: {
            calories: 117,
            fat: '15.5g',
            carbs: '3.7g',
            protein: '6.6g',
            summaryText: 'A serving of cream of mushroom soup.',
            breakdown: '87% fat, 6% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 117 }
        ]
    },
    {
        slug: 'chicken-sweet-corn-soup',
        name: 'Chicken sweet corn soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 28.32,
            totalFat: { value: 12.59 },
            cholesterol: { value: 0 },
            sodium: { value: 12205.33 },
            totalCarbohydrate: { value: 1.63 },
            dietaryFiber: { value: 0.47 },
            sugars: { value: 0.27 },
            protein: { value: 14.48 },
            calcium: { value: 91.5 },
            iron: { value: 3.83 },
            vitaminC: { value: 2.02 },
            folate: { value: 13.45 }
        },
        nutritionSummary: {
            calories: 28,
            fat: '12.6g',
            carbs: '1.6g',
            protein: '14.5g',
            summaryText: 'A serving of chicken sweet corn soup.',
            breakdown: '82% fat, 2% carbs, 16% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 28 }
        ]
    },
    {
        slug: 'minestrone-soup',
        name: 'Minestrone soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 42.66,
            totalFat: { value: 11.09 },
            cholesterol: { value: 0 },
            sodium: { value: 8875.06 },
            totalCarbohydrate: { value: 3.71 },
            dietaryFiber: { value: 1.92 },
            sugars: { value: 1.01 },
            protein: { value: 9.3 },
            calcium: { value: 53.55 },
            iron: { value: 1.82 },
            vitaminC: { value: 19.43 },
            folate: { value: 23.24 }
        },
        nutritionSummary: {
            calories: 43,
            fat: '11.1g',
            carbs: '3.7g',
            protein: '9.3g',
            summaryText: 'A serving of minestrone soup.',
            breakdown: '80% fat, 9% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 43 }
        ]
    },
    {
        slug: 'egg-drop-soup',
        name: 'Egg drop soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 26.64,
            totalFat: { value: 13.52 },
            cholesterol: { value: 0 },
            sodium: { value: 12418.84 },
            totalCarbohydrate: { value: 1.1 },
            dietaryFiber: { value: 0.81 },
            sugars: { value: 0.6 },
            protein: { value: 12.93 },
            calcium: { value: 100.14 },
            iron: { value: 3.93 },
            vitaminC: { value: 8.51 },
            folate: { value: 28.19 }
        },
        nutritionSummary: {
            calories: 27,
            fat: '13.5g',
            carbs: '1.1g',
            protein: '12.9g',
            summaryText: 'A serving of egg drop soup.',
            breakdown: '86% fat, 2% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 27 }
        ]
    },
    {
        slug: 'chinese-cabbage-meat-ball-soup',
        name: 'Chinese cabbage and meat ball soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 484.31,
            totalFat: { value: 56.57 },
            cholesterol: { value: 0 },
            sodium: { value: 4249.41 },
            totalCarbohydrate: { value: 1.43 },
            dietaryFiber: { value: 0.57 },
            sugars: { value: 0.37 },
            protein: { value: 5.21 },
            calcium: { value: 41.07 },
            iron: { value: 1.52 },
            vitaminC: { value: 16.72 },
            folate: { value: 20.33 }
        },
        nutritionSummary: {
            calories: 484,
            fat: '56.6g',
            carbs: '1.4g',
            protein: '5.2g',
            summaryText: 'A serving of Chinese cabbage and meat ball soup.',
            breakdown: '93% fat, 1% carbs, 6% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 484 }
        ]
    },
    {
        slug: 'french-onion-soup',
        name: 'French onion soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 55.61,
            totalFat: { value: 14.39 },
            cholesterol: { value: 0 },
            sodium: { value: 11202.89 },
            totalCarbohydrate: { value: 4.28 },
            dietaryFiber: { value: 1.01 },
            sugars: { value: 1.5 },
            protein: { value: 11.41 },
            calcium: { value: 106.22 },
            iron: { value: 3.52 },
            vitaminC: { value: 5.35 },
            folate: { value: 24.85 }
        },
        nutritionSummary: {
            calories: 56,
            fat: '14.4g',
            carbs: '4.3g',
            protein: '11.4g',
            summaryText: 'A serving of french onion soup.',
            breakdown: '85% fat, 8% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 56 }
        ]
    },
    {
        slug: 'hot-sour-soup',
        name: 'Hot and sour soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 31.51,
            totalFat: { value: 1.31 },
            cholesterol: { value: 0 },
            sodium: { value: 163.26 },
            totalCarbohydrate: { value: 1.78 },
            dietaryFiber: { value: 0.6 },
            sugars: { value: 0.66 },
            protein: { value: 3.12 },
            calcium: { value: 10.68 },
            iron: { value: 0.43 },
            vitaminC: { value: 24.59 },
            folate: { value: 39.83 }
        },
        nutritionSummary: {
            calories: 32,
            fat: '1.3g',
            carbs: '1.8g',
            protein: '3.1g',
            summaryText: 'A serving of hot and sour soup.',
            breakdown: '37% fat, 23% carbs, 40% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 32 }
        ]
    },
    {
        slug: 'talaumein-soup',
        name: 'Talaumein soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 35.63,
            totalFat: { value: 12.78 },
            cholesterol: { value: 0 },
            sodium: { value: 11088.14 },
            totalCarbohydrate: { value: 4.17 },
            dietaryFiber: { value: 1.94 },
            sugars: { value: 0.77 },
            protein: { value: 10.12 },
            calcium: { value: 42.33 },
            iron: { value: 2.23 },
            vitaminC: { value: 12.62 },
            folate: { value: 48.58 }
        },
        nutritionSummary: {
            calories: 36,
            fat: '12.8g',
            carbs: '4.2g',
            protein: '10.1g',
            summaryText: 'A serving of talaumein soup.',
            breakdown: '85% fat, 5% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 36 }
        ]
    },
    {
        slug: 'cold-cucumber-soup',
        name: 'Cold cucumber soup (Thanda kheere ka soup)',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 48.03,
            totalFat: { value: 1.99 },
            cholesterol: { value: 0 },
            sodium: { value: 121.32 },
            totalCarbohydrate: { value: 4.58 },
            dietaryFiber: { value: 0.88 },
            sugars: { value: 3.34 },
            protein: { value: 2.99 },
            calcium: { value: 99.79 },
            iron: { value: 0.32 },
            vitaminC: { value: 5.05 },
            folate: { value: 27.42 }
        },
        nutritionSummary: {
            calories: 48,
            fat: '2.0g',
            carbs: '4.6g',
            protein: '3.0g',
            summaryText: 'A serving of cold cucumber soup.',
            breakdown: '37% fat, 38% carbs, 25% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 48 }
        ]
    },
    {
        slug: 'cold-summer-garden-soup',
        name: 'Cold summer garden soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 49.19,
            totalFat: { value: 14.08 },
            cholesterol: { value: 0 },
            sodium: { value: 9919.62 },
            totalCarbohydrate: { value: 2.65 },
            dietaryFiber: { value: 1.86 },
            sugars: { value: 0.46 },
            protein: { value: 8.57 },
            calcium: { value: 43.93 },
            iron: { value: 2.13 },
            vitaminC: { value: 16.3 },
            folate: { value: 43.26 }
        },
        nutritionSummary: {
            calories: 49,
            fat: '14.1g',
            carbs: '2.7g',
            protein: '8.6g',
            summaryText: 'A serving of cold summer garden soup.',
            breakdown: '86% fat, 5% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 49 }
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
            cholesterol: { value: 0 },
            sodium: { value: 1.16 },
            totalCarbohydrate: { value: 35.65 },
            dietaryFiber: { value: 6.31 },
            sugars: { value: 1 },
            protein: { value: 5.88 },
            calcium: { value: 17.22 },
            iron: { value: 2.28 },
            vitaminC: { value: 0 },
            folate: { value: 5.84 }
        },
        nutritionSummary: {
            calories: 202,
            fat: '3.6g',
            carbs: '35.7g',
            protein: '5.9g',
            summaryText: 'A piece of chapati or roti.',
            breakdown: '16% fat, 70% carbs, 14% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 62.07 },
            totalCarbohydrate: { value: 30.69 },
            dietaryFiber: { value: 5.43 },
            sugars: { value: 0.86 },
            protein: { value: 5.06 },
            calcium: { value: 14.81 },
            iron: { value: 1.98 },
            vitaminC: { value: 0 },
            folate: { value: 7.79 }
        },
        nutritionSummary: {
            calories: 298,
            fat: '16.9g',
            carbs: '30.7g',
            protein: '5.1g',
            summaryText: 'A piece of plain paratha.',
            breakdown: '51% fat, 41% carbs, 8% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 127.2 },
            totalCarbohydrate: { value: 23.92 },
            dietaryFiber: { value: 4.18 },
            sugars: { value: 1.15 },
            protein: { value: 3.7 },
            calcium: { value: 17.38 },
            iron: { value: 1.52 },
            vitaminC: { value: 7.98 },
            folate: { value: 14.96 }
        },
        nutritionSummary: {
            calories: 205,
            fat: '10.2g',
            carbs: '23.9g',
            protein: '3.7g',
            summaryText: 'A piece of aloo paratha.',
            breakdown: '45% fat, 47% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 205 }
        ]
    },
    {
        slug: 'radish-paratha',
        name: 'Radish parantha/paratha (Mooli ka parantha)',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 183.52,
            totalFat: { value: 9.53 },
            cholesterol: { value: 0 },
            sodium: { value: 127.03 },
            totalCarbohydrate: { value: 20.54 },
            dietaryFiber: { value: 4.32 },
            sugars: { value: 1.31 },
            protein: { value: 3.3 },
            calcium: { value: 23.75 },
            iron: { value: 1.39 },
            vitaminC: { value: 8.44 },
            folate: { value: 20.74 }
        },
        nutritionSummary: {
            calories: 184,
            fat: '9.5g',
            carbs: '20.5g',
            protein: '3.3g',
            summaryText: 'A piece of mooli paratha.',
            breakdown: '47% fat, 45% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 184 }
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
            cholesterol: { value: 0 },
            sodium: { value: 190.03 },
            totalCarbohydrate: { value: 18.84 },
            dietaryFiber: { value: 4.68 },
            sugars: { value: 1.15 },
            protein: { value: 3.73 },
            calcium: { value: 22 },
            iron: { value: 1.59 },
            vitaminC: { value: 17.61 },
            folate: { value: 26.32 }
        },
        nutritionSummary: {
            calories: 178,
            fat: '9.5g',
            carbs: '18.8g',
            protein: '3.7g',
            summaryText: 'A piece of gobi paratha.',
            breakdown: '48% fat, 42% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 178 }
        ]
    },
    {
        slug: 'dal-paratha',
        name: 'Dal parantha/paratha',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 268.24,
            totalFat: { value: 13.05 },
            cholesterol: { value: 0 },
            sodium: { value: 156.13 },
            totalCarbohydrate: { value: 30.03 },
            dietaryFiber: { value: 6.46 },
            sugars: { value: 1.43 },
            protein: { value: 6.78 },
            calcium: { value: 23.89 },
            iron: { value: 2.45 },
            vitaminC: { value: 1.8 },
            folate: { value: 29.02 }
        },
        nutritionSummary: {
            calories: 268,
            fat: '13.1g',
            carbs: '30.0g',
            protein: '6.8g',
            summaryText: 'A piece of dal paratha.',
            breakdown: '44% fat, 45% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 268 }
        ]
    },
    {
        slug: 'sprouted-moong-paratha',
        name: 'Sprouted moong parantha/paratha',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 228.59,
            totalFat: { value: 12.43 },
            cholesterol: { value: 0 },
            sodium: { value: 153.94 },
            totalCarbohydrate: { value: 24.31 },
            dietaryFiber: { value: 4.49 },
            sugars: { value: 1.47 },
            protein: { value: 4.29 },
            calcium: { value: 20.33 },
            iron: { value: 1.94 },
            vitaminC: { value: 2 },
            folate: { value: 12.52 }
        },
        nutritionSummary: {
            calories: 229,
            fat: '12.4g',
            carbs: '24.3g',
            protein: '4.3g',
            summaryText: 'A piece of sprouted moong paratha.',
            breakdown: '49% fat, 42% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 229 }
        ]
    },
    {
        slug: 'pea-paratha',
        name: 'Pea parantha/paratha (Matar ka parantha)',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 190.73,
            totalFat: { value: 8.8 },
            cholesterol: { value: 0 },
            sodium: { value: 109.99 },
            totalCarbohydrate: { value: 21.51 },
            dietaryFiber: { value: 5.61 },
            sugars: { value: 1.29 },
            protein: { value: 5.59 },
            calcium: { value: 23.49 },
            iron: { value: 1.78 },
            vitaminC: { value: 17.8 },
            folate: { value: 33.64 }
        },
        nutritionSummary: {
            calories: 191,
            fat: '8.8g',
            carbs: '21.5g',
            protein: '5.6g',
            summaryText: 'A piece of pea paratha.',
            breakdown: '41% fat, 45% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 191 }
        ]
    },
    {
        slug: 'keema-paratha',
        name: 'Keema parantha/paratha',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 238.09,
            totalFat: { value: 13.91 },
            cholesterol: { value: 0 },
            sodium: { value: 140.62 },
            totalCarbohydrate: { value: 18.36 },
            dietaryFiber: { value: 3.44 },
            sugars: { value: 0.99 },
            protein: { value: 9.41 },
            calcium: { value: 19.35 },
            iron: { value: 1.8 },
            vitaminC: { value: 1.8 },
            folate: { value: 11.49 }
        },
        nutritionSummary: {
            calories: 238,
            fat: '13.9g',
            carbs: '18.4g',
            protein: '9.4g',
            summaryText: 'A piece of keema paratha.',
            breakdown: '53% fat, 31% carbs, 16% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 238 }
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
            cholesterol: { value: 0 },
            sodium: { value: 142.52 },
            totalCarbohydrate: { value: 24.33 },
            dietaryFiber: { value: 4 },
            sugars: { value: 3.77 },
            protein: { value: 7.98 },
            calcium: { value: 127.65 },
            iron: { value: 1.7 },
            vitaminC: { value: 1.69 },
            folate: { value: 29 }
        },
        nutritionSummary: {
            calories: 263,
            fat: '14.6g',
            carbs: '24.3g',
            protein: '8.0g',
            summaryText: 'A piece of paneer paratha.',
            breakdown: '50% fat, 37% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 263 }
        ]
    },
    {
        slug: 'besan-spinach-paratha',
        name: 'Besan and spinach parantha/paratha',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 216.49,
            totalFat: { value: 12.09 },
            cholesterol: { value: 0 },
            sodium: { value: 177.19 },
            totalCarbohydrate: { value: 21.39 },
            dietaryFiber: { value: 4.39 },
            sugars: { value: 1.31 },
            protein: { value: 5.54 },
            calcium: { value: 33.07 },
            iron: { value: 1.85 },
            vitaminC: { value: 6.65 },
            folate: { value: 50.53 }
        },
        nutritionSummary: {
            calories: 216,
            fat: '12.1g',
            carbs: '21.4g',
            protein: '5.5g',
            summaryText: 'A piece of besan and spinach paratha.',
            breakdown: '50% fat, 40% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 216 }
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
            cholesterol: { value: 0 },
            sodium: { value: 31.73 },
            totalCarbohydrate: { value: 8.22 },
            dietaryFiber: { value: 1.46 },
            sugars: { value: 0.23 },
            protein: { value: 1.35 },
            calcium: { value: 3.98 },
            iron: { value: 0.6 },
            vitaminC: { value: 0 },
            folate: { value: 4.68 }
        },
        nutritionSummary: {
            calories: 738,
            fat: '77.6g',
            carbs: '8.2g',
            protein: '1.4g',
            summaryText: 'A piece of deep-fried poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 738 }
        ]
    },
    {
        slug: 'spinach-poori',
        name: 'Spinach poori (Palak poori)',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 684.25,
            totalFat: { value: 71.86 },
            cholesterol: { value: 0 },
            sodium: { value: 35.47 },
            totalCarbohydrate: { value: 7.76 },
            dietaryFiber: { value: 1.55 },
            sugars: { value: 0.24 },
            protein: { value: 1.42 },
            calcium: { value: 10.02 },
            iron: { value: 0.79 },
            vitaminC: { value: 3.03 },
            folate: { value: 18.9 }
        },
        nutritionSummary: {
            calories: 684,
            fat: '71.9g',
            carbs: '7.8g',
            protein: '1.4g',
            summaryText: 'A piece of spinach poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 35.37 },
            totalCarbohydrate: { value: 7.98 },
            dietaryFiber: { value: 1.61 },
            sugars: { value: 0.26 },
            protein: { value: 1.45 },
            calcium: { value: 14.61 },
            iron: { value: 0.81 },
            vitaminC: { value: 2.91 },
            folate: { value: 8.47 }
        },
        nutritionSummary: {
            calories: 710,
            fat: '74.6g',
            carbs: '8.0g',
            protein: '1.5g',
            summaryText: 'A piece of methi poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 710 }
        ]
    },
    {
        slug: 'dal-stuffed-poori',
        name: 'Dal stuffed poori',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 785.16,
            totalFat: { value: 81.69 },
            cholesterol: { value: 0 },
            sodium: { value: 128.18 },
            totalCarbohydrate: { value: 10.14 },
            dietaryFiber: { value: 1.96 },
            sugars: { value: 0.29 },
            protein: { value: 2.08 },
            calcium: { value: 6.88 },
            iron: { value: 0.83 },
            vitaminC: { value: 0.42 },
            folate: { value: 7.65 }
        },
        nutritionSummary: {
            calories: 785,
            fat: '81.7g',
            carbs: '10.1g',
            protein: '2.1g',
            summaryText: 'A piece of dal stuffed poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 785 }
        ]
    },
    {
        slug: 'potato-stuffed-poori',
        name: 'Potato stuffed poori (Aloo ki poori)',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 776.74,
            totalFat: { value: 81.35 },
            cholesterol: { value: 0 },
            sodium: { value: 69.86 },
            totalCarbohydrate: { value: 9.4 },
            dietaryFiber: { value: 1.64 },
            sugars: { value: 0.26 },
            protein: { value: 1.52 },
            calcium: { value: 5.57 },
            iron: { value: 0.7 },
            vitaminC: { value: 1.39 },
            folate: { value: 5.63 }
        },
        nutritionSummary: {
            calories: 777,
            fat: '81.4g',
            carbs: '9.4g',
            protein: '1.5g',
            summaryText: 'A piece of potato stuffed poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 777 }
        ]
    },
    {
        slug: 'tandoori-paratha',
        name: 'Tandoori parantha/paratha',
        cuisine: 'North Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 295.37,
            totalFat: { value: 16.51 },
            cholesterol: { value: 0 },
            sodium: { value: 1.14 },
            totalCarbohydrate: { value: 30.74 },
            dietaryFiber: { value: 5.44 },
            sugars: { value: 0.86 },
            protein: { value: 5.08 },
            calcium: { value: 14.98 },
            iron: { value: 1.96 },
            vitaminC: { value: 0 },
            folate: { value: 7.79 }
        },
        nutritionSummary: {
            calories: 295,
            fat: '16.5g',
            carbs: '30.7g',
            protein: '5.1g',
            summaryText: 'A piece of tandoori paratha.',
            breakdown: '50% fat, 42% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 295 }
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
            cholesterol: { value: 0 },
            sodium: { value: 1.05 },
            totalCarbohydrate: { value: 25.72 },
            dietaryFiber: { value: 1.25 },
            sugars: { value: 0.22 },
            protein: { value: 2.6 },
            calcium: { value: 2.7 },
            iron: { value: 0.24 },
            vitaminC: { value: 0 },
            folate: { value: 9.75 }
        },
        nutritionSummary: {
            calories: 117,
            fat: '0.2g',
            carbs: '25.7g',
            protein: '2.6g',
            summaryText: 'A serving of boiled rice.',
            breakdown: '1% fat, 88% carbs, 11% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 193.76 },
            totalCarbohydrate: { value: 21.82 },
            dietaryFiber: { value: 1.69 },
            sugars: { value: 1.15 },
            protein: { value: 2.34 },
            calcium: { value: 12.76 },
            iron: { value: 0.41 },
            vitaminC: { value: 3.42 },
            folate: { value: 22.63 }
        },
        nutritionSummary: {
            calories: 140,
            fat: '4.6g',
            carbs: '21.8g',
            protein: '2.3g',
            summaryText: 'A serving of plain pulao.',
            breakdown: '30% fat, 62% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 140 }
        ]
    },
    {
        slug: 'mixed-vegetable-pulao',
        name: 'Mixed vegetable pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 113.05,
            totalFat: { value: 3.33 },
            cholesterol: { value: 0 },
            sodium: { value: 187.92 },
            totalCarbohydrate: { value: 17.49 },
            dietaryFiber: { value: 2.67 },
            sugars: { value: 1.35 },
            protein: { value: 2.72 },
            calcium: { value: 19.61 },
            iron: { value: 0.6 },
            vitaminC: { value: 26.15 },
            folate: { value: 80.63 }
        },
        nutritionSummary: {
            calories: 113,
            fat: '3.3g',
            carbs: '17.5g',
            protein: '2.7g',
            summaryText: 'A serving of mixed vegetable pulao.',
            breakdown: '26% fat, 62% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 113 }
        ]
    },
    {
        slug: 'mushroom-pulao',
        name: 'Mushroom pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 124.29,
            totalFat: { value: 4.03 },
            cholesterol: { value: 0 },
            sodium: { value: 222.36 },
            totalCarbohydrate: { value: 19.02 },
            dietaryFiber: { value: 1.88 },
            sugars: { value: 1 },
            protein: { value: 2.52 },
            calcium: { value: 13.54 },
            iron: { value: 0.39 },
            vitaminC: { value: 3.42 },
            folate: { value: 26.77 }
        },
        nutritionSummary: {
            calories: 124,
            fat: '4.0g',
            carbs: '19.0g',
            protein: '2.5g',
            summaryText: 'A serving of mushroom pulao.',
            breakdown: '29% fat, 61% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 124 }
        ]
    },
    {
        slug: 'sprouted-moong-pulao',
        name: 'Sprouted moong pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 112.97,
            totalFat: { value: 3.61 },
            cholesterol: { value: 0 },
            sodium: { value: 153.16 },
            totalCarbohydrate: { value: 17.49 },
            dietaryFiber: { value: 1.78 },
            sugars: { value: 1.43 },
            protein: { value: 2.19 },
            calcium: { value: 16.26 },
            iron: { value: 0.65 },
            vitaminC: { value: 7.53 },
            folate: { value: 43.15 }
        },
        nutritionSummary: {
            calories: 113,
            fat: '3.6g',
            carbs: '17.5g',
            protein: '2.2g',
            summaryText: 'A serving of sprouted moong pulao.',
            breakdown: '29% fat, 62% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 113 }
        ]
    },
    {
        slug: 'paneer-pulao',
        name: 'Paneer pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 581.91,
            totalFat: { value: 59.81 },
            cholesterol: { value: 0 },
            sodium: { value: 72.28 },
            totalCarbohydrate: { value: 8.76 },
            dietaryFiber: { value: 0.62 },
            sugars: { value: 1.11 },
            protein: { value: 1.98 },
            calcium: { value: 33.09 },
            iron: { value: 0.26 },
            vitaminC: { value: 3.42 },
            folate: { value: 69.28 }
        },
        nutritionSummary: {
            calories: 582,
            fat: '59.8g',
            carbs: '8.8g',
            protein: '2.0g',
            summaryText: 'A serving of paneer pulao.',
            breakdown: '92% fat, 6% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 582 }
        ]
    },
    {
        slug: 'peanut-pulao',
        name: 'Peanut pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 193.28,
            totalFat: { value: 9.51 },
            cholesterol: { value: 0 },
            sodium: { value: 168.4 },
            totalCarbohydrate: { value: 21.18 },
            dietaryFiber: { value: 2.9 },
            sugars: { value: 1.6 },
            protein: { value: 5.32 },
            calcium: { value: 18.52 },
            iron: { value: 0.83 },
            vitaminC: { value: 3.42 },
            folate: { value: 68.06 }
        },
        nutritionSummary: {
            calories: 193,
            fat: '9.5g',
            carbs: '21.2g',
            protein: '5.3g',
            summaryText: 'A serving of peanut pulao.',
            breakdown: '44% fat, 44% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 193 }
        ]
    },
    {
        slug: 'navratan-pulao',
        name: 'Navratan pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 261.71,
            totalFat: { value: 9.45 },
            cholesterol: { value: 0 },
            sodium: { value: 334.26 },
            totalCarbohydrate: { value: 36.98 },
            dietaryFiber: { value: 3.82 },
            sugars: { value: 2.52 },
            protein: { value: 6.2 },
            calcium: { value: 59.61 },
            iron: { value: 1.1 },
            vitaminC: { value: 12.89 },
            folate: { value: 46.97 }
        },
        nutritionSummary: {
            calories: 262,
            fat: '9.5g',
            carbs: '37.0g',
            protein: '6.2g',
            summaryText: 'A serving of Navratan pulao.',
            breakdown: '33% fat, 56% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 262 }
        ]
    },
    {
        slug: 'green-chickpeas-pulao',
        name: 'Green chickpeas pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 173.43,
            totalFat: { value: 4.82 },
            cholesterol: { value: 0 },
            sodium: { value: 170.05 },
            totalCarbohydrate: { value: 27.57 },
            dietaryFiber: { value: 3.15 },
            sugars: { value: 2.48 },
            protein: { value: 4.88 },
            calcium: { value: 18.94 },
            iron: { value: 0.95 },
            vitaminC: { value: 5.43 },
            folate: { value: 301.13 }
        },
        nutritionSummary: {
            calories: 173,
            fat: '4.8g',
            carbs: '27.6g',
            protein: '4.9g',
            summaryText: 'A serving of green chickpeas pulao.',
            breakdown: '25% fat, 64% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 173 }
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
            cholesterol: { value: 0 },
            sodium: { value: 262.64 },
            totalCarbohydrate: { value: 22.5 },
            dietaryFiber: { value: 2.42 },
            sugars: { value: 2.39 },
            protein: { value: 7.38 },
            calcium: { value: 68.58 },
            iron: { value: 1.29 },
            vitaminC: { value: 10.28 },
            folate: { value: 30.07 }
        },
        nutritionSummary: {
            calories: 191,
            fat: '7.7g',
            carbs: '22.5g',
            protein: '7.4g',
            summaryText: 'A serving of mutton biryani.',
            breakdown: '36% fat, 47% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 191 }
        ]
    },
    {
        slug: 'vegetable-biryani',
        name: 'Vegetable biryani/biriyani',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 174.61,
            totalFat: { value: 9.51 },
            cholesterol: { value: 0 },
            sodium: { value: 183.79 },
            totalCarbohydrate: { value: 18.56 },
            dietaryFiber: { value: 3.31 },
            sugars: { value: 2.14 },
            protein: { value: 3.16 },
            calcium: { value: 33.52 },
            iron: { value: 0.86 },
            vitaminC: { value: 39.35 },
            folate: { value: 77.54 }
        },
        nutritionSummary: {
            calories: 175,
            fat: '9.5g',
            carbs: '18.6g',
            protein: '3.2g',
            summaryText: 'A serving of vegetable biryani.',
            breakdown: '49% fat, 43% carbs, 8% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 187.11 },
            totalCarbohydrate: { value: 21.62 },
            dietaryFiber: { value: 2.52 },
            sugars: { value: 0.78 },
            protein: { value: 4.26 },
            calcium: { value: 12.7 },
            iron: { value: 0.77 },
            vitaminC: { value: 10.2 },
            folate: { value: 38.01 }
        },
        nutritionSummary: {
            calories: 176,
            fat: '7.9g',
            carbs: '21.6g',
            protein: '4.3g',
            summaryText: 'A serving of lemon rice.',
            breakdown: '40% fat, 49% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 176 }
        ]
    },
    {
        slug: 'sweet-rice',
        name: 'Sweet rice (Meethe chawal)',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 215.41,
            totalFat: { value: 4.57 },
            cholesterol: { value: 0 },
            sodium: { value: 3.2 },
            totalCarbohydrate: { value: 42.59 },
            dietaryFiber: { value: 1.13 },
            sugars: { value: 24.8 },
            protein: { value: 2.1 },
            calcium: { value: 11.38 },
            iron: { value: 0.34 },
            vitaminC: { value: 0.21 },
            folate: { value: 10.65 }
        },
        nutritionSummary: {
            calories: 215,
            fat: '4.6g',
            carbs: '42.6g',
            protein: '2.1g',
            summaryText: 'A serving of sweet rice.',
            breakdown: '19% fat, 79% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 215 }
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
            cholesterol: { value: 0 },
            sodium: { value: 213.29 },
            totalCarbohydrate: { value: 32.93 },
            dietaryFiber: { value: 2.13 },
            sugars: { value: 3.91 },
            protein: { value: 5.75 },
            calcium: { value: 101.52 },
            iron: { value: 0.59 },
            vitaminC: { value: 5.1 },
            folate: { value: 28.24 }
        },
        nutritionSummary: {
            calories: 196,
            fat: '4.3g',
            carbs: '32.9g',
            protein: '5.8g',
            summaryText: 'A serving of curd rice.',
            breakdown: '20% fat, 67% carbs, 13% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 162.41 },
            totalCarbohydrate: { value: 65.08 },
            dietaryFiber: { value: 5.12 },
            sugars: { value: 11.65 },
            protein: { value: 7.45 },
            calcium: { value: 50.94 },
            iron: { value: 2.89 },
            vitaminC: { value: 0.84 },
            folate: { value: 23.02 }
        },
        nutritionSummary: {
            calories: 373,
            fat: '8.5g',
            carbs: '65.1g',
            protein: '7.5g',
            summaryText: 'A serving of tamarind rice.',
            breakdown: '21% fat, 70% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 373 }
        ]
    },
    {
        slug: 'spanish-rice',
        name: 'Spanish rice',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 164.24,
            totalFat: { value: 2.23 },
            cholesterol: { value: 0 },
            sodium: { value: 96.61 },
            totalCarbohydrate: { value: 31.1 },
            dietaryFiber: { value: 2.78 },
            sugars: { value: 1.26 },
            protein: { value: 4.19 },
            calcium: { value: 18.93 },
            iron: { value: 0.92 },
            vitaminC: { value: 48.66 },
            folate: { value: 54.48 }
        },
        nutritionSummary: {
            calories: 164,
            fat: '2.2g',
            carbs: '31.1g',
            protein: '4.2g',
            summaryText: 'A serving of Spanish rice.',
            breakdown: '12% fat, 76% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 164 }
        ]
    },
    {
        slug: 'chinese-fried-rice',
        name: 'Chinese fried rice',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 120.58,
            totalFat: { value: 5.43 },
            cholesterol: { value: 0 },
            sodium: { value: 248.36 },
            totalCarbohydrate: { value: 13.4 },
            dietaryFiber: { value: 2.31 },
            sugars: { value: 1.47 },
            protein: { value: 4.05 },
            calcium: { value: 34.7 },
            iron: { value: 0.99 },
            vitaminC: { value: 67.39 },
            folate: { value: 136.83 }
        },
        nutritionSummary: {
            calories: 121,
            fat: '5.4g',
            carbs: '13.4g',
            protein: '4.1g',
            summaryText: 'A serving of Chinese fried rice.',
            breakdown: '40% fat, 45% carbs, 15% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 121 }
        ]
    },
    {
        slug: 'macaroni-cheese-pie',
        name: 'Macaroni cheese pie',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 170.63,
            totalFat: { value: 7.48 },
            cholesterol: { value: 0 },
            sodium: { value: 200.51 },
            totalCarbohydrate: { value: 21.1 },
            dietaryFiber: { value: 0.4 },
            sugars: { value: 3.4 },
            protein: { value: 5.85 },
            calcium: { value: 122.01 },
            iron: { value: 0.54 },
            vitaminC: { value: 14.65 },
            folate: { value: 28.19 }
        },
        nutritionSummary: {
            calories: 171,
            fat: '7.5g',
            carbs: '21.1g',
            protein: '5.9g',
            summaryText: 'A macaroni cheese pie.',
            breakdown: '39% fat, 50% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 171 }
        ]
    },
    {
        slug: 'vegetable-chowmein',
        name: 'Vegetable chowmein',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 129.71,
            totalFat: { value: 6.36 },
            cholesterol: { value: 0 },
            sodium: { value: 258.47 },
            totalCarbohydrate: { value: 15.44 },
            dietaryFiber: { value: 1.86 },
            sugars: { value: 1.97 },
            protein: { value: 3.07 },
            calcium: { value: 28.33 },
            iron: { value: 0.99 },
            vitaminC: { value: 85.39 },
            folate: { value: 99.36 }
        },
        nutritionSummary: {
            calories: 130,
            fat: '6.4g',
            carbs: '15.4g',
            protein: '3.1g',
            summaryText: 'A serving of vegetable chowmein.',
            breakdown: '44% fat, 48% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 130 }
        ]
    },
    {
        slug: 'chicken-chowmein',
        name: 'Chicken chowmein',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 151.33,
            totalFat: { value: 8.23 },
            cholesterol: { value: 0 },
            sodium: { value: 288.15 },
            totalCarbohydrate: { value: 13.3 },
            dietaryFiber: { value: 1.64 },
            sugars: { value: 1.63 },
            protein: { value: 6.33 },
            calcium: { value: 26.1 },
            iron: { value: 0.89 },
            vitaminC: { value: 84.96 },
            folate: { value: 102.27 }
        },
        nutritionSummary: {
            calories: 151,
            fat: '8.2g',
            carbs: '13.3g',
            protein: '6.3g',
            summaryText: 'A serving of chicken chowmein.',
            breakdown: '49% fat, 35% carbs, 16% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 151 }
        ]
    },
    {
        slug: 'cheese-noodle-ring',
        name: 'Cheese noodle ring',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 133.67,
            totalFat: { value: 6.12 },
            cholesterol: { value: 0 },
            sodium: { value: 241.96 },
            totalCarbohydrate: { value: 13.96 },
            dietaryFiber: { value: 1.27 },
            sugars: { value: 2.84 },
            protein: { value: 6.22 },
            calcium: { value: 99.3 },
            iron: { value: 0.79 },
            vitaminC: { value: 24.19 },
            folate: { value: 94.77 }
        },
        nutritionSummary: {
            calories: 134,
            fat: '6.1g',
            carbs: '14.0g',
            protein: '6.2g',
            summaryText: 'A cheese noodle ring.',
            breakdown: '41% fat, 42% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 134 }
        ]
    },
    {
        slug: 'spaghetti-cheese-balls-tomato-sauce',
        name: 'Spaghetti and cheese balls in tomato sauce',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 508.32,
            totalFat: { value: 52.08 },
            cholesterol: { value: 0 },
            sodium: { value: 104.14 },
            totalCarbohydrate: { value: 7.82 },
            dietaryFiber: { value: 0.59 },
            sugars: { value: 1.83 },
            protein: { value: 2.41 },
            calcium: { value: 40.59 },
            iron: { value: 0.32 },
            vitaminC: { value: 57.67 },
            folate: { value: 115.96 }
        },
        nutritionSummary: {
            calories: 508,
            fat: '52.1g',
            carbs: '7.8g',
            protein: '2.4g',
            summaryText: 'Spaghetti and cheese balls in tomato sauce.',
            breakdown: '92% fat, 6% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 508 }
        ]
    },
    {
        slug: 'penne-platter',
        name: 'Penne platter',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 177.4,
            totalFat: { value: 8.71 },
            cholesterol: { value: 0 },
            sodium: { value: 283.37 },
            totalCarbohydrate: { value: 20.87 },
            dietaryFiber: { value: 1.09 },
            sugars: { value: 4.5 },
            protein: { value: 5.04 },
            calcium: { value: 67.67 },
            iron: { value: 0.9 },
            vitaminC: { value: 16.35 },
            folate: { value: 60.2 }
        },
        nutritionSummary: {
            calories: 177,
            fat: '8.7g',
            carbs: '20.9g',
            protein: '5.0g',
            summaryText: 'A serving of penne platter.',
            breakdown: '44% fat, 47% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 177 }
        ]
    },
    {
        slug: 'pasta-hot-pot',
        name: 'Pasta hot pot',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 125.17,
            totalFat: { value: 6.47 },
            cholesterol: { value: 0 },
            sodium: { value: 231.17 },
            totalCarbohydrate: { value: 11.6 },
            dietaryFiber: { value: 0.8 },
            sugars: { value: 5.99 },
            protein: { value: 5.84 },
            calcium: { value: 55.28 },
            iron: { value: 0.82 },
            vitaminC: { value: 58.74 },
            folate: { value: 111.3 }
        },
        nutritionSummary: {
            calories: 125,
            fat: '6.5g',
            carbs: '11.6g',
            protein: '5.8g',
            summaryText: 'A serving of pasta hot pot.',
            breakdown: '46% fat, 37% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 125 }
        ]
    },
    {
        slug: 'chicken-lasagne',
        name: 'Chicken lasagne',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 187.49,
            totalFat: { value: 10.36 },
            cholesterol: { value: 0 },
            sodium: { value: 238.55 },
            totalCarbohydrate: { value: 13.9 },
            dietaryFiber: { value: 0.11 },
            sugars: { value: 2.74 },
            protein: { value: 10.45 },
            calcium: { value: 119.98 },
            iron: { value: 0.64 },
            vitaminC: { value: 4.23 },
            folate: { value: 61.02 }
        },
        nutritionSummary: {
            calories: 187,
            fat: '10.4g',
            carbs: '13.9g',
            protein: '10.5g',
            summaryText: 'A serving of chicken lasagne.',
            breakdown: '50% fat, 30% carbs, 20% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 187 }
        ]
    },
    {
        slug: 'fettuccine-spinach-sauce',
        name: 'Fettuccine with spinach sauce',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 129.21,
            totalFat: { value: 7.83 },
            cholesterol: { value: 0 },
            sodium: { value: 153.59 },
            totalCarbohydrate: { value: 12.19 },
            dietaryFiber: { value: 0.77 },
            sugars: { value: 1.18 },
            protein: { value: 3.1 },
            calcium: { value: 53.67 },
            iron: { value: 1.28 },
            vitaminC: { value: 38.37 },
            folate: { value: 170.92 }
        },
        nutritionSummary: {
            calories: 129,
            fat: '7.8g',
            carbs: '12.2g',
            protein: '3.1g',
            summaryText: 'Fettuccine with spinach sauce.',
            breakdown: '55% fat, 38% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 129 }
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
            cholesterol: { value: 0 },
            sodium: { value: 326.11 },
            totalCarbohydrate: { value: 51.75 },
            dietaryFiber: { value: 1.91 },
            sugars: { value: 5.59 },
            protein: { value: 8.05 },
            calcium: { value: 88.01 },
            iron: { value: 1.29 },
            vitaminC: { value: 0.23 },
            folate: { value: 7.56 }
        },
        nutritionSummary: {
            calories: 286,
            fat: '5.0g',
            carbs: '51.8g',
            protein: '8.1g',
            summaryText: 'A piece of naan bread.',
            breakdown: '16% fat, 72% carbs, 12% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 28.3 },
            totalCarbohydrate: { value: 10.73 },
            dietaryFiber: { value: 0.38 },
            sugars: { value: 0.69 },
            protein: { value: 1.63 },
            calcium: { value: 12.12 },
            iron: { value: 0.33 },
            vitaminC: { value: 0.05 },
            folate: { value: 4.15 }
        },
        nutritionSummary: {
            calories: 793,
            fat: '82.6g',
            carbs: '10.7g',
            protein: '1.6g',
            summaryText: 'A piece of bhatura.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 100.83 },
            totalCarbohydrate: { value: 28.18 },
            dietaryFiber: { value: 2.31 },
            sugars: { value: 0.28 },
            protein: { value: 4.64 },
            calcium: { value: 8 },
            iron: { value: 0.68 },
            vitaminC: { value: 0 },
            folate: { value: 2.95 }
        },
        nutritionSummary: {
            calories: 138,
            fat: '0.3g',
            carbs: '28.2g',
            protein: '4.6g',
            summaryText: 'A piece of idli.',
            breakdown: '2% fat, 82% carbs, 16% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 191.28 },
            totalCarbohydrate: { value: 19.57 },
            dietaryFiber: { value: 2.52 },
            sugars: { value: 1.33 },
            protein: { value: 3.29 },
            calcium: { value: 15.58 },
            iron: { value: 0.79 },
            vitaminC: { value: 14.14 },
            folate: { value: 35.76 }
        },
        nutritionSummary: {
            calories: 165,
            fat: '7.8g',
            carbs: '19.6g',
            protein: '3.3g',
            summaryText: 'A piece of masala dosa.',
            breakdown: '43% fat, 48% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 165 }
        ]
    },
    {
        slug: 'semolina-dosa',
        name: 'Semolina dosa (Suji/Rava dosa)',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 227.05,
            totalFat: { value: 7.12 },
            cholesterol: { value: 0 },
            sodium: { value: 202.36 },
            totalCarbohydrate: { value: 32.84 },
            dietaryFiber: { value: 4.04 },
            sugars: { value: 4.37 },
            protein: { value: 7.3 },
            calcium: { value: 116.04 },
            iron: { value: 1.39 },
            vitaminC: { value: 2.28 },
            folate: { value: 15.86 }
        },
        nutritionSummary: {
            calories: 227,
            fat: '7.1g',
            carbs: '32.8g',
            protein: '7.3g',
            summaryText: 'A piece of semolina dosa.',
            breakdown: '28% fat, 58% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 227 }
        ]
    },
    {
        slug: 'onion-tomato-uttapam',
        name: 'Onion tomato uttapam',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 462.02,
            totalFat: { value: 45.3 },
            cholesterol: { value: 0 },
            sodium: { value: 143.53 },
            totalCarbohydrate: { value: 11.32 },
            dietaryFiber: { value: 1.26 },
            sugars: { value: 0.8 },
            protein: { value: 1.91 },
            calcium: { value: 5.82 },
            iron: { value: 0.36 },
            vitaminC: { value: 4.78 },
            folate: { value: 11.68 }
        },
        nutritionSummary: {
            calories: 462,
            fat: '45.3g',
            carbs: '11.3g',
            protein: '1.9g',
            summaryText: 'A piece of onion tomato uttapam.',
            breakdown: '88% fat, 10% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 462 }
        ]
    },
    {
        slug: 'paneer-kaathi-roll',
        name: 'Paneer kaathi roll',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 285.94,
            totalFat: { value: 19.55 },
            cholesterol: { value: 0 },
            sodium: { value: 221.03 },
            totalCarbohydrate: { value: 20.1 },
            dietaryFiber: { value: 2.4 },
            sugars: { value: 3.29 },
            protein: { value: 6.92 },
            calcium: { value: 101.66 },
            iron: { value: 1.42 },
            vitaminC: { value: 18.67 },
            folate: { value: 54.04 }
        },
        nutritionSummary: {
            calories: 286,
            fat: '19.6g',
            carbs: '20.1g',
            protein: '6.9g',
            summaryText: 'A paneer kaathi roll.',
            breakdown: '61% fat, 28% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 286 }
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
            cholesterol: { value: 0 },
            sodium: { value: 236.22 },
            totalCarbohydrate: { value: 24.19 },
            dietaryFiber: { value: 5.19 },
            sugars: { value: 0.7 },
            protein: { value: 3.49 },
            calcium: { value: 14.76 },
            iron: { value: 1.11 },
            vitaminC: { value: 1.99 },
            folate: { value: 10.72 }
        },
        nutritionSummary: {
            calories: 264,
            fat: '16.9g',
            carbs: '24.2g',
            protein: '3.5g',
            summaryText: 'A piece of makki ki roti.',
            breakdown: '58% fat, 37% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 264 }
        ]
    },
    {
        slug: 'washed-moong-dal',
        name: 'Washed moong dal (Dhuli moong ki dal)',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 50,
            totalFat: { value: 1.68 },
            cholesterol: { value: 0 },
            sodium: { value: 150.64 },
            totalCarbohydrate: { value: 5.91 },
            dietaryFiber: { value: 1.17 },
            sugars: { value: 0.12 },
            protein: { value: 2.68 },
            calcium: { value: 8.48 },
            iron: { value: 0.64 },
            vitaminC: { value: 0.04 },
            folate: { value: 27.98 }
        },
        nutritionSummary: {
            calories: 50,
            fat: '1.7g',
            carbs: '5.9g',
            protein: '2.7g',
            summaryText: 'A serving of washed moong dal.',
            breakdown: '30% fat, 47% carbs, 23% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 50 }
        ]
    },
    {
        slug: 'washed-urad-dal',
        name: 'Washed urad dal (Dhuli urad ki dal)',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 61.32,
            totalFat: { value: 2.98 },
            cholesterol: { value: 0 },
            sodium: { value: 142.21 },
            totalCarbohydrate: { value: 5.84 },
            dietaryFiber: { value: 1.53 },
            sugars: { value: 0.32 },
            protein: { value: 2.51 },
            calcium: { value: 10.24 },
            iron: { value: 0.72 },
            vitaminC: { value: 0.99 },
            folate: { value: 30.4 }
        },
        nutritionSummary: {
            calories: 61,
            fat: '3.0g',
            carbs: '5.8g',
            protein: '2.5g',
            summaryText: 'A serving of washed urad dal.',
            breakdown: '44% fat, 38% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 61 }
        ]
    },
    {
        slug: 'split-bengal-gram-bottle-gourd',
        name: 'Split bengal gram with bottle gourd',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 73.25,
            totalFat: { value: 3.6 },
            cholesterol: { value: 0 },
            sodium: { value: 149.47 },
            totalCarbohydrate: { value: 7.1 },
            dietaryFiber: { value: 2.72 },
            sugars: { value: 1.05 },
            protein: { value: 2.79 },
            calcium: { value: 14.33 },
            iron: { value: 0.99 },
            vitaminC: { value: 15.2 },
            folate: { value: 90.42 }
        },
        nutritionSummary: {
            calories: 73,
            fat: '3.6g',
            carbs: '7.1g',
            protein: '2.8g',
            summaryText: 'Split bengal gram with bottle gourd.',
            breakdown: '44% fat, 39% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 73 }
        ]
    },
    {
        slug: 'dry-washed-urad-dal',
        name: 'Dry washed urad',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 124.71,
            totalFat: { value: 3.5 },
            cholesterol: { value: 0 },
            sodium: { value: 295.79 },
            totalCarbohydrate: { value: 15.66 },
            dietaryFiber: { value: 4.06 },
            sugars: { value: 0.73 },
            protein: { value: 6.85 },
            calcium: { value: 27.08 },
            iron: { value: 1.89 },
            vitaminC: { value: 1.46 },
            folate: { value: 40.3 }
        },
        nutritionSummary: {
            calories: 125,
            fat: '3.5g',
            carbs: '15.7g',
            protein: '6.9g',
            summaryText: 'A serving of dry washed urad.',
            breakdown: '25% fat, 50% carbs, 25% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 125 }
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
            cholesterol: { value: 0 },
            sodium: { value: 141.36 },
            totalCarbohydrate: { value: 5.79 },
            dietaryFiber: { value: 1.62 },
            sugars: { value: 0.34 },
            protein: { value: 2.51 },
            calcium: { value: 11 },
            iron: { value: 0.78 },
            vitaminC: { value: 1.1 },
            folate: { value: 40.35 }
        },
        nutritionSummary: {
            calories: 62,
            fat: '3.1g',
            carbs: '5.8g',
            protein: '2.5g',
            summaryText: 'A serving of mixed dal.',
            breakdown: '45% fat, 37% carbs, 18% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 123.86 },
            totalCarbohydrate: { value: 5.22 },
            dietaryFiber: { value: 2.02 },
            sugars: { value: 0.59 },
            protein: { value: 2.25 },
            calcium: { value: 13.58 },
            iron: { value: 0.68 },
            vitaminC: { value: 11.04 },
            folate: { value: 55.37 }
        },
        nutritionSummary: {
            calories: 54,
            fat: '2.6g',
            carbs: '5.2g',
            protein: '2.3g',
            summaryText: 'A serving of whole moong dal.',
            breakdown: '43% fat, 39% carbs, 18% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 123.72 },
            totalCarbohydrate: { value: 5.37 },
            dietaryFiber: { value: 1.98 },
            sugars: { value: 0.67 },
            protein: { value: 2.28 },
            calcium: { value: 12.2 },
            iron: { value: 0.95 },
            vitaminC: { value: 11.04 },
            folate: { value: 48.17 }
        },
        nutritionSummary: {
            calories: 54,
            fat: '2.5g',
            carbs: '5.4g',
            protein: '2.3g',
            summaryText: 'A serving of whole masoor dal.',
            breakdown: '42% fat, 40% carbs, 18% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 125.08 },
            totalCarbohydrate: { value: 5.74 },
            dietaryFiber: { value: 1.85 },
            sugars: { value: 0.66 },
            protein: { value: 2.01 },
            calcium: { value: 18.98 },
            iron: { value: 0.95 },
            vitaminC: { value: 11.04 },
            folate: { value: 116.57 }
        },
        nutritionSummary: {
            calories: 55,
            fat: '2.6g',
            carbs: '5.7g',
            protein: '2.0g',
            summaryText: 'A serving of whole moth dal.',
            breakdown: '43% fat, 42% carbs, 15% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 55 }
        ]
    },
    {
        slug: 'whole-urad-dal',
        name: 'Whole urad dal',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 53.8,
            totalFat: { value: 2.62 },
            cholesterol: { value: 0 },
            sodium: { value: 126.12 },
            totalCarbohydrate: { value: 5.05 },
            dietaryFiber: { value: 2.32 },
            sugars: { value: 0.57 },
            protein: { value: 2.21 },
            calcium: { value: 13.07 },
            iron: { value: 0.78 },
            vitaminC: { value: 10.28 },
            folate: { value: 51.6 }
        },
        nutritionSummary: {
            calories: 54,
            fat: '2.6g',
            carbs: '5.1g',
            protein: '2.2g',
            summaryText: 'A serving of whole urad dal.',
            breakdown: '44% fat, 38% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 54 }
        ]
    },
    {
        slug: 'moti-mahal-dal',
        name: 'Moti mahal dal (Urad rajmah mix dal)',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 103.13,
            totalFat: { value: 5.66 },
            cholesterol: { value: 0 },
            sodium: { value: 157.61 },
            totalCarbohydrate: { value: 8.74 },
            dietaryFiber: { value: 3.38 },
            sugars: { value: 1.7 },
            protein: { value: 3.93 },
            calcium: { value: 38.13 },
            iron: { value: 1.05 },
            vitaminC: { value: 15.45 },
            folate: { value: 93.14 }
        },
        nutritionSummary: {
            calories: 103,
            fat: '5.7g',
            carbs: '8.7g',
            protein: '3.9g',
            summaryText: 'A serving of Moti mahal dal.',
            breakdown: '49% fat, 34% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 103 }
        ]
    },
    {
        slug: 'black-channa-curry',
        name: 'Black channa curry/Bengal gram curry',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 140.68,
            totalFat: { value: 6.61 },
            cholesterol: { value: 0 },
            sodium: { value: 358.63 },
            totalCarbohydrate: { value: 14.11 },
            dietaryFiber: { value: 7.99 },
            sugars: { value: 2.36 },
            protein: { value: 5.67 },
            calcium: { value: 53.87 },
            iron: { value: 2.43 },
            vitaminC: { value: 15.13 },
            folate: { value: 87.38 }
        },
        nutritionSummary: {
            calories: 141,
            fat: '6.6g',
            carbs: '14.1g',
            protein: '5.7g',
            summaryText: 'A serving of black channa curry.',
            breakdown: '42% fat, 40% carbs, 18% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 357.99 },
            totalCarbohydrate: { value: 19.98 },
            dietaryFiber: { value: 4.73 },
            sugars: { value: 4.78 },
            protein: { value: 6.1 },
            calcium: { value: 30.61 },
            iron: { value: 1.82 },
            vitaminC: { value: 16.33 },
            folate: { value: 184.58 }
        },
        nutritionSummary: {
            calories: 163,
            fat: '6.8g',
            carbs: '20.0g',
            protein: '6.1g',
            summaryText: 'A serving of chickpeas curry.',
            breakdown: '38% fat, 49% carbs, 13% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 355.41 },
            totalCarbohydrate: { value: 17.88 },
            dietaryFiber: { value: 4.57 },
            sugars: { value: 2.51 },
            protein: { value: 6.06 },
            calcium: { value: 36.8 },
            iron: { value: 2.21 },
            vitaminC: { value: 15.13 },
            folate: { value: 86.78 }
        },
        nutritionSummary: {
            calories: 149,
            fat: '5.6g',
            carbs: '17.9g',
            protein: '6.1g',
            summaryText: 'A serving of lobia curry.',
            breakdown: '34% fat, 48% carbs, 18% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 352.69 },
            totalCarbohydrate: { value: 6.76 },
            dietaryFiber: { value: 7.34 },
            sugars: { value: 2.66 },
            protein: { value: 10.43 },
            calcium: { value: 65.13 },
            iron: { value: 2.79 },
            vitaminC: { value: 15.13 },
            folate: { value: 103.88 }
        },
        nutritionSummary: {
            calories: 163,
            fat: '10.2g',
            carbs: '6.8g',
            protein: '10.4g',
            summaryText: 'A serving of soyabean curry.',
            breakdown: '56% fat, 17% carbs, 27% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 163 }
        ]
    },
    {
        slug: 'kidney-bean-curry',
        name: 'Kidney bean curry (Rajmah curry)',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 143.73,
            totalFat: { value: 5.77 },
            cholesterol: { value: 0 },
            sodium: { value: 354.6 },
            totalCarbohydrate: { value: 16.38 },
            dietaryFiber: { value: 5.83 },
            sugars: { value: 2.49 },
            protein: { value: 5.95 },
            calcium: { value: 47.87 },
            iron: { value: 2.27 },
            vitaminC: { value: 16.33 },
            folate: { value: 112.28 }
        },
        nutritionSummary: {
            calories: 144,
            fat: '5.8g',
            carbs: '16.4g',
            protein: '6.0g',
            summaryText: 'A serving of kidney bean curry.',
            breakdown: '36% fat, 46% carbs, 18% protein.'
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
            cholesterol: { value: 0 },
            sodium: { value: 159.54 },
            totalCarbohydrate: { value: 10.57 },
            dietaryFiber: { value: 3.52 },
            sugars: { value: 3.31 },
            protein: { value: 3.35 },
            calcium: { value: 30.24 },
            iron: { value: 1.24 },
            potassium: { value: 450 },
            vitaminC: { value: 20.35 },
            folate: { value: 68.19 }
        },
        nutritionSummary: {
            calories: 97,
            fat: '4.4g',
            carbs: '10.6g',
            protein: '3.4g',
            summaryText: 'A lentil-based vegetable stew, cooked with tamarind broth.',
            breakdown: '41% fat, 44% carbs, 15% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 97 },
            { size: '1 bowl (250ml)', calories: 121 }
        ]
    },
    {
        slug: 'besan-kadhi-pakodies',
        name: 'Besan kadhi with pakodies',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 403.35,
            totalFat: { value: 42.59 },
            cholesterol: { value: 0 },
            sodium: { value: 60.8 },
            totalCarbohydrate: { value: 3.56 },
            dietaryFiber: { value: 0.81 },
            sugars: { value: 0.88 },
            protein: { value: 1.64 },
            calcium: { value: 24.53 },
            iron: { value: 0.38 },
            vitaminC: { value: 4.17 },
            folate: { value: 77.03 }
        },
        nutritionSummary: {
            calories: 403,
            fat: '42.6g',
            carbs: '3.6g',
            protein: '1.6g',
            summaryText: 'Besan kadhi with pakodies.',
            breakdown: '95% fat, 4% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 403 }
        ]
    },
    {
        slug: 'khatta-channa',
        name: 'Khatta channa',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 202.57,
            totalFat: { value: 10.56 },
            cholesterol: { value: 0 },
            sodium: { value: 513.32 },
            totalCarbohydrate: { value: 21.14 },
            dietaryFiber: { value: 5.26 },
            sugars: { value: 4.75 },
            protein: { value: 6.3 },
            calcium: { value: 40.77 },
            iron: { value: 1.94 },
            vitaminC: { value: 20.89 },
            folate: { value: 244.23 }
        },
        nutritionSummary: {
            calories: 203,
            fat: '10.6g',
            carbs: '21.1g',
            protein: '6.3g',
            summaryText: 'A serving of khatta channa.',
            breakdown: '47% fat, 42% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 203 }
        ]
    },
    {
        slug: 'sprouted-moong-dal-chat',
        name: 'Sprouted moong dal chat',
        cuisine: 'North Indian',
        mealCategory: 'Snack',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 32.47,
            totalFat: { value: 0.32 },
            cholesterol: { value: 0 },
            sodium: { value: 87.07 },
            totalCarbohydrate: { value: 6.01 },
            dietaryFiber: { value: 1.35 },
            sugars: { value: 1.57 },
            protein: { value: 1.35 },
            calcium: { value: 16.54 },
            iron: { value: 0.88 },
            vitaminC: { value: 38.78 },
            folate: { value: 43.12 }
        },
        nutritionSummary: {
            calories: 32,
            fat: '0.3g',
            carbs: '6.0g',
            protein: '1.4g',
            summaryText: 'A serving of sprouted moong dal chat.',
            breakdown: '9% fat, 74% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 32 }
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
            cholesterol: { value: 0 },
            sodium: { value: 254.76 },
            totalCarbohydrate: { value: 5.99 },
            dietaryFiber: { value: 3.02 },
            sugars: { value: 0.44 },
            protein: { value: 1.9 },
            calcium: { value: 22.87 },
            iron: { value: 1.07 },
            vitaminC: { value: 61.11 },
            folate: { value: 55.94 }
        },
        nutritionSummary: {
            calories: 106,
            fat: '8.1g',
            carbs: '6.0g',
            protein: '1.9g',
            summaryText: 'A dry curry made with potatoes and cauliflower.',
            breakdown: '69% fat, 23% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 106 }
        ]
    }
]
