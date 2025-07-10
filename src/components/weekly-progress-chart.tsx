
"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { format, subDays } from "date-fns"
import type { DailyLog } from "@/app/my-meal-tracker/page"

import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartConfig = {
  calories: {
    label: "Calories (kcal)",
    color: "hsl(var(--chart-1))",
  },
  protein: {
    label: "Protein (g)",
    color: "hsl(var(--chart-4))",
  },
  fat: {
    label: "Fat (g)",
    color: "hsl(var(--chart-2))",
  }
}

export default function WeeklyProgressChart() {
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        const today = new Date();
        const weeklyData = [];

        for (let i = 6; i >= 0; i--) {
            const date = subDays(today, i);
            const logKey = `mealLog-${format(date, 'yyyy-MM-dd')}`;
            const storedLog = localStorage.getItem(logKey);

            let totals = { calories: 0, protein: 0, fat: 0 };

            if (storedLog) {
                try {
                    const parsedLog: DailyLog = JSON.parse(storedLog);
                    Object.values(parsedLog).flat().forEach(item => {
                        totals.calories += item.calories;
                        totals.protein += item.protein;
                        totals.fat += item.fat;
                    });
                } catch (e) {
                    console.error("Failed to parse log for chart", e);
                }
            }

            weeklyData.push({
                day: format(date, 'E'), // "Mon", "Tue", etc.
                calories: Math.round(totals.calories),
                protein: parseFloat(totals.protein.toFixed(1)),
                fat: parseFloat(totals.fat.toFixed(1)),
            });
        }
        setChartData(weeklyData);
    }, []);


  return (
    <div className="h-[300px] w-full">
        <ChartContainer config={chartConfig} className="w-full h-full">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                    />
                    <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-1))" tickLine={false} axisLine={false} />
                    <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-4))" tickLine={false} axisLine={false} />
                    <Tooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Legend content={<ChartLegendContent />} />
                    <Bar yAxisId="left" dataKey="calories" fill="var(--color-calories)" radius={4} />
                    <Bar yAxisId="right" dataKey="protein" fill="var(--color-protein)" radius={4} />
                    <Bar yAxisId="right" dataKey="fat" fill="var(--color-fat)" radius={4} />
                </BarChart>
            </ResponsiveContainer>
        </ChartContainer>
    </div>
  )
}

    