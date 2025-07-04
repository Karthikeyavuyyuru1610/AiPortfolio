import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/AiPortfolio/', // Set base for GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
