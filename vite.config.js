import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This tells Vite your site is in a sub-folder named 'react_softocean'
  base: '/react_softocean/', 
})