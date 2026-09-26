import useReveal from '../hooks/useReveal';

export default function ServiceCard({ icon, tag, title, desc, index = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${(index % 3) * 90}ms` : '0ms' }}
      className={`group p-6 rounded-2xl border border-neutral-200 bg-white transition-all duration-700 ease-out hover:border-teal-700/40 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <div className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img src={icon} alt="" className="w-full h-full object-contain" loading="lazy" />
      </div>
      <p className="mt-4 text-xs font-semibold tracking-wide text-neutral-400">{tag}</p>
      <h3 className="mt-1 font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{desc}</p>
    </div>
  );
}
