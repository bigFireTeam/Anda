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
    <Charging />
    <improvement />
    <calling />
    <ai></ai>
    <team></team>
  </div>
</template>

<script>
import asdHeader from '../../components/header'
import HeaderCont from './headerCont/headerCont'
import HomeRestaurant from './Restaurant/restaurant'
import HomeWord from './word/word'
import OwnGood from './ownGood/ownGood'
import Management from './management/management'
import Charging from './charging/charging'
import Improvement from './improvement/improvement'
import Calling from './calling/calling'
import ai from './product/AI'
import team from './team/team'
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
    Management,
    Charging,
    Improvement,
    Calling,
    ai,
    team,
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
