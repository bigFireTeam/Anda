<template>
  <footer class="pagesHeight">
    <div class="container-fluid">
      <div class="row animate fadeInUpBig">
        <div class="col-md-1 img-div">
          <img src="/static/home/logo2.png" />
        </div>
        <div class="col-md-7">
          <h1>Contact us</h1>
          <p>
            <img src="/static/home/dianhua.png" />
            <span>联系电话：028-66767318</span>
          </p>
          <p>
            <img src="/static/home/dizhi.png" />
            <span>地址：成都市高新西区天辰路88号电子科技大学西区科技园</span>
          </p>
        </div>
      </div>
      <div class="sub-font">
        <p class="animate fadeInUpBig">
          © Copyright 2018, Circular Theme. All rights are<br/> reserved.
        </p>
      </div>
    </div>
    <back-top />
  </footer>
</template>

<script>
import BackTop from './back'
export default {
  components: {
    BackTop
  }
}
</script>

<style lang="scss" scoped>
  footer {
    background: #1C203F;
    .img-div {
      margin-left: 8.63rem;
      margin-top: 13.38rem;
    }
    h1 {
      font-size: 2.5rem;
      color: #8E8FA3;
      letter-spacing: 0.33rem;
      margin-top: 11.19rem
    }
    p {
      span {
        font-size: 1.88rem;
        color: #9192A5;
        letter-spacing: .25rem;
        line-height: 3.75rem;
        vertical-align: middle;
        margin-left: 1.25rem;
      }
    }
    .sub-font {
      margin-top: 13rem;
      margin-bottom: 8.25rem;
      p{
        opacity: .5;
        font-size: .75rem;
        color: #FFFFFF;
        letter-spacing: 0;
        text-align: center;
        line-height: 1rem;
      }
    }
  }
</style>
