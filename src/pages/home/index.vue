<template>
  <swiper :options="swiperOption" ref="swiperEl">
    <swiper-slide>
      <div class="bgImg pagesHeight">
        <asd-header />
        <header-cont />
      </div>
    </swiper-slide>
    <swiper-slide>
      <home-restaurant /> 
    </swiper-slide>
    <swiper-slide>
      <home-word />
    </swiper-slide>
    <swiper-slide>
      <own-good />
    </swiper-slide>
    <swiper-slide>
      <management />
    </swiper-slide>
    <swiper-slide>
      <Charging />
    </swiper-slide>
    <swiper-slide>
      <improvement />
    </swiper-slide>
    <swiper-slide>
      <calling />
    </swiper-slide>
    <swiper-slide>
      <ai/>
    </swiper-slide>
    <swiper-slide>
      <team/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
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
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        height: window.innerHeight,
        keyboard: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
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
  computed: {
    swiper() {
      return this.$refs.swiperEl.swiper
    }
  },
  mounted () {
    const _methodFn = new MethodFn();
    _methodFn.pageHeight('.pagesHeight')
    window.swiper = this.swiper
    this.$eventHub.$on('navClick', (index) => {
      this.slideTo(index)
    })
  },
  methods: {
    slideTo(index){
      this.swiper.slideTo(index)
    }
  }
}
</script>

<style lang="scss" scoped>

  .swiper-slide {
    overflow: hidden;
  }

  .swiper-pagination {
    position: fixed;
    right: 2rem;

    .swiper-pagination-bullet {
      margin: 1rem 0;
    }
  }

  .bgImg {
    background-image: linear-gradient(34deg, #ECF3FF 0%, #FFFFFF 100%);
    background: url('/static/home/Group7.jpg') no-repeat right bottom;
    // background-size: cover;
    background-size: 100% 160%;
  }

</style>
