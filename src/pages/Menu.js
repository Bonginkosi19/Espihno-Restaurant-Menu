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
      {/* Cream page header — sweetgreen-style */}
      <section className="relative pt-32 pb-10 md:pt-40 md:pb-12 bg-[#f4efe6] overflow-hidden">
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-[#7a1e2b] text-xs uppercase tracking-[0.4em] mb-3 font-semibold">Espinho × The Kitchen</p>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-[#16181c] tracking-tight leading-[1.05]">
            The Menu
          </h1>
        </div>
      </section>

      {/* Sticky type-as-tab nav + search */}
      <div className="sticky top-[68px] md:top-[72px] z-20 bg-[#f4efe6]/95 backdrop-blur-xl border-b border-[#16181c]/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div
            role="tablist"
            aria-label="Menu categories"
            className="flex gap-4 md:gap-8 overflow-x-auto scrollbar-hide pb-2 justify-start md:justify-center"
          >
            {Object.entries(CATEGORIES).map(([key, cat]) => {
              const active = activeCategory === key;
              return (
                <button
                  key={key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => { setActiveCategory(key); setQuery(''); }}
                  className={`relative font-serif font-bold text-2xl md:text-4xl whitespace-nowrap transition-all duration-300 focus:outline-none ${
                    active
                      ? 'text-[#16181c]'
                      : 'text-[#16181c]/30 hover:text-[#16181c]/60'
                  }`}
                >
                  {cat.title.replace(' & Shellfish', '').replace(' & Curry', '').replace(' & Poultry', '')}
                  {active && (
                    <span className="absolute left-1/2 -translate-x-1/2 -bottom-3 w-2 h-2 rounded-full bg-[#16181c]" />
                  )}
                </button>
              );
            })}
          </div>
          <div className="mt-6 max-w-md mx-auto">
            <label className="relative block">
              <span className="sr-only">Search the menu</span>
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#16181c]/40 pointer-events-none" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={`Search ${CATEGORIES[activeCategory].title.toLowerCase()}…`}
                className="w-full bg-white/70 border border-[#16181c]/15 text-[#16181c] text-sm rounded-full pl-10 pr-4 py-3 focus:outline-none focus:border-[#7a1e2b] focus:bg-white transition-colors placeholder:text-[#16181c]/40"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Items — cream surface, image-first */}
      <section ref={gridRef} className="bg-[#f4efe6]">
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-20">
          {query && (
            <p className="text-center mb-10 text-[#16181c]/60 text-sm">
              {filtered.length} result{filtered.length === 1 ? '' : 's'} for "{query}"
              <button onClick={() => setQuery('')} className="ml-3 text-[#7a1e2b] hover:underline font-semibold">clear</button>
            </p>
          )}

          {filtered.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-[#16181c]/20 rounded-3xl">
              <Search size={32} className="mx-auto text-[#16181c]/30 mb-4" />
              <p className="text-[#16181c]/60 mb-2">No dishes match "{query}".</p>
              <button onClick={() => setQuery('')} className="text-[#7a1e2b] text-sm uppercase tracking-wider hover:underline font-semibold">
                Show all
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {filtered.map((item, idx) => {
                const inCart = cart.find((c) => c.name === item.name);
                const CatIcon = CategoryIcon;
                return (
                  <article
                    key={`${activeCategory}-${item.name}-${idx}`}
                    className="group flex flex-col"
                  >
                    <div className="relative aspect-square rounded-3xl overflow-hidden bg-[#16181c]/5 mb-5 ring-1 ring-[#16181c]/5">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#16181c]/[0.04] to-[#16181c]/[0.10]">
                          <CatIcon size={64} className="text-[#16181c]/15" strokeWidth={1} />
                        </div>
                      )}
                      {item.featured && (
                        <span className="absolute top-4 left-4 bg-[#dfff3c] text-[#16181c] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                          Signature
                        </span>
                      )}
                      {item.bottlePrice && (
                        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur text-[#16181c] text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                          By Bottle
                        </span>
                      )}
                    </div>

                    <h3 className="text-[#16181c] text-lg md:text-xl font-bold tracking-wide uppercase mb-2 leading-tight">
                      {item.name}
                    </h3>
                    {item.category && (
                      <p className="text-[#16181c]/50 text-[11px] uppercase tracking-[0.2em] mb-2">{item.category}</p>
                    )}
                    {item.description && (
                      <p className="text-[#16181c]/70 text-sm leading-relaxed mb-3 flex-1">{item.description}</p>
                    )}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[#16181c] text-2xl font-bold tabular-nums font-serif">{item.price}</span>
                      {item.bottlePrice && (
                        <span className="text-[#16181c]/60 text-xs">Bottle <span className="font-semibold text-[#16181c]">{item.bottlePrice}</span></span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(item)}
                      aria-label={inCart ? `${item.name} added ${inCart.quantity} times` : `Add ${item.name} to order`}
                      className={`group/btn inline-flex items-center gap-2 text-sm font-semibold transition-colors focus:outline-none ${
                        inCart ? 'text-[#1f4d3a]' : 'text-[#16181c] hover:text-[#7a1e2b]'
                      }`}
                    >
                      <ShoppingBag size={15} />
                      {inCart ? `Added · ${inCart.quantity}` : 'Add to order'}
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
