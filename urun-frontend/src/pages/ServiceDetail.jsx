import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { services, getServiceBySlug } from '../data/services';
import useReveal from '../hooks/useReveal';

const WHATSAPP_NUMBER = '905318858981';

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

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/" replace />;

  const waText = encodeURIComponent(`Merhaba, ${service.title} hakkında bilgi almak istiyorum.`);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div aria-hidden className="absolute inset-0 bg-dot-grid" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-teal-700" />
              <p className="text-sm font-semibold tracking-wide text-teal-700">{service.tag}</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink">
              {service.heroTitle}{' '}
              <span className="font-serif italic font-medium text-teal-700">{service.heroHighlight}</span>
            </h1>
            <p className="mt-5 text-neutral-500 leading-relaxed max-w-lg">{service.heroDesc}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-teal-800 hover:-translate-y-0.5 transition-all"
              >
                WhatsApp'tan Yazın
              </a>
              <Link
                to="/#hizmetler"
                className="text-sm font-medium text-neutral-600 hover:text-ink transition-colors inline-flex items-center gap-1"
              >
                Diğer hizmetler <ArrowRight size={15} strokeWidth={1.75} />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={120} className="flex justify-center md:justify-end">
            <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
              <img src={service.icon} alt={service.title} className="w-full h-full object-contain drop-shadow-xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Value */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-teal-700" />
              <p className="text-sm font-semibold tracking-wide text-teal-700">{service.valueKicker}</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
              {service.valueTitle}{' '}
              <span className="font-serif italic font-medium text-teal-700">{service.valueHighlight}</span>{' '}
              {service.valueTitleEnd}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-neutral-500 leading-relaxed">{service.valueDesc}</p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-12">İçinde ne var?</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <div className="h-full p-6 rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-teal-700/40 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1">
                  <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center text-teal-700">
                    <Check size={17} strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-12">3 adımda hazır</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {service.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="relative">
                  <p className="font-serif italic text-3xl text-teal-700/30">0{i + 1}</p>
                  <h3 className="mt-2 font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink mb-10">Aklınıza takılanlar</h2>
          </Reveal>
          <div className="space-y-3">
            {service.faq.map((item, i) => (
              <Reveal key={item.q} delay={(i % 4) * 70}>
                <details className="group rounded-2xl border border-neutral-200 px-5 py-4 open:border-teal-700/40">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-ink">
                    {item.q}
                    <span className="ml-4 shrink-0 text-teal-700 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-ink">
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-2xl mx-auto">
              {service.ctaTitle}
            </h2>
            <p className="mt-4 text-neutral-400 max-w-lg mx-auto">
              Formu doldurmak yerine doğrudan yazmak isterseniz, WhatsApp'tan bana ulaşabilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-500 hover:-translate-y-0.5 transition-all"
              >
                WhatsApp'tan Yazın
              </a>
              <Link
                to="/#iletisim"
                className="px-6 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 transition-all"
              >
                Formdan Ulaşın
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="text-xs font-semibold tracking-wide text-neutral-400 mb-5">DİĞER HİZMETLER</p>
          <div className="flex flex-wrap gap-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/hizmetler/${s.slug}`}
                className="px-4 py-2 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-teal-700/40 hover:text-ink transition-colors"
              >
                {s.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
