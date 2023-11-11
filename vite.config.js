import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  resolve: {
    alias: {
      "@public": `${path.resolve(__dirname, "./public/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@assets": `${path.resolve(__dirname, "./src/shared/assets/")}`,
      "@layouts": `${path.resolve(__dirname, "./src/shared/layouts/")}`,
      "@sharedComponents": `${path.resolve(__dirname, "./src/shared/sharedComponents/")}`,
      "@utils": `${path.resolve(__dirname, "./src/shared/utils/")}`,
    },
  },
})
