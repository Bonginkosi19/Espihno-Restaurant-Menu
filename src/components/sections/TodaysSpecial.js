import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { TODAYS_SPECIAL } from '../../data/menu';
import { useCart } from '../../context/CartContext';

export default function TodaysSpecial() {
  const { addToCart } = useCart();
  return (
    <section className="relative py-20 md:py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          eyebrow="Signature Menu"
          title="Today's Special"
          subtitle="Specials rotate daily — these are our chef's picks for tonight."
          className="mb-14"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TODAYS_SPECIAL.map((s) => (
            <article
              key={s.name}
              className="group bg-gradient-to-b from-zinc-900/90 to-black border border-zinc-800/70 hover:border-amber-400/40 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <span className="absolute top-4 right-4 bg-black/70 backdrop-blur text-amber-400 text-sm font-bold px-3 py-1.5 rounded-full tabular-nums">
                  {s.price}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">{s.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 min-h-[3.5rem]">{s.blurb}</p>
                <div className="flex items-center gap-1 mb-5" aria-label={`${s.rating} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < s.rating ? 'text-amber-400 fill-amber-400' : 'text-zinc-700'}
                    />
                  ))}
                </div>
                <button
                  onClick={() => addToCart({ name: s.name, price: s.price })}
                  className="w-full inline-flex items-center justify-center gap-2 border border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
                >
                  Choose Now
                  <ChevronRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
