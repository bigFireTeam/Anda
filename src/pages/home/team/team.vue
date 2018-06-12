<template>
  <gallary></gallary>
</template>
<script>
  import Gallary from 'common/gallary/Gallary'

  export default {
    name: 'team',
    data(){
      return {
        images: ['/static/home/home-10.png']
      }
    },
    components: {
      Gallary
    }
  }
</script>

<style module>
 
</style>