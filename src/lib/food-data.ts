
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
    }
]
