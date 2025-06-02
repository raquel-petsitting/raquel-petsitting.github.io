// vite.config.js
import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    open: 'index.html',
    port: 3000, // Specify the development server port if needed
  },
  root: 'src',
  publicDir: '../public',
  build: {
    outDir: '../docs',
  },
  resolve: {
    alias: { '/src': path.resolve(process.cwd(), 'src') },
  },
})