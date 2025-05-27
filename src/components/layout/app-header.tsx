
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { label: 'About Us', href: '#about-us' },
  { label: 'Products', href: '#products' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Ensure logo.jpg is in the /public folder */}
          <Image
            src="/logo.jpg" 
            alt="Designer & Decor Logo"
            width={36}
            height={36}
            className="rounded-full flex-shrink-0" // Removed temporary border
            data-ai-hint="company logo"
          />
          <span className="font-bold text-xl text-foreground">Designer &amp; Decor</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild size="sm">
            <Link href="#contact">Free Consultation</Link>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
            <Link href="/" className="flex items-center gap-2 mb-4">
              {/* Ensure logo.jpg is in the /public folder */}
              <Image
                src="/logo.jpg"
                alt="Designer & Decor Logo"
                width={36}
                height={36}
                className="rounded-full flex-shrink-0" // Removed temporary border
                data-ai-hint="company logo"
              />
              <span className="font-bold text-foreground">Designer &amp; Decor</span>
            </Link>
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="mt-4">
                <Link href="#contact">Free Consultation</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
