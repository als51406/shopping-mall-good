// 홈페이지: 쇼핑몰의 메인 페이지로, 배너, 추천 상품, 카테고리 링크 등을 표시합니다.
import SwiperMainBanner from '../components/SwiperMainBanner';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';
import HomeBest from '../components/HomeBest';
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
  <SwiperMainBanner />



  {/* 상품 섹션 */}
  <HomeBest products={products} images={images} length={4} />
    </div>
  );
};

export default HomePage;
