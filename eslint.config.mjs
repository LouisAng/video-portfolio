import { fileURLToPath } from 'url';
import createNextEslintConfig from '@eslint/eslintrc/config-tools';

export default createNextEslintConfig({
  extends: ['next', 'plugin:testing-library/react'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  plugins: ['@typescript-eslint', 'testing-library'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    'react/no-unescaped-entities': 'off',
    'react-hooks/exhaustive-deps': 'warn'
  },
  root: true,
});
