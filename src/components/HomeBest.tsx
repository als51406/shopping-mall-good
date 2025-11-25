import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Product } from '../types';
import ProductCard from './ProductCard';
import './HomeSections.css';

type Props = {
  products?: Product[];
  images?: string[];
  title?: string;
  containerWidth?: string | number;
  className?: string;
};

const HomeBest: React.FC<Props> = ({ products = [], images = [], title = '가장 많이담은 특가 상품', containerWidth = '1320px', className = '' }) => {
  // Prepare display products (fill with placeholders if empty)
  const displayProducts = products.length > 0 ? products : Array.from({ length: 6 }).map((_, i) => ({
    id: `placeholder-${i}`,
    name: `상품명 ${i + 1}`,
    description: '맛있는 음식을 만나보세요',
    price: Math.floor(Math.random() * 10000) + 10000,
    image: images[i % images.length] || '/images/item1.jpg'
  } as Product));

  return (
    <div id="homeWrap" className={className}>
      <section className="products-section best-menu-section" style={{ width: '100%', maxWidth: containerWidth, }}>
        <h2 className="best-menu-title">{title}</h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1} // Mobile default
          slidesPerGroup={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30,
            },
            1320: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 30,
            },
          }}
        >
          {displayProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <ProductCard product={p} discount={20} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default HomeBest;
