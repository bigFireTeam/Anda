<template>
  <div>
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
      <swiper-slide>
        <asd-footer />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div v-show="backShow" class="backImg" @click="backTop"></div>
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
import team from './team/team2'
import asdFooter from '../../components/footer'
import MethodFn from '../../Tools/method.js'
export default {
  data () {
    return {
      backShow: false,
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        mousewheel: true,
        height: window.innerHeight,
        keyboard: true,
        thisMounted: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        on: {
          slideChangeTransitionEnd: function() {
            this.backShow = this.swiper.activeIndex
          }.bind(this)
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
    asdFooter
  },
  computed: {
    swiper() {
      if(this.thisMounted) { return this.$refs.swiperEl.swiper}
      return null;
    }
  },
  mounted () {
    this.thisMounted = true;
    const _methodFn = new MethodFn();
    _methodFn.pagesHeight('.pagesHeight')
    _methodFn.pagesHeight('.charging')
    this.$eventHub.$on('navClick', (index) => {
      this.slideTo(index)
    })
  },
  methods: {
    slideTo(index){
      this.swiper.slideTo(index)
    },
    backTop(){
      this.swiper.slideTo(0)
    }
  }
}
</script>

<style lang="scss" scoped>

  .backImg {
    background: url("/static/home/backImg.png") no-repeat center center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: absolute;
    right: 4rem;
    bottom: 2rem;
    background-size: cover;
    z-index: 99;
    cursor: pointer;
  }

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
    background: url('/static/home/Group7.jpg') no-repeat right 200%;
    background-size: cover;
    // background-size: 100% 160%;
  }
</style>
