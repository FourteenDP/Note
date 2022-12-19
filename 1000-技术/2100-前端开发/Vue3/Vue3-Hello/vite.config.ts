import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins:
    [vueJsx({
      enableObjectSlots: true,
      transformOn: true
    }),
    vue({
      reactivityTransform: true
    }),],
  resolve: {
    alias: {
      '~': '/',
      '@': '/src',
    },
  },
})
