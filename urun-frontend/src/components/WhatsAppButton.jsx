import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="https://wa.me/905318858981"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp'tan yazın"
      className={`group fixed z-40 bottom-5 right-5 md:bottom-8 md:right-8 flex items-center gap-2 pl-3.5 pr-3.5 md:pr-5 h-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-green-900/20 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-900/30 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      <span aria-hidden className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
      <MessageCircle size={26} strokeWidth={2} className="relative" />
      <span className="relative hidden md:inline text-sm font-semibold">WhatsApp</span>
    </a>
  );
}
