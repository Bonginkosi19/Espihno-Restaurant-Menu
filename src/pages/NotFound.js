import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 py-32 text-center">
      <div className="max-w-md">
        <p className="font-script text-amber-300 text-3xl mb-2">Oh dear…</p>
        <h1 className="font-serif text-6xl md:text-7xl font-bold text-white mb-4">404</h1>
        <p className="text-gray-400 mb-8">
          This page isn't on our menu. Let's get you back to something delicious.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-105 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
