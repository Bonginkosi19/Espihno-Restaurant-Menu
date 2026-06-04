import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, Send } from 'lucide-react';
import { ADDRESS_LINES, HOURS, PHONE, EMAIL, INSTAGRAM, WHATSAPP } from '../data/menu';
import { useCart } from '../context/CartContext';

export default function Contact() {
  const { openReservation } = useCart();
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const send = (e) => {
    e.preventDefault();
    const text = `Hello Espinho!%0A%0AFrom: ${form.name} (${form.email})%0A%0A${form.message}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <>
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-script text-amber-300 text-3xl md:text-4xl mb-2">Get In Touch</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">Visit · Call · Write</h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            Walk in, book ahead, or send us a note — we'd love to host you.
          </p>
        </div>
      </section>

      <section className="relative py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Info */}
          <div className="space-y-5">
            <a
              href="https://maps.google.com/?q=Flame+Tree+Park+Siteki+Eswatini"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 rounded-2xl p-6 transition-all"
            >
              <MapPin className="text-amber-400 mb-4 group-hover:scale-110 transition-transform" size={26} />
              <h3 className="font-serif text-xl font-bold text-white mb-2">Find Us</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {ADDRESS_LINES.map((line, i) => (
                  <span key={i} className="block">{line}</span>
                ))}
              </p>
              <span className="inline-block mt-3 text-amber-400/80 text-xs uppercase tracking-widest group-hover:text-amber-400">
                Open in Maps →
              </span>
            </a>

            <a href={`tel:${PHONE}`} className="group block bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 rounded-2xl p-6 transition-all">
              <Phone className="text-amber-400 mb-4 group-hover:scale-110 transition-transform" size={26} />
              <h3 className="font-serif text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 text-sm">{PHONE}</p>
            </a>

            <a href={`mailto:${EMAIL}`} className="group block bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 rounded-2xl p-6 transition-all">
              <Mail className="text-amber-400 mb-4 group-hover:scale-110 transition-transform" size={26} />
              <h3 className="font-serif text-xl font-bold text-white mb-2">Email</h3>
              <p className="text-gray-400 text-sm">{EMAIL}</p>
            </a>

            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="group block bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 rounded-2xl p-6 transition-all">
              <Instagram className="text-amber-400 mb-4 group-hover:scale-110 transition-transform" size={26} />
              <h3 className="font-serif text-xl font-bold text-white mb-2">Instagram</h3>
              <p className="text-gray-400 text-sm">@espinho_restaurant_bar</p>
            </a>

            <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6">
              <Clock className="text-amber-400 mb-4" size={26} />
              <h3 className="font-serif text-xl font-bold text-white mb-3">Opening Hours</h3>
              <dl className="text-gray-400 text-sm space-y-1">
                {HOURS.map((h) => (
                  <div key={h.label} className="flex justify-between">
                    <dt>{h.label}</dt>
                    <dd className="tabular-nums">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Form */}
          <div>
            <div className="bg-gradient-to-br from-zinc-900 to-black border border-amber-400/20 rounded-2xl p-8">
              <p className="font-script text-amber-300 text-2xl mb-2">Send a Message</p>
              <h2 className="font-serif text-3xl font-bold text-white mb-6">Drop Us a Line</h2>
              <form className="space-y-4" onSubmit={send}>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white"
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white"
                />
                <textarea
                  required
                  rows="5"
                  placeholder="What can we help you with?"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white resize-none"
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-[1.02] transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
                >
                  <Send size={14} />
                  Send via WhatsApp
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-zinc-800 text-center">
                <p className="text-gray-500 text-xs mb-3">Booking a table?</p>
                <button
                  onClick={openReservation}
                  className="text-amber-400 text-xs uppercase tracking-[0.25em] font-semibold hover:underline"
                >
                  Open reservation form →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl overflow-hidden border border-zinc-800 aspect-[16/7]">
            <iframe
              title="Espinho Restaurant location"
              src="https://www.google.com/maps?q=Flame+Tree+Park+Siteki+Eswatini&output=embed"
              loading="lazy"
              className="w-full h-full filter grayscale contrast-110"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
