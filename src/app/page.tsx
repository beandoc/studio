"use client";

import Link from "next/link";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="flex flex-col w-full">
      <Header
        title="Welcome to Flip & Toss"
        description="Your smart meal companion for kidney health."
      />
      <main className="flex-1 p-4 md:p-8 flex items-center justify-center">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-square">
                 <Image
                    src="/welcome-image.png"
                    alt="Flip and Toss app logo"
                    fill
                    className="object-contain rounded-2xl"
                />
            </div>
            <div className="flex flex-col items-start">
                 <Card className="w-full border-0 shadow-none">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-primary">Take Control of Your Kidney Health</CardTitle>
                        <CardDescription className="text-lg text-muted-foreground mt-2">
                            KidneyWise Diet helps you manage your diet with personalized meal plans, tracking, and smart food suggestions. Let's get started by setting up your profile.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/my-profile">
                            <Button size="lg">
                                Create My Profile
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
