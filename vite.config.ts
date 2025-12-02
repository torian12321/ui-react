import { resolve } from 'path';

import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import dts from 'vite-plugin-dts';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      name: '@torian12321/ui-react',
      formats: ['es', 'cjs'],
      entry: {
        components: resolve(__dirname, 'src/components/index.ts'),
        formRenderer: resolve(
          __dirname,
          'src/components/FormRenderer/index.ts',
        ),
        contexts: resolve(__dirname, 'src/contexts/index.ts'),
        layout: resolve(__dirname, 'src/layout/index.ts'),
        views: resolve(__dirname, 'src/views/index.ts'),
      },
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
      },
    },
  },
  resolve: {
    alias: [
      { find: 'src', replacement: resolve(__dirname, 'src') },
      {
        find: 'formRenderer',
        replacement: resolve(__dirname, 'src/components/FormRenderer'),
      },
    ],
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      exclude: [
        '**/*.test.ts',
        '**/*.test.tsx',
        '**/setupTests.ts',
        '**/setupTests.tsx',
        'vite.config.ts',
        '.storybook/**',
        '**/*.stories.ts',
        '**/*.stories.tsx',
      ],
    }),
    visualizer({
      filename: 'visualizer/stats.html',
      template: 'treemap',
      open: true,
    }),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      enabled: true,
      reporter: ['text', 'html'],
      include: ['src/**'],
      exclude: ['**/index.ts', '**/*.stories.{ts,tsx}', '**/*.styles.ts'],
      thresholds: {
        /** Percentage of coverage test required */
        lines: 10,
        functions: 10,
        branches: 10,
        statements: 10,
      },
    },
  },
});
