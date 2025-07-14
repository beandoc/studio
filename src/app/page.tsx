
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Stethoscope, User } from "lucide-react";
import Image from "next/image";
import Header from "@/components/header";

export default function WelcomePage() {
  const t = {
    title: "Welcome to KidneyWise Diet",
    description: "Your smart meal companion for kidney health.",
    cardTitle: "Take Control of Your Kidney Health",
    cardDescription: "Manage diet with personalized meal plans, tracking, and smart food suggestions. Select your role to get started.",
    doctorButton: "I'm a Doctor / Dietitian",
    patientButton: "I'm a Patient / User"
  };

  return (
    <div className="flex flex-col w-full">
      <Header
        title={t.title}
        description={t.description}
      />
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-xl w-full">
            <div className="flex flex-col items-center text-center">
                 <Card className="w-full border-0 shadow-none">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-primary">{t.cardTitle}</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground mt-2">
                            {t.cardDescription}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/profiles" passHref>
                                <Button size="lg" className="w-full sm:w-auto">
                                    <Stethoscope className="mr-2 h-5 w-5" />
                                    {t.doctorButton}
                                </Button>
                            </Link>
                             <Link href="/dashboard" passHref>
                                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                                    <User className="mr-2 h-5 w-5" />
                                    {t.patientButton}
                                </Button>
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
    </div>
  );
}
