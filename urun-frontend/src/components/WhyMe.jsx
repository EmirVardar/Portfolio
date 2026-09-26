import { Eye, ReceiptText, MapPin, Zap } from 'lucide-react';
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

function ReasonCard({ reason, index }) {
  const [ref, visible] = useReveal();
  const Icon = reason.icon;
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${(index % 4) * 90}ms` : '0ms' }}
      className={`p-6 rounded-2xl border border-neutral-200 bg-white transition-all duration-700 ease-out hover:border-teal-700/40 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700">
        <Icon size={20} strokeWidth={1.75} />
      </div>
      <h3 className="mt-4 font-semibold text-ink">{reason.title}</h3>
      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{reason.desc}</p>
    </div>
  );
}

export default function WhyMe() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="neden-ben" className="bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div
          ref={headRef}
          className={`transition-all duration-700 ease-out ${
            headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-teal-700" />
            <p className="text-sm font-semibold tracking-wide text-teal-700">NEDEN BEN</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-xl">
            İnsana dokunan <span className="font-serif italic font-medium text-teal-700">dijitallik</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason, index) => (
            <ReasonCard key={reason.title} reason={reason} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
