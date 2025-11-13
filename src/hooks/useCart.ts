import { useState } from 'react';
import type { CartItem, Product } from '../types';

export default function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(product: Product, qty = 1) {
    setItems(prev => {
      const found = prev.find(i => i.id === product.id);
      if (found) {
        return prev.map(i => i.id === product.id ? { ...i, quantity: i.quantity + qty } : i);
      }
      return [...prev, { ...product, quantity: qty }];
    });
  }

  function removeFromCart(id: string) {
    setItems(prev => prev.filter(i => i.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return { items, addToCart, removeFromCart, clearCart, total };
}
