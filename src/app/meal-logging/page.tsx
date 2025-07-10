
"use client";

import { Suspense } from "react";
import Header from "@/components/header";
import MealLoggingPageContent from "./meal-logging-content";

export default function MealLoggingPage() {
  return (
    <div className="flex flex-col w-full">
      <Header
        title="Daily Meal Log"
        description="Log your meals to track your nutrient intake."
      />
      <main className="flex-1 p-4 md:p-8">
        <Suspense fallback={<MealLoggingSkeleton />}>
          <MealLoggingPageContent />
        </Suspense>
      </main>
    </div>
  );
}

function MealLoggingSkeleton() {
    return (
        <div>
            <div className="h-48 w-full bg-muted rounded-lg animate-pulse mb-8"></div>
            <div className="h-12 w-48 bg-muted rounded-lg animate-pulse mb-6"></div>
            <div className="space-y-2">
                <div className="h-16 w-full bg-muted rounded-lg animate-pulse"></div>
                <div className="h-16 w-full bg-muted rounded-lg animate-pulse"></div>
                <div className="h-16 w-full bg-muted rounded-lg animate-pulse"></div>
            </div>
        </div>
    )
}
