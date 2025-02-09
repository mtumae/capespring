import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';



// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpg: { quality: 75 },
      webp: { quality: 80 },
      avif: { quality: 70 },
      
  }),
  ],
  assetsInclude: ['**/*.jpg'],
})
