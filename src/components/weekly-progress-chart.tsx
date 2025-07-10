
"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegendContent
} from "@/components/ui/chart"

const chartData = [
  { day: "Mon", calories: 1800, sodium: 1500, potassium: 2200, protein: 60 },
  { day: "Tue", calories: 1950, sodium: 1300, potassium: 2400, protein: 70 },
  { day: "Wed", calories: 1750, sodium: 1600, potassium: 2100, protein: 65 },
  { day: "Thu", calories: 2000, sodium: 1400, potassium: 2500, protein: 68 },
  { day: "Fri", calories: 1850, sodium: 1550, potassium: 2300, protein: 62 },
  { day: "Sat", calories: 2100, sodium: 1700, potassium: 2600, protein: 75 },
  { day: "Sun", calories: 1900, sodium: 1200, potassium: 2250, protein: 66 },
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
    <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="day"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis />
        <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
        <Legend content={<ChartLegendContent />} />
        <Bar dataKey="calories" fill="var(--color-calories)" radius={4} />
        <Bar dataKey="sodium" fill="var(--color-sodium)" radius={4} />
        <Bar dataKey="potassium" fill="var(--color-potassium)" radius={4} />
        <Bar dataKey="protein" fill="var(--color-protein)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
