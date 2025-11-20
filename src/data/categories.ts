export type SubCategory = { id: string; name: string; to?: string };
export type Category = { id: string; name: string; icon?: string; subs?: SubCategory[] };

const categories: Category[] = [
  { 
    id: 'salad', 
    name: '샐러드/도시락', 
    icon: '🥗', 
    subs: [
      { id: '1', name: '프레시 샐러드', to: '/products?category=salad:fresh' }, 
      { id: '2', name: '다이어트 도시락', to: '/products?category=salad:lunchbox' },
      { id: '3', name: '토핑/드레싱', to: '/products?category=salad:dressing' }
    ] 
  },
  { 
    id: 'chicken', 
    name: '닭가슴살/단백질', 
    icon: '🍗', 
    subs: [
      { id: '1', name: '닭가슴살', to: '/products?category=chicken:breast' }, 
      { id: '2', name: '소고기/생선', to: '/products?category=chicken:meat' },
      { id: '3', name: '프로틴 쉐이크', to: '/products?category=chicken:shake' }
    ] 
  },
  { 
    id: 'fruit', 
    name: '과일/채소', 
    icon: '🥑', 
    subs: [
      { id: '1', name: '제철과일', to: '/products?category=fruit:seasonal' }, 
      { id: '2', name: '믹스채소', to: '/products?category=fruit:veggie' },
      { id: '3', name: '고구마/단호박', to: '/products?category=fruit:root' }
    ] 
  },
  { 
    id: 'bakery', 
    name: '베이커리/간식', 
    icon: '🥯', 
    subs: [
      { id: '1', name: '통밀빵/베이글', to: '/products?category=bakery:bread' }, 
      { id: '2', name: '저칼로리 간식', to: '/products?category=bakery:snack' },
      { id: '3', name: '곤약/젤리', to: '/products?category=bakery:jelly' }
    ] 
  },
  { 
    id: 'drink', 
    name: '음료/유제품', 
    icon: '🥛', 
    subs: [
      { id: '1', name: '두유/우유', to: '/products?category=drink:milk' }, 
      { id: '2', name: '그릭요거트', to: '/products?category=drink:yogurt' },
      { id: '3', name: '콤부차/커피', to: '/products?category=drink:coffee' }
    ] 
  },
];

export default categories;
