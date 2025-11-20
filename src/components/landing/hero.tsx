'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useI18n } from '@/context/i18n-context';

export function Hero() {
  const { t } = useI18n();
  return (
    <section className="relative py-20">
      <div
        aria-hidden="true"
        className="absolute inset-0 top-0 z-0 opacity-40"
        style={{
          background: 'radial-gradient(circle at top, hsl(var(--primary) / 0.2), transparent 60%)',
        }}
      />
      <div className="container relative z-10 px-4">
        <div className="grid grid-cols-1 gap-12 items-center">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl font-headline">
              {t('hero.title')}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {t('hero.description')}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/download" passHref>
                <Button size="lg">{t('hero.requestDemo')}</Button>
              </Link>
              <Link href="#faq" passHref>
                <Button size="lg" variant="ghost">
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
