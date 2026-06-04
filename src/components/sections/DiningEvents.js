import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, ChevronRight } from 'lucide-react';

export default function DiningEvents() {
  return (
    <section className="relative py-20 md:py-28 bg-black border-y border-zinc-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">Choose Your Day</p>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Dining Events</h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-12">
          From intimate celebrations to corporate evenings — we'll build the night around you.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          <div className="group relative bg-gradient-to-br from-zinc-900 to-black border border-amber-400/20 hover:border-amber-400/60 rounded-2xl p-8 transition-all text-left overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-all" />
            <Users className="text-amber-400 mb-5 relative" size={32} />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 relative">Private Events</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 relative">
              Birthdays, anniversaries, intimate dinners. Custom menus, private seating, dedicated service.
            </p>
            <Link
              to="/events#private"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-105 transition-all relative focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              Learn More <ChevronRight size={14} />
            </Link>
          </div>
          <div className="group relative bg-gradient-to-br from-zinc-900 to-black border border-amber-400/20 hover:border-amber-400/60 rounded-2xl p-8 transition-all text-left overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-amber-500/10 blur-3xl group-hover:bg-amber-500/20 transition-all" />
            <Briefcase className="text-amber-400 mb-5 relative" size={32} />
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3 relative">Corporate Events</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 relative">
              Board dinners, team celebrations, client hosting. Set menus, AV-friendly spaces, full-bar service.
            </p>
            <Link
              to="/events#corporate"
              className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-bold transition-all relative focus:outline-none focus:ring-2 focus:ring-amber-400/60"
            >
              Learn More <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
