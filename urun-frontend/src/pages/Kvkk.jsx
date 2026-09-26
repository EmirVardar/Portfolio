import usePageMeta from '../hooks/usePageMeta';
import { pageMeta } from '../data/pageMeta';
import PageHero from '../components/PageHero';

const sections = [
  {
    title: '1. Veri sorumlusu',
    body: 'Bu aydınlatma metni, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında, veri sorumlusu sıfatıyla Emir Vardar (Akhisar / Manisa) tarafından hazırlanmıştır.',
  },
  {
    title: '2. İşlenen kişisel veriler',
    body: 'İletişim formu veya WhatsApp üzerinden bizzat paylaştığınız ad soyad, telefon numarası, işletme / sektör bilgisi ve mesaj içeriği.',
  },
  {
    title: '3. İşleme amaçları',
    body: 'Talebinize dönüş yapmak, teklif ve demo hazırlamak, hizmet sürecini yürütmek ve sizinle iletişim kurmak.',
  },
  {
    title: '4. Hukuki sebep',
    body: 'Kişisel verileriniz, KVKK md. 5/2-c uyarınca bir sözleşmenin kurulması veya ifasıyla doğrudan ilgili olması ve md. 5/2-f uyarınca meşru menfaat hukuki sebeplerine dayanılarak işlenir.',
  },
  {
    title: '5. Aktarım',
    body: 'İletişim formu, mesajınızı WhatsApp uygulaması üzerinden iletir. Bu nedenle paylaştığınız bilgiler, WhatsApp hizmetini sağlayan Meta Platforms’un altyapısında (yurt dışında bulunan sunucular dahil) işlenebilir. Verileriniz bunun dışında üçüncü kişilerle paylaşılmaz.',
  },
  {
    title: '6. Saklama süresi',
    body: 'Verileriniz, işleme amacının gerektirdiği süre boyunca ve ilgili mevzuatta öngörülen süreler kadar saklanır; süre sonunda silinir veya anonim hale getirilir.',
  },
  {
    title: '7. Haklarınız',
    body: 'KVKK md. 11 uyarınca; verilerinizin işlenip işlenmediğini öğrenme, bilgi talep etme, işleme amacını öğrenme, aktarıldığı kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini, silinmesini veya yok edilmesini isteme, itiraz etme ve zararın giderilmesini talep etme haklarına sahipsiniz.',
  },
  {
    title: '8. Başvuru',
    body: 'Haklarınıza ilişkin taleplerinizi emir.vardar49@gmail.com adresine e-posta ile veya 0531 885 89 81 numaralı telefon üzerinden iletebilirsiniz. Talepleriniz en geç 30 gün içinde ücretsiz olarak sonuçlandırılır.',
  },
];

export default function Kvkk() {
  usePageMeta(pageMeta['/kvkk'].title, pageMeta['/kvkk'].description);

  return (
    <div className="bg-white">
      <PageHero
        kicker="YASAL"
        title={
          <>
            KVKK <span className="font-serif italic font-medium text-teal-700">Aydınlatma Metni</span>
          </>
        }
      />
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-lg font-semibold text-ink">{s.title}</h2>
            <p className="mt-2 text-neutral-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
        <p className="pt-4 border-t border-neutral-200 text-sm text-neutral-500">
          Son güncelleme: Eylül 2026
        </p>
      </section>
    </div>
  );
}
