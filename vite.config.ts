import type { UserConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default {
  cacheDir: '.vite',
  plugins: [
    solidPlugin()
  ],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext',
    outDir: '.vite/dist'
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer
      ]
    }
  }
} satisfies UserConfig
