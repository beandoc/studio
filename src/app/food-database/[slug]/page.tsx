
"use client";

import type { FoodItem } from "@/lib/food-data";
import { notFound } from "next/navigation";
import Header from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChefHat, Star } from "lucide-react";
import React, { use } from 'react';
import Image from "next/image";
import { useFoodData } from "@/context/food-context";
import { useProfile } from "@/context/profile-context";

type NutrientRowProps = {
    label: string;
    value?: string | number;
    unit?: string;
    percent?: number;
    bold?: boolean;
    indent?: boolean;
};

const NutrientRow = ({ label, value, unit, percent, bold = false, indent = false }: NutrientRowProps) => (
    <div className={cn("flex justify-between items-end py-1", indent && "ml-4")}>
        <p className={cn(bold ? "font-bold" : "font-medium")}>
            {label} <span className="text-muted-foreground font-normal">{value}{unit}</span>
        </p>
        {percent !== undefined && <p className="font-bold">{percent}%</p>}
    </div>
);

function FoodDetailClient({ food }: { food: FoodItem }) {
  const { activeProfile, addFavorite, removeFavorite, isFavorite } = useProfile();
  const servingSize = food.nutritionFacts.servingSize;
  const isFav = activeProfile ? isFavorite(activeProfile.id, food.slug) : false;

  const handleToggleFavorite = () => {
    if (!activeProfile) return;
    if (isFav) {
      removeFavorite(activeProfile.id, food.slug);
    } else {
      addFavorite(activeProfile.id, food.slug);
    }
  };

  return (
    <div className="flex flex-col w-full bg-muted/20">
      <Header
        title={food.name}
        description={`Nutritional information for ${food.name}.`}
      />
      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
            <div className="mb-4 flex justify-between items-center">
                <Button asChild variant="outline">
                    <Link href="/food-database">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Database
                    </Link>
                </Button>
                {activeProfile && (
                     <Button variant={isFav ? "default" : "outline"} onClick={handleToggleFavorite}>
                        <Star className={cn("mr-2 h-4 w-4", isFav && "fill-current text-yellow-400")} />
                        {isFav ? 'Favorite' : 'Add to Favorites'}
                    </Button>
                )}
            </div>
            
            <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8 shadow-lg">
                <Image 
                    src={food.imageUrl || "https://placehold.co/800x400.png"}
                    alt={`Image of ${food.name}`}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="food meal"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                <h1 className="absolute bottom-4 left-4 text-4xl font-bold text-white z-10">
                    {food.name}
                </h1>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                <div className="lg:col-span-1 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Nutrition Facts</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="border-b-4 border-muted-foreground pb-1">
                                <p>Serving Size <span className="float-right">{servingSize}</span></p>
                            </div>
                            <Separator className="h-1 bg-muted-foreground my-1"/>
                            <div className="flex justify-between items-baseline">
                                <p className="font-semibold">Amount Per Serving</p>
                            </div>
                            <div className="flex justify-between items-end border-b-8 border-muted-foreground py-1">
                                <p className="text-4xl font-bold">Calories</p>
                                <p className="text-5xl font-bold">{food.nutritionFacts.calories}</p>
                            </div>
                            <p className="text-right font-bold pt-1">% Daily Values*</p>
                            <Separator />
                            <NutrientRow label="Total Fat" value={food.nutritionFacts.totalFat.value} unit="g" percent={food.nutritionFacts.totalFat.percent} bold/>
                            {food.nutritionFacts.saturatedFat && <NutrientRow label="Saturated Fat" value={food.nutritionFacts.saturatedFat.value} unit="g" percent={food.nutritionFacts.saturatedFat.percent} indent/>}
                            {food.nutritionFacts.transFat && <NutrientRow label="Trans Fat" value={food.nutritionFacts.transFat.value} unit="g" indent/>}
                            {food.nutritionFacts.polyunsaturatedFat && <NutrientRow label="Polyunsaturated Fat" value={food.nutritionFacts.polyunsaturatedFat.value} unit="g" indent/>}
                            {food.nutritionFacts.monounsaturatedFat && <NutrientRow label="Monounsaturated Fat" value={food.nutritionFacts.monounsaturatedFat.value} unit="g" indent/>}
                            <NutrientRow label="Cholesterol" value={food.nutritionFacts.cholesterol.value} unit="mg" percent={food.nutritionFacts.cholesterol.percent} bold/>
                            <NutrientRow label="Sodium" value={food.nutritionFacts.sodium.value} unit="mg" percent={food.nutritionFacts.sodium.percent} bold/>
                            <NutrientRow label="Total Carbohydrate" value={food.nutritionFacts.totalCarbohydrate.value} unit="g" percent={food.nutritionFacts.totalCarbohydrate.percent} bold/>
                            {food.nutritionFacts.dietaryFiber && <NutrientRow label="Dietary Fiber" value={food.nutritionFacts.dietaryFiber.value} unit="g" percent={food.nutritionFacts.dietaryFiber.percent} indent/>}
                            {food.nutritionFacts.sugars && <NutrientRow label="Sugars" value={food.nutritionFacts.sugars.value} unit="g" indent/>}
                            <NutrientRow label="Protein" value={food.nutritionFacts.protein.value} unit="g" bold/>
                            <Separator className="h-4 bg-muted-foreground my-1"/>
                            {food.nutritionFacts.vitaminD && <NutrientRow label="Vitamin D" value={food.nutritionFacts.vitaminD.value} unit="mcg" percent={food.nutritionFacts.vitaminD.percent}/>}
                            {food.nutritionFacts.calcium && <NutrientRow label="Calcium" value={food.nutritionFacts.calcium.value} unit="mg" percent={food.nutritionFacts.calcium.percent}/>}
                            {food.nutritionFacts.iron && <NutrientRow label="Iron" value={food.nutritionFacts.iron.value} unit="mg" percent={food.nutritionFacts.iron.percent}/>}
                            <NutrientRow label="Potassium" value={food.nutritionFacts.potassium.value} unit="mg" percent={food.nutritionFacts.potassium.percent}/>
                            {food.nutritionFacts.vitaminA && <NutrientRow label="Vitamin A" value={food.nutritionFacts.vitaminA.value} unit="mcg" percent={food.nutritionFacts.vitaminA.percent}/>}
                            {food.nutritionFacts.vitaminC && <NutrientRow label="Vitamin C" value={food.nutritionFacts.vitaminC.value} unit="mg" percent={food.nutritionFacts.vitaminC.percent}/>}

                            <p className="text-xs mt-4 text-muted-foreground">* The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
                        </CardContent>
                    </Card>
                </div>
                <div className="lg:col-span-2 space-y-8">
                     <Card>
                        <CardHeader><CardTitle>Nutrition Summary</CardTitle></CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="bg-muted p-4 rounded-lg">
                                    <p className="font-bold text-lg">Calories</p>
                                    <p className="text-2xl">{food.nutritionSummary.calories}</p>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <p className="font-bold text-lg">Fat</p>
                                    <p className="text-2xl">{food.nutritionSummary.fat}</p>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <p className="font-bold text-lg">Carbs</p>
                                    <p className="text-2xl">{food.nutritionSummary.carbs}</p>
                                </div>
                                <div className="bg-muted p-4 rounded-lg">
                                    <p className="font-bold text-lg">Protein</p>
                                    <p className="text-2xl">{food.nutritionSummary.protein}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-muted-foreground text-center">{food.nutritionSummary.summaryText}</p>
                             <p className="mt-2 text-muted-foreground text-center">Calorie breakdown: {food.nutritionSummary.breakdown}</p>
                        </CardContent>
                    </Card>

                    {food.cookingInstructions && (
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <ChefHat />
                                    Cooking Instructions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground whitespace-pre-wrap">{food.cookingInstructions}</p>
                            </CardContent>
                        </Card>
                    )}

                    {food.servingSizes && food.servingSizes.length > 0 && <Card>
                        <CardHeader><CardTitle>Common Serving Sizes</CardTitle></CardHeader>
                        <CardContent>
                            <ul className="space-y-2">
                                {food.servingSizes.map((serving, index) => (
                                    <li key={index} className="flex justify-between items-center p-2 rounded-md hover:bg-muted/50">
                                        <div>
                                            <span className="text-primary mr-2">&#9679;</span>
                                            <span>{serving.size}</span>
                                        </div>
                                        <span className="font-bold">{serving.calories}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>}
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}


export default function FoodDetailPage({ params }: { params: { slug: string } }) {
  const { findFoodBySlug } = useFoodData();
  const resolvedParams = use(Promise.resolve(params));
  const food = findFoodBySlug(resolvedParams.slug);

  if (!food) {
    notFound();
  }
  
  return <FoodDetailClient food={food} />;
}
