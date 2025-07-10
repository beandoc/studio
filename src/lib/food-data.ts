
export type FoodItem = {
    slug: string;
    name: string;
    nutritionFacts: {
        servingSize: string;
        calories: number;
        totalFat: { value: number; percent: number };
        saturatedFat: { value: number; percent: number };
        transFat: { value: number };
        polyunsaturatedFat: { value: number };
        monounsaturatedFat: { value: number };
        cholesterol: { value: number; percent: number };
        sodium: { value: number; percent: number };
        totalCarbohydrate: { value: number; percent: number };
        dietaryFiber: { value: number; percent: number };
        sugars: { value: number };
        protein: { value: number };
        vitaminD: { value: number; percent: number };
        calcium: { value: number; percent: number };
        iron: { value: number; percent: number };
        potassium: { value: number; percent: number };
        vitaminA: { value: number; percent: number };
        vitaminC: { value: number; percent: number };
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
    relatedTypes: {
        bakedBeans: string[];
        beans: string[];
    }
};

export const foodDatabase: FoodItem[] = [
    {
        slug: 'baked-beans',
        name: 'Baked Beans',
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
            sugars: { value: 0 }, // Not specified in image
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
    }
];
