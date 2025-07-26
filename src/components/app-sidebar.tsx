
"use client";

import {
  Users,
  UserPlus
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarNav from './sidebar-nav';
import Link from 'next/link';
import { useProfile } from "@/context/profile-context";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import Image from "next/image";
import { Label } from "./ui/label";

const Logo = () => (
    <div className="flex items-center justify-center p-1 rounded-full bg-sidebar-primary shrink-0">
        <Image src="/logo.png" alt="Flip and Toss Logo" width={32} height={32} />
    </div>
);


const ProfileSwitcher = () => {
    const { profiles, activeProfile, setActiveProfileId } = useProfile();
    const router = useRouter();

    if (profiles.length === 0) {
        return (
            <div className="p-2">
                <div className="group-data-[collapsible=icon]:hidden">
                    <Link href="/my-profile" passHref>
                        <Button className="w-full">
                            <UserPlus className="mr-2 h-4 w-4" />
                            Create Profile
                        </Button>
                    </Link>
                </div>
                 <div className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center hidden">
                     <Link href="/my-profile" passHref>
                        <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground">
                            <UserPlus />
                        </Button>
                     </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="p-2 space-y-2">
            <div className="group-data-[collapsible=icon]:hidden space-y-1">
                <Label className="text-xs text-sidebar-foreground/70 px-2" htmlFor="profile-switcher">Active Profile</Label>
                <Select value={activeProfile?.id} onValueChange={setActiveProfileId}>
                    <SelectTrigger id="profile-switcher" className="truncate bg-sidebar-accent border-sidebar-border text-sidebar-accent-foreground">
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
                <span className="text-lg font-semibold text-sidebar-foreground">Flip and Toss</span>
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
