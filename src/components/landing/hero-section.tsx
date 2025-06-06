
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { SectionWrapper } from '@/components/common/section-wrapper';

export function HeroSection() {
  return (
    <SectionWrapper className="!py-0 relative min-h-[calc(100vh-4rem)] md:min-h-[700px] lg:min-h-[800px] flex items-center justify-center overflow-hidden">
      <Image
        src="/hero-background.png" // Ensure this file is in your /public folder
        alt="Elegant interior with custom decor"
        layout="fill"
        objectFit="cover"
        quality={85} // Optional: adjust quality
        priority // Ensures this image is loaded quickly
        className="z-0"
        data-ai-hint="living room custom blinds furniture"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
      <div className="relative z-20 container text-center text-white animate-fade-in-up">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold !text-white drop-shadow-lg">
          Transform Your Space with Custom Comfort & Style
        </h1>
        <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto !text-gray-200 drop-shadow-md">
          Premium Furniture. Designer Curtains. Tailor-made Blinds.
        </p>
        <Button asChild size="lg" className="mt-10 px-8 py-7 text-lg rounded-lg">
          <Link href="#contact">Get a Free Consultation</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
