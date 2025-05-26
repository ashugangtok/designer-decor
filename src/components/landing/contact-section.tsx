import { SectionWrapper } from '@/components/common/section-wrapper';
import { ContactForm } from './contact-form';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export function ContactSection() {
  // Replace with your actual address and WhatsApp number
  const shopAddress = "123 Decor St, Anytown, USA";
  const googleMapsLink = `https://maps.google.com/?q=${encodeURIComponent(shopAddress)}`;
  const whatsappNumber = "12345678900"; // International format without + or spaces
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Bespoke Spaces, I'd like to inquire about a free consultation.")}`;
  const phoneNumber = "+1 (234) 567-8900"; // Display format for phone

  return (
    <SectionWrapper id="contact" className="pb-20 md:pb-32">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get in Touch or Book a Free Visit</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          Ready to transform your space? Contact us today for a complimentary consultation and measurement.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="bg-card p-6 sm:p-8 rounded-xl shadow-xl animate-slide-in-left">
          <h3 className="text-2xl font-semibold text-foreground mb-6">Send Us a Message</h3>
          <ContactForm />
        </div>
        <div className="space-y-8 animate-slide-in-right">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Connect with Us</h3>
            <div className="space-y-4">
              <Button asChild variant="outline" className="w-full justify-start text-left h-auto py-3">
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-5 w-5 mr-3 text-primary" />
                  <div>
                    <span className="font-medium">Chat on WhatsApp</span>
                    <br />
                    <span className="text-sm text-muted-foreground">Quick answers & support</span>
                  </div>
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full justify-start text-left h-auto py-3">
                 <a href={`tel:${phoneNumber.replace(/\D/g, '')}`}>
                  <Phone className="h-5 w-5 mr-3 text-primary" />
                   <div>
                    <span className="font-medium">Call Us: {phoneNumber}</span>
                    <br />
                    <span className="text-sm text-muted-foreground">Speak to our team directly</span>
                  </div>
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Visit Our Showroom</h3>
            <p className="text-muted-foreground mb-2 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary inline-block" /> 
              {shopAddress}
            </p>
            <Link href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Image 
                src="https://placehold.co/600x350" 
                alt="Shop Location Map" 
                width={600} 
                height={350} 
                data-ai-hint="map location address" 
                className="rounded-lg shadow-md hover:opacity-90 transition-opacity aspect-[16/9] object-cover" 
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
