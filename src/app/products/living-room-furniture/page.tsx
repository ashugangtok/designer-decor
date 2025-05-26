
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Living Room Furniture | Designers and decor',
  description: 'Order custom living room furniture including sofas, coffee tables, and entertainment units.',
};

export default function LivingRoomFurniturePage() {
  return (
    <SectionWrapper>
      <div className="text-center py-12 md:py-20">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Living Room Furniture
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore our exquisite collection of custom-made living room furniture. From luxurious sofas to elegant coffee tables and functional entertainment units, we craft pieces that reflect your style and enhance your living space.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          This is where customers will be able to browse products and place an order.
        </p>
        <Button asChild size="lg">
          <Link href="/#contact">Request a Consultation</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
