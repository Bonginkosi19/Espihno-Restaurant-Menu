import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ChevronRight } from 'lucide-react';
import { SPECIALTY_TABS } from '../../data/menu';
import { useCart } from '../../context/CartContext';

export default function Specialties() {
  const [activeKey, setActiveKey] = useState(SPECIALTY_TABS[0].key);
  const current = SPECIALTY_TABS.find((t) => t.key === activeKey) || SPECIALTY_TABS[0];
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-black via-zinc-950 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">Quality First For You</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Our Specialties</h2>
          <p className="text-gray-400 text-sm max-w-lg mx-auto">
            Authentic flavours from our kitchen and bar — built on high-quality ingredients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {SPECIALTY_TABS.map((t) => {
            const Icon = t.icon;
            const active = activeKey === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActiveKey(t.key)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60 ${
                  active
                    ? 'border border-amber-400 text-amber-400 bg-amber-400/10'
                    : 'border border-zinc-800 text-gray-400 hover:border-amber-400/40 hover:text-amber-400'
                }`}
              >
                <Icon size={14} />
                {t.label}
              </button>
            );
          })}
        </div>

        <div
          key={current.key}
          className="grid md:grid-cols-2 gap-8 md:gap-14 items-center animate-[fadeIn_0.4s_ease-out]"
        >
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] order-1 md:order-2">
            <img src={current.image} alt={current.dish} loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
          </div>
          <div className="order-2 md:order-1">
            <p className="font-script text-amber-300 text-xl md:text-2xl mb-2">{current.eyebrow}</p>
            <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5">{current.dish}</h3>
            <p className="text-gray-400 text-base leading-relaxed mb-6">{current.description}</p>
            <p className="font-serif text-3xl text-amber-400 font-bold mb-8 tabular-nums">{current.price}</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => addToCart({ name: current.dish, price: current.price })}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300"
              >
                <ShoppingBag size={14} />
                Add to Order
              </button>
              <button
                onClick={() => navigate(`/menu?cat=${current.key}`)}
                className="inline-flex items-center gap-2 border border-amber-400/40 text-amber-400 hover:bg-amber-400/10 px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
              >
                See Full {current.label}
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
