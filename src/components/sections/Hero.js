import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import { HERO_BG } from '../../data/menu';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.7)_75%)]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-28 pb-20">
        <p className="font-script text-amber-300 text-3xl md:text-4xl mb-4">Best Italian In Town</p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight mb-6">
          TASTE THE RICH FLAVOR OF<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500">
            ITALIAN COASTAL CUISINE
          </span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed font-light mb-10">
          We only use five-star quality for our menu — come and get the richness in every food we serve.
        </p>
        <Link
          to="/menu"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          Go To Menu
          <span className="w-8 h-px bg-black/60 group-hover:w-12 transition-all" />
        </Link>

        <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.3em] text-gray-400">
          <span className="flex items-center gap-2"><Clock size={14} className="text-amber-400/80" /> Open Daily 08:00 – 22:00</span>
          <span className="flex items-center gap-2"><MapPin size={14} className="text-amber-400/80" /> Flame Tree Park, Siteki</span>
        </div>
      </div>
    </section>
  );
}
