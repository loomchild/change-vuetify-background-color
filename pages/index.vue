<template>
  <v-container full-height>
    <v-row>
      <v-col cols="12" class="headline text-center">
        <span>
          Background color
        </span>
      </v-col>
    </v-row>
    <v-row class="mt-4 flex-column flex-sm-row">
      <v-spacer />
      <v-col cols="auto">
        <v-btn @click="darken">
          <v-icon class="mr-1 title">
            mdi-brightness-3
          </v-icon>
          Darken
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="lighten">
          <v-icon class="mr-1 title">
            mdi-brightness-5
          </v-icon>
          Lighten
        </v-btn>
      </v-col>
      <v-col cols="auto">
        <v-btn @click="swap">
          <v-icon class="mr-1 title">
            mdi-invert-colors
          </v-icon>
          Swap
        </v-btn>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
// Credit: https://css-tricks.com/snippets/javascript/lighten-darken-color/
function lightenDarkenColor (col, amt) {
  let usePound = false

  if (col[0] === '#') {
    col = col.slice(1)
    usePound = true
  }

  const num = parseInt(col, 16)

  let r = (num >> 16) + amt

  if (r > 255) {
    r = 255
  } else if (r < 0) {
    r = 0
  }

  let b = ((num >> 8) & 0x00FF) + amt

  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }

  let g = (num & 0x0000FF) + amt

  if (g > 255) {
    g = 255
  } else if (g < 0) {
    g = 0
  }

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export default {
  computed: {
    theme () {
      return this.$vuetify.theme.isDark ? 'dark' : 'light'
    }
  },

  methods: {
    update (color, amount) {
      const theme = this.$vuetify.theme.themes[this.theme]
      const currentColor = theme[color]
      if (currentColor == null) {
        return
      }
      if (typeof currentColor === 'object') {
        Object.entries(currentColor).forEach(([key, value]) => {
          currentColor[key] = lightenDarkenColor(value, amount)
        })
      } else {
        theme[color] = lightenDarkenColor(currentColor, amount)
      }
    },

    touchAll () {
      const value = this.$vuetify.theme.themes[this.theme]
      this.$vuetify.theme.themes[this.theme] = {}
      this.$vuetify.theme.themes[this.theme] = value
    },

    lighten () {
      this.update('background', 10)
    },

    darken () {
      this.update('background', -10)
    },

    swap () {
      this.$vuetify.theme.isDark = !this.$vuetify.theme.isDark

      // necessary to reset colors after changing the theme, perhaps a Vuetify.js bug
      this.touchAll(1)
    }
  }
}
</script>
