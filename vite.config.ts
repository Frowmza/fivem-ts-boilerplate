import { defineConfig } from 'vite'

export default defineConfig({
    build: {
      outDir: "build",
      assetsDir: ".",
      rollupOptions: {
        // overwrite default .html entry
        input: '/src/index.ts',
      },
    },
  })