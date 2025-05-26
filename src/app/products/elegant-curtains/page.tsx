
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Elegant Curtains | Designers and decor',
  description: 'Order custom elegant curtains from a wide range of luxurious fabrics and designs.',
};

export default function ElegantCurtainsPage() {
  return (
    <SectionWrapper>
      <div className="text-center py-12 md:py-20">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Elegant Curtains
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Discover our stunning selection of elegant curtains, available in a vast array of luxurious fabrics, patterns, and designs. We create custom window dressings that perfectly complement your interior decor.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          This is where customers will be able to browse curtain options and place an order.
        </p>
        <Button asChild size="lg">
          <Link href="/#contact">Request a Consultation</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
