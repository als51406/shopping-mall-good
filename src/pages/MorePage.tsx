// 더 알아보기 페이지: 쇼핑몰의 추가 정보와 링크를 제공하는 랜딩 페이지입니다.
import React from 'react';

const MorePage: React.FC = () => {
  return (
    <main style={{padding: '40px', maxWidth: 1000, margin: '0 auto'}}>
      <h2>더 알아보기</h2>
      <p>여기에서는 이벤트, 회사 소개, 제휴 안내 등 쇼핑몰 관련 추가 정보를 제공합니다.</p>

      <section style={{marginTop: 20}}>
        <h3>이벤트</h3>
        <p>현재 진행중인 이벤트와 할인 정보를 확인하세요.</p>
      </section>

      <section style={{marginTop: 20}}>
        <h3>제휴·입점 안내</h3>
        <p>입점 문의 및 제휴 관련 정보를 안내합니다.</p>
      </section>

      <section style={{marginTop: 20}}>
        <h3>고객 혜택</h3>
        <p>회원 등급별 혜택과 쿠폰 정책을 확인하세요.</p>
      </section>
    </main>
  );
};

export default MorePage;
