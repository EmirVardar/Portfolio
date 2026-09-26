import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { serviceGroups } from '../data/services';

const links = [
  { label: 'Çalışmalar', to: '/calismalar' },
  { label: 'Neden Ben', to: '/neden-emir' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Sayfa değişince açık menüleri kapat
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl border-neutral-200 shadow-sm shadow-neutral-900/[0.03]'
          : 'bg-white/0 border-transparent'
      }`}
    >
      <div className="relative max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight text-ink">
          Emir <span className="text-teal-700">Vardar</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <div
            className="h-16 flex items-center"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            onFocus={() => setServicesOpen(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setServicesOpen(false);
            }}
            onKeyDown={(e) => e.key === 'Escape' && setServicesOpen(false)}
          >
            <Link
              to="/#hizmetler"
              className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-ink transition-colors"
            >
              Hizmetler
              <ChevronDown
                size={14}
                strokeWidth={2}
                className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
              />
            </Link>

            <div
              className={`absolute top-full inset-x-6 lg:inset-x-auto lg:left-1/2 lg:-translate-x-1/2 lg:w-[720px] transition-all duration-300 ease-out-expo ${
                servicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
              }`}
            >
              <div className="mt-1 rounded-2xl border border-neutral-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-neutral-900/10 p-3 grid grid-cols-3 gap-1">
                {serviceGroups.map((group) => (
                  <div key={group.title} className="p-2">
                    <p className="px-2 pb-2 text-[11px] font-semibold tracking-wide text-neutral-500">
                      {group.title.toLocaleUpperCase('tr')}
                    </p>
                    {group.items.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/hizmetler/${s.slug}`}
                        className="group flex items-center gap-2.5 px-2 py-2 rounded-xl text-sm text-neutral-600 hover:bg-neutral-50 hover:text-ink transition-colors"
                      >
                        <img
                          src={s.icon}
                          alt=""
                          className="w-6 h-6 object-contain transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
                        />
                        {s.navLabel}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative text-sm font-medium transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-teal-700 after:transition-all after:duration-300 ${
                pathname === link.to
                  ? 'text-ink after:w-full'
                  : 'text-neutral-600 hover:text-ink after:w-0 hover:after:w-full'
              }`}
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
            className="px-4 py-2 rounded-full bg-ink text-white text-sm font-medium shadow-md shadow-neutral-900/10 hover:bg-teal-800 hover:-translate-y-0.5 transition-all duration-300"
          >
            Teklif Al
          </Link>
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`md:hidden grid transition-all duration-300 ease-out-expo ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-neutral-200 bg-white px-6 py-4 space-y-1">
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
              <div className="pl-3 pb-2 space-y-3 border-l border-neutral-200">
                {serviceGroups.map((group) => (
                  <div key={group.title}>
                    <p className="pt-1 text-[11px] font-semibold tracking-wide text-neutral-500">
                      {group.title.toLocaleUpperCase('tr')}
                    </p>
                    {group.items.map((s) => (
                      <Link key={s.slug} to={`/hizmetler/${s.slug}`} className="block py-1.5 text-sm text-neutral-500">
                        {s.navLabel}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            )}
            {links.map((link) => (
              <Link key={link.to} to={link.to} className="block py-2 text-sm font-medium text-neutral-700">
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
        </div>
      </div>
    </header>
  );
}
