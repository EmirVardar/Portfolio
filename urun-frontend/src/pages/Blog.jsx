import { Link } from 'react-router-dom';
import { PenLine } from 'lucide-react';
import useReveal from '../hooks/useReveal';

function Reveal({ children, className = '' }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Blog() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div aria-hidden className="absolute inset-0 bg-dot-grid" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-teal-700" />
              <p className="text-sm font-semibold tracking-wide text-teal-700">BLOG</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink max-w-xl">
              İşletmenize <span className="font-serif italic font-medium text-teal-700">işe yarar</span> bilgiler
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <Reveal>
            <div className="w-14 h-14 mx-auto rounded-2xl bg-teal-50 flex items-center justify-center text-teal-700">
              <PenLine size={24} strokeWidth={1.75} />
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-ink">İlk yazı yayına hazırlanıyor</h2>
            <p className="mt-3 text-neutral-500 leading-relaxed max-w-md mx-auto">
              Web sitesi, Google görünürlüğü ve dijital pazarlama üzerine kısa, uygulanabilir
              yazılar burada yer alacak. O zamana kadar sorularınızı doğrudan WhatsApp'tan
              sorabilirsiniz.
            </p>
            <a
              href="https://wa.me/905318858981"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-teal-800 hover:-translate-y-0.5 transition-all"
            >
              Sorunuzu Sorun
            </a>
          </Reveal>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <Reveal>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-ink">
              Aklınızda bir <span className="font-serif italic font-medium text-teal-700">proje</span> mi var?
            </h2>
            <Link
              to="/#iletisim"
              className="mt-6 inline-block px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-teal-800 hover:-translate-y-0.5 transition-all"
            >
              İletişime Geçin
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
