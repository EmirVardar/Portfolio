import { PenLine } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { pageMeta } from '../data/pageMeta';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/Reveal';
import IconBadge from '../components/IconBadge';

// Not: İlk yazılar gelene kadar menü ve footer'da link yok; sayfa yalnızca doğrudan adresle açılıyor.
export default function Blog() {
  usePageMeta(pageMeta['/blog'].title, pageMeta['/blog'].description);

  return (
    <div className="bg-white">
      <PageHero
        kicker="BLOG"
        title={
          <>
            İşletmenize <span className="font-serif italic font-medium text-teal-700">işe yarar</span> bilgiler
          </>
        }
      />

      <section className="bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <Reveal>
            <IconBadge icon={PenLine} size="lg" className="flex justify-center" />
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink">İlk yazılar yolda</h2>
            <p className="mt-3 text-neutral-500 leading-relaxed max-w-md mx-auto">
              Web sitesi, Google görünürlüğü ve dijital pazarlama üzerine kısa, uygulanabilir yazılar
              burada yer alacak.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Aklınızda bir <span className="font-serif italic font-medium text-teal-400">soru</span> mu var?
          </>
        }
        primary={{ label: 'Sorunuzu Sorun', href: 'https://wa.me/905318858981' }}
      />
    </div>
  );
}
