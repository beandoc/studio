
"use client";

import { useState } from "react";
import Header from "@/components/header";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { foodDatabase, type FoodGroup } from "@/lib/food-data";
import { ArrowRight, Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";


const cuisineOptions = ['All', 'Maharashtrian', 'Gujarati', 'North Indian', 'South Indian', 'Generic'];
const mealCategoryOptions = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack'];
const foodGroupOptions: ('All' | FoodGroup)[] = [
    'All',
    'Beans & Legumes',
    'Beverages',
    'Breads & Cereals',
    'Cheese, Milk & Dairy',
    'Eggs',
    'Fast Food',
    'Fish & Seafood',
    'Fruit',
    'Meat',
    'Nuts & Seeds',
    'Pasta, Rice & Noodles',
    'Salads',
    'Sauces, Spices & Spreads',
    'Snacks',
    'Soups',
    'Sweets, Candy & Desserts',
    'Vegetables',
    'Other'
];


export default function FoodDatabasePage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [cuisineFilter, setCuisineFilter] = useState("All");
    const [mealCategoryFilter, setMealCategoryFilter] = useState("All");
    const [foodGroupFilter, setFoodGroupFilter] = useState<"All" | FoodGroup>("All");

    const filteredFoods = foodDatabase.filter(food => {
        const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCuisine = cuisineFilter === "All" || food.cuisine === cuisineFilter;
        const matchesMealCategory = mealCategoryFilter === "All" || food.mealCategory === mealCategoryFilter;
        const matchesFoodGroup = foodGroupFilter === "All" || food.foodGroup === foodGroupFilter;
        return matchesSearch && matchesCuisine && matchesMealCategory && matchesFoodGroup;
    });

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Food Database"
        description="Browse our growing list of kidney-friendly foods and their nutritional information."
      />
      <main className="flex-1 p-4 md:p-8">
        <Card className="mb-8">
            <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="relative md:col-span-2 lg:col-span-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                            placeholder="Search for a food..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="lg:col-span-1">
                         <Select value={foodGroupFilter} onValueChange={setFoodGroupFilter}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by Food Group" />
                            </SelectTrigger>
                            <SelectContent>
                                {foodGroupOptions.map(option => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="lg:col-span-1">
                         <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by Cuisine" />
                            </SelectTrigger>
                            <SelectContent>
                                {cuisineOptions.map(option => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                     <div className="lg:col-span-1">
                         <Select value={mealCategoryFilter} onValueChange={setMealCategoryFilter}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by Meal Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {mealCategoryOptions.map(option => (
                                    <SelectItem key={option} value={option}>{option}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>

        {filteredFoods.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredFoods.map((food) => (
                <Card key={food.slug} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex-grow">
                    <h3 className="font-bold text-lg text-primary">{food.name}</h3>
                    <div className="text-xs text-muted-foreground mt-2 space-x-2 flex flex-wrap gap-1">
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">{food.foodGroup}</span>
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">{food.cuisine}</span>
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">{food.mealCategory}</span>
                    </div>
                     <p className="text-sm mt-4">
                        {food.nutritionSummary.summaryText}
                    </p>
                </CardContent>
                <CardFooter>
                    <Button asChild variant="outline" size="sm" className="w-full">
                        <Link href={`/food-database/${food.slug}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </CardFooter>
                </Card>
            ))}
            </div>
        ) : (
            <div className="text-center py-16 text-muted-foreground">
                <p>No food items match your filters.</p>
            </div>
        )}
      </main>
    </div>
  );
}
