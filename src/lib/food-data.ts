
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
    cuisine: 'Maharashtrian' | 'Gujarati' | 'North Indian' | 'Generic' | 'South Indian' | 'Punjabi' | 'Bengali' | 'Jain' | 'Indian';
    mealCategory: 'Breakfast' | 'Lunch' | 'Dinner' | 'Snack' | 'Beverages' | 'Other' | 'Soups'| 'Sweets, Candy & Desserts' | 'Lunch/Dinner';
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
            "potassium": { "value": 13.95 },
            "vitaminC": { "value": 0.24, "percent": 0 },
            "folate": { "value": 0.86 }
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
            { "size": "210 ml", "calories": 34 }
        ]
    },
    {
        "slug": "instant-coffee",
        "name": "Instant coffee",
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
            "potassium": { "value": 44.50 },
            "vitaminC": { "value": 0.34, "percent": 0 },
            "folate": { "value": 1.25 }
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
            { "size": "450 ml", "calories": 104 }
        ]
    },
    {
        "slug": "espreso-coffee",
        "name": "Espreso coffee",
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
            "potassium": { "value": 103.86 },
            "vitaminC": { "value": 0.95, "percent": 1 },
            "folate": { "value": 3.49 }
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
            { "size": "158 ml", "calories": 82 }
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
            "potassium": { "value": 5.22 },
            "vitaminC": { "value": 5.95, "percent": 7 },
            "folate": { "value": 0.40 }
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
            { "size": "320 ml", "calories": 33 }
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
            "potassium": { "value": 31.45 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 16.87, "percent": 19 },
            "folate": { "value": 5.23 }
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
            { "size": "268 ml", "calories": 96 }
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
            "potassium": { "value": 33.43 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 7.61, "percent": 8 },
            "folate": { "value": 4.51 }
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
            { "size": "544 ml", "calories": 197 }
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
            "potassium": { "value": 16.65 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 3.00, "percent": 3 },
            "folate": { "value": 1.82 }
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
            { "size": "503 ml", "calories": 116 }
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
            "potassium": { "value": 5.73 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 1.51, "percent": 2 },
            "folate": { "value": 0.60 }
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
            { "size": "350 ml", "calories": 73 }
        ]
    },
    {
        "slug": "lem-o-gin",
        "name": "Lem-o-gin",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 22,
            "totalFat": { "value": 0.03 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 28.13 },
            "totalCarbohydrate": { "value": 5.55 },
            "dietaryFiber": { "value": 0.13 },
            "sugars": { "value": 5.38 },
            "protein": { "value": 0.08 },
            "calcium": { "value": 2.2 },
            "iron": { "value": 0.09 },
            "potassium": { "value": 14.17 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 1.59, "percent": 2 },
            "folate": { "value": 0.82 }
        },
        "nutritionSummary": {
            "calories": 22,
            "fat": "0.0g",
            "carbs": "5.6g",
            "protein": "0.1g",
            "summaryText": "A serving of Lem-o-gin.",
            "breakdown": "1% fat, 97% carbs, 1% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 22 },
            { "size": "357 ml", "calories": 77 }
        ]
    },
    {
        "slug": "cumin-infused-water-jeere/zeere-ka-pani",
        "name": "Cumin infused water (Jeere/Zeere ka pani)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 9,
            "totalFat": { "value": 0.11 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 189.6 },
            "totalCarbohydrate": { "value": 1.86 },
            "dietaryFiber": { "value": 0.46 },
            "sugars": { "value": 1.46 },
            "protein": { "value": 0.17 },
            "calcium": { "value": 10.84 },
            "iron": { "value": 0.32 },
            "potassium": { "value": 32.15 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 1.07, "percent": 1 },
            "folate": { "value": 0.93 }
        },
        "nutritionSummary": {
            "calories": 9,
            "fat": "0.1g",
            "carbs": "1.9g",
            "protein": "0.2g",
            "summaryText": "A serving of Cumin infused water.",
            "breakdown": "54% fat, 38% carbs, 8% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 9 },
            { "size": "339 ml", "calories": 31 }
        ]
    },
    {
        "slug": "coco-pine-cooler",
        "name": "Coco pine cooler",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 33,
            "totalFat": { "value": 1.00 },
            "cholesterol": { "value": 3.4 },
            "sodium": { "value": 23.2 },
            "totalCarbohydrate": { "value": 5.72 },
            "dietaryFiber": { "value": 0.26 },
            "sugars": { "value": 5.52 },
            "protein": { "value": 0.56 },
            "calcium": { "value": 17.81 },
            "iron": { "value": 0.13 },
            "potassium": { "value": 66.65 },
            "vitaminA": { "value": 10.53, "percent": 1 },
            "vitaminC": { "value": 2.47, "percent": 3 },
            "folate": { "value": 2.92 }
        },
        "nutritionSummary": {
            "calories": 33,
            "fat": "1.0g",
            "carbs": "5.7g",
            "protein": "0.6g",
            "summaryText": "A serving of Coco pine cooler.",
            "breakdown": "27% fat, 69% carbs, 4% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 33 },
            { "size": "432 ml", "calories": 142 }
        ]
    },
    {
        "slug": "summer-cooler",
        "name": "Summer cooler",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 22,
            "totalFat": { "value": 0.04 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 1.57 },
            "totalCarbohydrate": { "value": 5.43 },
            "dietaryFiber": { "value": 0.20 },
            "sugars": { "value": 5.21 },
            "protein": { "value": 0.37 },
            "calcium": { "value": 8.13 },
            "iron": { "value": 0.28 },
            "potassium": { "value": 93.06 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 20.92, "percent": 23 },
            "folate": { "value": 12.92 }
        },
        "nutritionSummary": {
            "calories": 22,
            "fat": "0.0g",
            "carbs": "5.4g",
            "protein": "0.4g",
            "summaryText": "A serving of Summer cooler.",
            "breakdown": "1% fat, 92% carbs, 6% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 22 },
            { "size": "495 ml", "calories": 111 }
        ]
    },
    {
        "slug": "hot-cocoa",
        "name": "Hot cocoa",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 90,
            "totalFat": { "value": 4.56 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 24.2 },
            "totalCarbohydrate": { "value": 9.23 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 9.01 },
            "protein": { "value": 3.36 },
            "calcium": { "value": 113.66 },
            "iron": { "value": 0.31 },
            "potassium": { "value": 132.15 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 1.89, "percent": 2 },
            "folate": { "value": 7.22 }
        },
        "nutritionSummary": {
            "calories": 90,
            "fat": "4.6g",
            "carbs": "9.2g",
            "protein": "3.4g",
            "summaryText": "A serving of Hot cocoa.",
            "breakdown": "45% fat, 40% carbs, 15% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 90 },
            { "size": "191 ml", "calories": 172 }
        ]
    },
    {
        "slug": "cold-coffee-with-ice-cream",
        "name": "Cold coffee with ice cream",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 68,
            "totalFat": { "value": 2.11 },
            "cholesterol": { "value": 1.17 },
            "sodium": { "value": 13.84 },
            "totalCarbohydrate": { "value": 11.24 },
            "dietaryFiber": { "value": 0.01 },
            "sugars": { "value": 11.18 },
            "protein": { "value": 1.57 },
            "calcium": { "value": 53.29 },
            "iron": { "value": 0.12 },
            "potassium": { "value": 90.27 },
            "vitaminA": { "value": 3.62, "percent": 0 },
            "vitaminC": { "value": 0.84, "percent": 1 },
            "folate": { "value": 3.15 }
        },
        "nutritionSummary": {
            "calories": 68,
            "fat": "2.1g",
            "carbs": "11.2g",
            "protein": "1.6g",
            "summaryText": "A serving of Cold coffee with ice cream.",
            "breakdown": "28% fat, 66% carbs, 7% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 68 },
            { "size": "301 ml", "calories": 205 }
        ]
    },
    {
        "slug": "banana-milkshake-kele-milkshake",
        "name": "Banana milkshake (Kele milkshake)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 65,
            "totalFat": { "value": 2.37 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 13.61 },
            "totalCarbohydrate": { "value": 9.15 },
            "dietaryFiber": { "value": 0.26 },
            "sugars": { "value": 7.96 },
            "protein": { "value": 1.84 },
            "calcium": { "value": 62.64 },
            "iron": { "value": 0.13 },
            "potassium": { "value": 102.43 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 1.98, "percent": 2 },
            "folate": { "value": 5.74 }
        },
        "nutritionSummary": {
            "calories": 65,
            "fat": "2.4g",
            "carbs": "9.2g",
            "protein": "1.8g",
            "summaryText": "A serving of Banana milkshake.",
            "breakdown": "33% fat, 56% carbs, 11% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 65 },
            { "size": "346 ml", "calories": 226 }
        ]
    },
    {
        "slug": "mango-milkshake-aam-milkshake",
        "name": "Mango milkshake (Aam milkshake)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 57,
            "totalFat": { "value": 2.35 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 13.27 },
            "totalCarbohydrate": { "value": 7.23 },
            "dietaryFiber": { "value": 0.26 },
            "sugars": { "value": 7.15 },
            "protein": { "value": 1.73 },
            "calcium": { "value": 62.33 },
            "iron": { "value": 0.15 },
            "potassium": { "value": 79.07 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 5.65, "percent": 6 },
            "folate": { "value": 15.10 }
        },
        "nutritionSummary": {
            "calories": 57,
            "fat": "2.4g",
            "carbs": "7.2g",
            "protein": "1.7g",
            "summaryText": "A serving of Mango milkshake.",
            "breakdown": "37% fat, 51% carbs, 12% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 57 },
            { "size": "355 ml", "calories": 202 }
        ]
    },
    {
        "slug": "pineapple-milkshake-ananas-milkshake",
        "name": "Pineapple milkshake (Ananas milkshake)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 56,
            "totalFat": { "value": 2.23 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 14.05 },
            "totalCarbohydrate": { "value": 7.62 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 7.60 },
            "protein": { "value": 1.66 },
            "calcium": { "value": 59.92 },
            "iron": { "value": 0.11 },
            "potassium": { "value": 65.68 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 2.80, "percent": 3 },
            "folate": { "value": 4.79 }
        },
        "nutritionSummary": {
            "calories": 56,
            "fat": "2.2g",
            "carbs": "7.6g",
            "protein": "1.7g",
            "summaryText": "A serving of Pineapple milkshake.",
            "breakdown": "36% fat, 54% carbs, 11% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 56 },
            { "size": "365 ml", "calories": 203 }
        ]
    },
    {
        "slug": "orange-milkshake-narangi-milkshake",
        "name": "Orange milkshake (Narangi milkshake)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 57,
            "totalFat": { "value": 2.52 },
            "cholesterol": { "value": 0 },
            "sodium": { "value": 14.63 },
            "totalCarbohydrate": { "value": 7.11 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 7.08 },
            "protein": { "value": 1.86 },
            "calcium": { "value": 67.42 },
            "iron": { "value": 0.11 },
            "potassium": { "value": 73.43 },
            "vitaminA": { "value": 0.00, "percent": 0 },
            "vitaminC": { "value": 3.39, "percent": 4 },
            "folate": { "value": 5.28 }
        },
        "nutritionSummary": {
            "calories": 57,
            "fat": "2.5g",
            "carbs": "7.1g",
            "protein": "1.9g",
            "summaryText": "A serving of Orange milkshake.",
            "breakdown": "39% fat, 49% carbs, 12% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 57 },
            { "size": "319 ml", "calories": 183 }
        ]
    },
    {
        "slug": "egg-nog",
        "name": "Egg nog",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 97,
            "totalFat": { "value": 5.11 },
            "cholesterol": { "value": 60.3 },
            "sodium": { "value": 40.65 },
            "totalCarbohydrate": { "value": 8.15 },
            "dietaryFiber": { "value": 0.02 },
            "sugars": { "value": 8.06 },
            "protein": { "value": 4.78 },
            "calcium": { "value": 102.13 },
            "iron": { "value": 0.43 },
            "potassium": { "value": 115.14 },
            "vitaminA": { "value": 32.62, "percent": 4 },
            "vitaminC": { "value": 1.59, "percent": 2 },
            "folate": { "value": 13.81 }
        },
        "nutritionSummary": {
            "calories": 97,
            "fat": "5.1g",
            "carbs": "8.2g",
            "protein": "4.8g",
            "summaryText": "A serving of Egg nog.",
            "breakdown": "47% fat, 33% carbs, 19% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 97 },
            { "size": "304 ml", "calories": 295 }
        ]
    },
    {
        "slug": "sweet-lassi-meethi-lassi",
        "name": "Sweet Lassi (Meethi lassi)",
        "cuisine": "Punjabi",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 36,
            "totalFat": { "value": 0.68 },
            "cholesterol": { "value": 2.49 },
            "sodium": { "value": 18.31 },
            "totalCarbohydrate": { "value": 6.51 },
            "dietaryFiber": { "value": 0 },
            "sugars": { "value": 6.51 },
            "protein": { "value": 1.29 },
            "calcium": { "value": 45.65 },
            "iron": { "value": 0.03 },
            "potassium": { "value": 63.50 },
            "vitaminA": { "value": 6.33, "percent": 1 },
            "vitaminC": { "value": 0.23, "percent": 0 },
            "folate": { "value": 4.07 }
        },
        "nutritionSummary": {
            "calories": 36,
            "fat": "0.7g",
            "carbs": "6.5g",
            "protein": "1.3g",
            "summaryText": "A serving of Sweet Lassi.",
            "breakdown": "17% fat, 73% carbs, 15% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 36 },
            { "size": "450 ml", "calories": 158 }
        ]
    },
    {
        "slug": "lassi-salted",
        "name": "Lassi (salted)",
        "cuisine": "Punjabi",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 ml",
            "calories": 19,
            "totalFat": { "value": 0.72 },
            "cholesterol": { "value": 2.6 },
            "sodium": { "value": 65.4 },
            "totalCarbohydrate": { "value": 1.86 },
            "dietaryFiber": { "value": 0.02 },
            "sugars": { "value": 1.84 },
            "protein": { "value": 1.35 },
            "calcium": { "value": 47.78 },
            "iron": { "value": 0.04 },
            "potassium": { "value": 67.37 },
            "vitaminA": { "value": 6.62, "percent": 1 },
            "vitaminC": { "value": 0.24, "percent": 0 },
            "folate": { "value": 4.27 }
        },
        "nutritionSummary": {
            "calories": 19,
            "fat": "0.7g",
            "carbs": "1.9g",
            "protein": "1.4g",
            "summaryText": "A serving of Lassi (salted).",
            "breakdown": "34% fat, 39% carbs, 28% protein."
        },
        "servingSizes": [
            { "size": "100 ml", "calories": 19 },
            { "size": "423 ml", "calories": 80 }
        ]
    },
    {
        "slug": "cheese-and-chilli-sandwich",
        "name": "Cheese and chilli sandwich ",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 218,
            "totalFat": { "value": 9.78 },
            "cholesterol": { "value": 23.05 },
            "sodium": { "value": 437.5 },
            "totalCarbohydrate": { "value": 27.4 },
            "dietaryFiber": { "value": 2.08 },
            "sugars": { "value": 2.38 },
            "protein": { "value": 6.8 },
            "calcium": { "value": 113.79 },
            "iron": { "value": 0.99 },
            "potassium": { "value": 142.31 },
            "vitaminA": { "value": 97.40, "percent": 11 },
            "vitaminC": { "value": 22.06, "percent": 24 },
            "folate": { "value": 28.95 }
        },
        "nutritionSummary": {
            "calories": 218,
            "fat": "9.8g",
            "carbs": "27.4g",
            "protein": "6.8g",
            "summaryText": "A serving of Cheese and chilli sandwich.",
            "breakdown": "40% fat, 50% carbs, 10% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 218 },
            { "size": "56 g", "calories": 122 }
        ]
    },
    {
        "slug": "egg-sandwich-ande-ka-sandwich",
        "name": "Egg sandwich (Ande ka sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 286,
            "totalFat": { "value": 15.8 },
            "cholesterol": { "value": 121.63 },
            "sodium": { "value": 461.67 },
            "totalCarbohydrate": { "value": 29.16 },
            "dietaryFiber": { "value": 1.88 },
            "sugars": { "value": 1.86 },
            "protein": { "value": 8.69 },
            "calcium": { "value": 110.13 },
            "iron": { "value": 1.44 },
            "potassium": { "value": 129.59 },
            "vitaminA": { "value": 190.34, "percent": 21 },
            "vitaminC": { "value": 0.00, "percent": 0 },
            "folate": { "value": 29.40 }
        },
        "nutritionSummary": {
            "calories": 286,
            "fat": "15.8g",
            "carbs": "29.2g",
            "protein": "8.7g",
            "summaryText": "A serving of Egg sandwich.",
            "breakdown": "50% fat, 41% carbs, 9% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 286 },
            { "size": "51 g", "calories": 145 }
        ]
    },
    {
        "slug": "cucumber-sandwich-kheere-ka-sandwich",
        "name": "Cucumber sandwich (Kheere ka sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 189,
            "totalFat": { "value": 8.00 },
            "cholesterol": { "value": 17.53 },
            "sodium": { "value": 362.64 },
            "totalCarbohydrate": { "value": 25.77 },
            "dietaryFiber": { "value": 2.45 },
            "sugars": { "value": 1.64 },
            "protein": { "value": 4.8 },
            "calcium": { "value": 87.84 },
            "iron": { "value": 1.02 },
            "potassium": { "value": 154.06 },
            "vitaminA": { "value": 78.85, "percent": 9 },
            "vitaminC": { "value": 2.51, "percent": 3 },
            "folate": { "value": 21.34 }
        },
        "nutritionSummary": {
            "calories": 189,
            "fat": "8.0g",
            "carbs": "25.8g",
            "protein": "4.8g",
            "summaryText": "A serving of Cucumber sandwich.",
            "breakdown": "38% fat, 54% carbs, 8% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 189 },
            { "size": "61 g", "calories": 115 }
        ]
    },
    {
        "slug": "cheese-and-pineapple-sandwich-cheese-aur-ananas-ka-sandwich",
        "name": "Cheese and pineapple sandwich (Cheese aur ananas ka sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 258,
            "totalFat": { "value": 12.8 },
            "cholesterol": { "value": 34.35 },
            "sodium": { "value": 571.96 },
            "totalCarbohydrate": { "value": 29.1 },
            "dietaryFiber": { "value": 2.33 },
            "sugars": { "value": 4.10 },
            "protein": { "value": 8.2 },
            "calcium": { "value": 199.73 },
            "iron": { "value": 1.04 },
            "potassium": { "value": 143.39 },
            "vitaminA": { "value": 134.35, "percent": 15 },
            "vitaminC": { "value": 6.52, "percent": 7 },
            "folate": { "value": 21.66 }
        },
        "nutritionSummary": {
            "calories": 258,
            "fat": "12.8g",
            "carbs": "29.1g",
            "protein": "8.2g",
            "summaryText": "A serving of Cheese and pineapple sandwich.",
            "breakdown": "45% fat, 45% carbs, 10% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 258 },
            { "size": "56 g", "calories": 144 }
        ]
    },
    {
        "slug": "cheese-and-tomato-sandwich-cheese-aur-tamatar-ke-sandwich",
        "name": "Cheese and tomato sandwich (Cheese aur tamatar ke sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 243,
            "totalFat": { "value": 12.27 },
            "cholesterol": { "value": 32.88 },
            "sodium": { "value": 549.71 },
            "totalCarbohydrate": { "value": 26.92 },
            "dietaryFiber": { "value": 1.97 },
            "sugars": { "value": 2.85 },
            "protein": { "value": 7.92 },
            "calcium": { "value": 191.2 },
            "iron": { "value": 1.00 },
            "potassium": { "value": 148.52 },
            "vitaminA": { "value": 128.58, "percent": 14 },
            "vitaminC": { "value": 5.42, "percent": 6 },
            "folate": { "value": 20.91 }
        },
        "nutritionSummary": {
            "calories": 243,
            "fat": "12.3g",
            "carbs": "26.9g",
            "protein": "7.9g",
            "summaryText": "A serving of Cheese and tomato sandwich.",
            "breakdown": "45% fat, 44% carbs, 11% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 243 },
            { "size": "58 g", "calories": 142 }
        ]
    },
    {
        "slug": "chicken-sandwich",
        "name": "Chicken sandwich",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 253,
            "totalFat": { "value": 11.75 },
            "cholesterol": { "value": 42.06 },
            "sodium": { "value": 389.67 },
            "totalCarbohydrate": { "value": 25.38 },
            "dietaryFiber": { "value": 1.64 },
            "sugars": { "value": 1.60 },
            "protein": { "value": 13.12 },
            "calcium": { "value": 89.56 },
            "iron": { "value": 1.19 },
            "potassium": { "value": 196.08 },
            "vitaminA": { "value": 84.92, "percent": 9 },
            "vitaminC": { "value": 0.00, "percent": 0 },
            "folate": { "value": 19.06 }
        },
        "nutritionSummary": {
            "calories": 253,
            "fat": "11.8g",
            "carbs": "25.4g",
            "protein": "13.1g",
            "summaryText": "A serving of Chicken sandwich.",
            "breakdown": "42% fat, 40% carbs, 18% protein."
        },
        "servingSizes": [
            { "size": "100 g", "calories": 253 },
            { "size": "58 g", "calories": 148 }
        ]
    },
    {
        "slug": "bajra",
        "name": "BAJRA",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 361,
            "totalFat": {
                "value": 5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 67
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 12
            },
            "calcium": {
                "value": 42
            },
            "iron": {
                "value": 8
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 361,
            "fat": "5.0g",
            "carbs": "67.0g",
            "protein": "12.0g",
            "summaryText": "Nutritional facts for BAJRA per 100g.",
            "breakdown": "12% fat, 74% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 361
            }
        ]
    },
    {
        "slug": "barley",
        "name": "BARLEY",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 336,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 70
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 11
            },
            "calcium": {
                "value": 26
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 336,
            "fat": "1.0g",
            "carbs": "70.0g",
            "protein": "11.0g",
            "summaryText": "Nutritional facts for BARLEY per 100g.",
            "breakdown": "3% fat, 83% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 336
            }
        ]
    },
    {
        "slug": "italian-millet",
        "name": "ITALIAN MILLET",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 331,
            "totalFat": {
                "value": 4
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 61
            },
            "dietaryFiber": {
                "value": 8
            },
            "protein": {
                "value": 12
            },
            "calcium": {
                "value": 31
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 331,
            "fat": "4.0g",
            "carbs": "61.0g",
            "protein": "12.0g",
            "summaryText": "Nutritional facts for ITALIAN MILLET per 100g.",
            "breakdown": "11% fat, 74% carbs, 15% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 331
            }
        ]
    },
    {
        "slug": "jowar",
        "name": "JOWAR",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 349,
            "totalFat": {
                "value": 2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 73
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 10
            },
            "calcium": {
                "value": 25
            },
            "iron": {
                "value": 4
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 349,
            "fat": "2.0g",
            "carbs": "73.0g",
            "protein": "10.0g",
            "summaryText": "Nutritional facts for JOWAR per 100g.",
            "breakdown": "5% fat, 84% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 349
            }
        ]
    },
    {
        "slug": "maize-dry",
        "name": "MAIZE, dry",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 342,
            "totalFat": {
                "value": 4
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 66
            },
            "dietaryFiber": {
                "value": 3
            },
            "protein": {
                "value": 11
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 342,
            "fat": "4.0g",
            "carbs": "66.0g",
            "protein": "11.0g",
            "summaryText": "Nutritional facts for MAIZE, dry per 100g.",
            "breakdown": "11% fat, 77% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 342
            }
        ]
    },
    {
        "slug": "maize-tender",
        "name": "MAIZE, tender",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 125,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 25
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 9
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 125,
            "fat": "1.0g",
            "carbs": "25.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for MAIZE, tender per 100g.",
            "breakdown": "7% fat, 80% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 125
            }
        ]
    },
    {
        "slug": "panivaragu",
        "name": "PANIVARAGU",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 341,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 70
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 12
            },
            "calcium": {
                "value": 14
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 341,
            "fat": "1.0g",
            "carbs": "70.0g",
            "protein": "12.0g",
            "summaryText": "Nutritional facts for PANIVARAGU per 100g.",
            "breakdown": "3% fat, 82% carbs, 15% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 341
            }
        ]
    },
    {
        "slug": "ragi",
        "name": "RAGI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 328,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 72
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 344
            },
            "iron": {
                "value": 4
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 328,
            "fat": "1.0g",
            "carbs": "72.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for RAGI per 100g.",
            "breakdown": "3% fat, 88% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 328
            }
        ]
    },
    {
        "slug": "rice-parboiled-handpounded",
        "name": "RICE, parboiled, handpounded",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Pasta, Rice & Noodles",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 349,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 77
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 8
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 349,
            "fat": "1.0g",
            "carbs": "77.0g",
            "protein": "8.0g",
            "summaryText": "Nutritional facts for RICE, parboiled, handpounded per 100g.",
            "breakdown": "3% fat, 88% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 349
            }
        ]
    },
    {
        "slug": "rice-parboiled-milled",
        "name": "RICE, parboiled, milled",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Pasta, Rice & Noodles",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 346,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 79
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 9
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 346,
            "fat": "0.0g",
            "carbs": "79.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for RICE, parboiled, milled per 100g.",
            "breakdown": "0% fat, 91% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 346
            }
        ]
    },
    {
        "slug": "rice-raw-handpounded",
        "name": "RICE, raw, handpounded",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Pasta, Rice & Noodles",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 346,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 77
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 346,
            "fat": "1.0g",
            "carbs": "77.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for RICE, raw, handpounded per 100g.",
            "breakdown": "3% fat, 89% carbs, 8% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 346
            }
        ]
    },
    {
        "slug": "rice-raw-milled",
        "name": "RICE, raw, milled",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Pasta, Rice & Noodles",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 345,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 78
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 345,
            "fat": "0.0g",
            "carbs": "78.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for RICE, raw, milled per 100g.",
            "breakdown": "0% fat, 91% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 345
            }
        ]
    },
    {
        "slug": "rice-bran",
        "name": "RICE, bran",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 393,
            "totalFat": {
                "value": 16
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 48
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 13
            },
            "calcium": {
                "value": 67
            },
            "iron": {
                "value": 35
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 393,
            "fat": "16.0g",
            "carbs": "48.0g",
            "protein": "13.0g",
            "summaryText": "Nutritional facts for RICE, bran per 100g.",
            "breakdown": "37% fat, 49% carbs, 14% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 393
            }
        ]
    },
    {
        "slug": "rice-flakes",
        "name": "RICE, flakes",
        "cuisine": "Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 346,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 77
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 20
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 346,
            "fat": "1.0g",
            "carbs": "77.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for RICE, flakes per 100g.",
            "breakdown": "3% fat, 89% carbs, 8% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 346
            }
        ]
    },
    {
        "slug": "rice-puffed",
        "name": "RICE, puffed",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 325,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 74
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 23
            },
            "iron": {
                "value": 7
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 325,
            "fat": "0.0g",
            "carbs": "74.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for RICE, puffed per 100g.",
            "breakdown": "0% fat, 91% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 325
            }
        ]
    },
    {
        "slug": "samai",
        "name": "SAMAI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 341,
            "totalFat": {
                "value": 5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 67
            },
            "dietaryFiber": {
                "value": 8
            },
            "protein": {
                "value": 8
            },
            "calcium": {
                "value": 17
            },
            "iron": {
                "value": 9
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 341,
            "fat": "5.0g",
            "carbs": "67.0g",
            "protein": "8.0g",
            "summaryText": "Nutritional facts for SAMAI per 100g.",
            "breakdown": "13% fat, 79% carbs, 8% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 341
            }
        ]
    },
    {
        "slug": "sanwa-millet",
        "name": "SANWA MILLET",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 307,
            "totalFat": {
                "value": 2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 65
            },
            "dietaryFiber": {
                "value": 10
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 5
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 307,
            "fat": "2.0g",
            "carbs": "65.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for SANWA MILLET per 100g.",
            "breakdown": "6% fat, 85% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 307
            }
        ]
    },
    {
        "slug": "varagu",
        "name": "VARAGU",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 309,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 66
            },
            "dietaryFiber": {
                "value": 9
            },
            "protein": {
                "value": 8
            },
            "calcium": {
                "value": 27
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 309,
            "fat": "1.0g",
            "carbs": "66.0g",
            "protein": "8.0g",
            "summaryText": "Nutritional facts for VARAGU per 100g.",
            "breakdown": "3% fat, 85% carbs, 12% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 309
            }
        ]
    },
    {
        "slug": "wheat-bulgar-parboiled",
        "name": "WHEAT, bulgar (parboiled)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 356,
            "totalFat": {
                "value": 2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 77
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 8
            },
            "calcium": {
                "value": 37
            },
            "iron": {
                "value": 5
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 356,
            "fat": "2.0g",
            "carbs": "77.0g",
            "protein": "8.0g",
            "summaryText": "Nutritional facts for WHEAT, bulgar (parboiled) per 100g.",
            "breakdown": "5% fat, 87% carbs, 8% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 356
            }
        ]
    },
    {
        "slug": "wheat-whole",
        "name": "WHEAT, whole",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 346,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 71
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 12
            },
            "calcium": {
                "value": 41
            },
            "iron": {
                "value": 5
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 346,
            "fat": "1.0g",
            "carbs": "71.0g",
            "protein": "12.0g",
            "summaryText": "Nutritional facts for WHEAT, whole per 100g.",
            "breakdown": "3% fat, 82% carbs, 15% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 346
            }
        ]
    },
    {
        "slug": "wheat-flour-whole",
        "name": "WHEAT, flour (whole)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 341,
            "totalFat": {
                "value": 2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 69
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 12
            },
            "calcium": {
                "value": 48
            },
            "iron": {
                "value": 5
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 341,
            "fat": "2.0g",
            "carbs": "69.0g",
            "protein": "12.0g",
            "summaryText": "Nutritional facts for WHEAT, flour (whole) per 100g.",
            "breakdown": "5% fat, 81% carbs, 14% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 341
            }
        ]
    },
    {
        "slug": "wheat-flour-refined",
        "name": "WHEAT, flour (refined)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 348,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 74
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 11
            },
            "calcium": {
                "value": 23
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 348,
            "fat": "1.0g",
            "carbs": "74.0g",
            "protein": "11.0g",
            "summaryText": "Nutritional facts for WHEAT, flour (refined) per 100g.",
            "breakdown": "3% fat, 85% carbs, 12% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 348
            }
        ]
    },
    {
        "slug": "wheat-germ",
        "name": "WHEAT, germ",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 397,
            "totalFat": {
                "value": 7
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 53
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 29
            },
            "calcium": {
                "value": 40
            },
            "iron": {
                "value": 6
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 397,
            "fat": "7.0g",
            "carbs": "53.0g",
            "protein": "29.0g",
            "summaryText": "Nutritional facts for WHEAT, germ per 100g.",
            "breakdown": "16% fat, 53% carbs, 31% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 397
            }
        ]
    },
    {
        "slug": "wheat-semolina",
        "name": "WHEAT, semolina",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 348,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 75
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 10
            },
            "calcium": {
                "value": 16
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 348,
            "fat": "1.0g",
            "carbs": "75.0g",
            "protein": "10.0g",
            "summaryText": "Nutritional facts for WHEAT, semolina per 100g.",
            "breakdown": "3% fat, 86% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 348
            }
        ]
    },
    {
        "slug": "wheat-vermicelli",
        "name": "WHEAT, vermicelli",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Pasta, Rice & Noodles",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 352,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 78
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 9
            },
            "calcium": {
                "value": 22
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 352,
            "fat": "0.0g",
            "carbs": "78.0g",
            "protein": "9.0g",
            "summaryText": "Nutritional facts for WHEAT, vermicelli per 100g.",
            "breakdown": "0% fat, 89% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 352
            }
        ]
    },
    {
        "slug": "wheat-bread-brown",
        "name": "WHEAT, bread (brown)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 244,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 49
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 9
            },
            "calcium": {
                "value": 18
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 244,
            "fat": "1.0g",
            "carbs": "49.0g",
            "protein": "9.0g",
            "summaryText": "Nutritional facts for WHEAT, bread (brown) per 100g.",
            "breakdown": "4% fat, 80% carbs, 16% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 244
            }
        ]
    },
    {
        "slug": "wheat-bread-white",
        "name": "WHEAT, bread (white)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 245,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 52
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 8
            },
            "calcium": {
                "value": 11
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 245,
            "fat": "1.0g",
            "carbs": "52.0g",
            "protein": "8.0g",
            "summaryText": "Nutritional facts for WHEAT, bread (white) per 100g.",
            "breakdown": "4% fat, 85% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 245
            }
        ]
    },
    {
        "slug": "bengal-gram-whole",
        "name": "BENGAL GRAM, whole",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 360,
            "totalFat": {
                "value": 5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 61
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 17
            },
            "calcium": {
                "value": 202
            },
            "iron": {
                "value": 5
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 360,
            "fat": "5.0g",
            "carbs": "61.0g",
            "protein": "17.0g",
            "summaryText": "Nutritional facts for BENGAL GRAM, whole per 100g.",
            "breakdown": "12% fat, 68% carbs, 20% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 360
            }
        ]
    },
    {
        "slug": "bengal-gram-dhal",
        "name": "BENGAL GRAM, dhal",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 372,
            "totalFat": {
                "value": 6
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 60
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 21
            },
            "calcium": {
                "value": 56
            },
            "iron": {
                "value": 5
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 372,
            "fat": "6.0g",
            "carbs": "60.0g",
            "protein": "21.0g",
            "summaryText": "Nutritional facts for BENGAL GRAM, dhal per 100g.",
            "breakdown": "15% fat, 64% carbs, 21% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 372
            }
        ]
    },
    {
        "slug": "bengal-gram-roasted",
        "name": "BENGAL GRAM, roasted",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 369,
            "totalFat": {
                "value": 5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 58
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 22
            },
            "calcium": {
                "value": 58
            },
            "iron": {
                "value": 9
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 369,
            "fat": "5.0g",
            "carbs": "58.0g",
            "protein": "22.0g",
            "summaryText": "Nutritional facts for BENGAL GRAM, roasted per 100g.",
            "breakdown": "12% fat, 63% carbs, 25% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 369
            }
        ]
    },
    {
        "slug": "black-gram-dhal",
        "name": "BLACK GRAM, dhal",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 347,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 60
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 24
            },
            "calcium": {
                "value": 154
            },
            "iron": {
                "value": 4
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 347,
            "fat": "1.0g",
            "carbs": "60.0g",
            "protein": "24.0g",
            "summaryText": "Nutritional facts for BLACK GRAM, dhal per 100g.",
            "breakdown": "3% fat, 69% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 347
            }
        ]
    },
    {
        "slug": "cow-pea",
        "name": "COW PEA",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 323,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 54
            },
            "dietaryFiber": {
                "value": 3
            },
            "protein": {
                "value": 24
            },
            "calcium": {
                "value": 77
            },
            "iron": {
                "value": 9
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 323,
            "fat": "1.0g",
            "carbs": "54.0g",
            "protein": "24.0g",
            "summaryText": "Nutritional facts for COW PEA per 100g.",
            "breakdown": "3% fat, 67% carbs, 30% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 323
            }
        ]
    },
    {
        "slug": "field-bean-dry",
        "name": "FIELD BEAN, dry",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 347,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 60
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 25
            },
            "calcium": {
                "value": 60
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 347,
            "fat": "1.0g",
            "carbs": "60.0g",
            "protein": "25.0g",
            "summaryText": "Nutritional facts for FIELD BEAN, dry per 100g.",
            "breakdown": "3% fat, 69% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 347
            }
        ]
    },
    {
        "slug": "grean-gram-whole",
        "name": "GREAN GRAM, whole",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 334,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 57
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 24
            },
            "calcium": {
                "value": 124
            },
            "iron": {
                "value": 4
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 334,
            "fat": "1.0g",
            "carbs": "57.0g",
            "protein": "24.0g",
            "summaryText": "Nutritional facts for GREAN GRAM, whole per 100g.",
            "breakdown": "3% fat, 68% carbs, 29% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 334
            }
        ]
    },
    {
        "slug": "green-gram-dhal",
        "name": "GREEN GRAM, dhal",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 348,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 60
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 24
            },
            "calcium": {
                "value": 75
            },
            "iron": {
                "value": 4
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 348,
            "fat": "1.0g",
            "carbs": "60.0g",
            "protein": "24.0g",
            "summaryText": "Nutritional facts for GREEN GRAM, dhal per 100g.",
            "breakdown": "3% fat, 69% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 348
            }
        ]
    },
    {
        "slug": "horse-gram-whole",
        "name": "HORSE GRAM, whole",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 321,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 57
            },
            "dietaryFiber": {
                "value": 5
            },
            "protein": {
                "value": 22
            },
            "calcium": {
                "value": 287
            },
            "iron": {
                "value": 7
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 321,
            "fat": "0.0g",
            "carbs": "57.0g",
            "protein": "22.0g",
            "summaryText": "Nutritional facts for HORSE GRAM, whole per 100g.",
            "breakdown": "0% fat, 71% carbs, 29% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 321
            }
        ]
    },
    {
        "slug": "khesari-dhal",
        "name": "KHESARI, dhal",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 345,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 57
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 28
            },
            "calcium": {
                "value": 90
            },
            "iron": {
                "value": 6
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 345,
            "fat": "1.0g",
            "carbs": "57.0g",
            "protein": "28.0g",
            "summaryText": "Nutritional facts for KHESARI, dhal per 100g.",
            "breakdown": "3% fat, 66% carbs, 31% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 345
            }
        ]
    },
    {
        "slug": "lentil",
        "name": "LENTIL",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 343,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 59
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 25
            },
            "calcium": {
                "value": 69
            },
            "iron": {
                "value": 7
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 343,
            "fat": "1.0g",
            "carbs": "59.0g",
            "protein": "25.0g",
            "summaryText": "Nutritional facts for LENTIL per 100g.",
            "breakdown": "3% fat, 69% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 343
            }
        ]
    },
    {
        "slug": "moth-beans",
        "name": "MOTH BEANS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 330,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 56
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 24
            },
            "calcium": {
                "value": 202
            },
            "iron": {
                "value": 9
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 330,
            "fat": "1.0g",
            "carbs": "56.0g",
            "protein": "24.0g",
            "summaryText": "Nutritional facts for MOTH BEANS per 100g.",
            "breakdown": "3% fat, 68% carbs, 29% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 330
            }
        ]
    },
    {
        "slug": "peas-green",
        "name": "PEAS green",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 93,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 16
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 93,
            "fat": "0.0g",
            "carbs": "16.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for PEAS green per 100g.",
            "breakdown": "0% fat, 69% carbs, 31% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 93
            }
        ]
    },
    {
        "slug": "peas-dry",
        "name": "PEAS dry",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 315,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 56
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 20
            },
            "calcium": {
                "value": 75
            },
            "iron": {
                "value": 7
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 315,
            "fat": "1.0g",
            "carbs": "56.0g",
            "protein": "20.0g",
            "summaryText": "Nutritional facts for PEAS dry per 100g.",
            "breakdown": "3% fat, 71% carbs, 26% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 315
            }
        ]
    },
    {
        "slug": "peas-roasted",
        "name": "PEAS roasted",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 340,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 59
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 23
            },
            "calcium": {
                "value": 81
            },
            "iron": {
                "value": 6
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 340,
            "fat": "1.0g",
            "carbs": "59.0g",
            "protein": "23.0g",
            "summaryText": "Nutritional facts for PEAS roasted per 100g.",
            "breakdown": "3% fat, 69% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 340
            }
        ]
    },
    {
        "slug": "rajmah",
        "name": "RAJMAH",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 346,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 61
            },
            "dietaryFiber": {
                "value": 5
            },
            "protein": {
                "value": 23
            },
            "calcium": {
                "value": 260
            },
            "iron": {
                "value": 5
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 346,
            "fat": "1.0g",
            "carbs": "61.0g",
            "protein": "23.0g",
            "summaryText": "Nutritional facts for RAJMAH per 100g.",
            "breakdown": "3% fat, 71% carbs, 26% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 346
            }
        ]
    },
    {
        "slug": "redgram-dhal",
        "name": "REDGRAM, dhal",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 335,
            "totalFat": {
                "value": 2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 58
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 22
            },
            "calcium": {
                "value": 73
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 335,
            "fat": "2.0g",
            "carbs": "58.0g",
            "protein": "22.0g",
            "summaryText": "Nutritional facts for REDGRAM, dhal per 100g.",
            "breakdown": "5% fat, 69% carbs, 26% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 335
            }
        ]
    },
    {
        "slug": "redgram-tender",
        "name": "REDGRAM (tender)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 116,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 17
            },
            "dietaryFiber": {
                "value": 6
            },
            "protein": {
                "value": 10
            },
            "calcium": {
                "value": 57
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 116,
            "fat": "1.0g",
            "carbs": "17.0g",
            "protein": "10.0g",
            "summaryText": "Nutritional facts for REDGRAM (tender) per 100g.",
            "breakdown": "8% fat, 59% carbs, 34% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 116
            }
        ]
    },
    {
        "slug": "soyabean",
        "name": "SOYABEAN",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 432,
            "totalFat": {
                "value": 19
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 21
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 43
            },
            "calcium": {
                "value": 240
            },
            "iron": {
                "value": 10
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 432,
            "fat": "19.0g",
            "carbs": "21.0g",
            "protein": "43.0g",
            "summaryText": "Nutritional facts for SOYABEAN per 100g.",
            "breakdown": "40% fat, 19% carbs, 41% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 432
            }
        ]
    },
    {
        "slug": "agathi",
        "name": "AGATHI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 93,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 12
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 8
            },
            "calcium": {
                "value": 1130
            },
            "iron": {
                "value": 4
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 93,
            "fat": "1.0g",
            "carbs": "12.0g",
            "protein": "8.0g",
            "summaryText": "Nutritional facts for AGATHI per 100g.",
            "breakdown": "10% fat, 52% carbs, 38% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 93
            }
        ]
    },
    {
        "slug": "amaranth-caudatus",
        "name": "AMARANTH caudatus",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 26,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 2
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 200
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 26,
            "fat": "1.0g",
            "carbs": "2.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for AMARANTH caudatus per 100g.",
            "breakdown": "35% fat, 31% carbs, 34% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 26
            }
        ]
    },
    {
        "slug": "amaranth-gangeticus-tender",
        "name": "AMARANTH gangeticus (tender)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 45,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 397
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 45,
            "fat": "0.0g",
            "carbs": "6.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for AMARANTH gangeticus (tender) per 100g.",
            "breakdown": "0% fat, 53% carbs, 47% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 45
            }
        ]
    },
    {
        "slug": "amaranth-gangeticus-stem",
        "name": "AMARANTH gangeticus (stem)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 19,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 260
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 19,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for AMARANTH gangeticus (stem) per 100g.",
            "breakdown": "0% fat, 63% carbs, 37% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 19
            }
        ]
    },
    {
        "slug": "amaranth-paniculatus",
        "name": "AMARANTH paniculatus",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 67,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 9
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 530
            },
            "iron": {
                "value": 18
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 67,
            "fat": "1.0g",
            "carbs": "9.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for AMARANTH paniculatus per 100g.",
            "breakdown": "13% fat, 54% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 67
            }
        ]
    },
    {
        "slug": "amaranth-polygonoides",
        "name": "AMARANTH polygonoides",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 33,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 251
            },
            "iron": {
                "value": 27
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 33,
            "fat": "0.0g",
            "carbs": "5.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for AMARANTH polygonoides per 100g.",
            "breakdown": "0% fat, 61% carbs, 39% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 33
            }
        ]
    },
    {
        "slug": "amaranth-spinosus",
        "name": "AMARANTH spinosus",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 43,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 800
            },
            "iron": {
                "value": 23
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 43,
            "fat": "0.0g",
            "carbs": "7.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for AMARANTH spinosus per 100g.",
            "breakdown": "0% fat, 65% carbs, 35% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 43
            }
        ]
    },
    {
        "slug": "amaranth-species-chakravarthikeerai",
        "name": "AMARANTH species (Chakravarthikeerai)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 57,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 8
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 321
            },
            "iron": {
                "value": 18
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 57,
            "fat": "1.0g",
            "carbs": "8.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for AMARANTH species (Chakravarthikeerai) per 100g.",
            "breakdown": "16% fat, 56% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 57
            }
        ]
    },
    {
        "slug": "amaranth-koyakeerai",
        "name": "AMARANTH (Koyakeerai)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 37,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 292
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 37,
            "fat": "0.0g",
            "carbs": "5.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for AMARANTH (Koyakeerai) per 100g.",
            "breakdown": "0% fat, 54% carbs, 46% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 37
            }
        ]
    },
    {
        "slug": "amaranth-tristis",
        "name": "AMARANTH tristis",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 44,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 364
            },
            "iron": {
                "value": 38
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 44,
            "fat": "0.0g",
            "carbs": "7.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for AMARANTH tristis per 100g.",
            "breakdown": "0% fat, 64% carbs, 36% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 44
            }
        ]
    },
    {
        "slug": "amaranth-viridis",
        "name": "AMARANTH viridis",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 38,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 6
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 330
            },
            "iron": {
                "value": 19
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 38,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for AMARANTH viridis per 100g.",
            "breakdown": "0% fat, 42% carbs, 58% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 38
            }
        ]
    },
    {
        "slug": "beet-greens",
        "name": "BEET GREENS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 46,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 380
            },
            "iron": {
                "value": 16
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 46,
            "fat": "1.0g",
            "carbs": "6.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for BEET GREENS per 100g.",
            "breakdown": "20% fat, 52% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 46
            }
        ]
    },
    {
        "slug": "betel-leaves",
        "name": "BETEL LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 44,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 230
            },
            "iron": {
                "value": 11
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 44,
            "fat": "1.0g",
            "carbs": "6.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for BETEL LEAVES per 100g.",
            "breakdown": "20% fat, 55% carbs, 25% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 44
            }
        ]
    },
    {
        "slug": "bottle-gourd-leaves",
        "name": "BOTTLE GOURD LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 39,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 80
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 39,
            "fat": "1.0g",
            "carbs": "6.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for BOTTLE GOURD LEAVES per 100g.",
            "breakdown": "23% fat, 62% carbs, 15% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 39
            }
        ]
    },
    {
        "slug": "broad-bean-leaves",
        "name": "BROAD BEAN LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 71,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 11
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 111
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 71,
            "fat": "0.0g",
            "carbs": "11.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for BROAD BEAN LEAVES per 100g.",
            "breakdown": "0% fat, 62% carbs, 38% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 71
            }
        ]
    },
    {
        "slug": "brussels-sprouts",
        "name": "BRUSSELS SPROUTS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 52,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 43
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 52,
            "fat": "0.0g",
            "carbs": "7.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for BRUSSELS SPROUTS per 100g.",
            "breakdown": "0% fat, 54% carbs, 46% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 52
            }
        ]
    },
    {
        "slug": "cabbage",
        "name": "CABBAGE",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 27,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 39
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 27,
            "fat": "0.0g",
            "carbs": "5.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for CABBAGE per 100g.",
            "breakdown": "0% fat, 74% carbs, 26% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 27
            }
        ]
    },
    {
        "slug": "carrot-leaves",
        "name": "CARROT LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 77,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 13
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 340
            },
            "iron": {
                "value": 9
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 77,
            "fat": "0.0g",
            "carbs": "13.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for CARROT LEAVES per 100g.",
            "breakdown": "0% fat, 68% carbs, 32% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 77
            }
        ]
    },
    {
        "slug": "cauliflower-greens",
        "name": "CAULIFLOWER GREENS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 66,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 8
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 626
            },
            "iron": {
                "value": 40
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 66,
            "fat": "1.0g",
            "carbs": "8.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for CAULIFLOWER GREENS per 100g.",
            "breakdown": "14% fat, 48% carbs, 38% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 66
            }
        ]
    },
    {
        "slug": "celery-leaves",
        "name": "CELERY LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 37,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 2
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 230
            },
            "iron": {
                "value": 6
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 37,
            "fat": "1.0g",
            "carbs": "2.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for CELERY LEAVES per 100g.",
            "breakdown": "24% fat, 22% carbs, 54% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 37
            }
        ]
    },
    {
        "slug": "celery-stalk",
        "name": "CELERY STALK",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 18,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 30
            },
            "iron": {
                "value": 5
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 18,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for CELERY STALK per 100g.",
            "breakdown": "0% fat, 67% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 18
            }
        ]
    },
    {
        "slug": "colocasia-leaves-green",
        "name": "COLOCASIA LEAVES (green)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 56,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 3
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 227
            },
            "iron": {
                "value": 10
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 56,
            "fat": "1.0g",
            "carbs": "7.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for COLOCASIA LEAVES (green) per 100g.",
            "breakdown": "16% fat, 50% carbs, 34% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 56
            }
        ]
    },
    {
        "slug": "colocasia-leaves-dried",
        "name": "COLOCASIA LEAVES (dried)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 277,
            "totalFat": {
                "value": 6
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 42
            },
            "dietaryFiber": {
                "value": 16
            },
            "protein": {
                "value": 14
            },
            "calcium": {
                "value": 1546
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 277,
            "fat": "6.0g",
            "carbs": "42.0g",
            "protein": "14.0g",
            "summaryText": "Nutritional facts for COLOCASIA LEAVES (dried) per 100g.",
            "breakdown": "19% fat, 61% carbs, 20% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 277
            }
        ]
    },
    {
        "slug": "coriander-leaves",
        "name": "CORIANDER LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 44,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 184
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 44,
            "fat": "1.0g",
            "carbs": "6.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for CORIANDER LEAVES per 100g.",
            "breakdown": "20% fat, 55% carbs, 25% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 44
            }
        ]
    },
    {
        "slug": "cow-pea-leaves",
        "name": "COW PEA LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 38,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 290
            },
            "iron": {
                "value": 20
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 38,
            "fat": "1.0g",
            "carbs": "4.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for COW PEA LEAVES per 100g.",
            "breakdown": "24% fat, 42% carbs, 34% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 38
            }
        ]
    },
    {
        "slug": "curry-leaves",
        "name": "CURRY LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 108,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 19
            },
            "dietaryFiber": {
                "value": 6
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 830
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 108,
            "fat": "1.0g",
            "carbs": "19.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for CURRY LEAVES per 100g.",
            "breakdown": "8% fat, 70% carbs, 22% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 108
            }
        ]
    },
    {
        "slug": "drumstick-leaves",
        "name": "DRUMSTICK LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 92,
            "totalFat": {
                "value": 2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 12
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 440
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 92,
            "fat": "2.0g",
            "carbs": "12.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for DRUMSTICK LEAVES per 100g.",
            "breakdown": "20% fat, 52% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 92
            }
        ]
    },
    {
        "slug": "fenugreek-leaves",
        "name": "FENUGREEK LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 49,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 395
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 49,
            "fat": "1.0g",
            "carbs": "6.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for FENUGREEK LEAVES per 100g.",
            "breakdown": "18% fat, 49% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 49
            }
        ]
    },
    {
        "slug": "gogu",
        "name": "GOGU",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 56,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 172
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 56,
            "fat": "1.0g",
            "carbs": "10.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for GOGU per 100g.",
            "breakdown": "16% fat, 71% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 56
            }
        ]
    },
    {
        "slug": "knol-khol-greens",
        "name": "KNOL-KHOL GREENS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 43,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 740
            },
            "iron": {
                "value": 13
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 43,
            "fat": "0.0g",
            "carbs": "6.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for KNOL-KHOL GREENS per 100g.",
            "breakdown": "0% fat, 56% carbs, 44% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 43
            }
        ]
    },
    {
        "slug": "kuppameni",
        "name": "KUPPAMENI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 64,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 667
            },
            "iron": {
                "value": 17
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 64,
            "fat": "1.0g",
            "carbs": "6.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for KUPPAMENI per 100g.",
            "breakdown": "14% fat, 37% carbs, 49% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 64
            }
        ]
    },
    {
        "slug": "lettuce",
        "name": "LETTUCE",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Salads",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 21,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 2
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 21,
            "fat": "0.0g",
            "carbs": "2.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for LETTUCE per 100g.",
            "breakdown": "0% fat, 38% carbs, 62% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 21
            }
        ]
    },
    {
        "slug": "lettuce-tree-leaves-mature",
        "name": "LETTUCE TREE LEAVES, mature",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Salads",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 65,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 320
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 65,
            "fat": "0.0g",
            "carbs": "10.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for LETTUCE TREE LEAVES, mature per 100g.",
            "breakdown": "0% fat, 62% carbs, 38% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 65
            }
        ]
    },
    {
        "slug": "lettuce-tree-leaves-tender",
        "name": "LETTUCE TREE LEAVES, tender",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Salads",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 29,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 170
            },
            "iron": {
                "value": 4
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 29,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for LETTUCE TREE LEAVES, tender per 100g.",
            "breakdown": "0% fat, 41% carbs, 59% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 29
            }
        ]
    },
    {
        "slug": "manathakkali-leaves",
        "name": "MANATHAKKALI LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 68,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 9
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 410
            },
            "iron": {
                "value": 20
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 68,
            "fat": "1.0g",
            "carbs": "9.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for MANATHAKKALI LEAVES per 100g.",
            "breakdown": "13% fat, 53% carbs, 34% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 68
            }
        ]
    },
    {
        "slug": "mayalu",
        "name": "MAYALU",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 32,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 200
            },
            "iron": {
                "value": 10
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 32,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for MAYALU per 100g.",
            "breakdown": "0% fat, 50% carbs, 50% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 32
            }
        ]
    },
    {
        "slug": "mint",
        "name": "MINT",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 48,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 200
            },
            "iron": {
                "value": 16
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 48,
            "fat": "1.0g",
            "carbs": "6.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for MINT per 100g.",
            "breakdown": "19% fat, 50% carbs, 31% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 48
            }
        ]
    },
    {
        "slug": "modakanthan-keerai",
        "name": "MODAKANTHAN KEERAI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 61,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 9
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 61,
            "fat": "1.0g",
            "carbs": "9.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for MODAKANTHAN KEERAI per 100g.",
            "breakdown": "15% fat, 59% carbs, 26% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 61
            }
        ]
    },
    {
        "slug": "mukarrate-keerai",
        "name": "MUKARRATE KEERAI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 61,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 667
            },
            "iron": {
                "value": 18
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 61,
            "fat": "1.0g",
            "carbs": "7.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for MUKARRATE KEERAI per 100g.",
            "breakdown": "15% fat, 46% carbs, 39% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 61
            }
        ]
    },
    {
        "slug": "mustard-leaves",
        "name": "MUSTARD LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 34,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 155
            },
            "iron": {
                "value": 16
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 34,
            "fat": "1.0g",
            "carbs": "3.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for MUSTARD LEAVES per 100g.",
            "breakdown": "26% fat, 35% carbs, 39% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 34
            }
        ]
    },
    {
        "slug": "nerringi",
        "name": "NERRINGI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 68,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 9
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 1550
            },
            "iron": {
                "value": 9
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 68,
            "fat": "0.0g",
            "carbs": "9.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for NERRINGI per 100g.",
            "breakdown": "0% fat, 53% carbs, 47% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 68
            }
        ]
    },
    {
        "slug": "parsley",
        "name": "PARSLEY",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 87,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 13
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 390
            },
            "iron": {
                "value": 18
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 87,
            "fat": "1.0g",
            "carbs": "13.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for PARSLEY per 100g.",
            "breakdown": "10% fat, 60% carbs, 30% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 87
            }
        ]
    },
    {
        "slug": "paruppu-keerai",
        "name": "PARUPPU KEERAI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 27,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 111
            },
            "iron": {
                "value": 15
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 27,
            "fat": "1.0g",
            "carbs": "3.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for PARUPPU KEERAI per 100g.",
            "breakdown": "33% fat, 44% carbs, 23% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 27
            }
        ]
    },
    {
        "slug": "ponnanganni",
        "name": "PONNANGANNI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 73,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 12
            },
            "dietaryFiber": {
                "value": 3
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 510
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 73,
            "fat": "1.0g",
            "carbs": "12.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for PONNANGANNI per 100g.",
            "breakdown": "12% fat, 66% carbs, 22% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 73
            }
        ]
    },
    {
        "slug": "pumpkin-leaves",
        "name": "PUMPKIN LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 57,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 8
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 392
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 57,
            "fat": "1.0g",
            "carbs": "8.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for PUMPKIN LEAVES per 100g.",
            "breakdown": "16% fat, 56% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 57
            }
        ]
    },
    {
        "slug": "radish-leaves",
        "name": "RADISH LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 28,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 2
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 265
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 28,
            "fat": "0.0g",
            "carbs": "2.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for RADISH LEAVES per 100g.",
            "breakdown": "0% fat, 29% carbs, 71% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 28
            }
        ]
    },
    {
        "slug": "radish-leaves-table",
        "name": "RADISH LEAVES table",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 38,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 310
            },
            "iron": {
                "value": 18
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 38,
            "fat": "1.0g",
            "carbs": "4.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for RADISH LEAVES table per 100g.",
            "breakdown": "24% fat, 42% carbs, 34% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 38
            }
        ]
    },
    {
        "slug": "rape-leaves",
        "name": "RAPE LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 48,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 5
            },
            "calcium": {
                "value": 370
            },
            "iron": {
                "value": 12
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 48,
            "fat": "0.0g",
            "carbs": "6.0g",
            "protein": "5.0g",
            "summaryText": "Nutritional facts for RAPE LEAVES per 100g.",
            "breakdown": "0% fat, 50% carbs, 50% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 48
            }
        ]
    },
    {
        "slug": "safflower-leaves",
        "name": "SAFFLOWER LEAVES",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 33,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 185
            },
            "iron": {
                "value": 6
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 33,
            "fat": "1.0g",
            "carbs": "4.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for SAFFLOWER LEAVES per 100g.",
            "breakdown": "27% fat, 48% carbs, 25% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 33
            }
        ]
    },
    {
        "slug": "shepu",
        "name": "SHEPU",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 37,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 190
            },
            "iron": {
                "value": 17
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 37,
            "fat": "0.0g",
            "carbs": "5.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for SHEPU per 100g.",
            "breakdown": "0% fat, 54% carbs, 46% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 37
            }
        ]
    },
    {
        "slug": "spinach",
        "name": "SPINACH",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 26,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 73
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 26,
            "fat": "1.0g",
            "carbs": "3.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for SPINACH per 100g.",
            "breakdown": "35% fat, 46% carbs, 19% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 26
            }
        ]
    },
    {
        "slug": "spinach-stalks",
        "name": "SPINACH stalks",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 20,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 90
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 20,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for SPINACH stalks per 100g.",
            "breakdown": "0% fat, 80% carbs, 20% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 20
            }
        ]
    },
    {
        "slug": "susni-sag",
        "name": "SUSNI SAG",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 46,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 53
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 46,
            "fat": "1.0g",
            "carbs": "5.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for SUSNI SAG per 100g.",
            "breakdown": "19% fat, 43% carbs, 38% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 46
            }
        ]
    },
    {
        "slug": "tamarind-leaves-tender",
        "name": "TAMARIND LEAVES, tender",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 115,
            "totalFat": {
                "value": 2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 18
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 6
            },
            "calcium": {
                "value": 101
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 115,
            "fat": "2.0g",
            "carbs": "18.0g",
            "protein": "6.0g",
            "summaryText": "Nutritional facts for TAMARIND LEAVES, tender per 100g.",
            "breakdown": "16% fat, 63% carbs, 21% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 115
            }
        ]
    },
    {
        "slug": "turnip-greens",
        "name": "TURNIP GREENS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 67,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 9
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 710
            },
            "iron": {
                "value": 28
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 67,
            "fat": "1.0g",
            "carbs": "9.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for TURNIP GREENS per 100g.",
            "breakdown": "13% fat, 54% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 67
            }
        ]
    },
    {
        "slug": "arrow-root-flour",
        "name": "ARROW ROOT FLOUR",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 334,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 83
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 334,
            "fat": "0.0g",
            "carbs": "83.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for ARROW ROOT FLOUR per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 334
            }
        ]
    },
    {
        "slug": "banana-rhizome",
        "name": "BANANA RHIZOME",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 51,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 12
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 25
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 51,
            "fat": "0.0g",
            "carbs": "12.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for BANANA RHIZOME per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 51
            }
        ]
    },
    {
        "slug": "beet-root",
        "name": "BEET ROOT",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 43,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 9
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 18
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 43,
            "fat": "0.0g",
            "carbs": "9.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for BEET ROOT per 100g.",
            "breakdown": "0% fat, 82% carbs, 18% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 43
            }
        ]
    },
    {
        "slug": "carrot",
        "name": "CARROT",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 48,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 11
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 80
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 48,
            "fat": "0.0g",
            "carbs": "11.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for CARROT per 100g.",
            "breakdown": "0% fat, 92% carbs, 8% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 48
            }
        ]
    },
    {
        "slug": "colocasia",
        "name": "COLOCASIA",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 97,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 21
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 40
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 97,
            "fat": "0.0g",
            "carbs": "21.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for COLOCASIA per 100g.",
            "breakdown": "0% fat, 87% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 97
            }
        ]
    },
    {
        "slug": "khamalu",
        "name": "KHAMALU",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 79,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 18
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 16
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 79,
            "fat": "0.0g",
            "carbs": "18.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for KHAMALU per 100g.",
            "breakdown": "0% fat, 91% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 79
            }
        ]
    },
    {
        "slug": "mango-ginger",
        "name": "MANGO GINGER",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 53,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 25
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 53,
            "fat": "1.0g",
            "carbs": "10.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for MANGO GINGER per 100g.",
            "breakdown": "17% fat, 75% carbs, 8% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 53
            }
        ]
    },
    {
        "slug": "parsnip",
        "name": "PARSNIP",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 101,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 23
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 101,
            "fat": "0.0g",
            "carbs": "23.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for PARSNIP per 100g.",
            "breakdown": "0% fat, 91% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 101
            }
        ]
    },
    {
        "slug": "potato",
        "name": "POTATO",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 97,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 23
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 97,
            "fat": "0.0g",
            "carbs": "23.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for POTATO per 100g.",
            "breakdown": "0% fat, 95% carbs, 5% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 97
            }
        ]
    },
    {
        "slug": "radish-pink",
        "name": "RADISH pink",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 32,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 32,
            "fat": "0.0g",
            "carbs": "7.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for RADISH pink per 100g.",
            "breakdown": "0% fat, 88% carbs, 12% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 32
            }
        ]
    },
    {
        "slug": "radish-rat-tailed",
        "name": "RADISH rat-tailed",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 25,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 78
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 25,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for RADISH rat-tailed per 100g.",
            "breakdown": "0% fat, 64% carbs, 36% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 25
            }
        ]
    },
    {
        "slug": "radish-table",
        "name": "RADISH table",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 16,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 16,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for RADISH table per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 16
            }
        ]
    },
    {
        "slug": "radish-white",
        "name": "RADISH white",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 17,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 35
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 17,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for RADISH white per 100g.",
            "breakdown": "0% fat, 71% carbs, 29% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 17
            }
        ]
    },
    {
        "slug": "sweet-potato",
        "name": "SWEET POTATO",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 120,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 28
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 46
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 120,
            "fat": "0.0g",
            "carbs": "28.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for SWEET POTATO per 100g.",
            "breakdown": "0% fat, 93% carbs, 7% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 120
            }
        ]
    },
    {
        "slug": "tapioca",
        "name": "TAPIOCA",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 157,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 38
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 157,
            "fat": "0.0g",
            "carbs": "38.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for TAPIOCA per 100g.",
            "breakdown": "0% fat, 97% carbs, 3% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 157
            }
        ]
    },
    {
        "slug": "tapioca-chips-dried",
        "name": "TAPIOCA chips dried",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 338,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 83
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 91
            },
            "iron": {
                "value": 4
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 338,
            "fat": "0.0g",
            "carbs": "83.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for TAPIOCA chips dried per 100g.",
            "breakdown": "0% fat, 98% carbs, 2% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 338
            }
        ]
    },
    {
        "slug": "turnip",
        "name": "TURNIP",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 29,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 30
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 29,
            "fat": "0.0g",
            "carbs": "6.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for TURNIP per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 29
            }
        ]
    },
    {
        "slug": "yam-elephant",
        "name": "YAM, elephant",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 79,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 18
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 79,
            "fat": "0.0g",
            "carbs": "18.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for YAM, elephant per 100g.",
            "breakdown": "0% fat, 91% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 79
            }
        ]
    },
    {
        "slug": "yam-ordinary",
        "name": "YAM, ordinary",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 111,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 26
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 35
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 111,
            "fat": "0.0g",
            "carbs": "26.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for YAM, ordinary per 100g.",
            "breakdown": "0% fat, 93% carbs, 7% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 111
            }
        ]
    },
    {
        "slug": "yam-wild",
        "name": "YAM, wild",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 110,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 24
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 110,
            "fat": "0.0g",
            "carbs": "24.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for YAM, wild per 100g.",
            "breakdown": "0% fat, 87% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 110
            }
        ]
    },
    {
        "slug": "ash-gourd",
        "name": "ASH GOURD",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 10,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 2
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 30
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 10,
            "fat": "0.0g",
            "carbs": "2.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for ASH GOURD per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 10
            }
        ]
    },
    {
        "slug": "beans-scarlet-runner",
        "name": "BEANS, scarlet runner",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 158,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 30
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 158,
            "fat": "1.0g",
            "carbs": "30.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for BEANS, scarlet runner per 100g.",
            "breakdown": "6% fat, 76% carbs, 18% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 158
            }
        ]
    },
    {
        "slug": "bitter-gourd",
        "name": "BITTER GOURD",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 25,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 25,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for BITTER GOURD per 100g.",
            "breakdown": "0% fat, 64% carbs, 36% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 25
            }
        ]
    },
    {
        "slug": "bitter-gourd-small",
        "name": "BITTER GOURD small",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 60,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 11
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 23
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 60,
            "fat": "1.0g",
            "carbs": "11.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for BITTER GOURD small per 100g.",
            "breakdown": "15% fat, 73% carbs, 12% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 60
            }
        ]
    },
    {
        "slug": "bottle-gourd",
        "name": "BOTTLE GOURD",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 12,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 2
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 12,
            "fat": "0.0g",
            "carbs": "2.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for BOTTLE GOURD per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 12
            }
        ]
    },
    {
        "slug": "brinjal",
        "name": "BRINJAL",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 24,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 18
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 24,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for BRINJAL per 100g.",
            "breakdown": "0% fat, 67% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 24
            }
        ]
    },
    {
        "slug": "broad-beans",
        "name": "BROAD BEANS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 48,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 48,
            "fat": "0.0g",
            "carbs": "7.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for BROAD BEANS per 100g.",
            "breakdown": "0% fat, 58% carbs, 42% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 48
            }
        ]
    },
    {
        "slug": "cauliflower",
        "name": "CAULIFLOWER",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 30,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 33
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 30,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for CAULIFLOWER per 100g.",
            "breakdown": "0% fat, 57% carbs, 43% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 30
            }
        ]
    },
    {
        "slug": "cho-cho-marrow",
        "name": "CHO-CHO-MARROW",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 27,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 140
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 27,
            "fat": "0.0g",
            "carbs": "6.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for CHO-CHO-MARROW per 100g.",
            "breakdown": "0% fat, 86% carbs, 14% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 27
            }
        ]
    },
    {
        "slug": "cluster-beans",
        "name": "CLUSTER BEANS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 16,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 11
            },
            "dietaryFiber": {
                "value": 3
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 130
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 16,
            "fat": "0.0g",
            "carbs": "11.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for CLUSTER BEANS per 100g.",
            "breakdown": "0% fat, 79% carbs, 21% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 16
            }
        ]
    },
    {
        "slug": "colocasia-stem",
        "name": "COLOCASIA STEM",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 18,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 60
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 18,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for COLOCASIA STEM per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 18
            }
        ]
    },
    {
        "slug": "cowpea-pods",
        "name": "COWPEA PODS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 48,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 8
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 72
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 48,
            "fat": "0.0g",
            "carbs": "8.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for COWPEA PODS per 100g.",
            "breakdown": "0% fat, 67% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 48
            }
        ]
    },
    {
        "slug": "cucumber",
        "name": "CUCUMBER",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Salads",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 13,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 2
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 13,
            "fat": "0.0g",
            "carbs": "2.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for CUCUMBER per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 13
            }
        ]
    },
    {
        "slug": "doble-beans",
        "name": "DOBLE BEANS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 85,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 12
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 8
            },
            "calcium": {
                "value": 40
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 85,
            "fat": "0.0g",
            "carbs": "12.0g",
            "protein": "8.0g",
            "summaryText": "Nutritional facts for DOBLE BEANS per 100g.",
            "breakdown": "0% fat, 56% carbs, 44% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 85
            }
        ]
    },
    {
        "slug": "drumstick",
        "name": "DRUMSTICK",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 26,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 5
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 30
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 26,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for DRUMSTICK per 100g.",
            "breakdown": "0% fat, 67% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 26
            }
        ]
    },
    {
        "slug": "drumstick-flowers",
        "name": "DRUMSTICK flowers",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 50,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 51
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 50,
            "fat": "1.0g",
            "carbs": "7.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for DRUMSTICK flowers per 100g.",
            "breakdown": "18% fat, 52% carbs, 30% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 50
            }
        ]
    },
    {
        "slug": "field-beans-tender",
        "name": "FIELD BEANS, tender",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 48,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 210
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 48,
            "fat": "1.0g",
            "carbs": "7.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for FIELD BEANS, tender per 100g.",
            "breakdown": "19% fat, 58% carbs, 23% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 48
            }
        ]
    },
    {
        "slug": "figs-red-ficus-cunia",
        "name": "FIGS, red (Ficus cunia)",
        "cuisine": "Indian",
        "mealCategory": "Fruit",
        "foodGroup": "Fruit",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 53,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 11
            },
            "dietaryFiber": {
                "value": 6
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 187
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 53,
            "fat": "1.0g",
            "carbs": "11.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for FIGS, red (Ficus cunia) per 100g.",
            "breakdown": "17% fat, 83% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 53
            }
        ]
    },
    {
        "slug": "french-beans",
        "name": "FRENCH BEANS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 26,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 26,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for FRENCH BEANS per 100g.",
            "breakdown": "0% fat, 62% carbs, 38% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 26
            }
        ]
    },
    {
        "slug": "ghosala",
        "name": "GHOSALA",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 18,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 36
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 18,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for GHOSALA per 100g.",
            "breakdown": "0% fat, 67% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 18
            }
        ]
    },
    {
        "slug": "giant-chillies-capsicum",
        "name": "GIANT CHILLIES (capsicum)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 24,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 24,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for GIANT CHILLIES (capsicum) per 100g.",
            "breakdown": "0% fat, 80% carbs, 20% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 24
            }
        ]
    },
    {
        "slug": "jack-tender",
        "name": "JACK, tender",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 51,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 9
            },
            "dietaryFiber": {
                "value": 3
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 30
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 51,
            "fat": "0.0g",
            "carbs": "9.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for JACK, tender per 100g.",
            "breakdown": "0% fat, 75% carbs, 25% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 51
            }
        ]
    },
    {
        "slug": "jack-fruit-seeds",
        "name": "JACK FRUIT, seeds",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Nuts & Seeds",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 133,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 26
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 133,
            "fat": "0.0g",
            "carbs": "26.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for JACK FRUIT, seeds per 100g.",
            "breakdown": "0% fat, 78% carbs, 22% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 133
            }
        ]
    },
    {
        "slug": "kankoda",
        "name": "KANKODA",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 52,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 8
            },
            "dietaryFiber": {
                "value": 3
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 33
            },
            "iron": {
                "value": 5
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 52,
            "fat": "1.0g",
            "carbs": "8.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for KANKODA per 100g.",
            "breakdown": "17% fat, 62% carbs, 21% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 52
            }
        ]
    },
    {
        "slug": "karonda-fresh",
        "name": "KARONDA fresh",
        "cuisine": "Indian",
        "mealCategory": "Fruit",
        "foodGroup": "Fruit",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 42,
            "totalFat": {
                "value": 3
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 21
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 42,
            "fat": "3.0g",
            "carbs": "3.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for KARONDA fresh per 100g.",
            "breakdown": "64% fat, 29% carbs, 7% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 42
            }
        ]
    },
    {
        "slug": "karonda-dry",
        "name": "KARONDA dry",
        "cuisine": "Indian",
        "mealCategory": "Fruit",
        "foodGroup": "Fruit",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 364,
            "totalFat": {
                "value": 10
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 67
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 160
            },
            "iron": {
                "value": 39
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 364,
            "fat": "10.0g",
            "carbs": "67.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for KARONDA dry per 100g.",
            "breakdown": "25% fat, 73% carbs, 2% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 364
            }
        ]
    },
    {
        "slug": "kovai",
        "name": "KOVAI",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 18,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 40
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 18,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for KOVAI per 100g.",
            "breakdown": "0% fat, 67% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 18
            }
        ]
    },
    {
        "slug": "knol-khol",
        "name": "KNOL-KHOL",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 21,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 21,
            "fat": "0.0g",
            "carbs": "4.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for KNOL-KHOL per 100g.",
            "breakdown": "0% fat, 76% carbs, 24% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 21
            }
        ]
    },
    {
        "slug": "ladies-fingers",
        "name": "LADIES FINGERS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 35,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 66
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 35,
            "fat": "0.0g",
            "carbs": "6.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for LADIES FINGERS per 100g.",
            "breakdown": "0% fat, 67% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 35
            }
        ]
    },
    {
        "slug": "lakuch-raw",
        "name": "LAKUCH, raw",
        "cuisine": "Indian",
        "mealCategory": "Fruit",
        "foodGroup": "Fruit",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 73,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 14
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 73,
            "fat": "1.0g",
            "carbs": "14.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for LAKUCH, raw per 100g.",
            "breakdown": "12% fat, 77% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 73
            }
        ]
    },
    {
        "slug": "leeks",
        "name": "LEEKS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 77,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 17
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 50
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 77,
            "fat": "0.0g",
            "carbs": "17.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for LEEKS per 100g.",
            "breakdown": "0% fat, 89% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 77
            }
        ]
    },
    {
        "slug": "lotus-stem-dry",
        "name": "LOTUS STEM, dry",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 234,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 51
            },
            "dietaryFiber": {
                "value": 25
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 405
            },
            "iron": {
                "value": 60
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 234,
            "fat": "1.0g",
            "carbs": "51.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for LOTUS STEM, dry per 100g.",
            "breakdown": "4% fat, 87% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 234
            }
        ]
    },
    {
        "slug": "mango-green",
        "name": "MANGO, green",
        "cuisine": "Indian",
        "mealCategory": "Fruit",
        "foodGroup": "Fruit",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 44,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 44,
            "fat": "0.0g",
            "carbs": "10.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for MANGO, green per 100g.",
            "breakdown": "0% fat, 91% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 44
            }
        ]
    },
    {
        "slug": "papaya-green",
        "name": "PAPAYA, green",
        "cuisine": "Indian",
        "mealCategory": "Fruit",
        "foodGroup": "Fruit",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 27,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 28
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 27,
            "fat": "0.0g",
            "carbs": "6.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for PAPAYA, green per 100g.",
            "breakdown": "0% fat, 86% carbs, 14% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 27
            }
        ]
    },
    {
        "slug": "parwar",
        "name": "PARWAR",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 20,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 2
            },
            "dietaryFiber": {
                "value": 3
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 30
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 20,
            "fat": "0.0g",
            "carbs": "2.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for PARWAR per 100g.",
            "breakdown": "0% fat, 40% carbs, 60% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 20
            }
        ]
    },
    {
        "slug": "pink-beans",
        "name": "PINK BEANS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 44,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 2
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 54
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 44,
            "fat": "0.0g",
            "carbs": "7.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for PINK BEANS per 100g.",
            "breakdown": "0% fat, 58% carbs, 42% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 44
            }
        ]
    },
    {
        "slug": "plantain-flower",
        "name": "PLANTAIN flower",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 34,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 32
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 34,
            "fat": "1.0g",
            "carbs": "5.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for PLANTAIN flower per 100g.",
            "breakdown": "26% fat, 59% carbs, 15% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 34
            }
        ]
    },
    {
        "slug": "plantain-green",
        "name": "PLANTAIN green",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 64,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 14
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 6
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 64,
            "fat": "0.0g",
            "carbs": "14.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for PLANTAIN green per 100g.",
            "breakdown": "0% fat, 87% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 64
            }
        ]
    },
    {
        "slug": "plantain-stem",
        "name": "PLANTAIN stem",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 42,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 42,
            "fat": "0.0g",
            "carbs": "10.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for PLANTAIN stem per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 42
            }
        ]
    },
    {
        "slug": "pumpkin-fruit",
        "name": "PUMPKIN fruit",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Fruit",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 25,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 25,
            "fat": "0.0g",
            "carbs": "5.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for PUMPKIN fruit per 100g.",
            "breakdown": "0% fat, 83% carbs, 17% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 25
            }
        ]
    },
    {
        "slug": "pumpkin-flowers",
        "name": "PUMPKIN flowers",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 39,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 120
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 39,
            "fat": "1.0g",
            "carbs": "6.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for PUMPKIN flowers per 100g.",
            "breakdown": "23% fat, 62% carbs, 15% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 39
            }
        ]
    },
    {
        "slug": "rigde-gourd",
        "name": "RIGDE GOURD",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 17,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 18
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 17,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for RIGDE GOURD per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 17
            }
        ]
    },
    {
        "slug": "snake-gourd",
        "name": "SNAKE GOURD",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 18,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 26
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 18,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for SNAKE GOURD per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 18
            }
        ]
    },
    {
        "slug": "sundakai-dry",
        "name": "SUNDAKAI, dry",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 269,
            "totalFat": {
                "value": 2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 55
            },
            "dietaryFiber": {
                "value": 18
            },
            "protein": {
                "value": 8
            },
            "calcium": {
                "value": 390
            },
            "iron": {
                "value": 22
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 269,
            "fat": "2.0g",
            "carbs": "55.0g",
            "protein": "8.0g",
            "summaryText": "Nutritional facts for SUNDAKAI, dry per 100g.",
            "breakdown": "7% fat, 82% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 269
            }
        ]
    },
    {
        "slug": "sword-beans",
        "name": "SWORD BEANS",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 44,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 8
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 60
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 44,
            "fat": "0.0g",
            "carbs": "8.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for SWORD BEANS per 100g.",
            "breakdown": "0% fat, 73% carbs, 27% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 44
            }
        ]
    },
    {
        "slug": "tinda-tender",
        "name": "TINDA, tender",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 21,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 25
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 21,
            "fat": "0.0g",
            "carbs": "3.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for TINDA, tender per 100g.",
            "breakdown": "0% fat, 57% carbs, 43% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 21
            }
        ]
    },
    {
        "slug": "tomato-green",
        "name": "TOMATO, green",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 23,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 23,
            "fat": "1.0g",
            "carbs": "4.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for TOMATO, green per 100g.",
            "breakdown": "39% fat, 42% carbs, 19% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 23
            }
        ]
    },
    {
        "slug": "tomatillo",
        "name": "TOMATILLO",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 31,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 7
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 31,
            "fat": "1.0g",
            "carbs": "6.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for TOMATILLO per 100g.",
            "breakdown": "29% fat, 58% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 31
            }
        ]
    },
    {
        "slug": "tree-tomato",
        "name": "TREE TOMATO",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 35,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 7
            },
            "dietaryFiber": {
                "value": 4
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 12
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 35,
            "fat": "0.0g",
            "carbs": "7.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for TREE TOMATO per 100g.",
            "breakdown": "0% fat, 87% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 35
            }
        ]
    },
    {
        "slug": "wood-apple",
        "name": "WOOD APPLE",
        "cuisine": "Indian",
        "mealCategory": "Fruit",
        "foodGroup": "Fruit",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 134,
            "totalFat": {
                "value": 4
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 18
            },
            "dietaryFiber": {
                "value": 5
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 130
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 134,
            "fat": "4.0g",
            "carbs": "18.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for WOOD APPLE per 100g.",
            "breakdown": "27% fat, 54% carbs, 19% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 134
            }
        ]
    },
    {
        "slug": "zizyphus",
        "name": "ZIZYPHUS",
        "cuisine": "Indian",
        "mealCategory": "Fruit",
        "foodGroup": "Fruit",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 74,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 17
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 4
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 74,
            "fat": "0.0g",
            "carbs": "17.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for ZIZYPHUS per 100g.",
            "breakdown": "0% fat, 94% carbs, 6% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 74
            }
        ]
    },
    {
        "slug": "milk-cows",
        "name": "MILK cow's",
        "cuisine": "Indian",
        "mealCategory": "Beverages",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 67,
            "totalFat": {
                "value": 4
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 4
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 120
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 67,
            "fat": "4.0g",
            "carbs": "4.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for MILK cow's per 100g.",
            "breakdown": "54% fat, 24% carbs, 22% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 67
            }
        ]
    },
    {
        "slug": "curds",
        "name": "CURDS",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 60,
            "totalFat": {
                "value": 4
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 149
            },
            "iron": {
            "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 60,
            "fat": "4.0g",
            "carbs": "3.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for CURDS per 100g.",
            "breakdown": "60% fat, 20% carbs, 20% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 60
            }
        ]
    },
    {
        "slug": "butter-milk",
        "name": "BUTTER MILK",
        "cuisine": "Indian",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 15,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 0
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 30
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 15,
            "fat": "1.0g",
            "carbs": "0.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for BUTTER MILK per 100g.",
            "breakdown": "60% fat, 0% carbs, 40% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 15
            }
        ]
    },
    {
        "slug": "skimmed-milk-liquid",
        "name": "SKIMMED MILK, liquid",
        "cuisine": "Indian",
        "mealCategory": "Beverages",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 29,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 120
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 29,
            "fat": "0.0g",
            "carbs": "5.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for SKIMMED MILK, liquid per 100g.",
            "breakdown": "0% fat, 71% carbs, 29% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 29
            }
        ]
    },
    {
        "slug": "channa",
        "name": "CHANNA",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Beans & Legumes",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 265,
            "totalFat": {
                "value": 21
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 1
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 18
            },
            "calcium": {
                "value": 208
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 265,
            "fat": "21.0g",
            "carbs": "1.0g",
            "protein": "18.0g",
            "summaryText": "Nutritional facts for CHANNA per 100g.",
            "breakdown": "72% fat, 1% carbs, 27% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 265
            }
        ]
    },
    {
        "slug": "cheese",
        "name": "CHEESE",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 348,
            "totalFat": {
                "value": 25
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 6
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 24
            },
            "calcium": {
                "value": 790
            },
            "iron": {
                "value": 2
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 348,
            "fat": "25.0g",
            "carbs": "6.0g",
            "protein": "24.0g",
            "summaryText": "Nutritional facts for CHEESE per 100g.",
            "breakdown": "65% fat, 7% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 348
            }
        ]
    },
    {
        "slug": "khoa-whole-cow-milk",
        "name": "KHOA (whole cow milk)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 413,
            "totalFat": {
                "value": 26
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 25
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 20
            },
            "calcium": {
                "value": 956
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 413,
            "fat": "26.0g",
            "carbs": "25.0g",
            "protein": "20.0g",
            "summaryText": "Nutritional facts for KHOA (whole cow milk) per 100g.",
            "breakdown": "57% fat, 24% carbs, 19% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 413
            }
        ]
    },
    {
        "slug": "khoa-whole-buffalo",
        "name": "KHOA (whole buffalo)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 421,
            "totalFat": {
                "value": 31
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 20
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 15
            },
            "calcium": {
                "value": 650
            },
            "iron": {
                "value": 6
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 421,
            "fat": "31.0g",
            "carbs": "20.0g",
            "protein": "15.0g",
            "summaryText": "Nutritional facts for KHOA (whole buffalo) per 100g.",
            "breakdown": "66% fat, 19% carbs, 15% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 421
            }
        ]
    },
    {
        "slug": "whole-milk-powder-cows",
        "name": "WHOLE MILK POWDER (cow's)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 496,
            "totalFat": {
                "value": 27
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 38
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 26
            },
            "calcium": {
                "value": 950
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 496,
            "fat": "27.0g",
            "carbs": "38.0g",
            "protein": "26.0g",
            "summaryText": "Nutritional facts for WHOLE MILK POWDER (cow's) per 100g.",
            "breakdown": "49% fat, 31% carbs, 20% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 496
            }
        ]
    },
    {
        "slug": "skimmed-milk-powder-cows",
        "name": "SKIMMED MILK POWDER (cow's)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 357,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 51
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 38
            },
            "calcium": {
                "value": 1370
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 357,
            "fat": "0.0g",
            "carbs": "51.0g",
            "protein": "38.0g",
            "summaryText": "Nutritional facts for SKIMMED MILK POWDER (cow's) per 100g.",
            "breakdown": "0% fat, 57% carbs, 43% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 357
            }
        ]
    },
    {
        "slug": "butter",
        "name": "BUTTER",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 729,
            "totalFat": {
                "value": 81
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 0
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 729,
            "fat": "81.0g",
            "carbs": "0.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for BUTTER per 100g.",
            "breakdown": "100% fat, 0% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 729
            }
        ]
    },
    {
        "slug": "ghee-cow",
        "name": "GHEE (cow)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 900,
            "totalFat": {
                "value": 100
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 0
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 900,
            "fat": "100.0g",
            "carbs": "0.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for GHEE (cow) per 100g.",
            "breakdown": "100% fat, 0% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 900
            }
        ]
    },
    {
        "slug": "hydrogenated-oil-fortified",
        "name": "HYDROGENATED OIL (fortified)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 900,
            "totalFat": {
                "value": 100
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 0
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 900,
            "fat": "100.0g",
            "carbs": "0.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for HYDROGENATED OIL (fortified) per 100g.",
            "breakdown": "100% fat, 0% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 900
            }
        ]
    },
    {
        "slug": "cooking-oil-groundnut-gingelly-palmolein-mustard-coconut-etc",
        "name": "COOKING OIL (Groundnut, Gingelly, Palmolein, Mustard, Coconut, etc.)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 900,
            "totalFat": {
                "value": 100
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 0
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 900,
            "fat": "100.0g",
            "carbs": "0.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for COOKING OIL (Groundnut, Gingelly, Palmolein, Mustard, Coconut, etc.) per 100g.",
            "breakdown": "100% fat, 0% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 900
            }
        ]
    },
    {
        "slug": "sugar-cane",
        "name": "SUGAR CANE",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 398,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 99
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 12
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 398,
            "fat": "0.0g",
            "carbs": "99.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for SUGAR CANE per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 398
            }
        ]
    },
    {
        "slug": "honey",
        "name": "HONEY",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 319,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 79
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 5
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 319,
            "fat": "0.0g",
            "carbs": "79.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for HONEY per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 319
            }
        ]
    },
    {
        "slug": "jaggery-cane",
        "name": "JAGGERY (cane)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Sweets, Candy & Desserts",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 383,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 95
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 80
            },
            "iron": {
                "value": 3
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 383,
            "fat": "0.0g",
            "carbs": "95.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for JAGGERY (cane) per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 383
            }
        ]
    },
    {
        "slug": "jaggery-coconut-palm",
        "name": "JAGGERY (coconut palm)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Sweets, Candy & Desserts",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 340,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 83
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 1638
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 340,
            "fat": "0.0g",
            "carbs": "83.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for JAGGERY (coconut palm) per 100g.",
            "breakdown": "0% fat, 99% carbs, 1% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 340
            }
        ]
    },
    {
        "slug": "jaggery-date-palm",
        "name": "JAGGERY (date palm)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Sweets, Candy & Desserts",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 353,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 86
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 363
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 353,
            "fat": "0.0g",
            "carbs": "86.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for JAGGERY (date palm) per 100g.",
            "breakdown": "0% fat, 99% carbs, 1% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 353
            }
        ]
    },
    {
        "slug": "jaggery-fan-palm",
        "name": "JAGGERY (fan palm)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Sweets, Candy & Desserts",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 359,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 98
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 225
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 359,
            "fat": "0.0g",
            "carbs": "98.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for JAGGERY (fan palm) per 100g.",
            "breakdown": "0% fat, 99% carbs, 1% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 359
            }
        ]
    },
    {
        "slug": "jaggery-sago-palm",
        "name": "JAGGERY (sago palm)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Sweets, Candy & Desserts",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 349,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 85
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 1252
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 349,
            "fat": "0.0g",
            "carbs": "85.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for JAGGERY (sago palm) per 100g.",
            "breakdown": "0% fat, 98% carbs, 2% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 349
            }
        ]
    },
    {
        "slug": "sago",
        "name": "SAGO",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 351,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 87
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 1
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 351,
            "fat": "0.0g",
            "carbs": "87.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for SAGO per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 351
            }
        ]
    },
    {
        "slug": "sugar-cane-juice",
        "name": "SUGAR CANE JUICE",
        "cuisine": "Indian",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 39,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 9
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0
            },
            "calcium": {
                "value": 10
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 39,
            "fat": "0.0g",
            "carbs": "9.0g",
            "protein": "0.0g",
            "summaryText": "Nutritional facts for SUGAR CANE JUICE per 100g.",
            "breakdown": "0% fat, 100% carbs, 0% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 39
            }
        ]
    },
    {
        "slug": "coconut-oil",
        "name": "COCONUT OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 0,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 88
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 8
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 0,
            "fat": "0.0g",
            "carbs": "88.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for COCONUT OIL per 100g.",
            "breakdown": "0% fat, 98% carbs, 2% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 0
            }
        ]
    },
    {
        "slug": "corn-oil",
        "name": "CORN OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 11,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 13
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 25
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 11,
            "fat": "0.0g",
            "carbs": "13.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for CORN OIL per 100g.",
            "breakdown": "0% fat, 87% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 11
            }
        ]
    },
    {
        "slug": "cotton-seed-oil",
        "name": "COTTON SEED OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 24,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 26
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1
            },
            "calcium": {
                "value": 23
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 24,
            "fat": "0.0g",
            "carbs": "26.0g",
            "protein": "1.0g",
            "summaryText": "Nutritional facts for COTTON SEED OIL per 100g.",
            "breakdown": "0% fat, 96% carbs, 4% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 24
            }
        ]
    },
    {
        "slug": "groundnut-oil",
        "name": "GROUNDNUT OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 13,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 21
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 48
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 13,
            "fat": "1.0g",
            "carbs": "21.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for GROUNDNUT OIL per 100g.",
            "breakdown": "7% fat, 88% carbs, 5% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 13
            }
        ]
    },
    {
        "slug": "mustard-or-rapeseed-oil",
        "name": "MUSTARD or RAPESEED OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 3,
            "totalFat": {
                "value": 1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 11
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 7
            },
            "calcium": {
                "value": 9
            },
            "iron": {
                "value": 14
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 3,
            "fat": "1.0g",
            "carbs": "11.0g",
            "protein": "7.0g",
            "summaryText": "Nutritional facts for MUSTARD or RAPESEED OIL per 100g.",
            "breakdown": "33% fat, 39% carbs, 28% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 3
            }
        ]
    },
    {
        "slug": "olive-oil",
        "name": "OLIVE OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 11,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 14
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 71
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 11,
            "fat": "0.0g",
            "carbs": "14.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for OLIVE OIL per 100g.",
            "breakdown": "0% fat, 88% carbs, 12% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 11
            }
        ]
    },
    {
        "slug": "palm-oil",
        "name": "PALM OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 42,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 48
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 4
            },
            "calcium": {
                "value": 38
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 42,
            "fat": "0.0g",
            "carbs": "48.0g",
            "protein": "4.0g",
            "summaryText": "Nutritional facts for PALM OIL per 100g.",
            "breakdown": "0% fat, 92% carbs, 8% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 42
            }
        ]
    },
    {
        "slug": "palmolein",
        "name": "PALMOLEIN",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 42,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 48
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 41
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 42,
            "fat": "0.0g",
            "carbs": "48.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for PALMOLEIN per 100g.",
            "breakdown": "0% fat, 93% carbs, 7% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 42
            }
        ]
    },
    {
        "slug": "rice-bran-oil",
        "name": "RICE BRAN OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 16,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 19
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 39
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 16,
            "fat": "0.0g",
            "carbs": "19.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for RICE BRAN OIL per 100g.",
            "breakdown": "0% fat, 90% carbs, 10% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 16
            }
        ]
    },
    {
        "slug": "saflower-oil",
        "name": "SAFLOWER OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 8,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 11
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 18
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 8,
            "fat": "0.0g",
            "carbs": "11.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for SAFLOWER OIL per 100g.",
            "breakdown": "0% fat, 85% carbs, 15% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 8
            }
        ]
    },
    {
        "slug": "sesame-oil",
        "name": "SESAME OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 10,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 13
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3
            },
            "calcium": {
                "value": 41
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 10,
            "fat": "0.0g",
            "carbs": "13.0g",
            "protein": "3.0g",
            "summaryText": "Nutritional facts for SESAME OIL per 100g.",
            "breakdown": "0% fat, 81% carbs, 19% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 10
            }
        ]
    },
    {
        "slug": "soyabean-oil",
        "name": "SOYABEAN OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 10,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 13
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 29
            },
            "iron": {
                "value": 6
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 10,
            "fat": "0.0g",
            "carbs": "13.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for SOYABEAN OIL per 100g.",
            "breakdown": "0% fat, 87% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 10
            }
        ]
    },
    {
        "slug": "sunflower-oil",
        "name": "SUNFLOWER OIL",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 6,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 9
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 25
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 6,
            "fat": "0.0g",
            "carbs": "9.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for SUNFLOWER OIL per 100g.",
            "breakdown": "0% fat, 82% carbs, 18% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 6
            }
        ]
    },
    {
        "slug": "butter-oil",
        "name": "BUTTER oil",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Other",
        "nutritionFacts": {
            "servingSize": "100 g",
            "calories": 21,
            "totalFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 50
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 10
            },
            "calcium": {
                "value": 20
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 21,
            "fat": "0.0g",
            "carbs": "50.0g",
            "protein": "10.0g",
            "summaryText": "Nutritional facts for BUTTER oil per 100g.",
            "breakdown": "0% fat, 83% carbs, 17% protein."
        },
        "servingSizes": [
            {
                "size": "100 g",
                "calories": 21
            }
        ]
    },
    {
        "slug": "chapati-1-no",
        "name": "Chapati (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 147,
            "totalFat": {
                "value": 5.5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 21
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 3.6
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 147,
            "fat": "5.5g",
            "carbs": "21.0g",
            "protein": "3.6g",
            "summaryText": "Nutritional facts for Chapati (1 no.) per serving.",
            "breakdown": "34% fat, 57% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 147
            }
        ]
    },
    {
        "slug": "phulkas-1-no",
        "name": "Phulkas (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 51,
            "totalFat": {
                "value": 0.3
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 0.5
            },
            "protein": {
                "value": 1.8
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 51,
            "fat": "0.3g",
            "carbs": "10.0g",
            "protein": "1.8g",
            "summaryText": "Nutritional facts for Phulkas (1 no.) per serving.",
            "breakdown": "5% fat, 78% carbs, 17% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 51
            }
        ]
    },
    {
        "slug": "puri-1-no",
        "name": "Puri (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 69,
            "totalFat": {
                "value": 5.1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0.8
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 69,
            "fat": "5.1g",
            "carbs": "5.0g",
            "protein": "0.8g",
            "summaryText": "Nutritional facts for Puri (1 no.) per serving.",
            "breakdown": "67% fat, 29% carbs, 4% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 69
            }
        ]
    },
    {
        "slug": "plain-paratha-1-no",
        "name": "Plain paratha (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 141,
            "totalFat": {
                "value": 10.25
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 0.5
            },
            "protein": {
                "value": 1.8
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 141,
            "fat": "10.3g",
            "carbs": "10.0g",
            "protein": "1.8g",
            "summaryText": "Nutritional facts for Plain paratha (1 no.) per serving.",
            "breakdown": "65% fat, 28% carbs, 7% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 141
            }
        ]
    },
    {
        "slug": "stuffed-paratha-1-no",
        "name": "Stuffed paratha (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 175,
            "totalFat": {
                "value": 10.25
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 21
            },
            "dietaryFiber": {
                "value": 0.5
            },
            "protein": {
                "value": 2.4
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 175,
            "fat": "10.3g",
            "carbs": "21.0g",
            "protein": "2.4g",
            "summaryText": "Nutritional facts for Stuffed paratha (1 no.) per serving.",
            "breakdown": "53% fat, 48% carbs, -1% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 175
            }
        ]
    },
    {
        "slug": "bajra-bhakri-1-no",
        "name": "Bajra bhakri (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 108,
            "totalFat": {
                "value": 1.5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 20
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3.5
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 108,
            "fat": "1.5g",
            "carbs": "20.0g",
            "protein": "3.5g",
            "summaryText": "Nutritional facts for Bajra bhakri (1 no.) per serving.",
            "breakdown": "12% fat, 74% carbs, 14% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 108
            }
        ]
    },
    {
        "slug": "jowar-bhakri-1-no",
        "name": "Jowar bhakri (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 105,
            "totalFat": {
                "value": 0.6
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 22
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3.1
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 105,
            "fat": "0.6g",
            "carbs": "22.0g",
            "protein": "3.1g",
            "summaryText": "Nutritional facts for Jowar bhakri (1 no.) per serving.",
            "breakdown": "5% fat, 84% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 105
            }
        ]
    },
    {
        "slug": "khakhra-1-no",
        "name": "Khakhra (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 51,
            "totalFat": {
                "value": 0.3
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 0.5
            },
            "protein": {
                "value": 1.8
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 51,
            "fat": "0.3g",
            "carbs": "10.0g",
            "protein": "1.8g",
            "summaryText": "Nutritional facts for Khakhra (1 no.) per serving.",
            "breakdown": "5% fat, 78% carbs, 17% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 51
            }
        ]
    },
    {
        "slug": "potato-bhaji-1-katori",
        "name": "Potato bhaji (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Vegetables",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 179,
            "totalFat": {
                "value": 5.1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 31
            },
            "dietaryFiber": {
                "value": 1
            },
            "protein": {
                "value": 2.2
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 179,
            "fat": "5.1g",
            "carbs": "31.0g",
            "protein": "2.2g",
            "summaryText": "Nutritional facts for Potato bhaji (1 katori) per serving.",
            "breakdown": "26% fat, 69% carbs, 5% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 179
            }
        ]
    },
    {
        "slug": "potato-wafers-1-katori",
        "name": "Potato wafers (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 106,
            "totalFat": {
                "value": 8
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0.6
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 106,
            "fat": "8.0g",
            "carbs": "10.0g",
            "protein": "0.6g",
            "summaryText": "Nutritional facts for Potato wafers (1 katori) per serving.",
            "breakdown": "68% fat, 38% carbs, -6% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 106
            }
        ]
    },
    {
        "slug": "potato-tikki-shallow-fried-1-no",
        "name": "Potato tikki (shallow fried) (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 23,
            "totalFat": {
                "value": 2.5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3.4
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0.2
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 23,
            "fat": "2.5g",
            "carbs": "3.4g",
            "protein": "0.2g",
            "summaryText": "Nutritional facts for Potato tikki (shallow fried) (1 no.) per serving.",
            "breakdown": "98% fat, 59% carbs, -57% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 23
            }
        ]
    },
    {
        "slug": "potato-tikki-deep-fried-1-no",
        "name": "Potato tikki (deep fried) (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 60,
            "totalFat": {
                "value": 5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 3.4
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 0.2
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 60,
            "fat": "5.0g",
            "carbs": "3.4g",
            "protein": "0.2g",
            "summaryText": "Nutritional facts for Potato tikki (deep fried) (1 no.) per serving.",
            "breakdown": "75% fat, 23% carbs, 2% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 60
            }
        ]
    },
    {
        "slug": "cooked-rice-1-katori",
        "name": "Cooked rice (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Pasta, Rice & Noodles",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 104,
            "totalFat": {
                "value": 0.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 23
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 104,
            "fat": "0.2g",
            "carbs": "23.0g",
            "protein": "2.0g",
            "summaryText": "Nutritional facts for Cooked rice (1 katori) per serving.",
            "breakdown": "2% fat, 89% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 104
            }
        ]
    },
    {
        "slug": "khichadi-1-katori",
        "name": "Khichadi (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Pasta, Rice & Noodles",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 104,
            "totalFat": {
                "value": 0.3
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 20
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 4.7
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 104,
            "fat": "0.3g",
            "carbs": "20.0g",
            "protein": "4.7g",
            "summaryText": "Nutritional facts for Khichadi (1 katori) per serving.",
            "breakdown": "3% fat, 77% carbs, 20% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 104
            }
        ]
    },
    {
        "slug": "plain-dal-1-katori",
        "name": "Plain dal (1 Katori)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Soups",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 101,
            "totalFat": {
                "value": 0.5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 17
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 6.7
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 101,
            "fat": "0.5g",
            "carbs": "17.0g",
            "protein": "6.7g",
            "summaryText": "Nutritional facts for Plain dal (1 Katori) per serving.",
            "breakdown": "4% fat, 67% carbs, 29% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 101
            }
        ]
    },
    {
        "slug": "dal-with-vaghar-1-katori",
        "name": "Dal with vaghar (1 Katori)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Soups",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 146,
            "totalFat": {
                "value": 5.5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 17
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 6.7
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 146,
            "fat": "5.5g",
            "carbs": "17.0g",
            "protein": "6.7g",
            "summaryText": "Nutritional facts for Dal with vaghar (1 Katori) per serving.",
            "breakdown": "34% fat, 47% carbs, 19% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 146
            }
        ]
    },
    {
        "slug": "mung-ki-dal-1-katori",
        "name": "Mung ki dal (1 Katori)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Soups",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 104,
            "totalFat": {
                "value": 0.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 18
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 7.4
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 104,
            "fat": "0.2g",
            "carbs": "18.0g",
            "protein": "7.4g",
            "summaryText": "Nutritional facts for Mung ki dal (1 Katori) per serving.",
            "breakdown": "2% fat, 69% carbs, 29% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 104
            }
        ]
    },
    {
        "slug": "mung-ki-dal-with-voghar-1-katori",
        "name": "Mung ki dal with Voghar (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Soups",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 149,
            "totalFat": {
                "value": 5.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 18
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 7.4
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 149,
            "fat": "5.2g",
            "carbs": "18.0g",
            "protein": "7.4g",
            "summaryText": "Nutritional facts for Mung ki dal with Voghar (1 katori) per serving.",
            "breakdown": "31% fat, 48% carbs, 21% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 149
            }
        ]
    },
    {
        "slug": "masoor-ki-dal-1-katori",
        "name": "Masoor ki dal (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Soups",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 149,
            "totalFat": {
                "value": 5.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 18
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 7.6
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 149,
            "fat": "5.2g",
            "carbs": "18.0g",
            "protein": "7.6g",
            "summaryText": "Nutritional facts for Masoor ki dal (1 katori) per serving.",
            "breakdown": "31% fat, 48% carbs, 21% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 149
            }
        ]
    },
    {
        "slug": "samosa-1-no",
        "name": "Samosa (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 248,
            "totalFat": {
                "value": 18.1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 21
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2.3
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 248,
            "fat": "18.1g",
            "carbs": "21.0g",
            "protein": "2.3g",
            "summaryText": "Nutritional facts for Samosa (1 no.) per serving.",
            "breakdown": "66% fat, 32% carbs, 2% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 248
            }
        ]
    },
    {
        "slug": "sev-1-katori",
        "name": "Sev (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 374,
            "totalFat": {
                "value": 27.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 24
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 8.3
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 374,
            "fat": "27.2g",
            "carbs": "24.0g",
            "protein": "8.3g",
            "summaryText": "Nutritional facts for Sev (1 katori) per serving.",
            "breakdown": "65% fat, 26% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 374
            }
        ]
    },
    {
        "slug": "methi-muthia-8-no",
        "name": "Methi muthia (8 no.)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 188,
            "totalFat": {
                "value": 13.8
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10.4
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3.7
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 188,
            "fat": "13.8g",
            "carbs": "10.4g",
            "protein": "3.7g",
            "summaryText": "Nutritional facts for Methi muthia (8 no.) per serving.",
            "breakdown": "66% fat, 22% carbs, 12% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 188
            }
        ]
    },
    {
        "slug": "potato-wada-1-no",
        "name": "Potato wada (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 118,
            "totalFat": {
                "value": 3.7
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 22
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 3.1
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 118,
            "fat": "3.7g",
            "carbs": "22.0g",
            "protein": "3.1g",
            "summaryText": "Nutritional facts for Potato wada (1 no.) per serving.",
            "breakdown": "28% fat, 74% carbs, -1% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 118
            }
        ]
    },
    {
        "slug": "french-fries-8-9-no",
        "name": "French fries (8-9 no.)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 140,
            "totalFat": {
                "value": 8.1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 16
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1.1
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 140,
            "fat": "8.1g",
            "carbs": "16.0g",
            "protein": "1.1g",
            "summaryText": "Nutritional facts for French fries (8-9 no.) per serving.",
            "breakdown": "52% fat, 46% carbs, 2% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 140
            }
        ]
    },
    {
        "slug": "bread-slices-2-no",
        "name": "Bread slices (2 no.)",
        "cuisine": "Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 98,
            "totalFat": {
                "value": 0.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 20.7
            },
            "dietaryFiber": {
                "value": 0.08
            },
            "protein": {
                "value": 3.1
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 98,
            "fat": "0.2g",
            "carbs": "20.7g",
            "protein": "3.1g",
            "summaryText": "Nutritional facts for Bread slices (2 no.) per serving.",
            "breakdown": "2% fat, 85% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 98
            }
        ]
    },
    {
        "slug": "vegetable-sandwich-1-no",
        "name": "Vegetable -Sandwich (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 179,
            "totalFat": {
                "value": 5.5
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 30
            },
            "dietaryFiber": {
                "value": 0.2
            },
            "protein": {
                "value": 3.7
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 179,
            "fat": "5.5g",
            "carbs": "30.0g",
            "protein": "3.7g",
            "summaryText": "Nutritional facts for Vegetable -Sandwich (1 no.) per serving.",
            "breakdown": "28% fat, 67% carbs, 5% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 179
            }
        ]
    },
    {
        "slug": "idli-1-no",
        "name": "Idli (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 69,
            "totalFat": {
                "value": 0.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 15
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 1.2
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 69,
            "fat": "0.2g",
            "carbs": "15.0g",
            "protein": "1.2g",
            "summaryText": "Nutritional facts for Idli (1 no.) per serving.",
            "breakdown": "3% fat, 87% carbs, 10% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 69
            }
        ]
    },
    {
        "slug": "dosa-1-no",
        "name": "Dosa (1 no.)",
        "cuisine": "Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 145,
            "totalFat": {
                "value": 5.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 21.5
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2.8
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 145,
            "fat": "5.2g",
            "carbs": "21.5g",
            "protein": "2.8g",
            "summaryText": "Nutritional facts for Dosa (1 no.) per serving.",
            "breakdown": "32% fat, 59% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 145
            }
        ]
    },
    {
        "slug": "green-chutney-1-tb-sp",
        "name": "Green chutney (1 Tb sp)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Sauces, Spices & Spreads",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 34,
            "totalFat": {
                "value": 1.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 5.7
            },
            "dietaryFiber": {
                "value": 0.2
            },
            "protein": {
                "value": 0.2
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 34,
            "fat": "1.2g",
            "carbs": "5.7g",
            "protein": "0.2g",
            "summaryText": "Nutritional facts for Green chutney (1 Tb sp) per serving.",
            "breakdown": "32% fat, 67% carbs, 1% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 34
            }
        ]
    },
    {
        "slug": "sambhaar-1-katori",
        "name": "Sambhaar (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Lunch/Dinner",
        "foodGroup": "Soups",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 200,
            "totalFat": {
                "value": 5.9
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 27.2
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 8.9
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 200,
            "fat": "5.9g",
            "carbs": "27.2g",
            "protein": "8.9g",
            "summaryText": "Nutritional facts for Sambhaar (1 katori) per serving.",
            "breakdown": "27% fat, 54% carbs, 19% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 200
            }
        ]
    },
    {
        "slug": "upma-1-katori",
        "name": "Upma (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 129,
            "totalFat": {
                "value": 5.2
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 18
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2.4
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 129,
            "fat": "5.2g",
            "carbs": "18.0g",
            "protein": "2.4g",
            "summaryText": "Nutritional facts for Upma (1 katori) per serving.",
            "breakdown": "36% fat, 56% carbs, 8% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 129
            }
        ]
    },
    {
        "slug": "pohe-1-katori",
        "name": "Pohe (1 katori)",
        "cuisine": "Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 164,
            "totalFat": {
                "value": 5.4
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 26
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 2.4
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 164,
            "fat": "5.4g",
            "carbs": "26.0g",
            "protein": "2.4g",
            "summaryText": "Nutritional facts for Pohe (1 katori) per serving.",
            "breakdown": "30% fat, 63% carbs, 7% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 164
            }
        ]
    },
    {
        "slug": "khatta-dhokla-1-serving",
        "name": "Khatta dhokla (1 serving)",
        "cuisine": "Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 217,
            "totalFat": {
                "value": 6.1
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 31
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 6.3
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 217,
            "fat": "6.1g",
            "carbs": "31.0g",
            "protein": "6.3g",
            "summaryText": "Nutritional facts for Khatta dhokla (1 serving) per serving.",
            "breakdown": "25% fat, 57% carbs, 18% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 217
            }
        ]
    },
    {
        "slug": "curd-1-bowl",
        "name": "Curd (1 bowl)",
        "cuisine": "Indian",
        "mealCategory": "Other",
        "foodGroup": "Cheese, Milk & Dairy",
        "nutritionFacts": {
            "servingSize": "1 serving",
            "calories": 234,
            "totalFat": {
                "value": 13
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0
            },
            "totalCarbohydrate": {
                "value": 10
            },
            "dietaryFiber": {
                "value": 0
            },
            "protein": {
                "value": 8.6
            },
            "calcium": {
                "value": 0
            },
            "iron": {
                "value": 0
            },
            "potassium": {
                "value": 0
            }
        },
        "nutritionSummary": {
            "calories": 234,
            "fat": "13.0g",
            "carbs": "10.0g",
            "protein": "8.6g",
            "summaryText": "Nutritional facts for Curd (1 bowl) per serving.",
            "breakdown": "50% fat, 17% carbs, 33% protein."
        },
        "servingSizes": [
            {
                "size": "1 serving",
                "calories": 234
            }
        ]
    }
]
