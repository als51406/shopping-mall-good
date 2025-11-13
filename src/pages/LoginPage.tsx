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
    <div style={{padding:24, display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h1>로그인</h1>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:8,maxWidth:360}}>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일" type="email" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호" type="password" />
        {error && <div style={{color:'red'}}>{error}</div>}
        <div style={{display:'flex',gap:8}}>
          <button type="submit">로그인</button>
          <Link to="/register" style={{alignSelf:'center'}}>회원가입</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
