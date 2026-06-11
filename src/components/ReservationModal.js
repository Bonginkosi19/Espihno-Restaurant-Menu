import React, { useEffect, useState } from 'react';
import { Calendar, X, Phone, CheckCircle2, ChevronRight, User, Mail, Users, MessageSquare, Clock } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP, PHONE, PHONE_DISPLAY } from '../data/menu';
import WhatsAppIcon from './WhatsAppIcon';

const initial = { name: '', email: '', phone: '', date: '', time: '', guests: '', requests: '' };

export default function ReservationModal() {
  const { isReservationOpen, closeReservation } = useCart();
  const [form, setForm] = useState(initial);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isReservationOpen) {
      setSubmitted(false);
      return;
    }
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
    const message = `New Reservation Request:\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDate: ${form.date}\nTime: ${form.time}\nGuests: ${form.guests}\nSpecial Requests: ${form.requests || 'None'}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank');
    setSubmitted(true);
  };

  const reset = () => {
    setForm(initial);
    setSubmitted(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-stretch justify-end animate-[fadeIn_0.25s_ease-out]"
      onClick={closeReservation}
    >
      <div
        className="w-full sm:max-w-md bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border-l border-amber-400/30 shadow-[0_-10px_60px_rgba(0,0,0,0.8)] overflow-y-auto relative animate-[slideInRight_0.35s_ease-out]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeReservation}
          aria-label="Close reservation form"
          className="absolute top-5 right-5 text-gray-400 hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div className="px-8 py-16 text-center min-h-[80vh] flex flex-col justify-center">
            <CheckCircle2 size={56} className="text-emerald-400 mx-auto mb-6" strokeWidth={1.5} />
            <p className="font-script text-amber-300 text-3xl mb-2">Thank you</p>
            <h2 className="font-serif text-3xl font-bold text-white mb-4">Request sent.</h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm max-w-sm mx-auto">
              We've passed your reservation request to WhatsApp. Our host will confirm availability within the hour — usually much sooner.
            </p>
            <div className="space-y-3">
              <button
                onClick={reset}
                className="w-full bg-zinc-900 border border-amber-400/30 text-amber-400 px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-semibold hover:bg-amber-400/10 transition-colors"
              >
                Make another booking
              </button>
              <button
                onClick={closeReservation}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black px-6 py-3 rounded-full text-xs uppercase tracking-[0.25em] font-bold hover:scale-[1.02] transition-transform"
              >
                Return to the site
              </button>
            </div>
            <p className="text-gray-500 text-xs mt-8">
              Need to call? <a href={`tel:${PHONE}`} className="text-amber-400 hover:underline">{PHONE_DISPLAY}</a>
            </p>
          </div>
        ) : (
          <div className="px-7 py-10 sm:py-12">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 mb-3 text-xs uppercase tracking-[0.3em] text-amber-400/80">
                <span className="w-6 h-px bg-amber-400/60" />
                <Calendar size={12} />
                <span>Reservation</span>
              </div>
              <h2 id="reservation-title" className="font-serif text-4xl font-bold text-white leading-tight mb-3">
                Reserve your table
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tell us about your evening — we'll confirm availability personally.
              </p>
            </div>

            <form className="space-y-4" onSubmit={onSubmit}>
              <Field icon={User} label="Full name" required>
                <input type="text" placeholder="Your name" value={form.name} onChange={update('name')} required className={inputClass} />
              </Field>
              <Field icon={Phone} label="Phone" required>
                <input type="tel" placeholder="+268 ..." value={form.phone} onChange={update('phone')} required className={inputClass} />
              </Field>
              <Field icon={Mail} label="Email">
                <input type="email" placeholder="you@example.com" value={form.email} onChange={update('email')} className={inputClass} />
              </Field>
              <div className="grid grid-cols-2 gap-3">
                <Field icon={Calendar} label="Date" required>
                  <input type="date" value={form.date} onChange={update('date')} required className={inputClass} />
                </Field>
                <Field icon={Clock} label="Time" required>
                  <input type="time" value={form.time} onChange={update('time')} required className={inputClass} />
                </Field>
              </div>
              <Field icon={Users} label="Guests" required>
                <select value={form.guests} onChange={update('guests')} required className={inputClass}>
                  <option value="">Select party size</option>
                  <option value="1-2">1-2 guests</option>
                  <option value="3-4">3-4 guests</option>
                  <option value="5-6">5-6 guests</option>
                  <option value="7-12">7-12 guests</option>
                  <option value="13+">13+ guests (event enquiry)</option>
                </select>
              </Field>
              <Field icon={MessageSquare} label="Special requests">
                <textarea
                  rows={3}
                  placeholder="Anniversary, dietary needs, seating preference…"
                  value={form.requests}
                  onChange={update('requests')}
                  className={`${inputClass} resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-amber-300 flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={18} /> Confirm via WhatsApp <ChevronRight size={16} />
              </button>

              <div className="pt-3 text-center">
                <p className="text-gray-500 text-xs">
                  Or call us directly at{' '}
                  <a href={`tel:${PHONE}`} className="text-amber-400 hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

const inputClass =
  'w-full bg-black/60 border border-zinc-800 px-4 py-3 rounded-xl text-white text-sm focus:border-amber-400/70 focus:bg-black/80 focus:outline-none focus:ring-1 focus:ring-amber-400/30 transition-colors placeholder:text-gray-600';

function Field({ icon: Icon, label, required, children }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-amber-400/70 mb-2">
        <Icon size={11} />
        {label}
        {required && <span className="text-amber-400/40">*</span>}
      </span>
      {children}
    </label>
  );
}
