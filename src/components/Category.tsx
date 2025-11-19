import React, { useState } from 'react';
import categoriesData from '../data/categories';
import type { Category as CategoryType } from '../data/categories';
import { Link } from 'react-router-dom';
import './Category.css';

type Props = {
  categories?: CategoryType[];
};

const Category: React.FC<Props> = ({ categories = categoriesData }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className="category-wrapper"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => { setOpen(false); setActive(null); }}
    >
      <button className="category-trigger">카테고리</button>
      <div className={`category-panel ${open ? 'open' : ''}`}>
        <div className="category-left">
          <ul>
            {categories.map((c) => (
              <li key={c.id} onMouseEnter={() => setActive(c.id)} onFocus={() => setActive(c.id)}>
                <Link to={`/products?cat=${c.id}`}>{c.icon ? `${c.icon} ` : ''}{c.name}</Link>
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
