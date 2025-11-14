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
    <div style={{padding:24}}>
      <h1>상품 관리</h1>
      <div style={{display:'flex',gap:16}}>
        <div style={{flex:1}}>
          <h3>{editing? '상품 수정':'상품 추가'}</h3>
          <input placeholder="이름" value={form.name} onChange={e=>setForm(f=>({...f,name:e.target.value}))} />
          <input placeholder="가격" type="number" value={form.price} onChange={e=>setForm(f=>({...f,price:Number(e.target.value)}))} />
          <input placeholder="이미지 경로" value={form.image} onChange={e=>setForm(f=>({...f,image:e.target.value}))} />
          <div style={{marginTop:8}}>
            <label style={{display:'block',marginBottom:6}}>이미지 업로드</label>
            <input type="file" accept="image/*" onChange={async (e)=>{
              const file = e.target.files?.[0];
              if (!file) return;
              const reader = new FileReader();
              reader.onload = ()=>{
                const result = reader.result as string | null;
                if (result) setForm(f=>({...f,image: result}));
              };
              reader.readAsDataURL(file);
            }} />
          </div>
          <input placeholder="설명" value={form.description} onChange={e=>setForm(f=>({...f,description:e.target.value}))} />
          <div style={{marginTop:8}}>
            {editing ? (
              <>
                <button onClick={onUpdate}>수정</button>
                <button onClick={()=>{setEditing(null); setForm({name:'',price:0,image:'',description:''})}}>취소</button>
              </>
            ) : (
              <button onClick={onAdd}>추가</button>
            )}
          </div>
        </div>
        <div style={{flex:2}}>
          <h3>상품 목록</h3>
          <table border={1} cellPadding={8} style={{width:'100%'}}>
            <thead><tr><th>ID</th><th>이름</th><th>가격</th><th>이미지</th><th>동작</th></tr></thead>
            <tbody>
              {items.map(it=> (
                <tr key={it.id}>
                  <td>{it.id}</td>
                  <td>{it.name}</td>
                  <td>{it.price}</td>
                  <td><img src={it.image} alt={it.name} style={{height:40}} /></td>
                  <td>
                    <button onClick={()=>onEdit(it)}>수정</button>
                    <button onClick={()=>onDelete(it.id)}>삭제</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminProductsPage;
