import { Link } from 'react-router-dom';
import { useState } from 'react';
import './NewMemberBanner.css';

const NewMemberBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="new-member-wrapper">
      <Link to="/register" className="new-member-banner">
        <span className="nm-tag">신규회원 할인</span>
        <span className="nm-text">최대 15,000원 쿠폰</span>
      </Link>
      <button
        className="nm-close"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowBanner(false);
        }}
        aria-label="Close new member banner"
      >
        ✕
      </button>
    </div>
  );
};

export default NewMemberBanner;
