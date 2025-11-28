# PURFIT Mall 🛒

> 건강한 식단 관리를 위한 현대적인 이커머스 플랫폼

## 📋 목차
- [프로젝트 소개](#-프로젝트-소개)
- [주요 특징](#-주요-특징)
- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [설치 및 실행](#-설치-및-실행)
- [주요 기능](#-주요-기능)
- [디자인 가이드](#-디자인-가이드)
- [라우팅 구조](#-라우팅-구조)

---

## 🎯 프로젝트 소개

**PURFIT Mall**은 식단 관리가 필요한 다이어터, 유지어터, 바쁜 현대인을 위한 건강식품 쇼핑몰입니다. 
React와 TypeScript를 기반으로 구축된 현대적인 SPA(Single Page Application)로, 
직관적인 UI/UX와 효율적인 상품 관리 시스템을 제공합니다.

### 🎨 브랜드 아이덴티티
- **브랜드명**: PURFIT Mall
- **핵심 가치**: 건강함, 신선함, 간편함
- **타겟 사용자**: 식단 관리가 필요한 다이어터, 유지어터, 바쁜 현대인

---

## ✨ 주요 특징

### 1. 현대적인 사용자 경험
- 🎨 **모던 디자인**: 깔끔하고 직관적인 인터페이스
- 📱 **반응형 디자인**: 모바일/태블릿/데스크톱 완벽 지원
- ⚡ **빠른 로딩**: Vite 기반의 번들링으로 최적화된 성능
- 🔄 **실시간 업데이트**: Context API를 활용한 상태 관리

### 2. 풍부한 쇼핑 기능
- 🛍️ **다양한 상품 카테고리**: 체계적인 카테고리 분류
- 🔍 **상품 필터링 & 검색**: 가격, 카테고리별 필터링
- ⭐ **베스트 상품**: 인기 상품 자동 선별
- 💎 **MD 추천**: 큐레이션 상품 소개
- 🏆 **랭킹 시스템**: 실시간 인기 상품 순위

### 3. 사용자 편의 기능
- 🛒 **장바구니**: 상품 추가/삭제/수량 조절
- 💳 **주문/결제**: 간편한 체크아웃 프로세스
- 👤 **회원 관리**: 로그인/회원가입/프로필 관리
- 📢 **프로모션**: 다양한 이벤트 및 배너

### 4. 관리자 기능
- 📊 **상품 관리**: 상품 등록/수정/삭제 (CRUD)
- 🖼️ **이미지 업로드**: 상품 이미지 관리
- 📈 **재고 관리**: 실시간 재고 현황

---

## 🛠 기술 스택

### Frontend
- **React 19.2.0** - UI 라이브러리
- **TypeScript 5.9.3** - 정적 타입 검사
- **React Router DOM 6.30.1** - 클라이언트 사이드 라우팅
- **Vite (Rolldown)** - 빌드 도구 및 개발 서버
- **Swiper 12.0.3** - 터치 슬라이더 컴포넌트

### Backend & API
- **Express 5.1.0** - Node.js 웹 프레임워크
- **JSON Server 1.0.0** - REST API 목업 서버
- **Multer 2.0.2** - 파일 업로드 미들웨어
- **CORS 2.8.5** - Cross-Origin Resource Sharing

### Development Tools
- **ESLint 9.39.1** - 코드 품질 관리
- **TypeScript ESLint 8.46.3** - TypeScript 린팅

---

## 📁 프로젝트 구조

```
shopping-mall/
├── public/                    # 정적 파일
│   ├── images/               # 이미지 리소스
│   ├── uploads/              # 업로드된 파일
│   └── fonts/                # 커스텀 폰트
├── server/                   # 백엔드 서버
│   ├── db.json              # JSON Server 데이터베이스
│   └── index.js             # Express 서버
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx       # 헤더/네비게이션
│   │   ├── Footer.tsx       # 푸터
│   │   ├── ProductCard.tsx  # 상품 카드
│   │   ├── Category.tsx     # 카테고리 메뉴
│   │   └── ...              # 배너, 섹션 등
│   ├── pages/               # 페이지 컴포넌트
│   │   ├── HomePage.tsx     # 메인 페이지
│   │   ├── ProductListPage.tsx    # 상품 목록
│   │   ├── ProductDetailPage.tsx  # 상품 상세
│   │   ├── CartPage.tsx           # 장바구니
│   │   ├── CheckoutPage.tsx       # 주문/결제
│   │   ├── AdminProductsPage.tsx  # 관리자
│   │   └── ...              # 기타 페이지
│   ├── context/             # Context API
│   │   ├── CartContext.tsx  # 장바구니 상태 관리
│   │   └── AuthContext.tsx  # 인증 상태 관리
│   ├── hooks/               # 커스텀 훅
│   ├── data/                # 정적 데이터
│   ├── services/            # API 서비스
│   ├── types/               # TypeScript 타입 정의
│   ├── layouts/             # 레이아웃 컴포넌트
│   ├── routes.tsx           # 라우팅 설정
│   └── main.tsx             # 앱 엔트리 포인트
├── DESIGN_GUIDE.md          # 디자인 가이드
├── package.json
└── vite.config.ts           # Vite 설정
```

---

## 🚀 설치 및 실행

### 필수 요구사항
- Node.js 18.x 이상
- npm 또는 yarn

### 설치
```bash
# 저장소 클론
git clone https://github.com/als51406/shopping-mall-good.git

# 디렉토리 이동
cd shopping-mall-good

# 의존성 설치
npm install
```

### 실행

#### 개발 모드
```bash
# 프론트엔드 개발 서버 (http://localhost:5173)
npm run dev

# 백엔드 API 서버 (http://localhost:3000)
npm run start:server

# JSON Server (http://localhost:3001)
npm run start:api
```

#### 프로덕션 빌드
```bash
# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

---

## 🎯 주요 기능

### 1. 홈페이지
- 메인 배너 슬라이더 (Swiper)
- 블랙프라이데이/신규회원 프로모션 배너
- MD 추천 상품 섹션
- 베스트 상품 섹션
- 랭킹 시스템
- 카테고리별 추천 상품

### 2. 상품 관리
- 상품 목록 조회 (필터링, 정렬)
- 상품 상세 정보
- 상품 검색
- 카테고리별 분류

### 3. 장바구니 & 주문
- 장바구니 담기/삭제/수량 조절
- 선택 상품 주문
- 주문서 작성
- 결제 프로세스

### 4. 회원 시스템
- 회원가입/로그인
- 프로필 관리
- 주문 내역 조회

### 5. 관리자 페이지
- 상품 등록 (이미지 업로드 포함)
- 상품 수정/삭제
- 재고 관리

---

## 🎨 디자인 가이드

### 컬러 팔레트

#### Primary Colors
- **Brand Color (Deep Purple)**: `#6A2EA8`
  - 사용처: 로고, 메인 버튼, 강조 텍스트
  - 의미: 고급스러움, 신뢰, 차분함
  - Hover: `#56248a`

#### Secondary Colors
- **Fresh Green**: `#4CAF50`
  - 사용처: 신선식품 강조, 할인 배지, 성공/완료 상태
  - 의미: 자연, 건강, 신선함

- **Soft Red**: `#FF6B6B`
  - 사용처: 품절 임박, 특가, 경고/삭제 버튼
  - 의미: 주목, 에너지

#### Neutral Colors
- **Background**: `#F8F9FA` (Body Background)
- **Surface**: `#FFFFFF` (Card, Modal Background)
- **Text Primary**: `#333333` (Headings, Body Text)
- **Text Secondary**: `#666666` (Subtitles, Descriptions)
- **Text Disabled**: `#999999` (Placeholders, Disabled States)
- **Border**: `#EEEEEE` or `#E0E0E0`

### 타이포그래피
- **Font Family**: Pretendard, Noto Sans KR, system-ui
- **H1 (Main Title)**: 32px / Bold
- **H2 (Section Title)**: 24px / Bold
- **H3 (Card Title)**: 18px / Medium
- **Body**: 16px / Regular
- **Small**: 14px / Regular
- **Caption**: 12px / Regular

### UI 컴포넌트

#### Buttons
**Primary Button**
- Background: `#6A2EA8`
- Text: `#FFFFFF`
- Border Radius: `8px`
- Hover: Darken 10% (`#56248a`)

**Secondary Button**
- Background: `#FFFFFF`
- Border: `1px solid #6A2EA8`
- Text: `#6A2EA8`

#### Cards (Product)
- Background: `#FFFFFF`
- Border Radius: `8px` ~ `12px`
- Shadow: `0 4px 12px rgba(0,0,0,0.05)`
- Hover: 그림자 증가

#### Navigation
- Header Height: `80px`
- GNB Font: 16px / Medium
- Active State: `#6A2EA8`

### 레이아웃
- **Max Width**: `1000px` (Main Content)
- **Grid System**: 
  - Desktop: 4 Columns
  - Mobile: 2 Columns
- **Spacing**: 8px, 16px, 24px, 32px, 40px, 60px

---

## 🗺 라우팅 구조

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | HomePage | 메인 홈페이지 |
| `/products` | ProductListPage | 전체 상품 목록 |
| `/products/:id` | ProductDetailPage | 상품 상세 페이지 |
| `/best` | TopProductPage | 베스트 상품 |
| `/cart` | CartPage | 장바구니 |
| `/checkout` | CheckoutPage | 주문/결제 |
| `/login` | LoginPage | 로그인 |
| `/register` | RegisterPage | 회원가입 |
| `/profile` | ProfilePage | 마이페이지 |
| `/admin/products` | AdminProductsPage | 관리자 상품 관리 |
| `/about` | AboutPage | 회사 소개 |
| `/more` | MorePage | 더보기 |
| `/promo` | PromoPage | 프로모션 |
| `/contact` | ContactPage | 고객센터 |
| `/terms` | TermsPage | 이용약관 |
| `/privacy` | PrivacyPage | 개인정보처리방침 |

---

## 📦 배포

프로덕션 환경에서는 `/shoppingmall` 경로로 배포됩니다.
- 개발 환경: `http://localhost:5173`
- 프로덕션: `https://yourdomain.com/shoppingmall`

`vite.config.ts`와 `routes.tsx`에서 basename 설정이 자동으로 처리됩니다.

---

## 📝 라이선스

이 프로젝트는 개인 프로젝트입니다.

---

## 👨‍💻 개발자

**als51406**
- GitHub: [@als51406](https://github.com/als51406)
- Repository: [shopping-mall-good](https://github.com/als51406/shopping-mall-good)

---

## 🙏 감사의 글

이 프로젝트는 React, TypeScript, Vite 등의 오픈소스 기술을 활용하여 개발되었습니다.

---

**Built with ❤️ using React + TypeScript + Vite**
