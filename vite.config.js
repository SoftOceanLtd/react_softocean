import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' if you have a custom domain (softocean.net)
  // Use '/react_softocean/' if you are viewing it at softoceanltd.github.io/react_softocean/
  base: '/', 
})