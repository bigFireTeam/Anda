<template>
  <div class="bigbg" :style="imgBg">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'BigBg',
  props: {
    imgUrl: String
  },
  computed:{
    imgBg(){
      return `background-image:url(${this.imgUrl})`
    }
  }
}
</script>

<style>
  .bigbg {
    position: relative;
    background: #f5f5f5 no-repeat center center;
    background-size: cover;
    width: 100%;
    padding-bottom: 52.3%;
    height: 0;
  }
</style>