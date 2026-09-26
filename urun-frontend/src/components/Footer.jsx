import { Link } from 'react-router-dom';
import { services } from '../data/services';

export default function Footer() {
  return (
    <footer className="bg-ink text-neutral-300">
      <div className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <p className="text-lg font-bold text-white">
            Emir <span className="text-teal-400">Vardar</span>
          </p>
          <p className="mt-4 text-sm text-neutral-400 leading-relaxed max-w-xs">
            İşletmenizin dijital işini tek elden büyüten dijital ortağınız. Web, Google, QR menü,
            sosyal medya, reklam ve fazlası.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-neutral-500 mb-4">HİZMETLER</p>
          <ul className="space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link to={`/hizmetler/${service.slug}`} className="hover:text-teal-400 transition-colors">
                  {service.navLabel}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-neutral-500 mb-4">KURUMSAL</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/neden-emir" className="hover:text-teal-400 transition-colors">
                Neden Ben
              </Link>
            </li>
            <li>
              <Link to="/calismalar" className="hover:text-teal-400 transition-colors">
                Çalışmalar
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-teal-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/#iletisim" className="hover:text-teal-400 transition-colors">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-neutral-500 mb-4">İLETİŞİM</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://wa.me/905318858981" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
                WhatsApp
              </a>
            </li>
            <li>0531 885 89 81</li>
            <li>Akhisar / Manisa</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-6 py-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} Emir Vardar · Tüm hakları saklıdır
        </p>
      </div>
    </footer>
  );
}
