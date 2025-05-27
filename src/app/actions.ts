
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
  console.log("Contact form data submitted (DEVELOPMENT ONLY - NOT YET SENT TO EMAIL/DATABASE):", parsed.data);

  // In a real app, you'd integrate an email sending service (e.g., Resend, SendGrid)
  // or save the data to a database here.
  // For example, to send an email:
  // try {
  //   // const { name, email, message, phone } = parsed.data;
  //   // await sendEmail({
  //   //   to: 'your-email@example.com',
  //   //   subject: `New Contact Form Submission from ${name}`,
  //   //   html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Phone: ${phone || 'N/A'}</p><p>Message: ${message}</p>`,
  //   // });
  // } catch (error) {
  //   console.error("Failed to send contact email:", error);
  //   return { 
  //     message: "Thank you for your message! However, there was an issue notifying us. Please try contacting us directly.", 
  //     success: true // Or false, depending on how critical email notification is
  //   };
  // }

  return {
    message: "Thank you! Your message has been sent successfully. We'll be in touch soon.",
    success: true,
  };
}

// Example placeholder for an email sending function
// You would replace this with actual email sending logic using a service.
// async function sendEmail(options: { to: string; subject: string; html: string }) {
//   console.log(`DEVELOPMENT: Email would be sent with options:`, options);
//   // In a real app, use a library like 'resend' or 'nodemailer'
//   // e.g., const { data, error } = await resend.emails.send(options);
//   // if (error) throw error;
//   // return data;
//   return Promise.resolve();
// }
