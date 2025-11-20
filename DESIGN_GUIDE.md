# Design Guide - Diet Food Mall

## 1. Brand Identity
- **Brand Name:** Diet Food Mall (가칭)
- **Core Value:** 건강함, 신선함, 간편함
- **Target Audience:** 식단 관리가 필요한 다이어터, 유지어터, 바쁜 현대인

## 2. Color Palette

### Primary Colors
- **Brand Color (Deep Purple):** `#6A2EA8`
  - 사용처: 로고, 메인 버튼, 강조 텍스트, 브랜드 아이덴티티 요소
  - 의미: 고급스러움, 신뢰, 차분함

### Secondary Colors
- **Fresh Green:** `#4CAF50`
  - 사용처: 신선식품 강조, 할인 배지, 성공/완료 상태
  - 의미: 자연, 건강, 신선함

- **Soft Red:** `#FF6B6B`
  - 사용처: 품절 임박, 특가, 경고/삭제 버튼
  - 의미: 주목, 에너지

### Neutral Colors
- **Background:** `#F8F9FA` (Body Background)
- **Surface:** `#FFFFFF` (Card, Modal Background)
- **Text Primary:** `#333333` (Headings, Body Text)
- **Text Secondary:** `#666666` (Subtitles, Descriptions)
- **Text Disabled:** `#999999` (Placeholders, Disabled States)
- **Border:** `#EEEEEE` or `#E0E0E0`

## 3. Typography
- **Font Family:** Pretendard, Noto Sans KR, system-ui
- **Scale:**
  - **H1 (Main Title):** 32px / Bold
  - **H2 (Section Title):** 24px / Bold
  - **H3 (Card Title):** 18px / Medium
  - **Body:** 16px / Regular
  - **Small:** 14px / Regular
  - **Caption:** 12px / Regular

## 4. UI Components

### Buttons
- **Primary Button:**
  - Background: `#6A2EA8`
  - Text: `#FFFFFF`
  - Radius: `8px`
  - Hover: Darken 10% (`#56248a`)

- **Secondary Button:**
  - Background: `#FFFFFF`
  - Border: `1px solid #6A2EA8`
  - Text: `#6A2EA8`

### Cards (Product)
- **Background:** `#FFFFFF`
- **Radius:** `8px` ~ `12px`
- **Shadow:** `0 4px 12px rgba(0,0,0,0.05)` (Hover 시 증가)

### Navigation
- **Header Height:** `80px`
- **GNB Font:** 16px / Medium
- **Active State:** Text Color `#6A2EA8`

## 5. Layout
- **Max Width:** `1000px` (Main Content)
- **Grid System:** 4 Columns (Desktop), 2 Columns (Mobile)
- **Spacing:** 8px, 16px, 24px, 32px, 40px, 60px

