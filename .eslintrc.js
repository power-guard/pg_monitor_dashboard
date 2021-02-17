module.exports = {
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['prettier', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],
  },
};
