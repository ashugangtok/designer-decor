
import Image from 'next/image';
import { SectionWrapper } from '@/components/common/section-wrapper';

export function AboutUsSection() {
  return (
    <SectionWrapper id="about-us" className="bg-accent/30">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-in-left">
          <div className="flex items-center gap-3 mb-6">
            {/* Ensure logo.jpg is in the /public folder */}
            <Image
              src="/logo.jpg"
              alt="Designer & Decor Logo"
              width={50}
              height={50}
              className="rounded-full flex-shrink-0"
              data-ai-hint="company logo"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              About Designer &amp; Decor
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            Welcome to Designer &amp; Decor, where your vision for a perfect interior comes to life. As a family-run business with over a decade of experience, we pride ourselves on delivering exceptional quality and personalized service.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our passion lies in crafting custom solutions – from premium furniture pieces that define your style, to elegant curtains and made-to-measure blinds that offer both beauty and functionality. We work closely with homeowners, interior designers, and offices to create spaces that are not just aesthetically pleasing but also reflect individual needs and preferences.
          </p>
          <p className="text-lg text-muted-foreground">
            At Designer &amp; Decor, we believe in the power of customization. Every detail matters, and our commitment to quality craftsmanship ensures that you receive products that are built to last and designed to inspire.
          </p>
        </div>
        <div className="animate-slide-in-right">
          <Image
            src="/about-us-image.png" // Updated image source
            alt="Designer & Decor team or showroom" // Updated alt text
            width={600}
            height={450}
            className="rounded-xl shadow-xl object-cover aspect-[4/3]" // Ensuring object-cover for a scenic image
            data-ai-hint="team showroom" // Updated AI hint
          />
        </div>
      </div>
    </SectionWrapper>
  );
}
