import iconWebSitesi from '../assets/icons/web-sitesi.webp';
import iconOzelYazilim from '../assets/icons/ozel-yazilim.webp';
import iconETicaret from '../assets/icons/e-ticaret.webp';
import iconGoogleIsletme from '../assets/icons/google-isletme.webp';
import iconQrMenu from '../assets/icons/qr-menu.webp';
import iconSosyalMedya from '../assets/icons/sosyal-medya.webp';
import iconDijitalReklam from '../assets/icons/dijital-reklam.webp';
import iconKurumsalKimlik from '../assets/icons/kurumsal-kimlik.webp';
import iconDijitalStrateji from '../assets/icons/dijital-strateji.webp';

export const services = [
  {
    slug: 'web-sitesi-tasarimi',
    icon: iconWebSitesi,
    tag: 'WEB',
    navLabel: 'Web Sitesi',
    title: 'Web Sitesi Tasarımı',
    heroTitle: 'İşletmenize özel bir',
    heroHighlight: 'web sitesi',
    heroDesc:
      'Şablon indirip üstünü boyamıyorum. İşinizi, müşterinizi ve hedefinizi dinleyip ona göre kuruyorum; mobilde de masaüstünde de hızlı açılan bir site.',
    valueKicker: 'NEDEN ÖNEMLİ',
    valueTitle: 'İnternette bir',
    valueHighlight: 'adresiniz',
    valueTitleEnd: 'olsun',
    valueDesc:
      'Bugün bir işletmeyi ilk önce internetten araştırıyoruz. Google’da adınız çıktığında karşılayan bir site yoksa, o müşteriyi bir tık uzaklıktaki rakibe kaptırırsınız. Site, esnafın artık vitrini kadar önemli.',
    features: [
      {
        title: 'Işık hızında açılır',
        desc: 'Gereksiz eklenti yok; sayfalar saniyenin altında açılır, ziyaretçi beklemeden içeriğe ulaşır.',
      },
      {
        title: 'Mobilde kusursuz',
        desc: 'Ziyaretçilerin çoğu telefondan geliyor; site her ekranda aynı rahatlıkla kullanılır.',
      },
      {
        title: 'Google dostu temel',
        desc: 'Başlıklar, açıklamalar ve site hızı en baştan arama motoruna göre kuruluyor.',
      },
    ],
    steps: [
      { title: 'Bilgi ve içerik', desc: 'İşletmenizi, hizmetlerinizi ve hedef kitlenizi birlikte netleştiriyoruz.' },
      { title: 'Demo hazır', desc: 'Kendi alan adınızda, canlı bir demo görüyorsunuz — ödeme öncesi.' },
      { title: 'Yayına alma', desc: 'Onayınızla birlikte site yayına alınır, size teslim edilir.' },
    ],
    faq: [
      { q: 'Kaç günde teslim alırım?', a: 'Demo genelde 24-48 saat içinde hazır olur; içerikler netse tam kurulum birkaç gün sürer.' },
      { q: 'İçerikleri ben mi yazmalıyım?', a: 'Hayır, elinizdeki bilgilerle ben taslak metni hazırlarım; siz onaylar ya da düzeltirsiniz.' },
      { q: 'Alan adı ve barındırma dahil mi?', a: 'Kurulum sürecinde birlikte seçiyoruz; size en uygun seçeneği öneriyorum.' },
      { q: 'Siteyi sonradan ben güncelleyebilir miyim?', a: 'İsterseniz basit bir panelden siz güncellersiniz, isterseniz güncellemeleri ben üstlenirim.' },
    ],
    ctaTitle: 'Web sitenizi konuşalım mı?',
  },
  {
    slug: 'ozel-yazilim-gelistirme',
    icon: iconOzelYazilim,
    tag: 'YAZILIM',
    navLabel: 'Özel Yazılım',
    title: 'Özel Yazılım Geliştirme',
    heroTitle: 'İşinize göre kurulan',
    heroHighlight: 'yazılım',
    heroDesc:
      'Hazır programlar her zaman işinize tam oturmaz. İhtiyacınıza göre panel, otomasyon ya da entegrasyon yazıyorum; siz işinizi anlatın, gerisini ben tasarlarım.',
    valueKicker: 'NEDEN ÖNEMLİ',
    valueTitle: 'Elinizle',
    valueHighlight: 'takip ettiğiniz',
    valueTitleEnd: 'işler zaman çalar',
    valueDesc:
      'Excel tabloları, kağıt kayıtlar, birbirini tutmayan programlar arasında geçen zaman — aslında işinize ayırabileceğiniz zaman. Basit bir otomasyon çoğu zaman haftalarca süren işi dakikalara indirir.',
    features: [
      { title: 'Size özel panel', desc: 'Stok, randevu, sipariş ya da müşteri takibi — neyi yönetiyorsanız, ona göre bir ekran.' },
      { title: 'Var olan sistemlerle konuşur', desc: 'Kullandığınız programlarla veri alışverişi yapan entegrasyonlar kurarım.' },
      { title: 'Büyüdükçe büyür', desc: 'Bugün ihtiyacınız neyse onu kurar, ileride yeni özellik eklemeye açık bırakırım.' },
    ],
    steps: [
      { title: 'İş akışını anlama', desc: 'Şu anda işi nasıl yaptığınızı, nerede zaman kaybettiğinizi birlikte çıkarıyoruz.' },
      { title: 'Taslak ve onay', desc: 'Ekranların ve akışın taslağını gösteriyorum, birlikte netleştiriyoruz.' },
      { title: 'Geliştirme ve teslim', desc: 'Yazılımı kurup test ediyorum, kullanmayı birlikte deniyoruz.' },
    ],
    faq: [
      { q: 'Ne tür işler için uygun?', a: 'Stok/sipariş takibi, randevu sistemleri, raporlama panelleri, veri entegrasyonları gibi tekrar eden işler için uygun.' },
      { q: 'Fiyat nasıl belirleniyor?', a: 'İşin kapsamına göre; ilk görüşmede size net bir teklif çıkarıyorum, sürpriz maliyet olmuyor.' },
      { q: 'Teslim sonrası destek var mı?', a: 'Evet, yayına aldıktan sonra da soru ve küçük düzeltmeler için buradayım.' },
      { q: 'Kaynak kod bende mi kalıyor?', a: 'Evet, geliştirilen yazılım size ait olur.' },
    ],
    ctaTitle: 'İhtiyacınızı konuşalım mı?',
  },
  {
    slug: 'e-ticaret-cozumleri',
    icon: iconETicaret,
    tag: 'E-TİCARET',
    navLabel: 'E-Ticaret',
    title: 'E-Ticaret Çözümleri',
    heroTitle: 'Ürünlerinizi',
    heroHighlight: 'online satışa',
    heroDesc:
      'Mağazanızı internete taşıyorum: ürün listeleme, sepet, ödeme ve kargo entegrasyonuyla baştan sona çalışan bir online satış düzeni kuruyorum.',
    valueKicker: 'NEDEN ÖNEMLİ',
    valueTitle: 'Mağazanız artık',
    valueHighlight: '7/24',
    valueTitleEnd: 'açık olabilir',
    valueDesc:
      'Dükkan kapansa da online mağaza satmaya devam eder. Doğru kurulmuş bir e-ticaret sitesi, mevcut müşterilerinizin yanına şehir dışından yeni müşteriler ekler.',
    features: [
      { title: 'Kolay ürün yönetimi', desc: 'Ürün eklemek, fiyat güncellemek, stok takip etmek basit bir panelden yapılır.' },
      { title: 'Güvenli ödeme', desc: 'Kart ve online ödeme altyapısı güvenilir sağlayıcılarla entegre edilir.' },
      { title: 'Kargo entegrasyonu', desc: 'Anlaştığınız kargo firmasıyla sipariş süreci otomatikleşir.' },
    ],
    steps: [
      { title: 'Ürün ve katalog', desc: 'Ürünlerinizi, kategorilerinizi ve fiyatlandırmanızı birlikte düzenliyoruz.' },
      { title: 'Mağaza kurulumu', desc: 'Ödeme, kargo ve tasarım entegre edilerek mağaza test edilir.' },
      { title: 'Yayına alma', desc: 'İlk siparişi almaya hazır hale gelen mağazayı size teslim ediyorum.' },
    ],
    faq: [
      { q: 'Az sayıda ürünüm olsa da olur mu?', a: 'Elbette; ürün sayısı ne olursa olsun yönetilebilir bir mağaza kuruyoruz.' },
      { q: 'Kargo firmam entegre edilir mi?', a: 'Çalıştığınız kargo firmasına göre entegrasyonu birlikte belirliyoruz.' },
      { q: 'Komisyon kesintisi var mı?', a: 'Ben herhangi bir satış komisyonu almam; sadece ödeme sağlayıcısının standart oranı geçerlidir.' },
      { q: 'Mevcut Instagram/WhatsApp satışımla birlikte kullanabilir miyim?', a: 'Evet, mağazayı mevcut satış kanallarınızın yanına, onları destekleyecek şekilde kuruyoruz.' },
    ],
    ctaTitle: 'Mağazanızı konuşalım mı?',
  },
  {
    slug: 'google-isletme-profili',
    icon: iconGoogleIsletme,
    tag: 'YEREL',
    navLabel: 'Google İşletme',
    title: 'Google İşletme Profili',
    heroTitle: 'Haritada',
    heroHighlight: 'bulunun',
    heroDesc:
      '"Yakınımda [hizmet]" diye arayan biri sizi görsün diye Google İşletme Profilinizi eksiksiz, güncel ve öne çıkacak şekilde kuruyorum.',
    valueKicker: 'NEDEN ÖNEMLİ',
    valueTitle: 'Aranan ama',
    valueHighlight: 'görünmeyen',
    valueTitleEnd: 'işletme kaybeder',
    valueDesc:
      'Çoğu yerel arama, Google Haritalar’daki ilk birkaç sonuçla bitiyor. Profili eksik ya da pasif olan işletme, tam da o an ihtiyacı olan müşteriyi kaçırıyor.',
    features: [
      { title: 'Eksiksiz profil', desc: 'Adres, çalışma saatleri, fotoğraflar ve hizmetler doğru ve güncel şekilde girilir.' },
      { title: 'Yorum yönetimi', desc: 'Gelen yorumlara nasıl yanıt verileceğine dair birlikte bir düzen kurarız.' },
      { title: 'Düzenli paylaşım', desc: 'Profil üzerinden güncelleme ve gönderi paylaşarak görünürlüğü canlı tutarız.' },
    ],
    steps: [
      { title: 'Mevcut durumu inceleme', desc: 'Profiliniz varsa mevcut halini, yoksa rakiplerinizi inceliyorum.' },
      { title: 'Kurulum ve düzenleme', desc: 'Bilgileri, fotoğrafları ve kategorileri eksiksiz tamamlıyorum.' },
      { title: 'Takip ve optimizasyon', desc: 'İlk haftalardaki performansa göre küçük ayarlar yapıyorum.' },
    ],
    faq: [
      { q: 'Profilim zaten var ama düzensiz, olur mu?', a: 'Olur; mevcut profili devralıp düzenli hale getiriyoruz.' },
      { q: 'Birden fazla şubem var, hepsi olur mu?', a: 'Evet, her şube için ayrı ayrı profil kurulup yönetilebilir.' },
      { q: 'Sahte yorumlarla ne yapabilirim?', a: 'Uygun olmayan yorumlar için Google’a bildirim sürecini sizin adınıza takip ederim.' },
      { q: 'Sonuçları ne zaman görürüm?', a: 'İlk etkiler genelde birkaç hafta içinde, arama sonuçlarında fark edilir hale gelir.' },
    ],
    ctaTitle: 'Google profilinizi konuşalım mı?',
  },
  {
    slug: 'qr-menu',
    icon: iconQrMenu,
    tag: 'MENÜ',
    navLabel: 'QR Menü',
    title: 'QR Menü',
    heroTitle: 'Panelden yönetilen',
    heroHighlight: 'dijital menü',
    heroDesc:
      'Fiyat değiştiğinde matbaaya koşmayın. QR kodu okutan müşteri güncel menüyü görür; siz fiyatı panelden birkaç saniyede değiştirirsiniz.',
    valueKicker: 'NEDEN ÖNEMLİ',
    valueTitle: 'Basılı menü',
    valueHighlight: 'eskir',
    valueTitleEnd: ', dijital menü eskimiyor',
    valueDesc:
      'Fiyat güncellemesi, yeni ürün ya da sezonluk değişiklik basılı menüde masraf ve zaman kaybı demek. Dijital menüde bu değişiklik anında, ücretsiz.',
    features: [
      { title: 'Anında güncelleme', desc: 'Fiyat ya da ürün değişikliği panelden yapılır, anında yansır.' },
      { title: 'Şık ve hızlı görünüm', desc: 'Telefonda hızlı açılan, markanıza uygun sade bir tasarım.' },
      { title: 'Masaya özel QR', desc: 'İsterseniz her masa için ayrı QR kod, isterseniz tek genel kod.' },
    ],
    steps: [
      { title: 'Menü içeriği', desc: 'Ürünlerinizi, kategorilerinizi ve fiyatlarınızı alıyorum.' },
      { title: 'Tasarım ve kurulum', desc: 'Menüyü markanıza uygun şekilde tasarlayıp QR kodları hazırlıyorum.' },
      { title: 'Baskı ve teslim', desc: 'Masalara koyacağınız QR kartları ile birlikte menü yayına alınır.' },
    ],
    faq: [
      { q: 'Menüyü kendim güncelleyebilir miyim?', a: 'Evet, basit bir panelden istediğiniz zaman siz de güncelleyebilirsiniz.' },
      { q: 'Kaç dilde olabilir?', a: 'İhtiyaca göre birden fazla dilde menü hazırlanabilir.' },
      { q: 'QR kartların tasarımı da dahil mi?', a: 'Evet, masaya koyacağınız kart tasarımı da pakete dahildir.' },
      { q: 'İnternetsiz görüntülenir mi?', a: 'Müşterinin telefonunda internet olması gerekir; menü kendisi hafif ve hızlı açılacak şekilde kurulur.' },
    ],
    ctaTitle: 'Menünüzü konuşalım mı?',
  },
  {
    slug: 'sosyal-medya-yonetimi',
    icon: iconSosyalMedya,
    tag: 'SOSYAL',
    navLabel: 'Sosyal Medya',
    title: 'Sosyal Medya Yönetimi',
    heroTitle: 'Markanız hep',
    heroHighlight: 'aktif',
    heroDesc:
      'İçerik üretimi, düzenli paylaşım ve takipçiyle etkileşim — hesabınızı canlı tutan düzeni ben kurarım, siz işinizle ilgilenirsiniz.',
    valueKicker: 'NEDEN ÖNEMLİ',
    valueTitle: 'Sessiz hesap',
    valueHighlight: 'unutulur',
    valueTitleEnd: '',
    valueDesc:
      'Takipçi, uzun süre paylaşım gelmeyen bir hesabı hızla unutur. Düzenli ve tutarlı içerik, hem güven verir hem de yeni müşteriye ulaşır.',
    features: [
      { title: 'İçerik takvimi', desc: 'Ay boyunca ne paylaşılacağını önceden planlarız, sürpriz boşluk kalmaz.' },
      { title: 'Marka diline uygun içerik', desc: 'Görsel ve metinler işletmenizin tarzına göre hazırlanır.' },
      { title: 'Etkileşim takibi', desc: 'Yorum ve mesajların zamanında yanıtlanmasına dikkat ederiz.' },
    ],
    steps: [
      { title: 'Marka ve hedef kitle', desc: 'Kime, ne anlatmak istediğinizi netleştiriyoruz.' },
      { title: 'İçerik üretimi', desc: 'Görsel ve metinleri hazırlayıp onayınıza sunuyorum.' },
      { title: 'Paylaşım ve takip', desc: 'Planlanan takvime göre düzenli paylaşım yapılır, sonuçlar izlenir.' },
    ],
    faq: [
      { q: 'Hangi platformlarda çalışıyorsunuz?', a: 'Genelde Instagram ve Facebook; işinize göre başka platformlar da eklenebilir.' },
      { q: 'Fotoğraf çekimi de dahil mi?', a: 'İhtiyaca göre çekim de pakete eklenebilir; detayları birlikte konuşuruz.' },
      { q: 'İçerikleri onaylayabilir miyim?', a: 'Evet, paylaşılmadan önce içerikleri size gösteririm.' },
      { q: 'Ne sıklıkla paylaşım yapılır?', a: 'İşletmenize göre haftalık bir plan üzerinden karar veriyoruz.' },
    ],
    ctaTitle: 'Hesabınızı konuşalım mı?',
  },
  {
    slug: 'dijital-reklam',
    icon: iconDijitalReklam,
    tag: 'REKLAM',
    navLabel: 'Dijital Reklam',
    title: 'Dijital Reklam',
    heroTitle: 'Doğru müşteriye',
    heroHighlight: 'ölçülebilir',
    heroDesc:
      'Meta ve Google üzerinden bütçenizi doğru kitleye yönlendiren, sonucu rakamlarla takip edebildiğiniz reklam kampanyaları kurarım.',
    valueKicker: 'NEDEN ÖNEMLİ',
    valueTitle: 'Rastgele reklam',
    valueHighlight: 'bütçe yakar',
    valueTitleEnd: '',
    valueDesc:
      'Hedefsiz "öne çıkar" bütçesi genelde boşa gider. Doğru kurulmuş bir kampanya, bütçenizi ilgilenmeyen kişiye değil, satın alma ihtimali yüksek kişiye gösterir.',
    features: [
      { title: 'Hedef kitle kurulumu', desc: 'Reklamınızı gerçekten ilgilenebilecek kişilere göstermek için kitleyi doğru tanımlarız.' },
      { title: 'Bütçe kontrolü', desc: 'Harcamanın nereye gittiğini şeffaf raporlarla görürsünüz.' },
      { title: 'Sürekli optimizasyon', desc: 'Kampanya performansına göre düzenli ince ayar yapılır.' },
    ],
    steps: [
      { title: 'Hedef ve bütçe', desc: 'Kampanyanın amacını ve bütçesini birlikte netleştiriyoruz.' },
      { title: 'Kurulum', desc: 'Reklam hesabı, kitle ve içerikleri hazırlayıp kampanyayı başlatıyorum.' },
      { title: 'Takip ve raporlama', desc: 'Sonuçları düzenli raporlarla paylaşıp gerektikçe optimize ediyorum.' },
    ],
    faq: [
      { q: 'En az ne kadar bütçeyle başlanır?', a: 'İşletmenize ve hedefinize göre değişir; ilk görüşmede size uygun bir bütçe önerisi sunarım.' },
      { q: 'Reklam hesabı bende mi kalıyor?', a: 'Evet, hesap size ait olur; yönetimini ben üstlenirim.' },
      { q: 'Sonuçları nasıl görürüm?', a: 'Düzenli aralıklarla anlaşılır raporlar paylaşırım; rakamları birlikte yorumlarız.' },
      { q: 'Hangi platformda reklam veriliyor?', a: 'Genelde Meta (Instagram/Facebook) ve Google; işinize göre en uygun olanı öneririm.' },
    ],
    ctaTitle: 'Kampanyanızı konuşalım mı?',
  },
  {
    slug: 'kurumsal-kimlik-ve-marka-tasarimi',
    icon: iconKurumsalKimlik,
    tag: 'KİMLİK',
    navLabel: 'Kurumsal Kimlik',
    title: 'Kurumsal Kimlik ve Marka Tasarımı',
    heroTitle: 'Baştan sona tutarlı',
    heroHighlight: 'marka kimliği',
    heroDesc:
      'Logo, renk paleti, yazı karakteri ve kullanım kuralları — markanızın her yerde aynı, tanıdık şekilde görünmesini sağlayan bütün bir kimlik kurarım.',
    valueKicker: 'NEDEN ÖNEMLİ',
    valueTitle: 'Dağınık görünüm',
    valueHighlight: 'güven kırar',
    valueTitleEnd: '',
    valueDesc:
      'Tabelada bir renk, kartvizitte başka bir yazı karakteri, sosyal medyada bambaşka bir logo — bu tutarsızlık müşteride "acaba" hissi bırakır. Tutarlı kimlik ise güven verir.',
    features: [
      { title: 'Logo ve varyasyonları', desc: 'Farklı zeminlerde ve boyutlarda kullanılabilecek logo versiyonları hazırlanır.' },
      { title: 'Renk ve tipografi', desc: 'Markanıza ait renk paleti ve yazı karakterleri netleştirilir.' },
      { title: 'Kullanım kılavuzu', desc: 'Logoyu ve renkleri doğru kullanmanız için basit bir kılavuz teslim edilir.' },
    ],
    steps: [
      { title: 'Marka keşfi', desc: 'İşletmenizin karakterini, hedef kitlesini ve tarzını birlikte belirliyoruz.' },
      { title: 'Tasarım', desc: 'Logo ve kimlik unsurlarını tasarlayıp seçeneklerle sunuyorum.' },
      { title: 'Teslim', desc: 'Onaylanan kimliği tüm kullanım dosyalarıyla birlikte teslim ediyorum.' },
    ],
    faq: [
      { q: 'Zaten bir logom var, yenilemek mi gerekiyor?', a: 'Gerekmiyor; mevcut logonuzu koruyup etrafına tutarlı bir kimlik de kurabiliriz.' },
      { q: 'Kaç logo seçeneği görürüm?', a: 'Genelde birkaç farklı yön sunarım, birlikte üzerinde çalışıp netleştiririz.' },
      { q: 'Dosyaları hangi formatta alırım?', a: 'Baskı ve dijital kullanım için gereken tüm formatlarda teslim ederim.' },
      { q: 'Tabela ve kartvizit tasarımı da dahil mi?', a: 'İhtiyacınıza göre bu tür uygulamalar da pakete eklenebilir.' },
    ],
    ctaTitle: 'Marka kimliğinizi konuşalım mı?',
  },
  {
    slug: 'dijital-strateji-ve-danismanlik',
    icon: iconDijitalStrateji,
    tag: 'STRATEJİ',
    navLabel: 'Strateji ve Danışmanlık',
    title: 'Dijital Strateji ve Danışmanlık',
    heroTitle: 'İşletmenize özel',
    heroHighlight: 'yol haritası',
    heroDesc:
      'Nereden başlayacağınızı bilmiyorsanız, önce birlikte oturup bir plan çıkarırız: hangi kanal, hangi öncelik, hangi bütçeyle.',
    valueKicker: 'NEDEN ÖNEMLİ',
    valueTitle: 'Plansız dijitalleşme',
    valueHighlight: 'vakit kaybettirir',
    valueTitleEnd: '',
    valueDesc:
      'Her kanalda biraz denemek, hiçbirinde sonuç almamak anlamına gelebilir. Doğru sırayla ve doğru öncelikle ilerlemek, aynı bütçeyle çok daha fazlasını başarmanızı sağlar.',
    features: [
      { title: 'Mevcut durum analizi', desc: 'Şu an nerede olduğunuzu, neyin eksik olduğunu birlikte görürüz.' },
      { title: 'Öncelikli yol haritası', desc: 'Hangi adımın önce atılması gerektiğini net bir sırayla belirleriz.' },
      { title: 'Düzenli danışmanlık', desc: 'İlerledikçe ortaya çıkan soruları birlikte değerlendiririz.' },
    ],
    steps: [
      { title: 'Durum tespiti', desc: 'Mevcut web, sosyal medya ve reklam varlığınızı birlikte inceliyoruz.' },
      { title: 'Strateji ve öncelik', desc: 'Hedefinize göre adım adım bir yol haritası çıkarıyorum.' },
      { title: 'Uygulama ve takip', desc: 'Planı hayata geçirirken düzenli olarak birlikte gözden geçiriyoruz.' },
    ],
    faq: [
      { q: 'Sadece danışmanlık mı alabilirim, uygulamayı kendim mi yapacağım?', a: 'İsterseniz sadece yol haritasını alırsınız, isterseniz uygulamayı da birlikte yürütürüz.' },
      { q: 'Ne kadar sürede sonuç görürüm?', a: 'İlk etkiler birkaç hafta içinde görülmeye başlar; kalıcı sonuçlar için düzenli takip önemlidir.' },
      { q: 'Küçük işletmeler için de mantıklı mı?', a: 'Evet, bütçesi ne olursa olsun doğru öncelik sıralaması her işletmeye zaman ve para kazandırır.' },
      { q: 'Görüşme nasıl işliyor?', a: 'Yüz yüze ya da görüntülü, size uygun şekilde düzenli aralıklarla bir araya geliriz.' },
    ],
    ctaTitle: 'Yol haritanızı konuşalım mı?',
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
