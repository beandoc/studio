
"use client";

import { useState, useRef, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "@/components/header";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { recognizeFoodImage, type RecognizeFoodImageOutput } from "@/ai/flows/recognize-food-image";
import { Camera, Loader2, Sparkles, Utensils, CheckCircle2, Upload, CalendarIcon, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { useProfile } from "@/context/profile-context";
import { MealCategory, getInitialLog, type LoggedMeal } from "../my-meal-tracker/page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const MEAL_CATEGORIES: MealCategory[] = ["Breakfast", "Lunch", "Dinner", "Morning Snack", "Afternoon Snack", "Evening Snack"];

export default function RecognizeFoodPage() {
  const { activeProfile, updateDailyLog, getDailyLog } = useProfile();
  const [isLoading, setIsLoading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<RecognizeFoodImageOutput | null>(null);
  const [imageUri, setImageUri] = useState<string | null>(null);
  
  const [logDate, setLogDate] = useState<Date>(new Date());
  const [mealCategory, setMealCategory] = useState<MealCategory>("Lunch");
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({});

  const fileInputRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  
  const { toast } = useToast();
  const router = useRouter();
  
  useEffect(() => {
    const getCameraPermission = async () => {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        setHasCameraPermission(false);
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        setHasCameraPermission(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
        setHasCameraPermission(false);
        toast({
          variant: 'destructive',
          title: 'Camera Access Denied',
          description: 'Please enable camera permissions in your browser settings to use this app.',
        });
      }
    };

    getCameraPermission();

    return () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
        }
    }
  }, [toast]);


  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setImageUri(result);
        setAnalysisResult(null); 
        recognizeImage(result);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleCapture = () => {
    if (videoRef.current && canvasRef.current) {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        const context = canvas.getContext('2d');
        
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context?.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        
        const dataUri = canvas.toDataURL('image/jpeg');
        setImageUri(dataUri);
        setAnalysisResult(null);
        recognizeImage(dataUri);
    }
  };


  const recognizeImage = async (photoDataUri: string) => {
    setIsLoading(true);
    setAnalysisResult(null);

    try {
      const result = await recognizeFoodImage({ photoDataUri });
      if (result.isFood) {
        setAnalysisResult(result);
        const initialSelection: Record<string, boolean> = {};
        result.items.forEach(item => {
            initialSelection[item.name] = true;
        });
        setSelectedItems(initialSelection);
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
         setImageUri(null);
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Recognition Failed",
        description: "Something went wrong while trying to identify the food.",
      });
      setImageUri(null);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleLogMeal = () => {
    if (!analysisResult || !activeProfile) {
      if (!activeProfile) {
          toast({
              variant: "destructive",
              title: "No Profile Selected",
              description: "Please select or create a profile to log this meal.",
              action: (
              <Button onClick={() => router.push('/profiles')}>Go to Profiles</Button>
              ),
          });
      }
      return;
    }
    
    const itemsToLog = analysisResult.items.filter(item => selectedItems[item.name]);

    if(itemsToLog.length === 0) {
        toast({
            variant: "destructive",
            title: "No Items Selected",
            description: "Please select at least one food item to log.",
        });
        return;
    }

    const existingLog = getDailyLog(activeProfile.id, logDate) || getInitialLog();
    const updatedLog = JSON.parse(JSON.stringify(existingLog));

    itemsToLog.forEach(item => {
        const caloriesFromProteinAndFat = (item.protein * 4) + (item.fat * 9);
        const remainingCalories = item.calories - caloriesFromProteinAndFat;
        const calculatedCarbs = remainingCalories > 0 ? remainingCalories / 4 : 0;
        
        const newMeal: LoggedMeal = {
            id: new Date().toISOString() + Math.random(),
            category: mealCategory,
            name: item.name,
            calories: item.calories,
            protein: item.protein,
            fat: item.fat,
            carbs: calculatedCarbs,
        };
        updatedLog.meals[mealCategory].push(newMeal);
    });
    
    updateDailyLog(activeProfile.id, logDate, updatedLog);

    toast({
      title: "Meal Logged!",
      description: `${itemsToLog.length} item(s) have been added to ${activeProfile.fullName}'s tracker for ${format(logDate, 'PPP')}.`,
    });

    router.push('/my-meal-tracker');
  };

  const handleToggleItem = (itemName: string) => {
    setSelectedItems(prev => ({ ...prev, [itemName]: !prev[itemName] }));
  };

  const calculatedTotals = analysisResult?.items.reduce((acc, item) => {
    if (selectedItems[item.name]) {
        const caloriesFromProteinAndFat = (item.protein * 4) + (item.fat * 9);
        const remainingCalories = item.calories - caloriesFromProteinAndFat;
        const calculatedCarbs = remainingCalories > 0 ? remainingCalories / 4 : 0;

        acc.calories += item.calories;
        acc.protein += item.protein;
        acc.fat += item.fat;
        acc.carbs += calculatedCarbs;
    }
    return acc;
  }, { calories: 0, protein: 0, fat: 0, carbs: 0 });

  return (
    <div className="flex flex-col w-full">
      <Header
        title="FoodLens AI Scanner"
        description="Snap a picture of your meal to identify items and estimate nutrition."
      />
      <main className="flex-1 p-4 md:p-8">
        <Card className="max-w-2xl mx-auto">
            <CardHeader>
               <CardTitle>Scan Your Meal</CardTitle>
                <CardDescription>
                  Use your camera for a live scan or upload an image for analysis.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="upload" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="upload"><Upload className="mr-2 h-4 w-4" /> Upload</TabsTrigger>
                        <TabsTrigger value="camera"><Camera className="mr-2 h-4 w-4" /> Camera</TabsTrigger>
                    </TabsList>
                    <TabsContent value="upload">
                        <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden flex items-center justify-center border-2 border-dashed mt-4">
                            {imageUri ? (
                                <Image src={imageUri} alt="Uploaded meal" layout="fill" objectFit="contain" />
                            ) : (
                                <div className="text-center text-muted-foreground p-4">
                                    <Upload className="mx-auto h-12 w-12" />
                                    <p className="mt-2">Image preview will appear here</p>
                                </div>
                            )}
                        </div>
                        <div className="mt-4">
                            <Label htmlFor="picture-upload" className={cn(buttonVariants({ size: "lg" }), "w-full cursor-pointer")}>
                                <Upload className="mr-2 h-5 w-5" />
                                {imageUri ? "Upload a Different Image" : "Upload Image"}
                            </Label>
                            <Input id="picture-upload" type="file" accept="image/*" onChange={handleFileChange} ref={fileInputRef} className="hidden"/>
                        </div>
                    </TabsContent>
                    <TabsContent value="camera">
                        <div className="relative aspect-video w-full bg-muted rounded-md overflow-hidden flex items-center justify-center border-2 border-dashed mt-4">
                           <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted playsInline />
                           <canvas ref={canvasRef} className="hidden" />
                           {hasCameraPermission === false && (
                               <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/50">
                                   <Alert variant="destructive" className="max-w-sm">
                                       <AlertTitle>Camera Access Required</AlertTitle>
                                       <AlertDescription>
                                           Please allow camera access in your browser settings to use this feature.
                                       </AlertDescription>
                                   </Alert>
                               </div>
                           )}
                        </div>
                        <div className="mt-4">
                           <Button size="lg" className="w-full" onClick={handleCapture} disabled={hasCameraPermission !== true || isLoading}>
                               <Camera className="mr-2 h-5 w-5" />
                               Capture Photo
                           </Button>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>

                {isLoading && (
                    <CardFooter>
                      <div className="w-full p-4 border rounded-lg space-y-4">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Loader2 className="h-5 w-5 animate-spin" />
                            <p className="font-semibold">Analyzing your meal...</p>
                          </div>
                          <Skeleton className="h-8 w-3/4" />
                          <Separator />
                          <div className="space-y-3">
                            <div className="flex justify-between items-center"><Skeleton className="h-5 w-1/3" /> <Skeleton className="h-4 w-1/4" /></div>
                            <div className="flex justify-between items-center"><Skeleton className="h-5 w-1/2" /> <Skeleton className="h-4 w-1/4" /></div>
                          </div>
                      </div>
                    </CardFooter>
                )}
                
                {analysisResult && !isLoading && (
                <div className="border-t">
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-primary">
                          <CheckCircle2 /> Meal Analysis Complete
                      </CardTitle>
                      <CardDescription>
                          We've identified your meal as: <span className="font-bold">{analysisResult.mealName}</span>. Select the items you want to log.
                      </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-md mb-2 text-card-foreground">Select Items to Log</h4>
                          <div className="space-y-2">
                              {analysisResult.items.map((item, index) => (
                                  <div key={index} className="p-3 rounded-md bg-muted flex items-center gap-4">
                                      <Checkbox
                                          id={`item-${index}`}
                                          checked={!!selectedItems[item.name]}
                                          onCheckedChange={() => handleToggleItem(item.name)}
                                      />
                                      <label htmlFor={`item-${index}`} className="flex-grow flex justify-between items-center cursor-pointer">
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
                                      </label>
                                  </div>
                              ))}
                          </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                          <h4 className="font-bold text-lg mb-2 text-center text-card-foreground">Selected Totals</h4>
                          {calculatedTotals ? (
                              <div className="grid grid-cols-4 gap-2 text-center">
                                  <div>
                                      <p className="text-sm text-muted-foreground">Calories</p>
                                      <p className="font-bold text-xl">{Math.round(calculatedTotals.calories)}</p>
                                  </div>
                                  <div>
                                      <p className="text-sm text-muted-foreground">Protein</p>
                                      <p className="font-bold text-xl">{calculatedTotals.protein.toFixed(1)}g</p>
                                  </div>
                                  <div>
                                      <p className="text-sm text-muted-foreground">Fat</p>
                                      <p className="font-bold text-xl">{calculatedTotals.fat.toFixed(1)}g</p>
                                  </div>
                                  <div>
                                      <p className="text-sm text-muted-foreground">Carbs</p>
                                      <p className="font-bold text-xl">{calculatedTotals.carbs.toFixed(1)}g</p>
                                  </div>
                              </div>
                          ) : <p className="text-center text-muted-foreground">No items selected.</p>}
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
                           <Button onClick={() => setAnalysisResult(null)} variant="outline" className="flex-1">
                                Retake
                           </Button>
                          <Button onClick={handleLogMeal} className="flex-1">
                              <Utensils className="mr-2 h-4 w-4" /> 
                              {activeProfile ? `Add to Tracker` : 'Add to Tracker'}
                          </Button>
                      </div>
                  </CardFooter>
                </div>
                )}
        </Card>
      </main>
    </div>
  );
}
