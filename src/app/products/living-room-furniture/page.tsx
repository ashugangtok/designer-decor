
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sofa, Tv, Lamp, SquareAsterisk } from 'lucide-react'; // Using SquareAsterisk as a generic icon for tables

export const metadata: Metadata = {
  title: 'Living Room Furniture | Designers and decor',
  description: 'Discover custom-made living room furniture including sofas, coffee tables, entertainment units, and armchairs. Crafted for style and comfort.',
};

const furnitureCategories = [
  {
    title: 'Sofas & Sectionals',
    description: 'Luxurious comfort meets timeless design. Choose from a variety of styles, fabrics, and configurations.',
    icon: <Sofa className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Modern sectional sofa',
    aiHint: 'modern sofa',
  },
  {
    title: 'Coffee & End Tables',
    description: 'Elegant and functional centerpieces and accents for your living space. Custom sizes and finishes available.',
    icon: <SquareAsterisk className="h-10 w-10 text-primary" />, // Using a generic icon
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Wooden coffee table',
    aiHint: 'coffee table',
  },
  {
    title: 'Entertainment Centers',
    description: 'Stylish solutions to organize your media devices, combining aesthetics with practicality.',
    icon: <Tv className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Sleek entertainment unit',
    aiHint: 'entertainment unit',
  },
  {
    title: 'Armchairs & Accent Chairs',
    description: 'Add character and comfort with our range of beautifully crafted armchairs and accent pieces.',
    icon: <Lamp className="h-10 w-10 text-primary" />, // Using Lamp as a stand-in for chair
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Comfortable armchair',
    aiHint: 'armchair living room',
  },
];

const featuredProducts = [
  {
    name: 'The "Serenity" Sofa',
    description: 'A plush, customizable sofa designed for ultimate relaxation and sophisticated appeal.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'The Serenity Sofa',
    aiHint: 'luxury sofa',
  },
  {
    name: 'Artisan Coffee Table',
    description: 'Handcrafted from reclaimed wood, this table brings a touch of rustic charm to any modern living room.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Artisan Coffee Table',
    aiHint: 'rustic coffee table',
  },
  {
    name: 'Modular Media Console',
    description: 'A sleek and versatile media console that adapts to your entertainment needs and space.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Modular Media Console',
    aiHint: 'media console',
  }
];

export default function LivingRoomFurniturePage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-b from-accent/30 to-background pt-12 md:pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Exquisite Living Room Furniture
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Craft your dream living space with our custom-made sofas, tables, entertainment units, and more. At Designers and decor, we blend timeless design with unparalleled craftsmanship to bring your vision to life.
          </p>
          <Button asChild size="lg" className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/#contact">Request a Free Consultation</Link>
          </Button>
        </div>
        <div className="mt-12 md:mt-16 animate-zoom-in" style={{animationDelay: '0.6s'}}>
          <Image
            src="https://placehold.co/1200x600"
            alt="Beautifully arranged living room with custom furniture"
            width={1200}
            height={600}
            className="rounded-xl shadow-xl object-cover aspect-[2/1] mx-auto"
            data-ai-hint="living room custom furniture"
            priority
          />
        </div>
      </SectionWrapper>

      {/* Categories Section */}
      <SectionWrapper id="furniture-categories">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Explore Our Living Room Collections
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            From statement pieces to subtle accents, find everything you need to create a harmonious and stylish living area.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {furnitureCategories.map((category, index) => (
            <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {category.icon}
                </div>
                <CardTitle className="text-2xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col text-center">
                <Image
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  width={600}
                  height={400}
                  className="object-cover aspect-[3/2] w-full rounded-md mb-4"
                  data-ai-hint={category.aiHint}
                />
                <p className="text-muted-foreground mb-4 flex-grow">{category.description}</p>
                <Button variant="outline" asChild className="mt-auto">
                  <Link href="/#contact">Discuss {category.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Products Section */}
      <SectionWrapper id="featured-furniture" className="bg-accent/30">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Custom Pieces
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Get inspired by some of our popular custom-designed living room furniture items.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <Card key={product.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
               <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width={600}
                  height={450}
                  className="object-cover aspect-[4/3] w-full"
                  data-ai-hint={product.aiHint}
                />
              <CardHeader>
                <CardTitle className="text-xl">{product.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">{product.description}</p>
                <Button asChild className="mt-auto">
                  <Link href="/#contact">Inquire About This Piece</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Us Section */}
      <SectionWrapper id="why-custom-furniture">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            The Designers and decor Difference
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Investing in custom living room furniture means investing in quality, personality, and perfect fit.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Bespoke Designs', description: 'Furniture tailored to your exact specifications, style, and space.', aiHint: 'custom design sketch' },
            { title: 'Premium Materials', description: 'We source high-quality woods, fabrics, and finishes for lasting beauty.', aiHint: 'fabric swatches wood samples' },
            { title: 'Expert Craftsmanship', description: 'Our skilled artisans bring decades of experience to every piece.', aiHint: 'carpenter working furniture' },
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Create Your Perfect Living Room?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss your ideas. Schedule a free, no-obligation consultation with our design experts today.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact">Book Your Free Consultation</Link>
          </Button>
      </SectionWrapper>
    </>
  );
}
