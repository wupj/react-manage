module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint', // 解析器
  extends: ['airbnb', 'prettier'], // 扩展
  plugins: [], // 插件
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-undef': 'warn',
    'no-labels': 'off',
    'camelcase': 'off',
    'quote-props': ['warn', 'consistent'],
    'import/extensions': [2, "never", { 'web.js': 'never', 'json': 'never' }],
    'import/no-extraneous-dependencies': [2, { 'devDependencies': true }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }]
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}
