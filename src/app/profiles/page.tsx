
"use client";

import { useState } from "react";
import Link from "next/link";
import { useProfile } from "@/context/profile-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle, User, CheckCircle, Search } from "lucide-react";
import Header from "@/components/header";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function ProfilesPage() {
  const { profiles, activeProfileId, setActiveProfileId } = useProfile();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSelectProfile = (id: string) => {
    setActiveProfileId(id);
    router.push("/dashboard");
  }

  const filteredProfiles = profiles.filter(profile => 
    profile.fullName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full">
      <Header
        title="Manage Profiles"
        description="Add a new profile or select an existing one to manage."
      />
      <main className="flex-1 p-4 md:p-8">
        <Card className="mb-8">
            <CardContent className="p-4">
                 <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                        placeholder="Search profiles by name..."
                        className="pl-10"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/my-profile" passHref>
            <Card className="h-full flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow cursor-pointer border-2 border-dashed">
              <CardHeader>
                <PlusCircle className="h-12 w-12 text-muted-foreground mx-auto" />
              </CardHeader>
              <CardContent>
                <CardTitle>Add New Profile</CardTitle>
                <CardDescription>Create a new profile for a patient or user.</CardDescription>
              </CardContent>
            </Card>
          </Link>

          {filteredProfiles.map(profile => (
            <Card key={profile.id} className="flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                            <User className="h-5 w-5 text-primary" />
                            {profile.fullName}
                        </CardTitle>
                        <CardDescription>{profile.age} years old, {profile.gender}</CardDescription>
                    </div>
                    {activeProfileId === profile.id && (
                        <CheckCircle className="h-6 w-6 text-green-500" />
                    )}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-sm text-muted-foreground">
                    <strong>Condition:</strong> {profile.kidneyCondition?.replace(/_/g, ' ') || 'N/A'}<br/>
                    <strong>Protein Goal:</strong> {profile.proteinGoal || 'N/A'}g | <strong>Fluid Goal:</strong> {profile.fluidGoal || 'N/A'}ml
                </p>
              </CardContent>
              <CardContent>
                <Button 
                  onClick={() => handleSelectProfile(profile.id)} 
                  className="w-full"
                  variant={activeProfileId === profile.id ? "secondary" : "default"}
                  disabled={activeProfileId === profile.id}
                >
                  {activeProfileId === profile.id ? "Currently Active" : "Set Active & View Dashboard"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {profiles.length > 0 && filteredProfiles.length === 0 && (
             <div className="text-center text-muted-foreground mt-16">
                <p>No profiles match your search.</p>
            </div>
        )}
        {profiles.length === 0 && (
            <div className="text-center text-muted-foreground mt-16">
                <p>No profiles found. Click "Add New Profile" to get started.</p>
            </div>
        )}
      </main>
    </div>
  );
}
