<template lang="pug">
  #app
    router-view
</template>

<script>
  export default {name: 'app'}
</script>

<style lang="stylus">
  @import '~jeet/jeet'
  @import 'vars'
  @import 'base'

  normalize-css()
  global-reset()

  #app
    font-family 'Roboto', Helvetica, Arial, sans-serif
    font-size $fontSize
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50
    
  a
    text-decoration none
    font-weight 700

  a,
  a:visited
    color #2c3e50

</style>
