import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Routes whose page bodies start with a cream/light surface — Navbar inverts to keep contrast.
const LIGHT_ROUTES = ['/menu'];

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
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
          ? 'bg-black/95 backdrop-blur-xl shadow-xl shadow-amber-500/10 py-3'
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
          className={`md:hidden p-2 rounded-md focus:outline-none focus:ring-2 ${
            isLight
              ? 'text-[#16181c] hover:bg-[#16181c]/5 focus:ring-[#7a1e2b]/40'
              : 'text-amber-400 hover:bg-amber-400/10 focus:ring-amber-400/60'
          }`}
        >
          {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-black/97 backdrop-blur-xl pt-24 px-6 z-30 animate-[fadeIn_0.2s_ease-out]">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.end}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `py-4 border-b border-zinc-800 text-lg uppercase tracking-[0.25em] font-light ${
                    isActive ? 'text-amber-400' : 'text-gray-300'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <button
              onClick={() => { setMobileOpen(false); openReservation(); }}
              className="mt-8 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-6 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold"
            >
              Reserve a Table
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
