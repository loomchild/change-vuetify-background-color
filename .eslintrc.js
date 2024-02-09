module.exports = {
  root: true,

  env: {
    browser: true,
    node: true
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],

  rules: {
    'vue/max-attributes-per-line': [
      'error', {
        singleline: 16
      }
    ],
    'vue/comment-directive': 0,
    'vue/multi-word-component-names': 0,
  }
}
