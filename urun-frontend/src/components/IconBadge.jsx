/*
 * Sitedeki tüm çizgi ikonlar ve numaralar için ortak rozet.
 * Eğilmeden hafifçe süzülür; kart (group) üzerine gelince teal'e dolar.
 */
export default function IconBadge({ icon: Icon, label, index = 0, size = 'md', className = '' }) {
  const box = size === 'lg' ? 'w-16 h-16 rounded-2xl' : 'w-14 h-14 rounded-2xl';
  const iconSize = size === 'lg' ? 26 : 22;

  return (
    <div className={`animate-bob ${className}`} style={{ animationDelay: `${index * -0.9}s` }}>
      <div
        className={`relative ${box} flex items-center justify-center bg-gradient-to-b from-white to-teal-50 text-teal-700 ring-1 ring-teal-700/10 shadow-[0_8px_24px_-8px_rgba(15,118,110,0.35),inset_0_1px_0_white] transition-all duration-500 ease-out-expo group-hover:from-teal-600 group-hover:to-teal-800 group-hover:text-white group-hover:ring-teal-700/0 group-hover:shadow-[0_14px_30px_-10px_rgba(15,118,110,0.6)] group-hover:scale-110`}
      >
        {Icon ? (
          <Icon size={iconSize} strokeWidth={1.75} />
        ) : (
          <span className="font-serif italic text-xl font-medium leading-none">{label}</span>
        )}
      </div>
    </div>
  );
}
