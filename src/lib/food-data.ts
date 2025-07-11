
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
        slug: 'palak-paneer',
        name: 'Palak Paneer',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1/2 pack (150 g)',
            calories: 180,
            totalFat: { value: 13, percent: 17 },
            saturatedFat: { value: 6, percent: 30 },
            transFat: { value: 0 },
            cholesterol: { value: 20, percent: 7 },
            sodium: { value: 550, percent: 24 },
            totalCarbohydrate: { value: 9, percent: 3 },
            dietaryFiber: { value: 1, percent: 4 },
            sugars: { value: 2 },
            protein: { value: 6 },
            potassium: { value: 0, percent: 0 },
        },
        nutritionSummary: {
            calories: 180,
            fat: '13g',
            carbs: '9g',
            protein: '6g',
            summaryText: 'A classic Indian dish with spinach and paneer cheese.',
            breakdown: '66% fat, 20% carbs, 14% protein.',
        },
        servingSizes: [
            { size: '1/2 pack (150 g)', calories: 180 },
            { size: '1 cup', calories: 240 },
        ],
    },
    {
        slug: 'dal-tadka',
        name: 'Dal Tadka',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 280,
            totalFat: { value: 12, percent: 15 },
            saturatedFat: { value: 5, percent: 25 },
            cholesterol: { value: 15, percent: 5 },
            sodium: { value: 450, percent: 20 },
            totalCarbohydrate: { value: 30, percent: 11 },
            dietaryFiber: { value: 8, percent: 29 },
            sugars: { value: 2 },
            protein: { value: 15 },
            potassium: { value: 400, percent: 9 },
        },
        nutritionSummary: {
            calories: 280,
            fat: '12g',
            carbs: '30g',
            protein: '15g',
            summaryText: 'A flavorful lentil dish made with yellow lentils and tempered with spices.',
            breakdown: '39% fat, 43% carbs, 19% protein.',
        },
        servingSizes: [
            { size: '1 cup', calories: 280 },
            { size: '1 bowl (200g)', calories: 350 },
        ],
    },
    {
        slug: 'paneer-butter-masala',
        name: 'Paneer Butter Masala',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Cheese, Milk & Dairy',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 350,
            totalFat: { value: 25, percent: 32 },
            saturatedFat: { value: 14, percent: 70 },
            cholesterol: { value: 50, percent: 17 },
            sodium: { value: 600, percent: 26 },
            totalCarbohydrate: { value: 15, percent: 5 },
            dietaryFiber: { value: 3, percent: 11 },
            sugars: { value: 8 },
            protein: { value: 18 },
            potassium: { value: 300, percent: 6 },
        },
        nutritionSummary: {
            calories: 350,
            fat: '25g',
            carbs: '15g',
            protein: '18g',
            summaryText: 'A rich and creamy curry made with paneer in a tomato-based sauce.',
            breakdown: '64% fat, 17% carbs, 20% protein.',
        },
        servingSizes: [{ size: '1 cup', calories: 350 }],
    },
    {
        slug: 'vegetable-pulao',
        name: 'Vegetable Pulao',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Pasta, Rice & Noodles',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 320,
            totalFat: { value: 10, percent: 13 },
            saturatedFat: { value: 3, percent: 15 },
            cholesterol: { value: 5, percent: 2 },
            sodium: { value: 500, percent: 22 },
            totalCarbohydrate: { value: 50, percent: 18 },
            dietaryFiber: { value: 5, percent: 18 },
            sugars: { value: 3 },
            protein: { value: 7 },
            potassium: { value: 250, percent: 5 },
        },
        nutritionSummary: {
            calories: 320,
            fat: '10g',
            carbs: '50g',
            protein: '7g',
            summaryText: 'A fragrant rice dish cooked with mixed vegetables and aromatic spices.',
            breakdown: '28% fat, 63% carbs, 9% protein.',
        },
        servingSizes: [{ size: '1 cup', calories: 320 }],
    },
    {
        slug: 'dhokla',
        name: 'Dhokla',
        cuisine: 'Gujarati',
        mealCategory: 'Snack',
        foodGroup: 'Snacks',
        nutritionFacts: {
            servingSize: '100g',
            calories: 160,
            totalFat: { value: 5, percent: 6 },
            saturatedFat: { value: 1, percent: 5 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 350, percent: 15 },
            totalCarbohydrate: { value: 22, percent: 8 },
            dietaryFiber: { value: 2, percent: 7 },
            sugars: { value: 8 },
            protein: { value: 7 },
            potassium: { value: 150, percent: 3 },
        },
        nutritionSummary: {
            calories: 160,
            fat: '5g',
            carbs: '22g',
            protein: '7g',
            summaryText: 'A savory and spongy steamed cake from Gujarat made from a fermented batter.',
            breakdown: '28% fat, 55% carbs, 17% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 40 },
            { size: '100g', calories: 160 },
        ],
    },
    {
        slug: 'masala-dosa',
        name: 'Masala Dosa',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 medium dosa',
            calories: 380,
            totalFat: { value: 12, percent: 15 },
            saturatedFat: { value: 3, percent: 15 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 700, percent: 30 },
            totalCarbohydrate: { value: 60, percent: 22 },
            dietaryFiber: { value: 6, percent: 21 },
            sugars: { value: 2 },
            protein: { value: 8 },
            potassium: { value: 350, percent: 7 },
        },
        nutritionSummary: {
            calories: 380,
            fat: '12g',
            carbs: '60g',
            protein: '8g',
            summaryText: 'A popular South Indian crepe made from fermented rice and lentil batter, filled with a spiced potato mixture.',
            breakdown: '28% fat, 63% carbs, 8% protein.',
        },
        servingSizes: [
            { size: '1 medium dosa', calories: 380 },
        ],
    },
    {
        slug: 'idli',
        name: 'Idli',
        cuisine: 'South Indian',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 40,
            totalFat: { value: 0.2, percent: 0 },
            saturatedFat: { value: 0.1, percent: 0 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 100, percent: 4 },
            totalCarbohydrate: { value: 8, percent: 3 },
            protein: { value: 1.5 },
            potassium: { value: 60, percent: 1 },
        },
        nutritionSummary: {
            calories: 40,
            fat: '0.2g',
            carbs: '8g',
            protein: '1.5g',
            summaryText: 'A soft, steamed rice cake, a staple breakfast in South India.',
            breakdown: '4% fat, 80% carbs, 15% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 40 },
            { size: '4 pieces', calories: 160 },
        ],
    },
    {
        slug: 'sambar',
        name: 'Sambar',
        cuisine: 'South Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Soups',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 150,
            totalFat: { value: 5, percent: 6 },
            saturatedFat: { value: 1, percent: 5 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 650, percent: 28 },
            totalCarbohydrate: { value: 20, percent: 7 },
            protein: { value: 7 },
            potassium: { value: 450, percent: 10 },
        },
        nutritionSummary: {
            calories: 150,
            fat: '5g',
            carbs: '20g',
            protein: '7g',
            summaryText: 'A lentil-based vegetable stew, cooked with tamarind broth.',
            breakdown: '30% fat, 53% carbs, 17% protein.',
        },
        servingSizes: [
            { size: '1 cup', calories: 150 },
            { size: '1 bowl (250ml)', calories: 188 },
        ],
    },
    {
        slug: 'chole-bhature',
        name: 'Chole Bhature',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 serving (2 bhature)',
            calories: 450,
            totalFat: { value: 22, percent: 28 },
            saturatedFat: { value: 8, percent: 40 },
            cholesterol: { value: 10, percent: 3 },
            sodium: { value: 800, percent: 35 },
            totalCarbohydrate: { value: 55, percent: 20 },
            protein: { value: 12 },
            potassium: { value: 500, percent: 11 },
        },
        nutritionSummary: {
            calories: 450,
            fat: '22g',
            carbs: '55g',
            protein: '12g',
            summaryText: 'Spicy chickpea curry served with a fluffy, deep-fried bread.',
            breakdown: '44% fat, 49% carbs, 7% protein.',
        },
        servingSizes: [
            { size: '1 serving (2 bhature)', calories: 450 },
        ],
    },
    {
        slug: 'aloo-gobi',
        name: 'Aloo Gobi',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 150,
            totalFat: { value: 8, percent: 10 },
            saturatedFat: { value: 1, percent: 5 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 300, percent: 13 },
            totalCarbohydrate: { value: 18, percent: 7 },
            protein: { value: 4 },
            potassium: { value: 400, percent: 9 },
        },
        nutritionSummary: {
            calories: 150,
            fat: '8g',
            carbs: '18g',
            protein: '4g',
            summaryText: 'A dry curry made with potatoes (aloo) and cauliflower (gobi).',
            breakdown: '48% fat, 48% carbs, 4% protein.',
        },
        servingSizes: [
            { size: '1 cup', calories: 150 },
        ],
    },
    {
        slug: 'thepla',
        name: 'Thepla',
        cuisine: 'Gujarati',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 piece',
            calories: 90,
            totalFat: { value: 4, percent: 5 },
            saturatedFat: { value: 1, percent: 5 },
            cholesterol: { value: 5, percent: 2 },
            sodium: { value: 150, percent: 7 },
            totalCarbohydrate: { value: 12, percent: 4 },
            protein: { value: 2 },
            potassium: { value: 80, percent: 2 },
        },
        nutritionSummary: {
            calories: 90,
            fat: '4g',
            carbs: '12g',
            protein: '2g',
            summaryText: 'A soft, spiced flatbread from Gujarat, often made with fenugreek leaves.',
            breakdown: '40% fat, 53% carbs, 7% protein.',
        },
        servingSizes: [
            { size: '1 piece', calories: 90 },
        ],
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
    },
    {
        slug: 'indian-chicken',
        name: 'Indian Chicken',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '2 cups',
            calories: 340,
            totalFat: { value: 13.00, percent: 17 },
            saturatedFat: { value: 6.000, percent: 30 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 250, percent: 11 },
            totalCarbohydrate: { value: 12.00, percent: 4 },
            dietaryFiber: { value: 3.0, percent: 11 },
            protein: { value: 44.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 340,
            fat: '13g',
            carbs: '12g',
            protein: '44g',
            summaryText: 'There are 340 calories in 2 cups of Indian Chicken.',
            breakdown: '34% fat, 14% carbs, 52% protein.'
        },
        servingSizes: [
            { size: '2 cups', calories: 340 }
        ]
    },
    {
        slug: 'pav-bhaji',
        name: 'Pav Bhaji',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1/2 pack (150 g)',
            calories: 120,
            totalFat: { value: 4.50, percent: 6 },
            saturatedFat: { value: 3.000, percent: 15 },
            transFat: { value: 0 },
            cholesterol: { value: 10, percent: 3 },
            sodium: { value: 700, percent: 30 },
            totalCarbohydrate: { value: 17.00, percent: 6 },
            dietaryFiber: { value: 2.0, percent: 7 },
            sugars: { value: 1.00 },
            protein: { value: 2.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 120,
            fat: '4.5g',
            carbs: '17g',
            protein: '2g',
            summaryText: 'A popular Indian street food dish with a spicy vegetable mash.',
            breakdown: '35% fat, 58% carbs, 7% protein.'
        },
        servingSizes: [
            { size: '1/2 pack (150 g)', calories: 120 }
        ]
    },
    {
        slug: 'aloo-matar',
        name: 'Aloo Matar',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1/2 pack (150 g)',
            calories: 150,
            totalFat: { value: 7.00, percent: 9 },
            saturatedFat: { value: 2.000, percent: 10 },
            transFat: { value: 0 },
            cholesterol: { value: 5, percent: 2 },
            sodium: { value: 650, percent: 28 },
            totalCarbohydrate: { value: 19.00, percent: 7 },
            dietaryFiber: { value: 2.0, percent: 7 },
            sugars: { value: 0 },
            protein: { value: 4.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 150,
            fat: '7g',
            carbs: '19g',
            protein: '4g',
            summaryText: 'A North Indian curry made with potatoes (aloo) and peas (matar).',
            breakdown: '41% fat, 49% carbs, 10% protein.'
        },
        servingSizes: [
            { size: '1/2 pack (150 g)', calories: 150 }
        ]
    },
    {
        slug: 'shahi-rajma',
        name: 'Shahi Rajma',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1/2 pack (150 g)',
            calories: 230,
            totalFat: { value: 10.00, percent: 13 },
            saturatedFat: { value: 3.500, percent: 18 },
            transFat: { value: 0 },
            cholesterol: { value: 5, percent: 2 },
            sodium: { value: 720, percent: 31 },
            totalCarbohydrate: { value: 26.00, percent: 9 },
            dietaryFiber: { value: 3.0, percent: 11 },
            sugars: { value: 0 },
            protein: { value: 9.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 230,
            fat: '10g',
            carbs: '26g',
            protein: '9g',
            summaryText: 'A creamy and rich kidney bean curry.',
            breakdown: '39% fat, 45% carbs, 16% protein.'
        },
        servingSizes: [
            { size: '1/2 pack (150 g)', calories: 230 }
        ]
    },
    {
        slug: 'dal-makhani',
        name: 'Dal Makhani',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1/2 package',
            calories: 180,
            totalFat: { value: 8.00, percent: 10 },
            saturatedFat: { value: 3, percent: 15 },
            cholesterol: { value: 10, percent: 3 },
            sodium: { value: 810, percent: 35 },
            totalCarbohydrate: { value: 20.00, percent: 7 },
            dietaryFiber: { value: 3.0, percent: 11 },
            sugars: { value: 0 },
            protein: { value: 7.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 180,
            fat: '8g',
            carbs: '20g',
            protein: '7g',
            summaryText: 'A classic Punjabi lentil dish made with whole black lentils and red kidney beans.',
            breakdown: '40% fat, 44% carbs, 16% protein.'
        },
        servingSizes: [
            { size: '1/2 package', calories: 180 }
        ]
    },
    {
        slug: 'punjabi-chatpate-choley',
        name: 'Punjabi Chatpate Choley',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Beans & Legumes',
        nutritionFacts: {
            servingSize: '1/2 cup (110 g)',
            calories: 150,
            totalFat: { value: 6.00, percent: 8 },
            saturatedFat: { value: 1.500, percent: 8 },
            transFat: { value: 0 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 520, percent: 23 },
            totalCarbohydrate: { value: 18.00, percent: 7 },
            dietaryFiber: { value: 2.0, percent: 7 },
            sugars: { value: 0 },
            protein: { value: 5.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 150,
            fat: '6g',
            carbs: '18g',
            protein: '5g',
            summaryText: 'A spicy and tangy chickpea curry from the Punjab region.',
            breakdown: '37% fat, 49% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1/2 cup (110 g)', calories: 150 }
        ]
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
        slug: 'plain-waffle',
        name: 'Plain Waffle',
        cuisine: 'Generic',
        mealCategory: 'Breakfast',
        foodGroup: 'Breads & Cereals',
        nutritionFacts: {
            servingSize: '1 round (4" dia)',
            calories: 121,
            totalFat: { value: 3.72, percent: 5 },
            saturatedFat: { value: 0.763, percent: 4 },
            transFat: { value: 0 },
            polyunsaturatedFat: { value: 0.722 },
            monounsaturatedFat: { value: 1.99 },
            cholesterol: { value: 5, percent: 2 },
            sodium: { value: 281, percent: 12 },
            totalCarbohydrate: { value: 19.05, percent: 7 },
            dietaryFiber: { value: 1, percent: 3 },
            sugars: { value: 1.84 },
            protein: { value: 2.85 },
            calcium: { value: 118, percent: 9 },
            iron: { value: 2.63, percent: 15 },
            potassium: { value: 55, percent: 1 },
            vitaminA: { value: 163, percent: 18 },
            vitaminC: { value: 0, percent: 0 },
        },
        nutritionSummary: {
            calories: 121,
            fat: '3.72g',
            carbs: '19.05g',
            protein: '2.85g',
            summaryText: 'There are 121 calories in 1 round (4" dia) of Plain Waffle.',
            breakdown: '28% fat, 63% carbs, 9% protein.',
        },
        servingSizes: [
            { size: '1 miniature', calories: 26 },
            { size: '1 Belgian waffle (3" x 2-7/8" x 1-1/8")', calories: 99 },
            { size: '1 square (4" square)', calories: 115 },
            { size: '1 round (4" dia)', calories: 121 },
            { size: '1 round (7" dia)', calories: 232 },
            { size: '100 g', calories: 310 },
            { size: '1 round (8" dia)', calories: 381 },
        ],
        relatedTypes: {
            waffles: [
                'Toasted Plain Waffles (Frozen)',
                'Fruit Waffle',
                'Lowfat Plain Waffle',
                'Fat Free Plain Waffle',
                '100% Whole Wheat or 100% Whole Grain Waffle',
            ],
        },
    },
    {
        slug: 'vegetables-indian-style',
        name: 'Vegetables Indian Style',
        cuisine: 'North Indian',
        mealCategory: 'Lunch',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 cup (245 g)',
            calories: 97,
            totalFat: { value: 2.00, percent: 3 },
            saturatedFat: { value: 0.300, percent: 2 },
            transFat: { value: 1.000 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 480, percent: 21 },
            totalCarbohydrate: { value: 11.00, percent: 4 },
            dietaryFiber: { value: 5.5, percent: 20 },
            sugars: { value: 5.50 },
            protein: { value: 4.50 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 97,
            fat: '2g',
            carbs: '11g',
            protein: '4.5g',
            summaryText: 'A mix of Indian-style vegetables.',
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
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 30, percent: 1 },
            totalCarbohydrate: { value: 5.3, percent: 2 },
            dietaryFiber: { value: 2.5, percent: 9 },
            sugars: { value: 2.4 },
            protein: { value: 1.98 },
            vitaminD: { value: 0, percent: 0 },
            calcium: { value: 22, percent: 2 },
            iron: { value: 0.44, percent: 2 },
            potassium: { value: 303, percent: 6 },
            vitaminA: { value: 1, percent: 0 },
            vitaminC: { value: 46.4, percent: 52 },
        },
        nutritionSummary: {
            calories: 25,
            fat: '0.1g',
            carbs: '5.3g',
            protein: '1.98g',
            summaryText: 'There are 25 calories in 1 cup of Cauliflower.',
            breakdown: '3% fat, 71% carbs, 26% protein.',
        },
        servingSizes: [
            { size: '1 floweret', calories: 3 },
            { size: '1 oz', calories: 7 },
            { size: '1 cup', calories: 25 },
            { size: '100 g', calories: 25 },
        ],
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
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 87, percent: 4 },
            totalCarbohydrate: { value: 8.36, percent: 3 },
            dietaryFiber: { value: 2.3, percent: 8 },
            sugars: { value: 4.94 },
            protein: { value: 1.17 },
            calcium: { value: 39, percent: 3 },
            iron: { value: 0.39, percent: 2 },
            potassium: { value: 248, percent: 5 },
            vitaminC: { value: 27.3, percent: 30 },
        },
        nutritionSummary: {
            calories: 36,
            fat: '0.13g',
            carbs: '8.36g',
            protein: '1.17g',
            summaryText: 'There are 36 calories in 1 cup of cubed Turnips.',
            breakdown: '3% fat, 85% carbs, 12% protein.',
        },
        servingSizes: [
            { size: '1 cup cubed', calories: 36 },
            { size: '100 g', calories: 28 },
        ],
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
            cholesterol: { value: 0, percent: 0 },
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
        },
        nutritionSummary: {
            calories: 32,
            fat: '0.36g',
            carbs: '7.06g',
            protein: '1.58g',
            summaryText: 'There are 32 calories in 1 cup of chopped or sliced Red Tomatoes.',
            breakdown: '9% fat, 75% carbs, 17% protein.',
        },
        servingSizes: [
            { size: '1 cup chopped or sliced', calories: 32 },
        ],
    },
    {
        slug: 'punjab-eggplant',
        name: 'Indian Punjab Eggplant',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1/2 package (5 oz)',
            calories: 100,
            totalFat: { value: 5.00, percent: 6 },
            saturatedFat: { value: 0.000, percent: 0 },
            transFat: { value: 0.000 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 480, percent: 21 },
            totalCarbohydrate: { value: 12.00, percent: 4 },
            dietaryFiber: { value: 2.0, percent: 7 },
            sugars: { value: 4.00 },
            protein: { value: 3.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 100,
            fat: '5g',
            carbs: '12g',
            protein: '3g',
            summaryText: 'Indian style eggplant from the Punjab region.',
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
            cholesterol: { value: 15, percent: 5 },
            sodium: { value: 340, percent: 15 },
            totalCarbohydrate: { value: 16.00, percent: 6 },
            dietaryFiber: { value: 3.0, percent: 11 },
            sugars: { value: 8.00 },
            protein: { value: 4.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 150,
            fat: '8g',
            carbs: '16g',
            protein: '4g',
            summaryText: 'Vegetables in a classic Indian tikka masala sauce.',
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
        mealCategory: 'Lunch',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1 cup (85 g)',
            calories: 30,
            totalFat: { value: 0.00, percent: 0 },
            saturatedFat: { value: 0.000, percent: 0 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 20, percent: 1 },
            totalCarbohydrate: { value: 6.00, percent: 2 },
            dietaryFiber: { value: 2.0, percent: 7 },
            sugars: { value: 3.00 },
            protein: { value: 1.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 30,
            fat: '0g',
            carbs: '6g',
            protein: '1g',
            summaryText: 'A mix of vegetables suitable for stir-frying.',
            breakdown: '0% fat, 86% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 cup (85 g)', calories: 30 }
        ]
    },
    {
        slug: 'mushroom-masala',
        name: 'Indian Mushroom Masala',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Vegetables',
        nutritionFacts: {
            servingSize: '1/2 pack (142.5 g)',
            calories: 110,
            totalFat: { value: 4.50, percent: 6 },
            saturatedFat: { value: 0.000, percent: 0 },
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 440, percent: 19 },
            totalCarbohydrate: { value: 14.00, percent: 5 },
            dietaryFiber: { value: 2.0, percent: 7 },
            sugars: { value: 5.00 },
            protein: { value: 3.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 110,
            fat: '4.5g',
            carbs: '14g',
            protein: '3g',
            summaryText: 'Spicy and savory mushroom curry.',
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
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 400, percent: 17 },
            totalCarbohydrate: { value: 22.00, percent: 8 },
            dietaryFiber: { value: 8.0, percent: 29 },
            sugars: { value: 3.00 },
            protein: { value: 6.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 170,
            fat: '6g',
            carbs: '22g',
            protein: '6g',
            summaryText: 'A flavorful chickpea curry.',
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
            saturatedFat: { value: 0.000, percent: 0 },
            cholesterol: { value: 13, percent: 4 },
            sodium: { value: 350, percent: 15 },
            totalCarbohydrate: { value: 7.00, percent: 3 },
            dietaryFiber: { value: 6.0, percent: 21 },
            sugars: { value: 4.50 },
            protein: { value: 3.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 150,
            fat: '10g',
            carbs: '7g',
            protein: '3g',
            summaryText: 'Peas and paneer in a tomato-based sauce.',
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
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 400, percent: 17 },
            totalCarbohydrate: { value: 13.00, percent: 5 },
            dietaryFiber: { value: 3.0, percent: 11 },
            sugars: { value: 3.00 },
            protein: { value: 3.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 100,
            fat: '3g',
            carbs: '13g',
            protein: '3g',
            summaryText: 'Spinach and potato curry.',
            breakdown: '30% fat, 57% carbs, 13% protein.'
        },
        servingSizes: [
            { size: '1/2 package (142.5 g)', calories: 100 }
        ]
    },
    {
        slug: 'chicken-curry',
        name: 'Chicken Curry',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1/2 chicken breast with sauce',
            calories: 160,
            totalFat: { value: 8.6, percent: 11 },
            saturatedFat: { value: 1.752, percent: 9 },
            polyunsaturatedFat: { value: 2.433 },
            monounsaturatedFat: { value: 3.665 },
            cholesterol: { value: 45, percent: 15 },
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
        },
        nutritionSummary: {
            calories: 160,
            fat: '8.6g',
            carbs: '6.11g',
            protein: '14.8g',
            summaryText: 'Classic Indian chicken curry.',
            breakdown: '48% fat, 15% carbs, 37% protein.'
        },
        servingSizes: [
            { size: '1/2 chicken breast with sauce', calories: 160 }
        ]
    },
    {
        slug: 'lamb-curry',
        name: 'Lamb Curry',
        cuisine: 'North Indian',
        mealCategory: 'Dinner',
        foodGroup: 'Meat',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 257,
            totalFat: { value: 13.83, percent: 18 },
            saturatedFat: { value: 3.944, percent: 20 },
            polyunsaturatedFat: { value: 3.186 },
            monounsaturatedFat: { value: 5.055 },
            cholesterol: { value: 90, percent: 30 },
            sodium: { value: 496, percent: 22 },
            totalCarbohydrate: { value: 3.71, percent: 1 },
            dietaryFiber: { value: 0.9, percent: 3 },
            sugars: { value: 1.27 },
            protein: { value: 28.23 },
            calcium: { value: 38, percent: 3 },
            iron: { value: 2.95, percent: 16 },
            potassium: { value: 493, percent: 10 },
            vitaminC: { value: 1.4, percent: 2 },
        },
        nutritionSummary: {
            calories: 257,
            fat: '13.83g',
            carbs: '3.71g',
            protein: '28.23g',
            summaryText: 'Flavorful curry made with lamb meat.',
            breakdown: '49% fat, 6% carbs, 45% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 257 }
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
            cholesterol: { value: 92, percent: 31 },
            sodium: { value: 228, percent: 10 },
            totalCarbohydrate: { value: 0, percent: 0 },
            dietaryFiber: { value: 0, percent: 0 },
            sugars: { value: 0 },
            protein: { value: 23.93 },
            calcium: { value: 16, percent: 1 },
            iron: { value: 1.97, percent: 11 },
            potassium: { value: 281, percent: 6 },
        },
        nutritionSummary: {
            calories: 266,
            fat: '18.15g',
            carbs: '0g',
            protein: '23.93g',
            summaryText: 'Roasted lamb, a classic main course.',
            breakdown: '63% fat, 0% carbs, 37% protein.'
        },
        servingSizes: [
            { size: '100 g', calories: 266 }
        ]
    },
    {
        slug: 'mixed-salad-greens',
        name: 'Mixed Salad Greens',
        cuisine: 'Generic',
        mealCategory: 'Lunch',
        foodGroup: 'Salads',
        nutritionFacts: {
            servingSize: '1 cup of shredded or chopped',
            calories: 9,
            totalFat: { value: 0.13, percent: 0 },
            saturatedFat: { value: 0.021, percent: 0 },
            polyunsaturatedFat: { value: 0.063 },
            monounsaturatedFat: { value: 0.004 },
            cholesterol: { value: 0, percent: 0 },
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
        },
        nutritionSummary: {
            calories: 9,
            fat: '0.13g',
            carbs: '1.76g',
            protein: '0.84g',
            summaryText: 'A mix of various leafy greens for salads.',
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
        mealCategory: 'Lunch',
        foodGroup: 'Salads',
        nutritionFacts: {
            servingSize: '1 cup',
            calories: 15,
            totalFat: { value: 0.15, percent: 0 },
            saturatedFat: { value: 0.028, percent: 0 },
            cholesterol: { value: 0, percent: 0 },
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
        },
        nutritionSummary: {
            calories: 15,
            fat: '0.15g',
            carbs: '3.17g',
            protein: '0.76g',
            summaryText: 'A simple salad of lettuce and tomato.',
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
            cholesterol: { value: 0, percent: 0 },
            sodium: { value: 480, percent: 21 },
            totalCarbohydrate: { value: 21.00, percent: 8 },
            dietaryFiber: { value: 1.0, percent: 4 },
            sugars: { value: 12.00 },
            protein: { value: 2.00 },
            potassium: { value: 0, percent: 0 }
        },
        nutritionSummary: {
            calories: 90,
            fat: '0g',
            carbs: '21g',
            protein: '2g',
            summaryText: 'A classic tomato soup, often served hot.',
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
            cholesterol: { value: 7, percent: 2 },
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
        },
        nutritionSummary: {
            calories: 75,
            fat: '2.46g',
            carbs: '9.35g',
            protein: '4.05g',
            summaryText: 'Comforting soup made with chicken broth and pieces.',
            breakdown: '29% fat, 49% carbs, 21% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 75 },
            { size: '100 g', calories: 31 },
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
            cholesterol: { value: 13, percent: 4 },
            sodium: { value: 1068, percent: 46 },
            totalCarbohydrate: { value: 54.12, percent: 20 },
            dietaryFiber: { value: 13.9, percent: 50 },
            protein: { value: 14.02 },
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
            summaryText: 'Haricot beans stewed in a sweet tomato sauce.',
            breakdown: '30% fat, 56% carbs, 14% protein.'
        },
        servingSizes: [
            { size: '1 cup', calories: 382 },
            { size: '100 g', calories: 151 },
        ]
    }
];
