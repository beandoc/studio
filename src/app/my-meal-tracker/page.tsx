
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { format, addDays } from "date-fns";
import { Plus, Settings, Copy, Printer, Trash2, ChevronLeft, ChevronRight, Calendar as CalendarIcon, RotateCcw, GlassWater, Droplets, Loader2 } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip as RechartsTooltip, Legend } from "recharts";

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
  type ChartConfig,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart";
import AddMealDialog from "@/components/add-meal-dialog";
import { Progress } from "@/components/ui/progress";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { useProfile } from "@/context/profile-context";
import { useFoodData } from "@/context/food-context";

export type MealCategory = "Breakfast" | "Lunch" | "Dinner" | "Morning Snack" | "Afternoon Snack" | "Evening Snack";
export type LoggedItem = {
  id: string;
  name: string;
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
};
export type LoggedMeal = LoggedItem & { category: MealCategory; }
export type LoggedFluid = { id: string; name: string; amount: number; };

export type DailyLog = {
  meals: Record<MealCategory, LoggedMeal[]>;
  fluids: LoggedFluid[];
};

export type Goals = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fluid: number;
};

const MEAL_CATEGORIES: MealCategory[] = ["Breakfast", "Lunch", "Dinner", "Morning Snack", "Afternoon Snack", "Evening Snack"];
const FLUID_OPTIONS = [
    { name: "Cup", amount: 240 },
    { name: "Glass", amount: 350 },
    { name: "Bowl", amount: 300 },
];

export const getInitialLog = (): DailyLog => ({
  meals: {
    "Breakfast": [],
    "Lunch": [],
    "Dinner": [],
    "Morning Snack": [],
    "Afternoon Snack": [],
    "Evening Snack": [],
  },
  fluids: [],
});

