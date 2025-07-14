
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
  addFavorite: (profileId: string, foodSlug: string) => void;
  removeFavorite: (profileId: string, foodSlug: string) => void;
  isFavorite: (profileId: string, foodSlug: string) => boolean;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

const safelyParseJSON = (jsonString: string | null, defaultValue: any) => {
    if (!jsonString) return defaultValue;
    try {
        const parsed = JSON.parse(jsonString);
        // Quick validation for diet plan structure
        if (Array.isArray(parsed?.plan)) {
            return parsed;
        }
        if (typeof parsed === 'object' && parsed !== null && Object.keys(parsed).every(key => typeof parsed[key] === 'object' && parsed[key] !== null && Array.isArray(parsed[key].plan))) {
             return parsed; // For dietPlans object
        }
         if (Array.isArray(parsed)) { // For profiles array
            return parsed;
        }

    } catch (e) {
        console.error("Failed to parse JSON from localStorage", e);
    }
    return defaultValue;
}

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<ProfileWithId[]>([]);
  const [activeProfileId, setActiveProfileIdState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [dietPlans, setDietPlans] = useState<Record<string, GenerateDietPlanOutput>>({});
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedProfiles = safelyParseJSON(localStorage.getItem('profiles'), []);
      const storedActiveId = localStorage.getItem('activeProfileId');
      const storedDietPlans = safelyParseJSON(localStorage.getItem('dietPlans'), {});

      setProfiles(storedProfiles);
      setDietPlans(storedDietPlans);
      
      if (storedActiveId && storedProfiles.some((p: ProfileWithId) => p.id === storedActiveId)) {
        setActiveProfileIdState(storedActiveId);
      } else if (storedProfiles.length > 0) {
        setActiveProfileIdState(storedProfiles[0].id);
        localStorage.setItem('activeProfileId', storedProfiles[0].id);
      }

    } catch (e) {
      console.error("Failed to access localStorage", e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const saveItem = (key: string, value: any) => {
      try {
          localStorage.setItem(key, JSON.stringify(value));
      } catch (e) {
          console.error(`Failed to save ${key} to localStorage`, e);
          toast({ variant: 'destructive', title: 'Save Error', description: 'Could not save your changes.' });
      }
  }

  const saveProfiles = (updatedProfiles: ProfileWithId[]) => {
    setProfiles(updatedProfiles);
    saveItem('profiles', updatedProfiles);
  }

  const setActiveProfileId = (id: string | null) => {
    setActiveProfileIdState(id);
    if(id) {
      try {
          localStorage.setItem('activeProfileId', id);
      } catch (e) {
          console.error("Failed to save activeProfileId to localStorage", e);
      }
    } else {
      try {
          localStorage.removeItem('activeProfileId');
      } catch (e) {
          console.error("Failed to remove activeProfileId from localStorage", e);
      }
    }
  };

  const addProfile = (profileData: Profile) => {
    const newProfile: ProfileWithId = { ...profileData, id: new Date().toISOString(), favorites: [] };
    const updatedProfiles = [...profiles, newProfile];
    saveProfiles(updatedProfiles);
    return newProfile.id;
  };

  const removeProfile = (id: string) => {
    const profileToRemove = profiles.find(p => p.id === id);
    if (!profileToRemove) return;

    const updatedProfiles = profiles.filter(p => p.id !== id);
    saveProfiles(updatedProfiles);

    const newDietPlans = { ...dietPlans };
    delete newDietPlans[id];
    setDietPlans(newDietPlans);
    saveItem('dietPlans', newDietPlans);
    
    try {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(`mealLog-${id}-`)) {
                localStorage.removeItem(key);
            }
        });
    } catch(e) {
        console.error("Failed to clear logs from localStorage for deleted profile", e);
    }

    if (activeProfileId === id) {
        const newActiveId = updatedProfiles.length > 0 ? updatedProfiles[0].id : null;
        setActiveProfileId(newActiveId);
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
    saveItem('dietPlans', newDietPlans);
  };
  
  const getDailyLog = useCallback((profileId: string, date: Date): DailyLog | null => {
    try {
        const logKey = `mealLog-${profileId}-${format(date, 'yyyy-MM-dd')}`;
        const storedLog = localStorage.getItem(logKey);
        return storedLog ? safelyParseJSON(storedLog, null) : null;
    } catch (e) {
        console.error("Failed to get daily log from localStorage", e);
        return null;
    }
  }, []);

  const updateDailyLog = useCallback((profileId: string, date: Date, log: DailyLog) => {
    try {
        const logKey = `mealLog-${profileId}-${format(date, 'yyyy-MM-dd')}`;
        localStorage.setItem(logKey, JSON.stringify(log));
    } catch (e) {
        console.error("Failed to save daily log to localStorage", e);
    }
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

  const addFavorite = useCallback((profileId: string, foodSlug: string) => {
    const updatedProfiles = profiles.map(p => {
        if (p.id === profileId) {
            const favorites = p.favorites ? [...p.favorites] : [];
            if (!favorites.includes(foodSlug)) {
                favorites.push(foodSlug);
            }
            return { ...p, favorites };
        }
        return p;
    });
    saveProfiles(updatedProfiles);
  }, [profiles]);

  const removeFavorite = useCallback((profileId: string, foodSlug: string) => {
    const updatedProfiles = profiles.map(p => {
        if (p.id === profileId) {
            const favorites = (p.favorites || []).filter(slug => slug !== foodSlug);
            return { ...p, favorites };
        }
        return p;
    });
    saveProfiles(updatedProfiles);
  }, [profiles]);

  const isFavorite = useCallback((profileId: string, foodSlug: string): boolean => {
    const profile = profiles.find(p => p.id === profileId);
    return profile?.favorites?.includes(foodSlug) || false;
  }, [profiles]);


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
        addFavorite,
        removeFavorite,
        isFavorite
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

    