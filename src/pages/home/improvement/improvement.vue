<template>
  <div class="pagesHeight improvement-style">
    <div class="improvement-div animate fadeInUpBig">
      <h1>扫码点餐<br/>提升体验 节约时间成本</h1>
      <p>
        客人扫描Ada上的二维码，即可自助点餐完成下单及支付环节，<br/>节约时间，简单、便捷，店铺节约员工成本，提高翻台率；通过<br/>Ada软件与硬件集合还可实现多人在线协同点餐。
      </p>
    </div>
    <div class="shao animate fadeInUpBig">
      <img src="/static/home/shao.gif" />
    </div>
    <back-top />
  </div>
</template>

<script>
import BackTop from '../../../components/back'
export default {
  components: {
    BackTop
  }
}
</script>

<style lang="scss" scoped>
.improvement-style {
  background: url("/static/home/page1.png") no-repeat center 75%;
  background-size: cover;
  position: relative;
  margin: 1rem;
  // margin-top: 2.94rem;
  h1 {
    font-family: PingFangSC-Medium;
    font-size: 2.5rem;
    color: #4E4E4E;
    letter-spacing: 4px;
    text-align: justify;
  }
  p {
    font-size: 1.13rem;
    color: #4E4E4E;
    letter-spacing: 1.8px;
    text-align: justify;
    line-height: 1.88rem;
  }
  .improvement-div {
    padding-top: 12.75rem;
    margin-left: 7rem;
  }
  .shao {
    position: absolute;
    left: 8.52rem;
    bottom: 8.19rem;
    overflow: hidden;
    img {
      transition: all 1s;
      &:hover {
      transform: scale(1.1); //放大 倍数随意
      }
    }
  }
}
@media screen and (max-width: 1366px) { 
  .improvement-style {
    .shao {
       bottom: .19rem;
    }
  }
}
</style>
