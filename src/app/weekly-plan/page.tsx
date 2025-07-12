
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
import { Utensils, Sunrise, Sun, Moon, Coffee, Download } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { useProfile } from "@/context/profile-context";
import jsPDF from "jspdf";
import "jspdf-autotable";

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
    notes?: string;
};

const mealIcons: { [key: string]: React.ElementType } = {
  breakfast: Sunrise,
  lunch: Sun,
  dinner: Moon,
  "morning snack": Coffee,
  "afternoon snack": Coffee,
  "evening snack": Coffee,
  snacks: Coffee,
};


export default function WeeklyPlanPage() {
  const { activeProfile, dietPlan, isLoading } = useProfile();

  const handleExportPdf = () => {
    if (!dietPlan || !activeProfile) return;
  
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 15;
  
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.text(`Weekly Plan for ${activeProfile.fullName}`, margin, 20);
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, margin, 28);
    doc.setLineWidth(0.5);
    doc.line(margin, 32, pageWidth - margin, 32);
  
    let yPos = 40;
  
    dietPlan.plan.forEach((dayPlan: DayPlan) => {
      const dayHeader = `${dayPlan.day}`;
      const dayHeaderHeight = 10;
  
      const tableBody = dayPlan.meals.map(meal => [
        { content: meal.type.charAt(0).toUpperCase() + meal.type.slice(1), styles: { fontStyle: 'bold', valign: 'middle', cellWidth: 40 } },
        { content: meal.details.name, styles: { valign: 'middle', cellWidth: 90 } },
        { content: `${meal.details.calories} kcal`, styles: { valign: 'middle', halign: 'right' } }
      ]);
  
      const tableHeight = tableBody.length * 10 + 20;
      if (yPos + tableHeight + dayHeaderHeight > doc.internal.pageSize.getHeight() - margin) {
        doc.addPage();
        yPos = 20;
      }
      
      doc.setFontSize(16);
      doc.setTextColor(45, 125, 75);
      doc.text(dayHeader, margin, yPos);
      yPos += dayHeaderHeight;
  
      (doc as any).autoTable({
        startY: yPos,
        head: [['Meal', 'Details', 'Calories']],
        body: tableBody,
        theme: 'grid',
        headStyles: { fillColor: [167, 217, 163] },
        didDrawPage: (data: any) => {
          yPos = data.cursor.y + 10;
        },
        // This makes sure the yPos is updated correctly after the table is drawn
        // even if it doesn't create a new page
        finalY: (doc as any).lastAutoTable.finalY 
      });

      yPos = (doc as any).lastAutoTable.finalY + 10;

    });
  
    doc.save(`${activeProfile.fullName.replace(/\s+/g, '-')}-weekly-plan.pdf`);
  };

  if (isLoading) {
    return (
        <div className="flex flex-col w-full">
            <Header
                title="Weekly Meal Plan"
                description="Your 7-day diet at a glance."
            />
            <main className="flex-1 p-4 md:p-8">
               <div className="flex space-x-6 overflow-x-auto pb-4">
                    {[...Array(7)].map((_, i) => (
                        <Card key={i} className="min-w-[300px] flex-shrink-0">
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

  if (!activeProfile || !dietPlan || !dietPlan.plan || dietPlan.plan.length === 0) {
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
                {activeProfile 
                    ? `No diet plan found for ${activeProfile.fullName}. Generate one to see the weekly schedule.`
                    : "Please select a profile to view a diet plan."}
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
        title={`Weekly Meal Plan for ${activeProfile.fullName}`}
        description="Your 7-day diet at a glance."
      />
       <div className="px-4 md:px-8 pt-4">
          <Button onClick={handleExportPdf} variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export to PDF
          </Button>
        </div>
      <main className="flex-1 p-4 md:p-8">
        <div className="flex space-x-6 overflow-x-auto pb-4">
          {dietPlan.plan.map((dayPlan: DayPlan) => {
            if (!dayPlan || !dayPlan.day) return null;

            return (
              <Card key={dayPlan.day} className="flex flex-col min-w-[320px] md:min-w-[350px] flex-shrink-0">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">
                    {dayPlan.day}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow space-y-3">
                  {(dayPlan.meals || []).map((meal: Meal, index: number) => {
                    const Icon = mealIcons[meal.type.toLowerCase()] || Utensils;
                     if (!meal || !meal.details || !meal.details.name) return null;
                    return (
                      <div key={`${meal.type}-${meal.details.name}-${index}`} className="flex items-start gap-4 p-3 rounded-md bg-background/60 shadow-sm">
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
