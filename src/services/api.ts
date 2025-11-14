import type { Product } from '../types';
import products from '../data/products';

export const fetchProducts = async (): Promise<Product[]> => {
  // simulate async API
  return Promise.resolve(products);
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const found = products.find(p => p.id === id) ?? null;
  return Promise.resolve(found);
};

export const searchProducts = async (q: string): Promise<Product[]> => {
  const term = q.trim().toLowerCase();
  if (!term) return Promise.resolve(products);
  return Promise.resolve(products.filter(p => p.name.toLowerCase().includes(term) || (p.description||'').toLowerCase().includes(term)));
};

// Simple in-memory CRUD for admin UI (mutates `products` array)
export const addProduct = async (p: Omit<Product, 'id'>): Promise<Product> => {
  const id = String(Number(products[products.length-1]?.id ?? 0) + 1);
  const np: Product = { id, ...p };
  products.push(np);
  return Promise.resolve(np);
};

export const updateProduct = async (id: string, patch: Partial<Product>): Promise<Product | null> => {
  const idx = products.findIndex(x => x.id === id);
  if (idx === -1) return Promise.resolve(null);
  products[idx] = { ...products[idx], ...patch };
  return Promise.resolve(products[idx]);
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  const idx = products.findIndex(x => x.id === id);
  if (idx === -1) return Promise.resolve(false);
  products.splice(idx, 1);
  return Promise.resolve(true);
};

