import { Menu, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const links = [
  { label: 'Çalışmalar', to: '/calismalar' },
  { label: 'Neden Ben', to: '/neden-emir' },
  { label: 'Blog', to: '/blog' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-ink">
          Emir <span className="text-teal-700">Vardar</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/#hizmetler"
              className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-ink transition-colors"
            >
              Hizmetler
              <ChevronDown size={14} strokeWidth={2} />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72">
                <div className="rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/10 p-2 grid grid-cols-1 gap-0.5">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/hizmetler/${s.slug}`}
                      className="px-4 py-2.5 rounded-xl text-sm text-neutral-600 hover:bg-neutral-50 hover:text-ink transition-colors"
                    >
                      {s.navLabel}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-neutral-600 hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/905318858981"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-neutral-600 hover:text-ink transition-colors"
          >
            0531 885 89 81
          </a>
          <Link
            to="/#iletisim"
            className="px-4 py-2 rounded-full bg-ink text-white text-sm font-medium hover:bg-teal-800 transition-colors"
          >
            Teklif Al
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-200 bg-white px-6 py-4 space-y-1">
          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className="w-full flex items-center justify-between py-2 text-sm font-medium text-neutral-700"
          >
            Hizmetler
            <ChevronDown
              size={16}
              strokeWidth={2}
              className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
            />
          </button>
          {mobileServicesOpen && (
            <div className="pl-3 pb-2 space-y-1 border-l border-neutral-200">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/hizmetler/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="block py-1.5 text-sm text-neutral-500"
                >
                  {s.navLabel}
                </Link>
              ))}
            </div>
          )}
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-neutral-700"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/#iletisim"
            onClick={() => setOpen(false)}
            className="block mt-3 px-4 py-2 rounded-full bg-ink text-white text-sm font-medium text-center"
          >
            Teklif Al
          </Link>
        </div>
      )}
    </header>
  );
}
