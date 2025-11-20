// 회사 소개 페이지: 브랜드 및 회사 정보를 제공합니다.
const AboutPage = () => {
  return (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px', textAlign: 'center' }}>
      <h1 style={{ fontSize: '32px', color: '#6A2EA8', marginBottom: '20px' }}>건강한 식단의 시작, Diet Food Mall</h1>
      <p style={{ fontSize: '18px', color: '#666', lineHeight: '1.6', marginBottom: '40px' }}>
        우리는 바쁜 현대인들이 더 쉽고 맛있게 건강을 챙길 수 있도록 돕습니다.<br />
        신선한 샐러드부터 든든한 닭가슴살까지, 엄선된 식단 관리 식품을 만나보세요.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '40px' }}>
        <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>🥗</div>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>신선함 보장</h3>
          <p style={{ color: '#888' }}>당일 입고된 가장 신선한 재료만을 사용하여 만듭니다.</p>
        </div>
        <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>🚚</div>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>새벽 배송</h3>
          <p style={{ color: '#888' }}>오늘 주문하면 내일 아침 문 앞으로 배송해 드립니다.</p>
        </div>
        <div style={{ padding: '30px', background: '#f9f9f9', borderRadius: '12px' }}>
          <div style={{ fontSize: '40px', marginBottom: '10px' }}>💪</div>
          <h3 style={{ fontSize: '20px', marginBottom: '10px' }}>영양 밸런스</h3>
          <p style={{ color: '#888' }}>전문 영양사가 설계한 균형 잡힌 식단을 제안합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
