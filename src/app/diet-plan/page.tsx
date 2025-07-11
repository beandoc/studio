
"use client";

import { useState, useRef, useEffect } from "react";
import { useForm, type SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generateDietPlan, type GenerateDietPlanOutput } from "@/ai/flows/generate-diet-plan";
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
import { Download, Loader2, Info, Replace } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next-intl";
import { foodDatabase } from "@/lib/food-data";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";


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
  dailyMeals: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one meal.",
  }),
  dietType: z.string().min(1, "Diet type is required."),
  budget: z.string().optional(),
  healthRequirements: z.string().min(10, { message: "Please describe your health requirements in more detail." }),
  preferences: z.string().min(10, { message: "Please describe your food preferences in more detail." }),
});

type FormValues = z.infer<typeof FormSchema>;

type MealDetails = { name: string; calories: number; description: string; };
type Meal = { type: string; details: MealDetails; };
type DayPlan = { day: string; meals: Meal[]; notes?: string; };

const dailyMealOptions = ["breakfast", "lunch", "dinner", "snacks"];

export default function DietPlanPage() {
  const [dietPlan, setDietPlan] = useState<GenerateDietPlanOutput | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const { toast } = useToast();
  const pdfRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [userName, setUserName] = useState<string>("User");


  useEffect(() => {
    try {
        const storedPlan = localStorage.getItem("dietPlan");
        if (storedPlan) {
            setDietPlan(JSON.parse(storedPlan));
        } else {
            setShowForm(true); // If no plan, show form
        }

        const userProfile = localStorage.getItem("userProfile");
        if (userProfile) {
            const profile = JSON.parse(userProfile);
            if (profile.fullName) {
                setUserName(profile.fullName);
            }
        }
    } catch (e) {
        console.error("Failed to parse data from localStorage", e);
        setShowForm(true); // Show form on error
        localStorage.removeItem("dietPlan");
    } finally {
        setIsLoading(false); // Stop loading after check
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
      dailyMeals: ["breakfast", "lunch", "dinner", "snacks"],
      dietType: "anything",
      budget: "$",
      healthRequirements: "Standard healthy diet. Low sodium, low sugar.",
      preferences: "No specific allergies or strong dislikes.",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setDietPlan(null);

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
      - Diet type: ${data.dietType}
      - Budget: ${data.budget}
    `;

    try {
      const result = await generateDietPlan({ 
        healthRequirements, 
        preferences,
        meals: data.dailyMeals.join(', ')
      });
      setDietPlan(result);
      localStorage.setItem("dietPlan", JSON.stringify(result));
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
    const input = pdfRef.current;
    if (input) {
      const fileName = `${userName.replace(/\s+/g, '-')}-diet-plan.pdf`;
      html2canvas(input, { 
        useCORS: true,
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF({ orientation: "p", unit: "px", format: "a4" });
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const ratio = canvasWidth / pdfWidth;
        const pdfHeight = canvasHeight / ratio;
        
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save(fileName);
      });
    }
  };
  
  const handleFlipMeal = (day: string, mealType: string) => {
    const dayPlan = dietPlan?.plan.find(d => d.day.toLowerCase() === day.toLowerCase());
    const meal = dayPlan?.meals.find(m => m.type.toLowerCase() === mealType.toLowerCase())?.details;

    if (meal && meal.name) {
        const mealToFlip = foodDatabase.find(food => food.name === meal.name);
        if (mealToFlip) {
            router.push(`/meal-alternatives?mealSlug=${mealToFlip.slug}&day=${day}&mealType=${mealType}`);
        } else {
            toast({
                variant: "destructive",
                title: "Meal not found",
                description: `Could not find "${meal.name}" in the database to get alternatives.`
            })
        }
    }
  }

  const units = form.watch("units");

  const renderForm = () => (
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
                            <div className="flex flex-col space-y-2 pt-2">
                            {dailyMealOptions.map((item) => (
                              <FormField
                                key={item}
                                control={form.control}
                                name="dailyMeals"
                                render={({ field }) => {
                                  return (
                                    <FormItem
                                      key={item}
                                      className="flex flex-row items-start space-x-3 space-y-0"
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
  );

  const renderPlan = () => (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
          <div>
              <CardTitle>Your 7-Day Diet Plan</CardTitle>
              <CardDescription>
                  Review your plan, flip meals you don't like, and export when you're ready.
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
      <CardContent>
        {/* Visible Accordion */}
        <div className="p-4 border rounded-md">
          <Accordion type="multiple" defaultValue={["monday"]} className="w-full">
            {(dietPlan!.plan || []).map((dayPlan: DayPlan) => {
              if (!dayPlan || !dayPlan.day) return null;

              return (
                <AccordionItem value={dayPlan.day.toLowerCase()} key={dayPlan.day}>
                  <AccordionTrigger className="text-xl font-bold capitalize">{dayPlan.day}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6">
                      {(dayPlan.meals || []).map((meal: Meal) => {
                        if (meal && meal.details && meal.details.name) {
                          return (
                            <div key={`${meal.type}-${meal.details.name}`}>
                              <h4 className="font-semibold capitalize text-lg mb-2">{meal.type}</h4>
                              <Card className="flex justify-between items-center p-4">
                                <div>
                                  <p className="font-semibold text-primary">{meal.details.name}</p>
                                  <p className="text-sm text-muted-foreground mt-1">{meal.details.description}</p>
                                  <p className="text-xs text-muted-foreground mt-2">{meal.details.calories} kcal</p>
                                </div>
                                <Button variant="outline" size="sm" onClick={() => handleFlipMeal(dayPlan.day, meal.type)}>
                                  <Replace className="mr-2 h-4 w-4" /> Flip Meal
                                </Button>
                              </Card>
                            </div>
                          );
                        }
                        return null;
                      })}
                      {dayPlan.notes && (
                          <div key="notes">
                          <h4 className="font-semibold capitalize text-lg mb-2">Notes</h4>
                          <p className="text-sm text-muted-foreground italic p-4 bg-amber-50 rounded-md border border-amber-200">{dayPlan.notes}</p>
                          </div>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>

        {/* Hidden Div for PDF Export */}
        <div className="absolute -left-full -top-full" style={{ left: '-9999px', top: '-9999px'}}>
          <div ref={pdfRef} style={{ width: '800px', padding: '40px', backgroundColor: 'white', color: 'black' }}>
             <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem', borderBottom: '2px solid #eee', paddingBottom: '1rem' }}>
                <Image src="/welcome-image.png" alt="Logo" width={60} height={60} />
                <div style={{ marginLeft: '1rem'}}>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Your Weekly Diet Plan</h1>
                    <p style={{ fontSize: '1rem', color: '#555' }}>Hello {userName}, here is your diet plan for the week.</p>
                </div>
             </div>
             <div>
                {(dietPlan!.plan || []).map((dayPlan: DayPlan) => {
                  if (!dayPlan || !dayPlan.day) return null;
                  return (
                    <div key={dayPlan.day} style={{ marginBottom: '2rem', pageBreakInside: 'avoid' }}>
                      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', textTransform: 'capitalize', borderBottom: '1px solid #ccc', paddingBottom: '0.5rem', marginBottom: '1rem' }}>{dayPlan.day}</h2>
                      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <tbody>
                          {(dayPlan.meals || []).map((meal: Meal) => {
                              if (!meal || !meal.details || !meal.details.name) return null;
                              return (
                                <tr key={meal.type} style={{ borderBottom: '1px solid #eee'}}>
                                  <td style={{ width: '120px', padding: '0.75rem', fontWeight: 'bold', textTransform: 'capitalize' }}>{meal.type}</td>
                                  <td style={{ padding: '0.75rem' }}>
                                    <p style={{ fontWeight: 'bold', color: '#0070f3' }}>{meal.details.name}</p>
                                    <p style={{ fontSize: '0.9rem', color: '#333' }}>{meal.details.description}</p>
                                    <p style={{ fontSize: '0.8rem', color: '#777' }}>{meal.details.calories} kcal</p>
                                  </td>
                                </tr>
                              )
                          })}
                        </tbody>
                      </table>
                      {dayPlan.notes && (
                        <div style={{ marginTop: '1rem', padding: '1rem', backgroundColor: '#fffbe6', border: '1px solid #ffe58f', borderRadius: '4px' }}>
                          <h4 style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Notes for {dayPlan.day}:</h4>
                          <p style={{ fontStyle: 'italic', color: '#555'}}>{dayPlan.notes}</p>
                        </div>
                      )}
                    </div>
                  )
                })}
             </div>
          </div>
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

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Personalized Diet Plan"
        description="Generate a 7-day diet plan based on your needs."
      />
      <div className="p-4 md:p-8 grid gap-8">
        {isLoading
          ? renderLoading()
          : (showForm || !dietPlan)
          ? renderForm()
          : renderPlan()}
      </div>
    </div>
  );
}
