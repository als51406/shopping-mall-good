// 회원가입 페이지: 신규 사용자의 계정 등록을 위한 페이지입니다.
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RegisterPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState<string | null>(null);
  const auth = useAuth();
  const navigate = useNavigate();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !email.trim() || !password) {
      setError('이름, 이메일, 비밀번호를 모두 입력하세요');
      return;
    }
    if (password !== confirm) {
      setError('비밀번호가 일치하지 않습니다');
      return;
    }
    const res = auth.register({ email: email.trim(), password, name: name.trim() });
    if (!res.success) {
      setError(res.message || '회원가입에 실패했습니다');
      return;
    }
    navigate('/profile');
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "60px 20px", minHeight: "60vh" }}>
      {/* 신규회원 프로모션 배너 */}
      <div style={{ 
        width: "100%", 
        maxWidth: "600px", 
        background: "linear-gradient(135deg, #6A2EA8 0%, #8B4BC9 50%, #A66FE0 100%)",
        padding: "40px 30px",
        borderRadius: "16px",
        marginBottom: "40px",
        boxShadow: "0 8px 24px rgba(106, 46, 168, 0.3)",
        textAlign: "center"
      }}>
        
        <h2 style={{ 
          fontSize: "36px", 
          fontWeight: "bold", 
          color: "#fff",
          marginBottom: "12px",
          textShadow: "2px 2px 4px rgba(0,0,0,0.2)"
        }}>
          첫 구매 30% 할인
        </h2>
        <p style={{ 
          fontSize: "18px", 
          color: "#FFE66D",
          marginBottom: "0"
        }}>
          지금 가입하고 특별 쿠폰을 받아보세요!
        </p>
      </div>
      
      <h1 style={{ fontSize: "32px", marginBottom: "30px", color: "#333" }}>회원가입</h1>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="이름" style={{ padding: "14px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px" }} />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일" type="email" style={{ padding: "14px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px" }} />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호" type="password" style={{ padding: "14px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px" }} />
        <input value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="비밀번호 확인" type="password" style={{ padding: "14px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px" }} />
        {error && <div style={{ color: '#FF6B6B', fontSize: '14px' }}>{error}</div>}
        <button type="submit" style={{ background: "#6A2EA8", color: "#fff", padding: "16px", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}>
          가입하기
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
