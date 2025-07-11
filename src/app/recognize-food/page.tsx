
"use client";

import { useState, useRef, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { recognizeFoodImage, type RecognizeFoodImageOutput } from "@/ai/flows/recognize-food-image";
import { Camera, Loader2, Sparkles, Utensils, CheckCircle2, Upload, CalendarIcon, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { useProfile } from "@/context/profile-context";
import { MealCategory } from "../my-meal-tracker/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";


const MEAL_CATEGORIES: MealCategory[] = ["Breakfast", "Lunch", "Dinner", "Morning Snack", "Afternoon Snack", "Evening Snack"];

export default function RecognizeFoodPage() {
  const { activeProfile, updateDailyLog, getDailyLog } = useProfile();
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<RecognizeFoodImageOutput | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  
  const [logDate, setLogDate] = useState<Date>(new Date());
  const [mealCategory, setMealCategory] = useState<MealCategory>("Lunch");

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const { toast } = useToast();
  const router = useRouter();

  const getCameraPermission = async () => {
    if (hasCameraPermission) return;
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

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
        setAnalysisResult(null); // Clear previous results
      };
      reader.readAsDataURL(file);
    }
  };

  const recognizeImage = async (photoDataUri: string) => {
    setIsLoading(true);
    setAnalysisResult(null);

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
          description: "We couldn't identify any food in the image. Please try again with a clearer picture.",
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
  
  const handleCaptureAndRecognize = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    
    const photoDataUri = canvas.toDataURL("image/jpeg");
    setUploadedImage(photoDataUri); // also set the image for display
    recognizeImage(photoDataUri);
  }
  
  const handleUploadAndRecognize = () => {
    if (uploadedImage) {
        recognizeImage(uploadedImage);
    } else {
        toast({
            variant: "destructive",
            title: "No Image Selected",
            description: "Please upload an image file first."
        });
    }
  };


  const handleLogMeal = () => {
    if (!analysisResult) return;

    if (!activeProfile) {
      toast({
        title: "No Profile Selected",
        description: "Please select or create a profile to log this meal.",
        action: (
          <Button onClick={() => router.push('/profiles')}>Go to Profiles</Button>
        ),
      });
      return;
    }
    
    const currentLog = getDailyLog(activeProfile.id, logDate) || { meals: { Breakfast: [], Lunch: [], Dinner: [], "Morning Snack": [], "Afternoon Snack": [], "Evening Snack": [] }, fluids: [] };
    
    // The AI doesn't return carbs, so we'll need to calculate it.
    // Calorie breakdown: 1g Protein = 4 cal, 1g Fat = 9 cal
    const newMeals = analysisResult.items.map(item => {
        const caloriesFromProtein = item.protein * 4;
        const caloriesFromFat = item.fat * 9;
        const remainingCalories = item.calories - caloriesFromProtein - caloriesFromFat;
        const carbs = remainingCalories > 0 ? remainingCalories / 4 : 0;

        return {
            ...item,
            id: new Date().toISOString() + Math.random(),
            category: mealCategory,
            carbs: carbs,
        };
    });

    const updatedLog = { ...currentLog };
    
    if (!updatedLog.meals[mealCategory]) {
      updatedLog.meals[mealCategory] = [];
    }
    updatedLog.meals[mealCategory] = [...updatedLog.meals[mealCategory], ...newMeals];
    
    updateDailyLog(activeProfile.id, logDate, updatedLog);

    toast({
      title: "Meal Logged!",
      description: `${analysisResult.mealName} has been added to ${activeProfile.fullName}'s tracker for ${format(logDate, 'PPP')}.`,
    });

    router.push('/my-meal-tracker');
  };

  return (
    <div className="flex flex-col w-full">
      <Header
        title="FoodLens (AI enabled scanning)"
        description="Point your camera at a meal to identify items and estimate nutrition."
      />
      <main className="flex-1 p-4 md:p-8">
        <Card className="max-w-2xl mx-auto">
          <Tabs defaultValue="camera" className="w-full">
            <CardHeader>
               <CardTitle>Scan Your Meal</CardTitle>
                <div className="flex justify-between items-end">
                    <CardDescription>
                      Use your camera or upload an image for analysis.
                    </CardDescription>
                     <TabsList>
                        <TabsTrigger value="camera" onClick={getCameraPermission}>Camera</TabsTrigger>
                        <TabsTrigger value="upload">Upload</TabsTrigger>
                    </TabsList>
                </div>
            </CardHeader>
            <CardContent>
                <TabsContent value="camera" className="space-y-4">
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
                        <Camera className="mr-2 h-5 w-5" />
                    )}
                    Analyze from Camera
                    </Button>
                </TabsContent>
                <TabsContent value="upload" className="space-y-4">
                   <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden flex items-center justify-center">
                        {uploadedImage ? (
                            <Image src={uploadedImage} alt="Uploaded meal" layout="fill" objectFit="contain" />
                        ) : (
                            <div className="text-center text-muted-foreground p-4">
                                <Upload className="mx-auto h-12 w-12" />
                                <p>Upload an image to start analysis</p>
                            </div>
                        )}
                    </div>
                     <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="picture">Picture</Label>
                        <Input id="picture" type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
                    </div>
                    <Button
                        onClick={handleUploadAndRecognize}
                        disabled={isLoading || !uploadedImage}
                        className="w-full"
                        size="lg"
                    >
                        {isLoading ? (
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        ) : (
                            <Sparkles className="mr-2 h-5 w-5" />
                        )}
                        Analyze Uploaded Image
                    </Button>
                </TabsContent>

                {isLoading && (
                    <div className="mt-6 p-4 border rounded-lg space-y-4">
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
                <Card className="mt-6 bg-green-50 border-green-200">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-green-900">
                            <CheckCircle2 /> Meal Analysis Complete
                        </CardTitle>
                        <CardDescription className="text-green-800">
                            Here's the nutritional breakdown of your meal: <span className="font-bold">{analysisResult.mealName}</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
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
                        <div>
                            <h4 className="font-semibold text-md mb-2 text-green-900">Identified Items</h4>
                            <div className="space-y-2">
                                {analysisResult.items.map((item, index) => (
                                    <div key={index} className="p-3 rounded-md bg-white/80 flex justify-between items-center">
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-right text-xs text-muted-foreground">
                                            {Math.round(item.calories)} kcal | P: {item.protein.toFixed(1)}g, F: {item.fat.toFixed(1)}g
                                        </p>
                                    </div>
                                    <div className="text-right text-xs">
                                        <p className="font-medium text-muted-foreground">Confidence</p>
                                        <p className="font-bold" style={{ color: `hsl(120, ${item.confidenceScore * 100}%, 35%)`}}>
                                            {(item.confidenceScore * 100).toFixed(0)}%
                                        </p>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col sm:flex-row gap-4 items-stretch">
                        <div className="grid grid-cols-2 gap-4 w-full">
                             <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !logDate && "text-muted-foreground"
                                    )}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {logDate ? format(logDate, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                    mode="single"
                                    selected={logDate}
                                    onSelect={(date) => date && setLogDate(date)}
                                    initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                             <Select value={mealCategory} onValueChange={(value: MealCategory) => setMealCategory(value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select meal type" />
                                </SelectTrigger>
                                <SelectContent>
                                    {MEAL_CATEGORIES.map(cat => (
                                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                         <div className="flex gap-2 w-full sm:w-auto">
                            <Button onClick={() => router.push('/my-meal-tracker')} variant="secondary" className="flex-1">
                                <Plus className="mr-2 h-4 w-4" /> 
                                Add Manually
                            </Button>
                            <Button onClick={handleLogMeal} className="flex-1">
                                <Utensils className="mr-2 h-4 w-4" /> 
                                {activeProfile ? `Add to Tracker` : 'Add to Tracker'}
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
                )}

            </CardContent>
          </Tabs>
        </Card>
      </main>
    </div>
  );
}
