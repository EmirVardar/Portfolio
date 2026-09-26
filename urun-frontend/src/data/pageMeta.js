// Sayfa başlıkları ve açıklamaları. Hem tarayıcıda (usePageMeta) hem de derleme
// sırasında her sayfa için ayrı HTML üreten scripts/prerender-meta.mjs tarafından kullanılır.
import { services } from './services';

export const SITE_NAME = 'Emir Vardar';
export const SITE_URL = 'https://emirvardar.com';
export const DEFAULT_TITLE = `${SITE_NAME} | Akhisar Web Tasarım, QR Menü ve Dijital Reklam`;
export const DEFAULT_DESCRIPTION =
  'Akhisar ve çevresinde web sitesi, Google İşletme Profili, QR menü, sosyal medya ve dijital reklam. Ücretsiz demo, şeffaf fiyat, yüz yüze destek.';

export function fullTitle(title) {
  return title ? `${title} | ${SITE_NAME}` : DEFAULT_TITLE;
}

export const pageMeta = {
  '/calismalar': {
    title: 'Çalışmalar',
    description:
      'Akhisar işletmeleri için web sitesi, e-ticaret, QR menü ve Google İşletme Profili örnek çalışmaları.',
  },
  '/neden-emir': {
    title: 'Neden Ben',
    description:
      'Akhisar’da yüz yüze çalışan, önce ücretsiz demo hazırlayan ve şeffaf fiyat veren dijital ortağınız.',
  },
  '/blog': {
    title: 'Blog',
    description: 'Web sitesi, Google görünürlüğü ve dijital pazarlama üzerine kısa, uygulanabilir yazılar.',
  },
  '/kvkk': {
    title: 'KVKK Aydınlatma Metni',
    description: 'Emir Vardar kişisel verilerin korunması aydınlatma metni.',
  },
};

export function serviceMeta(service) {
  return { title: `${service.title} | Akhisar`, description: service.heroDesc };
}

// Önceden HTML'i üretilecek tüm sayfalar (ana sayfa hariç)
export function allPageMeta() {
  return {
    ...pageMeta,
    ...Object.fromEntries(services.map((s) => [`/hizmetler/${s.slug}`, serviceMeta(s)])),
  };
}
