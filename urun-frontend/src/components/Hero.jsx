import RotatingWord from './RotatingWord';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 bg-dot-grid" />
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[520px] h-[520px] bg-teal-200/40 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-52 -left-40 w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="w-6 h-px bg-teal-700" />
            <p className="text-sm font-semibold tracking-wide text-teal-700">DİJİTAL ÇÖZÜMLER · AKHİSAR</p>
          </div>
          <p className="text-sm md:text-base text-neutral-500 max-w-xs md:text-right leading-relaxed">
            Web sitesinden Google İşletme Profiline, sosyal medyadan reklama — işletmenizin dijital
            işini tek elden yönetiyorum.
          </p>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-ink leading-[1.05] max-w-3xl">
          İşletmeniz için
          <br />
          <RotatingWord />
        </h1>

        <p className="mt-8 text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed">
          Akhisar ve çevresinde işletmenizin markasını dijitalde büyütüyorum — web sitesi, QR menü,
          sosyal medya ve reklam; ihtiyacınıza göre, şeffaf fiyatlarla.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#hizmetler"
            className="px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-teal-800 hover:shadow-lg hover:shadow-teal-900/10 hover:-translate-y-0.5 transition-all"
          >
            Hizmetlerim
          </a>
          <a
            href="https://wa.me/905318858981"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full border border-neutral-300 bg-white/60 backdrop-blur text-ink text-sm font-semibold hover:border-teal-700 hover:text-teal-700 hover:-translate-y-0.5 transition-all"
          >
            WhatsApp'tan Yaz
          </a>
        </div>
      </div>
    </section>
  );
}