const chartConfig = {
    carbs: { label: "Carbs", color: "hsl(var(--chart-4))" },
    fat: { label: "Fat", color: "hsl(var(--chart-2))" },
    protein: { label: "Protein", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;


export default function MyMealTrackerPage() {
  const { activeProfile, updateDailyLog, getDailyLog } = useProfile();
  const { isFoodDataLoading } = useFoodData();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dailyLog, setDailyLog] = useState<DailyLog>(getInitialLog());
  const [isAddMealOpen, setIsAddMealOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<MealCategory>("Breakfast");
  
  const goals = useMemo<Goals>(() => ({
    calories: activeProfile?.calorieGoal || 2200,
    protein: activeProfile?.proteinGoal || 80,
    fat: 70, 
    carbs: 300,
    fluid: activeProfile?.fluidGoal || 2000,
  }), [activeProfile]);

  useEffect(() => {
    if (activeProfile) {
        const log = getDailyLog(activeProfile.id, currentDate) || getInitialLog();
        setDailyLog(log);
    } else {
        setDailyLog(getInitialLog());
    }
  }, [currentDate, activeProfile, getDailyLog]);

  const handleDailyLogChange = useCallback((newLog: DailyLog) => {
    setDailyLog(newLog);
    if (activeProfile) {
        updateDailyLog(activeProfile.id, currentDate, newLog);
    }
  }, [activeProfile, currentDate, updateDailyLog]);

  const handleOpenAddItem = (category: MealCategory) => {
    setCurrentCategory(category);
    setIsAddMealOpen(true);
  };

  const handleAddMeal = (meal: Omit<LoggedMeal, 'id'>) => {
    const newLog = JSON.parse(JSON.stringify(dailyLog));
    newLog.meals[meal.category].push({ ...meal, id: new Date().toISOString() });
    handleDailyLogChange(newLog);
  };
  
  const handleAddFluid = (fluid: Omit<LoggedFluid, 'id'>) => {
    const newLog = JSON.parse(JSON.stringify(dailyLog));
    newLog.fluids.push({ ...fluid, id: new Date().toISOString() });
    handleDailyLogChange(newLog);
  };

  const handleLogAgain = (item: LoggedMeal) => {
     const newLog = JSON.parse(JSON.stringify(dailyLog));
     newLog.meals[item.category].push({ ...item, id: new Date().toISOString() + Math.random() });
     handleDailyLogChange(newLog);
  }
  
  const handleRemoveFluid = (id: string) => {
    const newLog = JSON.parse(JSON.stringify(dailyLog));
    newLog.fluids = newLog.fluids.filter((item: LoggedFluid) => item.id !== id);
    handleDailyLogChange(newLog);
  };

  const handleRemoveItem = (category: MealCategory, id: string) => {
    const newLog = JSON.parse(JSON.stringify(dailyLog));
    newLog.meals[category] = newLog.meals[category].filter((item: LoggedMeal) => item.id !== id);
    handleDailyLogChange(newLog);
  };

  const changeDate = (offset: number) => {
    setCurrentDate(current => addDays(current, offset));
  };

  const totals = useMemo(() => {
    let calories = 0, protein = 0, fat = 0, carbs = 0, fluid = 0;
    
    if (dailyLog) {
        if (dailyLog.meals) {
            Object.values(dailyLog.meals).flat().forEach(item => {
                calories += item.calories || 0;
                protein += item.protein || 0;
                fat += item.fat || 0;
                carbs += item.carbs || 0;
            });
        }
        if (dailyLog.fluids) {
            dailyLog.fluids.forEach(item => {
                fluid += item.amount || 0;
            });
        }
    }
    
    return { calories, protein, fat, carbs, fluid };
  }, [dailyLog]);

  const calorieBreakdownData = [
    { name: 'carbs', value: totals.carbs * 4, fill: 'var(--color-carbs)' }, 
    { name: 'fat', value: totals.fat * 9, fill: 'var(--color-fat)' },    
    { name: 'protein', value: totals.protein * 4, fill: 'var(--color-protein)' },
  ].filter(item => item.value > 0);
  
  if (!activeProfile) {
    return (
       <div className="flex flex-col w-full">
        <Header
          title="My Meal & Fluid Tracker"
          description="Log your daily intake to track your nutritional progress."
        />
        <main className="flex-1 p-4 md:p-8">
            <Card>
                <CardHeader>
                    <CardTitle>No Profile Selected</CardTitle>
                    <CardDescription>Please create or select a profile to log meals and fluids.</CardDescription>
                </CardHeader>
            </Card>
        </main>
      </div>
    )
  }

  return (
    <>
      <AddMealDialog
        isOpen={isAddMealOpen}
        onClose={() => setIsAddMealOpen(false)}
        onAddMeal={handleAddMeal}
        category={currentCategory}
      />
      <div className="flex flex-col w-full">
        <Header
          title={`Meal & Fluid Tracker for ${activeProfile.fullName}`}
          description="Log daily intake to track nutritional progress."
        />
        <main className="flex-1 p-4 md:p-8 space-y-8">
          <Card>
            <CardContent className="p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={() => changeDate(-1)}>
                      <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Popover>
                      <PopoverTrigger asChild>
                          <Button
                          variant={"outline"}
                          className={cn(
                              "w-[280px] justify-start text-left font-normal",
                              !currentDate && "text-muted-foreground"
                          )}
                          >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {currentDate ? format(currentDate, "eeee, d MMMM yyyy") : <span>Pick a date</span>}
                          </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                          <Calendar
                          mode="single"
                          selected={currentDate}
                          onSelect={(date) => date && setCurrentDate(date)}
                          initialFocus
                          />
                      </PopoverContent>
                  </Popover>
                  <Button variant="outline" size="icon" onClick={() => changeDate(1)}>
                      <ChevronRight className="h-4 w-4" />
                  </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon"><Settings className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Copy className="h-4 w-4" /></Button>
                <Button variant="outline" size="icon"><Printer className="h-4 w-4" /></Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {MEAL_CATEGORIES.map(category => (
                  <Card key={category}>
                      <CardHeader>
                          <CardTitle>{category}</CardTitle>
                      </CardHeader>
                      <CardContent>
                          {dailyLog.meals[category].length === 0 ? (
                              <Button variant="outline" className="w-full border-dashed" onClick={() => handleOpenAddItem(category)} disabled={isFoodDataLoading}>
                                  {isFoodDataLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
                                  {isFoodDataLoading ? "Loading food..." : "Add Item"}
                              </Button>
                          ) : (
                              <div className="space-y-4">
                                  <Table>
                                      <TableHeader>
                                          <TableRow>
                                              <TableHead>Meal</TableHead>
                                              <TableHead className="text-right">Cals</TableHead>
                                              <TableHead className="text-right">Protein</TableHead>
                                              <TableHead className="w-[100px]"></TableHead>
                                          </TableRow>
                                      </TableHeader>
                                      <TableBody>
                                          {dailyLog.meals[category].map(item => (
                                              <TableRow key={item.id}>
                                                  <TableCell className="font-medium">{item.name}</TableCell>
                                                  <TableCell className="text-right">{Math.round(item.calories)}</TableCell>
                                                  <TableCell className="text-right">{item.protein.toFixed(1)}g</TableCell>
                                                  <TableCell className="flex justify-end gap-1">
                                                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleLogAgain(item)}>
                                                          <RotateCcw className="h-4 w-4 text-blue-500" />
                                                      </Button>
                                                      <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleRemoveItem(category, item.id)}>
                                                          <Trash2 className="h-4 w-4 text-destructive" />
                                                      </Button>
                                                  </TableCell>
                                              </TableRow>
                                          ))}
                                      </TableBody>
                                  </Table>
                                  <Button variant="outline" className="w-full" onClick={() => handleOpenAddItem(category)} disabled={isFoodDataLoading}>
                                      {isFoodDataLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Plus className="mr-2 h-4 w-4" />}
                                      {isFoodDataLoading ? "Loading food..." : "Add Another Item"}
                                  </Button>
                              </div>
                          )}
                      </CardContent>
                  </Card>
              ))}

            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Fluid Log</CardTitle>
                    <CardDescription>Log your fluid/water intake here.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2 mb-4">
                        {FLUID_OPTIONS.map(fluid => (
                            <Button key={fluid.name} variant="outline" className="flex-1" onClick={() => handleAddFluid({ name: fluid.name, amount: fluid.amount })}>
                                <GlassWater className="mr-2 h-4 w-4" /> Log 1 {fluid.name} ({fluid.amount}ml)
                            </Button>
                        ))}
                    </div>
                     {dailyLog.fluids.length > 0 && (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Type</TableHead>
                                    <TableHead className="text-right">Amount (ml)</TableHead>
                                    <TableHead className="w-[50px]"></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {dailyLog.fluids.map(item => (
                                    <TableRow key={item.id}>
                                        <TableCell className="font-medium">{item.name}</TableCell>
                                        <TableCell className="text-right">{item.amount}</TableCell>
                                        <TableCell className="flex justify-end gap-1">
                                            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => handleRemoveFluid(item.id)}>
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                     )}
                </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Day Summary</CardTitle>
              <CardDescription>Your total nutritional intake for the day against your goals.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                 <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span><Droplets className="inline-block mr-2 h-4 w-4 text-primary" />Fluid</span>
                    <span>{Math.round(totals.fluid)} / {goals.fluid} ml</span>
                  </div>
                  <Progress value={(totals.fluid / goals.fluid) * 100} />
                </div>
                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span>Calories</span>
                    <span>{Math.round(totals.calories)} / {goals.calories} kcal</span>
                  </div>
                  <Progress value={(totals.calories / goals.calories) * 100} className="[&>div]:bg-accent" />
                </div>
                <div>
                  <div className="flex justify-between font-medium mb-1">
                    <span>Protein</span>
                    <span>{totals.protein.toFixed(1)}g / {goals.protein}g</span>
                  </div>
                  <Progress value={(totals.protein / goals.protein) * 100} />
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

              <div className="h-64">
                <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <RechartsTooltip
                              cursor={false}
                              content={<ChartTooltipContent hideLabel />}
                            />
                            <Legend content={<ChartLegendContent nameKey="name" hideValue hideIndicator />} />
                            <Pie
                                data={calorieBreakdownData}
                                dataKey="value"
                                nameKey="name"
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                labelLine={false}
                                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }) => {
                                    if(percent < 0.1) return null; // Don't render label if it's too small
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
                                {calorieBreakdownData.map((entry) => (
                                    <Cell key={`cell-${entry.name}`} fill={entry.fill} />
                                ))}
                            </Pie>
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
    </>
  );
}
