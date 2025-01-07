import { defineConfig } from 'vite'
import { URL, fileURLToPath } from 'node:url';

import { createVitePlugins } from './build/plugins'
export default defineConfig(config=>{
  return {
    plugins: createVitePlugins(),
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./', import.meta.url)),
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
  } 
})