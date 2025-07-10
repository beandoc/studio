
"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { recognizeFoodImage } from "@/ai/flows/recognize-food-image";
import { Camera, Loader2, Sparkles, Send } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function RecognizeFoodPage() {
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [identifiedFood, setIdentifiedFood] = useState<string | null>(null);
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
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
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
    setIdentifiedFood(null);

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
      if (result.foodName.toLowerCase() !== 'no food detected') {
        setIdentifiedFood(result.foodName);
        toast({
          title: "Food Identified!",
          description: `We think you're eating: ${result.foodName}`,
        });
      } else {
         toast({
          variant: "destructive",
          title: "No Food Detected",
          description: "We couldn't identify a food item in the image. Please try again.",
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

  const handleLogFood = () => {
    if (identifiedFood) {
      router.push(`/meal-logging?foodName=${encodeURIComponent(identifiedFood)}`);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Recognize Food with AI"
        description="Point your camera at a food item to identify and log it."
      />
      <main className="flex-1 p-4 md:p-8">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Camera View</CardTitle>
            <CardDescription>
              Center your food item in the view below and click the button.
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
              Recognize Food
            </Button>

            {isLoading && (
                <div className="space-y-2">
                    <Skeleton className="h-6 w-1/2 mx-auto" />
                    <Skeleton className="h-4 w-3/4 mx-auto" />
                </div>
            )}
            
            {identifiedFood && !isLoading && (
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-green-700">Identified as:</p>
                    <p className="font-bold text-lg text-green-900">{identifiedFood}</p>
                  </div>
                  <Button onClick={handleLogFood}>
                      <Send className="mr-2 h-4 w-4"/>
                      Log this food
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
