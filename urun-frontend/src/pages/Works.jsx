import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { pageMeta } from '../data/pageMeta';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import { RestaurantSite, ZeytinCart, QrMenuPhone, QrCode, GoogleProfileCard } from '../components/Mockups';

const samples = [
  {
    tag: 'WEB SİTESİ',
    title: 'Akhisar Lezzet Durağı',
    desc: 'Yerel bir restoran için mobil uyumlu tanıtım sitesi; menü ve rezervasyon bir tık uzakta.',
    href: '/hizmetler/web-sitesi-tasarimi',
    visual: (
      <div className="w-[340px] scale-[0.82] sm:scale-90">
        <RestaurantSite />
      </div>
    ),
  },
  {
    tag: 'E-TİCARET',
    title: 'ZeytinEvi Mağazası',
    desc: 'Akhisar zeytini ve zeytinyağı satan bir işletme için sipariş ve kargo akışı kurulu online mağaza.',
    href: '/hizmetler/e-ticaret-cozumleri',
    visual: <ZeytinCart />,
  },
  {
    tag: 'QR MENÜ',
    title: 'Kahve Molası Kafe',
    desc: 'Masadaki QR ile açılan, fiyatı panelden anında güncellenen kafe menüsü.',
    href: '/hizmetler/qr-menu',
    visual: (
      <div className="flex items-end gap-5">
        <QrCode className="mb-6 -rotate-6" />
        <QrMenuPhone />
      </div>
    ),
  },
  {
    tag: 'GOOGLE İŞLETME PROFİLİ',
    title: 'Akhisar Oto Bakım',
    desc: 'Haritalarda doğru bilgi, çalışma saatleri ve tek dokunuşla arama; müşteri sizi kolayca bulur.',
    href: '/hizmetler/google-isletme-profili',
    visual: <GoogleProfileCard />,
  },
];

function SampleCard({ sample, index }) {
  return (
    <SpotlightCard as={Link} to={sample.href} className="h-full flex flex-col overflow-hidden">
      <div className="relative h-[360px] flex items-center justify-center bg-gradient-to-br from-neutral-50 to-teal-50/60 border-b border-neutral-100 overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-dot-grid opacity-60" />
        <div
          className="relative animate-float transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
          style={{ animationDelay: `${index * -1.5}s` }}
        >
          {sample.visual}
        </div>
      </div>
      <div className="flex-1 flex flex-col p-7">
        <p className="text-xs font-semibold tracking-wide text-teal-700">{sample.tag} · ÖRNEK KONSEPT</p>
        <h3 className="mt-2 text-xl font-bold text-ink">{sample.title}</h3>
        <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{sample.desc}</p>
        <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink group-hover:text-teal-700 transition-colors">
          Bu hizmeti incele
          <ArrowUpRight
            size={16}
            strokeWidth={1.75}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </span>
      </div>
    </SpotlightCard>
  );
}

export default function Works() {
  usePageMeta(pageMeta['/calismalar'].title, pageMeta['/calismalar'].description);

  return (
    <div className="bg-white">
      <PageHero
        kicker="ÇALIŞMALAR"
        title={
          <>
            Neler <span className="font-serif italic font-medium text-teal-700">yapabileceğimin</span> örnekleri
          </>
        }
        desc="Farklı sektörler için hazırladığım örnek konseptler. Sizin işletmeniz için de ücretsiz bir demo hazırlayabilirim."
      />

      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-2 gap-6">
            {samples.map((sample, i) => (
              <Reveal key={sample.title} delay={(i % 2) * 120} className="h-full">
                <SampleCard sample={sample} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={
          <>
            Sıradaki işi <span className="font-serif italic font-medium text-teal-400">birlikte</span> yapalım mı?
          </>
        }
        desc="İşletmenizi anlatın, 24–48 saat içinde size özel demonuzu hazırlayayım."
        primary={{ label: 'İletişime Geçin', to: '/#iletisim' }}
        secondary={{ label: "WhatsApp'tan Yazın", href: 'https://wa.me/905318858981' }}
      />
    </div>
  );
}
