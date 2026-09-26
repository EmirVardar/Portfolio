import { MapPin, Phone, Star, Clock, Navigation } from 'lucide-react';

export function BrowserFrame({ url, children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/15 overflow-hidden ${className}`}
    >
      <div className="flex items-center gap-2 px-4 py-3 bg-neutral-100 border-b border-neutral-200">
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-neutral-300" />
        <span className="ml-3 flex-1 max-w-[220px] px-3 py-1 rounded-md bg-white border border-neutral-200 text-xs text-neutral-400 font-mono truncate">
          {url}
        </span>
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({ children, className = '' }) {
  return (
    <div
      className={`w-[168px] rounded-[28px] border-[6px] border-ink bg-white shadow-2xl shadow-neutral-900/25 overflow-hidden ${className}`}
    >
      <div className="mx-auto mt-1.5 w-12 h-1.5 rounded-full bg-neutral-200" />
      <div className="px-3.5 pt-3 pb-4">{children}</div>
    </div>
  );
}

function Logo({ first, second, className = 'text-sm' }) {
  return (
    <span className={`font-bold text-ink ${className}`}>
      {first}
      <span className="text-teal-700">{second}</span>
    </span>
  );
}

function SiteNav({ first, second, links }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-100">
      <Logo first={first} second={second} />
      <div className="hidden sm:flex items-center gap-4 text-[11px] text-neutral-400">
        {links.map((l) => (
          <span key={l}>{l}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- ZeytinEvi: e-ticaret ---------- */

const zeytinProducts = [
  { name: 'Erken Hasat Sızma', size: '1 L', price: '₺420' },
  { name: 'Çizik Yeşil Zeytin', size: '1 kg', price: '₺260' },
  { name: 'Zeytinyağlı Sabun', size: '4 adet', price: '₺180' },
];

export function ZeytinSite({ compact = false }) {
  return (
    <BrowserFrame url="akhisarzeytinevi.com">
      <SiteNav first="Zeytin" second="Evi" links={['Ürünler', 'Hikayemiz', 'İletişim']} />
      <div className={`px-6 pt-6 bg-gradient-to-br from-teal-50/70 to-white ${compact ? 'pb-6' : 'pb-24'}`}>
        <p className="text-[10px] font-semibold tracking-wide text-teal-700">AKHİSAR'DAN SOFRANIZA</p>
        <p className="mt-2 text-xl font-extrabold text-ink leading-tight max-w-[240px]">
          Soğuk sıkım zeytinyağı, kapınıza kadar
        </p>
        <span className="mt-4 inline-block px-3.5 py-1.5 rounded-full bg-ink text-white text-[11px] font-semibold">
          Alışverişe Başla
        </span>
        <div className="mt-6 grid grid-cols-3 gap-2 max-w-[300px]">
          {zeytinProducts.map((p) => (
            <div key={p.name} className="rounded-lg bg-white border border-neutral-200 p-2">
              <div className="h-10 rounded-md bg-gradient-to-br from-lime-100 to-teal-100" />
              <p className="mt-1.5 text-[9px] font-semibold text-ink leading-tight truncate">{p.name}</p>
              <p className="text-[9px] text-neutral-400">{p.price}</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

export function ZeytinCart({ className = '' }) {
  return (
    <PhoneFrame className={className}>
      <Logo first="Zeytin" second="Evi" className="text-xs" />
      <p className="mt-2 text-[10px] font-semibold text-neutral-400">SEPETİNİZ</p>
      <div className="mt-2 space-y-2">
        {zeytinProducts.slice(0, 2).map((p) => (
          <div key={p.name} className="flex items-center gap-2">
            <div className="w-7 h-7 shrink-0 rounded-md bg-gradient-to-br from-lime-100 to-teal-100" />
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-semibold text-ink truncate">{p.name}</p>
              <p className="text-[9px] text-neutral-400">{p.size}</p>
            </div>
            <p className="text-[9px] font-semibold text-ink">{p.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-2 border-t border-neutral-100 flex justify-between text-[10px]">
        <span className="text-neutral-500">Toplam</span>
        <span className="font-bold text-ink">₺680</span>
      </div>
      <span className="mt-3 block w-full py-1.5 rounded-full bg-teal-700 text-white text-[10px] font-semibold text-center">
        Siparişi Tamamla
      </span>
    </PhoneFrame>
  );
}

/* ---------- Lezzet Durağı: restoran sitesi ---------- */

export function RestaurantSite() {
  return (
    <BrowserFrame url="akhisarlezzetduragi.com">
      <SiteNav first="Lezzet" second="Durağı" links={['Menü', 'İletişim']} />
      <div className="px-6 py-6 bg-gradient-to-br from-amber-50/70 to-white">
        <p className="text-[10px] font-semibold tracking-wide text-teal-700">EV YAPIMI LEZZETLER</p>
        <p className="mt-2 text-xl font-extrabold text-ink leading-tight max-w-[240px]">
          Sıcak bir sofra, taze malzeme
        </p>
        <div className="mt-4 flex gap-2">
          <span className="px-3.5 py-1.5 rounded-full bg-ink text-white text-[11px] font-semibold">Menüyü Gör</span>
          <span className="px-3.5 py-1.5 rounded-full border border-neutral-300 text-ink text-[11px] font-semibold">
            Rezervasyon
          </span>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2 max-w-[300px]">
          {['from-amber-100 to-orange-100', 'from-rose-100 to-amber-100', 'from-lime-100 to-amber-100'].map((g) => (
            <div key={g} className={`h-10 rounded-lg bg-gradient-to-br ${g}`} />
          ))}
        </div>
      </div>
    </BrowserFrame>
  );
}

/* ---------- Kahve Molası: QR menü ---------- */

const menu = [
  { name: 'Türk Kahvesi', price: '₺45' },
  { name: 'Latte', price: '₺70' },
  { name: 'San Sebastian', price: '₺95' },
  { name: 'Limonata', price: '₺55' },
];

export function QrMenuPhone({ className = '' }) {
  return (
    <PhoneFrame className={className}>
      <Logo first="Kahve" second="Molası" className="text-xs" />
      <div className="mt-2 flex gap-1.5 text-[9px] font-semibold">
        <span className="px-2 py-0.5 rounded-full bg-ink text-white">Sıcak</span>
        <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">Soğuk</span>
        <span className="px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-500">Tatlı</span>
      </div>
      <div className="mt-3 space-y-2.5">
        {menu.map((m) => (
          <div key={m.name} className="flex items-center gap-2">
            <div className="w-7 h-7 shrink-0 rounded-md bg-gradient-to-br from-amber-100 to-orange-100" />
            <p className="flex-1 text-[10px] font-medium text-ink truncate">{m.name}</p>
            <p className="text-[10px] font-semibold text-ink">{m.price}</p>
          </div>
        ))}
      </div>
    </PhoneFrame>
  );
}

export function QrCode({ className = '' }) {
  // Sabit desenli, dekoratif bir QR karesi
  const cells = '1110111010010111011101001101100010111010110101110011010110100111011101011110110100111'.split('');
  return (
    <div className={`p-3 rounded-xl bg-white border border-neutral-200 shadow-xl shadow-neutral-900/10 ${className}`}>
      <div className="grid grid-cols-9 gap-[2px] w-[72px]">
        {cells.slice(0, 81).map((c, i) => (
          <span key={i} className={`aspect-square rounded-[1px] ${c === '1' ? 'bg-ink' : 'bg-transparent'}`} />
        ))}
      </div>
      <p className="mt-2 text-[9px] font-semibold text-center text-neutral-500">Masa 4 · Menü</p>
    </div>
  );
}

/* ---------- Oto servis: Google İşletme Profili ---------- */

export function GoogleProfileCard({ className = '' }) {
  return (
    <div
      className={`w-full max-w-[320px] rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/15 overflow-hidden ${className}`}
    >
      <div className="relative h-28 bg-[linear-gradient(135deg,#e6f4f1_25%,#d9eee9_25%,#d9eee9_50%,#e6f4f1_50%,#e6f4f1_75%,#d9eee9_75%)] bg-[length:28px_28px]">
        <div className="absolute inset-x-0 top-1/2 h-3 bg-white/80" />
        <div className="absolute left-1/3 inset-y-0 w-3 bg-white/80" />
        <span className="absolute left-[calc(33%-10px)] top-[calc(50%-26px)] text-rose-500 animate-float">
          <MapPin size={28} fill="currentColor" strokeWidth={1.5} className="text-rose-500 stroke-white" />
        </span>
      </div>
      <div className="p-4">
        <p className="font-semibold text-ink">Akhisar Oto Bakım</p>
        <div className="mt-1 flex items-center gap-1.5 text-xs">
          <span className="text-amber-500 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={12} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
          <span className="text-neutral-400">Oto servis · Akhisar</span>
        </div>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-teal-700 font-medium">
          <Clock size={12} strokeWidth={2} /> Şu an açık · 19:00'da kapanır
        </p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px] font-semibold text-teal-700">
          {[
            { icon: Navigation, label: 'Yol tarifi' },
            { icon: Phone, label: 'Ara' },
            { icon: MapPin, label: 'Kaydet' },
          ].map(({ icon: Icon, label }) => (
            <span key={label} className="flex flex-col items-center gap-1 py-2 rounded-lg bg-teal-50">
              <Icon size={14} strokeWidth={2} />
              {label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
