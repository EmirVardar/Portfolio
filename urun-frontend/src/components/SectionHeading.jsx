import Reveal from './Reveal';

export default function SectionHeading({ kicker, title, desc, align = 'center', as: Tag = 'h2' }) {
  const centered = align === 'center';
  return (
    <Reveal className={centered ? 'text-center' : ''}>
      <div className={`flex items-center gap-3 mb-4 ${centered ? 'justify-center' : ''}`}>
        <span className="w-6 h-px bg-teal-700" />
        <p className="text-sm font-semibold tracking-wide text-teal-700">{kicker}</p>
        {centered && <span className="w-6 h-px bg-teal-700" />}
      </div>
      <Tag
        className={`text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-2xl ${centered ? 'mx-auto' : ''}`}
      >
        {title}
      </Tag>
      {desc && (
        <p className={`mt-4 text-neutral-500 leading-relaxed max-w-xl ${centered ? 'mx-auto' : ''}`}>{desc}</p>
      )}
    </Reveal>
  );
}
