<template>
  <div class="management pagesHeight">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4">
            <img src="/static/home/Group1.png" class="group1" />
            <img src="/static/home/Group2.png" class="group2" />
          </div>
        <div class="col-md-8 div-height" ref="colHieght">
          <div class="management-cont animate fadeInLeft fadeOutRight">
            <h1 c>智能云后台管理</h1>
            <p>
              Ada管家云后台对接智能硬件、用户端，前台统一管理调度，数<br/>据直接生成报表，随时登录，灵活查询，让商家运筹帷幄，打造AI+餐厅。
            </p>
            <p>
              通过Ada智能硬件的强大功能实现扫码充电、关注、点餐、买<br/>单、互动、一键及语音呼叫等功能，数据收集到云后台，从云后<br/>台查看，方便商家进行管理。
            </p>
          </div>      
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    divHieght () {
      // this.$refs.divHeight.style.height = window.innerHeight + 'px'
      this.$refs.colHieght.style.height = window.innerHeight + 'px'
    }
  },
  mounted () {
    // this.divHieght()
  }
}
</script>

<style lang="scss" scoped>
.management {
  position: relative;
  background: url('/static/home/Group3.jpg') no-repeat center top;
  background-size: cover;
  // margin-top: 5.56rem;
  .div-height {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .management-cont {
    margin-top: 23rem;
    margin-left: 30rem;
  }
  h1 {
    font-family: PingFangSC-Medium;
    font-size: 3.13rem;
    color: #FFFFFF;
    letter-spacing: 5px;
    text-align: justify;
  }
  p {
    font-family: PingFangSC-Regular;
    font-size: 1.13rem;
    color: #FFFFFF;
    letter-spacing: 1.8px;
    text-align: justify;
    line-height: 1.88rem;
  }
  .group1, .group2 {
    position: absolute;
  }
  .group1 {
    width: 46.56rem;
    height: 32.75rem;
    left: 19.69rem;
    top: 12rem;
  }
  .group2 {
    width: 49.63rem;
    height: 33.38rem;
    top: 17.69rem;
    left: 23.69rem;
  }
}
</style>
