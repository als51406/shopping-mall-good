import React, { useState, useRef, useEffect } from 'react';
import categoriesData from '../data/categories';
import type { Category as CategoryType } from '../data/categories';
import { Link } from 'react-router-dom';
import './Category.css';

type Props = {
  categories?: CategoryType[];
  closeDelay?: number; // milliseconds to wait before closing the panel on mouseleave
};

const Category: React.FC<Props> = ({ categories = categoriesData, closeDelay = 50 }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    return () => { if (timer.current) window.clearTimeout(timer.current); };
  }, []);

  return (
    <div
      className="category-wrapper"
  onMouseEnter={() => { if (timer.current) window.clearTimeout(timer.current); setOpen(true); }}
  onMouseLeave={() => { if (timer.current) window.clearTimeout(timer.current); timer.current = window.setTimeout(()=>{ setOpen(false); setActive(null); }, closeDelay); }}
    >
  <button className="category-trigger" type="button">
  
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -930 960 960" width="24px" fill="#1f1f1f">
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
     <span>카테고리</span>
  </button>
      <div className={`category-panel ${open ? 'open' : ''}`}>
        <div className="category-left">
          <ul>
            {categories.map((c) => (
              <li key={c.id} className={active===c.id? 'active':''} onMouseEnter={() => { if (timer.current) window.clearTimeout(timer.current); setActive(c.id); }} onFocus={() => setActive(c.id)}>
                <Link to={`/products?category=${c.id}`}>
                  <span className="category-icon">{c.icon}</span>
                  <span className="category-name">{c.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="category-right">
          {active ? (
            <ul>
              {(categories.find(c => c.id === active)?.subs || []).map((s) => (
                <li key={s.id}><Link to={s.to || '#'}>{s.name}</Link></li>
              ))}
            </ul>
          ) : (
            <div className="category-empty">카테고리를 선택해 주세요</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
