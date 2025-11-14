import type { Product } from '../types';

const recommendProducts: Product[] = [
  { id: 'r1', name: '프리미엄 오일', price: 22000, image: '/images/recommend/item_r_1.jpg', description: '풍미 좋은 오일' },
  { id: 'r2', name: '수제 잼', price: 9000, image: '/images/recommend/item_r_2.jpg', description: '신선한 과일 잼' },
  { id: 'r3', name: '유기농 곡물', price: 13000, image: '/images/recommend/item_r_3.jpg', description: '건강한 곡물 믹스' },
  { id: 'r4', name: '수입 치즈', price: 25000, image: '/images/recommend/item_r_4.jpg', description: '와인과 어울리는 치즈' },
  { id: 'r5', name: '수분크림', price: 18000, image: '/images/recommend/item_r_5.jpg', description: '촉촉한 수분 크림' },
];

export default recommendProducts;
