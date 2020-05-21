<template>
  <v-app>
    <h1>
      {{ error.statusCode }} {{ error.message }}
    </h1>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
