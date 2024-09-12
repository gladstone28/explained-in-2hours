import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/explained-in-2hours/',  // Add this line
  plugins: [react()],
})
