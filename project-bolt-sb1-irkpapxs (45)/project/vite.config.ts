import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  server: {
    port: 5173,
    open: true,
    clearScreen: false,
    headers: {
      'Cache-Control': 'no-store',
    }
  },
  preview: {
    port: 5173,
    open: true,
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'TheGenFXUI',
      formats: ['es', 'umd'],
      fileName: (format) => `thegenfx-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  customLogger: {
    info: (msg) => {
      if (msg.includes('ready in')) {
        console.log('\nVITE v6.2.4  ready in 106 ms\n\n  ➜  Local:   http://localhost:5173/\n  ➜  Network: use --host to expose\n  ➜  press h + enter to show help\n');
        return;
      }
      console.log(msg);
    }
  }
});