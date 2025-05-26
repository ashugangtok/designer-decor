"use client";

import { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(100),
  phone: z.string().max(20).optional(),
  email: z.string().email("Please enter a valid email address.").max(100),
  message: z.string().min(10, "Message must be at least 10 characters.").max(1000),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactForm() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast({
          title: "Success!",
          description: state.message,
        });
        form.reset(); // Reset form on success
      } else {
        toast({
          title: "Error",
          description: state.message || "Failed to submit form.",
          variant: "destructive",
        });
        // Populate field errors if they exist
        if (state.issues) {
            state.issues.forEach(issue => {
                const [fieldName, ...errorMessageParts] = issue.split(': ');
                const errorMessage = errorMessageParts.join(': ');
                if (fieldName === 'name' || fieldName === 'email' || fieldName === 'message' || fieldName === 'phone') {
                     form.setError(fieldName as keyof ContactFormData, { type: 'server', message: errorMessage });
                }
            });
        }
      }
    }
  }, [state, toast, form]);
  
  return (
    <form action={formAction} className="space-y-6">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" {...form.register("name")} placeholder="John Doe" className="mt-1"/>
        {form.formState.errors.name && <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>}
      </div>
      <div>
        <Label htmlFor="phone">Phone Number (Optional)</Label>
        <Input id="phone" {...form.register("phone")} placeholder="(123) 456-7890" className="mt-1"/>
        {form.formState.errors.phone && <p className="text-sm text-destructive mt-1">{form.formState.errors.phone.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" {...form.register("email")} placeholder="you@example.com" className="mt-1"/>
        {form.formState.errors.email && <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="message">What You Need</Label>
        <Textarea id="message" {...form.register("message")} placeholder="Tell us about your project or inquiry..." rows={5} className="mt-1"/>
        {form.formState.errors.message && <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>}
      </div>
      
      {state.message && !state.success && state.issues && state.issues.length > 0 && (
         <Alert variant="destructive">
           <Terminal className="h-4 w-4" />
           <AlertTitle>Form Submission Error</AlertTitle>
           <AlertDescription>
             Please correct the following issues:
             <ul className="list-disc list-inside mt-1">
                {state.issues.map((issue, index) => (
                    <li key={index} className="text-xs">{issue}</li>
                ))}
             </ul>
           </AlertDescription>
         </Alert>
      )}

      <SubmitButton />
    </form>
  );
}
