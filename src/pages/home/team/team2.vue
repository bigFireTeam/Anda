<template>
  <div>
    <div ref="divHeight" class="bg_team">
      <h1 class="team_header animate fadeInUpBig">
        <strong>团队介绍</strong>
        <br><small>Team Introduction</small>
      </h1>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3 taem-div animate fadeInUpBig">
            <div class="raduis">
              <img src="/static/home/header1.png" />
            </div>
            <div class="fonts ">
              <h1>兰进 CEO</h1>
              <p>
                阿巴斯科技创始人，智能模拟体验机，智能洗<br/>碗机，智能餐桌研发十余年行业经验，熟悉以<br/>餐饮为维度的体系业态，对智能系统有独特的<br/>见解。
              </p>
            </div>
          </div>
          <div class="col-md-3 taem-div animate fadeInUpBig">
            <div class="raduis">
              <img src="/static/home/header2.png" />
            </div>
            <div class="fonts">
              <h1>欧洲  COO</h1>
              <p>
                增长黑客，曾担任美呗网COO，任职期间帮<br/>助公司实现0-1的突破，用户从0-800万，医<br/>院医生端全国市场覆盖率80%，熟悉产品运营，用户运营。
              </p>
            </div>
          </div>
          <div class="col-md-3 taem-div animate fadeInUpBig">
            <div class="raduis">
              <img src="/static/home/header3.png" />
            </div>
            <div class="fonts">
              <h1>许建平  CTO</h1>
              <p>
                西之路工业设计创始人，具有多年ID，MD设<br/>计经验，曾参与苹果mac外观设计，德国红点<br/>奖获得者，前瞻的硬件产品设计，自身硬件架<br/>构经验。
              </p>
            </div>
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
  name: 'team',

  mounted () {
    this.$refs.divHeight.style.height = window.innerHeight + 'px'
  },
  components: {
    BackTop
  }
}
</script>

<style lang="scss" scoped>
.bg_team{
  background: url("/static/home/tiemBg.png") no-repeat center center;
  background-size: cover; 
}
.team_header {
  padding-top: 6.5rem;
  margin-bottom: 2.8rem;
  line-height: 2.5rem;
  font-size: 2.5rem;
  color: #fff;
  letter-spacing: .625rem;
  text-align: center;
}

.team_header small {
  margin-top: 1rem;
  font-size: 2rem;
}
.row {
  align-items: center;
  justify-content: space-around;
}
.taem-div {
  position: relative;
  // width: 27.6rem;
  // height: 20.78rem;
  background: #FFFFFF;
  border-radius: 4.8px;
  margin-top: 7.81rem;
  .raduis {
    position: absolute;
    width: 9.37rem;
    height: 9.37rem;
    border-radius: 50%; 
    left: 1.8rem;
    bottom: 14.7rem;
    transition: all 1s;
    z-index: 9999;
    &:hover {
      transform: scale(1.2); //放大 倍数随意
    }
  }
  p {
    font-size: 1.13rem;
    color: #808CB2;
    letter-spacing: 0.06rem;
    text-align: justify;
    line-height: 1.88rem;
    margin-bottom: 3.34rem;
    margin-left: 1.8rem;
  }
  h1 {
    font-size: 1.35rem;
    color: #282828;
    letter-spacing: .08rem;
    margin-left: 1.8rem;
    margin-top: 5.53rem;
  }
}
</style>