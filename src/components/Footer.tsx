import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-main">
          <div className="footer-brand">
            <span className="brand-name">PURFIT Mall</span>
            <p className="brand-desc">건강한 식단 관리의 시작</p>
          </div>

          <div className="footer-info">
            <h4>사업자 정보</h4>
            <p><strong>대표:</strong> 김민성</p>
            <p><strong>주소:</strong> 서울특별시 강남구 테헤란로 123, 4층</p>
            <p><strong>사업자등록번호:</strong> 123-45-67890</p>
            <p><strong>통신판매업신고:</strong> 2024-서울강남-1234</p>
            <p><strong>이메일:</strong> als51406@gmail.com</p>
            <p><strong>고객센터:</strong> 1588-1234 (평일 09:00-18:00)</p>
          </div>

          <div className="footer-links">
            <h4>고객 지원</h4>
            <nav>
              <Link to="/about">회사소개</Link>
              <Link to="/contact">고객센터</Link>
              <Link to="/terms">이용약관</Link>
              <Link to="/privacy" className="privacy-link">개인정보처리방침</Link>
            </nav>
          </div>
        </div>

        <div className="footer-notice">
          <p className="portfolio-notice">
            ⓘ 본 사이트는 포트폴리오 목적으로 제작된 판매 사이트입니다. 
            실제 판매가 이루어지지 않으며, 모든 상품 이미지의 저작권은 해당 제품 판매사에 있습니다.
          </p>
        </div>

        <div className="footer-bottom">
          <p className="copyright">&copy; 2025 PURFIT Mall. All rights reserved.</p>
          <Link to="/admin/products" className="admin-link">
            관리자
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
