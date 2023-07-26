import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  eslint(),
  basicSsl()],
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:7071',
    }, 
    headers: {},
    port: 5175
  }
})
