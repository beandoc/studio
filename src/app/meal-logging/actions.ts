
'use server'

import { foodDatabase, type FoodItem } from "@/lib/food-data";

export async function searchFood(query: string): Promise<FoodItem[]> {
  if (query.length < 2) {
    return [];
  }
  
  const results = foodDatabase.filter(item => 
    item.name.toLowerCase().includes(query.toLowerCase())
  ).slice(0, 10); // Return top 10 results

  return results;
}

    