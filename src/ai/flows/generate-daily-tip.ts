
'use server';

/**
 * @fileOverview Generates a personalized daily health tip for a user based on their profile.
 *
 * - generateDailyTip - A function that handles the tip generation.
 * - GenerateDailyTipOutput - The return type for the function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';
import type { ProfileWithId } from '@/context/profile-context';

const GenerateDailyTipOutputSchema = z.object({
  tip: z.string().describe("A short, actionable, and personalized health tip."),
});
export type GenerateDailyTipOutput = z.infer<typeof GenerateDailyTipOutputSchema>;

export async function generateDailyTip(profile: ProfileWithId): Promise<GenerateDailyTipOutput> {
  return generateDailyTipFlow(profile);
}

const generateDailyTipFlow = ai.defineFlow(
  {
    name: 'generateDailyTipFlow',
    inputSchema: z.any(), // We pass the full profile object, which is complex
    outputSchema: GenerateDailyTipOutputSchema,
  },
  async (profile) => {

    const profileContext = `
      - Health Context:
        - Kidney Condition: ${profile.kidneyCondition?.replace(/_/g, ' ') || 'Not specified'}
        - Other Health Conditions: ${profile.otherHealthConditions?.join(', ').replace(/_/g, ' ') || 'None'}
      - Goals:
        - Daily Calorie Goal: ~${profile.calorieGoal || '2000'} kcal
        - Daily Protein Goal: ~${profile.proteinGoal || '80'} g
        - Daily Fluid Goal: ${profile.fluidGoal || '2000'} ml
        - Daily Sodium Goal: ${profile.sodiumGoal ? `${profile.sodiumGoal}mg (low sodium)` : 'Standard sodium'}
        - Daily Potassium Goal: ${profile.potassiumGoal ? `${profile.potassiumGoal}mg (potassium restricted)` : 'Standard potassium'}
    `;

    const prompt = ai.definePrompt({
      name: 'dailyHealthTipPrompt',
      output: { schema: GenerateDailyTipOutputSchema },
      prompt: `
        You are a friendly and encouraging AI dietitian. Your role is to provide a single, short, personalized, and actionable health tip for the user based on their profile.
        
        Keep the tip concise (1-2 sentences) and easy to understand.
        Focus on one specific aspect of their profile.
        Vary the tips day-to-day.
        
        User Profile Information:
        ${profileContext}

        Example Tips:
        - "Struggling to meet your fluid goal? Try carrying a water bottle with you and sipping throughout the day!"
        - "To keep your potassium levels in check, consider swapping potatoes for cauliflower or white rice today."
        - "A great way to meet your protein goal is to include a small portion of dal or a hard-boiled egg with your lunch."
        - "Remember that sauces can be high in sodium. A squeeze of lemon can be a great way to add flavor instead!"
      `,
    });

    const { output } = await prompt({});
    return output!;
  }
);
