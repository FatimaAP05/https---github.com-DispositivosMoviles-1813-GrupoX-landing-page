'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/i18n-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Hero() {
  const { t } = useI18n();
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-image');

  return (
    <section 
      className="relative py-20 md:py-28 text-white"
      style={{
        backgroundImage: `url('https://media.discordapp.net/attachments/1286768073453342767/1441110520802574418/cuidadores_funciones.png?ex=69209a42&is=691f48c2&hm=b9830acc1beb586f57abe756391633590d66fdaa26e0acd288c2357709846302&=&format=webp&quality=lossless&width=1128&height=590')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/60 z-0"
      />
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/download" passHref>
                <Button size="lg">{t('hero.requestDemo')}</Button>
              </Link>
              <Link href="#faq" passHref>
                <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  {t('hero.learnMore')} <span aria-hidden="true" className="ml-2">→</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
