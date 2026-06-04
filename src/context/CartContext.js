import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const addToCart = useCallback((item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.name === item.name);
      if (existing) {
        return prev.map((i) => (i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i));
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((name) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  }, []);

  const updateQuantity = useCallback((name, quantity) => {
    setCart((prev) => {
      if (quantity <= 0) return prev.filter((i) => i.name !== name);
      return prev.map((i) => (i.name === name ? { ...i, quantity } : i));
    });
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const total = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const n = parseFloat(String(item.price).replace(/[^0-9.]/g, ''));
        return sum + (Number.isFinite(n) ? n * item.quantity : 0);
      }, 0),
    [cart]
  );

  const count = useMemo(() => cart.reduce((n, i) => n + i.quantity, 0), [cart]);

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      total,
      count,
      isCartOpen,
      openCart: () => setIsCartOpen(true),
      closeCart: () => setIsCartOpen(false),
      isReservationOpen,
      openReservation: () => setIsReservationOpen(true),
      closeReservation: () => setIsReservationOpen(false),
    }),
    [cart, addToCart, removeFromCart, updateQuantity, clearCart, total, count, isCartOpen, isReservationOpen]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
