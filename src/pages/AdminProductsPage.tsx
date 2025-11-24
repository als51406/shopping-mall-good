import { useEffect, useState } from 'react';
import type { Product } from '../types';
import { fetchProducts, addProduct, updateProduct, deleteProduct } from '../services/api';

const AdminProductsPage = () => {
  const [items, setItems] = useState<Product[]>([]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [form, setForm] = useState({ name: '', price: 0, image: '', description: '' });

  useEffect(() => { fetchProducts().then(setItems); }, []);

  const refresh = () => fetchProducts().then(setItems);

  const onAdd = async () => {
    if (!form.name) return alert('이름을 입력하세요');
    await addProduct({ name: form.name, price: form.price, image: form.image, description: form.description });
    setForm({ name: '', price: 0, image: '', description: '' });
    refresh();
  };

  const onEdit = (p: Product) => {
    setEditing(p);
    setForm({ name: p.name, price: p.price, image: p.image||'', description: p.description||'' });
  };

  const onUpdate = async () => {
    if (!editing) return;
    await updateProduct(editing.id, { name: form.name, price: form.price, image: form.image, description: form.description });
    setEditing(null);
    setForm({ name: '', price: 0, image: '', description: '' });
    refresh();
  };

  const onDelete = async (id: string) => {
    if (!confirm('삭제하시겠습니까?')) return;
    await deleteProduct(id);
    refresh();
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '28px', marginBottom: '30px', color: '#333' }}>상품 관리 (관리자)</h1>
      <div style={{ display: 'flex', gap: '40px', flexDirection: 'column' }}>
        <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #eee' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '20px', color: '#6A2EA8' }}>{editing ? '상품 수정' : '상품 추가'}</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <input 
              placeholder="상품명" 
              value={form.name} 
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))} 
              style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
            />
            <input 
              placeholder="가격" 
              type="number" 
              value={form.price} 
              onChange={e => setForm(f => ({ ...f, price: Number(e.target.value) }))} 
              style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }}
            />
            <input 
              placeholder="이미지 URL (또는 파일 업로드)" 
              value={form.image} 
              onChange={e => setForm(f => ({ ...f, image: e.target.value }))} 
              style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', gridColumn: 'span 2' }}
            />
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: '#666' }}>이미지 파일 업로드</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  const fd = new FormData();
                  fd.append('file', file);
                  try {
                    // Use relative path to leverage Vite proxy
                    const res = await fetch('/upload', { method: 'POST', body: fd });
                    const json = await res.json();
                    if (json.url) setForm(f => ({ ...f, image: json.url }));
                  } catch {
                    alert('업로드 실패');
                  }
                }} 
                style={{ padding: '8px', border: '1px solid #ddd', borderRadius: '8px', width: '100%' }}
              />
            </div>
            <input 
              placeholder="상품 설명" 
              value={form.description} 
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))} 
              style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '8px', gridColumn: 'span 2' }}
            />
          </div>
          <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
            {editing ? (
              <>
                <button onClick={onUpdate} style={{ background: '#6A2EA8', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>수정 완료</button>
                <button onClick={() => { setEditing(null); setForm({ name: '', price: 0, image: '', description: '' }) }} style={{ background: '#f1f1f1', color: '#666', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>취소</button>
              </>
            ) : (
              <button onClick={onAdd} style={{ background: '#6A2EA8', color: '#fff', padding: '12px 24px', borderRadius: '8px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>상품 추가</button>
            )}
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>상품 목록</h3>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
              <thead>
                <tr style={{ background: '#f9f9f9', borderBottom: '2px solid #eee' }}>
                  <th style={{ padding: '12px', textAlign: 'left' }}>이미지</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>상품명</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>가격</th>
                  <th style={{ padding: '12px', textAlign: 'left' }}>관리</th>
                </tr>
              </thead>
              <tbody>
                {items.map(it => (
                  <tr key={it.id} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: '12px' }}>
                      <img src={it.image || '/images/item1.jpg'} alt={it.name} style={{ width: '50px', height: '50px', objectFit: 'cover', borderRadius: '4px' }} />
                    </td>
                    <td style={{ padding: '12px', fontWeight: '500' }}>{it.name}</td>
                    <td style={{ padding: '12px' }}>{it.price.toLocaleString()}원</td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button onClick={() => onEdit(it)} style={{ padding: '6px 12px', background: '#fff', border: '1px solid #ddd', borderRadius: '4px', cursor: 'pointer' }}>수정</button>
                        <button onClick={() => onDelete(it.id)} style={{ padding: '6px 12px', background: '#fff', border: '1px solid #FF6B6B', color: '#FF6B6B', borderRadius: '4px', cursor: 'pointer' }}>삭제</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsPage;
