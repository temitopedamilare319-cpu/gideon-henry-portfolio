import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        nailStudio: resolve(import.meta.dirname, 'nail-studio/index.html'),
        aeron: resolve(import.meta.dirname, 'aeron/index.html'),
      },
    },
  },
});
