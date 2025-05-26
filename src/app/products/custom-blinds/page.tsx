
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SlidersHorizontal, Aperture, Layers, Settings2 } from 'lucide-react'; // Using SlidersHorizontal for Venetian, Aperture for Roller, Layers for Roman, and Settings2 for Vertical blinds.

export const metadata: Metadata = {
  title: 'Custom Blinds | Designers and decor',
  description: 'Explore a variety of custom-made blinds including Venetian, Roman, roller, and vertical blinds. Perfect for light control and privacy.',
};

const blindTypes = [
  {
    title: 'Venetian Blinds',
    description: 'Classic and versatile, offering excellent light control with adjustable slats. Available in wood, faux wood, and aluminum.',
    icon: <SlidersHorizontal className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Modern Venetian blinds',
    aiHint: 'venetian blinds window',
  },
  {
    title: 'Roller Blinds',
    description: 'Sleek and minimalist, roller blinds provide a clean look and come in various fabrics, including blackout options.',
    icon: <Aperture className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Simple roller blind',
    aiHint: 'roller blind window',
  },
  {
    title: 'Roman Blinds',
    description: 'Elegant fabric blinds that fold neatly when raised, adding a touch of softness and sophistication to any room.',
    icon: <Layers className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Stylish Roman blinds',
    aiHint: 'roman blinds fabric',
  },
  {
    title: 'Vertical Blinds',
    description: 'Ideal for large windows and patio doors, vertical blinds offer practical light control and a contemporary feel.',
    icon: <Settings2 className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Vertical blinds on a large window',
    aiHint: 'vertical blinds patio',
  },
];

const featuredBlindOptions = [
  {
    name: 'Motorized Smart Blinds',
    description: 'Control your blinds with the touch of a button or voice command. Integrate with your smart home system.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Motorized smart blinds',
    aiHint: 'motorized blinds smart home',
  },
  {
    name: 'Eco-Friendly Collection',
    description: 'Sustainable blind materials like bamboo and recycled fabrics, combining style with environmental responsibility.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Eco-friendly bamboo blinds',
    aiHint: 'bamboo blinds',
  },
  {
    name: 'Child-Safe Blinds',
    description: 'Cordless and child-safe options designed to provide peace of mind for families with young children.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Child-safe cordless blinds',
    aiHint: 'cordless blinds child safe',
  }
];

export default function CustomBlindsPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-b from-accent/30 to-background pt-12 md:pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Perfectly Fitted Custom Blinds
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Discover the ideal balance of style, privacy, and light control with custom-made blinds from Designers and decor. Tailored to your exact specifications.
          </p>
          <Button asChild size="lg" className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/#contact">Get a Free Blinds Quote</Link>
          </Button>
        </div>
        <div className="mt-12 md:mt-16 animate-zoom-in" style={{animationDelay: '0.6s'}}>
          <Image
            src="https://placehold.co/1200x600"
            alt="Modern living room with sleek custom blinds"
            width={1200}
            height={600}
            className="rounded-xl shadow-xl object-cover aspect-[2/1] mx-auto"
            data-ai-hint="modern blinds living room"
            priority
          />
        </div>
      </SectionWrapper>

      {/* Blind Types Section */}
      <SectionWrapper id="blind-types">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            A Style for Every Window
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of blind types, each offering unique benefits and aesthetic appeal.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blindTypes.map((blind, index) => (
            <Card key={blind.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {blind.icon}
                </div>
                <CardTitle className="text-2xl">{blind.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col text-center">
                 <Image
                  src={blind.imageSrc}
                  alt={blind.imageAlt}
                  width={600}
                  height={400}
                  className="object-cover aspect-[3/2] w-full rounded-md mb-4"
                  data-ai-hint={blind.aiHint}
                />
                <p className="text-muted-foreground mb-4 flex-grow">{blind.description}</p>
                <Button variant="outline" asChild className="mt-auto">
                  <Link href="/#contact">Explore {blind.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Options Section */}
      <SectionWrapper id="featured-blind-options" className="bg-accent/30">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Advanced & Specialty Blinds
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhance your blinds with modern technology, eco-conscious materials, and safety features.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlindOptions.map((option, index) => (
            <Card key={option.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
               <Image
                  src={option.imageSrc}
                  alt={option.imageAlt}
                  width={600}
                  height={450}
                  className="object-cover aspect-[4/3] w-full"
                  data-ai-hint={option.aiHint}
                />
              <CardHeader>
                <CardTitle className="text-xl">{option.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">{option.description}</p>
                <Button asChild className="mt-auto">
                  <Link href="/#contact">Inquire About This Option</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Our Blinds Section */}
      <SectionWrapper id="why-custom-blinds">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Designers and decor Advantage for Blinds
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Precision, quality, and service define our custom blind solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Precision Measurement & Fit', description: 'Guaranteed perfect fit with our expert measurement and installation services.', aiHint: 'window measurement blinds' },
            { title: 'Durable Materials', description: 'High-quality components and fabrics ensure longevity and lasting performance.', aiHint: 'blind material samples' },
            { title: 'Expert Consultation', description: 'Our specialists help you choose the ideal blinds for your needs and style.', aiHint: 'design consultation blinds' },
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready for Your Custom Blinds?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Contact us for a free, no-obligation consultation and measurement service. Let's find the perfect blinds for your space.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact">Schedule Free Measure Visit</Link>
          </Button>
      </SectionWrapper>
    </>
  );
}
