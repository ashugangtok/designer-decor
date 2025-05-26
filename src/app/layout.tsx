import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';
import { StickyCTA } from '@/components/layout/sticky-cta';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins', // Not strictly needed if using .className
});

export const metadata: Metadata = {
  title: 'Bespoke Spaces | Custom Furniture, Curtains & Blinds',
  description: 'Transform Your Space with Custom Comfort & Style. Bespoke Spaces offers premium furniture, designer curtains, and tailor-made blinds for homes and offices.',
  keywords: 'home decor, custom furniture, curtains, blinds, interior design, bespoke, luxury furniture',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased bg-background text-foreground flex flex-col min-h-screen`}>
        <AppHeader />
        <main className="flex-grow">
          {children}
        </main>
        <StickyCTA />
        <AppFooter />
        <Toaster />
      </body>
    </html>
  );
}
