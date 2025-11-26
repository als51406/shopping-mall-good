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

export const getProductsByCategory = async (category: string): Promise<Product[]> => {
  // 상위 카테고리만 입력된 경우 (예: 'salad', 'chicken' 등)
  // 해당 상위 카테고리의 모든 하위 카테고리 상품을 가져오기
  if (!category.includes(':')) {
    // 모든 상품을 가져와서 해당 상위 카테고리로 필터링
    const allProducts = await fetchProducts();
    return allProducts.filter(p => p.category && p.category.startsWith(category + ':'));
  }
  
  // 하위 카테고리가 포함된 경우 기존 방식대로
  const res = await fetch(`${API_BASE}/products?category=${encodeURIComponent(category)}`);
  return res.json();
};

