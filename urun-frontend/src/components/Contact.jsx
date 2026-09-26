import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { contact } from '../data/contact';
import InstagramIcon from './InstagramIcon';
import useReveal from '../hooks/useReveal';
import { trackEvent } from '../analytics';

const WHATSAPP_NUMBER = '905318858981';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', business: '', message: '' });
  const [ref, visible] = useReveal();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const lines = [
      `Merhaba, ben ${form.name || '—'}.`,
      form.business && `İşletme/Sektör: ${form.business}`,
      form.phone && `Telefon: ${form.phone}`,
      form.message && `Mesaj: ${form.message}`,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join('\n'));
    trackEvent('iletisim-formu');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank', 'noreferrer');
  };

  return (
    <section id="iletisim" className="relative overflow-hidden bg-white scroll-mt-20">
      <div aria-hidden className="absolute inset-0 bg-dot-grid" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-teal-700" />
            <p className="text-sm font-semibold tracking-wide text-teal-700">İLETİŞİME GEÇİN</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink max-w-md">
            İşletmenizi <span className="font-serif italic font-medium text-teal-700">büyütmeye</span> hazır
            mısınız?
          </h2>
          <p className="mt-4 text-neutral-500 max-w-md leading-relaxed">
            İster web sitesi, ister Google profili, QR menü ya da reklam — ne ihtiyacınız varsa
            konuşalım. Formu doldurun ya da doğrudan WhatsApp'tan yazın.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink font-semibold hover:text-teal-700 transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                <Phone size={16} strokeWidth={1.75} />
              </span>
              0531 885 89 81
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-ink font-semibold hover:text-teal-700 transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                <Mail size={16} strokeWidth={1.75} />
              </span>
              {contact.email}
            </a>
            <a
              href={contact.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-ink font-semibold hover:text-teal-700 transition-colors"
            >
              <span className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                <InstagramIcon size={16} />
              </span>
              @{contact.instagram}
            </a>
            <p className="flex items-center gap-3 text-neutral-500">
              <span className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center text-teal-700">
                <MapPin size={16} strokeWidth={1.75} />
              </span>
              {contact.location}
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className={`transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-2xl border border-neutral-200 bg-white shadow-xl shadow-neutral-900/5 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Ad Soyad"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-teal-700 transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telefon"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-teal-700 transition-colors"
            />
            <input
              type="text"
              name="business"
              placeholder="İşletme / Sektör"
              value={form.business}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-teal-700 transition-colors"
            />
            <textarea
              name="message"
              placeholder="Mesajınız"
              value={form.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 text-sm focus:outline-none focus:border-teal-700 transition-colors"
            />
            <button
              type="submit"
              className="w-full px-6 py-3.5 rounded-full bg-ink text-white text-sm font-semibold hover:bg-teal-800 hover:-translate-y-0.5 transition-all"
            >
              WhatsApp'tan Gönder
            </button>
            <p className="text-xs text-neutral-500 text-center leading-relaxed">
              Form WhatsApp üzerinden iletilir. Gönder'e bastığınızda{' '}
              <Link to="/kvkk" className="underline underline-offset-2 hover:text-teal-700">
                KVKK Aydınlatma Metni
              </Link>
              'ni okuduğunuzu kabul etmiş olursunuz.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
