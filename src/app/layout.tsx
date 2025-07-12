
import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/app-sidebar";
import { Toaster } from "@/components/ui/toaster";
import { ProfileProvider } from "@/context/profile-context";
import { FoodDataProvider } from "@/context/food-context";

export const metadata: Metadata = {
  title: "Flip and Toss",
  description: "Your smart meal companion for kidney health.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <ProfileProvider>
          <FoodDataProvider>
            <SidebarProvider>
              <AppSidebar />
              <SidebarInset>
                {children}
              </SidebarInset>
            </SidebarProvider>
          </FoodDataProvider>
        </ProfileProvider>
        <Toaster />
      </body>
    </html>
  );
}
