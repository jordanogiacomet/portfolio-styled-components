module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'react/react-in-jsx-scope': 'off', // Desabilita a regra para JSX no escopo
    'testing-library/no-node-access': 'off', // Desabilita a regra de acesso direto a nodes
  },
};