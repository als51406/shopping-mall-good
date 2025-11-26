import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './RankingPage.css';

const RankingPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeTab, setActiveTab] = useState<'recent' | 'likes'>('recent');

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  // 더미 데이터로 확장 (실제로는 API에서 받아올 데이터)
  const rankingProducts = [
    ...products,
    ...products,
    ...products,
  ].slice(0, 18).map((product, index) => ({
    ...product,
    id: `rank-${index + 1}`,
    rank: index + 1,
    discount: [62, 41, 49, 33, 26, 52, 58, 45, 38, 55, 42, 35, 48, 50, 44, 39, 47, 51][index] || 50,
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
    <div className="ranking-page">
      <div className="ranking-container">
        {/* 헤더 */}
        <div className="ranking-header">
          <h1 className="ranking-title">
            <span className="ranking-icon">🏆</span> 실시간 인기 랭킹
          </h1>
          <div className="ranking-tabs">
            <button
              className={`ranking-tab ${activeTab === 'recent' ? 'active' : ''}`}
              onClick={() => setActiveTab('recent')}
            >
              주문 많은 순
            </button>
            <button
              className={`ranking-tab ${activeTab === 'likes' ? 'active' : ''}`}
              onClick={() => setActiveTab('likes')}
            >
              조회 많은 순
            </button>
          </div>
        </div>

        {/* 랭킹 섹션들 */}
        <div className="ranking-sections">
          {/* 섹션 1: 1-6위 */}
          <div className="ranking-section">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              className="ranking-swiper"
            >
              {rankingProducts.slice(0, 6).map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="ranking-item">
                    <div className="ranking-number-badge">
                      <span className="ranking-number">{product.rank}</span>
                    </div>
                    <div className="ranking-content">
                      <div className="ranking-image">
                        <img src={product.image || '/images/item1.jpeg'} alt={product.name} />
                      </div>
                      <div className="ranking-info">
                        <h3 className="ranking-product-name">{product.name}</h3>
                        <div className="ranking-price-row">
                          <span className="ranking-discount">{product.discount}%</span>
                          <span className="ranking-price-sale">
                            {calculateDiscountedPrice(product.price, product.discount).toLocaleString()}원
                          </span>
                          <span className="ranking-price-original">
                            {product.price.toLocaleString()}원
                          </span>
                        </div>
                        <p className="ranking-price-range">
                          {formatPriceRange(calculateDiscountedPrice(product.price, product.discount))}
                        </p>
                        <div className="ranking-rating">
                          <span className="star">⭐</span>
                          <span className="rating-score">{product.rating}</span>
                          <span className="rating-count">({product.reviewCount.toLocaleString()})</span>
                        </div>
                      </div>
                    </div>
                    <button className="ranking-cart-btn">담기</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 섹션 2: 7-12위 */}
          <div className="ranking-section">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              className="ranking-swiper"
            >
              {rankingProducts.slice(6, 12).map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="ranking-item">
                    <div className="ranking-number-badge">
                      <span className="ranking-number">{product.rank}</span>
                    </div>
                    <div className="ranking-content">
                      <div className="ranking-image">
                        <img src={product.image || '/images/item1.jpeg'} alt={product.name} />
                      </div>
                      <div className="ranking-info">
                        <h3 className="ranking-product-name">{product.name}</h3>
                        <div className="ranking-price-row">
                          <span className="ranking-discount">{product.discount}%</span>
                          <span className="ranking-price-sale">
                            {calculateDiscountedPrice(product.price, product.discount).toLocaleString()}원
                          </span>
                          <span className="ranking-price-original">
                            {product.price.toLocaleString()}원
                          </span>
                        </div>
                        <p className="ranking-price-range">
                          {formatPriceRange(calculateDiscountedPrice(product.price, product.discount))}
                        </p>
                        <div className="ranking-rating">
                          <span className="star">⭐</span>
                          <span className="rating-score">{product.rating}</span>
                          <span className="rating-count">({product.reviewCount.toLocaleString()})</span>
                        </div>
                      </div>
                    </div>
                    <button className="ranking-cart-btn">담기</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* 섹션 3: 13-18위 */}
          <div className="ranking-section">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={2}
              navigation
              pagination={{ clickable: true }}
              className="ranking-swiper"
            >
              {rankingProducts.slice(12, 18).map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="ranking-item">
                    <div className="ranking-number-badge">
                      <span className="ranking-number">{product.rank}</span>
                    </div>
                    <div className="ranking-content">
                      <div className="ranking-image">
                        <img src={product.image || '/images/item1.jpeg'} alt={product.name} />
                      </div>
                      <div className="ranking-info">
                        <h3 className="ranking-product-name">{product.name}</h3>
                        <div className="ranking-price-row">
                          <span className="ranking-discount">{product.discount}%</span>
                          <span className="ranking-price-sale">
                            {calculateDiscountedPrice(product.price, product.discount).toLocaleString()}원
                          </span>
                          <span className="ranking-price-original">
                            {product.price.toLocaleString()}원
                          </span>
                        </div>
                        <p className="ranking-price-range">
                          {formatPriceRange(calculateDiscountedPrice(product.price, product.discount))}
                        </p>
                        <div className="ranking-rating">
                          <span className="star">⭐</span>
                          <span className="rating-score">{product.rating}</span>
                          <span className="rating-count">({product.reviewCount.toLocaleString()})</span>
                        </div>
                      </div>
                    </div>
                    <button className="ranking-cart-btn">담기</button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingPage;
