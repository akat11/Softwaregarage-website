import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import seo from './scripts/vite-plugin-seo'

export default defineConfig({
  plugins: [react(), seo()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    sourcemap: false,
  },
})
