import React from 'react';
import HomeBest from '../components/HomeBest';
import recommendProducts from '../data/recommendProducts';

const HomeRecommendPage: React.FC = () => {
  const images = recommendProducts.map(p => p.image || '');
  return (
    <div>
      <HomeBest products={recommendProducts} images={images} title="오늘의 추천 상품" containerWidth="1000px" />
    </div>
  );
};

export default HomeRecommendPage;
