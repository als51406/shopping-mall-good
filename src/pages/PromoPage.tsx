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
    <div style={{padding:24}}>
      <div style={{position:'relative',border:'1px solid #eee',padding:24,borderRadius:8}}>
        <button style={{position:'absolute',right:12,top:12}} onClick={close}>✕</button>
        <h2>오늘의 프로모션</h2>
        <p>회원 가입 시 최대 1만 5천원 할인 쿠폰 지급 중입니다.</p>
      </div>
    </div>
  );
}

export default PromoPage;
