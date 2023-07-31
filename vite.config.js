import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
    // ,
    // require('vite-plugin-react'),
    // require('@vitejs/plugin-react'),
    // require('vite-plugin-css'),
  ],
})
