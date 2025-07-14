
"use client"

import { useEffect, useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig
} from "@/components/ui/chart";
import { useProfile } from "@/context/profile-context";
import { format } from "date-fns";
import { Skeleton } from "./ui/skeleton";

const chartConfig = {
  calories: {
    label: "Calories (kcal)",
    color: "hsl(var(--chart-2))",
  },
  protein: {
    label: "Protein (g)",
    color: "hsl(var(--chart-1))",
  },
  fat: {
    label: "Fat (g)",
    color: "hsl(var(--chart-4))",
  }
} satisfies ChartConfig;

type WeeklyProgressChartProps = {
  view: 'weekly' | 'monthly';
};

export default function WeeklyProgressChart({ view }: WeeklyProgressChartProps) {
  const { activeProfile, getProfileLogs, isLoading } = useProfile();
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    if (activeProfile) {
      const daysToFetch = view === 'weekly' ? 7 : 30;
      const logs = getProfileLogs(activeProfile.id, daysToFetch);
      
      const dateFormat = view === 'weekly' ? 'E' : 'dd/MM';

      const data = logs.map(log => ({
        date: format(log.date, dateFormat),
        calories: Math.round(log.totals.calories),
        protein: parseFloat(log.totals.protein.toFixed(1)),
        fat: parseFloat(log.totals.fat.toFixed(1)),
      }));
      setChartData(data);
    }
  }, [view, activeProfile, getProfileLogs]);

  if (isLoading) {
    return (
        <div className="h-[350px] w-full flex items-center justify-center">
            <Skeleton className="h-full w-full" />
        </div>
    );
  }

  if (!activeProfile) return <div className="h-[350px] w-full flex items-center justify-center text-muted-foreground">Select a profile to see progress.</div>;
  if (chartData.length === 0) return <div className="h-[350px] w-full flex items-center justify-center text-muted-foreground">No data to display for this period.</div>;

  const containerWidth = view === 'monthly' ? Math.max(chartData.length * 50, 400) : '100%';

  return (
    <div className="h-[350px] w-full">
      <div className={view === 'monthly' ? "w-full overflow-x-auto" : ""}>
        <ChartContainer 
          config={chartConfig} 
          className="h-full"
          style={{ minWidth: containerWidth }}
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: -10 }}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                interval={view === 'monthly' ? 2 : 0}
              />
              <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-2))" tickLine={false} axisLine={false} />
              <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-1))" tickLine={false} axisLine={false} />
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
  );
}
