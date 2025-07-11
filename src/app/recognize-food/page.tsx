
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { recognizeFoodImage, type RecognizeFoodImageOutput } from "@/ai/flows/recognize-food-image";
import { Camera, Loader2, Sparkles, Utensils, CheckCircle2 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { useProfile } from "@/context/profile-context";
import { MealCategory } from "../my-meal-tracker/page";

export default function RecognizeFoodPage() {
  const { activeProfile, updateDailyLog, getDailyLog } = useProfile();
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<RecognizeFoodImageOutput | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        toast({
          variant: "destructive",
          title: "Camera Not Supported",
          description: "Your browser does not support camera access.",
        });
        setHasCameraPermission(false);
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasCameraPermission(true);
      } catch (error) {
        console.error("Error accessing camera:", error);
        setHasCameraPermission(false);
        toast({
          variant: "destructive",
          title: "Camera Access Denied",
          description: "Please enable camera permissions in your browser settings to use this feature.",
        });
      }
    };
    getCameraPermission();
  }, [toast]);

  const handleCaptureAndRecognize = async () => {
    if (!videoRef.current || !canvasRef.current) return;
    setIsLoading(true);
    setAnalysisResult(null);

    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    
    const photoDataUri = canvas.toDataURL("image/jpeg");

    try {
      const result = await recognizeFoodImage({ photoDataUri });
      if (result.isFood) {
        setAnalysisResult(result);
        toast({
          title: "Meal Identified!",
          description: `We found ${result.items.length} item(s) in your meal.`,
        });
      } else {
         toast({
          variant: "destructive",
          title: "No Food Detected",
          description: "We couldn't identify any food in the image. Please try again.",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Recognition Failed",
        description: "Something went wrong while trying to identify the food.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogMeal = () => {
    if (!analysisResult || !activeProfile) {
      toast({ variant: "destructive", title: "Cannot Log Meal", description: "No analysis result or active profile."});
      return;
    }
    
    const today = new Date();
    const currentLog = getDailyLog(activeProfile.id, today) || { meals: { Breakfast: [], Lunch: [], Dinner: [], Snacks: [] }, fluids: [] };
    
    // Simple logic to guess meal category based on time
    const hour = today.getHours();
    let category: MealCategory = "Snacks";
    if (hour >= 5 && hour < 11) category = "Breakfast";
    else if (hour >= 11 && hour < 16) category = "Lunch";
    else if (hour >= 16 && hour < 22) category = "Dinner";

    const newMeals = analysisResult.items.map(item => ({
        ...item,
        id: new Date().toISOString() + Math.random(),
        category: category,
        carbs: 0, // Placeholder as recognize-food doesn't return carbs
    }));

    const updatedLog = { ...currentLog };
    updatedLog.meals[category] = [...updatedLog.meals[category], ...newMeals];
    
    updateDailyLog(activeProfile.id, today, updatedLog);

    toast({
      title: "Meal Logged!",
      description: `${analysisResult.mealName} has been added to ${activeProfile.fullName}'s tracker.`,
    });

    router.push('/my-meal-tracker');
  };
  
    if (!activeProfile) {
        return (
            <div className="flex flex-col w-full">
                <Header
                    title="FoodLens (AI enabled scanning)"
                    description="Point your camera at a meal to identify items and estimate nutrition."
                />
                <main className="flex-1 p-4 md:p-8">
                    <Card className="max-w-2xl mx-auto">
                        <CardHeader>
                            <CardTitle>No Profile Selected</CardTitle>
                            <CardDescription>Please create or select a profile to use the FoodLens feature.</CardDescription>
                        </CardHeader>
                    </Card>
                </main>
            </div>
        )
    }

  return (
    <div className="flex flex-col w-full">
      <Header
        title="FoodLens (AI enabled scanning)"
        description="Point your camera at a meal to identify items and estimate nutrition."
      />
      <main className="flex-1 p-4 md:p-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Camera View</CardTitle>
            <CardDescription>
              Center your meal in the view below and click the button for analysis.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden">
              <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
              <canvas ref={canvasRef} className="hidden" />
              {hasCameraPermission === false && (
                <div className="absolute inset-0 flex items-center justify-center p-4">
                   <Alert variant="destructive">
                    <Camera className="h-4 w-4" />
                    <AlertTitle>Camera Access Required</AlertTitle>
                    <AlertDescription>
                      Please allow camera access in your browser to use this feature.
                    </AlertDescription>
                  </Alert>
                </div>
              )}
               {hasCameraPermission === null && (
                 <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                 </div>
               )}
            </div>
            
            <Button
              onClick={handleCaptureAndRecognize}
              disabled={isLoading || hasCameraPermission !== true}
              className="w-full"
              size="lg"
            >
              {isLoading ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : (
                <Sparkles className="mr-2 h-5 w-5" />
              )}
              Analyze Meal
            </Button>

            {isLoading && (
                <div className="p-4 border rounded-lg space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex justify-between items-center"><Skeleton className="h-5 w-1/3" /> <Skeleton className="h-4 w-1/4" /></div>
                      <div className="flex justify-between items-center"><Skeleton className="h-5 w-1/2" /> <Skeleton className="h-4 w-1/4" /></div>
                    </div>
                </div>
            )}
            
            {analysisResult && !isLoading && (
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-green-900">
                        <CheckCircle2 /> Meal Analysis Complete
                    </CardTitle>
                    <CardDescription className="text-green-800">
                        Here's the nutritional breakdown of your meal: <span className="font-bold">{analysisResult.mealName}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {/* Totals */}
                    <div className="bg-white/60 p-4 rounded-lg">
                        <h4 className="font-bold text-lg mb-2 text-center text-green-900">Meal Totals</h4>
                         <div className="grid grid-cols-3 gap-2 text-center">
                            <div>
                                <p className="text-sm text-muted-foreground">Calories</p>
                                <p className="font-bold text-xl">{Math.round(analysisResult.totalCalories)}</p>
                            </div>
                             <div>
                                <p className="text-sm text-muted-foreground">Protein</p>
                                <p className="font-bold text-xl">{analysisResult.totalProtein.toFixed(1)}g</p>
                            </div>
                             <div>
                                <p className="text-sm text-muted-foreground">Fat</p>
                                <p className="font-bold text-xl">{analysisResult.totalFat.toFixed(1)}g</p>
                            </div>
                        </div>
                    </div>

                    {/* Items list */}
                    <div>
                         <h4 className="font-semibold text-md mb-2 text-green-900">Identified Items</h4>
                         <div className="space-y-2">
                             {analysisResult.items.map((item, index) => (
                                <div key={index} className="p-3 rounded-md bg-white/80 flex justify-between items-center">
                                    <p className="font-semibold">{item.name}</p>
                                    <div className="text-right text-xs text-muted-foreground">
                                        <p>{Math.round(item.calories)} kcal</p>
                                        <p>P: {item.protein.toFixed(1)}g, F: {item.fat.toFixed(1)}g</p>
                                    </div>
                                </div>
                             ))}
                         </div>
                    </div>
                    <Button onClick={handleLogMeal} className="w-full">
                        <Utensils className="mr-2 h-4 w-4" /> Log this meal for {activeProfile.fullName}
                    </Button>
                </CardContent>
              </Card>
            )}

          </CardContent>
        </Card>
      </main>
    </div>
  );
}
