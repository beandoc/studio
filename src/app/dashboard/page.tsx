
"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import Header from "@/components/header";
import { Progress } from "@/components/ui/progress";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import WeeklyProgressChart from "@/components/weekly-progress-chart";
import { useProfile } from "@/context/profile-context";
import type { DailyLog, Goals, LoggedMeal } from "@/app/my-meal-tracker/page";
import { generateDailyTip } from "@/ai/flows/generate-daily-tip";
import { Skeleton } from "@/components/ui/skeleton";
import { Lightbulb } from "lucide-react";

type NutrientAverage = {
  protein: number;
  calories: number;
};

export default function Dashboard() {
  const { activeProfile, getRawProfileLogs } = useProfile();
  const [chartView, setChartView] = useState<'weekly' | 'monthly'>('weekly');
  const [dailyLogs, setDailyLogs] = useState<DailyLog[]>([]);
  const [dailyTip, setDailyTip] = useState<string | null>(null);
  const [isTipLoading, setIsTipLoading] = useState(true);

  useEffect(() => {
    if (activeProfile) {
      const logs = getRawProfileLogs(activeProfile.id, 7);
      setDailyLogs(logs);

      setIsTipLoading(true);
      generateDailyTip(activeProfile)
        .then(result => setDailyTip(result.tip))
        .catch(err => {
            console.error("Failed to generate tip:", err);
            setDailyTip("Could not load a tip right now. Please try again later.");
        })
        .finally(() => setIsTipLoading(false));

    } else {
      setDailyLogs([]);
      setDailyTip(null);
    }
  }, [activeProfile, getRawProfileLogs]);

  const goals = useMemo<Goals>(() => ({
    calories: activeProfile?.calorieGoal || 2200,
    protein: activeProfile?.proteinGoal || 80,
    fat: 70, // This is not in profile yet, so keeping it static for now
    carbs: 300, // This is not in profile yet
    fluid: activeProfile?.fluidGoal || 2000,
  }), [activeProfile]);

  const averages = useMemo<NutrientAverage>(() => {
    if (!dailyLogs || dailyLogs.length === 0) return { protein: 0, calories: 0 };
    
    let totalProtein = 0;
    let totalCalories = 0;
    
    const allMeals = dailyLogs.flatMap(log => Object.values(log.meals).flat());

    allMeals.forEach(item => {
        totalProtein += item.protein || 0;
        totalCalories += item.calories || 0;
    });

    const daysWithLogs = dailyLogs.length > 0 ? dailyLogs.length : 1;

    return {
      protein: totalProtein / daysWithLogs,
      calories: totalCalories / daysWithLogs,
    };
  }, [dailyLogs]);

  const proteinPercentage = goals.protein > 0 ? (averages.protein / goals.protein) * 100 : 0;
  const caloriesPercentage = goals.calories > 0 ? (averages.calories / goals.calories) * 100 : 0;

  if (!activeProfile) {
    return (
       <div className="flex flex-col w-full">
        <Header
          title="Dashboard"
          description="Select a profile to view the dashboard."
        />
        <main className="flex-1 p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle>No Profile Selected</CardTitle>
                    <CardDescription>Please create or select a profile from the sidebar to view the dashboard.</CardDescription>
                </CardHeader>
            </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full">
      <Header
        title={`${activeProfile.fullName}'s Dashboard`}
        description="Here's a summary of meals and progress."
        showImage={true}
      />
      <main className="flex-1 p-4 md:p-8 space-y-8">
        <section>
          <Card>
             <CardHeader>
                <CardTitle className="flex items-center gap-2 text-amber-600">
                  <Lightbulb /> Tip of the Day
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isTipLoading ? (
                  <Skeleton className="h-5 w-3/4" />
                ) : (
                  <p className="text-muted-foreground italic">{dailyTip}</p>
                )}
              </CardContent>
          </Card>
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
                    <CardTitle>Average Weekly Calories</CardTitle>
                    <CardDescription>Your average daily calorie intake vs. your goal of {goals.calories} kcal.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex justify-between items-baseline">
                        <p className="text-3xl font-bold">{averages.calories.toFixed(0)}</p>
                        <p className="text-lg font-semibold text-primary">{caloriesPercentage.toFixed(0)}% of Goal</p>
                    </div>
                    <Progress value={caloriesPercentage} className="mt-2 h-3 [&>div]:bg-green-500" />
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
