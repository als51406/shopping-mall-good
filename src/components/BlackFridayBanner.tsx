import { Link } from 'react-router-dom';
import { useState } from 'react';
import './BlackFridayBanner.css';

const BlackFridayBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) return null;

  return (
    <div className="black-friday-wrapper">
      <Link to="/products?sort=sale" className="black-friday-banner">
        <span className="bf-tag">BLACK FRIDAY</span>
        <span className="bf-text">최대 50% 할인</span>
      </Link>
      <button
        className="bf-close"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setShowBanner(false);
        }}
        aria-label="Close Black Friday banner"
      >
        ✕
      </button>
    </div>
  );
};

export default BlackFridayBanner;
