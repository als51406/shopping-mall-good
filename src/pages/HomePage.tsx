// 홈페이지: 쇼핑몰의 메인 페이지로, 배너, 추천 상품, 카테고리 링크 등을 표시합니다.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';
import ProductCardNormal from '../components/ProductCardNormal';
import './HomePage.css'

const HomePage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  const images = ['/images/item1.jpg','/images/item2.jpg','/images/item3.jpg','/images/item4.jpg','/images/item5.jpg'];

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
        <div id='homeWrap'>
        <section className="products-section" style={{width:"1000px"}} >
            <h2><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f"><path d="M160-280v80h640v-80H160Zm0-440h88q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q30 0 55.5 15.5T460-826l20 26 20-26q18-24 44-39t56-15q50 0 85 35t35 85q0 11-1.5 21t-6.5 19h88q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720Zm0 320h640v-240H596l84 114-64 46-136-184-136 184-64-46 82-114H160v240Zm200-320q17 0 28.5-11.5T400-760q0-17-11.5-28.5T360-800q-17 0-28.5 11.5T320-760q0 17 11.5 28.5T360-720Zm240 0q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Z"/></svg>
            <p>지금 가장 많이 담는 특가</p>
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
            </h2>
            <div className="product-row" style={{display:'flex',gap:16,justifyContent:'center',alignItems:'stretch'}}>
              {Array.from({length:4}).map((_, i) => {
                const p = products[i] ?? { id: `placeholder-${i}`, name: `상품 ${i+1}`, price: 0, image: images[i] } as Product;
                return <ProductCardNormal key={p.id} product={p} />;
              })}
            </div>
        </section>
        </div>
    </div>
  );
};

export default HomePage;
