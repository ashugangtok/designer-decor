
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custom Blinds | Designers and decor',
  description: 'Order tailor-made blinds in various styles like Venetian, Roman, and roller blinds.',
};

export default function CustomBlindsPage() {
  return (
    <SectionWrapper>
      <div className="text-center py-12 md:py-20">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Custom Blinds
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Find the perfect custom blinds for your home or office. We offer a wide variety of styles, including Venetian, Roman, and roller blinds, all tailor-made to provide optimal privacy and light control.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          This is where customers will be able to browse blind options and place an order.
        </p>
        <Button asChild size="lg">
          <Link href="/#contact">Request a Consultation</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
