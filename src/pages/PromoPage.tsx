import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// 프로모션 페이지: 모달/배너 클릭 시 라우트되는 프로모션 정보 페이지
const PromoPage: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();

  if (!visible) return null;

  function close() {
    setVisible(false);
    navigate('/');
  }

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <div style={{ position: 'relative', background: '#fff', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center' }}>
        <button style={{ position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer', color: '#999' }} onClick={close}>✕</button>
        <span style={{ display: 'inline-block', background: '#E8EDFE', color: '#6A2EA8', padding: '6px 12px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', marginBottom: '16px' }}>Limited Offer</span>
        <h2 style={{ fontSize: '32px', marginBottom: '16px', color: '#333' }}>신규 회원 특별 혜택 🎉</h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '30px' }}>
          지금 가입하시면 <strong style={{ color: '#6A2EA8' }}>최대 15,000원</strong> 할인 쿠폰팩을 드립니다.<br />
          첫 구매 100원 딜 혜택도 놓치지 마세요!
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={() => navigate('/register')} style={{ background: '#6A2EA8', color: '#fff', padding: '14px 32px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>회원가입 하러가기</button>
          <button onClick={close} style={{ background: '#f1f1f1', color: '#666', padding: '14px 32px', borderRadius: '8px', border: 'none', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}>다음에 하기</button>
        </div>
      </div>
    </div>
  );
}

export default PromoPage;
