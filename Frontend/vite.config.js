import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Vite dev server port
    proxy: {
      '/api': {
        target: 'http://localhost:1900', // Backend server port
        changeOrigin: true,
      },
      secure: 'false',
    },
  },
});
