import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/shoppingmall/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom') || id.includes('react-router')) {
              return 'react-vendor';
            }
            if (id.includes('swiper')) {
              return 'swiper-vendor';
            }
          }
        }
      }
    }
  },
  server: {
    proxy: {
      // forward upload POSTs to the local upload server
      '/upload': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      },
      // serve uploaded files from the upload server
      '/uploads': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        secure: false,
      }
      ,
      // json-server API
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
}))
