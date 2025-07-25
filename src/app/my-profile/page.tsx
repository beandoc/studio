
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Header from "@/components/header";
import Image from "next/image";
import { Loader2, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormMessage, FormItem } from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import { useProfile } from "@/context/profile-context";

const steps = [
  { id: 1, name: "Basic Info" },
  { id: 2, name: "Health Details" },
  { id: 3, name: "Food Preferences" },
  { id: 4, name: "Goals" },
];

const healthConditionOptions = [
    { id: "diabetes", label: "Diabetes" },
    { id: "high_bp", label: "High BP" },
    { id: "obesity", label: "Obesity" },
    { id: "high_protein_loss", label: "High protein loss" },
    { id: "heart_problem", label: "Heart problem" },
    { id: "others", label: "Others" },
];


const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required."),
  age: z.coerce.number().optional(),
  gender: z.string().optional(),
  height: z.coerce.number().optional(),
  weight: z.coerce.number().optional(),
  bmi: z.string().optional(),
  kidneyCondition: z.string().optional(),
  otherHealthConditions: z.array(z.string()).optional(),
  fluidGoal: z.coerce.number().optional(),
  sodiumGoal: z.coerce.number().optional(),
  potassiumGoal: z.coerce.number().optional(),
  phosphorusGoal: z.coerce.number().optional(),
  dietType: z.string().optional(),
  preferredCuisine: z.string().optional(),
  likes: z.string().optional(),
  dislikes: z.string().optional(),
  allergies: z.string().optional(),
  targetWeight: z.coerce.number().optional(),
  calorieGoal: z.coerce.number().optional(),
  proteinGoal: z.coerce.number().optional(),
  favorites: z.array(z.string()).optional(),
});

export type FormValues = z.infer<typeof formSchema>;

const cuisineOptions = [
    'Maharashtrian',
    'Punjabi',
    'North Indian',
    'South Indian',
    'Gujarati',
    'Bengali',
    'Jain',
    'Generic',
];

