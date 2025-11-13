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
    <div style={{padding:24, display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h1>회원가입</h1>
      <form onSubmit={submit} style={{display:'flex',flexDirection:'column',gap:8,maxWidth:420}}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="이름" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="이메일" type="email" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="비밀번호" type="password" />
        <input value={confirm} onChange={e => setConfirm(e.target.value)} placeholder="비밀번호 확인" type="password" />
        {error && <div style={{color:'red'}}>{error}</div>}
        <div style={{display:'flex',gap:8}}>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
