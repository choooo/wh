<template lang="pug">
  nav.main-nav
    .container
      ul.menu(v-bind:class="expanded ? 'collapsed' : ''")
        li(v-for='i in items')
          a(v-bind:href='i.link' v-bind:alt='i.title') {{ i.title }}
      .open(v-on:click='open()')
        span(v-if='expanded') menu
        span(v-else) close
</template>

<script>
  export default {
    name: 'menu',
    data () {
      return {
        items: [
          {
            title: 'Link 1',
            link: '#'
          },
          {
            title: 'Link 2',
            link: '#'
          },
          {
            title: 'Awkward Long link',
            link: '#'
          },
          {
            title: 'Link 3',
            link: '#'
          },
          {
            title: 'Link 4',
            link: '#'
          }
        ],
        expanded: true
      }
    },
    methods: {
      open () {
        this.expanded = !this.expanded
      }
    }
  }
</script>

<style lang="stylus">
  @import '~rupture/rupture/index'
  @import '../vars'

  .main-nav
    background-color #f4f5f0
    border-bottom 1px solid #eee
    min-height 45px

  .menu
    padding 0
    marging 0
    overflow hidden
    max-height 300px
    transition max-height .3s ease-out
    &.collapsed
      +below(400px)
        max-height 0
    li
      +above(400px)
        display inline-block
      a
        padding $navPadding 10px
        display block
        font-size $navFontSize
        white-space nowrap
  .open
    +above(400px)
      display none
    position absolute
    right 15px
    top 15px
</style>
