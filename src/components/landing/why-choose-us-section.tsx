import { SectionWrapper } from '@/components/common/section-wrapper';
import { Ruler, Hammer, Award, Zap, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const reasons = [
  {
    icon: <Ruler className="h-10 w-10 text-primary" />,
    title: 'Customized Fit',
    description: 'Perfectly tailored solutions to match your unique space and style requirements.',
  },
  {
    icon: <Hammer className="h-10 w-10 text-primary" />,
    title: 'Local Craftsmanship',
    description: 'High-quality, durable products handcrafted by experienced local artisans.',
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Affordable Luxury',
    description: 'Premium materials and designer aesthetics accessible at competitive prices.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Fast Turnaround',
    description: 'Efficient processes to bring your custom designs to life without unnecessary delays.',
  },
];

export function WhyChooseUsSection() {
  return (
    <SectionWrapper id="why-choose-us" className="bg-accent/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Why Designers and decor?</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Experience the difference with our commitment to quality, customization, and customer satisfaction.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {reasons.map((reason, index) => (
          <Card key={reason.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
            <CardHeader className="items-center pb-4">
              <div className="p-4 bg-primary/10 rounded-full mb-4 inline-block">
                {reason.icon}
              </div>
              <CardTitle className="text-xl">{reason.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{reason.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
