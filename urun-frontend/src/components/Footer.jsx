import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { contact } from '../data/contact';
import InstagramIcon from './InstagramIcon';

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
          <p className="text-xs font-semibold tracking-wide text-neutral-400 mb-4">HİZMETLER</p>
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
          <p className="text-xs font-semibold tracking-wide text-neutral-400 mb-4">KURUMSAL</p>
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
              <Link to="/#iletisim" className="hover:text-teal-400 transition-colors">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-wide text-neutral-400 mb-4">İLETİŞİM</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:+90${contact.phone.replace(/\D/g, '').slice(1)}`} className="hover:text-teal-400 transition-colors">
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-teal-400 transition-colors break-all">
                {contact.email}
              </a>
            </li>
            <li>{contact.location}</li>
          </ul>
          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="mt-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/15 text-sm hover:border-teal-400 hover:text-teal-400 transition-colors"
          >
            <InstagramIcon size={16} />@{contact.instagram}
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-24 md:pb-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} Emir Vardar · Tüm hakları saklıdır</p>
          <Link to="/kvkk" className="hover:text-teal-400 transition-colors">
            KVKK Aydınlatma Metni
          </Link>
        </div>
      </div>
    </footer>
  );
}
