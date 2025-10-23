import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // RUTAS RELATIVAS para que CSS y JS funcionen en Render
})

