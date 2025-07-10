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
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useTranslations } from 'next-intl';

export default function SidebarNav() {
  const pathname = usePathname();
  const t = useTranslations('Sidebar');

  const menuItems = [
    {
      href: "/",
      label: t('home'),
      icon: Home,
    },
    {
      href: "/dashboard",
      label: t('dashboard'),
      icon: LayoutDashboard,
    },
    {
      href: "/my-profile",
      label: t('myProfile'),
      icon: User,
    },
    {
      href: "/diet-plan",
      label: t('dietPlan'),
      icon: BookUser,
    },
    {
      href: "/weekly-plan",
      label: t('weeklyPlan'),
      icon: CalendarDays,
    },
    {
      href: "/my-meal-tracker",
      label: t('myMealTracker'),
      icon: ClipboardList,
    },
    {
      href: "/recognize-food",
      label: t('foodLens'),
      icon: Camera,
    },
    {
      href: "/food-database",
      label: t('foodDatabase'),
      icon: Database,
    },
  ];

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <Link href={item.href}>
            <SidebarMenuButton
              isActive={pathname === item.href || pathname.startsWith(`${item.href}/`)}
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