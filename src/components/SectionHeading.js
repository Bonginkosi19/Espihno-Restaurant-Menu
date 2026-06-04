import React from 'react';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', className = '' }) {
  const alignment = align === 'left' ? 'text-left' : 'text-center';
  const dividerAlign = align === 'left' ? 'justify-start' : 'justify-center';
  return (
    <div className={`${alignment} ${className}`}>
      {eyebrow && (
        <p className="font-script text-amber-300 text-2xl md:text-3xl mb-2">{eyebrow}</p>
      )}
      <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">{title}</h2>
      <div className={`flex items-center gap-3 mb-4 ${dividerAlign}`}>
        <span className="h-px w-10 bg-amber-400/40" />
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        <span className="h-px w-10 bg-amber-400/40" />
      </div>
      {subtitle && <p className="text-gray-400 text-sm max-w-md mx-auto">{subtitle}</p>}
    </div>
  );
}
