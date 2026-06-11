import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, Mail, Instagram } from 'lucide-react';
import { ADDRESS_LINES, HOURS, PHONE, PHONE_DISPLAY, EMAIL, INSTAGRAM } from '../data/menu';

export default function Footer() {
  return (
    <footer id="visit" className="relative mt-20 border-t border-amber-400/10 bg-black">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-950 to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">Visit Espinho</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-400">A seat at the table awaits</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-14">
          <a
            href="https://maps.google.com/?q=Flame+Tree+Park+Siteki+Eswatini"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-zinc-900/50 border border-zinc-800/70 hover:border-amber-400/40 rounded-2xl p-6 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
          >
            <MapPin className="text-amber-400 mb-4 group-hover:scale-110 transition-transform" size={24} />
            <h3 className="text-amber-400 font-semibold mb-2 tracking-wide">Find Us</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {ADDRESS_LINES.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </p>
            <span className="text-amber-400/70 text-xs uppercase tracking-widest mt-4 inline-block group-hover:text-amber-400">
              Open in Maps →
            </span>
          </a>

          <div className="bg-zinc-900/50 border border-zinc-800/70 rounded-2xl p-6">
            <Clock className="text-amber-400 mb-4" size={24} />
            <h3 className="text-amber-400 font-semibold mb-2 tracking-wide">Opening Hours</h3>
            <dl className="text-gray-400 text-sm leading-relaxed space-y-1">
              {HOURS.map((h) => (
                <div key={h.label} className="flex justify-between">
                  <dt>{h.label}</dt>
                  <dd className="tabular-nums">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800/70 rounded-2xl p-6">
            <Phone className="text-amber-400 mb-4" size={24} />
            <h3 className="text-amber-400 font-semibold mb-2 tracking-wide">Get in Touch</h3>
            <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
              <li>
                <a href={`tel:${PHONE}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Phone size={14} /> {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Mail size={14} /> {EMAIL}
                </a>
              </li>
              <li>
                <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-amber-400 transition-colors">
                  <Instagram size={14} /> @espinho_restaurant_bar
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-zinc-800/50">
          <img src="/logo.png" alt="" className="h-8 opacity-50" />
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.25em] text-gray-500">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <Link to="/menu" className="hover:text-amber-400 transition-colors">Menu</Link>
            <Link to="/bar" className="hover:text-amber-400 transition-colors">Bar</Link>
            <Link to="/events" className="hover:text-amber-400 transition-colors">Events</Link>
            <Link to="/about" className="hover:text-amber-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
          </nav>
          <p className="text-gray-600 text-xs tracking-wide">© {new Date().getFullYear()} Espinho</p>
        </div>
      </div>
    </footer>
  );
}
