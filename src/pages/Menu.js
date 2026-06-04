import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { CATEGORIES } from '../data/menu';
import { useCart } from '../context/CartContext';

export default function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') && CATEGORIES[searchParams.get('cat')] ? searchParams.get('cat') : 'seafood';
  const [activeCategory, setActiveCategory] = useState(initialCat);
  const [query, setQuery] = useState('');
  const { addToCart, cart } = useCart();
  const gridRef = useRef(null);

  useEffect(() => {
    if (searchParams.get('cat') !== activeCategory) {
      setSearchParams({ cat: activeCategory }, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCategory]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const items = CATEGORIES[activeCategory].items;
    if (!q) return items;
    return items.filter((i) =>
      `${i.name} ${i.description || ''} ${i.category || ''}`.toLowerCase().includes(q)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, activeCategory]);

  const CategoryIcon = CATEGORIES[activeCategory].icon;

  return (
    <>
      {/* Page header */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-b from-zinc-950 to-black overflow-hidden">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">Crafted with Excellence</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-4">The Espinho Menu</h1>
          <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
            From wet-aged steaks to fresh shellfish and a curated bar — every plate built with intent.
          </p>
        </div>
      </section>

      {/* Sticky category + search */}
      <div className="sticky top-[68px] md:top-[72px] z-20 bg-black/95 backdrop-blur-xl border-y border-amber-400/10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-3">
            <div role="tablist" aria-label="Menu categories" className="flex gap-2 overflow-x-auto scrollbar-hide pb-1 px-1 flex-1">
              {Object.entries(CATEGORIES).map(([key, cat]) => {
                const Icon = cat.icon;
                const active = activeCategory === key;
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={active}
                    onClick={() => { setActiveCategory(key); setQuery(''); }}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60 ${
                      active
                        ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-black shadow-lg shadow-amber-500/30'
                        : 'bg-zinc-900/60 text-gray-300 hover:bg-zinc-800 hover:text-amber-400 border border-zinc-800/50'
                    }`}
                  >
                    <Icon size={16} strokeWidth={2.5} />
                    {cat.title}
                  </button>
                );
              })}
            </div>
            <label className="relative lg:w-72 shrink-0">
              <span className="sr-only">Search the menu</span>
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${CATEGORIES[activeCategory].title.toLowerCase()}…`}
                className="w-full bg-zinc-900/60 border border-zinc-800/70 text-white text-sm rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-amber-400/60 focus:bg-zinc-900 transition-colors placeholder:text-gray-500"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Items */}
      <section ref={gridRef} className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
            <CategoryIcon size={32} className="text-amber-400" strokeWidth={1.5} />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-amber-400">
            {CATEGORIES[activeCategory].title}
          </h2>
          {query && (
            <p className="mt-4 text-gray-500 text-sm">
              {filtered.length} result{filtered.length === 1 ? '' : 's'} for "{query}"
              <button onClick={() => setQuery('')} className="ml-3 text-amber-400 hover:underline">clear</button>
            </p>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-zinc-800 rounded-2xl">
            <Search size={32} className="mx-auto text-gray-600 mb-4" />
            <p className="text-gray-400 mb-2">No dishes match "{query}".</p>
            <button onClick={() => setQuery('')} className="text-amber-400 text-sm uppercase tracking-wider hover:underline">
              Show all
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {filtered.map((item, idx) => {
              const inCart = cart.find((c) => c.name === item.name);
              return (
                <article
                  key={`${activeCategory}-${item.name}-${idx}`}
                  className={`group relative bg-gradient-to-br ${CATEGORIES[activeCategory].gradient} backdrop-blur-sm rounded-2xl p-6 md:p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl flex flex-col ${
                    item.featured ? 'border-amber-400/40 shadow-lg shadow-amber-500/10' : 'border-zinc-800/60 hover:border-amber-400/30'
                  }`}
                >
                  {item.featured && (
                    <div className="absolute -top-3 left-6 px-3 py-1 bg-gradient-to-r from-amber-600 to-amber-500 text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-full shadow-lg shadow-amber-500/30">
                      Signature
                    </div>
                  )}
                  <div className="flex justify-between items-start mb-3 gap-4">
                    <h3 className="font-serif text-xl md:text-2xl font-semibold text-amber-400 group-hover:text-amber-300 transition-colors leading-tight">
                      {item.name}
                    </h3>
                    <span className="text-xl md:text-2xl font-bold text-amber-400 whitespace-nowrap flex-shrink-0 tabular-nums">{item.price}</span>
                  </div>
                  {item.category && (
                    <p className="text-[10px] uppercase tracking-[0.25em] text-amber-400/60 mb-3 font-light">{item.category}</p>
                  )}
                  {item.description && (
                    <p className="text-gray-400 text-sm leading-relaxed font-light flex-1">{item.description}</p>
                  )}
                  {item.bottlePrice && (
                    <div className="mt-4 pt-4 border-t border-zinc-700/50 flex justify-between items-center">
                      <span className="text-xs uppercase tracking-widest text-gray-500">By Bottle</span>
                      <span className="text-amber-400 font-semibold tabular-nums">{item.bottlePrice}</span>
                    </div>
                  )}
                  <button
                    onClick={() => addToCart(item)}
                    aria-label={inCart ? `${item.name} added ${inCart.quantity} times` : `Add ${item.name} to order`}
                    className={`mt-5 w-full px-6 py-3 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-400/60 ${
                      inCart
                        ? 'bg-green-500/15 border border-green-500/40 text-green-300'
                        : 'bg-zinc-900/60 border border-zinc-700/70 text-gray-300 hover:bg-green-500 hover:border-green-500 hover:text-white'
                    }`}
                  >
                    <ShoppingBag size={15} />
                    {inCart ? `Added · ${inCart.quantity}` : 'Add to Order'}
                  </button>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
