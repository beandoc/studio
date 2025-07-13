
'use server';
/**
 * @fileOverview An AI Diet Coach that can answer user questions about food items using a food database tool, personalized to the user's health profile.
 *
 * - chat - The main chat function.
 * - ChatInput - The input schema for the chat function.
 */
import { ai } from '@/ai/genkit';
import { FoodService } from '@/lib/food-service';
import { z } from 'zod';
import type { Message } from "genkit/experimental/ai";
import type { MealCategory } from '@/lib/food-data';


const ChatInputSchema = z.object({
  history: z.array(z.custom<Message>()).describe("The history of the conversation, with the last message being the user's current query."),
  profile: z.any().describe("The user's full health profile object."),
  // User-specific overrides for the food database
  aliasOverrides: z.record(z.array(z.string())).optional().describe("A map of food slugs to their user-defined aliases."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;


// Define the tool for the AI to use
const getFoodData = ai.defineTool(
  {
    name: 'getFoodData',
    description: `Provides nutritional information for a given food item name. Use this tool ONLY when the user asks about the nutrition of a specific food. 
    **CRITICAL**: After receiving the JSON output from this tool, you MUST interpret the data in the context of the user's profile and health goals. 
    DO NOT simply output the raw JSON. Formulate a friendly, helpful, and personalized response based on the nutritional data and the user's needs (e.g., "Paneer is a great source of protein, but it is high in fat. Given your health goals, you might want to have it in moderation.").
    If the JSON contains an error message (e.g., 'Food item "..." not found'), you MUST politely inform the user that you could not find the food in your database.`,
    inputSchema: z.object({
      foodName: z.string().describe('The name of the food item to look up. Should be a reasonably specific name.'),
      // The user's alias overrides are passed in here from the main chat function
      aliasOverrides: z.record(z.array(z.string())).optional(),
    }),
    outputSchema: z.string().describe("A JSON string containing the nutritional data for the food, or a message indicating the food was not found."),
  },
  async (input) => {
    // Instantiate a food service with the user's specific alias overrides
    const userFoodService = new FoodService({}, input.aliasOverrides);
    const foodDb = userFoodService.getFoodDatabase();
    
    const searchTerm = input.foodName.toLowerCase().trim();
    
    // Improved search logic:
    // 1. Look for an exact match first (case-insensitive).
    let foodItem = foodDb.find(food => food.name.toLowerCase() === searchTerm);

    // 2. If no exact match, look for a whole word match in name or aliases (case-insensitive).
    if (!foodItem) {
        const searchRegex = new RegExp(`\\b${searchTerm}\\b`, 'i'); // \b is for word boundary, i is for case-insensitive
        foodItem = foodDb.find(food => 
            food.name.toLowerCase().includes(searchTerm) || // Keep simple include for names
            (food.aliases && food.aliases.some(a => searchRegex.test(a.toLowerCase())))
        );
    }
    
    // 3. As a last resort, check if the name includes the search term (case-insensitive).
    if (!foodItem) {
        foodItem = foodDb.find(food => food.name.toLowerCase().includes(searchTerm));
    }


    if (foodItem) {
      // Return a simplified version of the food data as a JSON string
      const relevantData = {
        name: foodItem.name,
        servingSize: food.nutritionFacts.servingSize,
        calories: food.nutritionFacts.calories,
        protein: `${food.nutritionFacts.protein.value}g`,
        fat: `${food.nutritionFacts.totalFat.value}g`,
        carbohydrates: `${food.nutritionFacts.totalCarbohydrate.value}g`,
        sodium: `${food.nutritionFacts.sodium.value}mg`,
        potassium: `${food.nutritionFacts.potassium?.value || 'N/A'}mg`,
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
1.  **Personalize Every Response:** You have been provided with the user's full health profile. You MUST use this information to tailor your advice. Consider their kidney condition, other health issues (like diabetes, high BP), dietary goals (calories, protein, fluid), preferences, and allergies in every response.
2.  **Use Your Tools for Food Lookups:** If the user asks about the nutritional content of a specific food (e.g., "How much protein in paneer?"), you MUST use the 'getFoodData' tool.
3.  **Answer General Questions Directly**: If the user asks a general question (e.g., "how much protein can I eat in a day?"), you must answer it using their profile information and your general knowledge. DO NOT use the tool for general questions.
4.  **Interpret Data and Present Clearly:** When you use the 'getFoodData' tool, you will receive JSON data. You MUST NOT output the raw JSON. Your job is to interpret this data in the context of the user's profile and present it in a clear, easy-to-read format. For example, if a food is high in potassium, and the user has a potassium restriction, you MUST point this out.
5.  **Handle "Not Found" Gracefully:** If a food is not found using the tool, politely inform the user.
6.  **Safety First:** NEVER provide medical advice. Always defer to a doctor or registered dietitian for medical questions. Frame your answers as helpful suggestions, not prescriptions.
`;

/**
 * A robust chat function that uses a system prompt and tools to answer user questions.
 */
export async function chat(input: ChatInput): Promise<Message> {

  // Pass the user's alias overrides to the tool config.
  // This ensures that when the AI decides to call `getFoodData`, it will have the user's custom aliases.
  const toolConfig = {
    getFoodData: {
      aliasOverrides: input.aliasOverrides
    }
  };

  const response = await ai.generate({
      model: 'googleai/gemini-pro',
      system: `${dietCoachSystemPrompt}\n\nHere is the user's profile: ${JSON.stringify(input.profile)}`,
      tools: [getFoodData],
      toolConfig: toolConfig, // Provide the user-specific config to the tool
      history: input.history,
  });

  if (response.output) {
    return response.output;
  }
  
  // If we get here, something went wrong, and the AI didn't provide a valid response.
  return {
    role: 'model',
    content: [{text: "I'm sorry, I encountered an unexpected issue and couldn't generate a response. Please try again."}],
  };
}
