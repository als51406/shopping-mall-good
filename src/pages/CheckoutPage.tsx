import { useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

// 결제 페이지: 배송 정보 입력 및 결제 방법 선택을 통해 구매를 완료합니다.
const CheckoutPage = () => {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    alert('주문이 완료되었습니다! (데모)');
    clearCart();
    navigate('/profile');
  };

  if (items.length === 0) {
    return <div style={{ padding: '60px', textAlign: 'center' }}>장바구니가 비어있습니다.</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '30px' }}>주문/결제</h1>
      
      <div style={{ display: 'flex', gap: '30px', flexDirection: 'column' }}>
        <section style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #eee' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>배송지 정보</h2>
          <form id="order-form" onSubmit={handleOrder} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <input placeholder="받는 분" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
            <input placeholder="연락처" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
            <input placeholder="주소" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
            <input placeholder="상세주소" required style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
          </form>
        </section>

        <section style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #eee' }}>
          <h2 style={{ fontSize: '20px', marginBottom: '20px' }}>주문 상품</h2>
          {items.map(item => (
            <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', fontSize: '14px' }}>
              <span>{item.name} x {item.quantity}</span>
              <span style={{ fontWeight: 'bold' }}>{(item.price * item.quantity).toLocaleString()}원</span>
            </div>
          ))}
          <div style={{ borderTop: '1px solid #eee', marginTop: '16px', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', fontSize: '18px', fontWeight: 'bold' }}>
            <span>총 결제 금액</span>
            <span style={{ color: '#6A2EA8' }}>{total.toLocaleString()}원</span>
          </div>
        </section>

        <button form="order-form" type="submit" style={{ background: '#6A2EA8', color: '#fff', padding: '18px', borderRadius: '8px', border: 'none', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
          {total.toLocaleString()}원 결제하기
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
