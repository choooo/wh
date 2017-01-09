<template lang="pug">
  main
    .gallery
      .featured
        img(v-bind:src='randomFeatured.url')
      .row
        .item(v-for='(i, index) in items' v-if='randomFeatured.url !== i.url')
          img(v-bind:src='i.url')
</template>

<script>
  export default {
    name: 'main-content',
    data () {
      return {
        items: [
          {
            title: 'Image title',
            url: '/static/imgs/3yze1.jpg'
          },
          {
            title: 'Image title',
            url: '/static/imgs/eip9c.jpg'
          },
          {
            title: 'Image title',
            url: '/static/imgs/fw98c.jpg'
          },
          {
            title: 'Image title',
            url: '/static/imgs/vrqa9.jpg'
          },
          {
            title: 'Image title',
            url: '/static/imgs/dqgpd.jpg'
          },
          {
            title: 'Image title',
            url: '/static/imgs/rf5sv.jpg'
          },
          {
            title: 'Image title',
            url: '/static/imgs/yv2nc.jpg'
          },
          {
            title: 'Image title',
            url: '/static/imgs/kdycg.jpg'
          },
          {
            title: 'Image title',
            url: '/static/imgs/hwygk.jpg'
          }
        ],
        scrolled: true
      }
    },
    computed: {
      randomFeatured: function () {
        // Take one random featured image from the list of items
        return this.items[Math.floor(Math.random() * this.items.length)]
      }
    }
  }
</script>

<style lang="stylus">
  @import '~jeet/jeet'
  @import '~rupture/rupture/index'
  @import '../vars'
  
  .gallery
    margin-top ($spacing / 2)
    .item,
    .featured
      margin-bottom $spacing
      > img
        max-width 100%
        height auto
    .item
      +above(600px)
        column(1/2, $cycle: 2)
</style>
