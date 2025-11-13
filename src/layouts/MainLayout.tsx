import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AuthProvider } from '../context/AuthContext';

const MainLayout: React.FC<{children: React.ReactNode}> = ({ children }) => {
  return (
    <AuthProvider>
      <div id='app-root'>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default MainLayout;
