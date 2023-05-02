 
 
import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
 

const aliases = {
  '@crema': 'src/@crema',
  'core': 'src/core',
  'assets': 'src/assets',
  '@redux': 'src/@redux',
  'components': 'src/components',
  'redux': 'src/redux/store',
   
};

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, resolve(__dirname, value)]),
);

// https://vitejs.dev/config/
 

export default defineConfig({
  plugins: [react()],
  server:{
    '/youtube': 'https://youtube-ni30.onrender.com',
  },
  build: {
    chunkSizeWarningLimit: 1600,
      rollupOptions: {
          external: [
              "react", // ignore react stuff
              "react-dom",
          ],
      }
  },
  resolve: {
      alias: {
          ...resolvedAliases,
          './runtimeConfig': './runtimeConfig.browser',
          'jss-plugin-{}': 'jss-plugin-global'
      },
  },
})

