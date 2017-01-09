<template lang="pug">
  aside.sidenav
    h3.title filters
    #sticky-container
      #sticky
        ul
          li(v-for='i in items') {{ i.title }}
          li
            router-link(to='/tree') Tree
          li
            router-link(to='/') Layout
    div
</template>

<script>
  export default {
    name: 'menu',
    data () {
      return {
        items: [
          { title: 'Item 1' },
          { title: 'Item 2' },
          { title: 'Item 3' },
          { title: 'Item 4' },
          { title: 'Item 5' },
          { title: 'Item 6' },
          { title: 'Item 7' },
          { title: 'Item 8' }
        ],
        element: null,
        container: null
      }
    },
    methods: {
      onScroll () {
        // Calculate when to stick the sidenav component
        let position = this.container.getBoundingClientRect().top + window.pageYOffset
        if (window.pageYOffset > position) {
          // to add support for non modern browsers
          this.element.classList.add('sticky')
        } else {
          // to add support for non modern browsers
          this.element.classList.remove('sticky')
        }
      }
    },
    mounted () {
      this.element = document.getElementById('sticky')
      this.container = document.getElementById('sticky-container')
      // add scroll event
      window.addEventListener('scroll', this.onScroll)
    }
  }
</script>

<style lang="stylus">
  @import '~rupture/rupture/index'
  @import '../vars'
  
  .sidenav
    .title
      text-transform uppercase
      margin 15px 0
    .sticky
      +above(600px)
        position fixed
        top 0
    ul
      margin 0
      padding 0
      li
        padding ($spacing / 3) 0
</style>
