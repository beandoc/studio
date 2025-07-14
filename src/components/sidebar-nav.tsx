
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BookUser,
  ClipboardList,
  LayoutDashboard,
  User,
  Database,
  CalendarDays,
  Camera,
  Info,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export default function SidebarNav() {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/dashboard",
      label: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      href: "/profiles",
      label: "Manage Profiles",
      icon: User,
    },
    {
      href: "/diet-plan",
      label: "Diet Plan Generator",
      icon: BookUser,
    },
    {
      href: "/weekly-plan",
      label: "Weekly Plan",
      icon: CalendarDays,
    },
    {
      href: "/my-meal-tracker",
      label: "Meal Tracker",
      icon: ClipboardList,
    },
    {
      href: "/recognize-food",
      label: "FoodLens Scanner",
      icon: Camera,
    },
    {
      href: "/food-database",
      label: "Food Database",
      icon: Database,
    },
    {
      href: "/health-info",
      label: "Health Info",
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
