import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    // Split heavy vendors into cacheable chunks so app code changes don't
    // invalidate them, and the browser can download them in parallel.
    rollupOptions: {
      output: {
        codeSplitting: {
          groups: [
            { name: 'react-vendor', test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/ },
            { name: 'motion', test: /node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/ },
            { name: 'icons', test: /node_modules[\\/](lucide-react|@icons-pack|simple-icons)[\\/]/ },
            { name: 'lenis', test: /node_modules[\\/](lenis|@studio-freight)[\\/]/ },
          ],
        },
      },
    },
  },
})
