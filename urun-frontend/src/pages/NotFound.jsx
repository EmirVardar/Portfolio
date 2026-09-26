import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFound() {
  usePageMeta('Sayfa bulunamadı');

  return (
    <div className="relative overflow-hidden min-h-[70vh] flex items-center justify-center bg-white">
      <div aria-hidden className="absolute inset-0 bg-dot-grid" />
      <div className="relative text-center px-6 animate-fade-up">
        <p className="font-serif italic text-8xl text-teal-700/30 animate-float">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-ink">Sayfa bulunamadı</h1>
        <p className="mt-3 text-neutral-500">Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.</p>
        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold shadow-lg shadow-neutral-900/10 hover:bg-teal-800 hover:-translate-y-0.5 transition-all duration-300"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
