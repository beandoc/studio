
"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Replace } from "lucide-react";
import WeeklyProgressChart from "@/components/weekly-progress-chart";
import { foodDatabase, type FoodItem } from "@/lib/food-data";
import { cn } from "@/lib/utils";

type MealCategory = "Breakfast" | "Lunch" | "Dinner" | "Snacks";

type MealDisplayInfo = {
  category: MealCategory;
  time: string;
  cardColor: string;
  buttonColor: string;
  meal: FoodItem;
};

// Helper function to get one meal for each category from the database
const getTodaysMeals = (): MealDisplayInfo[] => {
    const breakfast = foodDatabase.find(f => f.mealCategory === 'Breakfast');
    const lunch = foodDatabase.find(f => f.mealCategory === 'Lunch' && f.name !== breakfast?.name);
    const dinner = foodDatabase.find(f => f.mealCategory === 'Dinner' && f.name !== breakfast?.name && f.name !== lunch?.name);
    const snack = foodDatabase.find(f => f.mealCategory === 'Snack' && f.name !== breakfast?.name && f.name !== lunch?.name && f.name !== dinner?.name);

    const mealMap: { [key in MealCategory]?: FoodItem } = {
        Breakfast: breakfast,
        Lunch: lunch,
        Dinner: dinner,
        Snacks: snack,
    };

    const displayInfo: { [key in MealCategory]: { time: string, cardColor: string, buttonColor: string } } = {
        Breakfast: { time: "8:00 AM", cardColor: "bg-yellow-100/50", buttonColor: "bg-yellow-500 hover:bg-yellow-600" },
        Lunch: { time: "1:00 PM", cardColor: "bg-green-100/50", buttonColor: "bg-green-500 hover:bg-green-600" },
        Dinner: { time: "8:00 PM", cardColor: "bg-blue-100/50", buttonColor: "bg-blue-500 hover:bg-blue-600" },
        Snacks: { time: "4:00 PM", cardColor: "bg-purple-100/50", buttonColor: "bg-purple-500 hover:bg-purple-600" },
    };

    return (Object.keys(mealMap) as MealCategory[])
        .filter(category => mealMap[category])
        .map(category => ({
            category,
            time: displayInfo[category].time,
            cardColor: displayInfo[category].cardColor,
            buttonColor: displayInfo[category].buttonColor,
            meal: mealMap[category]!,
        }));
};

const todaysMeals = getTodaysMeals();

const NutrientRow = ({ label, value, unit }: { label: string; value: number; unit: string }) => (
    <div className="flex justify-between text-sm text-gray-600">
        <p>{label}:</p>
        <p className="font-semibold">{value}{unit}</p>
    </div>
);


export default function Dashboard() {
  return (
    <div className="flex flex-col w-full">
      <Header
        title="Dashboard"
        description="Here's a summary of your meals and progress for today."
      />
      <main className="flex-1 p-4 md:p-8 space-y-8">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Today's Meals
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {todaysMeals.map((item) => (
              <Card key={item.category} className={cn("shadow-md border-0 flex flex-col", item.cardColor)}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-bold text-gray-700">{item.category}</CardTitle>
                    <span className="text-xs font-semibold text-gray-500 bg-white/70 px-2 py-1 rounded-full">{item.time}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                    <p className="font-semibold text-gray-800">{item.meal.name}</p>
                    <div className="space-y-2">
                        <NutrientRow label="Calories" value={item.meal.nutritionFacts.calories} unit=" kcal"/>
                        <NutrientRow label="Protein" value={item.meal.nutritionFacts.protein.value} unit="g"/>
                        <NutrientRow label="Potassium" value={item.meal.nutritionFacts.potassium.value} unit="mg"/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Link href={`/meal-alternatives?mealSlug=${item.meal.slug}`} className="w-full">
                        <Button className={cn("w-full text-white", item.buttonColor)}>
                            <Replace className="mr-2 h-4 w-4" />
                            See Alternatives
                        </Button>
                    </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Weekly Progress
          </h2>
           <Card>
            <CardHeader>
              <CardTitle>Nutrient Intake This Week</CardTitle>
              <CardDescription>
                A summary of your key nutrient intake over the last 7 days.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <WeeklyProgressChart />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
