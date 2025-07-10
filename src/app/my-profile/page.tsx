
"use client";

import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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

const steps = [
  { id: 1, name: "Basic Info" },
  { id: 2, name: "Kidney Details" },
  { id: 3, name: "Food Preferences" },
  { id: 4, name: "Goals" },
];

const formSchema = z.object({
  // Step 1
  fullName: z.string().min(1, "Full name is required"),
  age: z.coerce.number().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  height: z.coerce.number().min(1, "Height is required"),
  weight: z.coerce.number().min(1, "Weight is required"),
  bmi: z.string().optional(),

  // Step 2
  stage: z.string().min(1, "Please select your kidney disease stage"),
  conditions: z.array(z.string()).optional(),
  otherCondition: z.string().optional(),
  restrictions: z.string().min(1, "Please specify dietary restrictions"),

  // Step 3
  dietType: z.string().min(1, "Please select a diet type"),
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
];

export default function MyProfilePage() {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      gender: "",
      stage: "",
      conditions: [],
      restrictions: "Low sodium, Low potassium, Low phosphorus",
      dietType: "vegetarian",
    },
  });

  const { watch, setValue, trigger } = form;
  const height = watch("height");
  const weight = watch("weight");

  useEffect(() => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setValue("bmi", bmiValue);
    } else {
        setValue("bmi", "");
    }
  }, [height, weight, setValue]);


  const handleNext = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];
    if (currentStep === 1) fieldsToValidate = ['fullName', 'age', 'gender', 'height', 'weight'];
    if (currentStep === 2) fieldsToValidate = ['stage', 'restrictions'];
    if (currentStep === 3) fieldsToValidate = ['dietType'];
    if (currentStep === 4) fieldsToValidate = []; // No validation on the last step before submit


    const result = await trigger(fieldsToValidate);

    if (result) {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            form.handleSubmit(onSubmit)();
        }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
    alert("Profile saved successfully!");
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
              <CardTitle>Let's Get Started</CardTitle>
               <CardDescription>Follow the steps to set up your health profile.</CardDescription>
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

            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent className="min-h-[350px]">
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 animate-in fade-in-50">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name</Label>
                      <Input id="fullName" {...form.register("fullName")} placeholder="Enter your name" />
                      {form.formState.errors.fullName && <p className="text-sm text-destructive">{form.formState.errors.fullName.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input id="age" type="number" {...form.register("age")} placeholder="Years" />
                       {form.formState.errors.age && <p className="text-sm text-destructive">{form.formState.errors.age.message}</p>}
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
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            )}
                        />
                      {form.formState.errors.gender && <p className="text-sm text-destructive">{form.formState.errors.gender.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="height">Height (cm)</Label>
                      <Input id="height" type="number" {...form.register("height")} placeholder="Height in cm" />
                       {form.formState.errors.height && <p className="text-sm text-destructive">{form.formState.errors.height.message}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="weight">Weight (kg)</Label>
                      <Input id="weight" type="number" {...form.register("weight")} placeholder="Weight in kg" />
                       {form.formState.errors.weight && <p className="text-sm text-destructive">{form.formState.errors.weight.message}</p>}
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
                            <Label>Stage of Kidney Disease</Label>
                             <Controller
                                control={form.control}
                                name="stage"
                                render={({ field }) => (
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <SelectTrigger><SelectValue placeholder="Select stage" /></SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Stage 1</SelectItem>
                                            <SelectItem value="2">Stage 2</SelectItem>
                                            <SelectItem value="3">Stage 3</SelectItem>
                                            <SelectItem value="4">Stage 4</SelectItem>
                                            <SelectItem value="5">Stage 5</SelectItem>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {form.formState.errors.stage && <p className="text-sm text-destructive">{form.formState.errors.stage.message}</p>}
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
                           <Label htmlFor="restrictions">Dietary Restrictions</Label>
                           <Textarea id="restrictions" {...form.register("restrictions")} placeholder="e.g., Low potassium, 2000mg sodium limit..." />
                           {form.formState.errors.restrictions && <p className="text-sm text-destructive">{form.formState.errors.restrictions.message}</p>}
                        </div>
                    </div>
                 )}
                 {currentStep === 3 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 animate-in fade-in-50">
                        <div className="space-y-2 md:col-span-2">
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
                             {form.formState.errors.dietType && <p className="text-sm text-destructive">{form.formState.errors.dietType.message}</p>}
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
                            {form.formState.errors.targetWeight && <p className="text-sm text-destructive">{form.formState.errors.targetWeight.message}</p>}
                         </div>
                         <div className="space-y-2">
                           <Label htmlFor="calorieGoal">Daily Calorie Goal (kcal)</Label>
                           <Input id="calorieGoal" type="number" {...form.register("calorieGoal")} placeholder="e.g., 2000" />
                            {form.formState.errors.calorieGoal && <p className="text-sm text-destructive">{form.formState.errors.calorieGoal.message}</p>}
                         </div>
                         <div className="space-y-2 md:col-span-2">
                           <Label htmlFor="proteinGoal">Daily Protein Goal (g)</Label>
                           <Input id="proteinGoal" type="number" {...form.register("proteinGoal")} placeholder="e.g., 80" />
                            {form.formState.errors.proteinGoal && <p className="text-sm text-destructive">{form.formState.errors.proteinGoal.message}</p>}
                         </div>
                    </div>
                 )}
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-6">
                <div>
                    {currentStep > 1 && <Button type="button" variant="outline" onClick={handleBack}>Back</Button>}
                </div>
                <Button type="button" onClick={handleNext}>
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
