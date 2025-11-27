import { useEffect, useState } from 'react';
import type { Product } from '../types';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../services/api';
import categories from '../data/categories';
import './AdminProductsPage.css';

const AdminProductsPage = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: '', price: 0, image: '', description: '', category: '' });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { 
    fetchProducts().then(setItems); 
  }, []);

  const refresh = () => fetchProducts().then(setItems);

  // 카테고리별 필터링
  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category?.startsWith(selectedCategory);
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // 모든 카테고리 옵션 (메인 카테고리 + 서브 카테고리)
  const categoryOptions: { value: string; label: string }[] = [];
  categories.forEach(cat => {
    if (cat.subs) {
      cat.subs.forEach(sub => {
        const catValue = sub.to?.split('category=')[1] || `${cat.id}:${sub.name}`;
        categoryOptions.push({
          value: catValue,
          label: `${cat.name} > ${sub.name}`
        });
      });
    }
  });

  const onAdd = async () => {
    if (!form.name) return alert('상품명을 입력하세요');
    if (!form.category) return alert('카테고리를 선택하세요');
    await addProduct({ 
      name: form.name, 
      price: form.price, 
      image: form.image, 
      description: form.description,
      category: form.category
    });
    setForm({ name: '', price: 0, image: '', description: '', category: '' });
    refresh();
    alert('상품이 추가되었습니다! ✅');
  };

  const onEdit = (p: Product) => {
    setEditing(p);
    setForm({ 
      name: p.name, 
      price: p.price, 
      image: p.image || '', 
      description: p.description || '',
      category: p.category || ''
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onUpdate = async () => {
    if (!editing) return;
    if (!form.category) return alert('카테고리를 선택하세요');
    await updateProduct(editing.id, { 
      name: form.name, 
      price: form.price, 
      image: form.image, 
      description: form.description,
      category: form.category
    });
    setEditing(null);
    setForm({ name: '', price: 0, image: '', description: '', category: '' });
    refresh();
    alert('상품이 수정되었습니다! ✅');
  };

  const onDelete = async (id: string) => {
    if (!confirm('정말 삭제하시겠습니까?')) return;
    await deleteProduct(id);
    refresh();
    alert('상품이 삭제되었습니다! 🗑️');
  };

  const getCategoryLabel = (categoryValue: string) => {
    const option = categoryOptions.find(opt => opt.value === categoryValue);
    return option?.label || categoryValue;
  };

  return (
    <div className="admin-page">
      {/* 헤더 */}
      <div className="admin-header">
        <h1 className="admin-title">🛠️ 상품 관리</h1>
        <div className="admin-stats">
          <div className="admin-stat">
            전체 상품: <strong>{items.length}</strong>개
          </div>
          <div className="admin-stat">
            표시 중: <strong>{filteredItems.length}</strong>개
          </div>
        </div>
      </div>

      {/* 카테고리 필터 */}
      <div className="category-filter">
        <button
          className={`category-filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          전체
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`category-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
          >
            {cat.icon} {cat.name}
          </button>
        ))}
      </div>

      {/* 상품 추가/수정 폼 */}
      <div className="product-form">
        <h3 className="form-title">
          {editing ? '✏️ 상품 수정' : '➕ 상품 추가'}
        </h3>
        <div className="form-grid">
          <div className="form-group">
            <label className="form-label">상품명 *</label>
            <input 
              className="form-input"
              placeholder="예: 촉촉한 수비드 닭가슴살 100g" 
              value={form.name} 
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))} 
            />
          </div>
          
          <div className="form-group">
            <label className="form-label">가격 (원) *</label>
            <input 
              className="form-input"
              placeholder="예: 2500" 
              type="number" 
              value={form.price} 
              onChange={e => setForm(f => ({ ...f, price: Number(e.target.value) }))} 
            />
          </div>

          <div className="form-group full-width">
            <label className="form-label">카테고리 *</label>
            <select 
              className="form-select"
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
            >
              <option value="">카테고리를 선택하세요</option>
              {categoryOptions.map(opt => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group full-width">
            <label className="form-label">이미지 URL</label>
            <input 
              className="form-input"
              placeholder="예: /images/item1.jpeg" 
              value={form.image} 
              onChange={e => setForm(f => ({ ...f, image: e.target.value }))} 
            />
          </div>

          <div className="form-group full-width">
            <label className="form-label">이미지 파일 업로드</label>
            <input 
              type="file" 
              accept="image/*"
              className="file-upload"
              onChange={async (e) => {
                const file = e.target.files?.[0];
                if (!file) return;
                const fd = new FormData();
                fd.append('file', file);
                try {
                  const res = await fetch('/upload', { method: 'POST', body: fd });
                  const json = await res.json();
                  if (json.url) {
                    setForm(f => ({ ...f, image: json.url }));
                    alert('이미지가 업로드되었습니다! 📸');
                  }
                } catch {
                  alert('업로드 실패');
                }
              }} 
            />
            {form.image && (
              <div className="image-preview">
                <img src={form.image} alt="Preview" />
                <span>미리보기</span>
              </div>
            )}
          </div>

          <div className="form-group full-width">
            <label className="form-label">상품 설명</label>
            <textarea 
              className="form-textarea"
              placeholder="예: 부드럽고 촉촉한 수비드 공법 닭가슴살" 
              value={form.description} 
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))} 
            />
          </div>
        </div>

        <div className="form-actions">
          {editing ? (
            <>
              <button onClick={onUpdate} className="btn btn-primary">
                ✅ 수정 완료
              </button>
              <button 
                onClick={() => { 
                  setEditing(null); 
                  setForm({ name: '', price: 0, image: '', description: '', category: '' }); 
                }} 
                className="btn btn-secondary"
              >
                취소
              </button>
            </>
          ) : (
            <button onClick={onAdd} className="btn btn-primary btn-add">
              상품 추가
            </button>
          )}
        </div>
      </div>

      {/* 상품 목록 */}
      <div className="products-list">
        <div className="list-header">
          <div className="list-header-top">
            <h3 className="list-title">📦 상품 목록</h3>
            <div className="search-box">
              <input 
                className="search-input"
                placeholder="상품명으로 검색..." 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 상품 목록 내 카테고리 필터 버튼 */}
          <div className="list-category-filter">
            <button
              className={`list-cat-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              전체
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`list-cat-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* 서브 카테고리 필터 */}
          {selectedCategory !== 'all' && (
            <div className="list-sub-category">
              <button
                className={`list-sub-btn ${selectedCategory && !selectedCategory.includes(':') ? 'active' : ''}`}
                onClick={() => {
                  const mainCat = selectedCategory.split(':')[0];
                  setSelectedCategory(mainCat);
                }}
              >
                전체
              </button>
              {categories
                .find(cat => cat.id === selectedCategory.split(':')[0])
                ?.subs?.map(sub => {
                  const subValue = sub.to?.split('category=')[1] || '';
                  return (
                    <button
                      key={sub.id}
                      className={`list-sub-btn ${selectedCategory === subValue ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(subValue)}
                    >
                      {sub.name}
                    </button>
                  );
                })}
            </div>
          )}
        </div>

        {filteredItems.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">📭</div>
            <p>상품이 없습니다.</p>
          </div>
        ) : (
          <table className="products-table">
            <thead>
              <tr>
                <th>이미지</th>
                <th>상품명</th>
                <th>카테고리</th>
                <th>가격</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image || '/images/item1.jpeg'} alt={item.name} className="product-image" />
                  </td>
                  <td>
                    <div>
                      <p className="product-name">{item.name}</p>
                      <p style={{ fontSize: '13px', color: '#999', margin: 0 }}>
                        {item.description || '설명 없음'}
                      </p>
                    </div>
                  </td>
                  <td>
                    <span className="product-category">
                      {getCategoryLabel(item.category || '')}
                    </span>
                  </td>
                  <td>
                    <span className="product-price">
                      {item.price.toLocaleString()}원
                    </span>
                  </td>
                  <td>
                    <div className="product-actions">
                      <button onClick={() => onEdit(item)} className="btn-edit">
                        수정
                      </button>
                      <button onClick={() => onDelete(item.id)} className="btn-delete">
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminProductsPage;
