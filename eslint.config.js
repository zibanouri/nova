// eslint.config.js
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config(
  // ✅ 1. Ignore build folders globally
  { ignores: ['dist/', 'node_modules/'] },

  // ✅ 2. Base JS rules (for all JS/TS files)
  eslint.configs.recommended,

  // ✅ 3. Base TypeScript rules (syntax-only)
  tseslint.configs.recommended,

  // ✅ 4. React Hooks & Refresh (for all React files)
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },

  // ✅ 5. Type-aware rules — فقط برای .ts و .tsx
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true, // ✅ روش پیشنهادی رسمی
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);