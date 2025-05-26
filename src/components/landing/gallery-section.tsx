import Image from 'next/image';
import { SectionWrapper } from '@/components/common/section-wrapper';

const galleryImages = [
  { src: 'https://placehold.co/600x600', alt: 'Living room transformation before', aiHint: 'room before renovation' },
  { src: 'https://placehold.co/600x600', alt: 'Living room transformation after', aiHint: 'room after renovation' },
  { src: 'https://placehold.co/600x600', alt: 'Custom curtains in a bedroom', aiHint: 'bedroom curtains' },
  { src: 'https://placehold.co/600x600', alt: 'Modern office with custom blinds', aiHint: 'office blinds' },
  { src: 'https://placehold.co/600x600', alt: 'Bespoke furniture piece detail', aiHint: 'furniture detail' },
  { src: 'https://placehold.co/600x600', alt: 'Cozy corner with custom decor', aiHint: 'cozy home corner' },
];

export function GallerySection() {
  return (
    <SectionWrapper id="gallery" className="bg-accent/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Client Transformations</h2>
        <p className="mt-3 text-lg text-muted-foreground max-w-2xl mx-auto">
          See how we've helped our clients create their dream spaces.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md aspect-square animate-zoom-in" style={{ animationDelay: `${index * 100}ms` }}>
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={600}
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
              data-ai-hint={image.aiHint}
            />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
