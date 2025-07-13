
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BookUser,
  ClipboardList,
  LayoutDashboard,
  User,
  Database,
  Home,
  CalendarDays,
  Camera,
  Bot,
  Info,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export default function SidebarNav() {
  const pathname = usePathname();

  const t = {
    home: "Home",
    dashboard: "Dashboard",
    myProfile: "Manage Profiles",
    dietPlan: "Diet Plan",
    weeklyPlan: "Weekly Plan",
    myMealTracker: "My Meal Tracker",
    foodLens: "FoodLens (AI enabled scanning)",
    foodDatabase: "Food Database",
    dietCoach: "Diet Coach",
    healthInfo: "Health Info",
  };

  const menuItems = [
    {
      href: "/dashboard",
      label: t.dashboard,
      icon: LayoutDashboard,
    },
    {
      href: "/profiles",
      label: t.myProfile,
      icon: User,
    },
    {
      href: "/diet-plan",
      label: t.dietPlan,
      icon: BookUser,
    },
    {
      href: "/weekly-plan",
      label: t.weeklyPlan,
      icon: CalendarDays,
    },
    {
      href: "/my-meal-tracker",
      label: t.myMealTracker,
      icon: ClipboardList,
    },
     {
      href: "/diet-coach",
      label: t.dietCoach,
      icon: Bot,
    },
    {
      href: "/recognize-food",
      label: t.foodLens,
      icon: Camera,
    },
    {
      href: "/food-database",
      label: t.foodDatabase,
      icon: Database,
    },
    {
      href: "/health-info",
      label: t.healthInfo,
      icon: Info,
    },
  ];

  const checkActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  }

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <Link href={item.href}>
            <SidebarMenuButton
              isActive={checkActive(item.href)}
              tooltip={item.label}
              className="justify-start"
            >
              <item.icon className="h-5 w-5" />
              <span>{item.label}</span>
            </SidebarMenuButton>
          </Link>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
