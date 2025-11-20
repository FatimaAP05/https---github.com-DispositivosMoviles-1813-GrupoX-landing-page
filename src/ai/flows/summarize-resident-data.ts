'use server';
/**
 * @fileOverview AI-powered resident data summarization flow.
 *
 * - summarizeResidentData - A function that summarizes resident data.
 * - SummarizeResidentDataInput - The input type for the summarizeResidentData function.
 * - SummarizeResidentDataOutput - The return type for the summarizeResidentData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeResidentDataInputSchema = z.object({
  residentData: z
    .string()
    .describe('The resident data to summarize, including medical history, needs, and preferences.'),
});
export type SummarizeResidentDataInput = z.infer<typeof SummarizeResidentDataInputSchema>;

const SummarizeResidentDataOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the resident data.'),
});
export type SummarizeResidentDataOutput = z.infer<typeof SummarizeResidentDataOutputSchema>;

export async function summarizeResidentData(input: SummarizeResidentDataInput): Promise<SummarizeResidentDataOutput> {
  return summarizeResidentDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeResidentDataPrompt',
  input: {schema: SummarizeResidentDataInputSchema},
  output: {schema: SummarizeResidentDataOutputSchema},
  prompt: `You are an AI assistant that summarizes resident data for care center staff.

  Please provide a concise summary of the following resident data, including their medical history, needs, and preferences.  This should be in paragraph form, around 5 sentences in length.

  Resident Data: {{{residentData}}}`,
});

const summarizeResidentDataFlow = ai.defineFlow(
  {
    name: 'summarizeResidentDataFlow',
    inputSchema: SummarizeResidentDataInputSchema,
    outputSchema: SummarizeResidentDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
