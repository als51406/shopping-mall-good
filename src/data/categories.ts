export type SubCategory = { id: string; name: string; to?: string };
export type Category = { id: string; name: string; icon?: string; subs?: SubCategory[] };

const categories: Category[] = [
  { id: 'fresh', name: '신선식품', icon: '🥬', subs: [{ id: '1', name: '과일/채소', to: '/products?category=fresh:fruit' }, { id: '2', name: '정육/계란', to: '/products?category=fresh:meat' }] },
  { id: 'marine', name: '수산/해산물', icon: '🦐', subs: [{ id: '1', name: '어류', to: '/products?category=marine:fish' }, { id: '2', name: '조개/갑각류', to: '/products?category=marine:shell' }] },
  { id: 'dairy', name: '유제품/계란', icon: '🥛', subs: [{ id: '1', name: '치즈', to: '/products?category=dairy:cheese' }, { id: '2', name: '우유/요거트', to: '/products?category=dairy:milk' }] },
  { id: 'snack', name: '간식/디저트', icon: '🍪', subs: [{ id: '1', name: '과자', to: '/products?category=snack:cookies' }, { id: '2', name: '디저트', to: '/products?category=snack:dessert' }] },
  { id: 'beverage', name: '음료', icon: '☕', subs: [{ id: '1', name: '커피/차', to: '/products?category=beverage:coffee' }, { id: '2', name: '주스/음료', to: '/products?category=beverage:juice' }] },
  { id: 'pantry', name: '가공식품', icon: '🍜', subs: [{ id: '1', name: '라면/즉석', to: '/products?category=pantry:instant' }, { id: '2', name: '소스/장류', to: '/products?category=pantry:sauce' }] },
];

export default categories;
