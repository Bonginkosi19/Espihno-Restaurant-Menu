import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import { CATEGORIES } from '../data/menu';
import { useCart } from '../context/CartContext';

export default function MenuPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCat = searchParams.get('cat') && CATEGORIES[searchParams.get('cat')] ? searchParams.get('cat') : 'breakfast';
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

  // Group items by sub-category if present (for wines, spirits, beverages)
  const grouped = useMemo(() => {
    const groups = new Map();
    filtered.forEach((item) => {
      const key = item.category || '__main__';
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(item);
    });
    return Array.from(groups.entries());
  }, [filtered]);

  return (
    <>
      {/* Leather-cover hero — mirrors the print menu cover */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
        style={{
          backgroundColor: '#2a1d12',
          backgroundImage:
            "radial-gradient(ellipse at 20% 30%, rgba(200,162,76,0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(60,40,25,0.6) 0%, transparent 60%), repeating-linear-gradient(45deg, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 6px)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-script text-[#e0bf6a] text-4xl md:text-5xl mb-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">Espinho</p>
          <p className="text-[#c8a24c]/80 text-[10px] md:text-xs uppercase tracking-[0.5em] mb-12">Restaurant & Bar</p>
          <h1 className="font-script text-7xl sm:text-8xl md:text-9xl text-[#e0bf6a] leading-none drop-shadow-[0_4px_16px_rgba(0,0,0,0.7)]">
            Menu
          </h1>
        </div>
      </section>

      {/* Sticky type-as-tab nav (black + gold, print menu style) */}
      <div className="sticky top-[68px] md:top-[72px] z-20 bg-black/95 backdrop-blur-xl border-y border-[#c8a24c]/15">
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex gap-5 md:gap-8 overflow-x-auto scrollbar-hide pb-2 px-1"
          >
            {Object.entries(CATEGORIES).map(([key, cat]) => {
              const active = activeCategory === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => { setActiveCategory(key); setQuery(''); }}
                  className={`relative font-bold text-xs md:text-sm uppercase tracking-[0.25em] whitespace-nowrap transition-all duration-300 focus:outline-none ${
                    active ? 'text-[#e0bf6a]' : 'text-white/40 hover:text-white/80'
                  }`}
                >
                  {cat.title}
                  {active && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-1 h-1 rounded-full bg-[#e0bf6a]" />
                  )}
                </button>
              );
            })}
          </div>
          <div className="mt-5 max-w-md mx-auto">
            <label className="relative block">
              <span className="sr-only">Search the menu</span>
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${CATEGORIES[activeCategory].title.toLowerCase()}…`}
                className="w-full bg-white/[0.04] border border-white/10 text-white text-sm rounded-full pl-10 pr-4 py-2.5 focus:outline-none focus:border-[#c8a24c]/60 focus:bg-white/[0.07] transition-colors placeholder:text-white/30"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Menu page — black with gold, dotted leader between item and price */}
      <section
        ref={gridRef}
        className="relative bg-black"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(200,162,76,0.04) 0%, transparent 60%)',
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">
          {/* Category title in gold uppercase, print-style */}
          <div className="text-center mb-14 md:mb-20">
            <h2 className="font-bold text-[#e0bf6a] text-4xl md:text-5xl uppercase tracking-[0.2em] mb-3">
              {CATEGORIES[activeCategory].title}
            </h2>
            <div className="flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-[#c8a24c]/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#c8a24c]" />
              <span className="h-px w-12 bg-[#c8a24c]/40" />
            </div>
            {query && (
              <p className="mt-5 text-white/50 text-sm">
                {filtered.length} result{filtered.length === 1 ? '' : 's'} for "{query}"
                <button onClick={() => setQuery('')} className="ml-3 text-[#e0bf6a] hover:underline">clear</button>
              </p>
            )}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-white/15 rounded-2xl">
              <Search size={32} className="mx-auto text-white/25 mb-4" />
              <p className="text-white/60 mb-2">No dishes match "{query}".</p>
              <button onClick={() => setQuery('')} className="text-[#e0bf6a] text-sm uppercase tracking-wider hover:underline">
                Show all
              </button>
            </div>
          ) : (
            <div className="space-y-12">
              {grouped.map(([groupKey, items]) => (
                <div key={groupKey}>
                  {groupKey !== '__main__' && (
                    <h3 className="text-[#c8a24c] text-xs md:text-sm uppercase tracking-[0.35em] font-bold mb-6 pb-3 border-b border-[#c8a24c]/20">
                      {groupKey}
                    </h3>
                  )}
                  <ul className="space-y-7">
                    {items.map((item, idx) => {
                      const inCart = cart.find((c) => c.name === item.name);
                      return (
                        <li key={`${activeCategory}-${item.name}-${idx}`} className="group">
                          <div className="flex items-baseline gap-3 mb-1.5">
                            <h4 className="text-white text-base md:text-lg font-bold uppercase tracking-wide leading-tight">
                              {item.name}
                              {item.featured && (
                                <span className="ml-3 inline-block align-middle px-2 py-0.5 bg-[#c8a24c] text-black text-[9px] font-bold uppercase tracking-[0.2em] rounded">
                                  Signature
                                </span>
                              )}
                            </h4>
                            <span
                              aria-hidden="true"
                              className="flex-1 border-b border-dotted border-white/20 translate-y-[-3px]"
                            />
                            <span className="text-[#e0bf6a] text-base md:text-lg font-bold tabular-nums whitespace-nowrap">
                              {item.price}
                            </span>
                          </div>
                          {item.description && (
                            <p className="text-white/55 text-sm leading-relaxed font-light pr-0 md:pr-24 mb-3">
                              {item.description}
                            </p>
                          )}
                          {item.bottlePrice && (
                            <p className="text-white/40 text-xs uppercase tracking-widest mb-3">
                              By Bottle <span className="text-[#e0bf6a] font-semibold ml-2 tabular-nums">{item.bottlePrice}</span>
                            </p>
                          )}
                          <button
                            onClick={() => addToCart(item)}
                            aria-label={inCart ? `${item.name} added ${inCart.quantity} times` : `Add ${item.name} to order`}
                            className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold transition-colors focus:outline-none ${
                              inCart ? 'text-emerald-400' : 'text-white/50 hover:text-[#e0bf6a]'
                            }`}
                          >
                            <ShoppingBag size={13} />
                            {inCart ? `Added · ${inCart.quantity}` : 'Add to order'}
                            <span className="transition-transform group-hover:translate-x-1">→</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer note from the print menu */}
        {(activeCategory === 'cocktails' || activeCategory === 'wines' || activeCategory === 'spirits' || activeCategory === 'beer') && (
          <div className="max-w-5xl mx-auto px-6 pb-16">
            <div className="border border-[#c8a24c]/30 bg-black/40 text-center py-3 rounded">
              <p className="text-white text-xs md:text-sm uppercase tracking-[0.3em] font-semibold">
                Alcohol not for persons under the age of 18.
              </p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