export default function MyProfilePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { addProfile, setActiveProfileId } = useProfile();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      gender: "male",
      kidneyCondition: "none",
      otherHealthConditions: [],
      dietType: "vegetarian",
      preferredCuisine: "Maharashtrian",
      fluidGoal: 1000,
      favorites: [],
    },
  });

  const { watch, setValue } = form;
  const height = watch("height");
  const weight = watch("weight");
  const kidneyCondition = watch("kidneyCondition");
  const otherHealthConditions = watch("otherHealthConditions");

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
    if (kidneyCondition && weight) {
        let proteinMultiplier = 0;
        switch(kidneyCondition) {
            case 'chronic_kidney_disease':
                proteinMultiplier = 0.8;
                break;
            case 'hemodialysis':
                proteinMultiplier = 1.0;
                break;
            case 'peritoneal_dialysis':
            case 'post_kidney_transplant':
                proteinMultiplier = 1.2;
                break;
        }
        if (proteinMultiplier > 0) {
            const calculatedProtein = Math.round(weight * proteinMultiplier);
            setValue("proteinGoal", calculatedProtein);
        }
    }
  }, [kidneyCondition, weight, setValue]);
  
  useEffect(() => {
    if (otherHealthConditions?.includes("diabetes")) {
      setValue("calorieGoal", 1800);
    }
  }, [otherHealthConditions, setValue]);


  const handleNext = async () => {
    const isValid = await form.trigger();
    if (!isValid && currentStep === 1) { 
        return;
    }
    
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
    setIsSaving(true);
    
    const newProfileId = addProfile(data);
    setActiveProfileId(newProfileId);

    toast({
      title: "Profile Saved!",
      description: `The profile for ${data.fullName} has been created. You can now generate a diet plan.`,
    });
    router.push('/diet-plan');

    setIsSaving(false);
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

  const showFluidFields = kidneyCondition === 'chronic_kidney_disease' || kidneyCondition === 'hemodialysis' || kidneyCondition === 'peritoneal_dialysis';
  const showFluidSlider = kidneyCondition === 'hemodialysis' || kidneyCondition === 'peritoneal_dialysis';
  const fluidGoal = watch("fluidGoal");

  return (
    <div className="flex flex-col w-full">
       <Header title="Create a New Profile" description="Complete the profile for a new patient or user." />
       <div className="flex-grow p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Form {...form}>
            <Card className="w-full">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Image
                      src="/logo.png"
                      alt="Flip and Toss Logo"
                      width={100}
                      height={100}
                      className="rounded-full"
                  />
                </div>
                <CardTitle className="text-center">New Profile Setup</CardTitle>
                <CardDescription className="text-center">Follow the steps to set up a new health profile.</CardDescription>
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
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <Label>Full Name</Label>
                                    <FormControl>
                                        <Input placeholder="Enter your name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" {...form.register("age")} placeholder="Years" />
                      </div>
                      <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                                <FormItem className="space-y-3">
                                    <Label>Gender</Label>
                                    <FormControl>
                                        <RadioGroup
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                            className="flex space-x-4 pt-2"
                                        >
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <RadioGroupItem value="male" id="male" />
                                                </FormControl>
                                                <Label htmlFor="male" className="font-normal">Male</Label>
                                            </FormItem>
                                            <FormItem className="flex items-center space-x-2">
                                                <FormControl>
                                                    <RadioGroupItem value="female" id="female" />
                                                </FormControl>
                                                <Label htmlFor="female" className="font-normal">Female</Label>
                                            </FormItem>
                                        </RadioGroup>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
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
                              <Label>Kidney Condition</Label>
                              <Controller
                                  control={form.control}
                                  name="kidneyCondition"
                                  render={({ field }) => (
                                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                                          <SelectTrigger><SelectValue placeholder="Select stage" /></SelectTrigger>
                                          <SelectContent>
                                              <SelectItem value="none">None</SelectItem>
                                              <SelectItem value="chronic_kidney_disease">Chronic Kidney Disease</SelectItem>
                                              <SelectItem value="hemodialysis">Hemodialysis</SelectItem>
                                              <SelectItem value="peritoneal_dialysis">Peritoneal Dialysis</SelectItem>
                                              <SelectItem value="post_kidney_transplant">Post Kidney Transplant</SelectItem>
                                          </SelectContent>
                                      </Select>
                                  )}
                              />
                          </div>

                          <div className="space-y-2">
                            <FormField
                              control={form.control}
                              name="otherHealthConditions"
                              render={() => (
                                <FormItem>
                                  <Label>Other Health Conditions</Label>
                                  <div className="grid grid-cols-2 gap-2 pt-2">
                                  {healthConditionOptions.map((item) => (
                                    <FormField
                                      key={item.id}
                                      control={form.control}
                                      name="otherHealthConditions"
                                      render={({ field }) => {
                                        return (
                                          <FormItem
                                            key={item.id}
                                            className="flex flex-row items-start space-x-3 space-y-0"
                                          >
                                            <FormControl>
                                              <Checkbox
                                                checked={field.value?.includes(item.id)}
                                                onCheckedChange={(checked) => {
                                                  return checked
                                                    ? field.onChange([...(field.value || []), item.id])
                                                    : field.onChange(
                                                        field.value?.filter(
                                                          (value) => value !== item.id
                                                        )
                                                      )
                                                }}
                                              />
                                            </FormControl>
                                            <Label className="font-normal">
                                              {item.label}
                                            </Label>
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
                          </div>
                          

                          {showFluidFields && (
                              <div className="md:col-span-2 space-y-4">
                                  <div className="space-y-2">
                                      <Label htmlFor="fluidGoal">Recommended Fluid Intake ({fluidGoal || 1000} ml/day)</Label>
                                      {showFluidSlider ? (
                                        <Controller
                                            name="fluidGoal"
                                            control={form.control}
                                            defaultValue={1000}
                                            render={({ field }) => (
                                                <Slider
                                                    value={[field.value || 1000]}
                                                    onValueChange={(value) => field.onChange(value[0])}
                                                    max={1500}
                                                    min={500}
                                                    step={100}
                                                />
                                            )}
                                        />
                                      ) : (
                                        <Input id="fluidGoal" type="number" {...form.register("fluidGoal")} placeholder="e.g. 1000" />
                                      )}
                                  </div>
                                  <Alert>
                                      <Info className="h-4 w-4" />
                                      <AlertTitle>Fluid Intake Tip</AlertTitle>
                                      <AlertDescription>
                                          Fluid intake depends on your urine output and dialysis ultrafiltration. If unsure, restrict to 800 - 1000 ml/day and consult your nephrologist.
                                      </AlertDescription>
                                  </Alert>
                              </div>
                          )}

                          <div className="space-y-2 md:col-span-2">
                              <Label>Recommended nutrient values (optional)</Label>
                              <div className="grid grid-cols-3 gap-2">
                                  <div className="space-y-1">
                                      <Label htmlFor="sodiumGoal" className="text-xs text-muted-foreground">Sodium (mg)</Label>
                                      <Input id="sodiumGoal" type="number" {...form.register("sodiumGoal")} placeholder="e.g. 2000" />
                                  </div>
                                  <div className="space-y-1">
                                      <Label htmlFor="potassiumGoal" className="text-xs text-muted-foreground">Potassium (mg)</Label>
                                      <Input id="potassiumGoal" type="number" {...form.register("potassiumGoal")} placeholder="e.g. 2500" />
                                  </div>
                                  <div className="space-y-1">
                                      <Label htmlFor="phosphorusGoal" className="text-xs text-muted-foreground">Phosphorus (mg)</Label>
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
                                          <FormItem className="flex items-center space-x-2"><RadioGroupItem value="vegetarian" id="veg"/><Label htmlFor="veg" className="font-normal">Vegetarian</Label></FormItem>
                                          <FormItem className="flex items-center space-x-2"><RadioGroupItem value="non-vegetarian" id="non-veg"/><Label htmlFor="non-veg" className="font-normal">Non-Vegetarian</Label></FormItem>
                                          <FormItem className="flex items-center space-x-2"><RadioGroupItem value="vegan" id="vegan"/><Label htmlFor="vegan" className="font-normal">Vegan</Label></FormItem>
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
                            <Input id="proteinGoal" type="number" {...form.register("proteinGoal")} placeholder="Protein goal based on weight/condition" />
                          </div>
                      </div>
                  )}
                </CardContent>
                <CardFooter className="flex justify-between border-t pt-6">
                  <div>
                      {currentStep > 1 && <Button type="button" variant="outline" onClick={handleBack}>Back</Button>}
                  </div>
                  <Button type="button" onClick={handleNext} disabled={isSaving}>
                    {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {currentStep === steps.length ? "Save Profile" : "Next Step"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </Form>
        </div>
      </div>
    </div>
  );
}
