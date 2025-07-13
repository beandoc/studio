
'use server';
/**
 * @fileOverview An AI Diet Coach that can answer user questions about food items using a food database tool.
 *
 * - chat - The main chat function.
 * - chatHistory - A Zod schema for chat history.
 */
import { ai } from '@/ai/genkit';
import { foodService } from '@/services/food-service';
import { z } from 'zod';

const chatHistory = z.array(
  z.object({
    role: z.enum(['user', 'model']),
    content: z.string(),
  })
);

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
      return `Food item "${input.foodName}" not found in the database. I can only provide information on items in my database.`;
    }
  }
);


const chatPrompt = ai.definePrompt({
    name: 'dietCoachChat',
    system: `You are Krutrim, an expert AI Diet Coach for individuals with kidney health concerns. Your tone is friendly, helpful, and supportive.
    - Your primary function is to answer questions about food items by using the 'getFoodData' tool to look up nutritional information from the user's food database.
    - When you use the tool, present the nutritional information to the user in a clear, easy-to-read format. Do not just output the raw JSON.
    - If a food is not found, politely inform the user and suggest they try a different name or check the food database.
    - For general questions not related to specific food items, provide safe, general advice appropriate for kidney patients (e.g., recommend consulting a doctor for medical advice, suggest focusing on whole foods, mention the importance of portion control).
    - NEVER provide medical advice. Always defer to a doctor or registered dietitian for medical questions.
    - Keep your answers concise and to the point.`,
    tools: [getFoodData],
});

export async function chat(history: z.infer<typeof chatHistory>) {
  const llmResponse = await chatPrompt(history);
  return llmResponse.output;
}
