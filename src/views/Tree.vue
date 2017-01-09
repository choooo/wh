<template lang="pug">
  .layout
    main-nav
    .container
      .page
        .row
          .col-2
            side-nav
          .col-3
            .tree
              ul
                li(v-for='i in menu')
                  a(v-bind:id='i.id'
                    v-on:click='[setActive(i), render(i)]')
                    | {{ i.description }}
                    .icon(v-if='i.menu && !i.leaf && active != i.id') +
                    .icon(v-if='i.menu && !i.leaf && active == i.id') -

                  ul(v-if='i.menu && !i.leaf'
                     v-bind:class='[i.cssClass, {active: active == i.id}]')
                    li(v-for='c in i.menu')
                      a(v-bind:class='c.cssClass'
                        v-bind:id='c.id'
                        v-on:click='render(c)') {{ c.description }}
          .col-7
            | {{ renderContent }}
</template>

<script>
  import MainNav from '../components/MainNav'
  import SideNav from '../components/SideNav'

  export default {
    name: 'main-content',
    components: {
      MainNav,
      SideNav
    },
    data () {
      return {
        menu: [],
        active: null,
        renderContent: null
      }
    },
    beforeCreate: function () {
      // get the menu data from the json file
      this.$http.get('/static/menu.json').then((response) => {
        this.$data.menu = response.body.menu
      }, (response) => {
        // error handling
      })
    },
    methods: {
      setActive: function (i) {
        // set active class to expand node
        this.$data.active = this.$data.active !== i.id ? i.id : ''
      },
      render: function (i) {
        // render the active content on the page
        if (i.content) this.$data.renderContent = i.content
      }
    }
  }
</script>

<style lang="stylus">
  .tree
    margin-top 10px
    > ul
      > li
        a
          position relative
          .icon
            left -15px
            top 0
            position absolute
        > ul
          margin-left 10px
          max-height 0
          transition max-height .5s ease-out
          overflow hidden
          li:first-child
            margin-top 5px
          &.active
            max-height 300px
      li
        padding 5px 0
        cursor pointer
          
</style>
