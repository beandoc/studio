"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Replace } from "lucide-react";
import WeeklyProgressChart from "@/components/weekly-progress-chart";
import { foodDatabase, type FoodItem } from "@/lib/food-data";
import { cn } from "@/lib/utils";
import type { DailyLog, Goals } from "@/app/my-meal-tracker/page";
import { format, subDays } from "date-fns";
import { Progress } from "@/components/ui/progress";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";


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

type NutrientAverage = {
  protein: number;
  carbs: number;
};

const goals: Goals = {
    calories: 2200,
    protein: 80,
    fat: 70,
    carbs: 300
};

export default function Dashboard() {
  const [chartView, setChartView] = useState<'weekly' | 'monthly'>('weekly');
  const [averages, setAverages] = useState<NutrientAverage>({ protein: 0, carbs: 0 });

  useEffect(() => {
    const today = new Date();
    let totalProtein = 0;
    let totalCarbs = 0;
    const daysWithLogs = 7;

    for (let i = 0; i < daysWithLogs; i++) {
        const date = subDays(today, i);
        const logKey = `mealLog-${format(date, 'yyyy-MM-dd')}`;
        const storedLog = localStorage.getItem(logKey);

        if (storedLog) {
            try {
                const parsedLog: DailyLog = JSON.parse(storedLog);
                Object.values(parsedLog).flat().forEach(item => {
                    totalProtein += item.protein;
                    totalCarbs += item.carbs;
                });
            } catch (e) {
                console.error("Failed to parse log for dashboard averages", e);
            }
        }
    }

    setAverages({
      protein: totalProtein > 0 ? (totalProtein / daysWithLogs) : 0,
      carbs: totalCarbs > 0 ? (totalCarbs / daysWithLogs) : 0,
    });
  }, []);

  const proteinPercentage = goals.protein > 0 ? (averages.protein / goals.protein) * 100 : 0;
  const carbsPercentage = goals.carbs > 0 ? (averages.carbs / goals.carbs) * 100 : 0;


  return (
    <div className="flex flex-col w-full">
      <Header
        title="Dashboard"
        description="Here's a summary of your meals and progress."
        showImage={true}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <Card>
                <CardHeader>
                    <CardTitle>Average Weekly Protein</CardTitle>
                    <CardDescription>Your average daily protein intake vs. your goal of {goals.protein}g.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-baseline">
                        <p className="text-3xl font-bold">{averages.protein.toFixed(1)}g</p>
                        <p className="text-lg font-semibold text-primary">{proteinPercentage.toFixed(0)}% of Goal</p>
                    </div>
                    <Progress value={proteinPercentage} className="mt-2 h-3 [&>div]:bg-red-500" />
                </CardContent>
             </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Average Weekly Carbs</CardTitle>
                    <CardDescription>Your average daily carb intake vs. your goal of {goals.carbs}g.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-baseline">
                        <p className="text-3xl font-bold">{averages.carbs.toFixed(1)}g</p>
                        <p className="text-lg font-semibold text-primary">{carbsPercentage.toFixed(0)}% of Goal</p>
                    </div>
                    <Progress value={carbsPercentage} className="mt-2 h-3 [&>div]:bg-green-500" />
                </CardContent>
             </Card>
          </div>
        </section>

        <section>
           <Card>
            <CardHeader className="flex flex-row justify-between items-center">
              <div>
                <CardTitle>Nutrient Intake</CardTitle>
                <CardDescription>
                  A summary of your key nutrient intake over the selected period.
                </CardDescription>
              </div>
              <ToggleGroup type="single" value={chartView} onValueChange={(value) => {if (value) setChartView(value as 'weekly' | 'monthly')}} defaultValue="weekly">
                <ToggleGroupItem value="weekly" aria-label="Toggle weekly">
                  Weekly
                </ToggleGroupItem>
                <ToggleGroupItem value="monthly" aria-label="Toggle monthly">
                  Monthly
                </ToggleGroupItem>
              </ToggleGroup>
            </CardHeader>
            <CardContent>
              <WeeklyProgressChart view={chartView} />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
