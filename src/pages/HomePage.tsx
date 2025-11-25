// 홈페이지: 쇼핑몰의 메인 페이지로, 배너, 추천 상품, 카테고리 링크 등을 표시합니다.
import SwiperMainBanner from '../components/SwiperMainBanner';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import type { Product } from '../types';
import HomeBest from '../components/HomeBest';
import HomeMDPick from '../components/HomeMDPick';
import HomeRecommend from '../components/HomeRecommend';
import HomeRanking from '../components/HomeRanking';
import './HomePage.css'
import AdBanner from '../components/AdBanner';

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



  {/* 홈 상단 특가 상품 섹션 */}
  <HomeBest products={products} images={images} title="👀 가장 많이 담은 특가 상품!!" />

  {/* 랭킹 섹션 */}
  <HomeRanking />

  {/* MD Pick 섹션 */}
  <HomeMDPick products={products} title="믿고 먹는 MD Pick" />

    {/* 홈 추천 상품 섹션 */}
  <HomeRecommend title="금주의 추천 상품" />

     {/* 광고 섹션 */}
     <section className='ADWrap' style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center"}}>

      <AdBanner/>


     </section>

    </div>
  );
};

export default HomePage;
