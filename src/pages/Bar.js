import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Wine, ChevronDown } from 'lucide-react';
import { BAR_ZONES, TODAYS_SPECIAL } from '../data/menu';
import { useCart } from '../context/CartContext';

function GallerySlider({ images, alt }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef(null);

  useEffect(() => {
    const node = trackRef.current?.children[active];
    if (node && trackRef.current) {
      node.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [active]);

  const go = (delta) => {
    setActive((cur) => (cur + delta + images.length) % images.length);
  };

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
      >
        {images.map((src, i) => (
          <div
            key={src + i}
            className="snap-center shrink-0 w-[80%] sm:w-[55%] md:w-[42%] aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-amber-400/10"
          >
            <img src={src} alt={`${alt} ${i + 1}`} loading="lazy" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <button
        onClick={() => go(-1)}
        aria-label="Previous photo"
        className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/80 border border-amber-400/30 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/60"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next photo"
        className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-black/80 border border-amber-400/30 text-amber-400 hover:bg-amber-400 hover:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-amber-400/60"
      >
        <ChevronRight size={20} />
      </button>
      <div className="flex justify-center gap-2 mt-4">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? 'w-8 bg-amber-400' : 'w-2 bg-amber-400/30 hover:bg-amber-400/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Bar() {
  const { openReservation, addToCart } = useCart();
  const cocktailSpecial = TODAYS_SPECIAL.find((s) => s.name === 'Pina Colada');

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
        <img
          src="/images/outdoor-bar-stella.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-script text-amber-300 text-3xl md:text-4xl mb-2">After the Plate</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            The Espinho Bar
          </h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Premium cocktails, single malts, sundowners on the deck — three rooms for whichever evening you're after.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {BAR_ZONES.map((z) => (
              <a
                key={z.slug}
                href={`#${z.slug}`}
                className="px-5 py-2.5 text-xs uppercase tracking-[0.25em] font-semibold border border-amber-400/40 text-amber-400 hover:bg-amber-400 hover:text-black rounded-full transition-colors"
              >
                {z.label}
              </a>
            ))}
          </div>
          <div className="mt-12 inline-flex items-center gap-2 text-amber-400/70 text-xs uppercase tracking-[0.3em]">
            <ChevronDown size={14} className="animate-bounce" />
            Scroll
          </div>
        </div>
      </section>

      {/* Bar zones */}
      {BAR_ZONES.map((zone, idx) => (
        <section
          key={zone.slug}
          id={zone.slug}
          className={`relative py-20 md:py-28 scroll-mt-24 ${
            idx % 2 === 0 ? 'bg-black' : 'bg-gradient-to-b from-black via-zinc-950 to-black'
          }`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-10 ${idx % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:col-start-8' : ''}`}>
                <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">{zone.eyebrow}</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                  {zone.title}
                </h2>
                <p className="text-gray-400 leading-relaxed mb-8 text-base">{zone.description}</p>
                <button
                  onClick={openReservation}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-105 transition-all"
                >
                  Reserve a Spot <ChevronRight size={14} />
                </button>
              </div>
              <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <GallerySlider images={zone.gallery} alt={zone.label} />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Signature drink showcase */}
      {cocktailSpecial && (
        <section className="relative py-20 bg-black border-t border-amber-400/10">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-amber-400/10">
              <img src={cocktailSpecial.image} alt={cocktailSpecial.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div>
              <Wine className="text-amber-400 mb-4" size={32} />
              <p className="font-script text-amber-300 text-2xl mb-2">House Mix</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{cocktailSpecial.name}</h2>
              <p className="text-gray-400 leading-relaxed mb-6">{cocktailSpecial.blurb}</p>
              <p className="font-serif text-3xl text-amber-400 font-bold mb-8 tabular-nums">{cocktailSpecial.price}</p>
              <button
                onClick={() => addToCart({ name: cocktailSpecial.name, price: cocktailSpecial.price })}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-105 transition-all"
              >
                Add to Order <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
