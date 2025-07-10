"use client";

import { useState, useRef } from "react";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const FormSchema = z.object({
  healthRequirements: z
    .string()
    .min(10, { message: "Please describe your health requirements in more detail." }),
  preferences: z
    .string()
    .min(10, { message: "Please describe your food preferences in more detail." }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function DietPlanPage() {
  const [dietPlan, setDietPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const dietPlanRef = useRef<HTMLDivElement>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      healthRequirements: "",
      preferences: "",
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setDietPlan(null);
    try {
      const result = await generateDietPlan(data);
      setDietPlan(result.dietPlan);
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

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Personalized Diet Plan"
        description="Generate a 7-day kidney-friendly diet plan based on your needs."
      />
      <div className="p-4 md:p-8 grid gap-8">
        <Card>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <CardHeader>
                <CardTitle>Your Details</CardTitle>
                <CardDescription>
                  Provide your health requirements and food preferences below.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                      <FormLabel>Food Preferences</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., Vegetarian, love chicken and fish, dislike spicy food, allergic to nuts..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Tell us about the foods you enjoy or want to avoid.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isLoading}>
                  {isLoading && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Generate Plan
                </Button>
              </CardFooter>
            </form>
          </Form>
        </Card>

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
              <CardTitle>Your 7-Day Diet Plan</CardTitle>
              <Button onClick={handleExportPdf} variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Export as PDF
              </Button>
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
