// 프로필 페이지: 사용자의 개인 정보 관리를 위한 페이지입니다.
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return (
      <div style={{ padding: '60px 20px', textAlign: 'center' }}>
        <p style={{ marginBottom: '20px', fontSize: '18px' }}>로그인이 필요한 페이지입니다.</p>
        <button onClick={() => navigate('/login')} style={{ background: '#6A2EA8', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer' }}>로그인 하러가기</button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '30px' }}>마이페이지</h1>
      
      <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
        <div>
          <h2 style={{ fontSize: '24px', marginBottom: '8px' }}>{user.name}님, 안녕하세요!</h2>
          <p style={{ color: '#666' }}>{user.email}</p>
        </div>
        <button onClick={() => { logout(); navigate('/'); }} style={{ padding: '8px 16px', border: '1px solid #ddd', borderRadius: '6px', background: '#fff', cursor: 'pointer' }}>로그아웃</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div style={{ background: '#f9f9f9', padding: '24px', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>주문 내역</h3>
          <p style={{ color: '#888' }}>최근 주문 내역이 없습니다.</p>
        </div>
        <div style={{ background: '#f9f9f9', padding: '24px', borderRadius: '12px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '12px' }}>쿠폰 / 적립금</h3>
          <p style={{ color: '#6A2EA8', fontWeight: 'bold', fontSize: '20px' }}>15,000원 <span style={{ fontSize: '14px', color: '#666', fontWeight: 'normal' }}>사용 가능</span></p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
