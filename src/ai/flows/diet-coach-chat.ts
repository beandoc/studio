
'use server';
/**
 * @fileOverview An AI Diet Coach that can answer user questions about food items using a food database tool, personalized to the user's health profile.
 *
 * - chat - The main chat function.
 * - ChatInput - The input schema for the chat function.
 */
import { ai } from '@/ai/genkit';
import { foodService } from '@/services/food-service';
import { z } from 'zod';
import type { Message } from "genkit/experimental/ai";


const ChatInputSchema = z.object({
  history: z.array(
    z.object({
      role: z.enum(['user', 'model', 'tool']),
      content: z.array(
          z.object({
              text: z.string().optional(),
              toolRequest: z.any().optional(),
              toolResponse: z.any().optional(),
          })
      ),
    })
  ),
  profile: z.any().describe("The user's full health profile object."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;


// Define the tool for the AI to use
const getFoodData = ai.defineTool(
  {
    name: 'getFoodData',
    description: 'Provides nutritional information for a given food item name. Use this tool whenever the user asks about the nutrition of a specific food.',
    inputSchema: z.object({
      foodName: z.string().describe('The name of the food item to look up. Should be a reasonably specific name.'),
    }),
    outputSchema: z.string().describe("A JSON string containing the nutritional data for the food, or a message indicating the food was not found."),
  },
  async (input) => {
    const foodDb = foodService.getFoodDatabase();
    const searchTerm = input.foodName.toLowerCase();
    
    // Find the best match in the database, checking names and aliases
    const foodItem = foodDb.find(food => 
        food.name.toLowerCase().includes(searchTerm) || 
        (food.aliases && food.aliases.some(a => a.toLowerCase().includes(searchTerm)))
    );

    if (foodItem) {
      // Return a simplified version of the food data as a JSON string
      const relevantData = {
        name: foodItem.name,
        servingSize: foodItem.nutritionFacts.servingSize,
        calories: foodItem.nutritionFacts.calories,
        protein: `${foodItem.nutritionFacts.protein.value}g`,
        fat: `${foodItem.nutritionFacts.totalFat.value}g`,
        carbohydrates: `${foodItem.nutritionFacts.totalCarbohydrate.value}g`,
        sodium: `${foodItem.nutritionFacts.sodium.value}mg`,
        potassium: `${foodItem.nutritionFacts.potassium?.value || 'N/A'}mg`,
        summary: foodItem.nutritionSummary.summaryText,
      };
      return JSON.stringify(relevantData);
    } else {
      return JSON.stringify({ error: `Food item "${input.foodName}" not found in the database. I can only provide information on items in my database.` });
    }
  }
);


const dietCoachChat = ai.definePrompt({
    name: 'dietCoachChat',
    system: `You are Krutrim, an expert AI Diet Coach for individuals with kidney health concerns. Your tone is friendly, helpful, and supportive.

    **CRITICAL INSTRUCTIONS**
    1.  **Personalize Every Response:** You will be provided with the user's full health profile in the 'profile' field. You MUST use this information to tailor your advice. Consider their kidney condition, other health issues (like diabetes, high BP), dietary goals (calories, protein, fluid), preferences, and allergies in every response.
    2.  **Use Your Tools:** Your primary function is to answer questions about specific food items by using the 'getFoodData' tool to look up nutritional information from the user's food database.
    3.  **Present Data Clearly:** When you use the tool, present the nutritional information to the user in a clear, easy-to-read format. Do not just output the raw JSON. Crucially, interpret this data in the context of the user's profile. For example, if a food is high in potassium, and the user has a potassium restriction, you MUST point this out.
    4.  **Handle "Not Found" Gracefully:** If a food is not found, politely inform the user.
    5.  **General Knowledge:** For general questions, use your broad knowledge, but always filter it through the lens of the user's health profile. For example, a generally healthy food might not be suitable for someone on dialysis.
    6.  **Safety First:** NEVER provide medical advice. Always defer to a doctor or registered dietitian for medical questions. Frame your answers as helpful suggestions, not prescriptions.

    **USER PROFILE CONTEXT**
    You will be given a 'profile' object with the following structure. Use it to personalize your answers.
    - fullName: string
    - age: number
    - gender: string
    - kidneyCondition: string (e.g., 'chronic_kidney_disease', 'hemodialysis')
    - otherHealthConditions: string[] (e.g., ['diabetes', 'high_bp'])
    - calorieGoal: number
    - proteinGoal: number
    - fluidGoal: number
    - sodiumGoal: number
    - potassiumGoal: number
    - dietType: string (e.g., 'vegetarian')
    - dislikes: string
    - allergies: string`,
    tools: [getFoodData],
});

export async function chat(input: ChatInput) {
    const { history, profile } = input;
    const llmResponse = await ai.generate({
        model: 'googleai/gemini-2.0-flash',
        prompt: {
            system: dietCoachChat.system,
            tools: dietCoachChat.tools,
            prompt: `Here is the user's profile: ${JSON.stringify(profile)}`,
        },
        history: history as Message[],
    });
    return llmResponse.output();
}
