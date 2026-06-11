import React, { useEffect, useState } from 'react';
import { Calendar, ShoppingCart, ArrowUp } from 'lucide-react';
import { useCart } from '../context/CartContext';

/**
 * Floating action buttons anchored bottom-right.
 * Pill-rectangle pair (Reservations gold / Add to Cart green) inspired by the
 * uploaded reference, with a small scroll-to-top circle above when scrolled.
 */
export default function Fab() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { count, openCart, openReservation } = useCart();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 md:bottom-7 md:right-7 z-30 flex flex-col items-end gap-3">
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="bg-zinc-900/90 backdrop-blur border border-amber-400/30 text-amber-400 w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:bg-zinc-800 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
        >
          <ArrowUp size={18} />
        </button>
      )}

      <div className="flex flex-col sm:flex-row gap-3 items-end">
        <button
          onClick={openReservation}
          aria-label="Open reservations"
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white pl-4 pr-5 py-3 rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          <Calendar size={18} strokeWidth={2} className="opacity-95" />
          <span className="text-[13px] font-semibold tracking-wide whitespace-nowrap">Reservations</span>
        </button>

        <button
          onClick={openCart}
          aria-label={`Add to cart, ${count} items`}
          className="relative inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-700 to-emerald-600 hover:from-emerald-600 hover:to-emerald-500 text-white pl-5 pr-4 py-3 rounded-2xl shadow-[0_10px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_28px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-300"
        >
          <span className="text-[13px] font-semibold tracking-wide whitespace-nowrap">Add to Cart</span>
          <ShoppingCart size={18} strokeWidth={2} className="opacity-95" />
          {count > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-black text-[10px] font-bold rounded-full min-w-[20px] h-5 px-1 flex items-center justify-center border-2 border-black tabular-nums">
              {count}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
