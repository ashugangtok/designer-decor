
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
];

// You can replace this with your actual Google Business Profile reviews URL
const googleReviewsUrl = "https://www.google.com/search?q=Designer+%26+Decor+reviews";

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
          <Card key={index} className="shadow-lg animate-fade-in-up flex flex-col" style={{ animationDelay: `${index * 150}ms` }}>
            <CardContent className="p-6 flex flex-col flex-grow">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-4 flex-grow">"{testimonial.quote}"</p>
              <div className="mt-auto">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: `${testimonials.length * 150}ms` }}>
        <Button asChild size="lg">
          <Link href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
            View More Reviews on Google
            <ExternalLink className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
