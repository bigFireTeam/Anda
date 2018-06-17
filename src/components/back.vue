<template>
  <div class="backImg" @click="backTop()"></div>
</template>

<script>
export default {
  methods: {
    backTop () {
      this.swiper.slideTo(0)
    },


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
  }
</style>
