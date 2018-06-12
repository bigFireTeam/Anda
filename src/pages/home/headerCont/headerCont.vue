<template>
  <div class="cont">
    <div class="container-fluid">
      <div class="container-div">
        <div class="row">
          <div class="col-md-6">
            <div class="title">
              <h1>
                2018 Ada全球合作商家重磅上市
              </h1>
              <p class="ads-title">
                <img :src="adsTitle" />
              </p>
              <p>
                <span class="p-s-style">
                  Ada＆百度AI实验室全新智献<br/>
                  全球首款涵盖生活餐饮娱乐全场景
                </span>
              </p>
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
export default {
  data () {
    return {
      imgUrl: '/static/home/Group8.png',
      adsTitle: '/static/home/Group9.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.container-div {
  width: 94%;
  margin: 11rem auto 0;
}
.title {
  h1 {
    font-family: PingFangSC-Semibold;
    font-size: 2.5rem;
    color: #203152;
    letter-spacing: 0;
    line-height: 2.5rem;
  }
  .ads-title {
    margin-top: 2.31rem;
    display: block !important;
    // line-height: 3.5rem;
    // background: linear-gradient(to right, #78EE85 0%, #1297FF 100%);
  }
  .p-s-style {
    margin-top: 2.81rem;
    color: #868E9C;
  }
}
.imgStyle {
  width: 100%;
}
</style>
