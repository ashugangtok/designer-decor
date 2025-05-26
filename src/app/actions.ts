// src/app/actions.ts
"use server";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }).max(100),
  phone: z.string().max(20).optional().or(z.literal('')),
  email: z.string().email({ message: "Please enter a valid email address." }).max(100),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }).max(1000),
});

export type ContactFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  success: boolean;
};

export async function submitContactForm(
  prevState: ContactFormState,
  data: FormData
): Promise<ContactFormState> {
  const formData = Object.fromEntries(data);
  const parsed = contactFormSchema.safeParse(formData);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    parsed.error.issues.forEach(issue => {
      if (issue.path.length > 0) {
        fieldErrors[issue.path[0] as string] = issue.message;
      }
    });
    return {
      message: "Invalid form data. Please check the fields below.",
      fields: formData as Record<string, string>,
      issues: parsed.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`),
      success: false,
    };
  }

  // Simulate API call or email sending
  console.log("Contact form data submitted:", parsed.data);

  // In a real app, you'd send an email or save to a database here.
  // For example: 
  // try {
  //   await sendEmail(parsed.data);
  // } catch (error) {
  //   return { message: "Failed to send message. Please try again later.", success: false };
  // }

  return {
    message: "Thank you! Your message has been sent successfully. We'll be in touch soon.",
    success: true,
  };
}
