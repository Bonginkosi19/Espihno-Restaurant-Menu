import React, { useState } from 'react';
import { ImageIcon } from 'lucide-react';

// Renders an Espinho interior photo with a tasteful charcoal/brass placeholder
// when the source file isn't on disk yet (e.g. before the original PNGs are
// committed to public/images/).
export default function InteriorImage({ src, alt, className = '', loading = 'lazy' }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    const filename = src?.split('/').pop() || 'image';
    return (
      <div
        className={`relative bg-[#16181c] flex flex-col items-center justify-center text-center px-6 ${className}`}
        role="img"
        aria-label={alt}
      >
        {/* Slatted wall placeholder texture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 2px, transparent 2px, transparent 14px)',
          }}
        />
        <div className="relative">
          <div className="w-14 h-14 mx-auto mb-3 rounded-full border border-[#c8a24c]/40 flex items-center justify-center text-[#c8a24c]">
            <ImageIcon size={22} strokeWidth={1.5} />
          </div>
          <p className="text-[#c8a24c] text-[10px] uppercase tracking-[0.3em] mb-2">Photo pending</p>
          <p className="text-white/80 text-sm font-serif mb-1">{alt}</p>
          <code className="text-white/40 text-[10px]">{filename}</code>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setErrored(true)}
      className={`object-cover ${className}`}
    />
  );
}
