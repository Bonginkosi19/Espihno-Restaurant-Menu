import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Leaf, Heart, ChefHat, ChevronRight } from 'lucide-react';
import { RESTAURANT_INTERIOR, CHEF_IMAGE, GALLERY_IMAGES, INTERIORS, BRAND_PALETTE } from '../data/menu';
import InteriorImage from '../components/InteriorImage';

const values = [
  { icon: Award, title: 'Five-Star Quality', body: 'Every plate is built from premium produce, wet-aged meats and fresh-caught seafood.' },
  { icon: Leaf, title: 'Locally Sourced', body: 'We work with Eswatini farms and the Mozambican coast for seasonal, ethical ingredients.' },
  { icon: Heart, title: 'Hospitality First', body: 'Warm service, attentive pacing, and a table that feels like home.' },
  { icon: ChefHat, title: 'Honest Italian', body: 'Modern contemporary Italian — refined without losing soul.' },
];

export default function About() {
  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <img src={RESTAURANT_INTERIOR} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/85 to-black" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-script text-amber-300 text-3xl md:text-4xl mb-2">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">A Quiet Corner of Italy in Siteki</h1>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Espinho was born from a love of slow food, sea-fresh produce, and an evening that lingers.
            We bring the warmth of an Italian trattoria and the richness of the Mozambican coast to the heart of Eswatini.
          </p>
        </div>
      </section>

      <section className="relative py-20 bg-black">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/5] order-1 md:order-2">
            <img src={CHEF_IMAGE} alt="Espinho chef plating a dish" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>
          <div className="order-2 md:order-1">
            <p className="font-script text-amber-300 text-2xl mb-2">The Kitchen</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Built around the producer</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Our menu lives at the intersection of two coastlines — the Adriatic and the Indian Ocean. We pull risotto
              technique from northern Italy, peri-peri heat from the Mozambican shore, and the discipline of 21-day
              wet-aging from the South African steakhouse tradition.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              No shortcuts. Stocks reduced for hours. Bread baked daily. Wine paired thoughtfully.
              Every signature on the menu has been earned in the kitchen.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 border border-amber-400/50 text-amber-400 hover:bg-amber-400 hover:text-black px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-amber-400/60"
            >
              See the Menu <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gradient-to-b from-black via-zinc-950 to-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-script text-amber-300 text-2xl mb-2">What We Stand For</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Our Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-zinc-900/60 border border-zinc-800 hover:border-amber-400/40 rounded-2xl p-6 transition-all"
                >
                  <Icon className="text-amber-400 mb-4" size={28} />
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{v.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{v.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Step Inside — cream surface with editorial pull quote and layered photos */}
      <section className="relative py-24 bg-[#f4efe6] text-[#16181c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12">
            <div className="lg:col-span-7">
              <p className="text-[#7a1e2b] text-xs uppercase tracking-[0.4em] mb-3 font-semibold">Step Inside</p>
              <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
                A room dressed in <span className="italic text-[#1f4d3a]">velvet</span> and <span className="italic text-[#7a1e2b]">brass</span>.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-[#16181c]/70 leading-relaxed text-base md:text-lg">
                Dark slatted walls, sage banquettes, emerald and ruby velvet chairs, oak tabletops trimmed in brass —
                pendant globes hung against the night. Espinho was built to feel like an evening that doesn't want to end.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-3 md:gap-5">
            <div className="col-span-12 md:col-span-8 relative aspect-[16/9] rounded-3xl overflow-hidden ring-1 ring-[#16181c]/10">
              <InteriorImage src={INTERIORS.diningRoom} alt="Espinho dining room with emerald and ruby velvet chairs" className="w-full h-full" />
            </div>
            <div className="col-span-6 md:col-span-4 relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-[#16181c]/10">
              <InteriorImage src={INTERIORS.tableSetting} alt="Brass-trimmed oak table with wine glasses" className="w-full h-full" />
            </div>
            <div className="col-span-6 md:col-span-4 relative aspect-square rounded-3xl overflow-hidden ring-1 ring-[#16181c]/10">
              <InteriorImage src={INTERIORS.banquette} alt="Sage banquette and slatted feature wall" className="w-full h-full" />
            </div>
            <div className="col-span-12 md:col-span-8 relative aspect-[16/9] md:aspect-[16/7] rounded-3xl overflow-hidden ring-1 ring-[#16181c]/10">
              <InteriorImage src={INTERIORS.bar} alt="Espinho bar area" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Brand palette — the colours of the room */}
      <section className="relative py-20 bg-[#16181c] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-[#c8a24c] text-xs uppercase tracking-[0.4em] mb-3 font-semibold">The Palette</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold">The colours of the room</h2>
            <p className="text-white/60 max-w-lg mx-auto mt-4 text-sm">
              Every accent across the brand is drawn from a surface in the dining room.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {BRAND_PALETTE.map((c) => (
              <div key={c.name} className="rounded-2xl overflow-hidden ring-1 ring-white/10">
                <div className="aspect-square" style={{ backgroundColor: c.hex }} />
                <div className="p-3 bg-white/5 backdrop-blur">
                  <p className="text-xs font-semibold tracking-wide">{c.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50 mt-0.5 tabular-nums">{c.hex}</p>
                  <p className="text-[10px] text-white/40 mt-1 leading-snug">{c.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery — keep food shots on dark surface */}
      <section className="relative py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="font-script text-amber-300 text-2xl mb-2">From the Pass</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Plates & Pours</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className={`relative overflow-hidden rounded-2xl ${i % 5 === 0 ? 'col-span-2 row-span-2 aspect-square' : 'aspect-square'}`}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
