import { Smartphone, Gauge, Search } from 'lucide-react';
import useReveal from '../hooks/useReveal';

const badges = [
  { icon: Gauge, label: 'Hızlı' },
  { icon: Smartphone, label: 'Mobil Uyumlu' },
  { icon: Search, label: 'SEO Dostu' },
];

export default function Showcase() {
  const [ref, visible] = useReveal();

  return (
    <section className="bg-neutral-50 border-y border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-teal-700" />
            <p className="text-sm font-semibold tracking-wide text-teal-700">ÖRNEK ÇALIŞMA</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
            Sizin işletmeniz için de <span className="font-serif italic font-medium text-teal-700">böyle</span>{' '}
            olabilir
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md leading-relaxed">
            Aşağıdaki demo, bir Akhisar işletmesi için birkaç günde hazırlanabilecek bir web sitesi
            örnek bir konsepttir; ne yapabileceğimin bir gösterimi.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-neutral-200 text-sm text-neutral-600"
              >
                <Icon size={15} strokeWidth={1.75} className="text-teal-700" />
                {label}
              </span>
            ))}
          </div>

          <a
            href="#iletisim"
            className="mt-8 inline-block px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold shadow-lg shadow-neutral-900/10 hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-900/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            Bana da böyle bir site lazım
          </a>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="animate-float rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/10 overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 border-b border-neutral-200">
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
              <span className="ml-3 px-3 py-1 rounded-md bg-white border border-neutral-200 text-xs text-neutral-400 font-mono">
                akhisarlezzetduragi.com
              </span>
            </div>

            <div className="relative p-8 md:p-10">
              <div aria-hidden className="absolute inset-0 bg-dot-grid pointer-events-none" />
              <div className="relative">
                <p className="text-xs font-semibold tracking-wide text-teal-700">AKHİSAR / RESTORAN DEMO</p>
                <h3 className="mt-3 text-2xl md:text-3xl font-extrabold text-ink leading-tight">
                  Akhisar Lezzet Durağı
                </h3>
                <p className="mt-2 text-sm text-neutral-500 max-w-xs">
                  Taze malzemeler, ev yapımı lezzetler ve sıcak bir atmosfer.
                </p>
                <div className="mt-6 flex gap-3">
                  <span className="px-4 py-2 rounded-full bg-ink text-white text-xs font-semibold">Menüyü Gör</span>
                  <span className="px-4 py-2 rounded-full border border-neutral-300 text-ink text-xs font-semibold">
                    Rezervasyon
                  </span>
                </div>

                <div className="mt-8 p-4 rounded-xl bg-white border border-neutral-200 max-w-xs">
                  <div className="flex items-center justify-between text-xs text-neutral-500 mb-2">
                    <span>Menü Paneli</span>
                    <span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal-700 font-semibold">CANLI</span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-700">Türk Kahvesi</span>
                      <span className="font-semibold text-ink">₺45</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-neutral-700">Ev Yapımı Cheesecake</span>
                      <span className="font-semibold text-ink">₺85</span>
                    </div>
                  </div>
                  <p className="mt-3 text-[11px] text-neutral-500">
                    QR ile masadan erişim — fiyatı yazınca anında yansır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
