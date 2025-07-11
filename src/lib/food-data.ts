
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
        slug: 'hot-tea-garam-chai',
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
            summaryText: 'A serving of Hot tea (Garam Chai).',
            breakdown: '29% fat, 64% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 16.14 }
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
            summaryText: 'A serving of Instant coffee.',
            breakdown: '29% fat, 63% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 23.16 }
        ]
    },
    {
        slug: 'espreso-coffee',
        name: 'Espreso coffee',
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
            summaryText: 'A serving of Espreso coffee.',
            breakdown: '37% fat, 51% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 51.54 }
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
            summaryText: 'A serving of Iced tea.',
            breakdown: '0% fat, 99% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 10.34 }
        ]
    },
    {
        slug: 'raw-mango-drink-aam-panna',
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
            summaryText: 'A serving of Raw mango drink (Aam panna).',
            breakdown: '1% fat, 97% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 35.92 }
        ]
    },
    {
        slug: 'fruit-punch-with-fresh-juices',
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
            summaryText: 'A serving of Fruit Punch (with fresh juices).',
            breakdown: '1% fat, 97% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 36.12 }
        ]
    },
    {
        slug: 'fruit-punch-with-squashes',
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
            summaryText: 'A serving of Fruit Punch (with squashes).',
            breakdown: '1% fat, 98% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 23.13 }
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
            summaryText: 'A serving of Lemonade.',
            breakdown: '0% fat, 99% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 20.8 }
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
            { size: '1 serving', calories: 21.52 }
        ]
    },
    {
        slug: 'cumin-infused-water-jeere-zeere-ka-pani',
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
            summaryText: 'A serving of Cumin infused water (Jeere/Zeere ka pani).',
            breakdown: '11% fat, 82% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 9.09 }
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
            summaryText: 'A serving of Coco pine cooler.',
            breakdown: '28% fat, 69% carbs, 3% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 32.75 }
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
            summaryText: 'A serving of Summer cooler.',
            breakdown: '1% fat, 96% carbs, 3% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 22.43 }
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
            summaryText: 'A serving of Hot cocoa.',
            breakdown: '46% fat, 41% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 90.1 }
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
            summaryText: 'A serving of Cold coffee with ice cream.',
            breakdown: '28% fat, 66% carbs, 6% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 67.85 }
        ]
    },
    {
        slug: 'banana-milkshake-kele-milkshake',
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
            summaryText: 'A serving of Banana milkshake (Kele milkshake).',
            breakdown: '33% fat, 56% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 65.31 }
        ]
    },
    {
        slug: 'mango-milkshake-aam-milkshake',
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
            summaryText: 'A serving of Mango milkshake (Aam milkshake).',
            breakdown: '37% fat, 51% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 56.9 }
        ]
    },
    {
        slug: 'pineapple-milkshake-ananas-milkshake',
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
            summaryText: 'A serving of Pineapple milkshake (Ananas milkshake).',
            breakdown: '36% fat, 55% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 55.72 }
        ]
    },
    {
        slug: 'orange-milkshake-narangi-milkshake',
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
            summaryText: 'A serving of Orange milkshake (Narangi milkshake).',
            breakdown: '39% fat, 50% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 57.42 }
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
            summaryText: 'A serving of Egg nog.',
            breakdown: '47% fat, 34% carbs, 19% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 97.14 }
        ]
    },
    {
        slug: 'sweet-lassi-meethi-lassi',
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
            summaryText: 'A serving of Sweet Lassi (Meethi lassi).',
            breakdown: '17% fat, 73% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 35.66 }
        ]
    },
    {
        slug: 'lassi-salted',
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
            summaryText: 'A serving of Lassi (salted).',
            breakdown: '34% fat, 40% carbs, 26% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 18.84 }
        ]
    },
    {
        slug: 'cheese-and-chilli-sandwich',
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
            summaryText: 'A serving of Cheese and chilli sandwich.',
            breakdown: '40% fat, 50% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 218.11 }
        ]
    },
    {
        slug: 'egg-sandwich-ande-ka-sandwich',
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
            summaryText: 'A serving of Egg sandwich (Ande ka sandwich).',
            breakdown: '50% fat, 41% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 285.96 }
        ]
    },
    {
        slug: 'cucumber-sandwich-kheere-ka-sandwich',
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
            summaryText: 'A serving of Cucumber sandwich (Kheere ka sandwich).',
            breakdown: '38% fat, 55% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 188.6 }
        ]
    },
    {
        slug: 'cheese-and-pineapple-sandwich-cheese-aur-ananas-ka-sandwich',
        name: 'Cheese and pineapple sandwich (Cheese aur ananas ka sandwich)',
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
            summaryText: 'A serving of Cheese and pineapple sandwich (Cheese aur ananas ka sandwich).',
            breakdown: '45% fat, 45% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 257.71 }
        ]
    },
    {
        slug: 'cheese-and-tomato-sandwich-cheese-aur-tamatar-ke-sandwich',
        name: 'Cheese and tomato sandwich (Cheese aur tamatar ke sandwich)',
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
            summaryText: 'A serving of Cheese and tomato sandwich (Cheese aur tamatar ke sandwich).',
            breakdown: '45% fat, 44% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 243.32 }
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
            summaryText: 'A serving of Chicken sandwich.',
            breakdown: '42% fat, 40% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 253.27 }
        ]
    },
    {
        slug: 'peanut-and-tomato-sandwich-moongfali-aur-tamatar-ka-sandwich',
        name: 'Peanut and tomato sandwich (Moongfali aur tamatar ka sandwich)',
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
            summaryText: 'A serving of Peanut and tomato sandwich (Moongfali aur tamatar ka sandwich).',
            breakdown: '50% fat, 39% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 291.43 }
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
            summaryText: 'A serving of Rainbow sandwich.',
            breakdown: '41% fat, 50% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 272.75 }
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
            summaryText: 'A serving of Club sandwich.',
            breakdown: '58% fat, 31% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 235.32 }
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
            summaryText: 'A serving of Vegetarian club sandwich.',
            breakdown: '51% fat, 40% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 198.33 }
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
            summaryText: 'A serving of Pin wheel sandwich.',
            breakdown: '72% fat, 18% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 311.52 }
        ]
    },
    {
        slug: 'carrot-apple-sandwich-gajar-aur-seb-ka-sandwich',
        name: 'Carrot apple sandwich (Gajar aur seb ka sandwich)',
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
            summaryText: 'A serving of Carrot apple sandwich (Gajar aur seb ka sandwich).',
            breakdown: '38% fat, 54% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 214.11 }
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
            summaryText: 'A serving of Salami sandwich.',
            breakdown: '55% fat, 34% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 255.59 }
        ]
    },
    {
        slug: 'vegetable-and-mayonnaise-sandwich',
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
            summaryText: 'A serving of Vegetable and mayonnaise sandwich.',
            breakdown: '57% fat, 38% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 244.26 }
        ]
    },
    {
        slug: 'egg-and-tomato-sandwich-ande-aur-tamatar-ka-sandwich',
        name: 'Egg and tomato sandwich (Ande aur tamatar ka sandwich)',
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
            summaryText: 'A serving of Egg and tomato sandwich (Ande aur tamatar ka sandwich).',
            breakdown: '42% fat, 47% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 222.11 }
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
            summaryText: 'A serving of Sweet open sandwich.',
            breakdown: '30% fat, 64% carbs, 6% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 244.25 }
        ]
    },
    {
        slug: 'mushroom-and-cheese-sandwich-toasted',
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
            summaryText: 'A serving of Mushroom and cheese sandwich (toasted).',
            breakdown: '51% fat, 37% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 227.42 }
        ]
    },
    {
        slug: 'cheese-and-tomato-sandwich-toasted-cheese-aur-tamatar-ke-sandwich-toasted',
        name: 'Cheese and tomato sandwich (toasted) (Cheese aur tamatar ke sandwich (toasted))',
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
            summaryText: 'A serving of Cheese and tomato sandwich (toasted) (Cheese aur tamatar ke sandwich (toasted)).',
            breakdown: '52% fat, 38% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 224.58 }
        ]
    },
    {
        slug: 'pea-potato-sandwich-toasted-matar-aloo-ka-sandwich',
        name: 'Pea potato sandwich (toasted) (Matar aloo ka sandwich)',
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
            summaryText: 'A serving of Pea potato sandwich (toasted) (Matar aloo ka sandwich).',
            breakdown: '29% fat, 61% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 164.9 }
        ]
    },
    {
        slug: 'paneer-pea-sandwich-toasted-paneer-matar-ka-sandwich',
        name: 'Paneer pea sandwich (toasted) (Paneer matar ka sandwich)',
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
            summaryText: 'A serving of Paneer pea sandwich (toasted) (Paneer matar ka sandwich).',
            breakdown: '43% fat, 39% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 249.56 }
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
            summaryText: 'A serving of Chicken sandwich (toasted).',
            breakdown: '28% fat, 45% carbs, 27% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 167.37 }
        ]
    },
    {
        slug: 'pea-keema-sandwich-toasted-matar-aur-keema-ka-sandwich',
        name: 'Pea keema sandwich (toasted) (Matar aur keema ka sandwich)',
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
            summaryText: 'A serving of Pea keema sandwich (toasted) (Matar aur keema ka sandwich).',
            breakdown: '29% fat, 47% carbs, 24% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 171.78 }
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
            summaryText: 'A serving of Classic club sandwich.',
            breakdown: '52% fat, 37% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 200.83 }
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
            summaryText: 'A serving of Sesame toast.',
            breakdown: '90% fat, 9% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 495.19 }
        ]
    },
    {
        slug: 'cracked-wheat-porridge-meetha-daliya',
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
            summaryText: 'A serving of Cracked wheat porridge (Meetha daliya).',
            breakdown: '45% fat, 44% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 81.57 }
        ]
    },
    {
        slug: 'semolina-porridge-suji-rava-daliya',
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
            summaryText: 'A serving of Semolina porridge (Suji/Rava daliya).',
            breakdown: '36% fat, 49% carbs, 15% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 100.89 }
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
            summaryText: 'A serving of Oatmeal Porridge.',
            breakdown: '40% fat, 48% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 72.85 }
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
            summaryText: 'A serving of Cornflakes with milk.',
            breakdown: '39% fat, 51% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 117.33 }
        ]
    },
    {
        slug: 'rice-flakes-chiwda-aval',
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
            summaryText: 'A serving of Rice flakes (Chiwda/Aval).',
            breakdown: '32% fat, 55% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 112.44 }
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
            summaryText: 'A serving of Wheat flakes.',
            breakdown: '32% fat, 55% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 112.44 }
        ]
    },
    {
        slug: 'murmura-puffed-rice',
        name: 'Murmura (Puffed rice)',
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
            summaryText: 'A serving of Murmura (Puffed rice).',
            breakdown: '32% fat, 55% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 113.32 }
        ]
    },
    {
        slug: 'puffed-wheat-murmure-moori',
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
            summaryText: 'A serving of Puffed wheat (Murmure/Moori).',
            breakdown: '32% fat, 55% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 113.32 }
        ]
    },
    {
        slug: 'boiled-egg-ubla-anda',
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
            summaryText: 'A serving of Boiled egg (Ubla anda).',
            breakdown: '60% fat, 1% carbs, 39% protein.'
        },
        servingSizes: [
            { size: '1 egg', calories: 45.35 }
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
            summaryText: 'A serving of Fried Egg.',
            breakdown: '79% fat, 1% carbs, 20% protein.'
        },
        servingSizes: [
            { size: '1 egg', calories: 223.67 }
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
            summaryText: 'A serving of Poached egg.',
            breakdown: '59% fat, 1% carbs, 40% protein.'
        },
        servingSizes: [
            { size: '1 egg', calories: 123.87 }
        ]
    },
    {
        slug: 'scrambled-egg-ande-ki-bhurji',
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
            summaryText: 'A serving of Scrambled egg (Ande ki bhurji).',
            breakdown: '70% fat, 3% carbs, 27% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 155.97 }
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
            summaryText: 'A serving of Baked egg.',
            breakdown: '52% fat, 28% carbs, 20% protein.'
        },
        servingSizes: [
            { size: '1 egg', calories: 218.85 }
        ]
    },
    {
        slug: 'plain-omelette-omlet',
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
            summaryText: 'A serving of Plain omelette/omlet.',
            breakdown: '85% fat, 1% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 272.41 }
        ]
    },
    {
        slug: 'stuffed-egg-omelette-omlet',
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
            summaryText: 'A serving of Stuffed egg omelette/omlet.',
            breakdown: '78% fat, 5% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 203.51 }
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
            summaryText: 'A serving of Pancake.',
            breakdown: '48% fat, 40% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 203.36 }
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
            summaryText: 'A serving of Keema pancake.',
            breakdown: '58% fat, 22% carbs, 20% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 176.27 }
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
            summaryText: 'A serving of Vegetable pancake.',
            breakdown: '47% fat, 39% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 125.18 }
        ]
    },
    {
        slug: 'jam-and-fruit-pancake',
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
            summaryText: 'A serving of Jam and fruit pancake.',
            breakdown: '39% fat, 51% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 162.02 }
        ]
    },
    {
        slug: 'khoa-and-coconut-pancake',
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
            summaryText: 'A serving of Khoa and coconut pancake.',
            breakdown: '51% fat, 40% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 271.98 }
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
            summaryText: 'A serving of Brown stock.',
            breakdown: '58% fat, 5% carbs, 37% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 21.32 }
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
            summaryText: 'A serving of Vegetable stock.',
            breakdown: '70% fat, 22% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 17.6 }
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
            summaryText: 'A serving of Chicken stock.',
            breakdown: '45% fat, 5% carbs, 50% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 29.88 }
        ]
    },
    {
        slug: 'clear-tomato-soup-tamatar-ka-soup',
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
            summaryText: 'A serving of Clear tomato soup (Tamatar ka soup).',
            breakdown: '86% fat, 9% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 80.07 }
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
            summaryText: 'A serving of Lentil soup.',
            breakdown: '84% fat, 5% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 31.17 }
        ]
    },
    {
        slug: 'chicken-consomme-clear-chicken-soup',
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
            summaryText: 'A serving of Chicken consomme (Clear chicken soup).',
            breakdown: '85% fat, 2% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 47.94 }
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
            summaryText: 'A serving of Cream of tomato soup.',
            breakdown: '85% fat, 10% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 97.81 }
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
            summaryText: 'A serving of Cream of green peas soup.',
            breakdown: '82% fat, 11% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 127.84 }
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
            summaryText: 'A serving of Cream of spinach soup.',
            breakdown: '86% fat, 9% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 100.54 }
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
            summaryText: 'A serving of Cream of mixed vegetable soup.',
            breakdown: '83% fat, 8% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 59.65 }
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
            summaryText: 'A serving of Cream of mushroom soup.',
            breakdown: '87% fat, 6% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 117.28 }
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
            summaryText: 'A serving of Chicken sweet corn soup.',
            breakdown: '82% fat, 2% carbs, 16% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 28.32 }
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
            summaryText: 'A serving of Minestrone soup.',
            breakdown: '80% fat, 9% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 42.66 }
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
            summaryText: 'A serving of Egg drop soup.',
            breakdown: '86% fat, 2% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 26.64 }
        ]
    },
    {
        slug: 'chinese-cabbage-and-meat-ball-soup',
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
            { size: '1 serving', calories: 484.31 }
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
            summaryText: 'A serving of French onion soup.',
            breakdown: '85% fat, 8% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 55.61 }
        ]
    },
    {
        slug: 'hot-and-sour-soup',
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
            summaryText: 'A serving of Hot and sour soup.',
            breakdown: '37% fat, 23% carbs, 40% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 31.51 }
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
            summaryText: 'A serving of Talaumein soup.',
            breakdown: '85% fat, 5% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 35.63 }
        ]
    },
    {
        slug: 'cold-cucumber-soup-thanda-kheere-ka-soup',
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
            summaryText: 'A serving of Cold cucumber soup (Thanda kheere ka soup).',
            breakdown: '37% fat, 38% carbs, 25% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 48.03 }
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
            summaryText: 'A serving of Cold summer garden soup.',
            breakdown: '86% fat, 5% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 49.19 }
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
            summaryText: 'A serving of Chapati/Roti.',
            breakdown: '16% fat, 70% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 202.31 }
        ]
    },
    {
        slug: 'plain-parantha-paratha',
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
            summaryText: 'A serving of Plain parantha/paratha.',
            breakdown: '51% fat, 41% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 298.3 }
        ]
    },
    {
        slug: 'potato-parantha-paratha-aloo-ka-parantha-paratha',
        name: 'Potato parantha/paratha (Aloo ka parantha/paratha)',
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
            summaryText: 'A serving of Potato parantha/paratha (Aloo ka parantha/paratha).',
            breakdown: '45% fat, 47% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 205.04 }
        ]
    },
    {
        slug: 'radish-parantha-paratha-mooli-ka-parantha-paratha',
        name: 'Radish parantha/paratha (Mooli ka parantha/paratha)',
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
            summaryText: 'A serving of Radish parantha/paratha (Mooli ka parantha/paratha).',
            breakdown: '47% fat, 45% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 183.52 }
        ]
    },
    {
        slug: 'cauliflower-parantha-paratha-phoolgobhi-ka-parantha-paratha',
        name: 'Cauliflower parantha/paratha (Phoolgobhi ka parantha/paratha)',
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
            summaryText: 'A serving of Cauliflower parantha/paratha (Phoolgobhi ka parantha/paratha).',
            breakdown: '48% fat, 42% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 178.07 }
        ]
    },
    {
        slug: 'dal-parantha-paratha',
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
            summaryText: 'A serving of Dal parantha/paratha.',
            breakdown: '44% fat, 45% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 268.24 }
        ]
    },
    {
        slug: 'sprouted-moong-parantha-paratha',
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
            summaryText: 'A serving of Sprouted moong parantha/paratha.',
            breakdown: '49% fat, 42% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 228.59 }
        ]
    },
    {
        slug: 'pea-parantha-paratha-matar-ka-parantha-paratha',
        name: 'Pea parantha/paratha (Matar ka parantha/paratha)',
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
            summaryText: 'A serving of Pea parantha/paratha (Matar ka parantha/paratha).',
            breakdown: '41% fat, 45% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 190.73 }
        ]
    },
    {
        slug: 'keema-parantha-paratha',
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
            summaryText: 'A serving of Keema parantha/paratha.',
            breakdown: '53% fat, 31% carbs, 16% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 238.09 }
        ]
    },
    {
        slug: 'paneer-parantha-paratha',
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
            summaryText: 'A serving of Paneer parantha/paratha.',
            breakdown: '50% fat, 37% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 262.97 }
        ]
    },
    {
        slug: 'besan-and-spinach-parantha-paratha-besan-aur-palak-ka-parantha-paratha',
        name: 'Besan and spinach parantha/paratha (Besan aur palak ka parantha/paratha)',
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
            summaryText: 'A serving of Besan and spinach parantha/paratha (Besan aur palak ka parantha/paratha).',
            breakdown: '50% fat, 40% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 216.49 }
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
            summaryText: 'A serving of Poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 737.63 }
        ]
    },
    {
        slug: 'spinach-poori-palak-poori',
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
            summaryText: 'A serving of Spinach poori (Palak poori).',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 684.25 }
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
            summaryText: 'A serving of Methi poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 710.02 }
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
            summaryText: 'A serving of Dal stuffed poori.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 785.16 }
        ]
    },
    {
        slug: 'potato-stuffed-poori-aloo-ki-poori',
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
            summaryText: 'A serving of Potato stuffed poori (Aloo ki poori).',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 776.74 }
        ]
    },
    {
        slug: 'tandoori-parantha-paratha',
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
            summaryText: 'A serving of Tandoori parantha/paratha.',
            breakdown: '50% fat, 42% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 295.37 }
        ]
    },
    {
        slug: 'boiled-rice-uble-chawal',
        name: 'Boiled rice (Uble chawal)',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 serving',
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
            summaryText: 'A serving of Boiled rice (Uble chawal).',
            breakdown: '1% fat, 88% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 117.19 }
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
            summaryText: 'A serving of Plain pulao.',
            breakdown: '30% fat, 62% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 140.21 }
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
            summaryText: 'A serving of Mixed vegetable pulao.',
            breakdown: '26% fat, 62% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 113.05 }
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
            summaryText: 'A serving of Mushroom pulao.',
            breakdown: '29% fat, 61% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 124.29 }
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
            summaryText: 'A serving of Sprouted moong pulao.',
            breakdown: '29% fat, 62% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 112.97 }
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
            summaryText: 'A serving of Paneer pulao.',
            breakdown: '92% fat, 6% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 581.91 }
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
            summaryText: 'A serving of Peanut pulao.',
            breakdown: '44% fat, 44% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 193.28 }
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
            { size: '1 serving', calories: 261.71 }
        ]
    },
    {
        slug: 'green-chickpeas-pulao-choliya-pulao-hare-chane-ka-pulao',
        name: 'Green chickpeas pulao (Choliya pulao/Hare chane ka pulao)',
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
            summaryText: 'A serving of Green chickpeas pulao (Choliya pulao/Hare chane ka pulao).',
            breakdown: '25% fat, 64% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 173.43 }
        ]
    },
    {
        slug: 'mutton-biryani-biriyani',
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
            summaryText: 'A serving of Mutton biryani/biriyani.',
            breakdown: '36% fat, 47% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 190.76 }
        ]
    },
    {
        slug: 'vegetable-biryani-biriyani',
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
            summaryText: 'A serving of Vegetable biryani/biriyani.',
            breakdown: '49% fat, 43% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 174.61 }
        ]
    },
    {
        slug: 'lemon-rice-pulihora-elumichai-sadam-chitranna',
        name: 'Lemon rice (Pulihora, Elumichai sadam, Chitranna)',
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
            summaryText: 'A serving of Lemon rice (Pulihora, Elumichai sadam, Chitranna).',
            breakdown: '40% fat, 49% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 176.3 }
        ]
    },
    {
        slug: 'sweet-rice-meethe-chawal',
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
            summaryText: 'A serving of Sweet rice (Meethe chawal).',
            breakdown: '19% fat, 79% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 215.41 }
        ]
    },
    {
        slug: 'curd-rice-dahi-bhaat-dahi-chawal-perugu-annamdaddojanamthayir-saadam',
        name: 'Curd rice (Dahi bhaat/Dahi chawal/ Perugu annam/Daddojanam/Thayir saadam)',
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
            summaryText: 'A serving of Curd rice (Dahi bhaat/Dahi chawal/ Perugu annam/Daddojanam/Thayir saadam).',
            breakdown: '20% fat, 67% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 195.74 }
        ]
    },
    {
        slug: 'tamarind-rice-chintapandu-pulihorapuliyodharaipuli-sadamhuli-anna',
        name: 'Tamarind rice (Chintapandu pulihora/Puliyodharai/Puli sadam/Huli anna)',
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
            summaryText: 'A serving of Tamarind rice (Chintapandu pulihora/Puliyodharai/Puli sadam/Huli anna).',
            breakdown: '21% fat, 70% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 373.04 }
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
            { size: '1 serving', calories: 164.24 }
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
            { size: '1 serving', calories: 120.58 }
        ]
    },
    {
        slug: 'macroni-cheese-pie',
        name: 'Macroni cheese pie',
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
            summaryText: 'A serving of Macroni cheese pie.',
            breakdown: '39% fat, 50% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 170.63 }
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
            summaryText: 'A serving of Vegetable chowmein.',
            breakdown: '44% fat, 48% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 129.71 }
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
            summaryText: 'A serving of Chicken chowmein.',
            breakdown: '49% fat, 35% carbs, 16% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 151.33 }
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
            summaryText: 'A serving of Cheese noodle ring.',
            breakdown: '41% fat, 42% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 133.67 }
        ]
    },
    {
        slug: 'spaghetti-and-cheese-balls-in-tomato-sauce',
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
            summaryText: 'A serving of Spaghetti and cheese balls in tomato sauce.',
            breakdown: '92% fat, 6% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 508.32 }
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
            summaryText: 'A serving of Penne platter.',
            breakdown: '44% fat, 47% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 177.4 }
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
            summaryText: 'A serving of Pasta hot pot.',
            breakdown: '46% fat, 37% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 125.17 }
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
            summaryText: 'A serving of Chicken lasagne.',
            breakdown: '50% fat, 30% carbs, 20% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 187.49 }
        ]
    },
    {
        slug: 'fettuccine-with-spinach-sauce',
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
            summaryText: 'A serving of Fettuccine with spinach sauce.',
            breakdown: '55% fat, 38% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 129.21 }
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
            summaryText: 'A serving of Naan.',
            breakdown: '16% fat, 72% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 286.45 }
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
            summaryText: 'A serving of Bhatura.',
            breakdown: '94% fat, 5% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 793.2 }
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
            summaryText: 'A serving of Idli.',
            breakdown: '2% fat, 82% carbs, 16% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 137.54 }
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
            summaryText: 'A serving of Masala dosa.',
            breakdown: '43% fat, 48% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 164.58 }
        ]
    },
    {
        slug: 'semolina-dosa-suji-rava-dosa',
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
            summaryText: 'A serving of Semolina dosa (Suji/Rava dosa).',
            breakdown: '28% fat, 58% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 227.05 }
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
            summaryText: 'A serving of Onion tomato uttapam.',
            breakdown: '88% fat, 10% carbs, 2% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 462.02 }
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
            summaryText: 'A serving of Paneer kaathi roll.',
            breakdown: '61% fat, 28% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 285.94 }
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
            summaryText: 'A serving of Makki ki roti.',
            breakdown: '58% fat, 37% carbs, 5% protein.'
        },
        servingSizes: [
            { size: '1 piece', calories: 263.97 }
        ]
    },
    {
        slug: 'washed-moong-dal-dhuli-moong-ki-dal',
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
            summaryText: 'A serving of Washed moong dal (Dhuli moong ki dal).',
            breakdown: '30% fat, 47% carbs, 23% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 50 }
        ]
    },
    {
        slug: 'washed-urad-dal-dhuli-urad-ki-dal',
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
            summaryText: 'A serving of Washed urad dal (Dhuli urad ki dal).',
            breakdown: '44% fat, 38% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 61.32 }
        ]
    },
    {
        slug: 'split-bengal-gram-with-bottle-gourd-channa-dal-with-ghiya-lauki',
        name: 'Split bengal gram with bottle gourd (Channa dal with ghiya/lauki)',
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
            summaryText: 'A serving of Split bengal gram with bottle gourd (Channa dal with ghiya/lauki).',
            breakdown: '44% fat, 39% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 73.25 }
        ]
    },
    {
        slug: 'dry-washed-urad',
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
            summaryText: 'A serving of Dry washed urad.',
            breakdown: '25% fat, 50% carbs, 25% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 124.71 }
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
            summaryText: 'A serving of Mixed dal.',
            breakdown: '45% fat, 37% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 61.93 }
        ]
    },
    {
        slug: 'whole-moong-moong-ki-dal',
        name: 'Whole moong (Moong ki dal)',
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
            summaryText: 'A serving of Whole moong (Moong ki dal).',
            breakdown: '43% fat, 39% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 53.7 }
        ]
    },
    {
        slug: 'whole-masoor-masoor-ki-dal',
        name: 'Whole masoor (Masoor ki dal)',
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
            summaryText: 'A serving of Whole masoor (Masoor ki dal).',
            breakdown: '42% fat, 40% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 54.05 }
        ]
    },
    {
        slug: 'whole-moth-moth-ki-dal',
        name: 'Whole moth (Moth ki dal)',
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
            summaryText: 'A serving of Whole moth (Moth ki dal).',
            breakdown: '43% fat, 42% carbs, 15% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 55 }
        ]
    },
    {
        slug: 'whole-urad-urad-ki-dal',
        name: 'Whole urad (Urad ki dal)',
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
            summaryText: 'A serving of Whole urad (Urad ki dal).',
            breakdown: '44% fat, 38% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 53.8 }
        ]
    },
    {
        slug: 'moti-mahal-dal-urad-rajmah-mix-dal',
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
            summaryText: 'A serving of Moti mahal dal (Urad rajmah mix dal).',
            breakdown: '49% fat, 34% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 103.13 }
        ]
    },
    {
        slug: 'black-channa-curry-bengal-gram-curry-kale-chane-ki-curry',
        name: 'Black channa curry/Bengal gram curry (Kale chane ki curry)',
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
            summaryText: 'A serving of Black channa curry/Bengal gram curry (Kale chane ki curry).',
            breakdown: '42% fat, 40% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 140.68 }
        ]
    },
    {
        slug: 'chickpeas-curry-safed-channa-curry',
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
            summaryText: 'A serving of Chickpeas curry (Safed channa curry).',
            breakdown: '38% fat, 49% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 163.43 }
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
            summaryText: 'A serving of Lobia curry.',
            breakdown: '34% fat, 48% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 148.99 }
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
            summaryText: 'A serving of Soyabean curry.',
            breakdown: '56% fat, 17% carbs, 27% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 163.28 }
        ]
    },
    {
        slug: 'kidney-bean-curry-rajmah-curry',
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
            summaryText: 'A serving of Kidney bean curry (Rajmah curry).',
            breakdown: '36% fat, 46% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 143.73 }
        ]
    },
    {
        slug: 'sambar',
        name: 'Sambar',
        cuisine: 'South Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 serving',
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
            vitaminC: { value: 20.35 },
            folate: { value: 68.19 }
        },
        nutritionSummary: {
            calories: 97,
            fat: '4.4g',
            carbs: '10.6g',
            protein: '3.4g',
            summaryText: 'A serving of Sambar.',
            breakdown: '41% fat, 44% carbs, 15% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 96.92 }
        ]
    },
    {
        slug: 'besan-kadhi-with-pakodies',
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
            summaryText: 'A serving of Besan kadhi with pakodies.',
            breakdown: '95% fat, 4% carbs, 1% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 403.35 }
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
            summaryText: 'A serving of Khatta channa.',
            breakdown: '47% fat, 42% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 202.57 }
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
            summaryText: 'A serving of Sprouted moong dal chat.',
            breakdown: '9% fat, 74% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 serving', calories: 32.47 }
        ]
    },
    {
        slug: 'potato-cauliflower-aloo-gobhi',
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
            summaryText: 'A serving of Potato cauliflower (Aloo gobhi).',
            breakdown: '69% fat, 23% carbs, 8% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 106.18 }
        ]
    },
    {
        slug: 'vegetables-indian-style',
        name: 'Vegetables Indian Style',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 cup (245 g)',
            calories: 97,
            totalFat: { value: 2.00, percent: 3 },
            transFat: { value: 1.000 },
            saturatedFat: { value: 0.300, percent: 2 },
            sodium: { value: 480, percent: 21 },
            totalCarbohydrate: { value: 11.00, percent: 4 },
            dietaryFiber: { value: 5.5, percent: 20 },
            sugars: { value: 5.50 },
            protein: { value: 4.50 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 97,
            fat: '2g',
            carbs: '11g',
            protein: '4.5g',
            summaryText: 'There are 97 calories in 1 cup (245 g) of Karine & Jeff Vegetables Indian Style.',
            breakdown: '22% fat, 55% carbs, 22% protein.'
        },
        servingSizes: [
            { size: '1 cup (245 g)', calories: 97 }
        ]
    },
    {
        slug: 'cauliflower',
        name: 'Cauliflower',
        cuisine: 'Generic',
        mealCategory: 'Other',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 25,
            totalFat: { value: 0.1, percent: 0 },
            saturatedFat: { value: 0.032, percent: 0 },
            polyunsaturatedFat: { value: 0.099 },
            monounsaturatedFat: { value: 0.014 },
            sodium: { value: 30, percent: 1 },
            totalCarbohydrate: { value: 5.3, percent: 2 },
            dietaryFiber: { value: 2.5, percent: 9 },
            sugars: { value: 2.4 },
            protein: { value: 1.98 },
            calcium: { value: 22, percent: 2 },
            iron: { value: 0.44, percent: 2 },
            potassium: { value: 303, percent: 6 },
            vitaminA: { value: 1, percent: 0 },
            vitaminC: { value: 46.4, percent: 52 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 25,
            fat: '0.1g',
            carbs: '5.3g',
            protein: '1.98g',
            summaryText: 'There are 25 calories in 1 cup of Cauliflower.',
            breakdown: '3% fat, 71% carbs, 26% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 25 },
            { size: '1 floweret', calories: 3 },
            { size: '100 g', calories: 25 },
            { size: '1 head medium (5-6" dia)', calories: 144 },
            { size: '1 head large (6-7" dia)', calories: 210 }
        ]
    },
    {
        slug: 'turnips',
        name: 'Turnips',
        cuisine: 'Generic',
        mealCategory: 'Other',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 cup of cubed',
            calories: 36,
            totalFat: { value: 0.13, percent: 0 },
            saturatedFat: { value: 0.014, percent: 0 },
            polyunsaturatedFat: { value: 0.069 },
            monounsaturatedFat: { value: 0.008 },
            sodium: { value: 87, percent: 4 },
            totalCarbohydrate: { value: 8.36, percent: 3 },
            dietaryFiber: { value: 2.3, percent: 8 },
            sugars: { value: 4.94 },
            protein: { value: 1.17 },
            calcium: { value: 39, percent: 3 },
            iron: { value: 0.39, percent: 2 },
            potassium: { value: 248, percent: 5 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 27.3, percent: 30 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 36,
            fat: '0.13g',
            carbs: '8.36g',
            protein: '1.17g',
            summaryText: 'There are 36 calories in 1 cup of cubed Turnips.',
            breakdown: '3% fat, 85% carbs, 12% protein.'
        },
        servingSizes: [
            { size: '1 cup cubed', calories: 36 },
            { size: '1 medium', calories: 34 }
        ]
    },
    {
        slug: 'red-tomatoes',
        name: 'Red Tomatoes',
        cuisine: 'Generic',
        mealCategory: 'Other',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 cup of chopped or sliced',
            calories: 32,
            totalFat: { value: 0.36, percent: 0 },
            saturatedFat: { value: 0.083, percent: 0 },
            polyunsaturatedFat: { value: 0.243 },
            monounsaturatedFat: { value: 0.092 },
            sodium: { value: 9, percent: 0 },
            totalCarbohydrate: { value: 7.06, percent: 3 },
            dietaryFiber: { value: 2.2, percent: 8 },
            sugars: { value: 4.73 },
            protein: { value: 1.58 },
            calcium: { value: 18, percent: 1 },
            iron: { value: 0.49, percent: 3 },
            potassium: { value: 427, percent: 9 },
            vitaminA: { value: 76, percent: 8 },
            vitaminC: { value: 22.9, percent: 25 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 32,
            fat: '0.36g',
            carbs: '7.06g',
            protein: '1.58g',
            summaryText: 'There are 32 calories in 1 cup of chopped or sliced Red Tomatoes.',
            breakdown: '9% fat, 75% carbs, 17% protein.'
        },
        servingSizes: [
            { size: '1 cup chopped or sliced', calories: 32 }
        ]
    },
    {
        slug: 'indian-punjab-eggplant',
        name: 'Indian Punjab Eggplant',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1/2 package (5 oz)',
            calories: 100,
            totalFat: { value: 5.00, percent: 6 },
            saturatedFat: { value: 0.000, percent: 0 },
            sodium: { value: 480, percent: 21 },
            totalCarbohydrate: { value: 12.00, percent: 4 },
            dietaryFiber: { value: 2.0, percent: 7 },
            sugars: { value: 4.00 },
            protein: { value: 3.00 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 100,
            fat: '5g',
            carbs: '12g',
            protein: '3g',
            summaryText: 'There are 100 calories in 1/2 package (5 oz) of Tasty Bite Indian Punjab Eggplant.',
            breakdown: '43% fat, 46% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1/2 package (5 oz)', calories: 100 }
        ]
    },
    {
        slug: 'tikka-vegetables',
        name: 'Tikka Vegetables',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '2/3 cup (140 g)',
            calories: 150,
            totalFat: { value: 8.00, percent: 10 },
            saturatedFat: { value: 4.000, percent: 20 },
            polyunsaturatedFat: { value: 4.000 },
            sodium: { value: 340, percent: 15 },
            totalCarbohydrate: { value: 16.00, percent: 6 },
            dietaryFiber: { value: 3.0, percent: 11 },
            sugars: { value: 8.00 },
            protein: { value: 4.00 },
            cholesterol: { value: 15, percent: 5 }
        },
        nutritionSummary: {
            calories: 150,
            fat: '8g',
            carbs: '16g',
            protein: '4g',
            summaryText: 'There are 150 calories in 2/3 cup (140 g) of Trader Joe\'s Indian Fare Tikka Vegetables.',
            breakdown: '47% fat, 42% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '2/3 cup (140 g)', calories: 150 }
        ]
    },
    {
        slug: 'stir-fry-mix-vegetables',
        name: 'Stir Fry Mix Vegetables',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 cup (85 g)',
            calories: 30,
            totalFat: { value: 0.00, percent: 0 },
            saturatedFat: { value: 0.000, percent: 0 },
            sodium: { value: 20, percent: 1 },
            totalCarbohydrate: { value: 6.00, percent: 2 },
            dietaryFiber: { value: 2.0, percent: 7 },
            sugars: { value: 3.00 },
            protein: { value: 1.00 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 30,
            fat: '0g',
            carbs: '6g',
            protein: '1g',
            summaryText: 'There are 30 calories in 1 cup (85 g) of Food Lion Stir Fry Mix Vegetables.',
            breakdown: '0% fat, 86% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 cup (85 g)', calories: 30 }
        ]
    },
    {
        slug: 'indian-mushroom-masala',
        name: 'Indian Mushroom Masala',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1/2 pack (142.5 g)',
            calories: 110,
            totalFat: { value: 4.50, percent: 6 },
            saturatedFat: { value: 0.000, percent: 0 },
            sodium: { value: 440, percent: 19 },
            totalCarbohydrate: { value: 14.00, percent: 5 },
            dietaryFiber: { value: 2.0, percent: 7 },
            sugars: { value: 5.00 },
            protein: { value: 3.00 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 110,
            fat: '4.5g',
            carbs: '14g',
            protein: '3g',
            summaryText: 'There are 110 calories in 1/2 pack (142.5 g) of Tasty Bite Indian Mushroom Masala.',
            breakdown: '37% fat, 52% carbs, 11% protein.'
        },
        servingSizes: [
            { size: '1/2 pack (142.5 g)', calories: 110 }
        ]
    },
    {
        slug: 'channa-masala',
        name: 'Channa Masala',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '2/3 cup (140 g)',
            calories: 170,
            totalFat: { value: 6.00, percent: 8 },
            saturatedFat: { value: 0.500, percent: 3 },
            sodium: { value: 400, percent: 17 },
            totalCarbohydrate: { value: 22.00, percent: 8 },
            dietaryFiber: { value: 8.0, percent: 29 },
            sugars: { value: 3.00 },
            protein: { value: 6.00 },
            calcium: { value: 50, percent: 4 },
            iron: { value: 1.80, percent: 10 },
            potassium: { value: 0, percent: 0 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 170,
            fat: '6g',
            carbs: '22g',
            protein: '6g',
            summaryText: 'There are 170 calories in 2/3 cup (140 g) of Tasty Bite Channa Masala.',
            breakdown: '33% fat, 53% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '2/3 cup (140 g)', calories: 170 }
        ]
    },
    {
        slug: 'matar-paneer',
        name: 'Matar Paneer',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1/2 pack',
            calories: 150,
            totalFat: { value: 10.00, percent: 13 },
            sodium: { value: 350, percent: 15 },
            totalCarbohydrate: { value: 7.00, percent: 3 },
            dietaryFiber: { value: 6.0, percent: 21 },
            sugars: { value: 4.50 },
            protein: { value: 3.00 },
            cholesterol: { value: 13, percent: 4 }
        },
        nutritionSummary: {
            calories: 150,
            fat: '10g',
            carbs: '7g',
            protein: '3g',
            summaryText: 'There are 150 calories in 1/2 pack of Tasty Bite Peas Paneer.',
            breakdown: '69% fat, 22% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1/2 pack', calories: 150 }
        ]
    },
    {
        slug: 'aloo-palak',
        name: 'Aloo Palak',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1/2 package (142.5 g)',
            calories: 100,
            totalFat: { value: 3.00, percent: 4 },
            saturatedFat: { value: 0.000, percent: 0 },
            sodium: { value: 400, percent: 17 },
            totalCarbohydrate: { value: 13.00, percent: 5 },
            dietaryFiber: { value: 3.0, percent: 11 },
            sugars: { value: 3.00 },
            protein: { value: 3.00 },
            potassium: { value: 0, percent: 0 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 100,
            fat: '3g',
            carbs: '13g',
            protein: '3g',
            summaryText: 'There are 100 calories in 1/2 package (142.5 g) of Tasty Bite Aloo Palak.',
            breakdown: '30% fat, 57% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1/2 package (142.5 g)', calories: 100 }
        ]
    },
    {
        slug: 'chicken-curry',
        name: 'Chicken Curry',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1/2 chicken breast with sauce',
            calories: 160,
            totalFat: { value: 8.6, percent: 11 },
            saturatedFat: { value: 1.752, percent: 9 },
            polyunsaturatedFat: { value: 2.433 },
            monounsaturatedFat: { value: 3.665 },
            sodium: { value: 624, percent: 27 },
            totalCarbohydrate: { value: 6.11, percent: 2 },
            dietaryFiber: { value: 1.2, percent: 4 },
            sugars: { value: 2.67 },
            protein: { value: 14.8 },
            calcium: { value: 22, percent: 2 },
            iron: { value: 1.21, percent: 7 },
            potassium: { value: 321, percent: 7 },
            vitaminA: { value: 81, percent: 9 },
            vitaminC: { value: 6.6, percent: 7 },
            cholesterol: { value: 45, percent: 15 }
        },
        nutritionSummary: {
            calories: 160,
            fat: '8.6g',
            carbs: '6.11g',
            protein: '14.8g',
            summaryText: 'There are 160 calories in a 1/2 chicken breast with sauce of Chicken Curry.',
            breakdown: '48% fat, 15% carbs, 37% protein.'
        },
        servingSizes: [
            { size: '1/2 chicken breast with sauce', calories: 160 },
            { size: '1 cup', calories: 293 }
        ]
    },
    {
        slug: 'lamb-curry',
        name: 'Lamb Curry',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 257,
            totalFat: { value: 13.83, percent: 18 },
            saturatedFat: { value: 3.944, percent: 20 },
            polyunsaturatedFat: { value: 3.186 },
            monounsaturatedFat: { value: 5.055 },
            sodium: { value: 496, percent: 22 },
            totalCarbohydrate: { value: 3.71, percent: 1 },
            dietaryFiber: { value: 0.9, percent: 3 },
            sugars: { value: 1.27 },
            protein: { value: 28.23 },
            calcium: { value: 38, percent: 3 },
            iron: { value: 2.95, percent: 16 },
            potassium: { value: 493, percent: 10 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 1.4, percent: 2 },
            cholesterol: { value: 90, percent: 30 }
        },
        nutritionSummary: {
            calories: 257,
            fat: '13.83g',
            carbs: '3.71g',
            protein: '28.23g',
            summaryText: 'There are 257 calories in 1 cup of Lamb Curry.',
            breakdown: '49% fat, 6% carbs, 45% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 257 },
            { size: '100 g', calories: 109 }
        ]
    },
    {
        slug: 'lamb-roast',
        name: 'Lamb Roast',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '100 g',
            calories: 266,
            totalFat: { value: 18.15, percent: 23 },
            saturatedFat: { value: 7.633, percent: 38 },
            polyunsaturatedFat: { value: 1.394 },
            monounsaturatedFat: { value: 7.533 },
            sodium: { value: 228, percent: 10 },
            totalCarbohydrate: { value: 0, percent: 0 },
            dietaryFiber: { value: 0, percent: 0 },
            sugars: { value: 0 },
            protein: { value: 23.93 },
            calcium: { value: 16, percent: 1 },
            iron: { value: 1.97, percent: 11 },
            potassium: { value: 281, percent: 6 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 0, percent: 0 },
            cholesterol: { value: 92, percent: 31 }
        },
        nutritionSummary: {
            calories: 266,
            fat: '18.15g',
            carbs: '0g',
            protein: '23.93g',
            summaryText: 'There are 266 calories in 100 grams of Lamb Roast.',
            breakdown: '63% fat, 0% carbs, 37% protein.'
        },
        servingSizes: [
            { size: '100 g', calories: 266 },
            { size: '1 cup diced', calories: 356 }
        ]
    },
    {
        slug: 'mixed-salad-greens',
        name: 'Mixed Salad Greens',
        cuisine: 'Generic',
        mealCategory: 'Other',
        foodGroup: 'Salads',
        nutritionFacts: {
            servingSize: '1 cup of shredded or chopped',
            calories: 9,
            totalFat: { value: 0.13, percent: 0 },
            saturatedFat: { value: 0.021, percent: 0 },
            polyunsaturatedFat: { value: 0.063 },
            monounsaturatedFat: { value: 0.004 },
            sodium: { value: 16, percent: 1 },
            totalCarbohydrate: { value: 1.76, percent: 1 },
            dietaryFiber: { value: 1.1, percent: 4 },
            sugars: { value: 0.48 },
            protein: { value: 0.84 },
            calcium: { value: 26, percent: 2 },
            iron: { value: 0.64, percent: 4 },
            potassium: { value: 160, percent: 3 },
            vitaminA: { value: 139, percent: 15 },
            vitaminC: { value: 8.7, percent: 10 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 9,
            fat: '0.13g',
            carbs: '1.76g',
            protein: '0.84g',
            summaryText: 'There are 9 calories in 1 cup of shredded or chopped Mixed Salad Greens.',
            breakdown: '10% fat, 61% carbs, 29% protein.'
        },
        servingSizes: [
            { size: '1 cup shredded or chopped', calories: 9 }
        ]
    },
    {
        slug: 'lettuce-salad-with-tomato',
        name: 'Lettuce Salad with Tomato',
        cuisine: 'Generic',
        mealCategory: 'Other',
        foodGroup: 'Salads',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 15,
            totalFat: { value: 0.15, percent: 0 },
            saturatedFat: { value: 0.028, percent: 0 },
            polyunsaturatedFat: { value: 0.086 },
            monounsaturatedFat: { value: 0.023 },
            sodium: { value: 14, percent: 1 },
            totalCarbohydrate: { value: 3.17, percent: 1 },
            dietaryFiber: { value: 1.2, percent: 4 },
            sugars: { value: 1.95 },
            protein: { value: 0.76 },
            calcium: { value: 15, percent: 1 },
            iron: { value: 0.29, percent: 2 },
            potassium: { value: 173, percent: 4 },
            vitaminA: { value: 55, percent: 6 },
            vitaminC: { value: 6.6, percent: 7 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 15,
            fat: '0.15g',
            carbs: '3.17g',
            protein: '0.76g',
            summaryText: 'There are 15 calories in 1 cup of Lettuce Salad with Tomato.',
            breakdown: '8% fat, 74% carbs, 18% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 15 }
        ]
    },
    {
        slug: 'tomato-soup',
        name: 'Tomato Soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1/2 cup',
            calories: 90,
            totalFat: { value: 0.00, percent: 0 },
            saturatedFat: { value: 0.000, percent: 0 },
            sodium: { value: 480, percent: 21 },
            totalCarbohydrate: { value: 21.00, percent: 8 },
            dietaryFiber: { value: 1.0, percent: 4 },
            sugars: { value: 12.00 },
            protein: { value: 2.00 },
            cholesterol: { value: 0 }
        },
        nutritionSummary: {
            calories: 90,
            fat: '0g',
            carbs: '21g',
            protein: '2g',
            summaryText: 'There are 90 calories in 1/2 cup of Food Club Tomato Soup.',
            breakdown: '0% fat, 91% carbs, 9% protein.'
        },
        servingSizes: [
            { size: '1/2 cup', calories: 90 }
        ]
    },
    {
        slug: 'chicken-soup',
        name: 'Chicken Soup',
        cuisine: 'Generic',
        mealCategory: 'Soups',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 75,
            totalFat: { value: 2.46, percent: 3 },
            saturatedFat: { value: 0.651, percent: 3 },
            polyunsaturatedFat: { value: 0.554 },
            monounsaturatedFat: { value: 1.109 },
            sodium: { value: 1106, percent: 48 },
            totalCarbohydrate: { value: 9.35, percent: 3 },
            dietaryFiber: { value: 0.7, percent: 3 },
            sugars: { value: 0.27 },
            protein: { value: 4.05 },
            calcium: { value: 17, percent: 1 },
            iron: { value: 0.77, percent: 4 },
            potassium: { value: 55, percent: 1 },
            vitaminA: { value: 36, percent: 4 },
            vitaminC: { value: 0.2, percent: 0 },
            cholesterol: { value: 7, percent: 2 }
        },
        nutritionSummary: {
            calories: 75,
            fat: '2.46g',
            carbs: '9.35g',
            protein: '4.05g',
            summaryText: 'There are 75 calories in 1 cup of Chicken Soup.',
            breakdown: '29% fat, 49% carbs, 21% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 75 },
            { size: '1 can (10.5 oz)', calories: 182 }
        ]
    },
    {
        slug: 'baked-beans',
        name: 'Baked Beans',
        cuisine: 'Generic',
        mealCategory: 'Other',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 382,
            totalFat: { value: 13.03, percent: 17 },
            saturatedFat: { value: 4.928, percent: 25 },
            polyunsaturatedFat: { value: 1.872 },
            monounsaturatedFat: { value: 5.396 },
            sodium: { value: 1068, percent: 46 },
            totalCarbohydrate: { value: 54.12, percent: 20 },
            dietaryFiber: { value: 13.9, percent: 50 },
            protein: { value: 14.02 },
            calcium: { value: 154, percent: 12 },
            iron: { value: 5.03, percent: 28 },
            potassium: { value: 906, percent: 19 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 2.8, percent: 3 },
            cholesterol: { value: 13, percent: 4 }
        },
        nutritionSummary: {
            calories: 382,
            fat: '13.03g',
            carbs: '54.12g',
            protein: '14.02g',
            summaryText: 'There are 382 calories in 1 cup of Baked Beans.',
            breakdown: '30% fat, 56% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 382 },
            { size: '100 g', calories: 151 }
        ]
    }
];


    