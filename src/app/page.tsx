import { HeroSection } from '@/components/landing/hero-section';
import { AboutUsSection } from '@/components/landing/about-us-section';
import { ProductHighlightsSection } from '@/components/landing/product-highlights-section';
import { GallerySection } from '@/components/landing/gallery-section';
import { TestimonialsSection } from '@/components/landing/testimonials-section';
import { WhyChooseUsSection } from '@/components/landing/why-choose-us-section';
import { ContactSection } from '@/components/landing/contact-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <ProductHighlightsSection />
      <GallerySection />
      <TestimonialsSection />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
