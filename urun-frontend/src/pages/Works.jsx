import { Link } from 'react-router-dom';
import useReveal from '../hooks/useReveal';
import iconWebSitesi from '../assets/icons/web-sitesi.webp';
import iconETicaret from '../assets/icons/e-ticaret.webp';
import iconQrMenu from '../assets/icons/qr-menu.webp';
import iconKurumsalKimlik from '../assets/icons/kurumsal-kimlik.webp';

const samples = [
  {
    icon: iconWebSitesi,
    tag: 'WEB SİTESİ · ÖRNEK ÇALIŞMA',
    title: 'Akhisar Lezzet Durağı',
    desc: 'Bir yerel restoran için hazırlanmış, mobil uyumlu tanıtım sitesi ve dijital menü konsepti.',
    href: '/hizmetler/web-sitesi-tasarimi',
  },
  {
    icon: iconETicaret,
    tag: 'E-TİCARET · ÖRNEK ÇALIŞMA',
    title: 'Zeytin Diyarı Mağazası',
    desc: 'Yöresel ürün satan bir işletme için düşünülmüş, sipariş ve kargo akışı kurulu bir online mağaza konsepti.',
    href: '/hizmetler/e-ticaret-cozumleri',
  },
  {
    icon: iconQrMenu,
    tag: 'QR MENÜ · ÖRNEK ÇALIŞMA',
    title: 'Kahve Molası Kafe',
    desc: 'Panelden anında güncellenen, masadan QR ile erişilen bir kafe menüsü konsepti.',
    href: '/hizmetler/qr-menu',
  },
  {
    icon: iconKurumsalKimlik,
    tag: 'KURUMSAL KİMLİK · ÖRNEK ÇALIŞMA',
    title: 'Vardar Mimarlık',
    desc: 'Logo, renk paleti ve kartvizitten oluşan, tutarlı bir kurumsal kimlik konsepti.',
    href: '/hizmetler/kurumsal-kimlik-ve-marka-tasarimi',
  },
];

function Reveal({ children, className = '', delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function Works() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden border-b border-neutral-200">
        <div aria-hidden className="absolute inset-0 bg-dot-grid" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-6 h-px bg-teal-700" />
              <p className="text-sm font-semibold tracking-wide text-teal-700">ÇALIŞMALAR</p>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink max-w-2xl">
              Neler <span className="font-serif italic font-medium text-teal-700">yapabileceğimin</span> örnekleri
            </h1>
            <p className="mt-5 text-neutral-500 leading-relaxed max-w-xl">
              Aşağıdaki çalışmalar gerçek müşteri projeleri değil; farklı sektörler için nasıl bir
              iş çıkarabileceğimi göstermek amacıyla hazırlanmış örnek konseptlerdir. Portföy,
              tamamlanan projeler arttıkça büyüyecek.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid sm:grid-cols-2 gap-6">
            {samples.map((sample, i) => (
              <Reveal key={sample.title} delay={(i % 2) * 100}>
                <Link
                  to={sample.href}
                  className="group h-full flex flex-col p-6 rounded-2xl border border-neutral-200 bg-white transition-all duration-300 hover:border-teal-700/40 hover:shadow-xl hover:shadow-neutral-900/5 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 flex items-center justify-center">
                    <img src={sample.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <p className="mt-4 text-xs font-semibold tracking-wide text-neutral-400">{sample.tag}</p>
                  <h3 className="mt-1 text-lg font-semibold text-ink">{sample.title}</h3>
                  <p className="mt-2 text-sm text-neutral-500 leading-relaxed">{sample.desc}</p>
                  <span className="mt-4 text-sm font-medium text-teal-700 group-hover:underline">
                    Bu hizmeti incele →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white max-w-xl mx-auto">
              Sıradaki işi <span className="font-serif italic font-medium text-teal-400">birlikte</span> yapalım mı?
            </h2>
            <Link
              to="/#iletisim"
              className="mt-8 inline-block px-6 py-3.5 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-500 hover:-translate-y-0.5 transition-all"
            >
              İletişime Geçin
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
