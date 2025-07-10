
"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/header";
import Image from "next/image";
import { Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { generateDietPlan } from "@/ai/flows/generate-diet-plan";

const steps = [
  { id: 1, name: "Basic Info" },
  { id: 2, name: "Health Details" },
  { id: 3, name: "Food Preferences" },
  { id: 4, name: "Goals" },
];

const formSchema = z.object({
  // Step 1
  fullName: z.string().optional(),
  age: z.coerce.number().optional(),
  gender: z.string().optional(),
  height: z.coerce.number().optional(),
  weight: z.coerce.number().optional(),
  bmi: z.string().optional(),

  // Step 2
  stage: z.string().optional(),
  conditions: z.array(z.string()).optional(),
  otherCondition: z.string().optional(),
  sodiumGoal: z.coerce.number().optional(),
  potassiumGoal: z.coerce.number().optional(),
  phosphorusGoal: z.coerce.number().optional(),

  // Step 3
  dietType: z.string().optional(),
  preferredCuisine: z.string().optional(),
  likes: z.string().optional(),
  dislikes: z.string().optional(),
  allergies: z.string().optional(),

  // Step 4
  targetWeight: z.coerce.number().optional(),
  calorieGoal: z.coerce.number().optional(),
  proteinGoal: z.coerce.number().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const conditionsList = [
    { id: 'diabetes', label: 'Diabetes' },
    { id: 'high_bp', label: 'High Blood Pressure' },
    { id: 'heart_disease', label: 'Heart Disease' },
    { id: 'obesity', label: 'Obesity' },
    { id: 'high_protein_loss', label: 'High Protein Loss' },
];

const cuisineOptions = [
    'Maharashtrian',
    'Punjabi',
    'North Indian',
    'South Indian',
    'Gujarati',
    'Bengali',
    'Jain',
];

export default function MyProfilePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      gender: "",
      stage: "",
      conditions: [],
      dietType: "vegetarian",
      preferredCuisine: "Maharashtrian",
    },
  });

  const { watch, setValue, trigger } = form;
  const height = watch("height");
  const weight = watch("weight");
  const stage = watch("stage");

  useEffect(() => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setValue("bmi", bmiValue);
    } else {
        setValue("bmi", "");
    }
  }, [height, weight, setValue]);

  useEffect(() => {
    if (stage && weight) {
        let proteinMultiplier = 0;
        switch(stage) {
            case 'ckd':
                proteinMultiplier = 0.8;
                break;
            case 'hemodialysis':
                proteinMultiplier = 1.0;
                break;
            case 'peritoneal_dialysis':
            case 'post_transplant':
                proteinMultiplier = 1.2;
                break;
        }
        if (proteinMultiplier > 0) {
            const calculatedProtein = Math.round(weight * proteinMultiplier);
            setValue("proteinGoal", calculatedProtein);
        }
    }
  }, [stage, weight, setValue]);


  const handleNext = async () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      await form.handleSubmit(onSubmit)();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    
    const healthRequirements = `
      - Stage of Kidney Disease: ${data.stage || 'Not specified'}
      - Other Health Conditions: ${data.conditions?.join(', ') || 'None'}, ${data.otherCondition || ''}
      - Daily Sodium Goal: ${data.sodiumGoal || 'Not specified'} mg
      - Daily Potassium Goal: ${data.potassiumGoal || 'Not specified'} mg
      - Daily Phosphorus Goal: ${data.phosphorusGoal || 'Not specified'} mg
      - Daily Calorie Goal: ${data.calorieGoal || 'Not specified'} kcal
      - Daily Protein Goal: ${data.proteinGoal || 'Not specified'} g
    `;

    const preferences = `
      - Age: ${data.age || 'Not specified'}
      - Gender: ${data.gender || 'Not specified'}
      - Height: ${data.height || 'Not specified'} cm
      - Weight: ${data.weight || 'Not specified'} kg
      - Target Weight: ${data.targetWeight || 'Not specified'} kg
      - Diet Type: ${data.dietType || 'Not specified'}
      - Preferred Cuisine: ${data.preferredCuisine || 'Not specified'}
      - Food Likes: ${data.likes || 'Not specified'}
      - Food Dislikes: ${data.dislikes || 'Not specified'}
      - Allergies: ${data.allergies || 'Not specified'}
    `;

    try {
      // The diet plan generation no longer needs the meals list
      // as it's assumed to be all meals.
      const result = await generateDietPlan({ healthRequirements, preferences, meals: "breakfast, lunch, dinner, snacks" });
      localStorage.setItem("dietPlan", JSON.stringify(result));
      toast({
        title: "Profile Saved & Diet Plan Generated!",
        description: "Redirecting you to your new diet plan...",
      });
      router.push('/diet-plan');
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

  const renderStepIcon = (index: number, step: {id: number}) => {
    if (index < currentStep - 1) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
        );
    }
    return step.id;
  };

  return (
    <div className="flex flex-col w-full">
       <Header title="My Profile" description="Complete your profile for a personalized experience." />
       <div className="flex-grow p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Card className="w-full">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Image
                    src="https://placehold.co/100x100.png"
                    alt="Flip and Toss Logo"
                    data-ai-hint="company logo"
                    width={100}
                    height={100}
                    className="rounded-full"
                />
              </div>
              <CardTitle className="text-center">Let's Get Started</CardTitle>
               <CardDescription className="text-center">Follow the steps to set up your health profile.</CardDescription>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                    {steps.map((step, index) => (
                        <div key={step.id} className={`flex-1 text-center ${index < currentStep ? 'text-primary' : 'text-muted-foreground'}`}>
                           <div className={`mx-auto h-8 w-8 rounded-full border-2 flex items-center justify-center mb-1 ${index < currentStep ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted border-border'}`}>
                                {renderStepIcon(index, step)}
                           </div>
                           <p className="text-xs font-medium">{step.name}</p>
                        </div>
                    ))}
                </div>
                <Progress value={(currentStep / steps.length) * 100} className="w-full h-2" />
              </div>
            </CardHeader>

            <form>
              <CardContent className="min-h-[350px]">
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 animate-in fade-in-50">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" {...form.register("fullName")} placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" {...form.register("age")} placeholder="Years" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                       <Controller
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select gender" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input id="height" type="number" {...form.register("height")} placeholder="Height in cm" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight" type="number" {...form.register("weight")} placeholder="Weight in kg" />
                    </div>
                     <div className="space-y-2">
                      <Label htmlFor="bmi">BMI (Calculated)</Label>
                      <Input id="bmi" {...form.register("bmi")} placeholder="BMI will be calculated" readOnly className="bg-muted"/>
                    </div>
                  </div>
                )}
                 {currentStep === 2 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 animate-in fade-in-50">
                        <div className="space-y-2">
                            <Label>Stage of Health Condition</Label>
                             <Controller
                                control={form.control}
                                name="stage"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger><SelectValue placeholder="Select stage" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="none">None</SelectItem>
                                            <SelectItem value="ckd">Chronic condition</SelectItem>
                                            <SelectItem value="hemodialysis">High Severity</SelectItem>
                                            <SelectItem value="peritoneal_dialysis">Medium Severity</SelectItem>
                                            <SelectItem value="post_transplant">Post Treatment</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label>Other Health Conditions</Label>
                            <div className="space-y-2">
                            {conditionsList.map(item => (
                                <Controller
                                    key={item.id}
                                    name="conditions"
                                    control={form.control}
                                    render={({ field }) => (
                                         <div className="flex items-center space-x-2">
                                            <Checkbox
                                                id={item.id}
                                                checked={field.value?.includes(item.id)}
                                                onCheckedChange={(checked) => {
                                                    return checked
                                                        ? field.onChange([...(field.value || []), item.id])
                                                        : field.onChange(field.value?.filter(v => v !== item.id))
                                                }}
                                            />
                                            <label htmlFor={item.id} className="text-sm font-medium leading-none">{item.label}</label>
                                         </div>
                                    )}
                                />
                            ))}
                             <Input {...form.register("otherCondition")} placeholder="Other (please specify)"/>
                            </div>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label>Recommended nutrient values</Label>
                            <div className="grid grid-cols-3 gap-2">
                                <div className="space-y-1">
                                    <Label htmlFor="sodiumGoal" className="text-xs text-muted-foreground">Low Sodium (mg)</Label>
                                    <Input id="sodiumGoal" type="number" {...form.register("sodiumGoal")} placeholder="e.g. 2000" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="potassiumGoal" className="text-xs text-muted-foreground">Low Potassium (mg)</Label>
                                    <Input id="potassiumGoal" type="number" {...form.register("potassiumGoal")} placeholder="e.g. 2500" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="phosphorusGoal" className="text-xs text-muted-foreground">Low Phosphorus (mg)</Label>
                                    <Input id="phosphorusGoal" type="number" {...form.register("phosphorusGoal")} placeholder="e.g. 1000" />
                                </div>
                            </div>
                        </div>
                    </div>
                 )}
                 {currentStep === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 animate-in fade-in-50">
                        <div className="space-y-2">
                            <Label>Diet Type</Label>
                            <Controller
                                name="dietType"
                                control={form.control}
                                render={({ field }) => (
                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="vegetarian" id="veg"/><Label htmlFor="veg">Vegetarian</Label></div>
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="non-vegetarian" id="non-veg"/><Label htmlFor="non-veg">Non-Vegetarian</Label></div>
                                        <div className="flex items-center space-x-2"><RadioGroupItem value="vegan" id="vegan"/><Label htmlFor="vegan">Vegan</Label></div>
                                    </RadioGroup>
                                )}
                            />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="preferredCuisine">Preferred Cuisine</Label>
                           <Controller
                                name="preferredCuisine"
                                control={form.control}
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select cuisine" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {cuisineOptions.map(cuisine => (
                                                <SelectItem key={cuisine} value={cuisine}>{cuisine}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="likes">Food Likes</Label>
                           <Textarea id="likes" {...form.register("likes")} placeholder="e.g., leafy greens, chicken, berries..." />
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="dislikes">Food Dislikes</Label>
                           <Textarea id="dislikes" {...form.register("dislikes")} placeholder="e.g., spicy food, mushrooms..." />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                           <Label htmlFor="allergies">Allergies</Label>
                           <Textarea id="allergies" {...form.register("allergies")} placeholder="e.g., nuts, shellfish, gluten..." />
                        </div>
                    </div>
                 )}
                 {currentStep === 4 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 animate-in fade-in-50">
                         <div className="space-y-2">
                           <Label htmlFor="targetWeight">Target Weight (kg)</Label>
                           <Input id="targetWeight" type="number" {...form.register("targetWeight")} placeholder="e.g., 70" />
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="calorieGoal">Daily Calorie Goal (kcal)</Label>
                           <Input id="calorieGoal" type="number" {...form.register("calorieGoal")} placeholder="e.g., 2000" />
                         </div>
                         <div className="space-y-2 md:col-span-2">
                           <Label htmlFor="proteinGoal">Daily Protein Goal (g)</Label>
                           <Input id="proteinGoal" type="number" {...form.register("proteinGoal")} placeholder="e.g., 80" />
                         </div>
                    </div>
                 )}
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <div>
                    {currentStep > 1 && <Button type="button" variant="outline" onClick={handleBack}>Back</Button>}
                </div>
                <Button type="button" onClick={handleNext} disabled={isLoading}>
                   {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {currentStep === steps.length ? "Finish & Save Profile" : "Next Step"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
