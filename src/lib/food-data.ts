
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
            "servingSize": "1 tea cup",
            "calories": 33.98,
            "totalFat": {
                "value": 1.12
            },
            "saturatedFat": {
                "value": 0.68
            },
            "polyunsaturatedFat": {
                "value": 0.03
            },
            "monounsaturatedFat": {
                "value": 0.3
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 6.56
            },
            "totalCarbohydrate": {
                "value": 5.43
            },
            "dietaryFiber": {
                "value": 0
            },
            "sugars": {
                "value": 5.42
            },
            "protein": {
                "value": 0.82
            },
            "calcium": {
                "value": 29.9
            },
            "iron": {
                "value": 0.05
            },
            "potassium": {
                "value": 29.35
            },
            "vitaminC": {
                "value": 0.5,
                "percent": 1
            },
            "folate": {
                "value": 1.8
            }
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
            {
                "size": "1 tea cup",
                "calories": 33.98
            }
        ]
    },
    {
        "slug": "instant-coffee",
        "name": "Instant coffee",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tea cup",
            "calories": 104.2,
            "totalFat": {
                "value": 3.36
            },
            "saturatedFat": {
                "value": 2.03
            },
            "polyunsaturatedFat": {
                "value": 0.1
            },
            "monounsaturatedFat": {
                "value": 0.91
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 22.13
            },
            "totalCarbohydrate": {
                "value": 16.44
            },
            "dietaryFiber": {
                "value": 0
            },
            "sugars": {
                "value": 16.27
            },
            "protein": {
                "value": 2.88
            },
            "calcium": {
                "value": 93.9
            },
            "iron": {
                "value": 0.27
            },
            "potassium": {
                "value": 200.25
            },
            "vitaminC": {
                "value": 1.51,
                "percent": 2
            },
            "folate": {
                "value": 5.6
            }
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
            {
                "size": "1 tea cup",
                "calories": 104.2
            }
        ]
    },
    {
        "slug": "espreso-coffee",
        "name": "Espreso coffee",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tea cup",
            "calories": 81.7,
            "totalFat": {
                "value": 3.39
            },
            "saturatedFat": {
                "value": 2.05
            },
            "polyunsaturatedFat": {
                "value": 0.1
            },
            "monounsaturatedFat": {
                "value": 0.92
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 22.15
            },
            "totalCarbohydrate": {
                "value": 10.49
            },
            "dietaryFiber": {
                "value": 0
            },
            "sugars": {
                "value": 10.36
            },
            "protein": {
                "value": 2.77
            },
            "calcium": {
                "value": 92.1
            },
            "iron": {
                "value": 0.23
            },
            "potassium": {
                "value": 164.63
            },
            "vitaminC": {
                "value": 1.51,
                "percent": 2
            },
            "folate": {
                "value": 5.53
            }
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
            {
                "size": "1 tea cup",
                "calories": 81.7
            }
        ]
    },
    {
        "slug": "iced-tea",
        "name": "Iced tea",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 33.1,
            "totalFat": {
                "value": 0.04
            },
            "saturatedFat": {
                "value": 0.02
            },
            "polyunsaturatedFat": {
                "value": 0.02
            },
            "monounsaturatedFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 0.75
            },
            "totalCarbohydrate": {
                "value": 8.64
            },
            "dietaryFiber": {
                "value": 0
            },
            "sugars": {
                "value": 8.64
            },
            "protein": {
                "value": 0.09
            },
            "calcium": {
                "value": 3.77
            },
            "iron": {
                "value": 0.07
            },
            "potassium": {
                "value": 16.69
            },
            "vitaminC": {
                "value": 5.95,
                "percent": 7
            },
            "folate": {
                "value": 1.28
            }
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
            {
                "size": "1 tall glass",
                "calories": 33.1
            }
        ]
    },
    {
        "slug": "raw-mango-drink-aam-panna",
        "name": "Raw mango drink (Aam panna)",
        "cuisine": "North Indian",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 96.44,
            "totalFat": {
                "value": 0.07
            },
            "saturatedFat": {
                "value": 0.02
            },
            "polyunsaturatedFat": {
                "value": 0.03
            },
            "monounsaturatedFat": {
                "value": 0.02
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 214.33
            },
            "totalCarbohydrate": {
                "value": 24.29
            },
            "dietaryFiber": {
                "value": 1.64
            },
            "sugars": {
                "value": 20.11
            },
            "protein": {
                "value": 0.42
            },
            "calcium": {
                "value": 19
            },
            "iron": {
                "value": 0.36
            },
            "potassium": {
                "value": 84.45
            },
            "vitaminC": {
                "value": 45.3,
                "percent": 50
            },
            "folate": {
                "value": 14.05
            }
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
            {
                "size": "1 tall glass",
                "calories": 96.44
            }
        ]
    },
    {
        "slug": "fruit-punch-with-fresh-juices",
        "name": "Fruit Punch (with fresh juices)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 196.6,
            "totalFat": {
                "value": 0.18
            },
            "saturatedFat": {
                "value": 0.03
            },
            "polyunsaturatedFat": {
                "value": 0.05
            },
            "monounsaturatedFat": {
                "value": 0.01
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 14.33
            },
            "totalCarbohydrate": {
                "value": 51.06
            },
            "dietaryFiber": {
                "value": 0.33
            },
            "sugars": {
                "value": 50.33
            },
            "protein": {
                "value": 0.76
            },
            "calcium": {
                "value": 27.59
            },
            "iron": {
                "value": 0.56
            },
            "potassium": {
                "value": 181.99
            },
            "vitaminC": {
                "value": 41.44,
                "percent": 46
            },
            "folate": {
                "value": 24.57
            }
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
            {
                "size": "1 tall glass",
                "calories": 196.6
            }
        ]
    },
    {
        "slug": "fruit-punch-with-squashes",
        "name": "Fruit Punch (with squashes)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 116.3,
            "totalFat": {
                "value": 0.08
            },
            "saturatedFat": {
                "value": 0.03
            },
            "polyunsaturatedFat": {
                "value": 0.04
            },
            "monounsaturatedFat": {
                "value": 0.01
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 11.35
            },
            "totalCarbohydrate": {
                "value": 30.12
            },
            "dietaryFiber": {
                "value": 0.85
            },
            "sugars": {
                "value": 29.58
            },
            "protein": {
                "value": 0.36
            },
            "calcium": {
                "value": 16.6
            },
            "iron": {
                "value": 0.31
            },
            "potassium": {
                "value": 83.72
            },
            "vitaminC": {
                "value": 15.08,
                "percent": 17
            },
            "folate": {
                "value": 9.13
            }
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
            {
                "size": "1 tall glass",
                "calories": 116.3
            }
        ]
    },
    {
        "slug": "lemonade",
        "name": "Lemonade",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 glass",
            "calories": 72.64,
            "totalFat": {
                "value": 0.04
            },
            "saturatedFat": {
                "value": 0.02
            },
            "polyunsaturatedFat": {
                "value": 0.02
            },
            "monounsaturatedFat": {
                "value": 0
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 99.62
            },
            "totalCarbohydrate": {
                "value": 19.13
            },
            "dietaryFiber": {
                "value": 0.06
            },
            "sugars": {
                "value": 19.11
            },
            "protein": {
                "value": 0.12
            },
            "calcium": {
                "value": 6.42
            },
            "iron": {
                "value": 0.17
            },
            "potassium": {
                "value": 20.01
            },
            "vitaminC": {
                "value": 5.27,
                "percent": 6
            },
            "folate": {
                "value": 2.11
            }
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
            {
                "size": "1 glass",
                "calories": 72.64
            }
        ]
    },
    {
        "slug": "lem-o-gin",
        "name": "Lem-o-gin",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 glass",
            "calories": 76.76,
            "totalFat": {
                "value": 0.1
            },
            "saturatedFat": {
                "value": 0.03
            },
            "polyunsaturatedFat": {
                "value": 0.05
            },
            "monounsaturatedFat": {
                "value": 0.01
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 100.37
            },
            "totalCarbohydrate": {
                "value": 19.81
            },
            "dietaryFiber": {
                "value": 0.46
            },
            "sugars": {
                "value": 19.21
            },
            "protein": {
                "value": 0.29
            },
            "calcium": {
                "value": 7.84
            },
            "iron": {
                "value": 0.31
            },
            "potassium": {
                "value": 50.54
            },
            "vitaminC": {
                "value": 5.68,
                "percent": 6
            },
            "folate": {
                "value": 2.92
            }
        },
        "nutritionSummary": {
            "calories": 77,
            "fat": "0.1g",
            "carbs": "19.8g",
            "protein": "0.3g",
            "summaryText": "A serving of Lem-o-gin.",
            "breakdown": "1% fat, 98% carbs, 1% protein."
        },
        "servingSizes": [
            {
                "size": "1 glass",
                "calories": 76.76
            }
        ]
    },
    {
        "slug": "cumin-infused-water-jeere-zeere-ka-pani",
        "name": "Cumin infused water (Jeere/Zeere ka pani)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 glass",
            "calories": 30.8,
            "totalFat": {
                "value": 0.37
            },
            "saturatedFat": {
                "value": 0.05
            },
            "polyunsaturatedFat": {
                "value": 0.11
            },
            "monounsaturatedFat": {
                "value": 0.14
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 642.49
            },
            "totalCarbohydrate": {
                "value": 6.32
            },
            "dietaryFiber": {
                "value": 1.57
            },
            "sugars": {
                "value": 4.95
            },
            "protein": {
                "value": 0.57
            },
            "calcium": {
                "value": 36.75
            },
            "iron": {
                "value": 1.07
            },
            "potassium": {
                "value": 108.95
            },
            "vitaminC": {
                "value": 3.61,
                "percent": 4
            },
            "folate": {
                "value": 3.14
            }
        },
        "nutritionSummary": {
            "calories": 31,
            "fat": "0.4g",
            "carbs": "6.3g",
            "protein": "0.6g",
            "summaryText": "A serving of Cumin infused water (Jeere/Zeere ka pani).",
            "breakdown": "11% fat, 82% carbs, 7% protein."
        },
        "servingSizes": [
            {
                "size": "1 glass",
                "calories": 30.8
            }
        ]
    },
    {
        "slug": "coco-pine-cooler",
        "name": "Coco pine cooler",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 141.54,
            "totalFat": {
                "value": 4.32
            },
            "saturatedFat": {
                "value": 2.71
            },
            "polyunsaturatedFat": {
                "value": 0.18
            },
            "monounsaturatedFat": {
                "value": 1.08
            },
            "cholesterol": {
                "value": 14.7
            },
            "sodium": {
                "value": 100.25
            },
            "totalCarbohydrate": {
                "value": 24.71
            },
            "dietaryFiber": {
                "value": 1.11
            },
            "sugars": {
                "value": 23.87
            },
            "protein": {
                "value": 2.4
            },
            "calcium": {
                "value": 76.98
            },
            "iron": {
                "value": 0.54
            },
            "potassium": {
                "value": 288.06
            },
            "vitaminC": {
                "value": 10.67,
                "percent": 12
            },
            "folate": {
                "value": 12.64
            }
        },
        "nutritionSummary": {
            "calories": 142,
            "fat": "4.3g",
            "carbs": "24.7g",
            "protein": "2.4g",
            "summaryText": "A serving of Coco pine cooler.",
            "breakdown": "28% fat, 69% carbs, 3% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 141.54
            }
        ]
    },
    {
        "slug": "summer-cooler",
        "name": "Summer cooler",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 110.95,
            "totalFat": {
                "value": 0.18
            },
            "saturatedFat": {
                "value": 0.05
            },
            "polyunsaturatedFat": {
                "value": 0.08
            },
            "monounsaturatedFat": {
                "value": 0.01
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 7.78
            },
            "totalCarbohydrate": {
                "value": 26.87
            },
            "dietaryFiber": {
                "value": 0.97
            },
            "sugars": {
                "value": 25.78
            },
            "protein": {
                "value": 1.85
            },
            "calcium": {
                "value": 40.22
            },
            "iron": {
                "value": 1.37
            },
            "potassium": {
                "value": 460.35
            },
            "vitaminC": {
                "value": 103.5,
                "percent": 115
            },
            "folate": {
                "value": 63.89
            }
        },
        "nutritionSummary": {
            "calories": 111,
            "fat": "0.2g",
            "carbs": "26.9g",
            "protein": "1.9g",
            "summaryText": "A serving of Summer cooler.",
            "breakdown": "1% fat, 96% carbs, 3% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 110.95
            }
        ]
    },
    {
        "slug": "hot-cocoa",
        "name": "Hot cocoa",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 cup",
            "calories": 172.09,
            "totalFat": {
                "value": 8.72
            },
            "saturatedFat": {
                "value": 5.26
            },
            "polyunsaturatedFat": {
                "value": 0.27
            },
            "monounsaturatedFat": {
                "value": 2.4
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 46.23
            },
            "totalCarbohydrate": {
                "value": 17.64
            },
            "dietaryFiber": {
                "value": 0
            },
            "sugars": {
                "value": 17.2
            },
            "protein": {
                "value": 6.42
            },
            "calcium": {
                "value": 217.1
            },
            "iron": {
                "value": 0.6
            },
            "potassium": {
                "value": 252.4
            },
            "vitaminC": {
                "value": 3.62,
                "percent": 4
            },
            "folate": {
                "value": 13.79
            }
        },
        "nutritionSummary": {
            "calories": 172,
            "fat": "8.7g",
            "carbs": "17.6g",
            "protein": "6.4g",
            "summaryText": "A serving of Hot cocoa.",
            "breakdown": "46% fat, 41% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "1 cup",
                "calories": 172.09
            }
        ]
    },
    {
        "slug": "cold-coffee-with-ice-cream",
        "name": "Cold coffee with ice cream",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 204.56,
            "totalFat": {
                "value": 6.36
            },
            "saturatedFat": {
                "value": 3.87
            },
            "polyunsaturatedFat": {
                "value": 0.2
            },
            "monounsaturatedFat": {
                "value": 1.71
            },
            "cholesterol": {
                "value": 3.53
            },
            "sodium": {
                "value": 41.74
            },
            "totalCarbohydrate": {
                "value": 33.9
            },
            "dietaryFiber": {
                "value": 0.02
            },
            "sugars": {
                "value": 33.71
            },
            "protein": {
                "value": 4.73
            },
            "calcium": {
                "value": 160.68
            },
            "iron": {
                "value": 0.37
            },
            "potassium": {
                "value": 272.16
            },
            "vitaminC": {
                "value": 2.53,
                "percent": 3
            },
            "folate": {
                "value": 9.49
            }
        },
        "nutritionSummary": {
            "calories": 205,
            "fat": "6.4g",
            "carbs": "33.9g",
            "protein": "4.7g",
            "summaryText": "A serving of Cold coffee with ice cream.",
            "breakdown": "28% fat, 66% carbs, 6% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 204.56
            }
        ]
    },
    {
        "slug": "banana-milkshake-kele-milkshake",
        "name": "Banana milkshake (Kele milkshake)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 225.63,
            "totalFat": {
                "value": 8.19
            },
            "saturatedFat": {
                "value": 4.92
            },
            "polyunsaturatedFat": {
                "value": 0.3
            },
            "monounsaturatedFat": {
                "value": 2.19
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 47.02
            },
            "totalCarbohydrate": {
                "value": 31.6
            },
            "dietaryFiber": {
                "value": 0.88
            },
            "sugars": {
                "value": 27.49
            },
            "protein": {
                "value": 6.37
            },
            "calcium": {
                "value": 216.42
            },
            "iron": {
                "value": 0.46
            },
            "potassium": {
                "value": 353.88
            },
            "vitaminC": {
                "value": 6.84,
                "percent": 8
            },
            "folate": {
                "value": 19.83
            }
        },
        "nutritionSummary": {
            "calories": 226,
            "fat": "8.2g",
            "carbs": "31.6g",
            "protein": "6.4g",
            "summaryText": "A serving of Banana milkshake (Kele milkshake).",
            "breakdown": "33% fat, 56% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 225.63
            }
        ]
    },
    {
        "slug": "mango-milkshake-aam-milkshake",
        "name": "Mango milkshake (Aam milkshake)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 202.28,
            "totalFat": {
                "value": 8.34
            },
            "saturatedFat": {
                "value": 4.96
            },
            "polyunsaturatedFat": {
                "value": 0.31
            },
            "monounsaturatedFat": {
                "value": 2.25
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 47.19
            },
            "totalCarbohydrate": {
                "value": 25.71
            },
            "dietaryFiber": {
                "value": 0.94
            },
            "sugars": {
                "value": 25.41
            },
            "protein": {
                "value": 6.14
            },
            "calcium": {
                "value": 221.6
            },
            "iron": {
                "value": 0.55
            },
            "potassium": {
                "value": 281.08
            },
            "vitaminC": {
                "value": 20.1,
                "percent": 22
            },
            "folate": {
                "value": 53.68
            }
        },
        "nutritionSummary": {
            "calories": 202,
            "fat": "8.3g",
            "carbs": "25.7g",
            "protein": "6.1g",
            "summaryText": "A serving of Mango milkshake (Aam milkshake).",
            "breakdown": "37% fat, 51% carbs, 12% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 202.28
            }
        ]
    },
    {
        "slug": "pineapple-milkshake-ananas-milkshake",
        "name": "Pineapple milkshake (Ananas milkshake)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 203.09,
            "totalFat": {
                "value": 8.12
            },
            "saturatedFat": {
                "value": 4.87
            },
            "polyunsaturatedFat": {
                "value": 0.25
            },
            "monounsaturatedFat": {
                "value": 2.19
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 51.23
            },
            "totalCarbohydrate": {
                "value": 27.79
            },
            "dietaryFiber": {
                "value": 0
            },
            "sugars": {
                "value": 27.7
            },
            "protein": {
                "value": 6.05
            },
            "calcium": {
                "value": 218.4
            },
            "iron": {
                "value": 0.41
            },
            "potassium": {
                "value": 239.4
            },
            "vitaminC": {
                "value": 10.22,
                "percent": 11
            },
            "folate": {
                "value": 17.45
            }
        },
        "nutritionSummary": {
            "calories": 203,
            "fat": "8.1g",
            "carbs": "27.8g",
            "protein": "6.1g",
            "summaryText": "A serving of Pineapple milkshake (Ananas milkshake).",
            "breakdown": "36% fat, 55% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 203.09
            }
        ]
    },
    {
        "slug": "orange-milkshake-narangi-milkshake",
        "name": "Orange milkshake (Narangi milkshake)",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 183.44,
            "totalFat": {
                "value": 8.06
            },
            "saturatedFat": {
                "value": 4.87
            },
            "polyunsaturatedFat": {
                "value": 0.25
            },
            "monounsaturatedFat": {
                "value": 2.19
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 46.73
            },
            "totalCarbohydrate": {
                "value": 22.71
            },
            "dietaryFiber": {
                "value": 0
            },
            "sugars": {
                "value": 22.62
            },
            "protein": {
                "value": 5.96
            },
            "calcium": {
                "value": 215.4
            },
            "iron": {
                "value": 0.34
            },
            "potassium": {
                "value": 234.6
            },
            "vitaminC": {
                "value": 10.82,
                "percent": 12
            },
            "folate": {
                "value": 16.85
            }
        },
        "nutritionSummary": {
            "calories": 183,
            "fat": "8.1g",
            "carbs": "22.7g",
            "protein": "6.0g",
            "summaryText": "A serving of Orange milkshake (Narangi milkshake).",
            "breakdown": "39% fat, 50% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 183.44
            }
        ]
    },
    {
        "slug": "egg-nog",
        "name": "Egg nog",
        "cuisine": "Generic",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 294.82,
            "totalFat": {
                "value": 15.51
            },
            "saturatedFat": {
                "value": 7.99
            },
            "polyunsaturatedFat": {
                "value": 0.91
            },
            "monounsaturatedFat": {
                "value": 4.66
            },
            "cholesterol": {
                "value": 183
            },
            "sodium": {
                "value": 123.37
            },
            "totalCarbohydrate": {
                "value": 24.72
            },
            "dietaryFiber": {
                "value": 0.06
            },
            "sugars": {
                "value": 24.47
            },
            "protein": {
                "value": 14.5
            },
            "calcium": {
                "value": 309.97
            },
            "iron": {
                "value": 1.31
            },
            "potassium": {
                "value": 349.45
            },
            "vitaminC": {
                "value": 4.82,
                "percent": 5
            },
            "folate": {
                "value": 41.91
            }
        },
        "nutritionSummary": {
            "calories": 295,
            "fat": "15.5g",
            "carbs": "24.7g",
            "protein": "14.5g",
            "summaryText": "A serving of Egg nog.",
            "breakdown": "47% fat, 34% carbs, 19% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 294.82
            }
        ]
    },
    {
        "slug": "sweet-lassi-meethi-lassi",
        "name": "Sweet Lassi (Meethi lassi)",
        "cuisine": "North Indian",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 157.8,
            "totalFat": {
                "value": 3
            },
            "saturatedFat": {
                "value": 1.91
            },
            "polyunsaturatedFat": {
                "value": 0.1
            },
            "monounsaturatedFat": {
                "value": 0.79
            },
            "cholesterol": {
                "value": 11
            },
            "sodium": {
                "value": 81
            },
            "totalCarbohydrate": {
                "value": 28.8
            },
            "dietaryFiber": {
                "value": 0
            },
            "sugars": {
                "value": 28.8
            },
            "protein": {
                "value": 5.7
            },
            "calcium": {
                "value": 202
            },
            "iron": {
                "value": 0.14
            },
            "potassium": {
                "value": 281
            },
            "vitaminC": {
                "value": 1,
                "percent": 1
            },
            "folate": {
                "value": 18
            }
        },
        "nutritionSummary": {
            "calories": 158,
            "fat": "3.0g",
            "carbs": "28.8g",
            "protein": "5.7g",
            "summaryText": "A serving of Sweet Lassi (Meethi lassi).",
            "breakdown": "17% fat, 73% carbs, 10% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 157.8
            }
        ]
    },
    {
        "slug": "lassi-salted",
        "name": "Lassi (salted)",
        "cuisine": "North Indian",
        "mealCategory": "Beverages",
        "foodGroup": "Beverages",
        "nutritionFacts": {
            "servingSize": "1 tall glass",
            "calories": 79.76,
            "totalFat": {
                "value": 3.04
            },
            "saturatedFat": {
                "value": 1.91
            },
            "polyunsaturatedFat": {
                "value": 0.11
            },
            "monounsaturatedFat": {
                "value": 0.81
            },
            "cholesterol": {
                "value": 11
            },
            "sodium": {
                "value": 276.81
            },
            "totalCarbohydrate": {
                "value": 7.86
            },
            "dietaryFiber": {
                "value": 0.08
            },
            "sugars": {
                "value": 7.8
            },
            "protein": {
                "value": 5.73
            },
            "calcium": {
                "value": 202.24
            },
            "iron": {
                "value": 0.15
            },
            "potassium": {
                "value": 285.16
            },
            "vitaminC": {
                "value": 1.02,
                "percent": 1
            },
            "folate": {
                "value": 18.07
            }
        },
        "nutritionSummary": {
            "calories": 80,
            "fat": "3.0g",
            "carbs": "7.9g",
            "protein": "5.7g",
            "summaryText": "A serving of Lassi (salted).",
            "breakdown": "34% fat, 40% carbs, 26% protein."
        },
        "servingSizes": [
            {
                "size": "1 tall glass",
                "calories": 79.76
            }
        ]
    },
    {
        "slug": "cheese-and-chilli-sandwich",
        "name": "Cheese and chilli sandwich ",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 121.6,
            "totalFat": {
                "value": 5.45
            },
            "saturatedFat": {
                "value": 2.94
            },
            "polyunsaturatedFat": {
                "value": 0.2
            },
            "monounsaturatedFat": {
                "value": 1.27
            },
            "cholesterol": {
                "value": 12.85
            },
            "sodium": {
                "value": 243.91
            },
            "totalCarbohydrate": {
                "value": 15.28
            },
            "dietaryFiber": {
                "value": 1.16
            },
            "sugars": {
                "value": 1.33
            },
            "protein": {
                "value": 3.79
            },
            "calcium": {
                "value": 63.44
            },
            "iron": {
                "value": 0.55
            },
            "potassium": {
                "value": 79.34
            },
            "vitaminC": {
                "value": 12.3,
                "percent": 14
            },
            "folate": {
                "value": 16.14
            }
        },
        "nutritionSummary": {
            "calories": 122,
            "fat": "5.5g",
            "carbs": "15.3g",
            "protein": "3.8g",
            "summaryText": "A serving of Cheese and chilli sandwich .",
            "breakdown": "40% fat, 50% carbs, 10% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 121.6
            }
        ]
    },
    {
        "slug": "egg-sandwich-ande-ka-sandwich",
        "name": "Egg sandwich (Ande ka sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 145.12,
            "totalFat": {
                "value": 8.02
            },
            "saturatedFat": {
                "value": 4.28
            },
            "polyunsaturatedFat": {
                "value": 0.37
            },
            "monounsaturatedFat": {
                "value": 2.05
            },
            "cholesterol": {
                "value": 61.72
            },
            "sodium": {
                "value": 234.3
            },
            "totalCarbohydrate": {
                "value": 14.8
            },
            "dietaryFiber": {
                "value": 0.95
            },
            "sugars": {
                "value": 0.95
            },
            "protein": {
                "value": 4.41
            },
            "calcium": {
                "value": 55.89
            },
            "iron": {
                "value": 0.73
            },
            "potassium": {
                "value": 65.76
            },
            "vitaminC": {
                "value": 0,
                "percent": 0
            },
            "folate": {
                "value": 14.92
            }
        },
        "nutritionSummary": {
            "calories": 145,
            "fat": "8.0g",
            "carbs": "14.8g",
            "protein": "4.4g",
            "summaryText": "A serving of Egg sandwich (Ande ka sandwich).",
            "breakdown": "50% fat, 41% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 145.12
            }
        ]
    },
    {
        "slug": "cucumber-sandwich-kheere-ka-sandwich",
        "name": "Cucumber sandwich (Kheere ka sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 114.57,
            "totalFat": {
                "value": 4.86
            },
            "saturatedFat": {
                "value": 2.62
            },
            "polyunsaturatedFat": {
                "value": 0.17
            },
            "monounsaturatedFat": {
                "value": 1.1
            },
            "cholesterol": {
                "value": 10.65
            },
            "sodium": {
                "value": 220.31
            },
            "totalCarbohydrate": {
                "value": 15.65
            },
            "dietaryFiber": {
                "value": 1.49
            },
            "sugars": {
                "value": 1
            },
            "protein": {
                "value": 2.92
            },
            "calcium": {
                "value": 53.36
            },
            "iron": {
                "value": 0.62
            },
            "potassium": {
                "value": 93.59
            },
            "vitaminC": {
                "value": 1.53,
                "percent": 2
            },
            "folate": {
                "value": 12.96
            }
        },
        "nutritionSummary": {
            "calories": 115,
            "fat": "4.9g",
            "carbs": "15.7g",
            "protein": "2.9g",
            "summaryText": "A serving of Cucumber sandwich (Kheere ka sandwich).",
            "breakdown": "38% fat, 55% carbs, 7% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 114.57
            }
        ]
    },
    {
        "slug": "cheese-and-pineapple-sandwich-cheese-aur-ananas-ka-sandwich",
        "name": "Cheese and pineapple sandwich (Cheese aur ananas ka sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 143.68,
            "totalFat": {
                "value": 7.13
            },
            "saturatedFat": {
                "value": 4.05
            },
            "polyunsaturatedFat": {
                "value": 0.25
            },
            "monounsaturatedFat": {
                "value": 1.73
            },
            "cholesterol": {
                "value": 19.15
            },
            "sodium": {
                "value": 318.87
            },
            "totalCarbohydrate": {
                "value": 16.22
            },
            "dietaryFiber": {
                "value": 1.3
            },
            "sugars": {
                "value": 2.29
            },
            "protein": {
                "value": 4.57
            },
            "calcium": {
                "value": 111.35
            },
            "iron": {
                "value": 0.58
            },
            "potassium": {
                "value": 79.94
            },
            "vitaminC": {
                "value": 3.64,
                "percent": 4
            },
            "folate": {
                "value": 12.08
            }
        },
        "nutritionSummary": {
            "calories": 144,
            "fat": "7.1g",
            "carbs": "16.2g",
            "protein": "4.6g",
            "summaryText": "A serving of Cheese and pineapple sandwich (Cheese aur ananas ka sandwich).",
            "breakdown": "45% fat, 45% carbs, 10% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 143.68
            }
        ]
    },
    {
        "slug": "cheese-and-tomato-sandwich-cheese-aur-tamatar-ke-sandwich",
        "name": "Cheese and tomato sandwich (Cheese aur tamatar ke sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 141.73,
            "totalFat": {
                "value": 7.15
            },
            "saturatedFat": {
                "value": 4.05
            },
            "polyunsaturatedFat": {
                "value": 0.26
            },
            "monounsaturatedFat": {
                "value": 1.73
            },
            "cholesterol": {
                "value": 19.15
            },
            "sodium": {
                "value": 320.21
            },
            "totalCarbohydrate": {
                "value": 15.68
            },
            "dietaryFiber": {
                "value": 1.15
            },
            "sugars": {
                "value": 1.66
            },
            "protein": {
                "value": 4.61
            },
            "calcium": {
                "value": 111.38
            },
            "iron": {
                "value": 0.58
            },
            "potassium": {
                "value": 86.51
            },
            "vitaminC": {
                "value": 3.16,
                "percent": 4
            },
            "folate": {
                "value": 12.18
            }
        },
        "nutritionSummary": {
            "calories": 142,
            "fat": "7.1g",
            "carbs": "15.7g",
            "protein": "4.6g",
            "summaryText": "A serving of Cheese and tomato sandwich (Cheese aur tamatar ke sandwich).",
            "breakdown": "45% fat, 44% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 141.73
            }
        ]
    },
    {
        "slug": "chicken-sandwich",
        "name": "Chicken sandwich",
        "cuisine": "Generic",
        "mealCategory": "Lunch",
        "foodGroup": "Meat",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 147.53,
            "totalFat": {
                "value": 6.84
            },
            "saturatedFat": {
                "value": 2.79
            },
            "polyunsaturatedFat": {
                "value": 0.24
            },
            "monounsaturatedFat": {
                "value": 1.32
            },
            "cholesterol": {
                "value": 24.5
            },
            "sodium": {
                "value": 226.98
            },
            "totalCarbohydrate": {
                "value": 14.78
            },
            "dietaryFiber": {
                "value": 0.95
            },
            "sugars": {
                "value": 0.93
            },
            "protein": {
                "value": 7.64
            },
            "calcium": {
                "value": 52.17
            },
            "iron": {
                "value": 0.69
            },
            "potassium": {
                "value": 114.22
            },
            "vitaminC": {
                "value": 0,
                "percent": 0
            },
            "folate": {
                "value": 11.1
            }
        },
        "nutritionSummary": {
            "calories": 148,
            "fat": "6.8g",
            "carbs": "14.8g",
            "protein": "7.6g",
            "summaryText": "A serving of Chicken sandwich.",
            "breakdown": "42% fat, 40% carbs, 18% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 147.53
            }
        ]
    },
    {
        "slug": "peanut-and-tomato-sandwich-moongfali-aur-tamatar-ka-sandwich",
        "name": "Peanut and tomato sandwich (Moongfali aur tamatar ka sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 177.04,
            "totalFat": {
                "value": 9.8
            },
            "saturatedFat": {
                "value": 3.63
            },
            "polyunsaturatedFat": {
                "value": 1.62
            },
            "monounsaturatedFat": {
                "value": 3.39
            },
            "cholesterol": {
                "value": 10.65
            },
            "sodium": {
                "value": 221.73
            },
            "totalCarbohydrate": {
                "value": 17.34
            },
            "dietaryFiber": {
                "value": 2.45
            },
            "sugars": {
                "value": 1.71
            },
            "protein": {
                "value": 5.79
            },
            "calcium": {
                "value": 57.13
            },
            "iron": {
                "value": 0.96
            },
            "potassium": {
                "value": 153.59
            },
            "vitaminC": {
                "value": 3.16,
                "percent": 4
            },
            "folate": {
                "value": 22.04
            }
        },
        "nutritionSummary": {
            "calories": 177,
            "fat": "9.8g",
            "carbs": "17.3g",
            "protein": "5.8g",
            "summaryText": "A serving of Peanut and tomato sandwich (Moongfali aur tamatar ka sandwich).",
            "breakdown": "50% fat, 39% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 177.04
            }
        ]
    },
    {
        "slug": "rainbow-sandwich",
        "name": "Rainbow sandwich",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 130.44,
            "totalFat": {
                "value": 6
            },
            "saturatedFat": {
                "value": 3.36
            },
            "polyunsaturatedFat": {
                "value": 0.2
            },
            "monounsaturatedFat": {
                "value": 1.4
            },
            "cholesterol": {
                "value": 14.9
            },
            "sodium": {
                "value": 292.92
            },
            "totalCarbohydrate": {
                "value": 16.39
            },
            "dietaryFiber": {
                "value": 1.01
            },
            "sugars": {
                "value": 1.93
            },
            "protein": {
                "value": 3.7
            },
            "calcium": {
                "value": 82.28
            },
            "iron": {
                "value": 0.58
            },
            "potassium": {
                "value": 68.86
            },
            "vitaminC": {
                "value": 1.01,
                "percent": 1
            },
            "folate": {
                "value": 10.38
            }
        },
        "nutritionSummary": {
            "calories": 130,
            "fat": "6.0g",
            "carbs": "16.4g",
            "protein": "3.7g",
            "summaryText": "A serving of Rainbow sandwich.",
            "breakdown": "41% fat, 50% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 130.44
            }
        ]
    },
    {
        "slug": "club-sandwich",
        "name": "Club sandwich ",
        "cuisine": "Generic",
        "mealCategory": "Lunch",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 206.79,
            "totalFat": {
                "value": 13.29
            },
            "saturatedFat": {
                "value": 5.37
            },
            "polyunsaturatedFat": {
                "value": 1.43
            },
            "monounsaturatedFat": {
                "value": 5.03
            },
            "cholesterol": {
                "value": 27.47
            },
            "sodium": {
                "value": 405.68
            },
            "totalCarbohydrate": {
                "value": 16.26
            },
            "dietaryFiber": {
                "value": 1.59
            },
            "sugars": {
                "value": 1.77
            },
            "protein": {
                "value": 6.42
            },
            "calcium": {
                "value": 101.65
            },
            "iron": {
                "value": 0.76
            },
            "potassium": {
                "value": 148.51
            },
            "vitaminC": {
                "value": 6,
                "percent": 7
            },
            "folate": {
                "value": 17.42
            }
        },
        "nutritionSummary": {
            "calories": 207,
            "fat": "13.3g",
            "carbs": "16.3g",
            "protein": "6.4g",
            "summaryText": "A serving of Club sandwich .",
            "breakdown": "58% fat, 31% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 206.79
            }
        ]
    },
    {
        "slug": "vegetarian-club-sandwich",
        "name": "Vegetarian club sandwich",
        "cuisine": "Generic",
        "mealCategory": "Lunch",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 164.37,
            "totalFat": {
                "value": 9.39
            },
            "saturatedFat": {
                "value": 3.91
            },
            "polyunsaturatedFat": {
                "value": 1.0
            },
            "monounsaturatedFat": {
                "value": 3.26
            },
            "cholesterol": {
                "value": 19.17
            },
            "sodium": {
                "value": 253.07
            },
            "totalCarbohydrate": {
                "value": 16.31
            },
            "dietaryFiber": {
                "value": 1.7
            },
            "sugars": {
                "value": 1.72
            },
            "protein": {
                "value": 4.52
            },
            "calcium": {
                "value": 101.47
            },
            "iron": {
                "value": 0.64
            },
            "potassium": {
                "value": 132.41
            },
            "vitaminC": {
                "value": 6,
                "percent": 7
            },
            "folate": {
                "value": 17.53
            }
        },
        "nutritionSummary": {
            "calories": 164,
            "fat": "9.4g",
            "carbs": "16.3g",
            "protein": "4.5g",
            "summaryText": "A serving of Vegetarian club sandwich.",
            "breakdown": "51% fat, 40% carbs, 9% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 164.37
            }
        ]
    },
    {
        "slug": "pin-wheel-sandwich",
        "name": "Pin wheel sandwich",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 86.84,
            "totalFat": {
                "value": 6.95
            },
            "saturatedFat": {
                "value": 0.8
            },
            "polyunsaturatedFat": {
                "value": 1.65
            },
            "monounsaturatedFat": {
                "value": 3.88
            },
            "cholesterol": {
                "value": 50.04
            },
            "sodium": {
                "value": 104.36
            },
            "totalCarbohydrate": {
                "value": 3.9
            },
            "dietaryFiber": {
                "value": 0.26
            },
            "sugars": {
                "value": 0.41
            },
            "protein": {
                "value": 2.44
            },
            "calcium": {
                "value": 18.89
            },
            "iron": {
                "value": 0.38
            },
            "potassium": {
                "value": 30.75
            },
            "vitaminC": {
                "value": 0,
                "percent": 0
            },
            "folate": {
                "value": 9.04
            }
        },
        "nutritionSummary": {
            "calories": 87,
            "fat": "7.0g",
            "carbs": "3.9g",
            "protein": "2.4g",
            "summaryText": "A serving of Pin wheel sandwich.",
            "breakdown": "72% fat, 18% carbs, 10% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 86.84
            }
        ]
    },
    {
        "slug": "carrot-apple-sandwich-gajar-aur-seb-ka-sandwich",
        "name": "Carrot apple sandwich (Gajar aur seb ka sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 208.22,
            "totalFat": {
                "value": 8.87
            },
            "saturatedFat": {
                "value": 5.02
            },
            "polyunsaturatedFat": {
                "value": 0.61
            },
            "monounsaturatedFat": {
                "value": 2.15
            },
            "cholesterol": {
                "value": 20.48
            },
            "sodium": {
                "value": 294.55
            },
            "totalCarbohydrate": {
                "value": 28.25
            },
            "dietaryFiber": {
                "value": 3.56
            },
            "sugars": {
                "value": 5.15
            },
            "protein": {
                "value": 5.15
            },
            "calcium": {
                "value": 114.8
            },
            "iron": {
                "value": 1.75
            },
            "potassium": {
                "value": 222.52
            },
            "vitaminC": {
                "value": 2.7,
                "percent": 3
            },
            "folate": {
                "value": 21.7
            }
        },
        "nutritionSummary": {
            "calories": 208,
            "fat": "8.9g",
            "carbs": "28.3g",
            "protein": "5.2g",
            "summaryText": "A serving of Carrot apple sandwich (Gajar aur seb ka sandwich).",
            "breakdown": "38% fat, 54% carbs, 8% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 208.22
            }
        ]
    },
    {
        "slug": "salami-sandwich",
        "name": "Salami sandwich",
        "cuisine": "Generic",
        "mealCategory": "Lunch",
        "foodGroup": "Meat",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 189.78,
            "totalFat": {
                "value": 11.52
            },
            "saturatedFat": {
                "value": 5.1
            },
            "polyunsaturatedFat": {
                "value": 0.92
            },
            "monounsaturatedFat": {
                "value": 4.11
            },
            "cholesterol": {
                "value": 24.76
            },
            "sodium": {
                "value": 492.09
            },
            "totalCarbohydrate": {
                "value": 15.99
            },
            "dietaryFiber": {
                "value": 1.46
            },
            "sugars": {
                "value": 1.48
            },
            "protein": {
                "value": 6.46
            },
            "calcium": {
                "value": 54.61
            },
            "iron": {
                "value": 0.82
            },
            "potassium": {
                "value": 144.09
            },
            "vitaminC": {
                "value": 1.25,
                "percent": 1
            },
            "folate": {
                "value": 12.65
            }
        },
        "nutritionSummary": {
            "calories": 190,
            "fat": "11.5g",
            "carbs": "16.0g",
            "protein": "6.5g",
            "summaryText": "A serving of Salami sandwich.",
            "breakdown": "55% fat, 34% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 189.78
            }
        ]
    },
    {
        "slug": "vegetable-and-mayonnaise-sandwich",
        "name": "Vegetable and mayonnaise sandwich",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 166.83,
            "totalFat": {
                "value": 10.52
            },
            "saturatedFat": {
                "value": 3.05
            },
            "polyunsaturatedFat": {
                "value": 1.7
            },
            "monounsaturatedFat": {
                "value": 4.52
            },
            "cholesterol": {
                "value": 14.94
            },
            "sodium": {
                "value": 234.06
            },
            "totalCarbohydrate": {
                "value": 15.85
            },
            "dietaryFiber": {
                "value": 1.61
            },
            "sugars": {
                "value": 1.6
            },
            "protein": {
                "value": 3.06
            },
            "calcium": {
                "value": 54.32
            },
            "iron": {
                "value": 0.62
            },
            "potassium": {
                "value": 97.74
            },
            "vitaminC": {
                "value": 12.9,
                "percent": 14
            },
            "folate": {
                "value": 17.05
            }
        },
        "nutritionSummary": {
            "calories": 167,
            "fat": "10.5g",
            "carbs": "15.9g",
            "protein": "3.1g",
            "summaryText": "A serving of Vegetable and mayonnaise sandwich.",
            "breakdown": "57% fat, 38% carbs, 5% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 166.83
            }
        ]
    },
    {
        "slug": "egg-and-tomato-sandwich-ande-aur-tamatar-ka-sandwich",
        "name": "Egg and tomato sandwich (Ande aur tamatar ka sandwich)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 132.15,
            "totalFat": {
                "value": 6.25
            },
            "saturatedFat": {
                "value": 3.07
            },
            "polyunsaturatedFat": {
                "value": 0.36
            },
            "monounsaturatedFat": {
                "value": 1.64
            },
            "cholesterol": {
                "value": 56.9
            },
            "sodium": {
                "value": 251.84
            },
            "totalCarbohydrate": {
                "value": 15.41
            },
            "dietaryFiber": {
                "value": 1.05
            },
            "sugars": {
                "value": 1.24
            },
            "protein": {
                "value": 4.56
            },
            "calcium": {
                "value": 56.95
            },
            "iron": {
                "value": 0.78
            },
            "potassium": {
                "value": 89.53
            },
            "vitaminC": {
                "value": 1.98,
                "percent": 2
            },
            "folate": {
                "value": 16.33
            }
        },
        "nutritionSummary": {
            "calories": 132,
            "fat": "6.3g",
            "carbs": "15.4g",
            "protein": "4.6g",
            "summaryText": "A serving of Egg and tomato sandwich (Ande aur tamatar ka sandwich).",
            "breakdown": "42% fat, 47% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 132.15
            }
        ]
    },
    {
        "slug": "sweet-open-sandwich",
        "name": "Sweet open sandwich",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 144.11,
            "totalFat": {
                "value": 4.81
            },
            "saturatedFat": {
                "value": 2.63
            },
            "polyunsaturatedFat": {
                "value": 0.17
            },
            "monounsaturatedFat": {
                "value": 1.05
            },
            "cholesterol": {
                "value": 10.65
            },
            "sodium": {
                "value": 121.11
            },
            "totalCarbohydrate": {
                "value": 23.15
            },
            "dietaryFiber": {
                "value": 1.39
            },
            "sugars": {
                "value": 7.22
            },
            "protein": {
                "value": 2.94
            },
            "calcium": {
                "value": 50.26
            },
            "iron": {
                "value": 0.68
            },
            "potassium": {
                "value": 136.27
            },
            "vitaminC": {
                "value": 1.65,
                "percent": 2
            },
            "folate": {
                "value": 13.05
            }
        },
        "nutritionSummary": {
            "calories": 144,
            "fat": "4.8g",
            "carbs": "23.2g",
            "protein": "2.9g",
            "summaryText": "A serving of Sweet open sandwich.",
            "breakdown": "30% fat, 64% carbs, 6% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 144.11
            }
        ]
    },
    {
        "slug": "mushroom-and-cheese-sandwich-toasted",
        "name": "Mushroom and cheese sandwich (toasted)",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 toasted triangle",
            "calories": 172.27,
            "totalFat": {
                "value": 9.85
            },
            "saturatedFat": {
                "value": 5.72
            },
            "polyunsaturatedFat": {
                "value": 0.4
            },
            "monounsaturatedFat": {
                "value": 2.41
            },
            "cholesterol": {
                "value": 26.6
            },
            "sodium": {
                "value": 345.85
            },
            "totalCarbohydrate": {
                "value": 15.92
            },
            "dietaryFiber": {
                "value": 1.73
            },
            "sugars": {
                "value": 1.6
            },
            "protein": {
                "value": 5.9
            },
            "calcium": {
                "value": 130.56
            },
            "iron": {
                "value": 0.64
            },
            "potassium": {
                "value": 150.26
            },
            "vitaminC": {
                "value": 0,
                "percent": 0
            },
            "folate": {
                "value": 12.7
            }
        },
        "nutritionSummary": {
            "calories": 172,
            "fat": "9.9g",
            "carbs": "15.9g",
            "protein": "5.9g",
            "summaryText": "A serving of Mushroom and cheese sandwich (toasted).",
            "breakdown": "51% fat, 37% carbs, 12% protein."
        },
        "servingSizes": [
            {
                "size": "1 toasted triangle",
                "calories": 172.27
            }
        ]
    },
    {
        "slug": "cheese-and-tomato-sandwich-toasted-cheese-aur-tamatar-ke-sandwich-toasted",
        "name": "Cheese and tomato sandwich (toasted) (Cheese aur tamatar ke sandwich (toasted))",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 toasted triangle",
            "calories": 170.12,
            "totalFat": {
                "value": 9.81
            },
            "saturatedFat": {
                "value": 5.71
            },
            "polyunsaturatedFat": {
                "value": 0.36
            },
            "monounsaturatedFat": {
                "value": 2.42
            },
            "cholesterol": {
                "value": 26.6
            },
            "sodium": {
                "value": 346.89
            },
            "totalCarbohydrate": {
                "value": 16.22
            },
            "dietaryFiber": {
                "value": 1.35
            },
            "sugars": {
                "value": 2.03
            },
            "protein": {
                "value": 5.17
            },
            "calcium": {
                "value": 128.19
            },
            "iron": {
                "value": 0.62
            },
            "potassium": {
                "value": 112.51
            },
            "vitaminC": {
                "value": 6.32,
                "percent": 7
            },
            "folate": {
                "value": 14.48
            }
        },
        "nutritionSummary": {
            "calories": 170,
            "fat": "9.8g",
            "carbs": "16.2g",
            "protein": "5.2g",
            "summaryText": "A serving of Cheese and tomato sandwich (toasted) (Cheese aur tamatar ke sandwich (toasted)).",
            "breakdown": "52% fat, 38% carbs, 10% protein."
        },
        "servingSizes": [
            {
                "size": "1 toasted triangle",
                "calories": 170.12
            }
        ]
    },
    {
        "slug": "pea-potato-sandwich-toasted-matar-aloo-ka-sandwich",
        "name": "Pea potato sandwich (toasted) (Matar aloo ka sandwich)",
        "cuisine": "North Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 toasted triangle",
            "calories": 146.56,
            "totalFat": {
                "value": 4.82
            },
            "saturatedFat": {
                "value": 0.51
            },
            "polyunsaturatedFat": {
                "value": 2.63
            },
            "monounsaturatedFat": {
                "value": 0.86
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 233.41
            },
            "totalCarbohydrate": {
                "value": 22.37
            },
            "dietaryFiber": {
                "value": 2.56
            },
            "sugars": {
                "value": 1.18
            },
            "protein": {
                "value": 4.09
            },
            "calcium": {
                "value": 57.02
            },
            "iron": {
                "value": 0.98
            },
            "potassium": {
                "value": 304.6
            },
            "vitaminC": {
                "value": 14.11,
                "percent": 16
            },
            "folate": {
                "value": 21.01
            }
        },
        "nutritionSummary": {
            "calories": 147,
            "fat": "4.8g",
            "carbs": "22.4g",
            "protein": "4.1g",
            "summaryText": "A serving of Pea potato sandwich (toasted) (Matar aloo ka sandwich).",
            "breakdown": "29% fat, 61% carbs, 10% protein."
        },
        "servingSizes": [
            {
                "size": "1 toasted triangle",
                "calories": 146.56
            }
        ]
    },
    {
        "slug": "paneer-pea-sandwich-toasted-paneer-matar-ka-sandwich",
        "name": "Paneer pea sandwich (toasted) (Paneer matar ka sandwich)",
        "cuisine": "North Indian",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 toasted triangle",
            "calories": 221.79,
            "totalFat": {
                "value": 10.64
            },
            "saturatedFat": {
                "value": 4.04
            },
            "polyunsaturatedFat": {
                "value": 2.75
            },
            "monounsaturatedFat": {
                "value": 2.57
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 238.98
            },
            "totalCarbohydrate": {
                "value": 21.38
            },
            "dietaryFiber": {
                "value": 1.88
            },
            "sugars": {
                "value": 5.68
            },
            "protein": {
                "value": 11.02
            },
            "calcium": {
                "value": 243.61
            },
            "iron": {
                "value": 1.12
            },
            "potassium": {
                "value": 113.62
            },
            "vitaminC": {
                "value": 4.85,
                "percent": 5
            },
            "folate": {
                "value": 52.13
            }
        },
        "nutritionSummary": {
            "calories": 222,
            "fat": "10.6g",
            "carbs": "21.4g",
            "protein": "11.0g",
            "summaryText": "A serving of Paneer pea sandwich (toasted) (Paneer matar ka sandwich).",
            "breakdown": "43% fat, 39% carbs, 18% protein."
        },
        "servingSizes": [
            {
                "size": "1 toasted triangle",
                "calories": 221.79
            }
        ]
    },
    {
        "slug": "chicken-sandwich-toasted",
        "name": "Chicken sandwich (toasted)",
        "cuisine": "Generic",
        "mealCategory": "Lunch",
        "foodGroup": "Meat",
        "nutritionFacts": {
            "servingSize": "1 toasted triangle",
            "calories": 143.1,
            "totalFat": {
                "value": 4.54
            },
            "saturatedFat": {
                "value": 0.98
            },
            "polyunsaturatedFat": {
                "value": 0.18
            },
            "monounsaturatedFat": {
                "value": 0.62
            },
            "cholesterol": {
                "value": 22.72
            },
            "sodium": {
                "value": 280.05
            },
            "totalCarbohydrate": {
                "value": 16.09
            },
            "dietaryFiber": {
                "value": 1.4
            },
            "sugars": {
                "value": 1.82
            },
            "protein": {
                "value": 10.33
            },
            "calcium": {
                "value": 85.49
            },
            "iron": {
                "value": 0.85
            },
            "potassium": {
                "value": 174.04
            },
            "vitaminC": {
                "value": 12.97,
                "percent": 14
            },
            "folate": {
                "value": 20.71
            }
        },
        "nutritionSummary": {
            "calories": 143,
            "fat": "4.5g",
            "carbs": "16.1g",
            "protein": "10.3g",
            "summaryText": "A serving of Chicken sandwich (toasted).",
            "breakdown": "28% fat, 45% carbs, 27% protein."
        },
        "servingSizes": [
            {
                "size": "1 toasted triangle",
                "calories": 143.1
            }
        ]
    },
    {
        "slug": "pea-keema-sandwich-toasted-matar-aur-keema-ka-sandwich",
        "name": "Pea keema sandwich (toasted) (Matar aur keema ka sandwich)",
        "cuisine": "North Indian",
        "mealCategory": "Lunch",
        "foodGroup": "Meat",
        "nutritionFacts": {
            "servingSize": "1 toasted triangle",
            "calories": 145.39,
            "totalFat": {
                "value": 4.75
            },
            "saturatedFat": {
                "value": 1.88
            },
            "polyunsaturatedFat": {
                "value": 0.23
            },
            "monounsaturatedFat": {
                "value": 1.62
            },
            "cholesterol": {
                "value": 23.1
            },
            "sodium": {
                "value": 245.52
            },
            "totalCarbohydrate": {
                "value": 17.14
            },
            "dietaryFiber": {
                "value": 2.08
            },
            "sugars": {
                "value": 1.64
            },
            "protein": {
                "value": 9.36
            },
            "calcium": {
                "value": 59.91
            },
            "iron": {
                "value": 1.28
            },
            "potassium": {
                "value": 198.36
            },
            "vitaminC": {
                "value": 5.5,
                "percent": 6
            },
            "folate": {
                "value": 18.29
            }
        },
        "nutritionSummary": {
            "calories": 145,
            "fat": "4.8g",
            "carbs": "17.1g",
            "protein": "9.4g",
            "summaryText": "A serving of Pea keema sandwich (toasted) (Matar aur keema ka sandwich).",
            "breakdown": "29% fat, 47% carbs, 24% protein."
        },
        "servingSizes": [
            {
                "size": "1 toasted triangle",
                "calories": 145.39
            }
        ]
    },
    {
        "slug": "classic-club-sandwich",
        "name": "Classic club sandwich",
        "cuisine": "Generic",
        "mealCategory": "Lunch",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 triangle",
            "calories": 448.86,
            "totalFat": {
                "value": 25.84
            },
            "saturatedFat": {
                "value": 10.36
            },
            "polyunsaturatedFat": {
                "value": 3.34
            },
            "monounsaturatedFat": {
                "value": 8.95
            },
            "cholesterol": {
                "value": 140.52
            },
            "sodium": {
                "value": 620.2
            },
            "totalCarbohydrate": {
                "value": 41.33
            },
            "dietaryFiber": {
                "value": 3.63
            },
            "sugars": {
                "value": 4.15
            },
            "protein": {
                "value": 15.06
            },
            "calcium": {
                "value": 240.77
            },
            "iron": {
                "value": 2.44
            },
            "potassium": {
                "value": 374.52
            },
            "vitaminC": {
                "value": 16.19,
                "percent": 18
            },
            "folate": {
                "value": 56.9
            }
        },
        "nutritionSummary": {
            "calories": 449,
            "fat": "25.8g",
            "carbs": "41.3g",
            "protein": "15.1g",
            "summaryText": "A serving of Classic club sandwich.",
            "breakdown": "52% fat, 37% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 triangle",
                "calories": 448.86
            }
        ]
    },
    {
        "slug": "sesame-toast",
        "name": "Sesame toast",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 toasted triangle",
            "calories": 309.18,
            "totalFat": {
                "value": 30.83
            },
            "saturatedFat": {
                "value": 3.7
            },
            "polyunsaturatedFat": {
                "value": 19.35
            },
            "monounsaturatedFat": {
                "value": 6.35
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 80.4
            },
            "totalCarbohydrate": {
                "value": 6.96
            },
            "dietaryFiber": {
                "value": 0.82
            },
            "sugars": {
                "value": 0.91
            },
            "protein": {
                "value": 1.19
            },
            "calcium": {
                "value": 27.13
            },
            "iron": {
                "value": 0.45
            },
            "potassium": {
                "value": 108.01
            },
            "vitaminC": {
                "value": 6.92,
                "percent": 8
            },
            "folate": {
                "value": 8.87
            }
        },
        "nutritionSummary": {
            "calories": 309,
            "fat": "30.8g",
            "carbs": "7.0g",
            "protein": "1.2g",
            "summaryText": "A serving of Sesame toast.",
            "breakdown": "90% fat, 9% carbs, 1% protein."
        },
        "servingSizes": [
            {
                "size": "1 toasted triangle",
                "calories": 309.18
            }
        ]
    },
    {
        "slug": "cracked-wheat-porridge-meetha-daliya",
        "name": "Cracked wheat porridge (Meetha daliya)",
        "cuisine": "North Indian",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 bowl",
            "calories": 328.71,
            "totalFat": {
                "value": 16.44
            },
            "saturatedFat": {
                "value": 7.37
            },
            "polyunsaturatedFat": {
                "value": 3.51
            },
            "monounsaturatedFat": {
                "value": 4.06
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 64.05
            },
            "totalCarbohydrate": {
                "value": 35.75
            },
            "dietaryFiber": {
                "value": 2.5
            },
            "sugars": {
                "value": 20.63
            },
            "protein": {
                "value": 10.65
            },
            "calcium": {
                "value": 305.8
            },
            "iron": {
                "value": 1.3
            },
            "potassium": {
                "value": 287.9
            },
            "vitaminC": {
                "value": 5.03,
                "percent": 6
            },
            "folate": {
                "value": 17.58
            }
        },
        "nutritionSummary": {
            "calories": 329,
            "fat": "16.4g",
            "carbs": "35.8g",
            "protein": "10.7g",
            "summaryText": "A serving of Cracked wheat porridge (Meetha daliya).",
            "breakdown": "45% fat, 44% carbs, 11% protein."
        },
        "servingSizes": [
            {
                "size": "1 bowl",
                "calories": 328.71
            }
        ]
    },
    {
        "slug": "semolina-porridge-suji-rava-daliya",
        "name": "Semolina porridge (Suji/Rava daliya)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 bowl",
            "calories": 280.49,
            "totalFat": {
                "value": 11.35
            },
            "saturatedFat": {
                "value": 6.79
            },
            "polyunsaturatedFat": {
                "value": 0.41
            },
            "monounsaturatedFat": {
                "value": 3.05
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 64.51
            },
            "totalCarbohydrate": {
                "value": 34.44
            },
            "dietaryFiber": {
                "value": 1.94
            },
            "sugars": {
                "value": 20.95
            },
            "protein": {
                "value": 10.43
            },
            "calcium": {
                "value": 301.68
            },
            "iron": {
                "value": 0.99
            },
            "potassium": {
                "value": 344.7
            },
            "vitaminC": {
                "value": 5.03,
                "percent": 6
            },
            "folate": {
                "value": 22.71
            }
        },
        "nutritionSummary": {
            "calories": 280,
            "fat": "11.3g",
            "carbs": "34.4g",
            "protein": "10.4g",
            "summaryText": "A serving of Semolina porridge (Suji/Rava daliya).",
            "breakdown": "36% fat, 49% carbs, 15% protein."
        },
        "servingSizes": [
            {
                "size": "1 bowl",
                "calories": 280.49
            }
        ]
    },
    {
        "slug": "oatmeal-porridge",
        "name": "Oatmeal Porridge",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 bowl",
            "calories": 289.96,
            "totalFat": {
                "value": 12.82
            },
            "saturatedFat": {
                "value": 7.02
            },
            "polyunsaturatedFat": {
                "value": 0.98
            },
            "monounsaturatedFat": {
                "value": 3.66
            },
            "cholesterol": {
                "value": 0.06
            },
            "sodium": {
                "value": 64.25
            },
            "totalCarbohydrate": {
                "value": 34.89
            },
            "dietaryFiber": {
                "value": 1.56
            },
            "sugars": {
                "value": 20.68
            },
            "protein": {
                "value": 10.33
            },
            "calcium": {
                "value": 305.8
            },
            "iron": {
                "value": 1.12
            },
            "potassium": {
                "value": 362.3
            },
            "vitaminC": {
                "value": 5.03,
                "percent": 6
            },
            "folate": {
                "value": 23.98
            }
        },
        "nutritionSummary": {
            "calories": 290,
            "fat": "12.8g",
            "carbs": "34.9g",
            "protein": "10.3g",
            "summaryText": "A serving of Oatmeal Porridge.",
            "breakdown": "40% fat, 48% carbs, 12% protein."
        },
        "servingSizes": [
            {
                "size": "1 bowl",
                "calories": 289.96
            }
        ]
    },
    {
        "slug": "cornflakes-with-milk",
        "name": "Cornflakes with milk",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 bowl",
            "calories": 326.17,
            "totalFat": {
                "value": 14.23
            },
            "saturatedFat": {
                "value": 7.74
            },
            "polyunsaturatedFat": {
                "value": 1.03
            },
            "monounsaturatedFat": {
                "value": 4.25
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 73.8
            },
            "totalCarbohydrate": {
                "value": 41.56
            },
            "dietaryFiber": {
                "value": 2.16
            },
            "sugars": {
                "value": 27.73
            },
            "protein": {
                "value": 9.98
            },
            "calcium": {
                "value": 296
            },
            "iron": {
                "value": 1.18
            },
            "potassium": {
                "value": 369.4
            },
            "vitaminC": {
                "value": 4.82,
                "percent": 5
            },
            "folate": {
                "value": 43.87
            }
        },
        "nutritionSummary": {
            "calories": 326,
            "fat": "14.2g",
            "carbs": "41.6g",
            "protein": "10.0g",
            "summaryText": "A serving of Cornflakes with milk.",
            "breakdown": "39% fat, 51% carbs, 10% protein."
        },
        "servingSizes": [
            {
                "size": "1 bowl",
                "calories": 326.17
            }
        ]
    },
    {
        "slug": "rice-flakes-chiwda-aval",
        "name": "Rice flakes (Chiwda/Aval)",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 bowl",
            "calories": 312.58,
            "totalFat": {
                "value": 11.09
            },
            "saturatedFat": {
                "value": 6.58
            },
            "polyunsaturatedFat": {
                "value": 0.5
            },
            "monounsaturatedFat": {
                "value": 3.04
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 62.28
            },
            "totalCarbohydrate": {
                "value": 43.28
            },
            "dietaryFiber": {
                "value": 1.04
            },
            "sugars": {
                "value": 20.24
            },
            "protein": {
                "value": 10.06
            },
            "calcium": {
                "value": 286.76
            },
            "iron": {
                "value": 1.71
            },
            "potassium": {
                "value": 320.8
            },
            "vitaminC": {
                "value": 4.82,
                "percent": 5
            },
            "folate": {
                "value": 19.41
            }
        },
        "nutritionSummary": {
            "calories": 313,
            "fat": "11.1g",
            "carbs": "43.3g",
            "protein": "10.1g",
            "summaryText": "A serving of Rice flakes (Chiwda/Aval).",
            "breakdown": "32% fat, 55% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "1 bowl",
                "calories": 312.58
            }
        ]
    },
    {
        "slug": "wheat-flakes",
        "name": "Wheat flakes",
        "cuisine": "Generic",
        "mealCategory": "Breakfast",
        "foodGroup": "Breads & Cereals",
        "nutritionFacts": {
            "servingSize": "1 bowl",
            "calories": 312.58,
            "totalFat": {
                "value": 11.09
            },
            "saturatedFat": {
                "value": 6.58
            },
            "polyunsaturatedFat": {
                "value": 0.5
            },
            "monounsaturatedFat": {
                "value": 3.04
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 62.28
            },
            "totalCarbohydrate": {
                "value": 43.28
            },
            "dietaryFiber": {
                "value": 1.04
            },
            "sugars": {
                "value": 20.24
            },
            "protein": {
                "value": 10.06
            },
            "calcium": {
                "value": 286.76
            },
            "iron": {
                "value": 1.71
            },
            "potassium": {
                "value": 320.8
            },
            "vitaminC": {
                "value": 4.82,
                "percent": 5
            },
            "folate": {
                "value": 19.41
            }
        },
        "nutritionSummary": {
            "calories": 313,
            "fat": "11.1g",
            "carbs": "43.3g",
            "protein": "10.1g",
            "summaryText": "A serving of Wheat flakes.",
            "breakdown": "32% fat, 55% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "1 bowl",
                "calories": 312.58
            }
        ]
    },
    {
        "slug": "murmura-puffed-rice",
        "name": "Murmura (Puffed rice)",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 bowl",
            "calories": 315.02,
            "totalFat": {
                "value": 11.24
            },
            "saturatedFat": {
                "value": 6.51
            },
            "polyunsaturatedFat": {
                "value": 0.34
            },
            "monounsaturatedFat": {
                "value": 2.93
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 62.61
            },
            "totalCarbohydrate": {
                "value": 43.56
            },
            "dietaryFiber": {
                "value": 0.77
            },
            "sugars": {
                "value": 20.33
            },
            "protein": {
                "value": 10.06
            },
            "calcium": {
                "value": 288.53
            },
            "iron": {
                "value": 1.74
            },
            "potassium": {
                "value": 318.4
            },
            "vitaminC": {
                "value": 4.82,
                "percent": 5
            },
            "folate": {
                "value": 16.87
            }
        },
        "nutritionSummary": {
            "calories": 315,
            "fat": "11.2g",
            "carbs": "43.6g",
            "protein": "10.1g",
            "summaryText": "A serving of Murmura (Puffed rice).",
            "breakdown": "32% fat, 55% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "1 bowl",
                "calories": 315.02
            }
        ]
    },
    {
        "slug": "puffed-wheat-murmure-moori",
        "name": "Puffed wheat (Murmure/Moori)",
        "cuisine": "Generic",
        "mealCategory": "Snack",
        "foodGroup": "Snacks",
        "nutritionFacts": {
            "servingSize": "1 bowl",
            "calories": 315.02,
            "totalFat": {
                "value": 11.24
            },
            "saturatedFat": {
                "value": 6.51
            },
            "polyunsaturatedFat": {
                "value": 0.34
            },
            "monounsaturatedFat": {
                "value": 2.93
            },
            "cholesterol": {
                "value": 0
            },
            "sodium": {
                "value": 62.61
            },
            "totalCarbohydrate": {
                "value": 43.56
            },
            "dietaryFiber": {
                "value": 0.77
            },
            "sugars": {
                "value": 20.33
            },
            "protein": {
                "value": 10.06
            },
            "calcium": {
                "value": 288.53
            },
            "iron": {
                "value": 1.74
            },
            "potassium": {
                "value": 318.4
            },
            "vitaminC": {
                "value": 4.82,
                "percent": 5
            },
            "folate": {
                "value": 16.87
            }
        },
        "nutritionSummary": {
            "calories": 315,
            "fat": "11.2g",
            "carbs": "43.6g",
            "protein": "10.1g",
            "summaryText": "A serving of Puffed wheat (Murmure/Moori).",
            "breakdown": "32% fat, 55% carbs, 13% protein."
        },
        "servingSizes": [
            {
                "size": "1 bowl",
                "calories": 315.02
            }
        ]
    }
]
