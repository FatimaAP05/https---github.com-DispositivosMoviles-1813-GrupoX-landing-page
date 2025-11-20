import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

export function Hero() {
  return (
    <section className="relative py-20 md:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at top, hsl(var(--primary) / 0.2), transparent 60%)',
        }}
      />
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-20 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              Connecting Families, Enhancing Care
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              VitaliaConnect is a comprehensive platform designed to bridge the communication gap between families and care centers, ensuring peace of mind and seamless resident monitoring.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 md:justify-start">
              <Button size="lg">Request a Demo</Button>
              <Button size="lg" variant="ghost">
                Learn More <span aria-hidden="true" className="ml-2">→</span>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto md:aspect-square">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                fill
                className="rounded-xl object-cover shadow-2xl"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
