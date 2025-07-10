
'use server';
/**
 * @fileOverview Recognizes a food item from an image.
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

const RecognizeFoodImageOutputSchema = z.object({
  foodName: z.string().describe('The name of the identified food item. Be as specific as possible (e.g., "Vegetable Upma" instead of just "Upma"). If no food is detected, return "No food detected".'),
});
export type RecognizeFoodImageOutput = z.infer<typeof RecognizeFoodImageOutputSchema>;

export async function recognizeFoodImage(input: RecognizeFoodImageInput): Promise<RecognizeFoodImageOutput> {
  return recognizeFoodImageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recognizeFoodImagePrompt',
  input: {schema: RecognizeFoodImageInputSchema},
  output: {schema: RecognizeFoodImageOutputSchema},
  prompt: `You are an expert at identifying food from images. Look at the provided image and identify the primary food dish in it.

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
