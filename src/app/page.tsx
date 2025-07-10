"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Droplets, HeartPulse, PieChart, Soup } from "lucide-react";
import  WeeklyProgressChart  from "@/components/weekly-progress-chart";
import Header from "@/components/header";

export default function Dashboard() {
  return (
    <div className="flex flex-col w-full">
      <Header title="Weekly Progress" description="Here's a summary of your dietary intake over the last week."/>
      <div className="p-4 md:p-8 pt-6 space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Calories
              </CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1853 kcal</div>
              <p className="text-xs text-muted-foreground">
                -2% from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Avg. Sodium
              </CardTitle>
              <Droplets className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1450 mg</div>
              <p className="text-xs text-muted-foreground">
                -10% from last week (target: 2000mg)
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Potassium</CardTitle>
              <HeartPulse className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2100 mg</div>
              <p className="text-xs text-muted-foreground">
                +5% from last week (target: 2500mg)
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Protein</CardTitle>
              <Soup className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">65 g</div>
              <p className="text-xs text-muted-foreground">
                Stable from last week (target: 70g)
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Dietary Adherence</CardTitle>
            </CardHeader>
            <CardContent className="pl-2">
              <WeeklyProgressChart />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
