import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { serviceGroups } from '../data/services';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import SpotlightCard from './SpotlightCard';

function GroupCard({ group, index }) {
  const [lead, ...rest] = group.items;

  return (
    <SpotlightCard className="h-full flex flex-col p-7">
      <div className="flex items-start justify-between">
        <p className="font-serif italic text-2xl text-teal-700/40">{group.n}</p>
        <img
          src={lead.icon}
          alt=""
          className="w-20 h-20 -mt-2 -mr-2 object-contain drop-shadow-lg animate-sway"
          style={{ animationDelay: `${index * -1.3}s` }}
          loading="lazy"
        />
      </div>
      <h3 className="mt-2 text-xl font-bold text-ink">{group.title}</h3>
      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{group.desc}</p>

      <ul className="mt-6 pt-2 flex-1 border-t border-neutral-100 divide-y divide-neutral-100">
        {[lead, ...rest].map((s) => (
          <li key={s.slug}>
            <Link
              to={`/hizmetler/${s.slug}`}
              className="group/item flex items-center gap-3 py-3 text-sm font-medium text-neutral-700 hover:text-teal-700 transition-colors"
            >
              <img
                src={s.icon}
                alt=""
                className="w-7 h-7 object-contain transition-transform duration-500 ease-out-expo group-hover/item:scale-125 group-hover/item:-rotate-6"
                loading="lazy"
              />
              <span className="flex-1">{s.title}</span>
              <ArrowUpRight
                size={16}
                strokeWidth={1.75}
                className="text-neutral-300 transition-all duration-300 group-hover/item:text-teal-700 group-hover/item:translate-x-0.5 group-hover/item:-translate-y-0.5"
              />
            </Link>
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}

export default function Services() {
  return (
    <section id="hizmetler" className="bg-neutral-50 border-y border-neutral-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-28">
        <SectionHeading
          kicker="HİZMETLERİM"
          title={
            <>
              Tek elden <span className="font-serif italic font-medium text-teal-700">tüm dijital</span> ihtiyaçlarınız
            </>
          }
          desc="İşletmenizi internette görünür kılan her hizmet, tek muhataptan. İster tek tek, ister paket halinde."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {serviceGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 120} className="h-full">
              <GroupCard group={group} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
