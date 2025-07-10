
export type FoodItem = {
    slug: string;
    name: string;
    cuisine: 'Maharashtrian' | 'Gujarati' | 'North Indian' | 'Generic' | 'South Indian';
    mealCategory: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
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
        bakedBeans: string[];
        beans: string[];
    }
};

export const foodDatabase: FoodItem[] = [
    {
        slug: 'baked-beans',
        name: 'Baked Beans',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 382,
            totalFat: { value: 13.03, percent: 17 },
            saturatedFat: { value: 4.928, percent: 25 },
            transFat: { value: 0 },
            polyunsaturatedFat: { value: 1.872 },
            monounsaturatedFat: { value: 5.396 },
            cholesterol: { value: 13, percent: 4 },
            sodium: { value: 1068, percent: 46 },
            totalCarbohydrate: { value: 54.12, percent: 20 },
            dietaryFiber: { value: 13.9, percent: 50 },
            sugars: { value: 20 },
            protein: { value: 14.02 },
            vitaminD: { value: 0, percent: 0 },
            calcium: { value: 154, percent: 12 },
            iron: { value: 5.03, percent: 28 },
            potassium: { value: 906, percent: 19 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 2.8, percent: 3 },
        },
        nutritionSummary: {
            calories: 382,
            fat: '13.03g',
            carbs: '54.12g',
            protein: '14.02g',
            summaryText: 'There are 382 calories in 1 cup of Baked Beans.',
            breakdown: '30% fat, 56% carbs, 14% protein.',
        },
        servingSizes: [
            { size: '1 oz', calories: 43 },
            { size: '100 g', calories: 151 },
            { size: '1 cup', calories: 382 },
        ],
        relatedTypes: {
            bakedBeans: [
                'Vegetarian Baked Beans',
                'Low Sodium Baked Beans',
                'Baked Beans with Franks (Canned)',
                'Baked Beans with Pork (Canned)',
                'Boston Baked Beans',
            ],
            beans: [
                'Refried Beans (Canned)',
                'Black Beans (Canned)',
            ],
        }
    },
    {
        slug: 'poha',
        name: 'Poha',
        cuisine: 'Maharashtrian',
        mealCategory: 'Breakfast',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 250,
            totalFat: { value: 8 },
            saturatedFat: { value: 1.5 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 400, percent: 17 },
            totalCarbohydrate: { value: 40, percent: 15 },
            dietaryFiber: { value: 2, percent: 7 },
            sugars: { value: 2 },
            protein: { value: 5 },
            potassium: { value: 150, percent: 3 },
        },
        nutritionSummary: {
            calories: 250,
            fat: '8g',
            carbs: '40g',
            protein: '5g',
            summaryText: 'A light and popular Maharashtrian breakfast.',
            breakdown: '29% fat, 64% carbs, 7% protein.',
        },
        servingSizes: [{ size: '1 cup', calories: 250 }],
    },
    {
        slug: 'upma',
        name: 'Upma',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 230,
            totalFat: { value: 7 },
            saturatedFat: { value: 1.2 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 380, percent: 16 },
            totalCarbohydrate: { value: 36, percent: 13 },
            dietaryFiber: { value: 3, percent: 11 },
            sugars: { value: 1 },
            protein: { value: 6 },
            potassium: { value: 180, percent: 4 },
        },
        nutritionSummary: {
            calories: 230,
            fat: '7g',
            carbs: '36g',
            protein: '6g',
            summaryText: 'A savory semolina dish.',
            breakdown: '27% fat, 63% carbs, 10% protein.',
        },
        servingSizes: [{ size: '1 cup', calories: 230 }],
    },
    {
        slug: 'thepla',
        name: 'Thepla',
        cuisine: 'Gujarati',
        mealCategory: 'Breakfast',
        nutritionFacts: {
            servingSize: '2 pieces',
            calories: 180,
            totalFat: { value: 8 },
            saturatedFat: { value: 2 },
            cholesterol: { value: 5, percent: 2 },
            sodium: { value: 300, percent: 13 },
            totalCarbohydrate: { value: 24, percent: 9 },
            dietaryFiber: { value: 4, percent: 14 },
            sugars: { value: 1 },
            protein: { value: 5 },
            potassium: { value: 200, percent: 4 },
        },
        nutritionSummary: {
            calories: 180,
            fat: '8g',
            carbs: '24g',
            protein: '5g',
            summaryText: 'A spiced flatbread from Gujarat.',
            breakdown: '40% fat, 53% carbs, 7% protein.',
        },
        servingSizes: [{ size: '2 pieces', calories: 180 }],
    },
     {
        slug: 'dal-makhani-roti',
        name: 'Dal Makhani with Roti',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        nutritionFacts: {
            servingSize: '1 bowl dal, 2 rotis',
            calories: 450,
            totalFat: { value: 15 },
            saturatedFat: { value: 7 },
            cholesterol: { value: 30, percent: 10 },
            sodium: { value: 600, percent: 26 },
            totalCarbohydrate: { value: 60, percent: 22 },
            dietaryFiber: { value: 12, percent: 43 },
            sugars: { value: 5 },
            protein: { value: 18 },
            potassium: { value: 500, percent: 11 },
        },
        nutritionSummary: {
            calories: 450,
            fat: '15g',
            carbs: '60g',
            protein: '18g',
            summaryText: 'A classic creamy lentil dish.',
            breakdown: '30% fat, 53% carbs, 17% protein.',
        },
        servingSizes: [{ size: '1 serving', calories: 450 }],
    },
    {
        slug: 'chana-masala-rice',
        name: 'Chana Masala with Rice',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        nutritionFacts: {
            servingSize: '1 bowl curry, 1 cup rice',
            calories: 480,
            totalFat: { value: 12 },
            saturatedFat: { value: 2 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 700, percent: 30 },
            totalCarbohydrate: { value: 75, percent: 27 },
            dietaryFiber: { value: 15, percent: 54 },
            sugars: { value: 8 },
            protein: { value: 15 },
            potassium: { value: 600, percent: 13 },
        },
        nutritionSummary: {
            calories: 480,
            fat: '12g',
            carbs: '75g',
            protein: '15g',
            summaryText: 'A flavorful chickpea curry.',
            breakdown: '23% fat, 62% carbs, 15% protein.',
        },
        servingSizes: [{ size: '1 serving', calories: 480 }],
    },
    {
        slug: 'vegetable-upma',
        name: 'Vegetable Upma',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 220,
            totalFat: { value: 8 },
            saturatedFat: { value: 1.5 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 350, percent: 15 },
            totalCarbohydrate: { value: 32, percent: 12 },
            dietaryFiber: { value: 4, percent: 14 },
            sugars: { value: 3 },
            protein: { value: 6 },
            potassium: { value: 120, percent: 3 },
        },
        nutritionSummary: {
            calories: 220,
            fat: '8g',
            carbs: '32g',
            protein: '6g',
            summaryText: 'Savory semolina porridge with mixed vegetables.',
            breakdown: '33% fat, 58% carbs, 9% protein.',
        },
        servingSizes: [{ size: '1 cup', calories: 220 }],
    },
    {
        slug: 'lauki-kofta-curry-rice',
        name: 'Lauki Kofta Curry with Rice',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        nutritionFacts: {
            servingSize: '1 serving',
            calories: 320,
            totalFat: { value: 12 },
            saturatedFat: { value: 3 },
            cholesterol: { value: 10, percent: 3 },
            sodium: { value: 450, percent: 20 },
            totalCarbohydrate: { value: 45, percent: 16 },
            dietaryFiber: { value: 6, percent: 21 },
            sugars: { value: 7 },
            protein: { value: 8 },
            potassium: { value: 140, percent: 3 },
        },
        nutritionSummary: {
            calories: 320,
            fat: '12g',
            carbs: '45g',
            protein: '8g',
            summaryText: 'Bottle gourd dumplings in a tomato-based gravy, served with rice.',
            breakdown: '34% fat, 56% carbs, 10% protein.',
        },
        servingSizes: [{ size: '1 serving', calories: 320 }],
    },
    {
        slug: 'vegetable-khichdi',
        name: 'Vegetable Khichdi',
        cuisine: 'Generic',
        mealCategory: 'Dinner',
        nutritionFacts: {
            servingSize: '1.5 cups',
            calories: 290,
            totalFat: { value: 7 },
            saturatedFat: { value: 2 },
            cholesterol: { value: 5, percent: 2 },
            sodium: { value: 400, percent: 17 },
            totalCarbohydrate: { value: 48, percent: 17 },
            dietaryFiber: { value: 8, percent: 29 },
            sugars: { value: 5 },
            protein: { value: 12 },
            potassium: { value: 130, percent: 3 },
        },
        nutritionSummary: {
            calories: 290,
            fat: '7g',
            carbs: '48g',
            protein: '12g',
            summaryText: 'A wholesome one-pot meal of rice, lentils, and mixed vegetables.',
            breakdown: '22% fat, 66% carbs, 12% protein.',
        },
        servingSizes: [{ size: '1.5 cups', calories: 290 }],
    },
    {
        slug: 'roasted-makhana',
        name: 'Roasted Makhana',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 120,
            totalFat: { value: 4 },
            saturatedFat: { value: 1 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 200, percent: 9 },
            totalCarbohydrate: { value: 18, percent: 7 },
            dietaryFiber: { value: 3, percent: 11 },
            sugars: { value: 0 },
            protein: { value: 4 },
            potassium: { value: 70, percent: 1 },
        },
        nutritionSummary: {
            calories: 120,
            fat: '4g',
            carbs: '18g',
            protein: '4g',
            summaryText: 'Lightly roasted and seasoned fox nuts, a healthy snack.',
            breakdown: '30% fat, 60% carbs, 10% protein.',
        },
        servingSizes: [{ size: '1 cup', calories: 120 }],
    },
    {
        slug: 'idli-sambar',
        name: 'Idli with Sambar',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        nutritionFacts: {
            servingSize: '2 idlis, 1 cup sambar',
            calories: 280,
            totalFat: { value: 6 },
            saturatedFat: { value: 1 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 550, percent: 24 },
            totalCarbohydrate: { value: 45, percent: 16 },
            protein: { value: 10 },
            potassium: { value: 300, percent: 6 },
        },
        nutritionSummary: {
            calories: 280,
            fat: '6g',
            carbs: '45g',
            protein: '10g',
            summaryText: 'Steamed rice cakes with a lentil-based vegetable stew.',
            breakdown: '19% fat, 64% carbs, 17% protein.',
        },
        servingSizes: [{ size: '1 serving', calories: 280 }],
    },
    {
        slug: 'palak-paneer-roti',
        name: 'Palak Paneer with Roti',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        nutritionFacts: {
            servingSize: '1 bowl curry, 2 rotis',
            calories: 420,
            totalFat: { value: 20 },
            saturatedFat: { value: 10 },
            cholesterol: { value: 40, percent: 13 },
            sodium: { value: 500, percent: 22 },
            totalCarbohydrate: { value: 40, percent: 15 },
            protein: { value: 20 },
            potassium: { value: 450, percent: 10 },
        },
        nutritionSummary: {
            calories: 420,
            fat: '20g',
            carbs: '40g',
            protein: '20g',
            summaryText: 'Spinach and cottage cheese curry with flatbread.',
            breakdown: '43% fat, 38% carbs, 19% protein.',
        },
        servingSizes: [{ size: '1 serving', calories: 420 }],
    },
    {
        slug: 'lemon-rice',
        name: 'Lemon Rice',
        cuisine: 'South Indian',
        mealCategory: 'Lunch',
        nutritionFacts: {
            servingSize: '1.5 cups',
            calories: 350,
            totalFat: { value: 10 },
            saturatedFat: { value: 1.5 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 400, percent: 17 },
            totalCarbohydrate: { value: 60, percent: 22 },
            protein: { value: 6 },
            potassium: { value: 100, percent: 2 },
        },
        nutritionSummary: {
            calories: 350,
            fat: '10g',
            carbs: '60g',
            protein: '6g',
            summaryText: 'A tangy and flavorful rice dish tempered with spices.',
            breakdown: '26% fat, 68% carbs, 6% protein.',
        },
        servingSizes: [{ size: '1.5 cups', calories: 350 }],
    },
    {
        slug: 'dhokla',
        name: 'Dhokla',
        cuisine: 'Gujarati',
        mealCategory: 'Snack',
        nutritionFacts: {
            servingSize: '3 pieces',
            calories: 150,
            totalFat: { value: 5 },
            saturatedFat: { value: 1 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 350, percent: 15 },
            totalCarbohydrate: { value: 20, percent: 7 },
            protein: { value: 6 },
            potassium: { value: 120, percent: 3 },
        },
        nutritionSummary: {
            calories: 150,
            fat: '5g',
            carbs: '20g',
            protein: '6g',
            summaryText: 'A steamed and savory cake made from fermented batter.',
            breakdown: '30% fat, 53% carbs, 17% protein.',
        },
        servingSizes: [{ size: '3 pieces', calories: 150 }],
    }
];
