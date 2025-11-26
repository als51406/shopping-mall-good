import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';
import './HomeRanking.css';

interface HomeRankingProps {
  title?: string;
}

const HomeRanking = ({ title = '🏆 실시간 인기 랭킹' }: HomeRankingProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  // 더미 데이터로 확장 (실제로는 API에서 받아올 데이터)
  const rankingProducts = [
    ...products,
    ...products,
  ].slice(0, 6).map((product, index) => ({
    ...product,
    id: `rank-${index + 1}`,
    rank: index + 1,
    discount: [62, 41, 49, 33, 26, 52][index] || 50,
    rating: 4.9,
    reviewCount: Math.floor(Math.random() * 60000 + 5000),
  }));

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return Math.floor(price * (1 - discount / 100));
  };

  const formatPriceRange = (price: number) => {
    const perUnit = Math.floor(price / 10);
    const maxPerUnit = Math.floor(perUnit * 1.2);
    return `1팩당 ${perUnit.toLocaleString()}원 ~ ${maxPerUnit.toLocaleString()}원`;
  };

  return (
    <section className="home-ranking-section">
      <div className="home-ranking-container">
        {/* 헤더 */}
        <div className="home-ranking-header">
          <h2 className="home-ranking-title">{title}</h2>
          <Link to="/ranking" className="home-ranking-more">
            전체보기 →
          </Link>
        </div>

        {/* 랭킹 그리드 */}
        <div className="home-ranking-grid">
          {rankingProducts.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`} className="home-ranking-item">
              <div className="home-ranking-number-badge">
                <span className="home-ranking-number">{product.rank}</span>
              </div>
              <div className="home-ranking-content-wrapper">
                <div className="home-ranking-image">
                  <img src={product.image || '/images/item1.jpeg'} alt={product.name} />
                </div>
                <div className="home-ranking-info">
                  <h3 className="home-ranking-product-name">{product.name}</h3>
                  <div className="home-ranking-price-row">
                    <span className="home-ranking-discount">{product.discount}%</span>
                    <span className="home-ranking-price-sale">
                      {calculateDiscountedPrice(product.price, product.discount).toLocaleString()}원
                    </span>
                    <span className="home-ranking-price-original">
                      {product.price.toLocaleString()}원
                    </span>
                  </div>
                  <p className="home-ranking-price-range">
                    {formatPriceRange(calculateDiscountedPrice(product.price, product.discount))}
                  </p>
                  <div className="home-ranking-rating">
                    <span className="star">⭐</span>
                    <span className="rating-score">{product.rating}</span>
                    <span className="rating-count">({product.reviewCount.toLocaleString()})</span>
                  </div>
                </div>
              </div>
              <button className="home-ranking-cart-btn">담기</button>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeRanking;
