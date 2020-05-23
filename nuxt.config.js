export default {
  mode: 'spa',

  head: {
    title: 'Background Color Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Background color test description.' }
    ],
    link: [
    ]
  },

  loading: { color: '#f00' },

  css: [
  ],

  plugins: [
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  modules: [
  ],

  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    theme: {
      options: {
        customProperties: true
      },
      dark: true,
      themes: {
        dark: {
          background: '#00a86b'
        },
        light: {
          background: '#d0f0c0'
        }
      }
    }
  }
}
