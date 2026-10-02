import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    target: 'esnext',
    cssMinify: true,
    minify: 'esbuild',
  }
})
