import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { structuredClone } from '@ungap/structured-clone';

export default defineConfig({
  build: {
    sourcemap: true,
    emitAssets: false,
    lib: {
      entry: './src/index.ts',
      name: 'VectorLibrary',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true, // Optional: Automatically add a types entry to package.json
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.ts', // You can create a separate setup file
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
});
