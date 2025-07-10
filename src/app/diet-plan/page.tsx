
"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Download, Loader2, Info } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const FormSchema = z.object({
  gender: z.string().min(1, "Gender is required."),
  age: z.coerce.number().min(1, "Age must be a positive number."),
  units: z.string().min(1, "Units system is required."),
  heightFt: z.coerce.number().optional(),
  heightIn: z.coerce.number().optional(),
  heightCm: z.coerce.number().optional(),
  weight: z.coerce.number().min(1, "Weight must be a positive number."),
  activityLevel: z.string().min(1, "Activity level is required."),
  weightGoal: z.string().min(1, "Weight goal is required."),
  weeklyVariety: z.string().min(1, "Weekly variety is required."),
  recipeComplexity: z.string().min(1, "Max recipe complexity is required."),
  dailyMeals: z.array(z.string()).min(1, "Select at least one meal."),
  dietType: z.string().min(1, "Diet type is required."),
  budget: z.string().optional(),
  healthRequirements: z.string().min(10, { message: "Please describe your health requirements in more detail." }),
  preferences: z.string().min(10, { message: "Please describe your food preferences in more detail." }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function DietPlanPage() {
  const [dietPlan, setDietPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const dietPlanRef = useRef<HTMLDivElement>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const storedPlan = localStorage.getItem("dietPlan");
    if (storedPlan) {
      setDietPlan(storedPlan);
    } else {
        setShowForm(true);
    }
  }, []);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      gender: "male",
      age: 30,
      units: "imperial",
      weight: 185,
      activityLevel: "sedentary",
      weightGoal: "lose_fat",
      weeklyVariety: "2",
      recipeComplexity: "2",
      dailyMeals: ["breakfast", "lunch", "dinner", "snack"],
      dietType: "anything",
      budget: "$",
      healthRequirements: "Standard kidney-friendly diet. Low sodium, low potassium, low phosphorus.",
      preferences: "No specific allergies or strong dislikes.",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setDietPlan(null);

    // Combine form data into the format expected by the AI flow
    const healthRequirements = `
      - Health Context: ${data.healthRequirements}
      - Activity Level: ${data.activityLevel}
      - Weight Goal: ${data.weightGoal.replace('_', ' ')}
    `;
    const preferences = `
      - User Preferences: ${data.preferences}
      - Gender: ${data.gender}
      - Age: ${data.age}
      - Weight: ${data.weight} ${data.units === 'imperial' ? 'lbs' : 'kg'}
      - Height: ${data.units === 'imperial' ? `${data.heightFt}ft ${data.heightIn}in` : `${data.heightCm}cm`}
      - Desired weekly variety: ${data.weeklyVariety}
      - Max recipe complexity: ${data.recipeComplexity}
      - Daily meals: ${data.dailyMeals.join(', ')}
      - Diet type: ${data.dietType}
      - Budget: ${data.budget}
    `;

    try {
      const result = await generateDietPlan({ healthRequirements, preferences });
      setDietPlan(result.dietPlan);
      localStorage.setItem("dietPlan", result.dietPlan);
      setShowForm(false);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate diet plan. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleExportPdf = () => {
    const input = dietPlanRef.current;
    if (input) {
      html2canvas(input, {
        scrollX: 0,
        scrollY: -window.scrollY,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({
          orientation: "p",
          unit: "px",
          format: [canvas.width, canvas.height],
        });
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("diet-plan.pdf");
      });
    }
  };
  
  const units = form.watch("units");

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Personalized Diet Plan"
        description="Generate a 7-day kidney-friendly diet plan based on your needs."
      />
      <div className="p-4 md:p-8 grid gap-8">
        {(showForm || !dietPlan) && (
            <Card>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardHeader>
                    <CardTitle>Your Details</CardTitle>
                    <CardDescription>
                    Provide your details to generate a personalized diet plan.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField control={form.control} name="gender" render={({ field }) => (
                            <FormItem><FormLabel>Gender</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger></FormControl><SelectContent><SelectItem value="male">Male</SelectItem><SelectItem value="female">Female</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="age" render={({ field }) => (
                            <FormItem><FormLabel>Age</FormLabel><FormControl><Input type="number" placeholder="30" {...field} /></FormControl><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="units" render={({ field }) => (
                            <FormItem><FormLabel>Units</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select units" /></SelectTrigger></FormControl><SelectContent><SelectItem value="imperial">Imperial</SelectItem><SelectItem value="metric">Metric</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                        )}/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <FormLabel>Height</FormLabel>
                            {units === 'imperial' ? (
                                <div className="flex gap-2">
                                    <FormField control={form.control} name="heightFt" render={({ field }) => (
                                        <FormItem className="flex-1"><FormControl><Input type="number" placeholder="5" {...field} endAdornment="ft" /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                    <FormField control={form.control} name="heightIn" render={({ field }) => (
                                        <FormItem className="flex-1"><FormControl><Input type="number" placeholder="8" {...field} endAdornment="in" /></FormControl><FormMessage /></FormItem>
                                    )}/>
                                </div>
                            ) : (
                                <FormField control={form.control} name="heightCm" render={({ field }) => (
                                    <FormItem><FormControl><Input type="number" placeholder="173" {...field} endAdornment="cm" /></FormControl><FormMessage /></FormItem>
                                )}/>
                            )}
                        </div>
                        <FormField control={form.control} name="weight" render={({ field }) => (
                            <FormItem><FormLabel>Weight</FormLabel><FormControl><Input type="number" placeholder="185" {...field} endAdornment={units === 'imperial' ? 'lbs' : 'kg'} /></FormControl><FormMessage /></FormItem>
                        )}/>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
                        <FormField control={form.control} name="activityLevel" render={({ field }) => (
                            <FormItem><FormLabel>Activity level</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select level" /></SelectTrigger></FormControl><SelectContent><SelectItem value="sedentary">Sedentary</SelectItem><SelectItem value="lightly_active">Lightly Active</SelectItem><SelectItem value="moderately_active">Moderately Active</SelectItem><SelectItem value="very_active">Very Active</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                        )}/>
                        <div className="flex gap-2 items-center">
                            <FormField control={form.control} name="weightGoal" render={({ field }) => (
                                <FormItem className="flex-1"><FormLabel>Weight goal</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select goal" /></SelectTrigger></FormControl><SelectContent><SelectItem value="lose_fat">Lose fat</SelectItem><SelectItem value="maintain">Maintain</SelectItem><SelectItem value="gain_muscle">Gain muscle</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                            )}/>
                            <TooltipProvider>
                                <Tooltip><TooltipTrigger asChild><Button type="button" variant="ghost" size="icon" className="mb-1"><Info className="h-4 w-4 text-muted-foreground"/></Button></TooltipTrigger><TooltipContent><p>Select your primary weight goal.</p></TooltipContent></Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField control={form.control} name="weeklyVariety" render={({ field }) => (
                            <FormItem><FormLabel>Weekly variety</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select variety" /></SelectTrigger></FormControl><SelectContent>{[...Array(5)].map((_, i) => <SelectItem key={i+1} value={String(i+1)}>{i+1}</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="recipeComplexity" render={({ field }) => (
                            <FormItem><FormLabel>Max recipe complexity</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select complexity" /></SelectTrigger></FormControl><SelectContent>{[...Array(5)].map((_, i) => <SelectItem key={i+1} value={String(i+1)}>{i+1}</SelectItem>)}</SelectContent></Select><FormMessage /></FormItem>
                        )}/>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <FormField
                            control={form.control}
                            name="dailyMeals"
                            render={() => (
                                <FormItem>
                                    <FormLabel>Daily meals</FormLabel>
                                    <Controller
                                        control={form.control}
                                        name="dailyMeals"
                                        render={({ field }) => (
                                            <FormControl>
                                                <select
                                                    {...field}
                                                    multiple
                                                    className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                                >
                                                    <option value="breakfast">Breakfast</option>
                                                    <option value="lunch">Lunch</option>
                                                    <option value="dinner">Dinner</option>
                                                    <option value="snack">Snack</option>
                                                </select>
                                            </FormControl>
                                        )}
                                    />
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField control={form.control} name="dietType" render={({ field }) => (
                            <FormItem><FormLabel>Diet type</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select diet type" /></SelectTrigger></FormControl><SelectContent><SelectItem value="anything">Anything</SelectItem><SelectItem value="vegetarian">Vegetarian</SelectItem><SelectItem value="vegan">Vegan</SelectItem><SelectItem value="pescatarian">Pescatarian</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                        )}/>
                        <FormField control={form.control} name="budget" render={({ field }) => (
                            <FormItem><FormLabel>Budget</FormLabel><Select onValueChange={field.onChange} defaultValue={field.value}><FormControl><SelectTrigger><SelectValue placeholder="Select budget" /></SelectTrigger></FormControl><SelectContent><SelectItem value="$">$</SelectItem><SelectItem value="$$">$$</SelectItem><SelectItem value="$$$">$$$</SelectItem></SelectContent></Select><FormMessage /></FormItem>
                        )}/>
                    </div>
                    
                    <FormField
                    control={form.control}
                    name="healthRequirements"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Health Requirements</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="e.g., Low potassium, 2000mg sodium limit, fluid restriction of 1.5L..."
                            className="resize-none"
                            {...field}
                            />
                        </FormControl>
                        <FormDescription>
                            List any specific dietary restrictions or health goals.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="preferences"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Food Preferences & Allergies</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="e.g., love chicken and fish, dislike spicy food, allergic to nuts..."
                            className="resize-none"
                            {...field}
                            />
                        </FormControl>
                        <FormDescription>
                            Tell us about the foods you enjoy, want to avoid, or are allergic to.
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </CardContent>
                <CardFooter>
                    <Button type="submit" disabled={isLoading} size="lg">
                    {isLoading && (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Generate Diet Plan!
                    </Button>
                </CardFooter>
                </form>
            </Form>
            </Card>
        )}

        {isLoading && (
          <Card>
            <CardHeader>
              <Skeleton className="h-8 w-1/2" />
            </CardHeader>
            <CardContent className="space-y-4">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        )}

        {dietPlan && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <div>
                    <CardTitle>Your 7-Day Diet Plan</CardTitle>
                    <CardDescription>
                        Below is your personalized plan. You can regenerate it if needed.
                    </CardDescription>
                </div>
              <div className="flex gap-2">
                <Button onClick={() => setShowForm(true)} variant="secondary">Regenerate</Button>
                <Button onClick={handleExportPdf} variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export as PDF
                </Button>
              </div>
            </CardHeader>
            <CardContent ref={dietPlanRef}>
              <div
                className="prose prose-sm dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: dietPlan.replace(/\n/g, '<br />') }}
              />
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
