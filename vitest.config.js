import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // Environment for DOM testing
    environment: 'jsdom',

    // Glob patterns for test files
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],

    // Exclude patterns
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],

    // Coverage configuration
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'dist/',
        '**/*.d.ts',
        '**/*.config.js',
        '**/*.config.ts',
        'coverage/**',
        '**/*.test.js',
        '**/*.spec.js'
      ]
    },

    // Test timeout
    testTimeout: 10000,

    // Setup files
    setupFiles: ['./src/test/setup.js'],

    // Global test utilities
    globals: true
  }
});
