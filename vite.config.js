 
import react from '@vitejs/plugin-react'
import fs from 'fs'
import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import rollupNodePolyFill from 'rollup-plugin-node-polyfills'
import NodeGlobalsPolyfillPlugin from '@esbuild-plugins/node-globals-polyfill'


// https://vitejs.dev/config/
export default defineConfig({
  server:{
    '/youtube': 'https://youtube-ni30.onrender.com',
  },
   build: {
    chunkSizeWarningLimit: 1600,
      
      rollupOptions: {
        plugins: [rollupNodePolyFill()]
      }
   

  },
  plugins: [react()],
})



