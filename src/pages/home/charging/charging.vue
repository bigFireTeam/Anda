<template>
  <div class="charging pagesHeight">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-6 col-div-position  animate fadeInUpBig">
          <h1>扫码充电 推荐商家线上媒体号</h1>
          <p>自媒体当道，流量顾客金贵，来餐厅消费的都是真爱粉，流量岂能白<br/>白浪费。扫码充电，提供了WIFI以外的另一个高频入口为餐厅顾客粉<br/>丝社群吸粉实现最大化。</p>
        </div>
        <div class="dian animate fadeInUpBig">
          <img src="/static/home/dian.gif">
        </div>
        <div class="anmientde animate fadeInUpBig">
          <img src="/static/home/tel.gif">
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
.charging {
  background: url("/static/home/Group.jpg") no-repeat center center;
  background-size: cover;
  position: relative;
  .col-div-position {
    margin-top: 17.75rem;
    margin-left: 6rem;
  }
  h1 {
    font-family: PingFangSC-Semibold;
    font-size: 2.5rem;
    color: #FFFFFF;
    letter-spacing: 0.4px;
  }
  p {
    font-size: 1.13rem;
    color: #FFFFFF;
    line-height: 2.81rem;
    margin-top: 3.5rem;
  }
  .anmientde {
    position: absolute;
    right: 20.81rem;
    bottom: 0rem;
    img {
      width: 160%;
    }
  }
  .dian {
    position: absolute;
    bottom: 6.84rem;
    left: 10.95rem;
  }
}
@media screen and (max-width: 1366px) { 
  .charging {
    .anmientde {
      img {
         width: 100%;
      }
    }
  }
}
</style>
