
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BookUser,
  ClipboardList,
  LayoutDashboard,
  User,
  Database,
  HeartPulse,
  Home,
  CalendarDays,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
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
    href: "/meal-logging",
    label: "Meal Logging",
    icon: ClipboardList,
  },
  {
    href: "/food-database",
    label: "Food Database",
    icon: Database,
  },
];

const Logo = () => (
    <div className="flex items-center justify-center p-2 rounded-full bg-sidebar-primary">
        <HeartPulse className="w-8 h-8 text-sidebar-primary-foreground" />
    </div>
);

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r" collapsible="icon">
      <SidebarHeader>
        <div className="flex w-full items-center gap-2 p-2">
            <Logo />
            <div className="group-data-[collapsible=icon]:hidden">
                <span className="text-lg font-semibold text-sidebar-foreground">KidneyWise</span>
            </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={pathname === item.href}
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
      </SidebarContent>
    </Sidebar>
  );
}
