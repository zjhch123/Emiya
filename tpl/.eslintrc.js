// http://eslint.org/docs/user-guide/configuring
module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  rules: {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'indent': 0,
    'semi': 0,
    "quotes": 0,
    'no-trailing-spaces': 0,
    'no-tabs': 0,
    'no-mixed-spaces-and-tabs': 0,
    'eol-last': 0,
    'key-spacing': 0,
    'space-before-function-paren': 0,
    'no-new': 0,
    'spaced-comment': 0,
    'one-var': 0,
    'no-unused-vars': 0,
    'one-var': 0,
    'new-cap': 0,
    'no-multiple-empty-lines': 0,
    'semi-spacing': 0,
    'space-before-blocks': 0,
    'comma-spacing': 0,
    'no-extra-boolean-cast': 0,
    'eqeqeq': 0,
    'no-redeclare': 0,
    'comma-dangle': 0,
  }
}
