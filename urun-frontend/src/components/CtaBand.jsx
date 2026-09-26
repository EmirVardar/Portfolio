import { Link } from 'react-router-dom';
import Reveal from './Reveal';

export default function CtaBand({ title, desc, primary, secondary }) {
  const primaryClass =
    'px-6 py-3.5 rounded-full bg-teal-600 text-white text-sm font-semibold shadow-lg shadow-teal-500/20 hover:bg-teal-500 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5 transition-all duration-300';
  const secondaryClass =
    'px-6 py-3.5 rounded-full border border-white/20 text-white text-sm font-semibold hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300';

  const renderLink = (link, className) =>
    link.href ? (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {link.label}
      </a>
    ) : (
      <Link to={link.to} className={className}>
        {link.label}
      </Link>
    );

  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-teal-500/20 rounded-full blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:26px_26px]"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            {title}
          </h2>
          {desc && <p className="mt-5 text-neutral-400 max-w-lg mx-auto">{desc}</p>}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            {renderLink(primary, primaryClass)}
            {secondary && renderLink(secondary, secondaryClass)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
