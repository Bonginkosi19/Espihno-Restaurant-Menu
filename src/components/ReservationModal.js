import React, { useEffect, useState } from 'react';
import { Calendar, X, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP, PHONE } from '../data/menu';

const initial = { name: '', email: '', phone: '', date: '', time: '', guests: '', requests: '' };

export default function ReservationModal() {
  const { isReservationOpen, closeReservation } = useCart();
  const [form, setForm] = useState(initial);

  useEffect(() => {
    if (!isReservationOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && closeReservation();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isReservationOpen, closeReservation]);

  if (!isReservationOpen) return null;

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const message = `New Reservation Request:%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0ADate: ${form.date}%0ATime: ${form.time}%0AGuests: ${form.guests}%0ASpecial Requests: ${form.requests || 'None'}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${message}`, '_blank');
    setForm(initial);
    closeReservation();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
      onClick={closeReservation}
    >
      <div
        className="bg-gradient-to-br from-zinc-900 to-black border border-amber-400/30 rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto p-8 relative shadow-2xl shadow-amber-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeReservation}
          aria-label="Close reservation form"
          className="absolute top-4 right-4 text-gray-400 hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <Calendar size={40} className="text-amber-400 mx-auto mb-4" />
          <h2 id="reservation-title" className="font-serif text-3xl font-bold text-amber-400 mb-2">
            Reserve Your Table
          </h2>
          <p className="text-gray-400 text-sm">Experience elegance at Espinho</p>
        </div>

        <form className="space-y-4" onSubmit={onSubmit}>
          <input type="text" placeholder="Full Name" value={form.name} onChange={update('name')} required
            className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white" />
          <input type="tel" placeholder="Phone Number" value={form.phone} onChange={update('phone')} required
            className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white" />
          <input type="email" placeholder="Email Address" value={form.email} onChange={update('email')}
            className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white" />
          <div className="grid grid-cols-2 gap-4">
            <input type="date" value={form.date} onChange={update('date')} required
              className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white" />
            <input type="time" value={form.time} onChange={update('time')} required
              className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white" />
          </div>
          <select value={form.guests} onChange={update('guests')} required
            className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors text-white">
            <option value="">Number of Guests</option>
            <option value="1-2">1-2 guests</option>
            <option value="3-4">3-4 guests</option>
            <option value="5-6">5-6 guests</option>
            <option value="7+">7+ guests</option>
          </select>
          <textarea placeholder="Special Requests (Optional)" rows="3" value={form.requests} onChange={update('requests')}
            className="w-full bg-black/50 border border-zinc-700 px-4 py-3 rounded-lg focus:border-amber-400 focus:outline-none transition-colors resize-none text-white" />
          <button type="submit"
            className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-bold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-300">
            <Phone size={18} />
            Confirm via WhatsApp
          </button>
          <p className="text-gray-500 text-xs text-center">
            Or call us directly at{' '}
            <a href={`tel:${PHONE}`} className="text-amber-400 hover:underline">
              {PHONE}
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
