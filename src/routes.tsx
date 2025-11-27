import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AdminProductsPage from './pages/AdminProductsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PromoPage from './pages/PromoPage';
import MorePage from './pages/MorePage';
import TopProductPage from './pages/TopProductPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import { CartProvider } from './context/CartContext';

const AppRoutes = () => {
  // 개발 환경에서는 basename을 사용하지 않음
  // 프로덕션 빌드일 때만 /shoppingmall 사용
  const basename = import.meta.env.DEV ? '' : '/shoppingmall';
  
  return (
    <BrowserRouter basename={basename} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <CartProvider>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} />
          <Route path="/best" element={<TopProductPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/more" element={<MorePage />} />
          <Route path="/promo" element={<PromoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </MainLayout>
    </CartProvider>
  </BrowserRouter>
  );
};

export default AppRoutes;
