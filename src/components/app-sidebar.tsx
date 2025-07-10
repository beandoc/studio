"use client";

import {
  HeartPulse,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import dynamic from 'next/dynamic';
import { Skeleton } from "./ui/skeleton";

const SidebarNav = dynamic(() => import('./sidebar-nav'), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col gap-1 p-2">
      {[...Array(7)].map((_, i) => (
        <Skeleton key={i} className="h-10 w-full" />
      ))}
    </div>
  )
});


const Logo = () => (
    <div className="flex items-center justify-center p-2 rounded-full bg-sidebar-primary">
        <HeartPulse className="w-8 h-8 text-sidebar-primary-foreground" />
    </div>
);

export default function AppSidebar() {
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
        <SidebarNav />
      </SidebarContent>
    </Sidebar>
  );
}
