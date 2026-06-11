import React, { useEffect } from 'react';
import { ShoppingBag, X, Phone, Plus, Minus, Trash2, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP } from '../data/menu';

/**
 * Slide-out cart drawer — premium, mobile-optimised, with quantity steppers
 * and a sticky footer for the place-order action.
 */
export default function CartModal() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, total, count } = useCart();

  useEffect(() => {
    if (!isCartOpen) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => e.key === 'Escape' && closeCart();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const placeOrder = () => {
    const lines = cart.map((i) => `${i.quantity}x ${i.name} - ${i.price}`).join('\n');
    const text = `Hello Espinho! I would like to place an order:\n\n${lines}\n\nTotal: E${total.toFixed(2)}\n\nPlease confirm availability and pickup/delivery details.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-stretch justify-end animate-[fadeIn_0.25s_ease-out]"
      onClick={closeCart}
    >
      <div
        className="w-full sm:max-w-md bg-gradient-to-b from-zinc-950 via-zinc-900 to-black border-l border-amber-400/20 shadow-[0_-10px_60px_rgba(0,0,0,0.8)] relative animate-[slideInRight_0.35s_ease-out] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-6 border-b border-zinc-800 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
              <ShoppingBag size={18} className="text-amber-400" />
            </div>
            <div>
              <h2 id="cart-title" className="font-serif text-2xl font-bold text-white leading-tight">Your Order</h2>
              <p className="text-amber-400/70 text-[10px] uppercase tracking-[0.3em]">
                {count} {count === 1 ? 'item' : 'items'}
              </p>
            </div>
          </div>
          <button
            onClick={closeCart}
            aria-label="Close cart"
            className="text-gray-400 hover:text-amber-400 transition-colors bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag size={48} className="mx-auto text-amber-400/30 mb-5" strokeWidth={1} />
              <p className="font-serif text-2xl text-white mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto leading-relaxed">
                Browse the menu and add a few signatures — your order ships to our WhatsApp for confirmation.
              </p>
              <button
                onClick={closeCart}
                className="text-amber-400 hover:text-amber-300 text-xs uppercase tracking-[0.25em] font-semibold inline-flex items-center gap-2"
              >
                Start ordering <ChevronRight size={14} />
              </button>
            </div>
          ) : (
            <ul className="space-y-3">
              {cart.map((item, idx) => (
                <li
                  key={`${item.name}-${idx}`}
                  className="bg-black/40 border border-zinc-800 rounded-2xl p-4 hover:border-amber-400/30 transition-colors animate-[slideInUp_0.3s_ease-out]"
                >
                  <div className="flex justify-between items-start gap-3 mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-semibold truncate">{item.name}</h3>
                      <p className="text-amber-400 text-sm tabular-nums">{item.price}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      aria-label={`Remove ${item.name}`}
                      className="text-gray-500 hover:text-red-400 transition-colors p-1.5 rounded-full hover:bg-red-400/10"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 rounded-full p-1">
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity - 1)}
                        aria-label={`Decrease ${item.name}`}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-amber-400 hover:bg-amber-400/10 transition-colors focus:outline-none"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-white font-bold text-sm tabular-nums w-7 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.name, item.quantity + 1)}
                        aria-label={`Increase ${item.name}`}
                        className="w-8 h-8 rounded-full flex items-center justify-center text-amber-400 hover:bg-amber-400/10 transition-colors focus:outline-none"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="text-amber-400 font-bold text-sm tabular-nums">
                      {item.price.includes('E')
                        ? `E${(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity).toFixed(2)}`
                        : item.price}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Sticky footer with total + checkout */}
        {cart.length > 0 && (
          <div className="border-t border-zinc-800 px-6 py-5 bg-black/60 backdrop-blur flex-shrink-0">
            <div className="flex justify-between items-baseline mb-4">
              <span className="text-gray-400 text-xs uppercase tracking-[0.3em]">Total</span>
              <span className="text-amber-400 text-3xl font-bold font-serif tabular-nums">E{total.toFixed(2)}</span>
            </div>
            <button
              onClick={placeOrder}
              className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-black px-7 py-4 rounded-full text-sm uppercase tracking-[0.25em] font-bold hover:scale-[1.02] hover:shadow-xl hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <Phone size={16} />
              Place Order via WhatsApp
            </button>
            <p className="text-gray-500 text-[10px] uppercase tracking-[0.25em] text-center mt-3">
              Our host will confirm availability
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
