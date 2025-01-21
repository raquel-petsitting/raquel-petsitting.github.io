import path from 'node:path';
import process from 'node:process';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
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
});
