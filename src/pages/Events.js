import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronRight, Check, ChevronDown } from 'lucide-react';
import { EVENT_CATEGORIES, WHATSAPP } from '../data/menu';
import { useCart } from '../context/CartContext';

const inquire = (type) => {
  const message = `Hello Espinho! I'd like to inquire about ${type}. Please share availability and packages.`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
};

function EventSection({ event, index }) {
  const [expandedGallery, setExpandedGallery] = useState(false);
  const reversed = index % 2 === 1;

  return (
    <section id={event.slug} className="relative py-20 md:py-28 bg-black scroll-mt-24 odd:bg-gradient-to-b odd:from-black odd:via-zinc-950 odd:to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          {/* Hero image with hover scale */}
          <div className={`relative aspect-[4/5] rounded-3xl overflow-hidden group ring-1 ring-amber-400/10 ${reversed ? 'lg:order-2' : ''}`}>
            <img
              src={event.hero}
              alt={event.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/55 via-transparent to-transparent" />
            <span className="absolute top-5 left-5 px-3 py-1.5 bg-amber-400/95 text-black text-[10px] font-bold uppercase tracking-[0.25em] rounded-full backdrop-blur">
              {event.eyebrow}
            </span>
          </div>

          {/* Text + perks + CTAs */}
          <div className={reversed ? 'lg:order-1' : ''}>
            <p className="font-script text-amber-300 text-2xl md:text-3xl mb-3">{event.label}</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
              {event.title}
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-base">
              {event.description}
            </p>
            <ul className="space-y-3 mb-10">
              {event.perks.map((perk) => (
                <li key={perk} className="flex gap-3 text-gray-300 text-sm">
                  <Check size={18} className="text-amber-400 mt-0.5 shrink-0" strokeWidth={2.5} />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => inquire(event.inquireType)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                Book this event <ChevronRight size={14} />
              </button>
              <button
                onClick={() => setExpandedGallery((v) => !v)}
                className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
              >
                {expandedGallery ? 'Hide gallery' : 'View gallery'}
                <ChevronDown
                  size={14}
                  className={`transition-transform ${expandedGallery ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* Inline gallery — slides open under the row */}
        {expandedGallery && (
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 animate-[fadeIn_0.35s_ease-out]">
            {event.gallery.map((src, i) => (
              <div
                key={src + i}
                className="relative aspect-square rounded-2xl overflow-hidden group ring-1 ring-amber-400/5"
              >
                <img
                  src={src}
                  alt={`${event.label} — ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

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
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <img
          src="/images/eoy-stage-night.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-script text-amber-300 text-3xl md:text-4xl mb-2">Choose Your Day</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Host an Evening at Espinho
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            From intimate date nights to 250-guest end-of-year functions —
            we build the night around you.
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 max-w-3xl mx-auto">
            {EVENT_CATEGORIES.map((e) => (
              <a
                key={e.slug}
                href={`#${e.slug}`}
                className="px-4 py-2 text-xs uppercase tracking-[0.25em] font-semibold border border-amber-400/40 text-amber-400 hover:bg-amber-400 hover:text-black rounded-full transition-colors"
              >
                {e.label.split(' & ')[0].split(' Services')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Category sections */}
      {EVENT_CATEGORIES.map((event, idx) => (
        <EventSection key={event.slug} event={event} index={idx} />
      ))}

      {/* Final CTA */}
      <section className="relative py-20 bg-black border-t border-amber-400/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="font-script text-amber-300 text-2xl mb-2">Ready to plan?</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6">
            Let's build your evening.
          </h2>
          <p className="text-gray-400 mb-8">
            Reserve a walk-through, message us on WhatsApp, or share a brief — we'll be in touch within the same day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={openReservation}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold hover:scale-105 transition-all"
            >
              Reserve a Walk-Through <ChevronRight size={14} />
            </button>
            <button
              onClick={() => inquire('a private function')}
              className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold transition-all"
            >
              Brief Us on WhatsApp <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
