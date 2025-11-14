import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
    }
  }
})
