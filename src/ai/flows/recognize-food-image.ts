
'use server';
/**
 * @fileOverview Recognizes food items from an image and estimates their nutritional content.
 *
 * - recognizeFoodImage - A function that handles the food recognition process.
 * - RecognizeFoodImageInput - The input type for the recognizeFoodImage function.
 * - RecognizeFoodImageOutput - The return type for the recognizeFoodImage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecognizeFoodImageInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a food item, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type RecognizeFoodImageInput = z.infer<typeof RecognizeFoodImageInputSchema>;

const FoodItemSchema = z.object({
    name: z.string().describe("The name of the food item."),
    calories: z.number().describe("Estimated calories for this food item."),
    protein: z.number().describe("Estimated protein in grams for this food item."),
    fat: z.number().describe("Estimated fat in grams for this food item."),
    confidenceScore: z.number().min(0).max(1).describe("A confidence score from 0.0 to 1.0 on the accuracy of the nutritional estimate for this item."),
});

const RecognizeFoodImageOutputSchema = z.object({
  isFood: z.boolean().describe("Whether any food was detected in the image."),
  items: z.array(FoodItemSchema).describe("An array of all food items identified on the plate."),
  totalCalories: z.number().describe("The sum of calories for all identified food items."),
  totalProtein: z.number().describe("The sum of protein in grams for all identified food items."),
  totalFat: z.number().describe("The sum of fat in grams for all identified food items."),
  mealName: z.string().describe("A descriptive name for the entire meal, e.g., 'Chicken Curry with Rice' or 'Oatmeal with Berries'.")
});
export type RecognizeFoodImageOutput = z.infer<typeof RecognizeFoodImageOutputSchema>;


export async function recognizeFoodImage(input: RecognizeFoodImageInput): Promise<RecognizeFoodImageOutput> {
  return recognizeFoodImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recognizeFoodImagePrompt',
  model: 'googleai/gemini-1.5-flash-latest',
  input: {schema: RecognizeFoodImageInputSchema},
  output: {schema: RecognizeFoodImageOutputSchema},
  prompt: `You are a specialist dietitian and expert food recognition AI. Analyze the provided image of a meal with a high degree of accuracy.

Your task is to:
1.  Identify every distinct food item on the plate. Consider condiments and garnishes as separate items if they contribute significantly to the nutritional value.
2.  For each item, estimate its nutritional content: calories, protein (in grams), and fat (in grams). Your estimation should be based on a standard serving size visible in the photo.
3.  For each identified item, provide a 'confidenceScore' between 0.0 (not confident) and 1.0 (very confident) regarding the accuracy of your nutritional estimation.
4.  Calculate the total calories, protein, and fat for the entire meal by summing up the individual items.
5.  Determine if there is any food in the image. If not, set 'isFood' to false and return empty values for the rest. If the image is unclear or you cannot identify food with at least 0.5 confidence, set 'isFood' to false.
6.  Provide a concise, descriptive name for the overall meal.

Provide the response in the specified JSON format.

Photo: {{media url=photoDataUri}}`,
});

const recognizeFoodImageFlow = ai.defineFlow(
  {
    name: 'recognizeFoodImageFlow',
    inputSchema: RecognizeFoodImageInputSchema,
    outputSchema: RecognizeFoodImageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
