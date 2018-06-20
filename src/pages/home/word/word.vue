<template>
  <div class="word pagesHeight">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h1 class="animate fadeInUpBig">{{h1Title}}</h1>
          <p class="animate fadeInUpBig">{{pTitle}}</p>
          <div class="div-img">
            <img :src="imgurl" />
          </div> 
        </div>
      </div>
    </div>
    <back-top />
  </div>
</template>

<script>
import BackTop from '../../../components/back'
export default {
  data () {
    return {
      imgurl: '/static/home/Group24.png',
      h1Title: `外观轻巧考究，性能厚积薄发`,
      pTitle: `真正的小身材大大大智慧`
    }
  },
  components: {
    BackTop
  }
}
</script>

<style lang="scss" scoped>
.word {
  margin-top: 8.38rem;
  background-image: linear-gradient(0deg, #ECF3FF 3%, #FFFFFF 100%);
  h1{
    margin-top: 2.19rem;
    width: 45.38rem;
    height:8.06rem;
    text-align: center;
    font-size: 3.1rem;
    color: #203152;
    letter-spacing: 2.08px;
    position: absolute;
    z-index: 1;
    left: 50%;
    margin-left: -21.19rem;
  }
  p {
    font-family: PingFangSC-Semibold;
    width: 48.06rem;
    height:5.25rem;
    font-size: 3.75rem;
    color: #203152;
    letter-spacing: 1.88px;
    text-align: center;
    margin-top: 3rem;
    position: absolute;
    z-index: 1;
    left: 50%;
    margin-left: -22.35rem;
    top: 8rem;
  }
  .div-img {
    img {
      position: relative;
      z-index: 9999;
      width: 50%;
      margin: 22rem auto 0;
      display: block;
    }
  }
}
</style>
