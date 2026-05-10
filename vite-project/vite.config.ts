import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      '/api-jikan': {
        target: 'https://jikan.moe',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-jikan/, '')
      }
    }
  }
})