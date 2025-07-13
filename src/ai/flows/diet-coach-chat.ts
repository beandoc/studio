
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
  history: z.array(z.custom<Message>()),
  profile: z.any().describe("The user's full health profile object."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;


// Define the tool for the AI to use
const getFoodData = ai.defineTool(
  {
    name: 'getFoodData',
    description: `Provides nutritional information for a given food item name. Use this tool ONLY when the user asks about the nutrition of a specific food. 
    **CRITICAL**: After receiving the JSON output from this tool, you MUST interpret the data in the context of the user's profile and health goals. 
    DO NOT simply output the raw JSON. Formulate a friendly, helpful, and personalized response based on the nutritional data and the user's needs (e.g., "Paneer is a great source of protein, but it is high in fat. Given your health goals, you might want to have it in moderation.")`,
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


const dietCoachSystemPrompt = `You are Krutrim, an expert AI Diet Coach for individuals with kidney health concerns. Your tone is friendly, helpful, and supportive.

**CRITICAL INSTRUCTIONS**
1.  **Personalize Every Response:** You will be provided with the user's full health profile. You MUST use this information to tailor your advice. Consider their kidney condition, other health issues (like diabetes, high BP), dietary goals (calories, protein, fluid), preferences, and allergies in every response.
2.  **Use Your Tools for Food Lookups:** If the user asks about the nutritional content of a specific food (e.g., "How much protein in paneer?"), you MUST use the 'getFoodData' tool.
3.  **Answer General Questions Directly**: If the user asks a general question (e.g., "how much protein can I eat in a day?"), you must answer it using their profile information and your general knowledge. DO NOT use the tool for general questions.
4.  **Interpret Data and Present Clearly:** When you use the tool, you will receive JSON data. You MUST NOT output the raw JSON. Your job is to interpret this data in the context of the user's profile and present it in a clear, easy-to-read format. For example, if a food is high in potassium, and the user has a potassium restriction, you MUST point this out.
5.  **Handle "Not Found" Gracefully:** If a food is not found using the tool, politely inform the user.
6.  **Safety First:** NEVER provide medical advice. Always defer to a doctor or registered dietitian for medical questions. Frame your answers as helpful suggestions, not prescriptions.
`;

export async function chat(input: ChatInput) {
    const { history, profile } = input;
    
    // The last message in the history is the current user's query.
    const lastUserMessage = history[history.length - 1]?.content[0]?.text || '';
    
    const llmResponse = await ai.generate({
        model: 'googleai/gemini-2.0-flash',
        system: dietCoachSystemPrompt,
        tools: [getFoodData],
        prompt: `Here is the user's profile: ${JSON.stringify(profile)}\n\nUser's question: "${lastUserMessage}"`,
        history: history as Message[],
    });
    
    return llmResponse.output;
}
