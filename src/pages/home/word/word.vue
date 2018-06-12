<template>
  <div class="word pagesHeight">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <h1>{{h1Title}}</h1>
          <p>{{pTitle}}</p>
          <div class="div-img">
            <img :src="imgurl" />
          </div> 
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgurl: '/static/home/word/Group24.png',
      h1Title: `外观轻巧考究，性能厚积薄发`,
      pTitle: `真正的小身材大大大智慧`
    }
  }
}
</script>

<style lang="scss" scoped>
.word {
  margin-top: 8.38rem;
  background-image: linear-gradient(0deg, #ECF3FF 3%, #FFFFFF 100%);
  h1{
    margin-top: 11.19rem;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 3.1rem;
    color: #203152;
    letter-spacing: 2.08px;
    text-align: center;
  }
  p {
    font-family: PingFangSC-Semibold;
    font-size: 3.75rem;
    color: #203152;
    letter-spacing: 1.88px;
    text-align: center;
  }
  .div-img {
    img {
      width: 80%;
      margin: 0 auto;
      display: block;
    }
  }
}
</style>
