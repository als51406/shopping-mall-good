import { useState, useEffect } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';
import './MDPickPage.css';

const MDPickPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      if (data.length > 0) {
        setSelectedProduct(data[0]);
      }
    };
    loadProducts();
  }, []);

  const mdPickProducts = products.slice(0, 4); // MD Pick 상품 4개

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

  return (
    <div className="mdpick-page">
      <div className="mdpick-container">
        {/* 헤더 */}
        <div className="mdpick-header">
          <h1 className="mdpick-title">
            <span className="mdpick-icon">📌</span> 믿고 먹는 MD Pick
          </h1>
          <p className="mdpick-subtitle">미트리 MD가 엄선한 상품 리스트</p>
        </div>

        <div className="mdpick-content">
          {/* 왼쪽: 큰 이미지 */}
          <div className="mdpick-main-image">
            <img 
              src={(selectedProduct || mdPickProducts[0])?.image || '/images/item1.jpg'} 
              alt={(selectedProduct || mdPickProducts[0])?.name || 'MD Pick 상품'}
            />
            <div className="mdpick-banner-text">
              <h2>오랫동안 사랑받는</h2>
              <h3>식단레벨 <span className="highlight">팔수록</span></h3>
            </div>
          </div>

          {/* 오른쪽: 상품 리스트 */}
          <div className="mdpick-product-list">
            {mdPickProducts.map((product, index) => {
              const discount = calculateDiscount(index);
              const originalPrice = product.price;
              const discountedPrice = calculateDiscountedPrice(originalPrice, discount);
              
              return (
                <div 
                  key={product.id} 
                  className="mdpick-product-item"
                  onMouseEnter={() => setSelectedProduct(product)}
                >
                  {/* 왼쪽: 작은 이미지 */}
                  <div className="mdpick-item-image">
                    <img src={product.image || '/images/item1.jpg'} alt={product.name} />
                  </div>

                  {/* 오른쪽: 정보 */}
                  <div className="mdpick-item-info">
                    <h4 className="mdpick-item-title">{product.name}</h4>
                    
                    <div className="mdpick-item-price">
                      <span className="mdpick-discount">{discount}%</span>
                      <span className="mdpick-price-sale">{discountedPrice.toLocaleString()}원</span>
                      <span className="mdpick-price-original">{originalPrice.toLocaleString()}원</span>
                    </div>

                    <p className="mdpick-price-range">
                      {formatPriceRange(discountedPrice)}
                    </p>

                    <div className="mdpick-item-rating">
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
    </div>
  );
};

export default MDPickPage;
