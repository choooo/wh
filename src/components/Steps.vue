<template lang="pug">
  .steps
    .col-4
      p.
         Nulla luctus, tortor id commodo aliquet, urna mi semper diam, non ornare quam ligula non mi. Quisque mollis, tortor sit amet pharetra bibendum, nibh elit faucibus metus, vitae finibus sem elit quis arcu. Nam bibendum imperdiet leo, nec sollicitudin erat venenatis viverra. Quisque ac magna metus. Proin sodales luctus risus, a aliquam nisl.

    .col-4
      p.
        Proin commodo nec nibh id consectetur. Vestibulum consequat suscipit blandit. Quisque dolor leo, finibus vehicula luctus quis, feugiat a nulla. Phasellus sed molestie lorem. Ut vitae sem et ligula pellentesque imperdiet. Sed bibendum tempor lectus a interdum. Nam iaculis magna turpis, vitae consequat leo molestie rhoncus.

    .col-4
      p.
        Donec quis rhoncus ligula. Quisque non vestibulum sapien. Etiam blandit, dolor et porta tristique, augue est ultricies felis, et cursus mauris massa a velit. Fusce iaculis placerat placerat. Sed ut fringilla turpis. Phasellus sit amet odio sagittis, ullamcorper nulla porta, fermentum dui. Aenean vehicula mauris ut consectetur sagittis.
</template>

<script>
  export default {
    name: 'steps'
  }
</script>

<style lang="stylus">
  @import '~rupture/rupture/index'
  @import '~jeet/jeet'
  @import '../vars'

  .steps
    clearfix()
    margin-top $spacing
    margin-bottom ($spacing * 2)
    display block
    font-size 16px
    line-height 20px
    .col-4
      +below(600px)
        margin-bottom $spacing
</style>
