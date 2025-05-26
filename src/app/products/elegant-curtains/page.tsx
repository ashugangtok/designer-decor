
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Wind, Layers, Palette, SwatchBook } from 'lucide-react'; // Replaced VenetianBlind with SwatchBook

export const metadata: Metadata = {
  title: 'Elegant Curtains | Designer & Decor',
  description: 'Discover custom-made elegant curtains from a wide range of luxurious fabrics, patterns, and designs. Perfect for enhancing any room.',
};

const curtainTypes = [
  {
    title: 'Sheer Curtains',
    description: 'Light-filtering sheer curtains that add a touch of elegance and privacy while allowing natural light.',
    icon: <Wind className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Delicate sheer curtains',
    aiHint: 'sheer curtains window',
  },
  {
    title: 'Blackout Curtains',
    description: 'Achieve complete darkness and privacy with our stylish blackout curtains, perfect for bedrooms.',
    icon: <Layers className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Thick blackout curtains',
    aiHint: 'blackout curtains bedroom',
  },
  {
    title: 'Velvet Curtains',
    description: 'Luxurious velvet curtains that bring richness and sophistication to your living spaces.',
    icon: <Palette className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Rich velvet curtains',
    aiHint: 'velvet curtains luxury',
  },
  {
    title: 'Patterned Curtains',
    description: 'Explore a wide variety of patterns and prints to make a statement with your window treatments.',
    icon: <SwatchBook className="h-10 w-10 text-primary" />, // Using SwatchBook for patterns
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Curtains with floral patterns',
    aiHint: 'patterned curtains floral',
  },
];

const featuredDesigns = [
  {
    name: 'Silk Elegance Collection',
    description: 'Hand-stitched silk curtains that drape beautifully, available in a rich color palette.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Silk Elegance Curtains',
    aiHint: 'silk curtains',
  },
  {
    name: 'Linen Natural Weave',
    description: 'Eco-friendly linen curtains offering a relaxed, airy feel for a contemporary look.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Linen Natural Weave Curtains',
    aiHint: 'linen curtains',
  },
  {
    name: 'Custom Embroidered Panels',
    description: 'Personalize your space with custom embroidery, from subtle motifs to bold designs.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Custom Embroidered Curtain Panel',
    aiHint: 'embroidered curtains',
  }
];

export default function ElegantCurtainsPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-b from-accent/30 to-background pt-12 md:pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Drape Your World in Elegance
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            At Designer &amp; Decor, we craft exquisite custom curtains that transform your windows into stunning focal points. Discover a world of luxurious fabrics, intricate designs, and perfect tailoring.
          </p>
          <Button asChild size="lg" className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/#contact">Consult Our Curtain Experts</Link>
          </Button>
        </div>
        <div className="mt-12 md:mt-16 animate-zoom-in" style={{animationDelay: '0.6s'}}>
          <Image
            src="https://placehold.co/1200x600"
            alt="Luxurious curtains in a beautifully decorated room"
            width={1200}
            height={600}
            className="rounded-xl shadow-xl object-cover aspect-[2/1] mx-auto"
            data-ai-hint="luxury curtains room"
            priority
          />
        </div>
      </SectionWrapper>

      {/* Curtain Types Section */}
      <SectionWrapper id="curtain-types">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Our Curtain Styles
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            From light and airy sheers to rich, room-darkening drapes, find the perfect style for every window.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {curtainTypes.map((curtain, index) => (
            <Card key={curtain.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {curtain.icon}
                </div>
                <CardTitle className="text-2xl">{curtain.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col text-center">
                 <Image
                  src={curtain.imageSrc}
                  alt={curtain.imageAlt}
                  width={600}
                  height={400}
                  className="object-cover aspect-[3/2] w-full rounded-md mb-4"
                  data-ai-hint={curtain.aiHint}
                />
                <p className="text-muted-foreground mb-4 flex-grow">{curtain.description}</p>
                <Button variant="outline" asChild className="mt-auto">
                  <Link href="/#contact">View {curtain.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Designs Section */}
      <SectionWrapper id="featured-designs" className="bg-accent/30">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Signature Curtain Collections
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Be inspired by our curated collections, showcasing the finest materials and craftsmanship.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDesigns.map((design, index) => (
            <Card key={design.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
               <Image
                  src={design.imageSrc}
                  alt={design.imageAlt}
                  width={600}
                  height={450}
                  className="object-cover aspect-[4/3] w-full"
                  data-ai-hint={design.aiHint}
                />
              <CardHeader>
                <CardTitle className="text-xl">{design.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">{design.description}</p>
                <Button asChild className="mt-auto">
                  <Link href="/#contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Our Curtains Section */}
      <SectionWrapper id="why-custom-curtains">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Art of Custom Curtains
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that tailor-made curtains bring to your home or office.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Perfect Fit & Finish', description: 'Made-to-measure curtains for flawless window coverage and an impeccable look.', aiHint: 'measuring tape window' },
            { title: 'Luxurious Fabrics', description: 'A curated selection of high-quality textiles from around the world.', aiHint: 'fabric swatches curtains' },
            { title: 'Expert Tailoring', description: 'Our skilled artisans ensure every stitch contributes to a masterpiece.', aiHint: 'sewing machine curtains' },
          ].map((item, index) => (
            <div key={item.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
               <Image 
                src={`https://placehold.co/400x300`} 
                alt={item.title} 
                width={400} 
                height={300} 
                className="rounded-lg shadow-md mb-4 aspect-[4/3] object-cover mx-auto"
                data-ai-hint={item.aiHint} 
              />
              <h3 className="text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Final CTA Section */}
      <SectionWrapper className="bg-primary/10 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Adorn Your Windows?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Our design consultants are ready to help you select the perfect curtains. Schedule your free in-home consultation today.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact">Book Free Consultation & Measure</Link>
          </Button>
      </SectionWrapper>
    </>
  );
}
