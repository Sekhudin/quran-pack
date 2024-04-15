// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: './dist',
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'], // Menggunakan 'es' untuk ECMAScript Modules (ESM) dan 'cjs' untuk CommonJS
    },
  },
});
