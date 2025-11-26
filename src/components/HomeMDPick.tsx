import { useState } from 'react';
import type { Product } from '../types';
import './HomeMDPick.css';

type Props = {
  products?: Product[];
  title?: string;
};

const HomeMDPick: React.FC<Props> = ({ products = [], title = '믿고 먹는 MD Pick' }) => {
  const mdPickProducts = products.slice(0, 4);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(
    mdPickProducts.length > 0 ? mdPickProducts[0] : null
  );

  const calculateDiscount = (index: number) => {
    const discounts = [41, 50, 52, 58];
    return discounts[index] || 50;
  };

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return Math.floor(price * (1 - discount / 100));
  };

  const formatPriceRange = (price: number) => {
    const perUnit = Math.floor(price / 10);
    const maxPerUnit = Math.floor(perUnit * 1.2);
    return `1팩당 ${perUnit.toLocaleString()}원 ~ ${maxPerUnit.toLocaleString()}원`;
  };

  if (products.length === 0) return null;

  return (
    <section className="home-mdpick-section">
      <div className="home-mdpick-container">
        {/* 헤더 */}
        <div className="home-mdpick-header">
          <h2 className="home-mdpick-title">
            <span className="home-mdpick-icon">📌</span> {title}
          </h2>
          <p className="home-mdpick-subtitle">미트리 MD가 엄선한 상품 리스트</p>
        </div>

        <div className="home-mdpick-content">
          {/* 왼쪽: 큰 이미지 */}
          <div className="home-mdpick-main-image">
            <img 
              src={(selectedProduct || mdPickProducts[0])?.image || '/images/item1.jpeg'} 
              alt={(selectedProduct || mdPickProducts[0])?.name || 'MD Pick'}
            />
            <div className="home-mdpick-banner-text">
              <h3>오랫동안 사랑받는</h3>
              <h4>식단러버 <br/> <span className="highlight">필수템</span></h4>
            </div>
          </div>

          {/* 오른쪽: 상품 리스트 */}
          <div className="home-mdpick-product-list">
            {mdPickProducts.map((product, index) => {
              const discount = calculateDiscount(index);
              const originalPrice = product.price;
              const discountedPrice = calculateDiscountedPrice(originalPrice, discount);
              
              return (
                <div 
                  key={product.id} 
                  className="home-mdpick-product-item"
                  onMouseEnter={() => setSelectedProduct(product)}
                >
                  {/* 왼쪽: 작은 이미지 */}
                  <div className="home-mdpick-item-image">
                    <img src={product.image || '/images/item1.jpeg'} alt={product.name} />
                  </div>

                  {/* 오른쪽: 정보 */}
                  <div className="home-mdpick-item-info">
                    <h5 className="home-mdpick-item-title">{product.name}</h5>
                    
                    <div className="home-mdpick-item-price">
                      <span className="home-mdpick-discount">{discount}%</span>
                      <span className="home-mdpick-price-sale">{discountedPrice.toLocaleString()}원</span>
                      <span className="home-mdpick-price-original">{originalPrice.toLocaleString()}원</span>
                    </div>

                    <p className="home-mdpick-price-range">
                      {formatPriceRange(discountedPrice)}
                    </p>

                    <div className="home-mdpick-item-rating">
                      <span className="star">⭐</span>
                      <span className="rating-score">4.9</span>
                      <span className="rating-count">({(Math.random() * 20000 + 5000).toFixed(0).toLocaleString()})</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeMDPick;
