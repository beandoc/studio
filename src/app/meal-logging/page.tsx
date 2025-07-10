
import { Suspense } from "react";
import Header from "@/components/header";
import { Skeleton } from "@/components/ui/skeleton";
import MealLoggingPageContent from "./meal-logging-page";

function MealLoggingSkeleton() {
    return (
        <div className="flex flex-col w-full">
            <Header
                title="Daily Meal Log"
                description="Log your meals to track your nutrient intake."
            />
            <main className="flex-1 p-4 md:p-8">
                <div className="h-48 w-full bg-muted rounded-lg animate-pulse mb-8"></div>
                <div className="h-12 w-48 bg-muted rounded-lg animate-pulse mb-6"></div>
                <div className="space-y-2">
                    <div className="h-16 w-full bg-muted rounded-lg animate-pulse"></div>
                    <div className="h-16 w-full bg-muted rounded-lg animate-pulse"></div>
                    <div className="h-16 w-full bg-muted rounded-lg animate-pulse"></div>
                </div>
            </main>
        </div>
    )
}

// The main export uses Suspense to safely read search parameters on the client.
export default function MealLoggingPage() {
  return (
    <Suspense fallback={<MealLoggingSkeleton />}>
      <MealLoggingPageContent />
    </Suspense>
  );
}
