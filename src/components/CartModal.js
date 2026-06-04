import React, { useEffect } from 'react';
import { ShoppingBag, X, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { WHATSAPP } from '../data/menu';

export default function CartModal() {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, total } = useCart();

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
    const lines = cart.map((i) => `${i.quantity}x ${i.name} - ${i.price}`).join('%0A');
    const text = `Hello Espinho! I would like to place an order:%0A%0A${lines}%0A%0ATotal: E${total.toFixed(2)}%0A%0APlease confirm availability and delivery details.`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-title"
      className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-[fadeIn_0.2s_ease-out]"
      onClick={closeCart}
    >
      <div
        className="bg-gradient-to-br from-zinc-900 to-black border border-green-400/30 rounded-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto p-8 relative shadow-2xl shadow-green-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeCart}
          aria-label="Close cart"
          className="absolute top-4 right-4 text-gray-400 hover:text-green-400 transition-colors z-10 bg-black/50 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-green-400/60"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-8">
          <ShoppingBag size={40} className="text-green-400 mx-auto mb-4" />
          <h2 id="cart-title" className="font-serif text-3xl font-bold text-green-400 mb-2">
            Your Order
          </h2>
          <p className="text-gray-400 text-sm">Review and confirm via WhatsApp</p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 mb-4">Your cart is empty</p>
            <button
              onClick={closeCart}
              className="text-amber-400 hover:text-amber-300 text-sm uppercase tracking-wider"
            >
              Start ordering
            </button>
          </div>
        ) : (
          <>
            <div className="space-y-3 mb-6">
              {cart.map((item, idx) => (
                <div key={`${item.name}-${idx}`} className="bg-black/50 border border-zinc-700 rounded-lg p-4 flex justify-between items-center">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold truncate">{item.name}</h3>
                    <p className="text-amber-400 text-sm">{item.price}</p>
                  </div>
                  <div className="flex items-center gap-2 ml-3">
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity - 1)}
                      className="bg-zinc-800 hover:bg-zinc-700 text-white w-8 h-8 rounded flex items-center justify-center"
                      aria-label={`Decrease ${item.name}`}
                    >
                      -
                    </button>
                    <span className="text-white font-bold w-6 text-center tabular-nums">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, item.quantity + 1)}
                      className="bg-zinc-800 hover:bg-zinc-700 text-white w-8 h-8 rounded flex items-center justify-center"
                      aria-label={`Increase ${item.name}`}
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="text-red-400 hover:text-red-300 ml-1"
                      aria-label={`Remove ${item.name}`}
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-zinc-700 pt-4 mb-6 flex justify-between items-center text-xl font-bold">
              <span className="text-white">Total</span>
              <span className="text-amber-400 tabular-nums">E{total.toFixed(2)}</span>
            </div>
            <button
              onClick={placeOrder}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white px-8 py-4 rounded-lg text-sm uppercase tracking-wider font-bold hover:scale-[1.02] transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-300"
            >
              <Phone size={18} />
              Place Order via WhatsApp
            </button>
            <p className="text-gray-500 text-xs text-center mt-4">Your order will be sent to our WhatsApp for confirmation.</p>
          </>
        )}
      </div>
    </div>
  );
}
