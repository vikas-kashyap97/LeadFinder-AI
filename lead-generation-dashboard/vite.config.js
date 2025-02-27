import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://leadfinder-ai.onrender.com', // Change this to your local API URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
