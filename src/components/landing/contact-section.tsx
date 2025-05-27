
import { SectionWrapper } from '@/components/common/section-wrapper';
import { ContactForm } from './contact-form';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, MessageSquare, MapPin } from 'lucide-react';

export function ContactSection() {
  // Replace with your actual address and WhatsApp number
  const shopAddress = "123 Decor St, Anytown, USA"; // You might want to update this address text
  const googleMapsLink = `https://www.google.com/maps/place/Designer+and+Decor/@26.7469348,88.4381079,63m/data=!3m2!1e3!5s0x39e441a71138c6d3:0x6fb4a11b563e8a69!4m6!3m5!1s0x39e441539b200599:0x5044d3f3df264f3f!8m2!3d26.7469469!4d88.4380183!16s%2Fg%2F11q9bngr6g?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D`;
  const whatsappNumber = "12345678900"; // International format without + or spaces
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hello Designer & Decor, I'd like to inquire about a free consultation.")}`;
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
              Designer and Decor Showroom {/* Updated based on the map link */}
            </p>
            <Link href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="inline-block">
              <Image 
                src="/map-image.png" 
                alt="Designer & Decor Showroom Location" 
                width={600} 
                height={350} 
                data-ai-hint="map location" 
                className="rounded-lg shadow-md hover:opacity-90 transition-opacity aspect-[16/9] object-cover" 
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
