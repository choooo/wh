<template lang="pug">
  .layout
    main-nav
    .container
      .page
        steps
        .row
          .col-2
            side-nav
          .col-10
            gallery
</template>

<script>
  import MainNav from '../components/MainNav'
  import SideNav from '../components/SideNav'
  import Steps from '../components/Steps'
  import Gallery from '../components/Gallery'

  export default {
    name: 'app',
    components: {
      MainNav,
      SideNav,
      Steps,
      Gallery
    }
  }
</script>
