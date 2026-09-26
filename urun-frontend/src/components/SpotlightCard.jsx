export default function SpotlightCard({ children, className = '', as: Tag = 'div', ...props }) {
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      onMouseMove={handleMove}
      className={`spotlight group rounded-2xl border border-neutral-200 bg-white shadow-sm shadow-neutral-900/[0.03] transition-all duration-500 ease-out-expo hover:border-teal-700/30 hover:shadow-2xl hover:shadow-teal-900/[0.08] hover:-translate-y-1.5 ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
