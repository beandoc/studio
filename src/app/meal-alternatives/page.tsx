
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from 'next/navigation';
import type { SuggestMealAlternativesOutput } from "@/ai/flows/suggest-meal-alternatives";
import { suggestMealAlternatives } from "@/ai/flows/suggest-meal-alternatives";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, ArrowLeft, Check } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { foodDatabase, type FoodItem } from "@/lib/food-data";
import Link from "next/link";
import { type GenerateDietPlanOutput } from "@/ai/flows/generate-diet-plan";
import { useProfile } from "@/context/profile-context";


function MealAlternativesContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const mealSlug = searchParams.get('mealSlug');
  const { activeProfile, setDietPlan } = useProfile();
  
  const [originalMeal, setOriginalMeal] = useState<FoodItem | null>(null);
  const [alternatives, setAlternatives] = useState<SuggestMealAlternativesOutput['alternatives'] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (!mealSlug) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "No meal was selected to find alternatives for.",
      });
      setIsLoading(false);
      return;
    }

    const foundOriginalMeal = foodDatabase.find(meal => meal.slug === mealSlug);
    if (!foundOriginalMeal) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "The selected meal was not found in our database.",
      });
      setIsLoading(false);
      return;
    }
    setOriginalMeal(foundOriginalMeal);

    const fetchAlternatives = async () => {
      setIsLoading(true);
      setAlternatives(null);
      try {
        const result = await suggestMealAlternatives({ mealSlug });
        if (result.alternatives.length === 0) {
          toast({
            variant: "default",
            title: "No Alternatives Found",
            description: "We couldn't find any similar meals in our database. This could be because our database is small. Try another selection.",
          });
        }
        setAlternatives(result.alternatives);
      } catch (error) {
        console.error(error);
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to suggest alternatives. Please try again.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlternatives();
  }, [mealSlug, toast]);

  const handleSwap = (alternativeName: string) => {
    if (!activeProfile) {
        toast({ variant: "destructive", title: "Error", description: "No active profile to swap meal for." });
        return;
    }
    
    const dietPlanRaw = localStorage.getItem(`dietPlan-${activeProfile.id}`);
    const dayToReplace = searchParams.get('day');
    const mealTypeToReplace = searchParams.get('mealType');
  
    if (dietPlanRaw && dayToReplace && mealTypeToReplace) {
      try {
        let dietPlan: GenerateDietPlanOutput = JSON.parse(dietPlanRaw);
        const newMealData = foodDatabase.find(meal => meal.name === alternativeName);
  
        if (newMealData) {
          const dayIndex = dietPlan.plan.findIndex(d => d.day.toLowerCase() === dayToReplace.toLowerCase());
          
          if (dayIndex !== -1) {
            const mealIndex = dietPlan.plan[dayIndex].meals.findIndex(m => m.type.toLowerCase() === mealTypeToReplace.toLowerCase());
            
            if (mealIndex !== -1) {
              dietPlan.plan[dayIndex].meals[mealIndex].details = {
                name: newMealData.name,
                calories: newMealData.nutritionFacts.calories,
                description: newMealData.nutritionSummary.summaryText,
              };
  
              setDietPlan(dietPlan); // This now updates context and localStorage
              toast({
                title: "Meal Swapped!",
                description: `"${originalMeal?.name}" was replaced with "${alternativeName}".`
              });
              router.push('/diet-plan');
            } else {
              toast({ variant: "destructive", title: "Error", description: `Could not find meal type "${mealTypeToReplace}" to swap.` });
            }
          } else {
            toast({ variant: "destructive", title: "Error", description: `Could not find day "${dayToReplace}" to swap.` });
          }
        } else {
          toast({ variant: "destructive", title: "Error", description: "Could not find new meal data for the swap." });
        }
      } catch (error) {
        toast({ variant: "destructive", title: "Error", description: "Failed to parse diet plan from storage." });
      }
    } else {
      toast({ variant: "destructive", title: "Error", description: "Could not find diet plan or meal details to perform the swap." });
    }
  };


  return (
    <div className="flex flex-col w-full">
      <Header
        title="Meal Alternatives"
        description="Here are some smart suggestions for your meal plan."
      />
      <main className="flex-1 p-4 md:p-8 grid gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-1 lg:sticky top-24">
                <Card>
                    <CardHeader>
                        <CardTitle>Replacing</CardTitle>
                        {originalMeal && <CardDescription>{originalMeal.name}</CardDescription>}
                    </CardHeader>
                    {originalMeal && (
                        <CardContent>
                            <p className="text-sm text-muted-foreground">{originalMeal.nutritionSummary.summaryText}</p>
                             <p className="text-sm font-medium mt-2">
                                Protein: {originalMeal.nutritionFacts.protein.value}g, Carbs: {originalMeal.nutritionFacts.totalCarbohydrate.value}g
                            </p>
                        </CardContent>
                    )}
                </Card>
                 <Button asChild variant="outline" className="w-full mt-4">
                    <Link href="/diet-plan">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Diet Plan
                    </Link>
                </Button>
            </div>

            <div className="lg:col-span-2">
                {isLoading && (
                  <div className="grid gap-4">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">Finding smart alternatives...</h2>
                    {[...Array(2)].map((_, i) => (
                      <Card key={i}>
                        <CardHeader>
                          <Skeleton className="h-6 w-3/4" />
                          <Skeleton className="h-4 w-1/4" />
                        </CardHeader>
                        <CardContent className="space-y-2">
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-full" />
                          <Skeleton className="h-4 w-2/3" />
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}

                {alternatives && alternatives.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold tracking-tight mb-4">Suggested Alternatives</h2>
                    <div className="grid gap-6">
                      {alternatives.map((alt) => (
                        <Card key={alt.name} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 gap-4">
                          <div className="flex-grow">
                            <CardTitle className="flex items-center gap-2">
                              <Zap className="h-5 w-5 text-primary" />
                              {alt.name}
                            </CardTitle>
                            <CardDescription>{alt.calories} calories</CardDescription>
                            <p className="text-sm text-muted-foreground mt-2 mb-2">{alt.description}</p>
                            <p className="text-sm font-medium">{alt.nutrientInformation}</p>
                          </div>
                           <Button className="w-full sm:w-auto flex-shrink-0" onClick={() => handleSwap(alt.name)}>
                                <Check className="mr-2 h-4 w-4" />
                                Swap this Meal
                           </Button>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                 {alternatives && alternatives.length === 0 && !isLoading && (
                    <Card>
                        <CardHeader>
                            <CardTitle>No Alternatives Found</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">We couldn't find a suitable alternative for "{originalMeal?.name}" that matched the required cuisine, meal type, and nutrient profile within a 20% variance.</p>
                             <p className="text-muted-foreground mt-2">Our food database is still growing. Please try flipping a different meal!</p>
                        </CardContent>
                    </Card>
                 )}
            </div>
        </div>
      </main>
    </div>
  );
}

export default function MealAlternativesPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <MealAlternativesContent />
        </Suspense>
    )
}
