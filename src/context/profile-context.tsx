
"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import type { FormValues as Profile } from '@/app/my-profile/page';
import type { GenerateDietPlanOutput } from '@/ai/flows/generate-diet-plan';
import type { DailyLog } from '@/app/my-meal-tracker/page';
import { format, subDays } from 'date-fns';
import { useToast } from '@/hooks/use-toast';


export type ProfileWithId = Profile & { id: string };

type ProfileContextType = {
  profiles: ProfileWithId[];
  activeProfile: ProfileWithId | null;
  activeProfileId: string | null;
  isLoading: boolean;
  dietPlan: GenerateDietPlanOutput | null;
  addProfile: (profile: Profile) => string;
  removeProfile: (id: string) => void;
  setActiveProfileId: (id: string | null) => void;
  setDietPlan: (plan: GenerateDietPlanOutput | null, profileId?: string) => void;
  updateDailyLog: (profileId: string, date: Date, log: DailyLog) => void;
  getDailyLog: (profileId: string, date: Date) => DailyLog | null;
  getProfileLogs: (profileId: string, days: number) => { date: Date; totals: { calories: number; protein: number; fat: number; } }[];
  getRawProfileLogs: (profileId: string, days: number) => DailyLog[];
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<ProfileWithId[]>([]);
  const [activeProfileId, setActiveProfileIdState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dietPlans, setDietPlans] = useState<Record<string, GenerateDietPlanOutput>>({});
  const { toast } = useToast();

  // Load initial data from localStorage
  useEffect(() => {
    try {
      const storedProfiles = localStorage.getItem('profiles');
      const storedActiveId = localStorage.getItem('activeProfileId');
      const storedDietPlans = localStorage.getItem('dietPlans');

      if (storedProfiles) {
        setProfiles(JSON.parse(storedProfiles));
      }

      if (storedActiveId) {
        setActiveProfileIdState(storedActiveId);
      }

      if (storedDietPlans) {
        setDietPlans(JSON.parse(storedDietPlans));
      }
    } catch (e) {
      console.error("Failed to parse data from localStorage", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const setActiveProfileId = (id: string | null) => {
    setActiveProfileIdState(id);
    localStorage.setItem('activeProfileId', id || '');
  };

  const addProfile = (profileData: Profile) => {
    const newProfile: ProfileWithId = { ...profileData, id: new Date().toISOString() };
    const updatedProfiles = [...profiles, newProfile];
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    return newProfile.id;
  };

  const removeProfile = (id: string) => {
    const profileToRemove = profiles.find(p => p.id === id);
    if (!profileToRemove) return;

    // Remove profile from state and localStorage
    const updatedProfiles = profiles.filter(p => p.id !== id);
    setProfiles(updatedProfiles);
    localStorage.setItem('profiles', JSON.stringify(updatedProfiles));

    // Remove associated diet plan and daily logs
    const newDietPlans = { ...dietPlans };
    delete newDietPlans[id];
    setDietPlans(newDietPlans);
    localStorage.setItem('dietPlans', JSON.stringify(newDietPlans));
    
    // Clear logs from localStorage (this might be slow if there are many, but it's thorough)
    Object.keys(localStorage).forEach(key => {
        if (key.startsWith(`mealLog-${id}-`)) {
            localStorage.removeItem(key);
        }
    });

    // If the deleted profile was active, clear the active profile ID
    if (activeProfileId === id) {
        setActiveProfileId(null);
    }
    
    toast({
        title: "Profile Deleted",
        description: `The profile for ${profileToRemove.fullName} has been removed.`
    });
  };

  const setDietPlan = (plan: GenerateDietPlanOutput | null, profileId?: string) => {
    const targetProfileId = profileId || activeProfileId;
    if (!targetProfileId) return;

    const newDietPlans = { ...dietPlans };
    if (plan) {
      newDietPlans[targetProfileId] = plan;
    } else {
      delete newDietPlans[targetProfileId];
    }
    
    setDietPlans(newDietPlans);
    localStorage.setItem('dietPlans', JSON.stringify(newDietPlans));
  };
  
  const getDailyLog = useCallback((profileId: string, date: Date): DailyLog | null => {
    try {
        const logKey = `mealLog-${profileId}-${format(date, 'yyyy-MM-dd')}`;
        const storedLog = localStorage.getItem(logKey);
        return storedLog ? JSON.parse(storedLog) : null;
    } catch (e) {
        console.error("Failed to parse daily log from localStorage", e);
        return null;
    }
  }, []);

  const updateDailyLog = useCallback((profileId: string, date: Date, log: DailyLog) => {
    const logKey = `mealLog-${profileId}-${format(date, 'yyyy-MM-dd')}`;
    localStorage.setItem(logKey, JSON.stringify(log));
  }, []);
  
  const getProfileLogs = useCallback((profileId: string, days: number) => {
    const today = new Date();
    const logs = [];

    for (let i = days - 1; i >= 0; i--) {
        const date = subDays(today, i);
        const storedLog = getDailyLog(profileId, date);

        let totals = { calories: 0, protein: 0, fat: 0 };
        if (storedLog && storedLog.meals) {
            const allMeals = Object.values(storedLog.meals).flat();
            allMeals.forEach(item => {
                totals.calories += item.calories || 0;
                totals.protein += item.protein || 0;
                totals.fat += item.fat || 0;
            });
        }
        logs.push({ date: date, totals });
    }
    return logs;
  }, [getDailyLog]);
  
  const getRawProfileLogs = useCallback((profileId: string, days: number) => {
     const today = new Date();
    const logs: DailyLog[] = [];
     for (let i = 0; i < days; i++) {
      const date = subDays(today, i);
      const log = getDailyLog(profileId, date);
      if (log) {
        logs.push(log);
      }
    }
    return logs;
  }, [getDailyLog]);

  const activeProfile = profiles.find(p => p.id === activeProfileId) || null;
  const dietPlan = activeProfileId ? dietPlans[activeProfileId] : null;

  return (
    <ProfileContext.Provider value={{ 
        profiles, 
        activeProfile, 
        activeProfileId, 
        isLoading,
        dietPlan, 
        addProfile,
        removeProfile,
        setActiveProfileId, 
        setDietPlan,
        updateDailyLog,
        getDailyLog,
        getProfileLogs,
        getRawProfileLogs,
    }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};
