
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
    mealCategory: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack';
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
        slug: 'milk',
        name: 'Milk',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Cheese, Milk & Dairy',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 122,
            totalFat: { value: 4.88, percent: 6 },
            saturatedFat: { value: 2.965, percent: 15 },
            polyunsaturatedFat: { value: 0.249 },
            monounsaturatedFat: { value: 1.301 },
            cholesterol: { value: 17, percent: 6 },
            sodium: { value: 100, percent: 4 },
            totalCarbohydrate: { value: 11.49, percent: 4 },
            dietaryFiber: { value: 0, percent: 0 },
            sugars: { value: 12.59 },
            protein: { value: 8.03 },
            calcium: { value: 285, percent: 22 },
            iron: { value: 0.07, percent: 0 },
            potassium: { value: 361, percent: 8 },
            vitaminA: { value: 112, percent: 12 },
            vitaminC: { value: 0.2, percent: 0 },
        },
        nutritionSummary: {
            calories: 122,
            fat: '4.88g',
            carbs: '11.49g',
            protein: '8.03g',
            summaryText: 'There are 122 calories in 1 cup of Milk.',
            breakdown: '36% fat, 38% carbs, 26% protein.',
        },
        servingSizes: [
            { size: '1 fl oz', calories: 15 },
            { size: '100 g', calories: 50 },
            { size: '100 ml', calories: 52 },
            { size: '1 cup', calories: 122 },
        ],
    },
    {
        slug: 'milk-nonfat',
        name: 'Milk (Nonfat)',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Cheese, Milk & Dairy',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 86,
            totalFat: { value: 0.44, percent: 1 },
            saturatedFat: { value: 0.287, percent: 1 },
            polyunsaturatedFat: { value: 0.017 },
            monounsaturatedFat: { value: 0.115 },
            cholesterol: { value: 5, percent: 2 },
            sodium: { value: 127, percent: 6 },
            totalCarbohydrate: { value: 11.88, percent: 4 },
            dietaryFiber: { value: 0, percent: 0 },
            sugars: { value: 12.47 },
            protein: { value: 8.35 },
            calcium: { value: 301, percent: 23 },
            iron: { value: 0.1, percent: 1 },
            potassium: { value: 407, percent: 9 },
            vitaminA: { value: 5, percent: 1 },
            vitaminC: { value: 2.4, percent: 3 },
        },
        nutritionSummary: {
            calories: 86,
            fat: '0.44g',
            carbs: '11.88g',
            protein: '8.35g',
            summaryText: 'There are 86 calories in 1 cup of Milk (Nonfat).',
            breakdown: '5% fat, 56% carbs, 39% protein.',
        },
        servingSizes: [
            { size: '1 oz', calories: 10 },
            { size: '100 g', calories: 35 },
            { size: '1 cup', calories: 86 },
        ],
    },
    {
        slug: 'chocolate-milk-lowfat',
        name: 'Chocolate Milk (Lowfat)',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 158,
            totalFat: { value: 2.5, percent: 3 },
            saturatedFat: { value: 1.54, percent: 8 },
            polyunsaturatedFat: { value: 0.088 },
            monounsaturatedFat: { value: 0.75 },
            cholesterol: { value: 8, percent: 3 },
            sodium: { value: 152, percent: 7 },
            totalCarbohydrate: { value: 26.1, percent: 9 },
            dietaryFiber: { value: 1.2, percent: 4 },
            sugars: { value: 24.85 },
            protein: { value: 8.1 },
            vitaminD: { value: 2, percent: 13 },
            calcium: { value: 288, percent: 22 },
            iron: { value: 0.6, percent: 3 },
            potassium: { value: 425, percent: 9 },
            vitaminA: { value: 145, percent: 16 },
            vitaminC: { value: 2.2, percent: 3 },
        },
        nutritionSummary: {
            calories: 158,
            fat: '2.5g',
            carbs: '26.1g',
            protein: '8.1g',
            summaryText: 'There are 158 calories in 1 cup of Chocolate Milk (Lowfat).',
            breakdown: '14% fat, 66% carbs, 20% protein.',
        },
        servingSizes: [
            { size: '1 oz', calories: 18 },
            { size: '100 g', calories: 63 },
            { size: '1 cup', calories: 158 },
        ],
        relatedTypes: {
            chocolateMilk: [
                'Skim Chocolate Milk',
                'Chocolate Milk (Reduced Fat with Added Calcium)',
                '2% Reduced Fat Chocolate Milk',
                'Chocolate Milk (Whole)',
                'Chocolate Milk (Reduced Fat)',
            ],
            milk: [
                '2% Fat Milk',
                'Milk',
                '1% Fat Milk',
                'Whole Milk',
                'Milk (Nonfat)',
                'Low Fat Milk',
            ],
        }
    },
    {
        slug: 'peanuts',
        name: 'Peanuts',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Nuts & Seeds',
        nutritionFacts: {
            servingSize: '28g (about 1 oz)',
            calories: 161,
            totalFat: { value: 13.9, percent: 18 },
            saturatedFat: { value: 1.9, percent: 10 },
            polyunsaturatedFat: { value: 4.4 },
            monounsaturatedFat: { value: 6.9 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 5, percent: 0 },
            totalCarbohydrate: { value: 4.6, percent: 2 },
            dietaryFiber: { value: 2.4, percent: 9 },
            sugars: { value: 1.1 },
            protein: { value: 7.3 },
            calcium: { value: 26, percent: 2 },
            iron: { value: 1.3, percent: 7 },
            potassium: { value: 199, percent: 4 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 0, percent: 0 },
        },
        nutritionSummary: {
            calories: 161,
            fat: '13.9g',
            carbs: '4.6g',
            protein: '7.3g',
            summaryText: 'There are 161 calories in 28g (about 1 oz) of Peanuts.',
            breakdown: '73% fat, 11% carbs, 17% protein.',
        },
        servingSizes: [
            { size: '1 oz', calories: 161 },
            { size: '100 g', calories: 567 },
            { size: '1 cup', calories: 828 },
        ],
        relatedTypes: {
            peanuts: [
                'Dry Roasted Salted Peanuts',
                'Dry Roasted Unsalted Peanuts',
                'Boiled Peanuts',
                'Honey Roasted Peanuts',
            ],
            nuts: [
                'Mixed Nuts',
                'Pecan Nuts',
                'Almonds',
                'Walnuts',
                'Oil Roasted Cashew Nuts',
            ]
        }
    },
    {
        slug: 'almonds',
        name: 'Almonds',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Nuts & Seeds',
        nutritionFacts: {
            servingSize: '28g (about 1 oz)',
            calories: 164,
            totalFat: { value: 14.2, percent: 18 },
            saturatedFat: { value: 1.1, percent: 6 },
            transFat: { value: 0 },
            polyunsaturatedFat: { value: 3.5 },
            monounsaturatedFat: { value: 9 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 0, percent: 0 },
            totalCarbohydrate: { value: 6.1, percent: 2 },
            dietaryFiber: { value: 3.5, percent: 13 },
            sugars: { value: 1.2 },
            protein: { value: 6 },
            vitaminD: { value: 0, percent: 0 },
            calcium: { value: 76, percent: 6 },
            iron: { value: 1, percent: 6 },
            potassium: { value: 208, percent: 4 },
        },
        nutritionSummary: {
            calories: 164,
            fat: '14.2g',
            carbs: '6.1g',
            protein: '6g',
            summaryText: 'There are 164 calories in 28g (about 1 oz) of Almonds.',
            breakdown: '74% fat, 13% carbs, 14% protein.',
        },
        servingSizes: [
            { size: '1 almond (0.04 oz)', calories: 7 },
            { size: '1 oz (23 whole kernels)', calories: 164 },
            { size: '100 g', calories: 578 },
            { size: '1 cup whole', calories: 827 },
        ],
        relatedTypes: {
            almonds: [
                'Honey Roasted Almonds',
                'Blanched Almonds',
                'Dry Roasted Almonds (with Salt Added)',
                'Yogurt Covered Almonds',
                'Dry Roasted Almonds (Without Salt Added)',
            ]
        }
    },
    {
        slug: 'walnuts',
        name: 'Walnuts',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Nuts & Seeds',
        nutritionFacts: {
            servingSize: '28g (about 1 oz)',
            calories: 185,
            totalFat: { value: 18.5, percent: 24 },
            saturatedFat: { value: 1.7, percent: 9 },
            transFat: { value: 0 },
            polyunsaturatedFat: { value: 13.4 },
            monounsaturatedFat: { value: 2.5 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 1, percent: 0 },
            totalCarbohydrate: { value: 3.9, percent: 1 },
            dietaryFiber: { value: 1.9, percent: 7 },
            sugars: { value: 0.7 },
            protein: { value: 4.3 },
            vitaminD: { value: 0, percent: 0 },
            calcium: { value: 28, percent: 2 },
            iron: { value: 0.82, percent: 5 },
            potassium: { value: 125, percent: 3 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 0.4, percent: 0 },
        },
        nutritionSummary: {
            calories: 185,
            fat: '18.5g',
            carbs: '3.9g',
            protein: '4.3g',
            summaryText: 'There are 185 calories in 28g (about 1 oz) of Walnuts.',
            breakdown: '84% fat, 8% carbs, 9% protein.',
        },
        servingSizes: [
            { size: '1 nut (half)', calories: 26 },
            { size: '1 oz (14 halves)', calories: 185 },
            { size: '100g', calories: 654 },
            { size: '1 cup, shelled (50 halves)', calories: 654 },
        ],
        relatedTypes: {
            walnuts: [
                'Black Walnuts',
                'English Walnuts',
                'Candied Walnuts',
            ]
        }
    },
    {
        slug: 'black-beans',
        name: 'Black Beans',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '100 g',
            calories: 132,
            totalFat: { value: 0.54, percent: 1 },
            saturatedFat: { value: 0.139, percent: 1 },
            polyunsaturatedFat: { value: 0.231 },
            monounsaturatedFat: { value: 0.047 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 237, percent: 10 },
            totalCarbohydrate: { value: 23.71, percent: 9 },
            dietaryFiber: { value: 8.7, percent: 31 },
            protein: { value: 8.86 },
            calcium: { value: 27, percent: 2 },
            iron: { value: 2.1, percent: 12 },
            potassium: { value: 355, percent: 8 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 0, percent: 0 },
        },
        nutritionSummary: {
            calories: 132,
            fat: '0.54g',
            carbs: '23.71g',
            protein: '8.86g',
            summaryText: 'There are 132 calories in 100 grams of Black Beans (Mature Seeds, with Salt, Cooked, Boiled).',
            breakdown: '4% fat, 70% carbs, 26% protein.',
        },
        servingSizes: [
            { size: '1 oz', calories: 37 },
            { size: '100 g', calories: 132 },
            { size: '1 cup', calories: 227 },
        ],
        relatedTypes: {
            blackBeans: [
                'Black Beans (Canned)',
                'Black Beans (Mature Seeds, Without Salt, Cooked, Boiled)',
                'Cuban Style Black Beans (Habichuelas Negras Guisadas A La Cubana)',
            ],
            beans: [
                'Green Snap Beans',
                'Green String Beans',
                'Red Kidney Beans (Canned)',
            ],
        }
    },
    {
        slug: 'baked-beans',
        name: 'Baked Beans',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
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
        slug: 'red-kidney-beans',
        name: 'Red Kidney Beans',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 225,
            totalFat: { value: 0.88, percent: 1 },
            saturatedFat: { value: 0.127, percent: 1 },
            polyunsaturatedFat: { value: 0.487 },
            monounsaturatedFat: { value: 0.069 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 4, percent: 0 },
            totalCarbohydrate: { value: 40.36, percent: 15 },
            dietaryFiber: { value: 13.1, percent: 47 },
            sugars: { value: 0.57 },
            protein: { value: 15.35 },
            calcium: { value: 50, percent: 4 },
            iron: { value: 5.2, percent: 29 },
            potassium: { value: 713, percent: 15 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 2.1, percent: 2 },
        },
        nutritionSummary: {
            calories: 225,
            fat: '0.88g',
            carbs: '40.36g',
            protein: '15.35g',
            summaryText: 'There are 225 calories in 1 cup of Red Kidney Beans (Without Salt, Cooked, Boiled).',
            breakdown: '3% fat, 70% carbs, 27% protein.',
        },
        servingSizes: [
            { size: '1 tbsp', calories: 14 },
            { size: '1 oz', calories: 36 },
            { size: '100 g', calories: 127 },
            { size: '1 cup', calories: 225 },
        ],
        relatedTypes: {
            kidneyBeans: [
                'Kidney Beans (Canned)',
                'Red Kidney Beans (with Salt, Cooked, Boiled)',
                'Cooked Dry Red Kidney Beans',
            ],
            beans: [
                'Black Beans (Canned)',
                'Green String Beans',
                'Green Snap Beans',
            ],
        }
    },
    {
        slug: 'coffee',
        name: 'Coffee',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '8 fl oz',
            calories: 2,
            totalFat: { value: 0.05, percent: 0 },
            saturatedFat: { value: 0.005, percent: 0 },
            polyunsaturatedFat: { value: 0.002 },
            monounsaturatedFat: { value: 0.028 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 5, percent: 0 },
            totalCarbohydrate: { value: 0.09, percent: 0 },
            dietaryFiber: { value: 0, percent: 0 },
            sugars: { value: 0 },
            protein: { value: 0.28 },
            calcium: { value: 5, percent: 0 },
            iron: { value: 0.05, percent: 0 },
            potassium: { value: 111, percent: 2 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 0, percent: 0 },
        },
        nutritionSummary: {
            calories: 2,
            fat: '0.05g',
            carbs: '0.09g',
            protein: '0.28g',
            summaryText: 'There are 2 calories in 8 fluid ounces of Coffee.',
            breakdown: '22% fat, 20% carbs, 59% protein.',
        },
        servingSizes: [
            { size: '1 coffee cup (6 fl oz)', calories: 2 },
            { size: '1 mug (8 fl oz)', calories: 2 },
            { size: '100 g', calories: 1 },
        ],
        relatedTypes: {
            coffee: [
                'Instant Coffee (made from Powdered)',
                'Cappuccino',
                'Latte Coffee',
                'Espresso Coffee',
                'Coffee (Brewed From Grounds)',
            ]
        }
    },
    {
        slug: 'espresso-coffee',
        name: 'Espresso Coffee',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 espresso cup (2 fl oz)',
            calories: 1,
            totalFat: { value: 0.11, percent: 0 },
            saturatedFat: { value: 0.054, percent: 0 },
            polyunsaturatedFat: { value: 0.054 },
            monounsaturatedFat: { value: 0 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 8, percent: 0 },
            totalCarbohydrate: { value: 0, percent: 0 },
            dietaryFiber: { value: 0, percent: 0 },
            sugars: { value: 0 },
            protein: { value: 0.07 },
            calcium: { value: 1, percent: 0 },
            iron: { value: 0.08, percent: 0 },
            potassium: { value: 68, percent: 1 },
            vitaminA: { value: 0, percent: 0 },
            vitaminC: { value: 0.1, percent: 0 },
        },
        nutritionSummary: {
            calories: 1,
            fat: '0.11g',
            carbs: '0g',
            protein: '0.07g',
            summaryText: 'There is 1 calorie in 1 espresso cup of Espresso Coffee.',
            breakdown: '77% fat, 0% carbs, 23% protein.',
        },
        servingSizes: [
            { size: '1 fl oz', calories: 1 },
            { size: '1 espresso cup (2 fl oz)', calories: 1 },
            { size: '100 g', calories: 2 },
            { size: '1 coffee cup (6 fl oz)', calories: 4 },
            { size: '1 mug (8 fl oz)', calories: 5 },
        ],
        relatedTypes: {
            coffee: [
                'Coffee (Brewed From Grounds)',
                'Coffee',
                'Cappuccino',
                'Instant Coffee (made from Powdered)',
                'Latte Coffee',
            ]
        }
    },
    {
        slug: 'cappuccino',
        name: 'Cappuccino',
        cuisine: 'Generic',
        mealCategory: 'Snack',
        foodGroup: 'Beverages',
        nutritionFacts: {
            servingSize: '1 mug (8 fl oz)',
            calories: 74,
            totalFat: { value: 3.98, percent: 5 },
            saturatedFat: { value: 2.273, percent: 11 },
            polyunsaturatedFat: { value: 0.241 },
            monounsaturatedFat: { value: 1.007 },
            cholesterol: { value: 12, percent: 4 },
            sodium: { value: 50, percent: 2 },
            totalCarbohydrate: { value: 5.81, percent: 2 },
            dietaryFiber: { value: 0.2, percent: 1 },
            sugars: { value: 6.41 },
            protein: { value: 4.08 },
            calcium: { value: 144, percent: 11 },
            iron: { value: 0.19, percent: 1 },
            potassium: { value: 233, percent: 5 },
            vitaminA: { value: 34, percent: 4 },
            vitaminC: { value: 0, percent: 0 },
        },
        nutritionSummary: {
            calories: 74,
            fat: '3.98g',
            carbs: '5.81g',
            protein: '4.08g',
            summaryText: 'There are 74 calories in 1 mug of Cappuccino.',
            breakdown: '48% fat, 31% carbs, 22% protein.',
        },
        servingSizes: [
            { size: '1 fl oz', calories: 9 },
            { size: '100 g', calories: 31 },
            { size: '1 coffee cup (6 fl oz)', calories: 56 },
            { size: '1 mug (8 fl oz)', calories: 74 },
        ],
        relatedTypes: {
            coffee: [
                'Coffee',
                'Latte Coffee',
                'Espresso Coffee',
            ]
        }
    },
    {
        slug: 'whole-wheat-biscuit',
        name: 'Whole Wheat Biscuit',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 small (1-1/2" dia)',
            calories: 44,
            totalFat: { value: 1.62, percent: 2 },
            saturatedFat: { value: 0.373, percent: 2 },
            polyunsaturatedFat: { value: 0.485 },
            monounsaturatedFat: { value: 0.65 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 126, percent: 5 },
            totalCarbohydrate: { value: 6.47, percent: 2 },
            dietaryFiber: { value: 1, percent: 4 },
            sugars: { value: 0.36 },
            protein: { value: 1.35 },
            calcium: { value: 34, percent: 3 },
            iron: { value: 0.37, percent: 2 },
            potassium: { value: 43, percent: 1 },
            vitaminA: { value: 3, percent: 0 },
            vitaminC: { value: 0, percent: 0 },
        },
        nutritionSummary: {
            calories: 44,
            fat: '1.62g',
            carbs: '6.47g',
            protein: '1.35g',
            summaryText: 'There are 44 calories in 1 small Whole Wheat Biscuit.',
            breakdown: '32% fat, 56% carbs, 12% protein.',
        },
        servingSizes: [
            { size: '1 small (1-1/2" dia)', calories: 44 },
            { size: '1 medium (2" dia)', calories: 93 },
            { size: '1 large (2-1/2" dia)', calories: 115 },
            { size: '100 g', calories: 311 },
        ],
        relatedTypes: {
            biscuits: [
                'Water Biscuits',
                'Cheese Biscuit',
                'Plain or Buttermilk Biscuits',
            ]
        }
    },
    {
        slug: 'poha',
        name: 'Poha',
        cuisine: 'Maharashtrian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 250,
            totalFat: { value: 8, percent: 10 },
            saturatedFat: { value: 1.5, percent: 8 },
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
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 230,
            totalFat: { value: 7, percent: 9 },
            saturatedFat: { value: 1.2, percent: 6 },
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
            summaryText: 'A savory South Indian breakfast porridge made from semolina.',
            breakdown: '27% fat, 62% carbs, 10% protein.',
        },
        servingSizes: [
            { size: '1 cup', calories: 230 },
            { size: '1 bowl (150g)', calories: 345 }
        ],
    },
    {
        slug: 'scrambled-eggs',
        name: 'Scrambled Eggs',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Eggs',
        nutritionFacts: {
            servingSize: '1 large egg',
            calories: 100,
            totalFat: { value: 7.5, percent: 10 },
            saturatedFat: { value: 2.5, percent: 13 },
            cholesterol: { value: 185, percent: 62 },
            sodium: { value: 180, percent: 8 },
            totalCarbohydrate: { value: 1, percent: 0 },
            protein: { value: 6.5 },
            potassium: { value: 80, percent: 2 },
        },
        nutritionSummary: {
            calories: 100,
            fat: '7.5g',
            carbs: '1g',
            protein: '6.5g',
            summaryText: 'Classic breakfast dish made from whisked eggs.',
            breakdown: '68% fat, 4% carbs, 28% protein.',
        },
        servingSizes: [
            { size: '1 large egg', calories: 100 },
            { size: '2 large eggs', calories: 200 }
        ],
    }
];
