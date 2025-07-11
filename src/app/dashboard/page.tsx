
"use client";

import { useState, useEffect, useMemo, Profiler, type ProfilerOnRenderCallback } from "react";
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

type NutrientAverage = {
  protein: number;
  carbs: number;
};

const goals: Goals = {
    calories: 2200,
    protein: 80,
    fat: 70,
    carbs: 300,
    fluid: 2000,
};

export default function Dashboard() {
  const [chartView, setChartView] = useState<'weekly' | 'monthly'>('weekly');
  const [dailyLogs, setDailyLogs] = useState<DailyLog[]>([]);

  useEffect(() => {
    const today = new Date();
    const logs: DailyLog[] = [];
    for (let i = 0; i < 7; i++) {
        const date = subDays(today, i);
        const logKey = `mealLog-${format(date, 'yyyy-MM-dd')}`;
        const storedLog = localStorage.getItem(logKey);

        if (storedLog) {
            try {
                const parsedLog: DailyLog = JSON.parse(storedLog);
                logs.push(parsedLog);
            } catch (e) {
                console.error("Failed to parse log for dashboard averages", e);
            }
        }
    }
    setDailyLogs(logs);
  }, []);

  const averages = useMemo<NutrientAverage>(() => {
    let totalProtein = 0;
    let totalCarbs = 0;
    const daysWithLogs = dailyLogs.length > 0 ? dailyLogs.length : 1;

    dailyLogs.forEach(log => {
      if (log && log.meals) {
        Object.values(log.meals).flat().forEach(item => {
          totalProtein += item.protein;
          totalCarbs += item.carbs;
        });
      }
    });

    return {
      protein: totalProtein / daysWithLogs,
      carbs: totalCarbs / daysWithLogs,
    };
  }, [dailyLogs]);


  const proteinPercentage = goals.protein > 0 ? (averages.protein / goals.protein) * 100 : 0;
  const carbsPercentage = goals.carbs > 0 ? (averages.carbs / goals.carbs) * 100 : 0;

  const onRender: ProfilerOnRenderCallback = (id, phase, actualDuration) => {
    console.log(`Profiler: ${id} ${phase} in ${actualDuration.toFixed(2)}ms`);
  };

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Dashboard"
        description="Here's a summary of your meals and progress."
        showImage={true}
      />
      <Profiler id="Dashboard" onRender={onRender}>
        <main className="flex-1 p-4 md:p-8 space-y-8">
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
      </Profiler>
    </div>
  );
}
