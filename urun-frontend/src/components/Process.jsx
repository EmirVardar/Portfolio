import CountUp from './CountUp';
import useReveal from '../hooks/useReveal';

const steps = [
  {
    n: '01',
    title: 'Demo siteniz kısa sürede hazır',
    desc: 'İşletmenizi tanıyıp, logo ve birkaç fotoğrafla size özel bir demo hazırlıyorum.',
  },
  {
    n: '02',
    title: "Google'da görünür olun",
    desc: 'İşletme profilinizi kurup optimize ediyorum; haritalarda ve aramalarda öne çıkın.',
  },
  {
    n: '03',
    title: 'QR menü ve online sipariş',
    desc: 'Panelden yönetilen dijital menü; masadan QR ile anında erişim, fiyat değişimi anında.',
  },
  {
    n: '04',
    title: 'Sosyal medyada aktif kalın',
    desc: 'Düzenli içerik ve hedefli reklamlarla markanız gündemde kalır, doğru müşteriye ulaşır.',
  },
];

function StepCard({ step, index }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${index * 90}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <p className="font-serif italic text-3xl text-teal-700/40">{step.n}</p>
      <h3 className="mt-3 font-semibold text-ink text-lg">{step.title}</h3>
      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
    </div>
  );
}

export default function Process() {
  const [headRef, headVisible] = useReveal();

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div
          ref={headRef}
          className={`transition-all duration-700 ease-out ${
            headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-teal-700" />
            <p className="text-sm font-semibold tracking-wide text-teal-700">NASIL ÇALIŞIYORUM</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-xl">
            Gerçek demolar, <span className="font-serif italic font-medium text-teal-700">gerçek sonuçlar</span>
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <StepCard key={step.n} step={step} index={index} />
          ))}
        </div>

        <div className="mt-20 grid grid-cols-3 divide-x divide-neutral-200 border-t border-b border-neutral-200 py-10">
          <div className="text-center px-4">
            <p className="text-4xl md:text-5xl font-extrabold text-ink">
              <CountUp target={24} suffix="" />
            </p>
            <p className="mt-2 text-xs md:text-sm text-neutral-500 tracking-wide">SAATTE DEMO</p>
          </div>
          <div className="text-center px-4">
            <p className="text-4xl md:text-5xl font-extrabold text-ink">
              <CountUp target={9} suffix="" />
            </p>
            <p className="mt-2 text-xs md:text-sm text-neutral-500 tracking-wide">FARKLI HİZMET</p>
          </div>
          <div className="text-center px-4">
            <p className="text-4xl md:text-5xl font-extrabold text-ink">
              <CountUp target={100} suffix="%" />
            </p>
            <p className="mt-2 text-xs md:text-sm text-neutral-500 tracking-wide">ŞEFFAF FİYAT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
