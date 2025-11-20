import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../services/api';
import type { Product } from '../types';
import useCart from '../hooks/useCart';

// 상품 상세 페이지: 선택된 상품의 상세 정보, 리뷰, 관련 상품 등을 표시합니다.
const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getProductById(id).then(p => {
        setProduct(p);
        setLoading(false);
      });
    }
  }, [id]);

  if (loading) return <div style={{ padding: '60px', textAlign: 'center' }}>Loading...</div>;
  if (!product) return <div style={{ padding: '60px', textAlign: 'center' }}>상품을 찾을 수 없습니다.</div>;

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ display: 'flex', gap: '40px', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <img 
            src={product.image || '/images/item1.jpg'} 
            alt={product.name} 
            style={{ width: '100%', borderRadius: '12px', aspectRatio: '1/1', objectFit: 'cover', background: '#f5f5f5' }} 
          />
        </div>
        <div style={{ flex: 1, minWidth: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span style={{ color: '#6A2EA8', fontWeight: 'bold', marginBottom: '8px' }}>BEST</span>
          <h1 style={{ fontSize: '28px', marginBottom: '16px', lineHeight: '1.3' }}>{product.name}</h1>
          <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>{product.price.toLocaleString()}원</p>
          
          <div style={{ borderTop: '1px solid #eee', borderBottom: '1px solid #eee', padding: '20px 0', marginBottom: '30px' }}>
            <p style={{ color: '#666', lineHeight: '1.6' }}>{product.description || '신선하고 맛있는 식단 관리 상품입니다. 건강한 라이프스타일을 위해 선택해보세요.'}</p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button 
              onClick={() => { addToCart(product); alert('장바구니에 담겼습니다.'); }} 
              style={{ flex: 1, background: '#fff', color: '#6A2EA8', border: '1px solid #6A2EA8', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              장바구니 담기
            </button>
            <button 
              onClick={() => { addToCart(product); navigate('/cart'); }} 
              style={{ flex: 1, background: '#6A2EA8', color: '#fff', border: 'none', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              바로 구매하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
