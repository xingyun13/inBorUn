import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  server: {
    host: '127.0.0.1',  // 关键：绑定到 127
    port: 5173,         // 端口你也可以自定义
    allowedHosts: ['f2d3679b.natappfree.cc']
  }
})
