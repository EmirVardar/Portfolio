import { X, Check, MapPin, Phone } from 'lucide-react';
import usePageMeta from '../hooks/usePageMeta';
import { pageMeta } from '../data/pageMeta';
import PageHero from '../components/PageHero';
import CtaBand from '../components/CtaBand';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const comparison = [
  { classic: 'Aylarca süren, belirsiz teslim tarihleri', mine: 'Demo 24–48 saat içinde elinizde' },
  { classic: 'Anlaşılmaz teknik teklifler', mine: 'Sade dille anlatılan, net fiyatlı teklif' },
  { classic: 'Tek seferlik iş, sonra sessizlik', mine: 'Teslimden sonra da ulaşılabilir destek' },
  { classic: 'Şablon üstüne şablon', mine: 'İşletmenize göre kurulan, özgün çözüm' },
];

function About() {
  return (
    <section className="bg-white border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">
        <Reveal className="mx-auto">
          <div className="relative w-56 h-56 md:w-64 md:h-64">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-full border border-dashed border-teal-700/25 animate-spin-slow"
            />
            {/* Fotoğraf eklenince: <img src={foto} alt="Emir Vardar" className="w-full h-full rounded-full object-cover" /> */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-teal-600 to-teal-900 shadow-2xl shadow-teal-900/20 flex items-center justify-center">
              <span className="font-serif italic text-7xl text-white/90">EV</span>
            </div>
            <div className="absolute -bottom-2 -right-2 animate-float flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-neutral-200 shadow-xl shadow-neutral-900/10 text-xs font-semibold text-ink">
              <MapPin size={14} strokeWidth={2} className="text-teal-700" />
              Akhisar / Manisa
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="text-center md:text-left">
          <p className="text-sm font-semibold tracking-wide text-teal-700">MERHABA, BEN EMİR</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-ink">
            İşletmenizin <span className="font-serif italic font-medium text-teal-700">dijital ortağı</span>
          </h2>
          <p className="mt-5 text-neutral-500 leading-relaxed">
            Akhisar ve çevresindeki işletmelerin internetteki işini tek elden üstleniyorum: web sitesinden
            Google İşletme Profiline, QR menüden sosyal medyaya kadar.
          </p>
          <p className="mt-4 text-neutral-500 leading-relaxed">
            Ajans gibi uzaktan değil, yüz yüze çalışıyorum. İşletmenize gelir, derdinizi dinler, önce
            ücretsiz bir demo hazırlarım. Beğenirseniz devam ederiz, beğenmezseniz hiçbir borcunuz olmaz.
          </p>
          <a
            href="https://wa.me/905318858981"
            target="_blank"
            rel="noreferrer"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-teal-700 transition-colors"
          >
            <span className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
              <Phone size={16} strokeWidth={1.75} />
            </span>
            0531 885 89 81
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section className="bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-4xl mx-auto px-6 py-20 md:py-24">
        <SectionHeading
          kicker="FARK"
          title={
            <>
              Klasik ajans böyle çalışır. <span className="font-serif italic font-medium text-teal-700">Ben böyle.</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-2 gap-3 mb-3 text-center">
          <p className="text-xs font-semibold tracking-wide text-neutral-500">KLASİK AJANS</p>
          <p className="text-xs font-semibold tracking-wide text-teal-700">BENİMLE</p>
        </div>
        <div className="space-y-3">
          {comparison.map((c, i) => (
            <Reveal key={c.mine} delay={i * 90} className="grid grid-cols-2 gap-3">
              <div className="flex items-start gap-3 p-4 md:p-5 rounded-xl bg-white/60 border border-neutral-200">
                <X size={16} strokeWidth={2} className="mt-0.5 text-neutral-300 shrink-0" />
                <p className="text-sm text-neutral-500 line-through decoration-neutral-400">{c.classic}</p>
              </div>
              <div className="flex items-start gap-3 p-4 md:p-5 rounded-xl bg-white border border-teal-700/30 shadow-lg shadow-teal-900/5">
                <Check size={16} strokeWidth={2.25} className="mt-0.5 text-teal-700 shrink-0" />
                <p className="text-sm text-ink font-medium">{c.mine}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function WhyPage() {
  usePageMeta(pageMeta['/neden-emir'].title, pageMeta['/neden-emir'].description);

  return (
    <div className="bg-white">
      <PageHero
        kicker="NEDEN BEN"
        title={
          <>
            Önce demo, <span className="font-serif italic font-medium text-teal-700">sonra karar</span>
          </>
        }
        desc="İşimi bir teklif mektubuyla değil, hazırladığım örnekle değerlendirmenizi isterim. Görmediğiniz bir şeye para vermenizi beklemiyorum."
      />
      <About />
      <Comparison />
      <CtaBand
        title={
          <>
            İşletmenizi <span className="font-serif italic font-medium text-teal-400">konuşalım</span> mı?
          </>
        }
        primary={{ label: 'İletişime Geçin', to: '/#iletisim' }}
        secondary={{ label: "WhatsApp'tan Yazın", href: 'https://wa.me/905318858981' }}
      />
    </div>
  );
}
