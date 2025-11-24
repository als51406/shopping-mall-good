import type { Product } from '../types';

const recommendProducts: Product[] = [
  { id: 'r1', name: '닭가슴살 소시지 꼬치 (청양고추맛)', price: 2200, image: '/images/recommend/item_r_1.jpg', description: '간편하게 즐기는 단백질 간식', category: 'chicken:breast' },
  { id: 'r2', name: '촉촉한 훈제란 2구', price: 1500, image: '/images/recommend/item_r_2.jpg', description: '소금 없이도 맛있는 훈제란', category: 'fresh:egg' },
  { id: 'r3', name: '바질 페스토 샐러드 파스타', price: 7500, image: '/images/recommend/item_r_3.jpg', description: '향긋한 바질과 통밀 파스타의 조화', category: 'salad:lunchbox' },
  { id: 'r4', name: '0kcal 스위트 칠리 소스', price: 4500, image: '/images/recommend/item_r_4.jpg', description: '칼로리 걱정 없는 만능 소스', category: 'salad:dressing' },
  { id: 'r5', name: '고단백 프로틴 초코볼', price: 3500, image: '/images/recommend/item_r_1.jpg', description: '당류 0g, 단백질 12g 함유', category: 'bakery:snack' },
];

export default recommendProducts;
