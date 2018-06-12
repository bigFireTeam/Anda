<template>
  <div id="h_home">
    <asd-header></asd-header>
    <ai></ai>
    <team></team>
  </div>
</template>

<script>
import asdHeader from '../../components/header'
import ai from './product/AI'
import team from './team/team'

export default {
  data () {
    return {

    }
  },
  components: {
    asdHeader,
    ai,
    team,
  }
}
</script>

<style lang="scss" scoped>

</style>
