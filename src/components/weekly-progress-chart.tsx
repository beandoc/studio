
"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"

const chartData = [
  { day: "Mon", calories: 1850, sodium: 1450, potassium: 2100, protein: 65 },
  { day: "Tue", calories: 2050, sodium: 1250, potassium: 2500, protein: 75 },
  { day: "Wed", calories: 1700, sodium: 1650, potassium: 2000, protein: 60 },
  { day: "Thu", calories: 1950, sodium: 1350, potassium: 2600, protein: 70 },
  { day: "Fri", calories: 2100, sodium: 1500, potassium: 2350, protein: 80 },
  { day: "Sat", calories: 2200, sodium: 1750, potassium: 2700, protein: 85 },
  { day: "Sun", calories: 1900, sodium: 1300, potassium: 2200, protein: 68 },
]

const chartConfig = {
  calories: {
    label: "Calories (kcal)",
    color: "hsl(var(--chart-1))",
  },
  sodium: {
    label: "Sodium (mg)",
    color: "hsl(var(--chart-2))",
  },
  potassium: {
    label: "Potassium (mg)",
    color: "hsl(var(--chart-3))",
  },
  protein: {
    label: "Protein (g)",
    color: "hsl(var(--chart-4))",
  }
}

export default function WeeklyProgressChart() {
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
                    <YAxis tickLine={false} axisLine={false} />
                    <Tooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Legend content={<ChartLegendContent />} />
                    <Bar dataKey="calories" fill="var(--color-calories)" radius={4} />
                    <Bar dataKey="sodium" fill="var(--color-sodium)" radius={4} />
                    <Bar dataKey="potassium" fill="var(--color-potassium)" radius={4} />
                    <Bar dataKey="protein" fill="var(--color-protein)" radius={4} />
                </BarChart>
            </ResponsiveContainer>
        </ChartContainer>
    </div>
  )
}
