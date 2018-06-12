<template>
    <div :class="$style.container">
      <div :class="$style.warpper">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item, index) of imgs" :key="'img'+index">
            <div :class="$style.imgBox">
              <img :class="$style.img"
              :src="item" alt="">
              <div :class="$style.info_card">
                <h4 :class="$style.info_title">
                  David
                  Richards
                </h4>
                <div :class="$style.info_position">
                  CEO & Founde
                </div>
                <div :class="$style.info_icons">
                  <span>FB </span><span>TW </span><span>LI</span>
                </div>
              </div>
            </div>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>

<script>

export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return ['/static/home/home-team-1.png','/static/home/home-team-1.png','/static/home/home-team-1.png','/static/home/home-team-1.png']
      }
    },
    show: Boolean
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 2.5,
        centeredSlides: true,
        spaceBetween: '3%',
        loop: true,
        // autoplay: true,
        speed: 500,
        delay: 8,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          observeParents: true,
          observer: true
        }
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style module>

  .info_card {
    position: absolute;
    width: 27%;
    height: 48.5%;
    left: -3%;
    top: 3%;
    border-radius: .625rem;
    background-color: #203152;
    padding: 1.5rem;
    color: #fff;
  }

  .info_title {
    font-size: 1.5rem;
  }

  .info_position {
    font-size: 1rem;
    margin-top: .5rem;
  }

  .info_icons {
    position: absolute;
    bottom: 1.5rem;
    left: 1.5rem;
  }

  :global(.swiper-slide) {
    opacity: .5;
    transition: opacity .3s ease-in-out;
  }

  :global(.swiper-slide-active) {
    transition-delay: .2s;
    opacity: 1;
  }

  .imgBox {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: calc(52% + 1.25rem + 1.25rem);
  }

  .img {
    box-shadow: 0 1.25rem 1.25rem 0 rgba(0,0,0,0.10);
    border-radius: .625rem;
    width: 100%;
  }

  /* :global(.swiper-pagination-fraction) {
    color: #fff;
    bottom: -1rem;
  }

  :global(.swiper-container) {
    overflow: inherit;
  }

  .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 99;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #000;
  }

  .warpper {
    width: 100%;
    height: 0;
    padding-bottom: 100%;
  }

  .img {
    width: 100%;
  } */

</style>
