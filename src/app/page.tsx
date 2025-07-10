"use client";

import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Replace } from "lucide-react";

type Meal = {
  category: "Breakfast" | "Lunch" | "Dinner" | "Snacks";
  time: string;
  name: string;
  calories: number;
  protein: number;
  phosphorus: number;
  cardColor: string;
  buttonColor: string;
};

const todaysMeals: Meal[] = [
  {
    category: "Breakfast",
    time: "8:00 AM",
    name: "Vegetable Upma",
    calories: 220,
    protein: 6,
    phosphorus: 120,
    cardColor: "bg-yellow-100/50",
    buttonColor: "bg-orange-400 hover:bg-orange-500",
  },
  {
    category: "Lunch",
    time: "1:00 PM",
    name: "Lauki Kofta Curry with Rice",
    calories: 320,
    protein: 8,
    phosphorus: 140,
    cardColor: "bg-green-100/50",
    buttonColor: "bg-green-500 hover:bg-green-600",
  },
  {
    category: "Dinner",
    time: "8:00 PM",
    name: "Vegetable Khichdi",
    calories: 290,
    protein: 12,
    phosphorus: 130,
    cardColor: "bg-blue-100/50",
    buttonColor: "bg-blue-500 hover:bg-blue-600",
  },
  {
    category: "Snacks",
    time: "4:00 PM",
    name: "Roasted Makhana",
    calories: 120,
    protein: 4,
    phosphorus: 70,
    cardColor: "bg-purple-100/50",
    buttonColor: "bg-purple-500 hover:bg-purple-600",
  },
];

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
        description="Here's a summary of your meals for today."
      />
      <div className="p-4 md:p-8">
        <section>
          <h2 className="text-2xl font-bold tracking-tight mb-4">
            Today's Meals
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {todaysMeals.map((meal) => (
              <Card key={meal.category} className={`shadow-md border-0 ${meal.cardColor} flex flex-col`}>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-lg font-bold text-gray-700">{meal.category}</CardTitle>
                    <span className="text-xs font-semibold text-gray-500 bg-white/70 px-2 py-1 rounded-full">{meal.time}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                    <p className="font-semibold text-gray-800">{meal.name}</p>
                    <div className="space-y-2">
                        <NutrientRow label="Calories" value={meal.calories} unit=" kcal"/>
                        <NutrientRow label="Protein" value={meal.protein} unit="g"/>
                        <NutrientRow label="Phosphorus" value={meal.phosphorus} unit="mg"/>
                    </div>
                </CardContent>
                <CardFooter>
                    <Link href="/meal-alternatives" className="w-full">
                        <Button className={`w-full text-white ${meal.buttonColor}`}>
                            <Replace className="mr-2 h-4 w-4" />
                            See Alternatives
                        </Button>
                    </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
