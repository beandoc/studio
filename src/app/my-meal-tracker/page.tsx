
"use client";

import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import { Plus, Settings, Copy, Printer, Trash2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import AddMealDialog from "@/components/add-meal-dialog";
import { Progress } from "@/components/ui/progress";


// Types
export type MealCategory = "Breakfast" | "Lunch" | "Dinner" | "Snacks";
export type LoggedMeal = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  category: MealCategory;
};
export type DailyLog = Record<MealCategory, LoggedMeal[]>;
export type Goals = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};

const MEAL_CATEGORIES: MealCategory[] = ["Breakfast", "Lunch", "Dinner", "Snacks"];

const getInitialLog = (): DailyLog => ({
  Breakfast: [],
  Lunch: [],
  Dinner: [],
  Snacks: [],
});

export default function MyMealTrackerPage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dailyLog, setDailyLog] = useState<DailyLog>(getInitialLog());
  const [isAddMealOpen, setIsAddMealOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<MealCategory>("Breakfast");


  // Recommended daily intake goals
  const goals: Goals = {
    calories: 2200,
    protein: 80,
    fat: 70,
    carbs: 300
  };

  // Load from localStorage on component mount
  useEffect(() => {
    try {
      const storedLog = localStorage.getItem("dailyMealLog");
      if (storedLog) {
        const parsedLog = JSON.parse(storedLog);
        // Basic validation to ensure it's not malformed
        if(MEAL_CATEGORIES.every(cat => Array.isArray(parsedLog[cat]))) {
          setDailyLog(parsedLog);
        }
      }
    } catch (error) {
      console.error("Failed to parse daily log from localStorage", error);
    }
  }, []);

  // Save to localStorage whenever dailyLog changes
  useEffect(() => {
    localStorage.setItem("dailyMealLog", JSON.stringify(dailyLog));
  }, [dailyLog]);
  

  const handleOpenAddItem = (category: MealCategory) => {
    setCurrentCategory(category);
    setIsAddMealOpen(true);
  };

  const handleAddMeal = (meal: Omit<LoggedMeal, 'id'>) => {
    setDailyLog(prevLog => ({
        ...prevLog,
        [meal.category]: [...prevLog[meal.category], { ...meal, id: new Date().toISOString() }]
    }));
  };

  const handleRemoveItem = (category: MealCategory, id: string) => {
    setDailyLog(prevLog => ({
      ...prevLog,
      [category]: prevLog[category].filter(item => item.id !== id),
    }));
  };

  const totals = useMemo(() => {
    let calories = 0, protein = 0, fat = 0, carbs = 0;
    Object.values(dailyLog).flat().forEach(item => {
      calories += item.calories;
      protein += item.protein;
      fat += item.fat;
      carbs += item.carbs;
    });
    return { calories, protein, fat, carbs };
  }, [dailyLog]);

  const calorieBreakdownData = [
    { name: 'Carbs', value: totals.carbs * 4, color: '#34d399' }, // 4 calories per gram
    { name: 'Fat', value: totals.fat * 9, color: '#f59e0b' },     // 9 calories per gram
    { name: 'Protein', value: totals.protein * 4, color: '#ef4444' }, // 4 calories per gram
  ].filter(item => item.value > 0);

  return (
    <div className="flex flex-col w-full">
      <AddMealDialog
        isOpen={isAddMealOpen}
        onClose={() => setIsAddMealOpen(false)}
        onAddMeal={handleAddMeal}
        category={currentCategory}
        dailyLog={dailyLog}
      />
      <Header
        title="My Meal Tracker"
        description="Log your daily meals to track your nutritional intake."
      />
      <main className="flex-1 p-4 md:p-8 space-y-8">
        {/* Top Control Bar */}
        <Card>
          <CardContent className="p-4 flex justify-between items-center">
            <h2 className="font-semibold text-lg">{format(currentDate, "eeee, d MMMM yyyy")}</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon"><Settings className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon"><Copy className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon"><Printer className="h-4 w-4" /></Button>
            </div>
          </CardContent>
        </Card>

        {/* Meal Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {MEAL_CATEGORIES.map(category => (
                <Card key={category}>
                    <CardHeader>
                        <CardTitle>{category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {dailyLog[category].length === 0 ? (
                            <div 
                                onClick={() => handleOpenAddItem(category)}
                                className="border-2 border-dashed border-muted-foreground/30 rounded-lg p-6 text-center cursor-pointer hover:bg-muted"
                            >
                                <div className="flex items-center justify-center gap-2 text-primary font-semibold">
                                    <Plus className="h-5 w-5" />
                                    <span>Add Item</span>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Meal</TableHead>
                                            <TableHead className="text-right">Cals</TableHead>
                                            <TableHead className="text-right">Protein</TableHead>
                                            <TableHead className="text-right">Fat</TableHead>
                                            <TableHead className="text-right">Carbs</TableHead>
                                            <TableHead className="w-[50px]"></TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {dailyLog[category].map(item => (
                                            <TableRow key={item.id}>
                                                <TableCell className="font-medium">{item.name}</TableCell>
                                                <TableCell className="text-right">{Math.round(item.calories)}</TableCell>
                                                <TableCell className="text-right">{item.protein.toFixed(1)}g</TableCell>
                                                <TableCell className="text-right">{item.fat.toFixed(1)}g</TableCell>
                                                <TableCell className="text-right">{item.carbs.toFixed(1)}g</TableCell>
                                                <TableCell>
                                                    <Button variant="ghost" size="icon" onClick={() => handleRemoveItem(category, item.id)}>
                                                        <Trash2 className="h-4 w-4 text-destructive" />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <Button variant="outline" className="w-full" onClick={() => handleOpenAddItem(category)}>
                                    <Plus className="mr-2 h-4 w-4" /> Add Another Item
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>

        {/* Day Summary Section */}
        <Card>
          <CardHeader>
            <CardTitle>Day Summary</CardTitle>
            <CardDescription>Your total nutritional intake for the day against your goals.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side: Totals and Progress Bars */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-medium mb-1">
                  <span>Calories</span>
                  <span>{Math.round(totals.calories)} / {goals.calories} kcal</span>
                </div>
                <Progress value={(totals.calories / goals.calories) * 100} />
              </div>
              <div>
                <div className="flex justify-between font-medium mb-1">
                  <span>Protein</span>
                  <span>{totals.protein.toFixed(1)}g / {goals.protein}g</span>
                </div>
                <Progress value={(totals.protein / goals.protein) * 100} className="[&>div]:bg-red-500" />
              </div>
              <div>
                <div className="flex justify-between font-medium mb-1">
                  <span>Fat</span>
                  <span>{totals.fat.toFixed(1)}g / {goals.fat}g</span>
                </div>
                <Progress value={(totals.fat / goals.fat) * 100} className="[&>div]:bg-amber-500"/>
              </div>
              <div>
                <div className="flex justify-between font-medium mb-1">
                  <span>Carbs</span>
                  <span>{totals.carbs.toFixed(1)}g / {goals.carbs}g</span>
                </div>
                <Progress value={(totals.carbs / goals.carbs) * 100} className="[&>div]:bg-green-500"/>
              </div>
            </div>

            {/* Right side: Pie Chart */}
            <div className="h-64">
                <ChartContainer config={{}} className="w-full h-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Tooltip content={<ChartTooltipContent hideLabel />} />
                            <Pie
                                data={calorieBreakdownData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
                                    const RADIAN = Math.PI / 180;
                                    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                    return (
                                    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                                        {`${(percent * 100).toFixed(0)}%`}
                                    </text>
                                    );
                                }}
                            >
                                {calorieBreakdownData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
              * Based on your recommended daily intake. <Button variant="link" className="p-0 h-auto ml-1">Set your Recommended Daily Intake</Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
}
