import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    '/youtube': 'https://youtube-ni30.onrender.com',
  },
   build: {
    chunkSizeWarningLimit: 1600,
  },
  plugins: [react()],
})





