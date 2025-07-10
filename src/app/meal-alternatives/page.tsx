
"use client";

import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { SuggestMealAlternativesOutput } from "@/ai/flows/suggest-meal-alternatives";
import { suggestMealAlternatives } from "@/ai/flows/suggest-meal-alternatives";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, Zap } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { foodDatabase } from "@/lib/food-data";

const FormSchema = z.object({
  mealSlug: z.string().min(1, { message: "Please select a meal." }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function MealAlternativesPage() {
  const [alternatives, setAlternatives] = useState<SuggestMealAlternativesOutput['alternatives'] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mealSlug: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setAlternatives(null);
    try {
      const result = await suggestMealAlternatives(data);
      if (result.alternatives.length === 0) {
        toast({
          variant: "default",
          title: "No Alternatives Found",
          description: "We couldn't find any similar meals in our database. Try another selection.",
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

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Meal Alternatives"
        description="Find nutritionally similar alternatives from our food database."
      />
      <div className="p-4 md:p-8 grid gap-8">
        <Card>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>Find an Alternative</CardTitle>
                <CardDescription>
                  Select a meal, and we'll suggest two similar options based on cuisine and nutritional profile.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <FormField
                  control={form.control}
                  name="mealSlug"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Select a Meal to Replace</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a meal from the list" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {foodDatabase.map((food) => (
                            <SelectItem key={food.slug} value={food.slug}>
                              {food.name} ({food.cuisine})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Suggest Alternatives
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

        {isLoading && (
          <div className="grid gap-4 md:grid-cols-2">
            {[...Array(2)].map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-6 w-1/3" />
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        {alternatives && alternatives.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold tracking-tight font-headline mb-4">Suggested Alternatives</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {alternatives.map((alt) => (
                <Card key={alt.name}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      {alt.name}
                    </CardTitle>
                    <CardDescription>{alt.calories} calories</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-2">{alt.description}</p>
                    <p className="text-sm font-medium">{alt.nutrientInformation}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
