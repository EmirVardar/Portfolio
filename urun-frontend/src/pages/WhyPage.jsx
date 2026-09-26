import { Link } from 'react-router-dom';
import { Eye, ReceiptText, MapPin, Zap, X, Check } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const reasons = [
  {
    icon: Eye,
    title: 'Önce görün, sonra karar verin',
    desc: 'Demonuzu ücretsiz hazırlıyorum. Beğenmezseniz hiçbir yükümlülüğünüz olmaz.',
  },
  {
    icon: ReceiptText,
    title: 'Şeffaf, esnaf dostu fiyat',
    desc: 'Gizli maliyet yok. Bütçenize göre tek tek ya da paket halinde seçebilirsiniz.',
  },
  {
    icon: MapPin,
    title: "Akhisar'da yüz yüze",
    desc: 'Uzaktan mail atan biri değilim; işletmenizi tanır, yüz yüze çözüm kurarım.',
  },
  {
    icon: Zap,
    title: 'Hızlı teslim',
    desc: 'Demo 24 saat, tam kurulum günler içinde. Beklemeden yayına geçin.',
  },
];

const comparison = [
  { classic: 'Aylarca süren, belirsiz teslim tarihleri', mine: 'Demo 24-48 saat içinde elinizde' },
  { classic: 'Anlaşılmaz teknik teklifler', mine: 'Sade dille anlatılan, net fiyatlı teklif' },
  { classic: 'Tek seferlik iş, sonra sessizlik', mine: 'Teslimden sonra da ulaşılabilir destek' },
  { classic: 'Şablon üstüne şablon', mine: 'İşletmenize göre kurulan, özgün çözüm' },
];

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function WhyPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div aria-hidden className="absolute inset-0 bg-dot-grid" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-teal-700" />
              <p className="text-sm font-semibold tracking-wide text-teal-700">NEDEN BEN</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink max-w-2xl">
              Önce demo, <span className="font-serif italic font-medium text-teal-700">sonra karar</span>
            </h1>
            <p className="mt-5 text-neutral-500 leading-relaxed max-w-xl">
              İşletmenizi bir cümle veya bir teklif üzerinden değil, çıkardığım örnek üzerinden
              değerlendirmenizi isterim. Görmediğiniz bir şeye para vermenizi beklemiyorum.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 py-20">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-12 text-center">
              Klasik ajans böyle çalışır. <span className="font-serif italic font-medium text-teal-700">Ben böyle.</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3">
            <Reveal>
              <div className="space-y-3">
                {comparison.map((c) => (
                  <div key={c.classic} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-neutral-200">
                    <X size={16} strokeWidth={2} className="mt-0.5 text-neutral-300 shrink-0" />
                    <p className="text-sm text-neutral-500">{c.classic}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-3">
                {comparison.map((c) => (
                  <div key={c.mine} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-teal-700/30">
                    <Check size={16} strokeWidth={2} className="mt-0.5 text-teal-700 shrink-0" />
                    <p className="text-sm text-ink font-medium">{c.mine}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-12">Dört sözümüz var</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <Reveal key={reason.title} delay={(index % 4) * 90}>
                  <div className="h-full p-6 rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-teal-700/40 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
                      <Icon size={20} strokeWidth={1.75} />
                    </div>
                    <h3 className="mt-4 font-semibold text-ink">{reason.title}</h3>
                    <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{reason.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-xl mx-auto">
              İşletmenizi <span className="font-serif italic font-medium text-teal-400">konuşalım</span> mı?
            </h2>
            <Link
              to="/#iletisim"
              className="mt-8 inline-block px-6 py-3.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-500 hover:-translate-y-0.5 transition-all"
            >
              İletişime Geçin
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
