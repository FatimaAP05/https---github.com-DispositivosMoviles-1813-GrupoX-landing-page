'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getSummaryAction } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  residentData: z
    .string()
    .min(50, {
      message: 'Please provide at least 50 characters of resident data for an effective summary.',
    })
    .max(5000, {
      message: 'Input cannot exceed 5000 characters.',
    }),
});

const defaultResidentData = `Resident Name: Eleanor Vance
DOB: 1942-03-15
Medical History: Hypertension (managed with Lisinopril), Osteoarthritis in both knees, Mild hearing loss (uses hearing aids). Allergic to penicillin.
Recent Events: Had a fall last month, no major injuries but has been more cautious.
Needs: Assistance with showering, medication reminders, low-sodium diet.
Preferences: Enjoys reading mystery novels, watching classic movies, and light gardening. Prefers to wake up around 8 AM and sleep by 10 PM. Does not enjoy loud, crowded activities.`;

export function AiSummarizer() {
  const [summary, setSummary] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      residentData: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setSummary('');
    const result = await getSummaryAction(data.residentData);
    setIsLoading(false);

    if (result.error) {
      toast({
        title: 'Error',
        description: result.error,
        variant: 'destructive',
      });
    } else if (result.summary) {
      setSummary(result.summary);
      toast({
        title: 'Success',
        description: 'Summary generated successfully.',
      });
    }
  }

  return (
    <section id="summarizer" className="py-20 md:py-28">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-headline">
            Instant Resident Insights
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Use our AI-powered tool to instantly summarize lengthy resident notes into concise, actionable insights for faster onboarding and better care.
          </p>
        </div>

        <div className="mt-16 mx-auto max-w-3xl">
          <Card>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="residentData"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center">
                          <Sparkles className="w-4 h-4 mr-2" />
                          Paste Resident Data Here
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={defaultResidentData}
                            className="min-h-[250px] resize-y"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Generate Summary
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {summary && (
            <div className="mt-8">
              <Card className="bg-accent/50">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center font-headline">
                    <Sparkles className="w-5 h-5 mr-2 text-primary" />
                    AI-Generated Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/90">{summary}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
