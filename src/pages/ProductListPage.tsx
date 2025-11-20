import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchProducts, getProductsByCategory, searchProducts } from '../services/api';
import type { Product } from '../types';
import ProductCardNormal from '../components/ProductCardNormal';
import './ProductListPage.css';

// 상품 목록 페이지: 카테고리별 상품 리스트를 표시하며, 필터 및 정렬 기능을 제공합니다.
const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const search = searchParams.get('search');
  const sort = searchParams.get('sort');

  useEffect(() => {
    const loadProducts = async () => {
      let data: Product[] = [];
      if (category) {
        data = await getProductsByCategory(category);
      } else if (search) {
        data = await searchProducts(search);
      } else {
        data = await fetchProducts();
      }

      // Simple client-side sorting
      if (sort === 'low_price') {
        data.sort((a, b) => a.price - b.price);
      } else if (sort === 'high_price') {
        data.sort((a, b) => b.price - a.price);
      }
      
      setProducts(data);
    };
    loadProducts();
  }, [category, search, sort]);

  const getTitle = () => {
    if (search) return `'${search}' 검색 결과`;
    if (category) {
      const [main, sub] = category.split(':');
      const map: Record<string, string> = {
        salad: '샐러드/도시락', chicken: '닭가슴살/단백질', fruit: '과일/채소', 
        bakery: '베이커리/간식', drink: '음료/유제품', fresh: '신선식품'
      };
      return `${map[main] || '전체 상품'} ${sub ? '> ' + sub : ''}`;
    }
    return '전체 상품';
  };

  return (
    <div className="product-list-page">
      <div className="page-header">
        <h2>{getTitle()}</h2>
        <span className="count">총 {products.length}개</span>
      </div>
      
      {products.length === 0 ? (
        <div className="no-products">상품이 없습니다.</div>
      ) : (
        <div className="product-grid">
          {products.map(p => (
            <ProductCardNormal key={p.id} product={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
