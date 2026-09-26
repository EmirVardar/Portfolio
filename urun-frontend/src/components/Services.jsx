import iconWebSitesi from '../assets/icons/web-sitesi.webp';
import iconOzelYazilim from '../assets/icons/ozel-yazilim.webp';
import iconETicaret from '../assets/icons/e-ticaret.webp';
import iconGoogleIsletme from '../assets/icons/google-isletme.webp';
import iconQrMenu from '../assets/icons/qr-menu.webp';
import iconSosyalMedya from '../assets/icons/sosyal-medya.webp';
import iconDijitalReklam from '../assets/icons/dijital-reklam.webp';
import iconKurumsalKimlik from '../assets/icons/kurumsal-kimlik.webp';
import iconDijitalStrateji from '../assets/icons/dijital-strateji.webp';
import ServiceCard from './ServiceCard';
import useReveal from '../hooks/useReveal';

const services = [
  {
    icon: iconWebSitesi,
    tag: 'WEB',
    title: 'Web Sitesi Tasarımı',
    desc: 'Mobil uyumlu, hızlı, işletmenize özel siteler.',
  },
  {
    icon: iconOzelYazilim,
    tag: 'YAZILIM',
    title: 'Özel Yazılım Geliştirme',
    desc: 'İhtiyacınıza özel web, panel ve otomasyon yazılımları.',
  },
  {
    icon: iconETicaret,
    tag: 'E-TİCARET',
    title: 'E-Ticaret Çözümleri',
    desc: 'Online satış için mağaza kurulumu, entegrasyon ve yönetim.',
  },
  {
    icon: iconGoogleIsletme,
    tag: 'YEREL',
    title: 'Google İşletme Profili',
    desc: 'Haritalarda üst sıralarda çıkın, müşteriler sizi bulsun.',
  },
  {
    icon: iconQrMenu,
    tag: 'MENÜ',
    title: 'QR Menü',
    desc: 'Panelden yönetilen dijital menü; fiyat değişimi anında yansır.',
  },
  {
    icon: iconSosyalMedya,
    tag: 'SOSYAL',
    title: 'Sosyal Medya Yönetimi',
    desc: 'İçerik üretimi ve düzenli paylaşım; markanız hep aktif.',
  },
  {
    icon: iconDijitalReklam,
    tag: 'REKLAM',
    title: 'Dijital Reklam',
    desc: 'Meta ve Google ile doğru müşteriye ölçülebilir reklam.',
  },
  {
    icon: iconKurumsalKimlik,
    tag: 'KİMLİK',
    title: 'Kurumsal Kimlik ve Marka Tasarımı',
    desc: 'Logo, renk paleti ve baştan sona tutarlı marka kimliği.',
  },
  {
    icon: iconDijitalStrateji,
    tag: 'STRATEJİ',
    title: 'Dijital Strateji ve Danışmanlık',
    desc: 'İşletmenize özel dijital yol haritası ve büyüme danışmanlığı.',
  },
];

export default function Services() {
  const [headRef, headVisible] = useReveal();

  return (
    <section id="hizmetler" className="bg-neutral-50 border-y border-neutral-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div
          ref={headRef}
          className={`transition-all duration-700 ease-out ${
            headVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-teal-700" />
            <p className="text-sm font-semibold tracking-wide text-teal-700">HİZMETLERİM</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-xl">
            Tek elden <span className="font-serif italic font-medium text-teal-700">tüm dijital</span> ihtiyaçlarınız
          </h2>
          <p className="mt-4 text-neutral-500 max-w-xl">
            İşletmenizi internette görünür kılan her hizmeti tek kişiden, tek muhataptan alıyorsunuz.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
