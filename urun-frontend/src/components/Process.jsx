import { MessagesSquare, MonitorSmartphone, PencilRuler, Rocket } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import IconBadge from './IconBadge';

const steps = [
  {
    icon: MessagesSquare,
    title: 'Tanışma',
    desc: 'İşletmenize gelir ya da telefonda konuşuruz. Ne sattığınızı, müşterinizi ve ihtiyacınızı dinlerim.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Ücretsiz demo',
    desc: '24–48 saat içinde size özel bir demo hazırlarım. Ödeme yapmadan önce görürsünüz.',
  },
  {
    icon: PencilRuler,
    title: 'Revize ve onay',
    desc: 'Beğenmediğiniz yeri birlikte düzeltiriz. Fiyat baştan bellidir, sonradan sürpriz çıkmaz.',
  },
  {
    icon: Rocket,
    title: 'Yayın ve destek',
    desc: 'Onayınızla yayına alırım. Sonrasında da bir telefon uzağınızdayım.',
  },
];

export default function Process() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <SectionHeading
          kicker="NASIL ÇALIŞIYORUM"
          title={
            <>
              Dört adımda <span className="font-serif italic font-medium text-teal-700">yayındasınız</span>
            </>
          }
          desc="Önce görüyorsunuz, sonra karar veriyorsunuz. Beğenmezseniz hiçbir yükümlülüğünüz yok."
        />

        <div className="relative mt-16">
          {/* Adımları birleştiren çizgi */}
          <div
            aria-hidden
            className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-teal-700/0 via-teal-700/30 to-teal-700/0"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((step, index) => {
              return (
                <Reveal key={step.title} delay={index * 120} className="group text-center">
                  <div className="relative w-16 mx-auto">
                    <IconBadge icon={step.icon} index={index} size="lg" />
                    <span className="absolute -top-2 -right-2.5 w-6 h-6 rounded-full bg-ink text-white text-[11px] font-semibold flex items-center justify-center ring-4 ring-white">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-6 font-semibold text-ink text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
