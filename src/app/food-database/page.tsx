
"use client";

import { useState, useMemo } from "react";
import Header from "@/components/header";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { FoodGroup, FoodItem, MealCategory } from "@/lib/food-data";
import { ArrowRight, Search, Database, ChefHat, Plus, Star, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useFoodData } from "@/context/food-context";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useProfile } from "@/context/profile-context";
import { Skeleton } from "@/components/ui/skeleton";

const cuisineOptions = ['All', 'Maharashtrian', 'Gujarati', 'North Indian', 'South Indian', 'Generic', 'Punjabi', 'Bengali', 'Jain', 'Indian'];
const mealCategoryOptions: (MealCategory | 'All')[] = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Snack', 'Beverages', 'Other', 'Soups', 'Sweets, Candy & Desserts', 'Lunch/Dinner', 'Fruit'];
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

type Stats = {
    total: number;
    byFoodGroup: Record<string, number>;
    byMealCategory: Record<string, number>;
    byCuisine: Record<string, number>;
}

export default function FoodDatabasePage() {
    const { foodDatabase, updateMealCategories, isFoodDataLoading } = useFoodData();
    const { activeProfile, isFavorite, addFavorite, removeFavorite } = useProfile();
    const [searchTerm, setSearchTerm] = useState("");
    const [cuisineFilter, setCuisineFilter] = useState("All");
    const [mealCategoryFilter, setMealCategoryFilter] = useState<MealCategory | 'All'>("All");
    const [foodGroupFilter, setFoodGroupFilter] = useState<"All" | FoodGroup>("All");
    
    const stats: Stats = useMemo(() => {
        if (isFoodDataLoading) return { total: 0, byFoodGroup: {}, byMealCategory: {}, byCuisine: {} };
        const byFoodGroup = foodDatabase.reduce((acc, food) => {
            if (!food.foodGroup) return acc;
            acc[food.foodGroup] = (acc[food.foodGroup] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const byMealCategory = foodDatabase.reduce((acc, food) => {
            const categories = Array.isArray(food.mealCategory) ? food.mealCategory : [food.mealCategory];
            categories.forEach(cat => {
                if(!cat) return;
                acc[cat] = (acc[cat] || 0) + 1;
            });
            return acc;
        }, {} as Record<string, number>);

        const byCuisine = foodDatabase.reduce((acc, food) => {
            if (!food.cuisine) return acc;
            acc[food.cuisine] = (acc[food.cuisine] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        return {
            total: foodDatabase.length,
            byFoodGroup: Object.fromEntries(Object.entries(byFoodGroup).sort(([,a],[,b]) => b-a)),
            byMealCategory: Object.fromEntries(Object.entries(byMealCategory).sort(([,a],[,b]) => b-a)),
            byCuisine: Object.fromEntries(Object.entries(byCuisine).sort(([,a],[,b]) => b-a)),
        }
    }, [foodDatabase, isFoodDataLoading]);

    const filteredFoods = useMemo(() => {
        if (isFoodDataLoading) return [];
        return foodDatabase.filter(food => {
            const searchLower = searchTerm.toLowerCase();
            const matchesSearch = food.name.toLowerCase().includes(searchLower) ||
                                (food.aliases && food.aliases.some(a => a.toLowerCase().includes(searchLower)));

            const matchesCuisine = cuisineFilter === "All" || food.cuisine === cuisineFilter;
            
            const categories = Array.isArray(food.mealCategory) ? food.mealCategory : [food.mealCategory].filter(Boolean) as MealCategory[];
            const matchesMealCategory = mealCategoryFilter === "All" || categories.includes(mealCategoryFilter as MealCategory);

            const matchesFoodGroup = foodGroupFilter === "All" || food.foodGroup === foodGroupFilter;
            return matchesSearch && matchesCuisine && matchesMealCategory && matchesFoodGroup;
        });
    }, [foodDatabase, searchTerm, cuisineFilter, mealCategoryFilter, foodGroupFilter, isFoodDataLoading]);

  const handleCategoryChange = (slug: string, category: MealCategory, isChecked: boolean) => {
    const food = foodDatabase.find(f => f.slug === slug);
    if (!food) return;

    let currentCategories = Array.isArray(food.mealCategory) ? [...food.mealCategory] : (food.mealCategory ? [food.mealCategory] : []);

    if (isChecked) {
        if (!currentCategories.includes(category)) {
            currentCategories.push(category);
        }
    } else {
        currentCategories = currentCategories.filter(c => c !== category);
    }
    updateMealCategories(slug, currentCategories);
  };
  
  const handleToggleFavorite = (e: React.MouseEvent, slug: string) => {
    e.stopPropagation();
    e.preventDefault();
    if (!activeProfile) return;

    const isCurrentlyFavorite = isFavorite(activeProfile.id, slug);

    if (isCurrentlyFavorite) {
        removeFavorite(activeProfile.id, slug);
    } else {
        addFavorite(activeProfile.id, slug);
    }
  }

  const renderLoadingState = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
            <Card key={i} className="flex flex-col">
                <CardHeader className="p-4 pb-0">
                    <Skeleton className="h-6 w-3/4" />
                    <div className="flex gap-2 mt-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-20" />
                    </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow space-y-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                </CardContent>
                <CardFooter className="p-2 pt-0">
                    <Skeleton className="h-9 w-full" />
                </CardFooter>
            </Card>
        ))}
    </div>
  );


  return (
    <div className="flex flex-col w-full">
      <Header
        title="Food Database"
        description="Browse our growing list of foods and their nutritional information."
      />
      <main className="flex-1 p-4 md:p-8">
        <Card className="mb-8 bg-muted/30">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Database className="h-6 w-6 text-primary"/>
                    Database At a Glance
                </CardTitle>
                 <CardDescription asChild>
                  <div className="text-sm text-muted-foreground">
                    We currently have <Badge variant="secondary">{isFoodDataLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : stats.total}</Badge> food items in our database.
                  </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-bold mb-2">By Food Group</h4>
                        <div className="flex flex-wrap gap-2">
                            {Object.entries(stats.byFoodGroup).slice(0,10).map(([group, count]) => (
                                <Badge key={group} variant="outline" className="font-normal">
                                    {group}: <span className="font-semibold ml-1">{count}</span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">By Meal Category</h4>
                         <div className="flex flex-wrap gap-2">
                            {Object.entries(stats.byMealCategory).map(([group, count]) => (
                                <Badge key={group} variant="outline" className="font-normal capitalize">
                                    {group}: <span className="font-semibold ml-1">{count}</span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold mb-2">By Cuisine</h4>
                         <div className="flex flex-wrap gap-2">
                            {Object.entries(stats.byCuisine).map(([group, count]) => (
                                <Badge key={group} variant="outline" className="font-normal">
                                    {group}: <span className="font-semibold ml-1">{count}</span>
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>

        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Filter & Search</CardTitle>
                <CardDescription>Find specific food items using the filters below.</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="relative md:col-span-1 lg:col-span-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <Input 
                            placeholder="Search by name or alias..."
                            className="pl-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="lg:col-span-1">
                         <Select value={foodGroupFilter} onValueChange={(value) => setFoodGroupFilter(value as any)}>
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
                         <Select value={mealCategoryFilter} onValueChange={(value) => setMealCategoryFilter(value as MealCategory | 'All')}>
                            <SelectTrigger>
                                <SelectValue placeholder="Filter by Meal Type" />
                            </SelectTrigger>
                            <SelectContent>
                                {mealCategoryOptions.map(option => (
                                    <SelectItem key={option} value={option} className="capitalize">{option}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </CardContent>
        </Card>

        {isFoodDataLoading ? renderLoadingState() : (
            filteredFoods.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredFoods.map((food) => {
                    const currentCategories = Array.isArray(food.mealCategory) ? food.mealCategory : (food.mealCategory ? [food.mealCategory] : []);
                    const availableCategories: MealCategory[] = ["Breakfast", "Lunch", "Dinner", "Snack"];
                    const isFav = activeProfile ? isFavorite(activeProfile.id, food.slug) : false;
                    return (
                        <Card key={food.slug} className="flex flex-col hover:shadow-lg transition-shadow">
                            <CardHeader className="p-4 pb-0">
                               <div className="flex justify-between items-start">
                                 <h3 className="font-bold text-lg text-primary flex-1 pr-2">{food.name}</h3>
                                 {activeProfile && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 -mt-1 -mr-1 flex-shrink-0"
                                        onClick={(e) => handleToggleFavorite(e, food.slug)}
                                    >
                                        <Star className={cn("h-5 w-5", isFav ? "fill-current text-yellow-400" : "text-muted-foreground")} />
                                    </Button>
                                 )}
                               </div>
                               <div className="text-xs text-muted-foreground mt-2 flex flex-wrap gap-1">
                                    {food.foodGroup && <Badge variant="secondary" className="font-normal">{food.foodGroup}</Badge>}
                                    {food.cuisine && <Badge variant="secondary" className="font-normal">{food.cuisine}</Badge>}
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 flex-grow space-y-4">
                                <div>
                                    <Label className="text-xs font-bold text-muted-foreground">Meal Categories</Label>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2 mt-1">
                                        {availableCategories.map(cat => (
                                            <div key={cat} className="flex items-center space-x-2">
                                                <Checkbox 
                                                    id={`${food.slug}-${cat}`}
                                                    checked={currentCategories.includes(cat)}
                                                    onCheckedChange={(checked) => handleCategoryChange(food.slug, cat, !!checked)}
                                                />
                                                <label
                                                    htmlFor={`${food.slug}-${cat}`}
                                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 capitalize"
                                                >
                                                    {cat}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
    
                                <div>
                                    <Label htmlFor={`alias-${food.slug}`} className="text-xs font-bold text-muted-foreground">Aliases</Label>
                                    {food.aliases && food.aliases.length > 0 && <p className="text-xs text-muted-foreground">Current: {food.aliases.join(', ')}</p>}
                                </div>
                            </CardContent>
                            <CardFooter className="p-2 pt-0">
                                <Button asChild variant="outline" size="sm" className="w-full">
                                    <Link href={`/food-database/${food.slug}`}>
                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    );
                })}
                </div>
            ) : (
                <div className="text-center py-16 text-muted-foreground">
                    <p>No food items match your filters.</p>
                </div>
            )
        )}
      </main>
    </div>
  );
}
