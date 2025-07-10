
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

type WeeklyProgressChartProps = {
  view: 'weekly' | 'monthly';
};

export default function WeeklyProgressChart({ view }: WeeklyProgressChartProps) {
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        const today = new Date();
        const data = [];
        const daysToFetch = view === 'weekly' ? 7 : 30;

        for (let i = daysToFetch - 1; i >= 0; i--) {
            const date = subDays(today, i);
            const logKey = `mealLog-${format(date, 'yyyy-MM-dd')}`;
            const storedLog = localStorage.getItem(logKey);

            let totals = { calories: 0, protein: 0, fat: 0 };

            if (storedLog) {
                try {
                    const parsedLog: DailyLog = JSON.parse(storedLog);
                    const allMeals = Object.values(parsedLog.meals).flat();
                    
                    if (Array.isArray(allMeals)) {
                        allMeals.forEach(item => {
                            totals.calories += item.calories || 0;
                            totals.protein += item.protein || 0;
                            totals.fat += item.fat || 0;
                        });
                    }
                } catch (e) {
                    console.error("Failed to parse log for chart", e);
                }
            }

            data.push({
                date: format(date, 'E dd'), // e.g., "Mon 15"
                calories: Math.round(totals.calories),
                protein: parseFloat(totals.protein.toFixed(1)),
                fat: parseFloat(totals.fat.toFixed(1)),
            });
        }
        setChartData(data);
    }, [view]);


  return (
    <div className="h-[350px] w-full">
      <div className={view === 'monthly' ? "w-full overflow-x-auto" : ""}>
        <ChartContainer 
          config={chartConfig} 
          className="w-full h-full"
          style={view === 'monthly' ? { minWidth: '800px' } : {}}
        >
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                        dataKey="date"
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
    </div>
  )
}
