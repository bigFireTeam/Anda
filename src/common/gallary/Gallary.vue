<template>
    <div :class="$style.container">
      <div :class="$style.warpper">
        <swiper :options="swiperOption" ref="swiperEl">
          <swiper-slide v-for="(item, index) of team" :key="'img'+index">
            <div :class="$style.imgBox">
              <img :class="$style.img"
              :src="item.img" alt="">
              <div :class="$style.info_card">
                <h4 :class="$style.info_title">
                  ${{item.name}}
                </h4>
                <div :class="$style.info_position">
                  ${{item.position}}
                </div>
                <div :class="$style.info_icons">
                  <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#i-facebook"></use>
                    </svg>
                  </span>
                  <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#i-twitter"></use>
                    </svg>
                  </span>
                  <span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#i-linkedin"></use>
                    </svg>
                  </span>                 
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      <div :class="$style.btn_container">
        <div :class="$style.button_prev" @click.native="btn_pre">
          <svg class="icon" aria-hidden="true">
              <use xlink:href="#i-arrow_left"></use>
          </svg>
        </div>
        <div :class="$style.button_next"  @click.native="btn_next">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#i-arrow-right"></use>
          </svg>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'CommonGallary',
  props: {
    team: {
      type: Array,
      default () {
        return []
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
        autoplay: true,
        loop: true,
        speed: 500,
        delay: 8,
        navigation: {
          nextEl: `.${this.$style.button_prev}`,
          prevEl: `.${this.$style.button_next}`
        },
      }
    }
  },
  computed: {
    swiper() {
      return this.$refs.swiperEl.swiper
    }
  },
  methods: {
    btn_pre() {
      this.swiper.slideNext()
    },
    btn_next() {
      this.swiper.slidePrev()
    }
  }
}
</script>

<style module>

  .container {
    position: relative;
  }

  .btn_container {
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -2rem;
  }

  .button_prev,
  .button_next {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    line-height: 1;
    padding: .6rem;
    margin-right: 1rem;
    border: 1px #e2e2e2 solid;
    border-radius: 50%;
  }

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
    font-size: 1rem;
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

</style>
