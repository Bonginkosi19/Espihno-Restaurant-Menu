import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/menu';

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">Guest Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">What Our Guests Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative bg-gradient-to-b from-zinc-900/80 to-black border border-zinc-800 rounded-2xl p-8 hover:border-amber-400/40 transition-all"
            >
              <Quote className="absolute top-6 right-6 text-amber-400/20" size={36} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 italic">
                "{t.quote}"
              </blockquote>
              <figcaption>
                <div className="text-amber-400 font-semibold">{t.name}</div>
                <div className="text-gray-500 text-xs uppercase tracking-widest">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
