
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/section-wrapper';

const products = [
  {
    title: 'Living Room Furniture',
    description: 'Discover our collection of premium sofas, coffee tables, and entertainment units, designed for comfort and style.',
    imageSrc: '/hero-background.png', // Using /hero-background.png
    imageAlt: 'Stylish living room furniture',
    aiHint: 'living room furniture',
    href: '/products/living-room-furniture',
  },
  {
    title: 'Elegant Curtains',
    description: 'Choose from a wide range of luxurious fabrics and designs to create the perfect window dressing for any room.',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Elegant curtains hanging in a window',
    aiHint: 'elegant curtains',
    href: '/products/elegant-curtains',
  },
  {
    title: 'Custom Blinds',
    description: 'Tailor-made blinds in various styles, including Venetian, Roman, and roller, offering privacy and light control.',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Custom blinds fitted to a window',
    aiHint: 'custom blinds window',
    href: '/products/custom-blinds',
  },
  {
    title: 'Wallpapers',
    description: 'Explore a diverse range of high-quality wallpapers, from classic patterns to modern designs, to elevate your walls.',
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Assortment of stylish wallpapers',
    aiHint: 'stylish wallpapers',
    href: '/products/wallpapers',
  },
];

export function ProductHighlightsSection() {
  return (
    <SectionWrapper id="products">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Signature Products</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Explore our range of bespoke home decor solutions, crafted with care and precision.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <Link key={product.title} href={product.href} className="block group">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up h-full flex flex-col group-hover:ring-2 group-hover:ring-primary">
              <CardHeader className="p-0">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={600}
                  height={400}
                  className="object-cover aspect-[3/2] w-full"
                  data-ai-hint={product.aiHint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow flex flex-col">
                <CardTitle className="text-2xl mb-3">{product.title}</CardTitle>
                <p className="text-muted-foreground flex-grow">{product.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </SectionWrapper>
  );
}
