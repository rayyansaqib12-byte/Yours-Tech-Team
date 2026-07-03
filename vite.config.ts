import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  build: {
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom'],
          'vendor-motion': ['motion'],
          'vendor-radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-navigation-menu',
          ],
        },
      },
    },
    // Enable minification
    minify: 'esbuild',
    // Generate sourcemaps for debugging (optional - can be disabled for production)
    sourcemap: false,
    // Target modern browsers for smaller bundles
    target: 'es2020',
    // CSS code splitting
    cssCodeSplit: true,
  },
  // Optimize dev server
  server: {
    hmr: true,
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion'],
  },
})
