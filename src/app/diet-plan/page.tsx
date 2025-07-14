
"use client";

import { useState, useEffect } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateDietPlan } from "@/ai/flows/generate-diet-plan";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/header";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Replace, Utensils } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { useProfile } from "@/context/profile-context";
import { useFoodData } from "@/context/food-context";


const FormSchema = z.object({
  healthRequirements: z.string().min(10, { message: "Please describe your health requirements in more detail." }),
  preferences: z.string().min(10, { message: "Please describe your food preferences in more detail." }),
  meals: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one meal.",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

type MealItem = { name: string; calories: number; description: string; };
type Meal = { type: string; items: MealItem[]; };
type DayPlan = { day: string; meals: Meal[]; notes?: string; };

const dailyMealOptions = ["breakfast", "lunch", "dinner", "morning snack", "afternoon snack", "evening snack"];

export default function DietPlanPage() {
  const { activeProfile, dietPlan, setDietPlan, isLoading: isProfileLoading } = useProfile();
  const { foodDatabase, getCategoryOverrides, getAliasOverrides, isFoodDataLoading } = useFoodData();
  const [isGenerating, setIsGenerating] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!isProfileLoading && activeProfile) {
        if (dietPlan) {
            setShowForm(false);
        } else {
            setShowForm(true);
        }
    }
  }, [dietPlan, activeProfile, isProfileLoading]);


  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      healthRequirements: "Standard healthy diet. Low sodium, low sugar.",
      preferences: "No specific allergies or strong dislikes.",
      meals: ["breakfast", "lunch", "dinner", "morning snack", "afternoon snack", "evening snack"],
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    if (!activeProfile) {
        toast({ variant: "destructive", title: "No active profile", description: "Please select a profile first."});
        return;
    }
    setIsGenerating(true);
    setDietPlan(null);

    const healthRequirements = `
      - Health Context: ${data.healthRequirements}
      - Kidney Condition: ${activeProfile.kidneyCondition?.replace(/_/g, ' ') || 'Not specified'}
      - Other Health Conditions: ${activeProfile.otherHealthConditions?.join(', ').replace(/_/g, ' ') || 'None'}
      - Daily Fluid Goal: ${activeProfile.fluidGoal || 'Not specified'} ml
      - Daily Sodium Goal: ${activeProfile.sodiumGoal || 'Not specified'} mg
      - Daily Potassium Goal: ${activeProfile.potassiumGoal || 'Not specified'} mg
      - Daily Phosphorus Goal: ${activeProfile.phosphorusGoal || 'Not specified'} mg
    `;
    const preferences = `
      - User Preferences: ${data.preferences}
      - Name: ${activeProfile.fullName}
      - Age: ${activeProfile.age || 'Not specified'}
      - Gender: ${activeProfile.gender || 'Not specified'}
      - Height: ${activeProfile.height || 'Not specified'} cm
      - Weight: ${activeProfile.weight || 'Not specified'} kg
      - Target Weight: ${activeProfile.targetWeight || 'Not specified'} kg
      - Diet Type: ${activeProfile.dietType || 'Not specified'}
      - Preferred Cuisine: ${activeProfile.preferredCuisine || 'Not specified'}
      - Food Likes: ${activeProfile.likes || 'Not specified'}
      - Food Dislikes: ${activeProfile.dislikes || 'Not specified'}
      - Allergies: ${activeProfile.allergies || 'Not specified'}
    `;

    try {
      const result = await generateDietPlan({ 
        healthRequirements, 
        preferences,
        meals: data.meals,
        dailyCalorieGoal: activeProfile.calorieGoal,
        dailyProteinGoal: activeProfile.proteinGoal,
        categoryOverrides: getCategoryOverrides(),
        aliasOverrides: getAliasOverrides(),
      });
      setDietPlan(result);
      setShowForm(false);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate diet plan. Please try again.",
      });
    } finally {
      setIsGenerating(false);
    }
  };
  
  const handleFlipMeal = (day: string, mealType: string, mealItemName: string) => {
    const mealToFlip = foodDatabase.find(food => food.name === mealItemName);
    
    if (mealToFlip) {
        router.push(`/meal-alternatives?mealSlug=${mealToFlip.slug}&day=${day}&mealType=${mealType}&originalMealName=${encodeURIComponent(mealItemName)}`);
    } else {
        toast({
            variant: "destructive",
            title: "Meal not found",
            description: `Could not find "${mealItemName}" in the database to get alternatives.`
        });
    }
  };

  const handleRegenerate = async () => {
      await onSubmit(form.getValues());
  };


  const renderForm = () => (
    <Card>
      <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
          <CardHeader>
              <CardTitle>Generate New Diet Plan for {activeProfile?.fullName}</CardTitle>
              <CardDescription>
                Confirm details to generate a personalized diet plan. The form is pre-filled with general info, but the plan will use {activeProfile?.fullName}'s specific health profile.
              </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
              <FormField
                  control={form.control}
                  name="meals"
                  render={() => (
                      <FormItem>
                        <FormLabel>Daily meals to include</FormLabel>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-2 pt-2">
                        {dailyMealOptions.map((item) => (
                          <FormField
                            key={item}
                            control={form.control}
                            name="meals"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item}
                                  className="flex flex-row items-start space-x-2 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item)}
                                      onCheckedChange={(checked) => {
                                        return checked
                                          ? field.onChange([...(field.value || []), item])
                                          : field.onChange(
                                              field.value?.filter(
                                                (value) => value !== item
                                              )
                                            )
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal capitalize">
                                    {item}
                                  </FormLabel>
                                </FormItem>
                              )
                            }}
                          />
                        ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
              />
              
              <FormField
              control={form.control}
              name="healthRequirements"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel>Additional Health Requirements or Adjustments</FormLabel>
                  <FormControl>
                      <Textarea
                      placeholder="e.g., Prefers smaller lunches, needs extra low-potassium snacks..."
                      className="resize-none"
                      {...field}
                      />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
              />
              <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel>Additional Food Preferences or Allergies</FormLabel>
                  <FormControl>
                      <Textarea
                      placeholder="e.g., love chicken and fish, dislike spicy food, allergic to nuts..."
                      className="resize-none"
                      {...field}
                      />
                  </FormControl>
                  <FormMessage />
                  </FormItem>
              )}
              />
          </CardContent>
          <CardFooter>
              <Button type="submit" disabled={isGenerating || isFoodDataLoading} size="lg">
              {(isGenerating || isFoodDataLoading) && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {isFoodDataLoading ? 'Loading Food Data...' : 'Generate Diet Plan!'}
              </Button>
          </CardFooter>
          </form>
      </Form>
    </Card>
  );

  const renderPlan = () => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
          <div>
              <CardTitle>Your 7-Day Diet Plan</CardTitle>
              <CardDescription>
                  Review your plan for {activeProfile?.fullName}, flip meal items, and export when ready.
              </CardDescription>
          </div>
        <div className="flex gap-2">
          <Button onClick={handleRegenerate} variant="secondary" disabled={isGenerating}>
            {isGenerating && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Regenerate
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="p-4 border rounded-md">
          <Accordion type="multiple" defaultValue={["monday"]} className="w-full">
            {(dietPlan!.plan || []).map((dayPlan: DayPlan) => {
              if (!dayPlan || !dayPlan.day) return null;

              return (
                <AccordionItem value={dayPlan.day.toLowerCase()} key={dayPlan.day}>
                  <AccordionTrigger className="text-xl font-bold capitalize">{dayPlan.day}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      {(dayPlan.meals || []).map((meal: Meal, index: number) => {
                        if (!meal || !meal.items || meal.items.length === 0) return null;
                        
                        return (
                          <div key={`${meal.type}-${index}`}>
                            <h4 className="font-semibold capitalize text-lg mb-2 flex items-center gap-2"><Utensils className="h-5 w-5 text-primary" />{meal.type}</h4>
                            <div className="space-y-2">
                            {meal.items.map((item: MealItem, itemIndex: number) => {
                                const foodItem = foodDatabase.find(food => food.name === item.name);
                                const slug = foodItem?.slug;

                                return (
                                <Card key={`${item.name}-${itemIndex}`} className="flex justify-between items-center p-4">
                                  <div>
                                    {slug ? (
                                      <Link href={`/food-database/${slug}`} className="hover:underline">
                                        <p className="font-semibold text-primary">{item.name}</p>
                                      </Link>
                                    ) : (
                                      <p className="font-semibold text-primary">{item.name}</p>
                                    )}
                                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                                    <p className="text-xs text-muted-foreground mt-2">{item.calories} kcal</p>
                                  </div>
                                  <Button variant="outline" size="sm" onClick={() => handleFlipMeal(dayPlan.day, meal.type, item.name)}>
                                    <Replace className="mr-2 h-4 w-4" /> Flip
                                  </Button>
                                </Card>
                                );
                            })}
                            </div>
                          </div>
                        );
                      })}
                      {dayPlan.notes && (
                          <div>
                            <h4 className="font-semibold capitalize text-lg mb-2">Notes</h4>
                            <div className="text-sm text-muted-foreground italic p-4 bg-amber-50 rounded-md border border-amber-200">
                                {dayPlan.notes}
                            </div>
                          </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  );

  const renderLoading = () => (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardContent className="space-y-4">
        {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-20 w-full" />)}
      </CardContent>
    </Card>
  );

  if (isProfileLoading || (!activeProfile && !isProfileLoading)) {
      return (
        <div className="flex flex-col w-full">
            <Header
                title="Personalize Your Diet- Flip your options"
                description="Generate a 7-day diet plan based on your needs."
            />
            <main className="flex-1 p-4 md:p-8">
                <Card>
                    <CardHeader>
                        <CardTitle>No Profile Selected</CardTitle>
                        <CardDescription>Please create or select a profile to manage diet plans.</CardDescription>
                    </CardHeader>
                </Card>
            </main>
        </div>
      )
  }

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Personalize Your Diet- Flip your options"
        description={`Manage the diet plan for ${activeProfile?.fullName}`}
      />
      <div className="p-4 md:p-8 grid gap-8">
        {isGenerating
          ? renderLoading()
          : (showForm || !dietPlan)
          ? renderForm()
          : renderPlan()}
      </div>
    </div>
  );
}
