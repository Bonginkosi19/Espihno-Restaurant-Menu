import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PHONE, PHONE_DISPLAY } from '../data/menu';

// Routes whose page bodies start with a cream/light surface — Navbar inverts to keep contrast.
const LIGHT_ROUTES = [];

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Menu' },
  { to: '/bar', label: 'Bar' },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openReservation } = useCart();
  const { pathname } = useLocation();
  const isLight = LIGHT_ROUTES.includes(pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navClass = ({ isActive }) =>
    `relative px-3 py-2 text-xs uppercase tracking-[0.25em] transition-colors focus:outline-none ${
      isActive
        ? (isLight ? 'text-[#7a1e2b]' : 'text-amber-400')
        : (isLight ? 'text-[#16181c]/70 hover:text-[#7a1e2b]' : 'text-gray-300 hover:text-amber-400')
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-black/95 backdrop-blur-xl shadow-xl shadow-black/50 py-3'
          : isLight
            ? 'bg-[#f4efe6]/80 backdrop-blur-md py-5'
            : 'bg-black/30 backdrop-blur-md py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 focus:outline-none">
          <img
            src="/logo.png"
            alt="Espinho"
            className={`object-contain transition-all duration-300 ${scrolled ? 'h-9' : 'h-11'}`}
          />
          <div className="hidden sm:block leading-tight">
            <p className={`text-[10px] uppercase tracking-[0.3em] font-light ${isLight ? 'text-[#7a1e2b]' : 'text-amber-400/90'}`}>Restaurant & Bar</p>
            <p className={`text-[10px] tracking-widest ${isLight ? 'text-[#16181c]/50' : 'text-amber-400/50'}`}>Siteki, Eswatini</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} className={navClass}>
              {({ isActive }) => (
                <>
                  {l.label}
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-amber-400" />
                  )}
                </>
              )}
            </NavLink>
          ))}
          <button
            onClick={openReservation}
            className={`ml-3 px-5 py-2 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all focus:outline-none focus:ring-2 ${
              isLight
                ? 'bg-[#7a1e2b] text-white hover:bg-[#571320] focus:ring-[#7a1e2b]/40'
                : 'border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black focus:ring-amber-400/60'
            }`}
          >
            Reserve
          </button>
        </nav>

        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 ${
            isLight
              ? 'text-[#16181c] hover:bg-[#16181c]/5 focus:ring-[#7a1e2b]/40'
              : 'text-amber-400 hover:bg-amber-400/10 focus:ring-amber-400/60'
          }`}
        >
          {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {/* Mobile dropdown — solid charcoal sheet with strong shadow, gold border accent, generous spacing */}
      {mobileOpen && (
        <>
          <div
            aria-hidden="true"
            onClick={() => setMobileOpen(false)}
            className="md:hidden fixed inset-0 top-[68px] bg-black/60 backdrop-blur-sm z-30 animate-[fadeIn_0.2s_ease-out]"
          />
          <div
            className="md:hidden fixed inset-x-3 top-[80px] z-40 rounded-2xl bg-[#0c0d10] border border-amber-400/30 shadow-2xl shadow-black/70 p-6 animate-[fadeIn_0.25s_ease-out] max-h-[calc(100vh-100px)] overflow-y-auto"
            style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,162,76,0.15)' }}
          >
            <nav className="flex flex-col">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  className={({ isActive }) =>
                    `relative py-4 px-3 border-b border-zinc-800/80 text-base uppercase tracking-[0.25em] font-semibold transition-colors ${
                      isActive ? 'text-amber-400' : 'text-white hover:text-amber-400'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="flex items-center justify-between">
                      <span>{l.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            <a
              href={`tel:${PHONE}`}
              className="mt-6 flex items-center justify-center gap-2 border border-amber-400/30 text-amber-400 px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-semibold hover:bg-amber-400/10 transition-colors"
            >
              <Phone size={14} />
              {PHONE_DISPLAY}
            </a>

            <button
              onClick={() => { setMobileOpen(false); openReservation(); }}
              className="mt-3 w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black px-6 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold hover:scale-[1.02] transition-transform"
            >
              Reserve a Table
            </button>
          </div>
        </>
      )}
    </header>
  );
}
