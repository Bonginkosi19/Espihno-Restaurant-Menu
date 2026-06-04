import React, { useEffect, useState } from 'react';
import { Calendar, ShoppingBag, ArrowUp } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Fab() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { count, openCart, openReservation } = useCart();

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-30 flex flex-col gap-3 md:gap-4">
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="bg-zinc-900/90 backdrop-blur border border-amber-400/30 text-amber-400 p-3 rounded-full shadow-xl hover:bg-zinc-800 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <button
        onClick={openReservation}
        aria-label="Reserve a table"
        className="bg-gradient-to-r from-amber-600 to-amber-500 text-black p-4 rounded-full shadow-2xl shadow-amber-500/30 hover:scale-110 transition-all group focus:outline-none focus:ring-2 focus:ring-amber-300"
      >
        <Calendar size={24} className="group-hover:rotate-12 transition-transform" />
      </button>
      <button
        onClick={openCart}
        aria-label={`View cart, ${count} items`}
        className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4 rounded-full shadow-2xl shadow-green-500/30 hover:scale-110 transition-all group relative focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        <ShoppingBag size={24} className="group-hover:scale-110 transition-transform" />
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full min-w-[24px] h-6 px-1.5 flex items-center justify-center border-2 border-black">
            {count}
          </span>
        )}
      </button>
    </div>
  );
}
