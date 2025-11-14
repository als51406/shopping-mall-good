// 홈페이지: 쇼핑몰의 메인 페이지로, 배너, 추천 상품, 카테고리 링크 등을 표시합니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div>
      {/* Swiper 슬라이드 배너 */}
      <section className="banner-section">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="banner-slide" style={{ backgroundColor: '#6a2ea8', color: '#fff', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h2>첫 번째 배너</h2>
              <p>쇼핑몰에 오신 것을 환영합니다!</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide" style={{ backgroundColor: '#ff6b6b', color: '#fff', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h2>두 번째 배너</h2>
              <p>최고의 상품을 만나보세요.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="banner-slide" style={{ backgroundColor: '#4ecdc4', color: '#fff', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <h2>세 번째 배너</h2>
              <p>특별 할인 이벤트!</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 상품 섹션 */}
      <section className="products-section">
        <h2>추천 상품</h2>
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
