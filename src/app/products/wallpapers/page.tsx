
import type { Metadata } from 'next';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Wallpapers | Designers and decor',
  description: 'Order high-quality wallpapers with classic patterns or modern designs.',
};

export default function WallpapersPage() {
  return (
    <SectionWrapper>
      <div className="text-center py-12 md:py-20">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Wallpapers
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Elevate your interiors with our diverse collection of high-quality wallpapers. Choose from an extensive range of classic patterns, contemporary designs, and textured finishes to create a unique ambiance in any room.
        </p>
        <p className="text-lg text-muted-foreground mb-8">
          This is where customers will be able to browse wallpapers and place an order.
        </p>
        <Button asChild size="lg">
          <Link href="/#contact">Request a Consultation</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
