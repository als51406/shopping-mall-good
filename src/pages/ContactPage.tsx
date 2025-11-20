// 연락처 페이지: 고객 문의 및 연락을 위한 폼을 제공합니다.
const ContactPage = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '0 20px' }}>
      <h1 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '30px' }}>고객센터</h1>
      <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee' }}>
        <p style={{ marginBottom: '20px', color: '#666', textAlign: 'center' }}>
          궁금한 점이 있으신가요? 언제든 문의해 주세요.<br />
          평일 09:00 - 18:00 (점심시간 12:00 - 13:00)
        </p>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>이름</label>
            <input type="text" placeholder="이름을 입력하세요" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>이메일</label>
            <input type="email" placeholder="답변 받을 이메일" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>문의 내용</label>
            <textarea rows={5} placeholder="문의하실 내용을 자세히 적어주세요" style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '8px', resize: 'none' }}></textarea>
          </div>
          <button type="submit" style={{ background: '#6A2EA8', color: '#fff', padding: '14px', border: 'none', borderRadius: '8px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px' }}>문의하기</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
