// 로그인 페이지: 사용자의 계정 인증을 위한 페이지입니다.
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email.trim() || !password) {
      setError('이메일과 비밀번호를 입력하세요');
      return;
    }
    const ok = login(email.trim(), password);
    if (!ok) {
      setError('이메일 또는 비밀번호가 올바르지 않습니다');
      return;
    }
    navigate('/profile');
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "60px 20px", minHeight: "60vh" }}>
      <h1 style={{ fontSize: "32px", marginBottom: "30px", color: "#333" }}>로그인</h1>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
        <input 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
          placeholder="이메일" 
          type="email" 
          style={{ padding: "14px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px" }}
        />
        <input 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          placeholder="비밀번호" 
          type="password" 
          style={{ padding: "14px", border: "1px solid #ddd", borderRadius: "8px", fontSize: "16px" }}
        />
        {error && <div style={{ color: '#FF6B6B', fontSize: '14px' }}>{error}</div>}
        <button type="submit" style={{ background: "#6A2EA8", color: "#fff", padding: "16px", border: "none", borderRadius: "8px", fontSize: "16px", fontWeight: "bold", cursor: "pointer", marginTop: "10px" }}>
          로그인
        </button>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '10px', fontSize: '14px', color: '#666' }}>
          <span>아직 회원이 아니신가요?</span>
          <Link to="/register" style={{ color: "#6A2EA8", fontWeight: "bold" }}>회원가입</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
