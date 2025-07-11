
"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { type GenerateDietPlanOutput } from "@/ai/flows/generate-diet-plan";
import { Button } from "@/components/ui/button";
import { Utensils, Sunrise, Sun, Moon, Coffee } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

type Meal = {
    type: string;
    details: {
        name: string;
        calories: number;
        description: string;
    };
};

type DayPlan = {
    day: string;
    meals: Meal[];
};

const mealIcons: { [key: string]: React.ElementType } = {
  breakfast: Sunrise,
  lunch: Sun,
  dinner: Moon,
  snacks: Coffee,
};


export default function WeeklyPlanPage() {
  const [dietPlan, setDietPlan] = useState<GenerateDietPlanOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const storedPlan = localStorage.getItem("dietPlan");
      if (storedPlan) {
        setDietPlan(JSON.parse(storedPlan));
      }
    } catch (e) {
      console.error("Failed to parse diet plan from localStorage", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return (
        <div className="flex flex-col w-full">
            <Header
                title="Weekly Meal Plan"
                description="Your 7-day diet at a glance."
            />
            <main className="flex-1 p-4 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {[...Array(7)].map((_, i) => (
                        <Card key={i}>
                            <CardHeader>
                                <Skeleton className="h-6 w-1/2" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-10 w-full" />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </main>
        </div>
    )
  }

  if (!dietPlan || !dietPlan.plan || dietPlan.plan.length === 0) {
    return (
      <div className="flex flex-col w-full">
        <Header
          title="Weekly Meal Plan"
          description="Your 7-day diet at a glance."
        />
        <main className="flex-1 p-4 md:p-8 flex items-center justify-center">
          <Card className="text-center">
            <CardHeader>
              <CardTitle>No Diet Plan Found</CardTitle>
              <CardDescription>
                You haven't generated a diet plan yet. Create one to see your
                weekly schedule here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link href="/diet-plan">Generate a Diet Plan</Link>
              </Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-muted/20">
      <Header
        title="Weekly Meal Plan"
        description="Your 7-day diet at a glance."
      />
      <main className="flex-1 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {dietPlan.plan.map((dayPlan: DayPlan) => {
            if (!dayPlan || !dayPlan.day) return null;

            return (
              <Card key={dayPlan.day} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {dayPlan.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  {(dayPlan.meals || []).map((meal: Meal) => {
                    const Icon = mealIcons[meal.type.toLowerCase()] || Utensils;
                     if (!meal || !meal.details || !meal.details.name) return null;
                    return (
                      <div key={meal.type} className="flex items-start gap-4 p-3 rounded-md bg-background/60 shadow-sm">
                        <Icon className="h-5 w-5 mt-1 text-muted-foreground" />
                        <div>
                            <p className="font-semibold capitalize text-muted-foreground text-sm">{meal.type}</p>
                            <p className="font-medium text-card-foreground">
                                {meal.details.name}
                            </p>
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
}
