import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';
import ProductCardNormal from './ProductCardNormal';
import './HomeRecommend.css';

type Props = {
  title?: string;
};

// 카테고리 데이터
const categories = [
  { id: 'all', name: '전체', icon: '🍽️' },
  { id: 'salad', name: '샐러드', icon: '🥗' },
  { id: 'chicken', name: '닭가슴살', icon: '🍗' },
  { id: 'fruit', name: '과일/채소', icon: '🥬' },
  { id: 'bakery', name: '베이커리', icon: '🥐' },
];

const HomeRecommend: React.FC<Props> = ({ title = '금주의 추천 상품' }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      // 더미 데이터로 확장 (실제로는 API에서 더 많은 상품을 받아올 것)
      const extendedProducts = [...data, ...data].map((p, index) => ({
        ...p,
        id: `${p.id}-${index}`,
      }));
      setProducts(extendedProducts);
      setFilteredProducts(extendedProducts.slice(0, 8));
    });
  }, []);

  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredProducts(products.slice(0, 8));
    } else {
      const filtered = products
        .filter((p) => p.category?.startsWith(activeCategory))
        .slice(0, 8);
      setFilteredProducts(filtered.length > 0 ? filtered : products.slice(0, 8));
    }
  }, [activeCategory, products]);

  return (
    <section className="home-recommend-section">
      <div className="home-recommend-container">
        {/* 헤더 */}
        <div className="home-recommend-header">
          <h2 className="home-recommend-title">{title}</h2>
        </div>

        {/* 카테고리 버튼 */}
        <div className="home-recommend-categories">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        {/* 상품 그리드 (8x2) */}
        <div className="home-recommend-grid">
          {filteredProducts.map((product) => (
            <ProductCardNormal key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRecommend;
