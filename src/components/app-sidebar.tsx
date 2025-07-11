
"use client";

import {
  HeartPulse,
  Users,
  UserPlus
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import dynamic from 'next/dynamic';
import { Skeleton } from "./ui/skeleton";
import Link from 'next/link';
import { useProfile } from "@/context/profile-context";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";


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


const ProfileSwitcher = () => {
    const { profiles, activeProfile, setActiveProfileId } = useProfile();
    const router = useRouter();

    if (profiles.length === 0) {
        return (
            <div className="p-2">
                <Link href="/my-profile" passHref>
                    <Button className="w-full">
                        <UserPlus className="mr-2 h-4 w-4" />
                        Create Profile
                    </Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="p-2 space-y-2">
            <div className="group-data-[collapsible=icon]:hidden">
                <label className="text-xs text-sidebar-foreground/70 px-2">Active Profile</label>
                <Select value={activeProfile?.id} onValueChange={setActiveProfileId}>
                    <SelectTrigger className="bg-sidebar-accent border-sidebar-border text-sidebar-accent-foreground">
                        <SelectValue placeholder="Select a profile" />
                    </SelectTrigger>
                    <SelectContent>
                        {profiles.map(profile => (
                            <SelectItem key={profile.id} value={profile.id}>{profile.fullName}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center hidden">
                 <Button variant="ghost" size="icon" onClick={() => router.push('/profiles')} className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                    <Users />
                 </Button>
            </div>
        </div>
    )
}

export default function AppSidebar() {
  return (
    <Sidebar className="border-r" collapsible="icon">
      <SidebarHeader>
        <Link href="/" className="flex w-full items-center gap-2 p-2">
            <Logo />
            <div className="group-data-[collapsible=icon]:hidden">
                <span className="text-lg font-semibold text-sidebar-foreground">KidneyWise Diet</span>
            </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <ProfileSwitcher />
        <SidebarNav />
      </SidebarContent>
    </Sidebar>
  );
}
