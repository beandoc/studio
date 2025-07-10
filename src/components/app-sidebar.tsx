
"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BookUser,
  ClipboardList,
  LayoutDashboard,
  Replace,
  User,
  CalendarDays,
  Database,
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
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/diet-plan",
    label: "Meal Planner",
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
    href: "/meal-alternatives",
    label: "Meal Alternatives",
    icon: Replace,
  },
  {
    href: "/food-database",
    label: "Food Database",
    icon: Database,
  },
  {
    href: "/my-profile",
    label: "My Profile",
    icon: User,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r" collapsible="icon">
      <SidebarHeader>
        <div className="flex flex-col items-center gap-2 p-4 font-headline text-center">
            <div className="flex items-center gap-2">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    className="w-8 h-8 text-sidebar-primary"
                    >
                    <path d="M240 128a16 16 0 0 1-16 16h-16v16a16 16 0 0 1-32 0v-16h-16a16 16 0 0 1 0-32h16v-16a16 16 0 0 1 32 0v16h16a16 16 0 0 1 16 16Zm-98.78-74.18a113.82 113.82 0 0 0-82.44 82.44L12.06 148.5a16 16 0 0 0 5.46 21.9l48 32A16 16 0 0 0 84.8 200h86.4a16 16 0 0 0 15.28-20.25l-20.57-82.27a16 16 0 0 0-19.5-12.28l-40.23 10-30.17-7.54a81.91 81.91 0 0 1 54.7-54.7Z"/>
                </svg>
                <span className="text-lg font-semibold text-sidebar-primary-foreground">Kidney Diet Planner</span>
            </div>
          <p className="text-xs text-sidebar-primary-foreground/80">Your kidney-friendly meal companion</p>
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
