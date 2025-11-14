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
    { title: '첫 번째 배너', subtitle: '쇼핑몰에 오신 것을 환영합니다!', bg: '#6a2ea8' },
    { title: '두 번째 배너', subtitle: '최고의 상품을 만나보세요.', bg: '#ff6b6b' },
    { title: '세 번째 배너', subtitle: '특별 할인 이벤트!', bg: '#4ecdc4' },
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
