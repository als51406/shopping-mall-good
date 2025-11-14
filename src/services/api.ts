import type { Product } from '../types';

const API_BASE = '/api';

export const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API_BASE}/products`);
  return res.json();
};

export const getProductById = async (id: string): Promise<Product | null> => {
  const res = await fetch(`${API_BASE}/products/${id}`);
  if (res.status === 404) return null;
  return res.json();
};

export const searchProducts = async (q: string): Promise<Product[]> => {
  if (!q.trim()) return fetchProducts();
  const res = await fetch(`${API_BASE}/products?q=${encodeURIComponent(q)}`);
  return res.json();
};

export const addProduct = async (p: Omit<Product, 'id'>): Promise<Product> => {
  const res = await fetch(`${API_BASE}/products`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(p) });
  return res.json();
};

export const updateProduct = async (id: string, patch: Partial<Product>): Promise<Product | null> => {
  const res = await fetch(`${API_BASE}/products/${id}`, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(patch) });
  if (res.status === 404) return null;
  return res.json();
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  const res = await fetch(`${API_BASE}/products/${id}`, { method: 'DELETE' });
  return res.ok;
};

