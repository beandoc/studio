
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
  input: {schema: RecognizeFoodImageInputSchema},
  output: {schema: RecognizeFoodImageOutputSchema},
  prompt: `You are an expert nutritionist and food recognition AI. Analyze the provided image of a meal.

Your task is to:
1.  Identify every distinct food item on the plate.
2.  For each item, estimate its nutritional content: calories, protein (in grams), and fat (in grams).
3.  Calculate the total calories, protein, and fat for the entire meal by summing up the individual items.
4.  Determine if there is any food in the image. If not, set 'isFood' to false and return empty values for the rest.
5.  Provide a concise, descriptive name for the overall meal.

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
