<template>
  <div class="img-bg pagesHeight">
    <div class="row">
      <div class="col-md-2 img-padding">
        <div class="good1">
          <img src="/static/home/good1.jpg" class="g-p-style"/>
        </div>
        <div class="good2">
          <img src="/static/home/good2.jpg" class="g-p-style"/>
        </div>
      </div>
      <div class="col-md-4 div-img-bg g-p-style">
        <div class="love-div fadeInUpBig animate">
          <h1 class="">懂你所爱 为你着想</h1>
          <p class="">只需要一键授权，即可链接ADA大数据享受只能到店助<br/>
        理服务<br/>
        通过MAGIC SENSOR智能系统分析用户餐饮习惯，<br/>
        并立即做出千人千面的点餐推荐。安全保护隐私，数<br/>
        据既享即清。
          </p>
        </div>
      </div>
      <div class="col-md-2 img-padding">
         <div class="good1">
          <img src="/static/home/good4.jpg" class="g-p-style"/>
        </div>
        <div class="good2">
          <img src="/static/home/good5.jpg" class="g-p-style"/>
        </div>
      </div>
      <div class="col-md-4 img-padding good3">
        <img src="/static/home/good6.jpg" class="g-p-style" />
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
    }
  },
  components: {
    BackTop
  }
}
</script>

<style lang="scss" scoped>
.img-bg {
  padding-top: 6.31rem;
  .row {
    margin: 0;
    .good3{
      width: 40rem;
      height: 40rem;
      overflow: hidden;
    }
    .img-padding {
      padding: 0;
      .good2,.good1 {
        width: 20rem;
        height: 20rem;
        overflow: hidden;
      }
      img {
        transition: all 1s;
        display: block;
        &:hover{
          transform: scale(1.4); //放大 倍数随意
        }
      }
    }
    img {
      display: block;
      width: 100%;
    }
    .div-img-bg {
      background-image: linear-gradient(-48deg, #4592FF 0%, #43DFC0 99%);
      background: url('/static/home/good3.jpg') no-repeat center center;
      background-size: cover;
      .line-style  {
        line-height: 20px;
        font-size: 14px;
      }
      .love-div {
        margin-left: 2.44rem;
        margin-top: 12rem;
      }
      h1 {
        font-family: PingFangSC-Semibold;
        font-size: 2.5rem;
        color: #FFFFFF;
        letter-spacing: 2.5px;
        line-height: 3.75rem;
      }
      p {
        font-size: .875rem;
        color: #fff;
      }
    }
  }
}
@media screen and (max-width: 1366px) { 
  .img-bg {
    .row {
      .good3{
        img {
          width: 40rem;
          height: 40rem;
        }
      }
    }
  }
}
</style>
