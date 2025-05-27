
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Button } from '@/components/ui/button';
import { Star, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const testimonials = [
  {
    quote: "Designer & Decor transformed our living room! The custom sofa is beyond comfortable, and the curtains are simply stunning. Highly recommend!",
    name: 'Sarah L.',
    location: 'Springfield, IL',
  },
  {
    quote: "As an interior designer, I rely on quality and reliability. Designer & Decor consistently delivers both. Their attention to detail for custom blinds is unmatched.",
    name: 'John B.',
    location: 'Chicagoland, IL',
  },
  {
    quote: "Our office needed a refresh, and the team provided fantastic furniture solutions. Professional, efficient, and the quality is top-notch.",
    name: 'Alpha Corp.',
    location: 'Naperville, IL',
  },
  {
    quote: "The wallpaper selection was incredible, and the installation was flawless. Our feature wall is now the centerpiece of our home!",
    name: 'Maria G.',
    location: 'Oak Park, IL',
  },
  {
    quote: "From consultation to installation, the experience with Designer & Decor was seamless. Their custom blinds are perfect.",
    name: 'David K.',
    location: 'Evanston, IL',
  },
  {
    quote: "I'm so thrilled with my new curtains. The fabric quality is excellent, and they hang beautifully. Thank you, Designer & Decor!",
    name: 'Linda P.',
    location: 'Schaumburg, IL',
  },
];

// You can replace this with your actual Google Business Profile reviews URL
const googleReviewsUrl = "https://www.google.com/search?q=Designer+%26+Decor+reviews"; // Or your specific Google Business Profile link

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">What Our Clients Say</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Hear from satisfied customers who entrusted us with their spaces.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="shadow-lg animate-fade-in-up flex flex-col bg-card" style={{ animationDelay: `${index * 100}ms` }}>
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4 text-sm leading-relaxed flex-grow">"{testimonial.quote}"</p>
              <div className="mt-auto pt-4 border-t border-border/50">
                <p className="font-semibold text-foreground text-base">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: `${testimonials.length * 100}ms` }}>
        <Button asChild size="lg">
          <Link href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            View All Reviews on Google
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
