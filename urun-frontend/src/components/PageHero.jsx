import Reveal from './Reveal';

export default function PageHero({ kicker, title, desc, children }) {
  return (
    <section className="relative overflow-hidden border-b border-neutral-200">
      <div aria-hidden className="absolute inset-0 bg-dot-grid" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[640px] h-[420px] bg-teal-200/30 rounded-full blur-3xl"
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
        <Reveal>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="w-6 h-px bg-teal-700" />
            <p className="text-sm font-semibold tracking-wide text-teal-700">{kicker}</p>
            <span className="w-6 h-px bg-teal-700" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-ink max-w-3xl mx-auto leading-[1.08]">
            {title}
          </h1>
          {desc && <p className="mt-6 text-lg text-neutral-500 leading-relaxed max-w-xl mx-auto">{desc}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
