import { Link, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

// 장바구니 페이지: 선택된 상품 목록을 표시하며, 수량 조정 및 총 금액 계산 기능을 제공합니다.
const CartPage = () => {
  const { items, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 30000 ? 0 : 3000;

  if (items.length === 0) {
    return (
      <div style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>장바구니가 비어있습니다</h2>
        <p style={{ color: '#666', marginBottom: '30px' }}>건강한 식단으로 장바구니를 채워보세요!</p>
        <Link to="/products" style={{ display: 'inline-block', background: '#6A2EA8', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold' }}>쇼핑하러 가기</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '30px' }}>장바구니</h1>
      
      <div style={{ display: 'flex', gap: '40px', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div style={{ flex: 2, minWidth: '300px' }}>
          <div style={{ borderTop: '2px solid #333' }}>
            {items.map(item => (
              <div key={item.id} style={{ display: 'flex', padding: '20px 0', borderBottom: '1px solid #eee', alignItems: 'center', gap: '20px' }}>
                <img src={item.image || '/images/item1.jpeg'} alt={item.name} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px', background: '#f5f5f5' }} />
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: '16px', marginBottom: '8px' }}>{item.name}</h3>
                  <p style={{ fontWeight: 'bold' }}>{item.price.toLocaleString()}원</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px' }}>
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} style={{ padding: '4px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>-</button>
                  <span style={{ padding: '0 8px', fontSize: '14px' }}>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} style={{ padding: '4px 12px', background: 'none', border: 'none', cursor: 'pointer' }}>+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={{ background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '20px' }}>×</button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ background: '#f9f9f9', padding: '24px', borderRadius: '12px', position: 'sticky', top: '100px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>결제 금액</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', color: '#666' }}>
              <span>상품 금액</span>
              <span>{total.toLocaleString()}원</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', color: '#666' }}>
              <span>배송비</span>
              <span>{shipping === 0 ? '무료' : `${shipping.toLocaleString()}원`}</span>
            </div>
            <div style={{ borderTop: '1px solid #ddd', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontWeight: 'bold', fontSize: '20px', color: '#333' }}>
              <span>총 결제 금액</span>
              <span style={{ color: '#6A2EA8' }}>{(total + shipping).toLocaleString()}원</span>
            </div>
            <button onClick={() => navigate('/checkout')} style={{ width: '100%', background: '#6A2EA8', color: '#fff', padding: '16px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
              주문하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
