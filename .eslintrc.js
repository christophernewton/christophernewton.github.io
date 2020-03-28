module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'log'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-self-closing': 0,
    'require-await': 0,
  },
  globals: {
    document: true,
    require: true,
    module: true,
    __dirname: true,
    window: true,
    console: true,
    process: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
}
