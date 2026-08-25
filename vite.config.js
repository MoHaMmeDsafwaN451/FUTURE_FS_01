import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves this project under /FUTURE_FS_01/.
  // Local development stays available at http://localhost:5173/.
  base: process.env.GITHUB_ACTIONS ? '/FUTURE_FS_01/' : '/',
})
