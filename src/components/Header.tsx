import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { useState } from 'react';
import useCart from '../hooks/useCart';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [q, setQ] = useState('');
  const navigate = useNavigate();
  const { items } = useCart();
  const { user, logout } = useAuth();

  const cartCount = items.reduce((s, i) => s + i.quantity, 0);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (q.trim()) navigate(`/products?search=${encodeURIComponent(q)}`);
  };

  const [showPromo, setShowPromo] = useState(true);

  return (
    <header id="headerWrap">
      {showPromo && (
        <section className="promo-wrapper">
          <Link to="/promo" className="promo-link">
            <div className="promo">지금 가입하고 최대 1만 5천원 할인 쿠폰 받아가세요!</div>
          </Link>
          <button
            className="promo-close"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowPromo(false);
            }}
            aria-label="Close promotion"
          >
            ✕
          </button>
        </section>
      )}

      <section className='login-header-wrap'>
        <div className='login-header'>
        <div className="login-links">
          {user ? (
            <>
              <span>안녕하세요, {user.name}님</span>
              <span className="sep">|</span>
              <Link to="/profile">마이페이지</Link>
              <span className="sep">|</span>
              <button className="link-btn" onClick={() => { logout(); navigate('/'); }}>로그아웃</button>
            </>
          ) : (
            <>
              <Link to="/register">회원가입</Link>
              <span className="sep">|</span>
              <Link to="/login">로그인</Link>
              <span className="sep">|</span>
              <Link to="/contact">고객센터</Link>
            </>
          )}
        </div>
        </div>
      </section>
      <section className="main-header-wrap">
        <div className='main-header'>
            <h1 className="logo"><a href="/">쇼오핑몰</a></h1>
            <form className="search" onSubmit={submit}>
              <input value={q} onChange={e => setQ(e.target.value)} placeholder="검색어를 입력해주세요" />
              <button type="submit">🔍</button>
            </form>
            <div className="actions">
              <Link to="#" className="icon">위치</Link>
              <Link to="#" className="icon">찜</Link>
              <Link to="/cart" className="icon">장바구니{cartCount>0?`(${cartCount})`:''}</Link>
            </div>
          </div>
      </section>
      <nav className="main-nav">
        <Link to="/">카테고리</Link>
        <Link to="/products">베스트</Link>
        <Link to="/products">단독</Link>
        <Link to="/products">신상</Link>
        <Link to="/products">세일</Link>
        <Link to="/products">특가/혜택</Link>
      </nav>
    </header>
  );
};

export default Header;
