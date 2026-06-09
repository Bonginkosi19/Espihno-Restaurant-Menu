import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, MapPin } from 'lucide-react';
import { HERO_BG } from '../../data/menu';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-end justify-center overflow-hidden">
      <img
        src={HERO_BG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      {/* Soft gradient at top to keep the navbar legible, dark only at the bottom so the
          dining-room photo is the focal point. */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-black/90" />

      <div className="relative z-10 w-full px-6 pb-12 md:pb-16 flex flex-col items-center text-center">
        <Link
          to="/menu"
          className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/40 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          Go To Menu
          <span className="w-8 h-px bg-black/60 group-hover:w-12 transition-all" />
        </Link>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.3em] text-white/80">
          <span className="flex items-center gap-2"><Clock size={14} className="text-amber-400" /> Open Daily 08:00 – 22:00</span>
          <span className="flex items-center gap-2"><MapPin size={14} className="text-amber-400" /> Flame Tree Park, Siteki</span>
        </div>
      </div>
    </section>
  );
}
