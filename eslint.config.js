import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',
        // Vitest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        vi: 'readonly',
        global: 'readonly'
      }
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      'arrow-spacing': 'error',
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      semi: ['error', 'always'],
      quotes: ['error', 'single', { avoidEscape: true }],
      indent: ['error', 2],
      'no-trailing-spaces': 'error',
      'eol-last': 'error'
    }
  },
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'public/**',
      '*.min.js',
      '*.min.css',
      '.DS_Store',
      '.git/**'
    ]
  }
];
