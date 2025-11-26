// 더 알아보기 페이지: 쇼핑몰의 추가 정보와 링크를 제공하는 랜딩 페이지입니다.
import React from 'react';

const MorePage: React.FC = () => {
  return (
    <main style={{ maxWidth: '1000px', margin: '40px auto', padding: '0 20px' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '30px', color: '#333' }}>더 알아보기</h2>
      
      <div style={{ display: 'grid', gap: '24px' }}>
        <section style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#6A2EA8' }}>이벤트</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            매주 업데이트되는 다양한 이벤트를 확인하세요.<br />
            신규 회원 혜택부터 시즌별 특가까지, 놓치면 후회할 혜택들이 가득합니다.
          </p>
        </section>

        <section style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#6A2EA8' }}>제휴·입점 안내</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            PURFIT Mall과 함께 성장할 파트너를 찾습니다.<br />
            건강한 먹거리를 만드는 생산자님들의 연락을 기다립니다.
          </p>
        </section>

        <section style={{ background: '#fff', padding: '30px', borderRadius: '12px', border: '1px solid #eee' }}>
          <h3 style={{ fontSize: '20px', marginBottom: '12px', color: '#6A2EA8' }}>고객 혜택</h3>
          <p style={{ color: '#666', lineHeight: '1.6' }}>
            <strong>VVIP:</strong> 상시 5% 할인 + 무료배송<br />
            <strong>VIP:</strong> 상시 3% 할인<br />
            <strong>FAMILY:</strong> 구매 적립금 1%
          </p>
        </section>
      </div>
    </main>
  );
};

export default MorePage;
