import React from 'react';
import { Calendar } from 'lucide-react';
import { useCart } from '../context/CartContext';

/**
 * Floating vertical side tab. Always visible on tablet/desktop along the right
 * edge of the viewport — non-intrusive, single-click opens the reservation
 * modal. Hidden on mobile because the bottom FABs already cover it there.
 */
export default function ReserveTab() {
  const { openReservation } = useCart();

  return (
    <button
      onClick={openReservation}
      aria-label="Reserve a table"
      className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-30
                 items-center gap-3 px-4 py-5
                 bg-gradient-to-b from-amber-600 to-amber-500 text-black
                 rounded-l-2xl shadow-2xl shadow-amber-500/30
                 hover:px-5 hover:shadow-amber-500/50 transition-all duration-300
                 focus:outline-none focus:ring-2 focus:ring-amber-300
                 group"
    >
      <Calendar size={20} strokeWidth={2.5} className="group-hover:rotate-6 transition-transform" />
      <span
        className="text-[11px] uppercase tracking-[0.4em] font-bold whitespace-nowrap"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        Reserve a Table
      </span>
    </button>
  );
}
