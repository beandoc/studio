
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
import { Progress } from "@/components/ui/progress";

const steps = [
  { id: 1, name: "Basic Info" },
  { id: 2, name: "Kidney Details" },
  { id: 3, name: "Food Preferences" },
  { id: 4, name: "Goals" },
];

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  age: z.coerce.number().min(1, "Age is required"),
  gender: z.string().min(1, "Gender is required"),
  height: z.coerce.number().min(1, "Height is required"),
  weight: z.coerce.number().min(1, "Weight is required"),
  bmi: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function MyProfilePage() {
  const [currentStep, setCurrentStep] = useState(1);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      gender: "",
    },
  });

  const { watch, setValue } = form;
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
    const result = await form.trigger();
    if (result) {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        } else {
            // Handle final submission
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
    // Here you would typically send the data to your backend
  };

  return (
    <div className="flex flex-col w-full bg-background min-h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Kidney Diet Planner</h1>
            <p className="text-sm opacity-90">
              Your kidney-friendly meal companion
            </p>
          </div>
        </div>
      </div>
      <div className="flex-grow p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Let's Get Started</CardTitle>
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                    {steps.map((step, index) => (
                        <div key={step.id} className={`flex-1 text-center ${index < currentStep ? 'text-primary' : 'text-muted-foreground'}`}>
                           <div className={`mx-auto h-8 w-8 rounded-full border-2 flex items-center justify-center mb-1 ${index < currentStep ? 'bg-primary text-primary-foreground border-primary' : 'bg-muted border-border'}`}>
                                {index < currentStep -1 ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                ) : step.id }
                           </div>
                           <p className="text-xs">{step.name}</p>
                        </div>
                    ))}
                </div>
                <Progress value={(currentStep / steps.length) * 100} className="w-full h-1" />
              </div>
            </CardHeader>

            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardContent>
                {currentStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                 {currentStep === 2 && <div>Kidney Details Form</div>}
                 {currentStep === 3 && <div>Food Preferences Form</div>}
                 {currentStep === 4 && <div>Goals Form</div>}

              </CardContent>
              <CardFooter className="flex justify-between">
                {currentStep > 1 && <Button type="button" variant="outline" onClick={handleBack}>Back</Button>}
                <div />
                <Button type="button" onClick={handleNext}>
                  {currentStep === steps.length ? "Finish" : "Next Step"}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
