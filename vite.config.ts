import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        privacy: resolve(__dirname, 'privacy/index.html'),
        support: resolve(__dirname, 'support/index.html'),
        terms: resolve(__dirname, 'terms/index.html'),
        english: resolve(__dirname, 'en/index.html'),
        englishPrivacy: resolve(__dirname, 'en/privacy/index.html'),
        englishSupport: resolve(__dirname, 'en/support/index.html'),
        englishTerms: resolve(__dirname, 'en/terms/index.html'),
        chinese: resolve(__dirname, 'zh/index.html'),
        chinesePrivacy: resolve(__dirname, 'zh/privacy/index.html'),
        chineseSupport: resolve(__dirname, 'zh/support/index.html'),
        chineseTerms: resolve(__dirname, 'zh/terms/index.html'),
      },
    },
  },
})
