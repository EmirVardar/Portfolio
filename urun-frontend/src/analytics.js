// Ziyaretçi sayacı: Umami (https://umami.is) — çerez kullanmaz, KVKK/çerez onayı gerektirmez.
// Umami panelinde siteyi ekledikten sonra verilen "Website ID"yi buraya yapıştırın.
// Boş bırakıldığında hiçbir şey yüklenmez.
const UMAMI_WEBSITE_ID = '081e5019-f315-4a2f-b263-4eb8addc6904';

function track(event, data) {
  window.umami?.track(event, data);
}

export function trackEvent(event, data = {}) {
  track(event, { sayfa: window.location.pathname, ...data });
}

export function initAnalytics() {
  if (!UMAMI_WEBSITE_ID || import.meta.env.DEV) return;

  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://cloud.umami.is/script.js';
  script.dataset.websiteId = UMAMI_WEBSITE_ID;
  // Sadece yayındaki sitede say; yerel denemeler istatistiğe karışmasın
  script.dataset.domains = 'emirvardar.com,www.emirvardar.com';
  document.head.appendChild(script);

  // Sitedeki tüm WhatsApp ve telefon linklerine yapılan tıklamaları tek yerden say
  document.addEventListener('click', (e) => {
    const link = e.target.closest?.('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href.includes('wa.me')) trackEvent('whatsapp-tiklama');
    else if (href.startsWith('tel:')) trackEvent('telefon-tiklama');
    else if (href.startsWith('mailto:')) trackEvent('eposta-tiklama');
    else if (href.includes('instagram.com')) trackEvent('instagram-tiklama');
  });
}
