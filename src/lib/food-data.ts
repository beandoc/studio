
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
        "slug": "hot-tea-garam-chai",
        "name": "Hot tea (Garam Chai)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "150 ml",
            "calories": 34,
            "totalFat": { "value": 1.12 },
            "saturatedFat": { "value": 0.68 },
            "polyunsaturatedFat": { "value": 0.03 },
            "monounsaturatedFat": { "value": 0.3 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 6.56 },
            "totalCarbohydrate": { "value": 5.43 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 5.42 },
            "protein": { "value": 0.82 },
            "calcium": { "value": 29.9 },
            "iron": { "value": 0.05 },
            "potassium": { "value": 29.35 },
            "vitaminC": { "value": 0.5, "percent": 1 },
            "folate": { "value": 1.8 }
        },
        "nutritionSummary": {
            "calories": 34,
            "fat": "1.1g",
            "carbs": "5.4g",
            "protein": "0.8g",
            "summaryText": "A serving of Hot tea (Garam Chai).",
            "breakdown": "31% fat, 63% carbs, 6% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 22.65 },
            { "size": "150 ml (1 tea cup)", "calories": 34 }
        ]
    },
    {
        "slug": "instant-coffee",
        "name": "Instant coffee",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "150 ml",
            "calories": 104,
            "totalFat": { "value": 3.36 },
            "saturatedFat": { "value": 2.03 },
            "polyunsaturatedFat": { "value": 0.1 },
            "monounsaturatedFat": { "value": 0.91 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 22.13 },
            "totalCarbohydrate": { "value": 16.44 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 16.27 },
            "protein": { "value": 2.88 },
            "calcium": { "value": 93.9 },
            "iron": { "value": 0.27 },
            "potassium": { "value": 200.25 },
            "vitaminC": { "value": 1.51, "percent": 2 },
            "folate": { "value": 5.6 }
        },
        "nutritionSummary": {
            "calories": 104,
            "fat": "3.4g",
            "carbs": "16.4g",
            "protein": "2.9g",
            "summaryText": "A serving of Instant coffee.",
            "breakdown": "29% fat, 63% carbs, 8% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 69.47 },
            { "size": "150 ml (1 tea cup)", "calories": 104 }
        ]
    },
    {
        "slug": "espreso-coffee",
        "name": "Espreso coffee",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "150 ml",
            "calories": 82,
            "totalFat": { "value": 3.39 },
            "saturatedFat": { "value": 2.05 },
            "polyunsaturatedFat": { "value": 0.1 },
            "monounsaturatedFat": { "value": 0.92 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 22.15 },
            "totalCarbohydrate": { "value": 10.49 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 10.36 },
            "protein": { "value": 2.77 },
            "calcium": { "value": 92.1 },
            "iron": { "value": 0.23 },
            "potassium": { "value": 164.63 },
            "vitaminC": { "value": 1.51, "percent": 2 },
            "folate": { "value": 5.53 }
        },
        "nutritionSummary": {
            "calories": 82,
            "fat": "3.4g",
            "carbs": "10.5g",
            "protein": "2.8g",
            "summaryText": "A serving of Espreso coffee.",
            "breakdown": "37% fat, 51% carbs, 12% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 54.67 },
            { "size": "150 ml (1 tea cup)", "calories": 82 }
        ]
    },
    {
        "slug": "iced-tea",
        "name": "Iced tea",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "250 ml",
            "calories": 33,
            "totalFat": { "value": 0.04 },
            "saturatedFat": { "value": 0.02 },
            "polyunsaturatedFat": { "value": 0.02 },
            "monounsaturatedFat": { "value": 0 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 0.75 },
            "totalCarbohydrate": { "value": 8.64 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 8.64 },
            "protein": { "value": 0.09 },
            "calcium": { "value": 3.77 },
            "iron": { "value": 0.07 },
            "potassium": { "value": 16.69 },
            "vitaminC": { "value": 5.95, "percent": 7 },
            "folate": { "value": 1.28 }
        },
        "nutritionSummary": {
            "calories": 33,
            "fat": "0.0g",
            "carbs": "8.6g",
            "protein": "0.1g",
            "summaryText": "A serving of Iced tea.",
            "breakdown": "1% fat, 98% carbs, 1% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 13.24 },
            { "size": "250 ml (1 tall glass)", "calories": 33 }
        ]
    },
    {
        "slug": "raw-mango-drink-aam-panna",
        "name": "Raw mango drink (Aam panna)",
        "cuisine": "North Indian",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "250 ml",
            "calories": 96,
            "totalFat": { "value": 0.07 },
            "saturatedFat": { "value": 0.02 },
            "polyunsaturatedFat": { "value": 0.03 },
            "monounsaturatedFat": { "value": 0.02 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 214.33 },
            "totalCarbohydrate": { "value": 24.29 },
            "dietaryFiber": { "value": 1.64 },
            "sugars": { "value": 20.11 },
            "protein": { "value": 0.42 },
            "calcium": { "value": 19 },
            "iron": { "value": 0.36 },
            "potassium": { "value": 84.45 },
            "vitaminC": { "value": 45.3, "percent": 50 },
            "folate": { "value": 14.05 }
        },
        "nutritionSummary": {
            "calories": 96,
            "fat": "0.1g",
            "carbs": "24.3g",
            "protein": "0.4g",
            "summaryText": "A serving of Raw mango drink (Aam panna).",
            "breakdown": "1% fat, 97% carbs, 2% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 38.4 },
            { "size": "250 ml (1 tall glass)", "calories": 96 }
        ]
    },
    {
        "slug": "fruit-punch-with-fresh-juices",
        "name": "Fruit Punch (with fresh juices)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "250 ml",
            "calories": 197,
            "totalFat": { "value": 0.18 },
            "saturatedFat": { "value": 0.03 },
            "polyunsaturatedFat": { "value": 0.05 },
            "monounsaturatedFat": { "value": 0.01 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 14.33 },
            "totalCarbohydrate": { "value": 51.06 },
            "dietaryFiber": { "value": 0.33 },
            "sugars": { "value": 50.33 },
            "protein": { "value": 0.76 },
            "calcium": { "value": 27.59 },
            "iron": { "value": 0.56 },
            "potassium": { "value": 181.99 },
            "vitaminC": { "value": 41.44, "percent": 46 },
            "folate": { "value": 24.57 }
        },
        "nutritionSummary": {
            "calories": 197,
            "fat": "0.2g",
            "carbs": "51.1g",
            "protein": "0.8g",
            "summaryText": "A serving of Fruit Punch (with fresh juices).",
            "breakdown": "1% fat, 97% carbs, 2% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 78.8 },
            { "size": "250 ml (1 tall glass)", "calories": 197 }
        ]
    },
    {
        "slug": "fruit-punch-with-squashes",
        "name": "Fruit Punch (with squashes)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "250 ml",
            "calories": 116,
            "totalFat": { "value": 0.08 },
            "saturatedFat": { "value": 0.03 },
            "polyunsaturatedFat": { "value": 0.04 },
            "monounsaturatedFat": { "value": 0.01 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 11.35 },
            "totalCarbohydrate": { "value": 30.12 },
            "dietaryFiber": { "value": 0.85 },
            "sugars": { "value": 29.58 },
            "protein": { "value": 0.36 },
            "calcium": { "value": 16.6 },
            "iron": { "value": 0.31 },
            "potassium": { "value": 83.72 },
            "vitaminC": { "value": 15.08, "percent": 17 },
            "folate": { "value": 9.13 }
        },
        "nutritionSummary": {
            "calories": 116,
            "fat": "0.1g",
            "carbs": "30.1g",
            "protein": "0.4g",
            "summaryText": "A serving of Fruit Punch (with squashes).",
            "breakdown": "1% fat, 98% carbs, 1% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 46.4 },
            { "size": "250 ml (1 tall glass)", "calories": 116 }
        ]
    },
    {
        "slug": "lemonade",
        "name": "Lemonade",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "250 ml",
            "calories": 73,
            "totalFat": { "value": 0.04 },
            "saturatedFat": { "value": 0.02 },
            "polyunsaturatedFat": { "value": 0.02 },
            "monounsaturatedFat": { "value": 0 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 99.62 },
            "totalCarbohydrate": { "value": 19.13 },
            "dietaryFiber": { "value": 0.06 },
            "sugars": { "value": 19.11 },
            "protein": { "value": 0.12 },
            "calcium": { "value": 6.42 },
            "iron": { "value": 0.17 },
            "potassium": { "value": 20.01 },
            "vitaminC": { "value": 5.27, "percent": 6 },
            "folate": { "value": 2.11 }
        },
        "nutritionSummary": {
            "calories": 73,
            "fat": "0.0g",
            "carbs": "19.1g",
            "protein": "0.1g",
            "summaryText": "A serving of Lemonade.",
            "breakdown": "0% fat, 99% carbs, 1% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 29.2 },
            { "size": "250 ml (1 glass)", "calories": 73 }
        ]
    },
    {
        "slug": "milk",
        "name": "Milk",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "1 cup (240ml)",
            "calories": 122,
            "totalFat": { "value": 4.88, "percent": 6 },
            "saturatedFat": { "value": 2.965, "percent": 15 },
            "polyunsaturatedFat": { "value": 0.249 },
            "monounsaturatedFat": { "value": 1.301 },
            "cholesterol": { "value": 17, "percent": 6 },
            "sodium": { "value": 100, "percent": 4 },
            "totalCarbohydrate": { "value": 11.49, "percent": 4 },
            "dietaryFiber": { "value": 0, "percent": 0 },
            "sugars": { "value": 12.59 },
            "protein": { "value": 8.03 },
            "calcium": { "value": 285, "percent": 22 },
            "iron": { "value": 0.07, "percent": 0 },
            "potassium": { "value": 361, "percent": 8 },
            "vitaminA": { "value": 112, "percent": 12 },
            "vitaminC": { "value": 0.2, "percent": 0 }
        },
        "nutritionSummary": {
            "calories": 122,
            "fat": "4.88g",
            "carbs": "11.49g",
            "protein": "8.03g",
            "summaryText": "There are 122 calories in 1 cup of Milk.",
            "breakdown": "36% fat, 38% carbs, 26% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 52 },
            { "size": "240 ml (1 cup)", "calories": 122 }
        ]
    },
    {
        "slug": "cola-soda-with-caffeine",
        "name": "Cola Soda (with Caffeine)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 38,
            "totalFat": { "value": 0.02, "percent": 0 },
            "saturatedFat": { "value": 0, "percent": 0 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 4, "percent": 0 },
            "totalCarbohydrate": { "value": 9.92, "percent": 4 },
            "dietaryFiber": { "value": 0, "percent": 0 },
            "sugars": { "value": 9.31 },
            "protein": { "value": 0.07 },
            "calcium": { "value": 2, "percent": 0 },
            "iron": { "value": 0.11, "percent": 1 },
            "potassium": { "value": 2, "percent": 0 }
        },
        "nutritionSummary": {
            "calories": 38,
            "fat": "0.02g",
            "carbs": "9.92g",
            "protein": "0.07g",
            "summaryText": "There are 38 calories in 100 ml of Cola Soda (with Caffeine).",
            "breakdown": "0% fat, 99% carbs, 1% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 38 },
            { "size": "355 ml (1 can)", "calories": 136 }
        ]
    },
    {
        "slug": "coffee-brewed",
        "name": "Coffee (brewed)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "240 ml",
            "calories": 2,
            "totalFat": { "value": 0.05, "percent": 0 },
            "saturatedFat": { "value": 0.005, "percent": 0 },
            "polyunsaturatedFat": { "value": 0.002 },
            "monounsaturatedFat": { "value": 0.028 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 5, "percent": 0 },
            "totalCarbohydrate": { "value": 0.09, "percent": 0 },
            "dietaryFiber": { "value": 0, "percent": 0 },
            "sugars": { "value": 0 },
            "protein": { "value": 0.28 },
            "calcium": { "value": 5, "percent": 0 },
            "iron": { "value": 0.05, "percent": 0 },
            "potassium": { "value": 111, "percent": 2 }
        },
        "nutritionSummary": {
            "calories": 2,
            "fat": "0.05g",
            "carbs": "0.09g",
            "protein": "0.28g",
            "summaryText": "There are 2 calories in 1 mug (240ml) of Coffee.",
            "breakdown": "22% fat, 20% carbs, 59% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 1 },
            { "size": "240 ml (1 mug)", "calories": 2 }
        ]
    }
]
