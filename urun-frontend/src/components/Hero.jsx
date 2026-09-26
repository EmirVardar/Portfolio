import { ShoppingBag, Star } from 'lucide-react';
import RotatingWord from './RotatingWord';
import { ZeytinSite, ZeytinCart } from './Mockups';

function FloatingChip({ icon: Icon, iconClass, title, subtitle, className, delay = '0s' }) {
  return (
    <div className={`absolute animate-float ${className}`} style={{ animationDelay: delay }}>
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-white/90 backdrop-blur border border-neutral-200 shadow-xl shadow-neutral-900/10">
        <span className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconClass}`}>
          <Icon size={15} strokeWidth={2} fill={Icon === Star ? 'currentColor' : 'none'} />
        </span>
        <div>
          <p className="text-[11px] font-semibold text-ink leading-tight">{title}</p>
          <p className="text-[10px] text-neutral-400">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

function HeroMockup() {
  return (
    <div className="relative animate-fade-up" style={{ animationDelay: '150ms' }}>
      <div aria-hidden className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-teal-200/40 via-white/0 to-lime-100/40 blur-2xl" />

      <div className="relative">
        <ZeytinSite />
      </div>

      <div className="absolute -bottom-10 -right-2 sm:-right-6 animate-float" style={{ animationDelay: '-2s' }}>
        <ZeytinCart className="scale-[0.8] origin-bottom-right sm:scale-100" />
      </div>

      <FloatingChip
        icon={ShoppingBag}
        iconClass="bg-teal-50 text-teal-700"
        title="Yeni sipariş"
        subtitle="Web sitesinden · az önce"
        className="-top-6 -right-2 sm:-right-6"
        delay="-4s"
      />
      <FloatingChip
        icon={Star}
        iconClass="bg-amber-50 text-amber-500"
        title="Google İşletme Profili"
        subtitle="Haritalarda görünür"
        className="bottom-6 -left-2 sm:-left-10"
        delay="-1s"
      />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dot-grid" />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-teal-200/40 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-20 md:pb-32 grid lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-12 items-center">
        <div className="animate-fade-up">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-6 h-px bg-teal-700" />
            <p className="text-sm font-semibold tracking-wide text-teal-700">DİJİTAL ÇÖZÜMLER · AKHİSAR</p>
          </div>

          <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl font-extrabold tracking-tight text-ink leading-[1.05]">
            İşletmeniz için
            <br />
            <RotatingWord />
          </h1>

          <p className="mt-8 text-lg text-neutral-500 max-w-lg leading-relaxed">
            Akhisar ve çevresinde işletmenizin markasını dijitalde büyütüyorum. Web sitesi, QR menü,
            sosyal medya ve reklam; ihtiyacınıza göre, şeffaf fiyatlarla.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#hizmetler"
              className="px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold shadow-lg shadow-neutral-900/10 hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-900/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Hizmetlerim
            </a>
            <a
              href="https://wa.me/905318858981"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-full border border-neutral-300 bg-white/60 backdrop-blur text-ink text-sm font-semibold hover:border-teal-700 hover:text-teal-700 hover:-translate-y-0.5 transition-all duration-300"
            >
              WhatsApp'tan Yaz
            </a>
          </div>
        </div>

        <div className="px-2 sm:px-8 lg:pl-0 lg:pr-6 xl:pr-0 pb-10">
          <HeroMockup />
        </div>
      </div>
    </section>
  );
}
