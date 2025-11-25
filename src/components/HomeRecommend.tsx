import React from 'react';
import type { Product } from '../types';
import ProductCardNormal from './ProductCardNormal';
import './HomeSections.css';

type Props = {
  products?: Product[];
  images?: string[];
  length?: number;
  title?: string;
  containerWidth?: string | number;
  className?: string;
};

const HomeRecommend: React.FC<Props> = ({ products = [], images = [], length = 4, title = '추천 상품', containerWidth = '1000px', className = '' }) => {
  return (
    <div id="homeWrap" className={className}>
      <section className="products-section recommend-section" style={{ width: '100%', maxWidth: containerWidth }}>
        <h2 className="recommend-title">
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f"><path d="M160-280v80h640v-80H160Zm0-440h88q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q30 0 55.5 15.5T460-826l20 26 20-26q18-24 44-39t56-15q50 0 85 35t35 85q0 11-1.5 21t-6.5 19h88q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720Zm0 320h640v-240H596l84 114-64 46-136-184-136 184-64-46 82-114H160v240Zm200-320q17 0 28.5-11.5T400-760q0-17-11.5-28.5T360-800q-17 0-28.5 11.5T320-760q0 17 11.5 28.5T360-720Zm240 0q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Z"/></svg>
          <p>{title}</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#1f1f1f"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
        </h2>
        <div className="product-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
          {Array.from({ length }).map((_, i) => {
            const p = products[i] ?? ({ id: `placeholder-${i}`, name: `상품 ${i + 1}`, price: 0, image: images[i] } as Product);
            return <ProductCardNormal key={p.id} product={p} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default HomeRecommend;
