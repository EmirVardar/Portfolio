import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white">
      <div className="text-center px-6">
        <p className="font-serif italic text-6xl text-teal-700/40">404</p>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-ink">Sayfa bulunamadı</h1>
        <p className="mt-2 text-neutral-500">Aradığınız sayfa taşınmış ya da kaldırılmış olabilir.</p>
        <Link
          to="/"
          className="mt-8 inline-block px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-teal-800 hover:-translate-y-0.5 transition-all"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
