import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';
import ProductCardNormal from '../components/ProductCardNormal';

const TopProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data.slice(0, 8))); 
  }, []);

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', color: '#6A2EA8', marginBottom: '10px' }}>베스트 상품</h1>
        <p style={{ color: '#666' }}>가장 사랑받는 인기 상품을 만나보세요</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
        {products.map(p => (
          <ProductCardNormal key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};

export default TopProductPage;