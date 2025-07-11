
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
            "servingSize": "100 ml",
            "calories": 16,
            "totalFat": { "value": 0.53 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 3.12 },
            "totalCarbohydrate": { "value": 2.58 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 2.58 },
            "protein": { "value": 0.39 },
            "calcium": { "value": 14.2 },
            "iron": { "value": 0.02 },
            "vitaminC": { "value": 0.5, "percent": 1 },
            "folate": { "value": 1.8 }
        },
        "nutritionSummary": {
            "calories": 16,
            "fat": "0.5g",
            "carbs": "2.6g",
            "protein": "0.4g",
            "summaryText": "A serving of Hot tea (Garam Chai).",
            "breakdown": "31% fat, 63% carbs, 6% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 16 },
            { "size": "150 ml", "calories": 24 }
        ]
    },
    {
        "slug": "instant-coffee-fatsecret",
        "name": "Instant Coffee (FatSecret)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 23,
            "totalFat": { "value": 0.75 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 4.92 },
            "totalCarbohydrate": { "value": 3.65 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 3.62 },
            "protein": { "value": 0.64 },
            "calcium": { "value": 20.87 },
            "iron": { "value": 0.06 },
            "vitaminC": { "value": 1.51, "percent": 2 },
            "folate": { "value": 5.6 }
        },
        "nutritionSummary": {
            "calories": 23,
            "fat": "0.8g",
            "carbs": "3.7g",
            "protein": "0.6g",
            "summaryText": "A serving of Instant coffee.",
            "breakdown": "29% fat, 63% carbs, 8% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 23 },
            { "size": "150 ml", "calories": 35 }
        ]
    },
    {
        "slug": "espreso-coffee-fatsecret",
        "name": "Espresso Coffee (FatSecret)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 52,
            "totalFat": { "value": 2.14 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 13.98 },
            "totalCarbohydrate": { "value": 6.62 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 6.53 },
            "protein": { "value": 1.75 },
            "calcium": { "value": 58.1 },
            "iron": { "value": 0.15 },
            "vitaminC": { "value": 1.51, "percent": 2 },
            "folate": { "value": 5.53 }
        },
        "nutritionSummary": {
            "calories": 52,
            "fat": "2.1g",
            "carbs": "6.6g",
            "protein": "1.8g",
            "summaryText": "A serving of Espreso coffee.",
            "breakdown": "37% fat, 51% carbs, 12% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 52 },
            { "size": "150 ml", "calories": 78 }
        ]
    },
    {
        "slug": "iced-tea",
        "name": "Iced tea",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 10,
            "totalFat": { "value": 0.01 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 0.23 },
            "totalCarbohydrate": { "value": 2.7 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 2.7 },
            "protein": { "value": 0.03 },
            "calcium": { "value": 1.18 },
            "iron": { "value": 0.02 },
            "vitaminC": { "value": 5.95, "percent": 7 },
            "folate": { "value": 1.28 }
        },
        "nutritionSummary": {
            "calories": 10,
            "fat": "0.0g",
            "carbs": "2.7g",
            "protein": "0.0g",
            "summaryText": "A serving of Iced tea.",
            "breakdown": "1% fat, 98% carbs, 1% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 10 },
            { "size": "250 ml", "calories": 26 }
        ]
    },
    {
        "slug": "raw-mango-drink-aam-panna",
        "name": "Raw mango drink (Aam panna)",
        "cuisine": "North Indian",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 36,
            "totalFat": { "value": 0.03 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 79.82 },
            "totalCarbohydrate": { "value": 9.05 },
            "dietaryFiber": { "value": 0.61 },
            "sugars": { "value": 7.49 },
            "protein": { "value": 0.16 },
            "calcium": { "value": 7.08 },
            "iron": { "value": 0.14 },
            "vitaminC": { "value": 45.3, "percent": 50 },
            "folate": { "value": 14.05 }
        },
        "nutritionSummary": {
            "calories": 36,
            "fat": "0.0g",
            "carbs": "9.1g",
            "protein": "0.2g",
            "summaryText": "A serving of Raw mango drink (Aam panna).",
            "breakdown": "1% fat, 97% carbs, 2% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 36 },
            { "size": "250 ml", "calories": 90 }
        ]
    },
    {
        "slug": "fruit-punch-with-fresh-juices",
        "name": "Fruit Punch (with fresh juices)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 36,
            "totalFat": { "value": 0.03 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 2.63 },
            "totalCarbohydrate": { "value": 9.38 },
            "dietaryFiber": { "value": 0.06 },
            "sugars": { "value": 9.25 },
            "protein": { "value": 0.14 },
            "calcium": { "value": 5.07 },
            "iron": { "value": 0.1 },
            "vitaminC": { "value": 41.44, "percent": 46 },
            "folate": { "value": 24.57 }
        },
        "nutritionSummary": {
            "calories": 36,
            "fat": "0.0g",
            "carbs": "9.4g",
            "protein": "0.1g",
            "summaryText": "A serving of Fruit Punch (with fresh juices).",
            "breakdown": "1% fat, 97% carbs, 2% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 36 },
            { "size": "250 ml", "calories": 90 }
        ]
    },
    {
        "slug": "fruit-punch-with-squashes",
        "name": "Fruit Punch (with squashes)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 23,
            "totalFat": { "value": 0.02 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 2.26 },
            "totalCarbohydrate": { "value": 5.99 },
            "dietaryFiber": { "value": 0.17 },
            "sugars": { "value": 5.88 },
            "protein": { "value": 0.07 },
            "calcium": { "value": 3.3 },
            "iron": { "value": 0.06 },
            "vitaminC": { "value": 15.08, "percent": 17 },
            "folate": { "value": 9.13 }
        },
        "nutritionSummary": {
            "calories": 23,
            "fat": "0.0g",
            "carbs": "6.0g",
            "protein": "0.1g",
            "summaryText": "A serving of Fruit Punch (with squashes).",
            "breakdown": "1% fat, 98% carbs, 1% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 23 },
            { "size": "250 ml", "calories": 58 }
        ]
    },
    {
        "slug": "lemonade",
        "name": "Lemonade",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 21,
            "totalFat": { "value": 0.01 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 28.52 },
            "totalCarbohydrate": { "value": 5.48 },
            "dietaryFiber": { "value": 0.02 },
            "sugars": { "value": 5.47 },
            "protein": { "value": 0.03 },
            "calcium": { "value": 1.84 },
            "iron": { "value": 0.05 },
            "vitaminC": { "value": 5.27, "percent": 6 },
            "folate": { "value": 2.11 }
        },
        "nutritionSummary": {
            "calories": 21,
            "fat": "0.0g",
            "carbs": "5.5g",
            "protein": "0.0g",
            "summaryText": "A serving of Lemonade.",
            "breakdown": "0% fat, 99% carbs, 1% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 21 },
            { "size": "250 ml", "calories": 52 }
        ]
    },
    {
        "slug": "milk",
        "name": "Milk",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 52,
            "totalFat": { "value": 2.03, "percent": 3 },
            "saturatedFat": { "value": 1.235, "percent": 6 },
            "polyunsaturatedFat": { "value": 0.104 },
            "monounsaturatedFat": { "value": 0.542 },
            "cholesterol": { "value": 7.08, "percent": 2 },
            "sodium": { "value": 41.67, "percent": 2 },
            "totalCarbohydrate": { "value": 4.79, "percent": 2 },
            "dietaryFiber": { "value": 0, "percent": 0 },
            "sugars": { "value": 5.25 },
            "protein": { "value": 3.35 },
            "calcium": { "value": 118.75, "percent": 9 },
            "iron": { "value": 0.03, "percent": 0 },
            "potassium": { "value": 150.42, "percent": 3 },
            "vitaminA": { "value": 46.67, "percent": 5 },
            "vitaminC": { "value": 0.08, "percent": 0 }
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
            { "size": "240 ml", "calories": 122 }
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
            { "size": "355 ml", "calories": 136 }
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
            { "size": "240 ml", "calories": 2 }
        ]
    },
    {
        "slug": "cappuccino",
        "name": "Cappuccino",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "240 ml",
            "calories": 74,
            "totalFat": { "value": 3.98, "percent": 5 },
            "saturatedFat": { "value": 2.273, "percent": 11 },
            "polyunsaturatedFat": { "value": 0.241 },
            "monounsaturatedFat": { "value": 1.007 },
            "cholesterol": { "value": 12, "percent": 4 },
            "sodium": { "value": 50, "percent": 2 },
            "totalCarbohydrate": { "value": 5.81, "percent": 2 },
            "dietaryFiber": { "value": 0.2, "percent": 1 },
            "sugars": { "value": 6.41 },
            "protein": { "value": 4.08 },
            "calcium": { "value": 144, "percent": 11 },
            "iron": { "value": 0.19, "percent": 1 },
            "potassium": { "value": 233, "percent": 5 },
            "vitaminA": { "value": 34, "percent": 4 }
        },
        "nutritionSummary": {
            "calories": 74,
            "fat": "3.98g",
            "carbs": "5.81g",
            "protein": "4.08g",
            "summaryText": "There are 74 calories in 1 mug of Cappuccino.",
            "breakdown": "48% fat, 31% carbs, 22% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 31 },
            { "size": "180 ml", "calories": 56 },
            { "size": "240 ml", "calories": 74 }
        ]
    },
    {
        "slug": "espresso-coffee",
        "name": "Espresso Coffee",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "60 ml",
            "calories": 1,
            "totalFat": { "value": 0.11, "percent": 0 },
            "saturatedFat": { "value": 0.054, "percent": 0 },
            "polyunsaturatedFat": { "value": 0.054 },
            "monounsaturatedFat": { "value": 0 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 8, "percent": 0 },
            "totalCarbohydrate": { "value": 0, "percent": 0 },
            "dietaryFiber": { "value": 0, "percent": 0 },
            "sugars": { "value": 0 },
            "protein": { "value": 0.07 },
            "calcium": { "value": 1, "percent": 0 },
            "iron": { "value": 0.08, "percent": 0 },
            "potassium": { "value": 68, "percent": 1 },
            "vitaminC": { "value": 0.1, "percent": 0 }
        },
        "nutritionSummary": {
            "calories": 1,
            "fat": "0.11g",
            "carbs": "0g",
            "protein": "0.07g",
            "summaryText": "There is 1 calorie in 1 espresso cup of Espresso Coffee.",
            "breakdown": "77% fat, 0% carbs, 23% protein."
        },
        "servingSizes": [
            { "size": "30 ml", "calories": 1 },
            { "size": "60 ml", "calories": 1 },
            { "size": "100 ml", "calories": 2 },
            { "size": "240 ml", "calories": 5 }
        ]
    },
    {
        "slug": "instant-coffee-powdered",
        "name": "Instant Coffee (made from Powdered)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "240 ml",
            "calories": 5,
            "totalFat": { "value": 0, "percent": 0 },
            "saturatedFat": { "value": 0.004, "percent": 0 },
            "polyunsaturatedFat": { "value": 0.004 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 5, "percent": 0 },
            "totalCarbohydrate": { "value": 0.9, "percent": 0 },
            "dietaryFiber": { "value": 0, "percent": 0 },
            "sugars": { "value": 0 },
            "protein": { "value": 0.26 },
            "calcium": { "value": 7, "percent": 1 },
            "iron": { "value": 0.1, "percent": 1 },
            "potassium": { "value": 76, "percent": 2 }
        },
        "nutritionSummary": {
            "calories": 5,
            "fat": "0g",
            "carbs": "0.9g",
            "protein": "0.26g",
            "summaryText": "There are 5 calories in 1 mug of Instant Coffee (made from Powdered).",
            "breakdown": "0% fat, 78% carbs, 22% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 2 },
            { "size": "180 ml", "calories": 4 },
            { "size": "240 ml", "calories": 5 }
        ]
    },
    {
        "slug": "latte-coffee",
        "name": "Latte Coffee",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 28,
            "totalFat": { "value": 1.15, "percent": 1 },
            "saturatedFat": { "value": 0.692, "percent": 3 },
            "polyunsaturatedFat": { "value": 0.083 },
            "monounsaturatedFat": { "value": 0.291 },
            "cholesterol": { "value": 4.17, "percent": 1 },
            "sodium": { "value": 26.25, "percent": 1 },
            "totalCarbohydrate": { "value": 2.57, "percent": 1 },
            "dietaryFiber": { "value": 0, "percent": 0 },
            "sugars": { "value": 2.82 },
            "protein": { "value": 1.83 },
            "calcium": { "value": 64.58, "percent": 5 },
            "iron": { "value": 0.06, "percent": 0 },
            "potassium": { "value": 115.62, "percent": 2 },
            "vitaminA": { "value": 25.42, "percent": 3 },
            "vitaminC": { "value": 0.08, "percent": 0 }
        },
        "nutritionSummary": {
            "calories": 135,
            "fat": "5.51g",
            "carbs": "12.36g",
            "protein": "8.81g",
            "summaryText": "There are 135 calories in 1 medium Latte Coffee.",
            "breakdown": "37% fat, 37% carbs, 26% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 28 },
            { "size": "240 ml", "calories": 67 },
            { "size": "480 ml", "calories": 135 }
        ]
    },
    {
        "slug": "samosa",
        "name": "Samosa",
        "cuisine": "North Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "71 g",
            "calories": 190,
            "totalFat": { "value": 10, "percent": 13 },
            "saturatedFat": { "value": 4, "percent": 20 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 397, "percent": 17 },
            "totalCarbohydrate": { "value": 21, "percent": 8 },
            "dietaryFiber": { "value": 2, "percent": 7 },
            "sugars": { "value": 1 },
            "protein": { "value": 4 }
        },
        "nutritionSummary": {
            "calories": 190,
            "fat": "10g",
            "carbs": "21g",
            "protein": "4g",
            "summaryText": "There are 190 calories in 1 piece (71 g) of Deep Samosa.",
            "breakdown": "47% fat, 44% carbs, 8% protein."
        },
        "servingSizes": [
            { "size": "71 g", "calories": 190 }
        ]
    },
    {
        "slug": "vegetable-manchurian",
        "name": "Vegetable Manchurian",
        "cuisine": "Generic",
        "mealCategory": "Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "142 g",
            "calories": 140,
            "totalFat": { "value": 8, "percent": 10 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 560, "percent": 24 },
            "totalCarbohydrate": { "value": 15, "percent": 5 },
            "dietaryFiber": { "value": 1, "percent": 4 },
            "sugars": { "value": 3 },
            "protein": { "value": 3 }
        },
        "nutritionSummary": {
            "calories": 140,
            "fat": "8g",
            "carbs": "15g",
            "protein": "3g",
            "summaryText": "There are 140 calories in 1 serving (142 g) of Deep Vegetable Manchurian.",
            "breakdown": "50% fat, 42% carbs, 8% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 99 },
            { "size": "142 g", "calories": 140 }
        ]
    },
    {
        "slug": "chapati-deep",
        "name": "Chapati (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Lunch",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "24 g",
            "calories": 60,
            "totalFat": { "value": 0.5, "percent": 1 },
            "saturatedFat": { "value": 0, "percent": 0 },
            "transFat": { "value": 0 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 109, "percent": 5 },
            "totalCarbohydrate": { "value": 12, "percent": 4 },
            "dietaryFiber": { "value": 2, "percent": 7 },
            "sugars": { "value": 0 },
            "protein": { "value": 2 }
        },
        "nutritionSummary": {
            "calories": 60,
            "fat": "0.5g",
            "carbs": "12g",
            "protein": "2g",
            "summaryText": "There are 60 calories in 1 serving (24 g) of Deep Chapati.",
            "breakdown": "7% fat, 79% carbs, 13% protein."
        },
        "servingSizes": [
            { "size": "24 g", "calories": 60 }
        ]
    },
    {
        "slug": "roti",
        "name": "Roti",
        "cuisine": "North Indian",
        "mealCategory": "Lunch",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "40 g",
            "calories": 106,
            "totalFat": { "value": 0.52, "percent": 1 },
            "saturatedFat": { "value": 0.091, "percent": 0 },
            "polyunsaturatedFat": { "value": 0.221 },
            "monounsaturatedFat": { "value": 0.063 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 195, "percent": 8 },
            "totalCarbohydrate": { "value": 22.32, "percent": 8 },
            "dietaryFiber": { "value": 2.8, "percent": 10 },
            "sugars": { "value": 0.11 },
            "protein": { "value": 3.84 },
            "calcium": { "value": 8, "percent": 1 },
            "iron": { "value": 1.24, "percent": 7 },
            "potassium": { "value": 96, "percent": 2 }
        },
        "nutritionSummary": {
            "calories": 106,
            "fat": "0.52g",
            "carbs": "22.32g",
            "protein": "3.84g",
            "summaryText": "There are 106 calories in 1 medium of Roti.",
            "breakdown": "4% fat, 82% carbs, 14% protein."
        },
        "servingSizes": [
            { "size": "30 g", "calories": 71 },
            { "size": "40 g", "calories": 106 },
            { "size": "52 g", "calories": 137 }
        ]
    },
    {
        "slug": "chicken-curry-deep",
        "name": "Chicken Curry (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Dinner",
        "foodGroup": "Meat",
        "nutritionFacts": {
            "servingSize": "255 g",
            "calories": 320,
            "totalFat": { "value": 11, "percent": 14 },
            "saturatedFat": { "value": 2.5, "percent": 13 },
            "cholesterol": { "value": 65, "percent": 22 },
            "sodium": { "value": 540, "percent": 23 },
            "totalCarbohydrate": { "value": 32, "percent": 12 },
            "dietaryFiber": { "value": 4, "percent": 14 },
            "sugars": { "value": 1 },
            "protein": { "value": 26 },
            "vitaminD": { "value": 0, "percent": 0 },
            "calcium": { "value": 40, "percent": 3 },
            "iron": { "value": 0, "percent": 0 },
            "potassium": { "value": 520, "percent": 11 }
        },
        "nutritionSummary": {
            "calories": 320,
            "fat": "11g",
            "carbs": "32g",
            "protein": "26g",
            "summaryText": "There are 320 calories in 1 tray (255 g) of Deep Chicken Curry.",
            "breakdown": "30% fat, 39% carbs, 31% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 125 },
            { "size": "255 g", "calories": 320 }
        ]
    },
    {
        "slug": "paneer-tikka-masala-deep",
        "name": "Paneer Tikka Masala (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Dinner",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "255 g",
            "calories": 390,
            "totalFat": { "value": 19, "percent": 24 },
            "saturatedFat": { "value": 7, "percent": 35 },
            "cholesterol": { "value": 30, "percent": 10 },
            "sodium": { "value": 580, "percent": 25 },
            "totalCarbohydrate": { "value": 41, "percent": 15 },
            "dietaryFiber": { "value": 3, "percent": 11 },
            "sugars": { "value": 5 },
            "protein": { "value": 16 },
            "vitaminD": { "value": 2, "percent": 9 },
            "calcium": { "value": 340, "percent": 26 },
            "iron": { "value": 0, "percent": 0 },
            "potassium": { "value": 420, "percent": 9 }
        },
        "nutritionSummary": {
            "calories": 390,
            "fat": "19g",
            "carbs": "41g",
            "protein": "16g",
            "summaryText": "There are 390 calories in 1 tray (255 g) of Deep Paneer Tikka Masala.",
            "breakdown": "43% fat, 41% carbs, 16% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 153 },
            { "size": "255 g", "calories": 390 }
        ]
    },
    {
        "slug": "bhakri-methi-deep",
        "name": "Bhakri Methi (Deep)",
        "cuisine": "Gujarati",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "28 g",
            "calories": 140,
            "totalFat": { "value": 7, "percent": 9 },
            "saturatedFat": { "value": 2.5, "percent": 13 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 190, "percent": 8 },
            "totalCarbohydrate": { "value": 16, "percent": 6 },
            "dietaryFiber": { "value": 1, "percent": 4 },
            "sugars": { "value": 1 },
            "protein": { "value": 3 },
            "calcium": { "value": 25, "percent": 2 },
            "iron": { "value": 1.5, "percent": 8 },
            "potassium": { "value": 100, "percent": 2 }
        },
        "nutritionSummary": {
            "calories": 140,
            "fat": "7g",
            "carbs": "16g",
            "protein": "3g",
            "summaryText": "There are 140 calories in 1 piece (28 g) of Deep Bhakri Methi.",
            "breakdown": "45% fat, 46% carbs, 9% protein."
        },
        "servingSizes": [
            { "size": "28 g", "calories": 140 }
        ]
    },
    {
        "slug": "puran-poli-deep",
        "name": "Puran Poli (Deep)",
        "cuisine": "Maharashtrian",
        "mealCategory": "Sweets, Candy & Desserts",
        "foodGroup": "Sweets, Candy & Desserts",
        "nutritionFacts": {
            "servingSize": "117 g",
            "calories": 350,
            "totalFat": { "value": 9, "percent": 12 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 102, "percent": 4 },
            "totalCarbohydrate": { "value": 57, "percent": 21 },
            "dietaryFiber": { "value": 6, "percent": 21 },
            "sugars": { "value": 4 },
            "protein": { "value": 10 }
        },
        "nutritionSummary": {
            "calories": 350,
            "fat": "9g",
            "carbs": "57g",
            "protein": "10g",
            "summaryText": "There are 350 calories in 1 piece (117 g) of Deep Puran Poli.",
            "breakdown": "23% fat, 65% carbs, 11% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 299 },
            { "size": "117 g", "calories": 350 }
        ]
    },
    {
        "slug": "jeera-khakhara-deep",
        "name": "Jeera Khakhara (Deep)",
        "cuisine": "Gujarati",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "40 g",
            "calories": 193,
            "totalFat": { "value": 9, "percent": 12 },
            "saturatedFat": { "value": 2, "percent": 10 },
            "transFat": { "value": 0 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 330, "percent": 14 },
            "totalCarbohydrate": { "value": 24, "percent": 9 },
            "dietaryFiber": { "value": 5, "percent": 18 },
            "sugars": { "value": 0 },
            "protein": { "value": 4 }
        },
        "nutritionSummary": {
            "calories": 193,
            "fat": "9g",
            "carbs": "24g",
            "protein": "4g",
            "summaryText": "There are 193 calories in 2 pieces (40 g) of Deep Jeera Khakhara.",
            "breakdown": "42% fat, 50% carbs, 8% protein."
        },
        "servingSizes": [
            { "size": "40 g", "calories": 193 }
        ]
    },
    {
        "slug": "dahi-vada-deep",
        "name": "Dahi Vada (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "54 g",
            "calories": 140,
            "totalFat": { "value": 8, "percent": 10 },
            "saturatedFat": { "value": 1.5, "percent": 8 },
            "transFat": { "value": 0 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 310, "percent": 13 },
            "totalCarbohydrate": { "value": 11, "percent": 4 },
            "dietaryFiber": { "value": 2, "percent": 7 },
            "sugars": { "value": 0 },
            "protein": { "value": 5 }
        },
        "nutritionSummary": {
            "calories": 140,
            "fat": "8g",
            "carbs": "11g",
            "protein": "5g",
            "summaryText": "There are 140 calories in 2 pieces (54 g) of Deep Dahi Vada.",
            "breakdown": "53% fat, 32% carbs, 15% protein."
        },
        "servingSizes": [
            { "size": "54 g", "calories": 140 }
        ]
    },
    {
        "slug": "mixed-vegetable-paratha-deep",
        "name": "Mixed Vegetable Paratha (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Lunch",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 310,
            "totalFat": { "value": 8, "percent": 10 },
            "saturatedFat": { "value": 2, "percent": 10 },
            "transFat": { "value": 0 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 490, "percent": 21 },
            "totalCarbohydrate": { "value": 52, "percent": 19 },
            "dietaryFiber": { "value": 4, "percent": 14 },
            "sugars": { "value": 3 },
            "protein": { "value": 8 },
            "potassium": { "value": 0, "percent": 0 }
        },
        "nutritionSummary": {
            "calories": 310,
            "fat": "8g",
            "carbs": "52g",
            "protein": "8g",
            "summaryText": "There are 310 calories in 1 piece (100 g) of Deep Mixed Vegetable Paratha.",
            "breakdown": "23% fat, 67% carbs, 10% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 310 }
        ]
    },
    {
        "slug": "masala-dosa-deep",
        "name": "Masala Dosa (Deep)",
        "cuisine": "South Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "99 g",
            "calories": 230,
            "totalFat": { "value": 13, "percent": 17 },
            "saturatedFat": { "value": 4, "percent": 20 },
            "transFat": { "value": 0 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 550, "percent": 24 },
            "totalCarbohydrate": { "value": 25, "percent": 9 },
            "dietaryFiber": { "value": 3, "percent": 11 },
            "sugars": { "value": 3 },
            "protein": { "value": 3 },
            "vitaminD": { "value": 0, "percent": 0 },
            "calcium": { "value": 60, "percent": 5 },
            "iron": { "value": 2.2, "percent": 12 },
            "potassium": { "value": 140, "percent": 3 },
            "vitaminA": { "value": 0, "percent": 0 },
            "vitaminC": { "value": 0, "percent": 0 }
        },
        "nutritionSummary": {
            "calories": 230,
            "fat": "13g",
            "carbs": "25g",
            "protein": "3g",
            "summaryText": "There are 230 calories in 1 piece (99 g) of Deep Masala Dosa.",
            "breakdown": "51% fat, 44% carbs, 5% protein."
        },
        "servingSizes": [
            { "size": "99 g", "calories": 230 }
        ]
    },
    {
        "slug": "multigrain-bread",
        "name": "Multigrain Bread",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "26 g",
            "calories": 65,
            "totalFat": { "value": 0.99, "percent": 1 },
            "saturatedFat": { "value": 0.21, "percent": 1 },
            "polyunsaturatedFat": { "value": 0.24 },
            "monounsaturatedFat": { "value": 0.396 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 127, "percent": 6 },
            "totalCarbohydrate": { "value": 12.06, "percent": 4 },
            "dietaryFiber": { "value": 1.7, "percent": 6 },
            "sugars": { "value": 2.61 },
            "protein": { "value": 2.6 },
            "calcium": { "value": 24, "percent": 2 },
            "iron": { "value": 0.9, "percent": 5 },
            "potassium": { "value": 53, "percent": 1 },
            "vitaminC": { "value": 0.1, "percent": 0 }
        },
        "nutritionSummary": {
            "calories": 65,
            "fat": "0.99g",
            "carbs": "12.06g",
            "protein": "2.6g",
            "summaryText": "There are 65 calories in 1 regular slice of Multigrain Bread.",
            "breakdown": "13% fat, 71% carbs, 15% protein."
        },
        "servingSizes": [
            { "size": "26 g", "calories": 65 },
            { "size": "100 g", "calories": 251 }
        ]
    },
    {
        "slug": "white-bread",
        "name": "White Bread",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 266,
            "totalFat": { "value": 3.29, "percent": 4 },
            "saturatedFat": { "value": 0.717, "percent": 4 },
            "polyunsaturatedFat": { "value": 1.355 },
            "monounsaturatedFat": { "value": 0.681 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 681, "percent": 30 },
            "totalCarbohydrate": { "value": 50.61, "percent": 18 },
            "dietaryFiber": { "value": 2.4, "percent": 9 },
            "sugars": { "value": 4.31 },
            "protein": { "value": 7.64 },
            "calcium": { "value": 151, "percent": 12 },
            "iron": { "value": 3.74, "percent": 21 },
            "potassium": { "value": 100, "percent": 2 }
        },
        "nutritionSummary": {
            "calories": 266,
            "fat": "3.29g",
            "carbs": "50.61g",
            "protein": "7.64g",
            "summaryText": "There are 266 calories in 100 grams of White Bread.",
            "breakdown": "11% fat, 77% carbs, 12% protein."
        },
        "servingSizes": [
            { "size": "25 g", "calories": 66 },
            { "size": "100 g", "calories": 266 }
        ]
    },
    {
        "slug": "aloo-paratha-deep",
        "name": "Aloo Paratha (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "95 g",
            "calories": 290,
            "totalFat": { "value": 10, "percent": 13 },
            "saturatedFat": { "value": 3, "percent": 15 },
            "transFat": { "value": 0 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 450, "percent": 20 },
            "totalCarbohydrate": { "value": 43, "percent": 16 },
            "dietaryFiber": { "value": 3, "percent": 11 },
            "sugars": { "value": 2 },
            "protein": { "value": 7 },
            "vitaminD": { "value": 0, "percent": 0 },
            "calcium": { "value": 50, "percent": 4 },
            "iron": { "value": 3.3, "percent": 18 },
            "potassium": { "value": 300, "percent": 6 },
            "vitaminC": { "value": 0, "percent": 0 }
        },
        "nutritionSummary": {
            "calories": 290,
            "fat": "10g",
            "carbs": "43g",
            "protein": "7g",
            "summaryText": "There are 290 calories in 1 piece (95 g) of Deep Aloo Paratha.",
            "breakdown": "31% fat, 59% carbs, 10% protein."
        },
        "servingSizes": [
            { "size": "95 g", "calories": 290 }
        ]
    },
    {
        "slug": "paneer-paratha-deep",
        "name": "Paneer Paratha (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "92 g",
            "calories": 290,
            "totalFat": { "value": 11, "percent": 14 },
            "saturatedFat": { "value": 7, "percent": 35 },
            "cholesterol": { "value": 10, "percent": 3 },
            "sodium": { "value": 160, "percent": 7 },
            "totalCarbohydrate": { "value": 40, "percent": 15 },
            "dietaryFiber": { "value": 6, "percent": 21 },
            "sugars": { "value": 1 },
            "protein": { "value": 7 },
            "calcium": { "value": 0, "percent": 0 },
            "iron": { "value": 3.8, "percent": 21 },
            "potassium": { "value": 280, "percent": 6 }
        },
        "nutritionSummary": {
            "calories": 290,
            "fat": "11g",
            "carbs": "40g",
            "protein": "7g",
            "summaryText": "There are 290 calories in 1 piece (92 g) of Deep Paneer Paratha.",
            "breakdown": "34% fat, 56% carbs, 10% protein."
        },
        "servingSizes": [
            { "size": "92 g", "calories": 290 }
        ]
    },
    {
        "slug": "paneer-kulcha-deep",
        "name": "Paneer Kulcha (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Lunch",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "60 g",
            "calories": 200,
            "totalFat": { "value": 7, "percent": 9 },
            "saturatedFat": { "value": 2.5, "percent": 13 },
            "cholesterol": { "value": 5, "percent": 2 },
            "sodium": { "value": 270, "percent": 12 },
            "totalCarbohydrate": { "value": 26, "percent": 9 },
            "dietaryFiber": { "value": 1, "percent": 4 },
            "sugars": { "value": 2 },
            "protein": { "value": 8 }
        },
        "nutritionSummary": {
            "calories": 200,
            "fat": "7g",
            "carbs": "26g",
            "protein": "8g",
            "summaryText": "There are 200 calories in 1 kulcha (60 g) of Deep Paneer Kulcha.",
            "breakdown": "32% fat, 52% carbs, 16% protein."
        },
        "servingSizes": [
            { "size": "60 g", "calories": 200 }
        ]
    },
    {
        "slug": "malai-kofta-deep",
        "name": "Malai Kofta (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Dinner",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "142 g",
            "calories": 250,
            "totalFat": { "value": 21, "percent": 27 },
            "saturatedFat": { "value": 8, "percent": 40 },
            "cholesterol": { "value": 35, "percent": 12 },
            "sodium": { "value": 650, "percent": 28 },
            "totalCarbohydrate": { "value": 13, "percent": 5 },
            "dietaryFiber": { "value": 1, "percent": 4 },
            "sugars": { "value": 2 },
            "protein": { "value": 4 }
        },
        "nutritionSummary": {
            "calories": 250,
            "fat": "21g",
            "carbs": "13g",
            "protein": "4g",
            "summaryText": "There are 250 calories in 5 oz (142 g) of Deep Malai Kofta.",
            "breakdown": "74% fat, 20% carbs, 6% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 176 },
            { "size": "142 g", "calories": 250 }
        ]
    },
    {
        "slug": "navrattan-korma-deep",
        "name": "Navrattan Korma (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Dinner",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "142 g",
            "calories": 140,
            "totalFat": { "value": 10, "percent": 13 },
            "saturatedFat": { "value": 4, "percent": 20 },
            "cholesterol": { "value": 20, "percent": 7 },
            "sodium": { "value": 490, "percent": 21 },
            "totalCarbohydrate": { "value": 11, "percent": 4 },
            "dietaryFiber": { "value": 2, "percent": 7 },
            "sugars": { "value": 2 },
            "protein": { "value": 4 }
        },
        "nutritionSummary": {
            "calories": 140,
            "fat": "10g",
            "carbs": "11g",
            "protein": "4g",
            "summaryText": "There are 140 calories in 5 oz (142 g) of Deep Navrattan Korma.",
            "breakdown": "60% fat, 29% carbs, 11% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 99 },
            { "size": "142 g", "calories": 140 }
        ]
    },
    {
        "slug": "spinach-paneer-deep",
        "name": "Spinach Paneer (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "255 g",
            "calories": 310,
            "totalFat": { "value": 17, "percent": 22 },
            "saturatedFat": { "value": 7, "percent": 35 },
            "cholesterol": { "value": 25, "percent": 8 },
            "sodium": { "value": 490, "percent": 21 },
            "totalCarbohydrate": { "value": 30, "percent": 11 },
            "dietaryFiber": { "value": 3, "percent": 11 },
            "sugars": { "value": 3 },
            "protein": { "value": 13 },
            "vitaminD": { "value": 1, "percent": 5 },
            "calcium": { "value": 240, "percent": 18 },
            "iron": { "value": 1.7, "percent": 9 },
            "potassium": { "value": 330, "percent": 7 }
        },
        "nutritionSummary": {
            "calories": 310,
            "fat": "17g",
            "carbs": "30g",
            "protein": "13g",
            "summaryText": "There are 310 calories in 1 tray (255 g) of Deep Spinach Paneer.",
            "breakdown": "47% fat, 37% carbs, 16% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 122 },
            { "size": "255 g", "calories": 310 }
        ]
    },
    {
        "slug": "rajma-deep",
        "name": "Rajma (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Lunch",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "141 g",
            "calories": 180,
            "totalFat": { "value": 10, "percent": 13 },
            "saturatedFat": { "value": 3.5, "percent": 18 },
            "cholesterol": { "value": 15, "percent": 5 },
            "sodium": { "value": 430, "percent": 19 },
            "totalCarbohydrate": { "value": 17, "percent": 6 },
            "dietaryFiber": { "value": 4, "percent": 14 },
            "sugars": { "value": 1 },
            "protein": { "value": 6 }
        },
        "nutritionSummary": {
            "calories": 180,
            "fat": "10g",
            "carbs": "17g",
            "protein": "6g",
            "summaryText": "There are 180 calories in 3/4 cup (141 g) of Deep Shahi Rajma.",
            "breakdown": "49% fat, 37% carbs, 13% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 128 },
            { "size": "141 g", "calories": 180 }
        ]
    },
    {
        "slug": "tandoori-naan-deep",
        "name": "Tandoori Naan (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Lunch",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "85 g",
            "calories": 250,
            "totalFat": { "value": 2.5, "percent": 3 },
            "saturatedFat": { "value": 1, "percent": 5 },
            "transFat": { "value": 0 },
            "cholesterol": { "value": 5, "percent": 2 },
            "sodium": { "value": 350, "percent": 15 },
            "totalCarbohydrate": { "value": 50, "percent": 18 },
            "dietaryFiber": { "value": 3, "percent": 11 },
            "sugars": { "value": 2 },
            "protein": { "value": 6 },
            "vitaminD": { "value": 0, "percent": 1 },
            "calcium": { "value": 80, "percent": 6 },
            "iron": { "value": 2.6, "percent": 14 },
            "potassium": { "value": 100, "percent": 2 }
        },
        "nutritionSummary": {
            "calories": 250,
            "fat": "2.5g",
            "carbs": "50g",
            "protein": "6g",
            "summaryText": "There are 250 calories in 1 piece (85 g) of Deep Tandoori Naan.",
            "breakdown": "9% fat, 81% carbs, 10% protein."
        },
        "servingSizes": [
            { "size": "85 g", "calories": 250 }
        ]
    },
    {
        "slug": "garlic-naan-deep",
        "name": "Garlic Naan (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Lunch",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "75 g",
            "calories": 200,
            "totalFat": { "value": 3.5, "percent": 4 },
            "saturatedFat": { "value": 1.5, "percent": 8 },
            "transFat": { "value": 0 },
            "cholesterol": { "value": 5, "percent": 2 },
            "sodium": { "value": 220, "percent": 10 },
            "totalCarbohydrate": { "value": 36, "percent": 13 },
            "dietaryFiber": { "value": 2, "percent": 7 },
            "sugars": { "value": 2 },
            "protein": { "value": 7 },
            "vitaminD": { "value": 0, "percent": 0 },
            "calcium": { "value": 60, "percent": 5 },
            "iron": { "value": 2.9, "percent": 16 },
            "potassium": { "value": 130, "percent": 3 }
        },
        "nutritionSummary": {
            "calories": 200,
            "fat": "3.5g",
            "carbs": "36g",
            "protein": "7g",
            "summaryText": "There are 200 calories in 1 piece (75 g) of Deep Garlic Naan.",
            "breakdown": "15% fat, 71% carbs, 14% protein."
        },
        "servingSizes": [
            { "size": "75 g", "calories": 200 }
        ]
    },
    {
        "slug": "bhatura-deep",
        "name": "Bhatura (Deep)",
        "cuisine": "North Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "62 g",
            "calories": 220,
            "totalFat": { "value": 9, "percent": 12 },
            "saturatedFat": { "value": 2.5, "percent": 13 },
            "transFat": { "value": 0 },
            "cholesterol": { "value": 0, "percent": 0 },
            "sodium": { "value": 330, "percent": 14 },
            "totalCarbohydrate": { "value": 28, "percent": 10 },
            "dietaryFiber": { "value": 2, "percent": 7 },
            "sugars": { "value": 1 },
            "protein": { "value": 7 },
            "calcium": { "value": 50, "percent": 4 },
            "iron": { "value": 1.2, "percent": 7 },
            "potassium": { "value": 0, "percent": 0 }
        },
        "nutritionSummary": {
            "calories": 220,
            "fat": "9g",
            "carbs": "28g",
            "protein": "7g",
            "summaryText": "There are 220 calories in 1 piece (62 g) of Deep Bhatura.",
            "breakdown": "37% fat, 51% carbs, 13% protein."
        },
        "servingSizes": [
            { "size": "62 g", "calories": 220 }
        ]
    }
]
