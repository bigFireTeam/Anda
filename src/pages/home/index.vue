<template>
  <div id="h_home">
    <div class="bgImg pagesHeight">
      <asd-header />
      <header-cont />
    </div>
    <home-restaurant />
    <home-word />
    <own-good />
    <management />
  </div>
</template>

<script>
import asdHeader from '../../components/header'
import HeaderCont from './headerCont/headerCont'
import HomeRestaurant from './Restaurant/restaurant'
import HomeWord from './word/word'
import OwnGood from './ownGood/ownGood'
import Management from './management/management'
import MethodFn from '../../Tools/method.js'
export default {
  data () {
    return {
    }
  },
  components: {
    asdHeader,
    HeaderCont,
    HomeRestaurant,
    HomeWord,
    OwnGood,
    Management
  },
  mounted () {
    const _methodFn = new MethodFn();
    _methodFn.pageHeight('.pagesHeight')

  }
}
</script>

<style lang="scss" scoped>
.bgImg {
  background-image: linear-gradient(34deg, #ECF3FF 0%, #FFFFFF 100%);
  background: url('/static/home/Group7.png') no-repeat right bottom;
  background-size: cover;
}
</style>
