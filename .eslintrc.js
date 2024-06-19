module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react', 'simple-import-sort'],
  rules: {
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
