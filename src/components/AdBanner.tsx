import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import './HomeSections.css';

type Slide = { image?: string; title?: string; subtitle?: string; bg?: string };

type Props = {
  slides?: Slide[];
  height?: number;
  autoplayDelay?: number;
  loop?: boolean;
  className?: string;
};

const AdBanner: React.FC<Props> = ({
  slides = [
    { title: '광고 1', subtitle: '특별 혜택', bg: '#6a2ea8' },
    { title: '광고 2', subtitle: '신상품 출시', bg: '#ff6b6b' },
    { title: '광고 3', subtitle: '한정 수량', bg: '#4ecdc4' },
  ],
  height = 200,
  autoplayDelay = 3000,
  loop = true,
  className = '',
}) => {
  return (
    <section style={{width:"1050px"}} className={`ad-banner ${className}`}>
      <Swiper modules={[Autoplay]} spaceBetween={0} slidesPerView={1} autoplay={{ delay: autoplayDelay, disableOnInteraction: false }} loop={loop}>
        {slides.map((s, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="banner-slide"
              style={{
                background: s.image ? `url(${s.image}) center/cover no-repeat` : s.bg || '#222',
                height: `${height}px`,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ textAlign: 'center', background: 'rgba(0,0,0,0.25)', padding: '12px 18px', borderRadius: 8 }}>
                {s.title && <h3 style={{ margin: 0 }}>{s.title}</h3>}
                {s.subtitle && <p style={{ margin: '6px 0 0' }}>{s.subtitle}</p>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AdBanner;
