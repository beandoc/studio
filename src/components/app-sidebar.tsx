"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  BookUser,
  ClipboardList,
  LayoutDashboard,
  Leaf,
  Replace,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    href: "/diet-plan",
    label: "Diet Plan Generator",
    icon: BookUser,
  },
  {
    href: "/meal-alternatives",
    label: "Meal Alternatives",
    icon: Replace,
  },
  {
    href: "/meal-logging",
    label: "Daily Meal Log",
    icon: ClipboardList,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r" collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-2 p-2 font-headline">
          <Leaf className="w-8 h-8 text-primary" />
          <span className="text-lg font-semibold">KidneyWise Diet</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} passHref legacyBehavior>
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
