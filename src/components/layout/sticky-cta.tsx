'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarCheck, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Button asChild size="lg" className="shadow-lg rounded-full px-4 py-6 md:px-6 md:py-8">
        <Link href="#contact" className="flex items-center gap-2">
          <CalendarCheck className="h-5 w-5 md:h-6 md:w-6" />
          <span className="text-sm md:text-base">Schedule Free Measure Visit</span>
        </Link>
      </Button>
       <Button variant="outline" size="lg" className="shadow-lg rounded-full px-4 py-6 md:px-6 md:py-8 bg-background hover:bg-accent" asChild>
        <a href="tel:+1234567890" className="flex items-center gap-2"> {/* Replace with actual phone number */}
          <Phone className="h-5 w-5 md:h-6 md:w-6" />
           <span className="text-sm md:text-base">Call Us Now</span>
        </a>
      </Button>
    </div>
  );
}
