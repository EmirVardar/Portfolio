import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Check, Plus } from 'lucide-react';
import { services, getServiceBySlug } from '../data/services';
import usePageMeta from '../hooks/usePageMeta';
import { serviceMeta } from '../data/pageMeta';
import Reveal from '../components/Reveal';
import SpotlightCard from '../components/SpotlightCard';
import CtaBand from '../components/CtaBand';
import IconBadge from '../components/IconBadge';
import NotFound from './NotFound';

const WHATSAPP_NUMBER = '905318858981';

function HeroVisual({ service }) {
  const [first, second] = service.features;
  return (
    <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">
      <div aria-hidden className="absolute inset-6 rounded-full bg-teal-200/40 blur-3xl" />
      <div aria-hidden className="absolute inset-4 rounded-full border border-teal-700/10" />
      <div aria-hidden className="absolute inset-14 rounded-full border border-dashed border-teal-700/20 animate-spin-slow" />

      <img
        src={service.icon}
        alt={service.title}
        className="relative w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl animate-sway"
      />

      {[first, second].filter(Boolean).map((f, i) => (
        <div
          key={f.title}
          className={`absolute animate-float ${i === 0 ? 'top-6 left-0 lg:-left-8' : 'bottom-10 right-0 lg:-right-8'}`}
          style={{ animationDelay: `${i * -3}s` }}
        >
          <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/90 backdrop-blur border border-neutral-200 shadow-xl shadow-neutral-900/10">
            <span className="w-6 h-6 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
              <Check size={13} strokeWidth={2.5} />
            </span>
            <span className="text-xs font-semibold text-ink whitespace-nowrap">{f.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  const meta = service ? serviceMeta(service) : { title: 'Sayfa bulunamadı' };
  usePageMeta(meta.title, meta.description);

  if (!service) return <NotFound />;

  const waText = encodeURIComponent(`Merhaba, ${service.title} hakkında bilgi almak istiyorum.`);
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div aria-hidden className="absolute inset-0 bg-dot-grid" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-teal-700" />
              <p className="text-sm font-semibold tracking-wide text-teal-700">{service.tag}</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.1]">
              {service.heroTitle}{' '}
              <span className="font-serif italic font-medium text-teal-700">{service.heroHighlight}</span>
            </h1>
            <p className="mt-5 text-neutral-500 leading-relaxed max-w-lg">{service.heroDesc}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold shadow-lg shadow-neutral-900/10 hover:bg-teal-800 hover:shadow-xl hover:shadow-teal-900/20 hover:-translate-y-0.5 transition-all duration-300"
              >
                Ücretsiz Demo İsteyin
              </a>
              <Link
                to="/#hizmetler"
                className="group text-sm font-medium text-neutral-600 hover:text-ink transition-colors inline-flex items-center gap-1"
              >
                Diğer hizmetler
                <ArrowRight size={15} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal delay={150} className="flex justify-center md:justify-end">
            <HeroVisual service={service} />
          </Reveal>
        </div>
      </section>

      {/* Value */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-teal-700" />
              <p className="text-sm font-semibold tracking-wide text-teal-700">{service.valueKicker}</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
              {service.valueTitle}{' '}
              <span className="font-serif italic font-medium text-teal-700">{service.valueHighlight}</span>
              {/^[,.;:!?]/.test(service.valueTitleEnd) ? '' : ' '}
              {service.valueTitleEnd}
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-neutral-500 leading-relaxed md:border-l md:border-teal-700/20 md:pl-8">
              {service.valueDesc}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
              İçinde <span className="font-serif italic font-medium text-teal-700">ne var?</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {service.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 110} className="h-full">
                <SpotlightCard className="h-full p-7 text-center">
                  <IconBadge label={`0${i + 1}`} index={i} className="flex justify-center" />
                  <h3 className="mt-5 font-semibold text-ink">{f.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{f.desc}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
              Nasıl <span className="font-serif italic font-medium text-teal-700">ilerliyoruz?</span>
            </h2>
          </Reveal>
          <div className="relative mt-14">
            <div
              aria-hidden
              className="hidden md:block absolute top-6 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-teal-700/0 via-teal-700/30 to-teal-700/0"
            />
            <div className="grid md:grid-cols-3 gap-10">
              {service.steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 120} className="text-center">
                  <div className="relative mx-auto w-12 h-12 rounded-full bg-white border border-neutral-200 shadow-lg shadow-teal-900/5 flex items-center justify-center font-serif italic text-xl text-teal-700">
                    {i + 1}
                  </div>
                  <h3 className="mt-5 font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed max-w-[280px] mx-auto">{step.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-24">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink mb-12">
              Aklınıza <span className="font-serif italic font-medium text-teal-700">takılanlar</span>
            </h2>
          </Reveal>
          <div className="space-y-3">
            {service.faq.map((item, i) => (
              <Reveal key={item.q} delay={(i % 4) * 80}>
                <details className="group rounded-2xl border border-neutral-200 bg-white px-6 py-5 transition-all duration-300 hover:border-teal-700/30 open:border-teal-700/40 open:shadow-lg open:shadow-teal-900/5">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-medium text-ink [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span className="ml-4 shrink-0 w-7 h-7 rounded-full bg-teal-50 flex items-center justify-center text-teal-700 transition-transform duration-300 group-open:rotate-45">
                      <Plus size={15} strokeWidth={2} />
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-neutral-500 leading-relaxed">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={service.ctaTitle}
        desc="Formu doldurmak yerine doğrudan yazmak isterseniz, WhatsApp'tan bana ulaşabilirsiniz."
        primary={{ label: "WhatsApp'tan Yazın", href: `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}` }}
        secondary={{ label: 'Formdan Ulaşın', to: '/#iletisim' }}
      />

      {/* Other services */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <p className="text-xs font-semibold tracking-wide text-neutral-500 mb-6">DİĞER HİZMETLER</p>
          <div className="flex flex-wrap justify-center gap-3">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/hizmetler/${s.slug}`}
                className="group inline-flex items-center gap-2 pl-2 pr-4 py-1.5 rounded-full border border-neutral-200 text-sm text-neutral-600 hover:border-teal-700/40 hover:text-ink hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
              >
                <img
                  src={s.icon}
                  alt=""
                  className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
                />
                {s.navLabel}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
