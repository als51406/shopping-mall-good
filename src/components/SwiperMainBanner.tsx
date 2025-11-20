import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomeSections.css';

type Slide = { title: string; subtitle?: string; bg?: string };

type Props = {
  slides?: Slide[];
  height?: number;
  autoplayDelay?: number;
  className?: string;
};

const SwiperMainBanner: React.FC<Props> = ({
  slides = [
    { title: '건강한 식단 관리의 시작', subtitle: '신선한 샐러드와 닭가슴살을 만나보세요', bg: '#6A2EA8' },
    { title: '이번 주 특가 상품', subtitle: '다이어트 도시락 최대 30% 할인', bg: '#4CAF50' },
    { title: '신규 회원 혜택', subtitle: '가입 즉시 15,000원 쿠폰팩 증정', bg: '#FF6B6B' },
  ],
  height = 400,
  autoplayDelay = 3000,
  className = '',
}) => (
  <section className={`banner-section ${className}`}>
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: autoplayDelay }}
      loop={true}
    >
      {slides.map((s, idx) => (
        <SwiperSlide key={idx}>
          <div className="banner-slide" style={{ backgroundColor: s.bg || '#333', color: '#fff', height: `${height}px`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div>
              <h2>{s.title}</h2>
              {s.subtitle && <p>{s.subtitle}</p>}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default SwiperMainBanner;
