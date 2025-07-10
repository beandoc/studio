
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
  Droplets,
} from "lucide-react";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    href: "/",
    label: "Home",
    icon: Home,
  },
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/my-profile",
    label: "My Profile",
    icon: User,
  },
  {
    href: "/diet-plan",
    label: "Diet Plan",
    icon: BookUser,
  },
   {
    href: "/weekly-plan",
    label: "Weekly Plan",
    icon: CalendarDays,
  },
  {
    href: "/my-meal-tracker",
    label: "My Meal Tracker",
    icon: ClipboardList,
  },
  {
    href: "/my-meal-tracker",
    label: "Fluid Tracker",
    icon: Droplets,
  },
  {
    href: "/recognize-food",
    label: "Recognize Food",
    icon: Camera,
  },
  {
    href: "/food-database",
    label: "Food Database",
    icon: Database,
  },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.label}>
          <Link href={item.href}>
            <SidebarMenuButton
              isActive={pathname === item.href && (item.href !== '/my-meal-tracker' || item.label === 'My Meal Tracker')}
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
