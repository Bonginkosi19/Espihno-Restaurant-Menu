import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Users, Briefcase, Sparkles, Music, Wine, ChevronRight } from 'lucide-react';
import { WHATSAPP } from '../data/menu';
import { useCart } from '../context/CartContext';

const offerings = [
  { icon: Sparkles, title: 'Custom Tasting Menus', body: 'Chef-curated multi-course dinners built around your occasion.' },
  { icon: Music, title: 'Live Entertainment', body: 'Optional acoustic acts and DJs to set the mood for the evening.' },
  { icon: Wine, title: 'Curated Wine Pairings', body: 'Sommelier pairings with every course — local and international cellars.' },
];

const inquire = (type) => {
  const message = `Hello Espinho! I'd like to inquire about hosting a ${type} event. Please share availability and packages.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
};

export default function Events() {
  const { openReservation } = useCart();
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [hash]);

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-script text-amber-300 text-3xl md:text-4xl mb-2">Choose Your Day</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">Host an Evening at Espinho</h1>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From intimate celebrations to corporate dinners — we'll build the night around you.
          </p>
        </div>
      </section>

      <section id="private" className="relative py-20 bg-black scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=80"
              alt="Private dining setup"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
          </div>
          <div>
            <Users className="text-amber-400 mb-4" size={32} />
            <p className="font-script text-amber-300 text-2xl mb-2">Intimate Gatherings</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Private Events</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Birthdays, anniversaries, engagements, milestone dinners. We hold a private corner of the restaurant
              with dedicated service, candlelight, and a menu we shape with you in advance.
            </p>
            <ul className="text-gray-400 text-sm space-y-2 mb-8">
              <li className="flex gap-2"><ChevronRight size={16} className="text-amber-400 mt-0.5 shrink-0" /> Seats 6 – 24 guests in private setting</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-amber-400 mt-0.5 shrink-0" /> Customized 3, 5, or 7-course tasting</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-amber-400 mt-0.5 shrink-0" /> Optional wine pairing and signature cocktail welcome</li>
            </ul>
            <button
              onClick={() => inquire('private')}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              Enquire on WhatsApp <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>

      <section id="corporate" className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Briefcase className="text-amber-400 mb-4" size={32} />
            <p className="font-script text-amber-300 text-2xl mb-2">Built for Business</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Corporate Events</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Board dinners, client hosting, team celebrations and end-of-year evenings. Set menus,
              AV-friendly spacing, and full-bar service — all delivered to the pace of your evening.
            </p>
            <ul className="text-gray-400 text-sm space-y-2 mb-8">
              <li className="flex gap-2"><ChevronRight size={16} className="text-amber-400 mt-0.5 shrink-0" /> Up to 60 guests, semi-private layout</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-amber-400 mt-0.5 shrink-0" /> Fixed set menu — invoiceable per head</li>
              <li className="flex gap-2"><ChevronRight size={16} className="text-amber-400 mt-0.5 shrink-0" /> Branding accommodations and reserved bar tabs</li>
            </ul>
            <button
              onClick={() => inquire('corporate')}
              className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
            >
              Enquire on WhatsApp <ChevronRight size={14} />
            </button>
          </div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden order-1 md:order-2">
            <img
              src="https://images.unsplash.com/photo-1592861956120-e524fc739696?auto=format&fit=crop&w=1100&q=80"
              alt="Corporate dinner table"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/50 to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-script text-amber-300 text-2xl mb-2">What's Included</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Event Offerings</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {offerings.map((o) => {
              const Icon = o.icon;
              return (
                <div key={o.title} className="bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 rounded-2xl p-6 transition-all">
                  <Icon className="text-amber-400 mb-4" size={28} />
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{o.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{o.body}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-14">
            <button
              onClick={openReservation}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              Reserve a Walk-Through <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
