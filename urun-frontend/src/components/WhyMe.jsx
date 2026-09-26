import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { reasons } from '../data/reasons';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import SpotlightCard from './SpotlightCard';
import IconBadge from './IconBadge';

export default function WhyMe() {
  return (
    <section id="neden-ben" className="bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <SectionHeading
          kicker="NEDEN BEN"
          title={
            <>
              İnsana dokunan <span className="font-serif italic font-medium text-teal-700">dijitallik</span>
            </>
          }
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            return (
              <Reveal key={reason.title} delay={index * 110} className="h-full">
                <SpotlightCard className="h-full p-7 text-center">
                  <IconBadge icon={reason.icon} index={index} className="flex justify-center" />
                  <h3 className="mt-5 font-semibold text-ink">{reason.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{reason.desc}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 text-center">
          <Link
            to="/neden-emir"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-teal-700 transition-colors"
          >
            Beni daha yakından tanıyın
            <ArrowRight size={16} strokeWidth={1.75} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
