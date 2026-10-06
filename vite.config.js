import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes asset paths relative, so the build works under any
// GitHub Pages repo name (e.g. username.github.io/my-portfolio/).
export default defineConfig({
  plugins: [react()],
  base: './',
});
