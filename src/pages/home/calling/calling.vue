<template>
  <div class="pagesHeight calling-div">
    <div class="container-fluid">
      <div class="row pagesHeight">
        <div class="calling-style animate fadeInUpBig">
          <h1>一键呼叫<br/>后台管理顾客呼叫服务</h1>
          <p>对接Ada智能管理，由前台统一调度，根据响应速度<br/>和次数，作为服务员另一项绩效考核参考</p>
        </div>
      </div>
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
.calling-div {
  background: url("/static/home/pages1.jpg") no-repeat center 70%;
  margin: 1rem;
  background-size: cover;
  .row {
    justify-content: flex-end;
    align-items: center;
    .calling-style {
      margin-right: 5rem;
    }
  }
  h1 {
    font-family: PingFangSC-Medium;
    font-size: 2.5rem;
    line-height: 3.5rem;
    color: #4E4E4E;
    letter-spacing: 0.25rem;
    text-align: justify;
  }
  p {
    font-size: 1.13rem;
    color: #4E4E4E;
    letter-spacing: 0.11rem;
    text-align: justify;
    margin-top: 2.25rem;
    line-height: 1.88rem;
  }
}
</style>
