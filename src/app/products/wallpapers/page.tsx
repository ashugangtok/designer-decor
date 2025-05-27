
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Layers, Palette, Sparkles, Wand2 } from 'lucide-react'; // Using Wand2 for Designer

export const metadata: Metadata = {
  title: 'Wallpapers | Designer & Decor',
  description: 'Transform your walls with our exquisite collection of high-quality wallpapers. Explore textures, patterns, murals, and designer collections.',
};

const wallpaperStyles = [
  {
    title: 'Textured Wallpapers',
    description: 'Add depth and character with our range of textured wallpapers, from subtle weaves to bold embossed designs.',
    icon: <Layers className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Close-up of textured wallpaper',
    aiHint: 'textured wallpaper close up',
  },
  {
    title: 'Patterned Wallpapers',
    description: 'Make a statement with vibrant patterns, including geometric, floral, abstract, and classic motifs.',
    icon: <Palette className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Wallpaper with geometric patterns',
    aiHint: 'geometric pattern wallpaper',
  },
  {
    title: 'Mural Wallpapers',
    description: 'Create a stunning feature wall with our breathtaking mural wallpapers, depicting landscapes, art, and more.',
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Large mural wallpaper in a room',
    aiHint: 'mural wallpaper landscape',
  },
  {
    title: 'Designer Collections',
    description: 'Exclusive wallpaper designs from renowned artists and brands, offering unique and sophisticated styles.',
    icon: <Wand2 className="h-10 w-10 text-primary" />,
    imageSrc: 'https://placehold.co/600x400',
    imageAlt: 'Elegant designer wallpaper',
    aiHint: 'designer wallpaper luxury',
  },
];

const featuredWallpaperLooks = [
  {
    name: 'Modern Minimalist',
    description: 'Subtle textures and neutral palettes for a clean, contemporary aesthetic.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Minimalist room with subtle wallpaper',
    aiHint: 'minimalist wallpaper room',
  },
  {
    name: 'Bold Botanicals',
    description: 'Lush floral and leaf prints that bring the beauty of nature indoors.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Room with bold botanical wallpaper',
    aiHint: 'botanical wallpaper room',
  },
  {
    name: 'Vintage Revival',
    description: 'Classic damasks, intricate paisleys, and retro-inspired designs for a touch of timeless elegance.',
    imageSrc: 'https://placehold.co/600x450',
    imageAlt: 'Vintage style wallpaper',
    aiHint: 'vintage wallpaper damask',
  }
];

export default function WallpapersPage() {
  return (
    <>
      {/* Hero Section */}
      <SectionWrapper className="bg-gradient-to-b from-accent/30 to-background pt-12 md:pt-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Redefine Your Walls with Stunning Wallpapers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Elevate your interiors with Designer &amp; Decor's curated collection of premium wallpapers. From timeless classics to contemporary statements, find the perfect backdrop for your life.
          </p>
          <Button asChild size="lg" className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <Link href="/#contact">Explore Wallpaper Options</Link>
          </Button>
        </div>
        <div className="mt-12 md:mt-16 animate-zoom-in" style={{animationDelay: '0.6s'}}>
          <Image
            src="/wallpapers.png" // Updated
            alt="Beautifully wallpapered accent wall in a stylish room"
            width={1200}
            height={600}
            className="rounded-xl shadow-xl object-cover aspect-[2/1] mx-auto"
            data-ai-hint="wallpaper accent wall room"
            priority
          />
        </div>
      </SectionWrapper>

      {/* Wallpaper Styles Section */}
      <SectionWrapper id="wallpaper-styles">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Discover Your Perfect Wallpaper Style
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Whatever your taste, our extensive range has something to inspire and transform your space.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wallpaperStyles.map((style, index) => (
            <Card key={style.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {style.icon}
                </div>
                <CardTitle className="text-2xl">{style.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col text-center">
                 <Image
                  src={style.imageSrc}
                  alt={style.imageAlt}
                  width={600}
                  height={400}
                  className="object-cover aspect-[3/2] w-full rounded-md mb-4"
                  data-ai-hint={style.aiHint}
                />
                <p className="text-muted-foreground mb-4 flex-grow">{style.description}</p>
                <Button variant="outline" asChild className="mt-auto">
                  <Link href="/#contact">Browse {style.title}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Featured Wallpaper Looks Section */}
      <SectionWrapper id="featured-wallpaper-looks" className="bg-accent/30">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Inspiring Wallpaper Applications
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our wallpapers can create truly unique and captivating interiors.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWallpaperLooks.map((look, index) => (
            <Card key={look.name} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
               <Image
                  src={look.imageSrc}
                  alt={look.imageAlt}
                  width={600}
                  height={450}
                  className="object-cover aspect-[4/3] w-full"
                  data-ai-hint={look.aiHint}
                />
              <CardHeader>
                <CardTitle className="text-xl">{look.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <p className="text-muted-foreground mb-4 flex-grow">{look.description}</p>
                <Button asChild className="mt-auto">
                  <Link href="/#contact">Get This Look</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      {/* Why Choose Our Wallpapers Section */}
      <SectionWrapper id="why-our-wallpapers">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Quality &amp; Expertise in Every Roll
          </h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose Designer &amp; Decor for an unparalleled wallpaper experience.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            { title: 'Premium Quality Materials', description: 'Durable, high-grade wallpapers that are easy to apply and maintain.', aiHint: 'wallpaper roll quality' },
            { title: 'Vast Selection', description: 'An extensive catalog of designs, textures, and colors to suit any interior style.', aiHint: 'wallpaper samples various' },
            { title: 'Professional Installation', description: 'Optional expert installation service for a flawless, professional finish.', aiHint: 'wallpaper installation process' },
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
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Walls?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Our wallpaper specialists are here to guide you. Schedule a free consultation to discuss your vision.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact">Book Free Wallpaper Consultation</Link>
          </Button>
      </SectionWrapper>
    </>
  );
}
