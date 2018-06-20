<template>
  <div class="cont">
    <div class="container-fluid">
      <div class="container-div">
        <div class="row">
          <div class="col-md-6">
            <div class="title animate fadeInUpBig">
              <img :src="adsTitle" />
              <!-- <h1 class="animate fadeInLeft fadeOutRight">
                2018 Ada全球合作商家重磅上市
              </h1>
              <p style="display: block !important;  margin-top: 2.31rem;line-height: 3.5rem;" class="animate fadeInLeft fadeOutRight">
             
              </p>
              <p>
                <span class="p-s-style animate fadeInLeft fadeOutRight">
                  Ada＆百度AI实验室全新智献<br/>
                  全球首款涵盖生活餐饮娱乐全场景
                </span>
              </p> -->
            </div>
          </div>
          <div class="col-md-6">
            <img :src="imgUrl" class="imgStyle"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackTop from '../../../components/back'
export default {
  data () {
    return {
      imgUrl: '/static/home/Group8.png',
      adsTitle: '/static/home/Group9.png'
    }
  },
  components: {
    BackTop
  }
}
</script>

<style lang="scss" scoped>
.container-div {
  width: 94%;
  margin: 11rem auto 0;
}
.title {
  img {
    display: block;
    position: absolute;
  }
}
.imgStyle {
  width: 100%;
}
@media screen and (max-width: 1366px) { 
  .container-div {
    margin: 5rem auto;
  }
  .title {
    img {
      width: 100%;
    }
  }
}
</style>
