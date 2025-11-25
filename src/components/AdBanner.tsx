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
    { title: '정기배송 런칭', subtitle: '매일 아침 문 앞으로 배송되는 신선함', bg: '#6A2EA8' },
    { title: '신규 회원 이벤트', subtitle: '첫 구매 시 인기 샐러드 100원', bg: '#4CAF50' },
    { title: '리뷰 이벤트', subtitle: '포토 리뷰 작성 시 적립금 2배', bg: '#FF6B6B' },
  ],
  height = 200,
  autoplayDelay = 3000,
  loop = true,
  className = '',
}) => {
  return (
    <section style={{width: "100%", maxWidth: "1000px", margin: "50px auto"}} className={`ad-banner ${className}`}>
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
