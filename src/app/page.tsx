
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Header from "@/components/header";

export default function WelcomePage() {
  const t = {
    title: "Welcome to Flip & Toss",
    description: "Your smart meal companion for kidney health.",
    cardTitle: "Take Control of Your Kidney Health",
    cardDescription: "KidneyWise Diet helps you manage your diet with personalized meal plans, tracking, and smart food suggestions. Let's get started by setting up your profile.",
    getStartedButton: "Let's get started"
  };

  return (
    <div className="flex flex-col w-full">
      <Header
        title={t.title}
        description={t.description}
      />
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square">
                 <Image
                    src="/welcome-image.png"
                    alt="Flip and Toss app logo"
                    fill
                    className="object-contain rounded-2xl"
                    data-ai-hint="logo health"
                />
            </div>
            <div className="flex flex-col items-start">
                 <Card className="w-full border-0 shadow-none">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-primary">{t.cardTitle}</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground mt-2">
                            {t.cardDescription}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/my-profile">
                            <Button size="lg">
                                {t.getStartedButton}
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
    </div>
  );
}
