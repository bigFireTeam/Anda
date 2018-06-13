 <template>
  <div class="restaurant pagesHeight">
    <div class="container-fluid">
      <div class="row">
        <div class="cont-div">
          <div class="cont-div-img">
            <res-title
              :h1Titel='h1Titel'
              :pTitle='pTitle'
              :spanTitle='spanTitle'
            />
          </div>
          <div class="icon-div">
            <ul class="ul-img">
              <li v-for="(item, index) in iconUrl" :key="index">
                <div>
                  <img :src='item.imgUrl'>
                </div>
                <p>{{item.iconFont}}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResTitle from '../../../components/titleCont'
export default {
  data () {
    return {
      h1Titel: `提供领先的AI+智慧餐厅
                服务解决方案`,
      pTitle: `Ada致力于研发针对餐厅的多功能智慧型交互设备，我们为餐厅提供国内领先的集共享充电、定位、手势及语音呼叫、点餐、支付、远程选桌、餐厅360°全景及多元化70+技能云平台应用服务功能的线上线下交互的智能AI产品。提供餐饮/酒店/娱乐行业运营效率，为商家解决了获客难、人工效率底下、管理难、运营方式落后等问题。每个商家餐桌上只需摆放一台Ada产品，用户就能远程实现与商家信息交互。
              Ada通过所服务的众多餐饮企业，运用软硬件集合的AI+餐饮、云服务使餐饮企业的经营管理跨越到一个全新的航道。`,
      spanTitle: `用户的随身智能AI——WAITER
      餐厅的24小时经营管理店长`,
      iconUrl: [
        {
          imgUrl: '/static/home/restaurant/icon/Group13.png',
          iconFont: '共享充电'
        },
        {
          imgUrl: '/static/home/restaurant/icon/Group14.png',
          iconFont: '定位'
        },
        {
          imgUrl: '/static/home/restaurant/icon/Group15.png',
          iconFont: '手势及语音呼叫'
        },
        {
          imgUrl: '/static/home/restaurant/icon/Group15.png',
          iconFont: '点餐'
        },
        {
          imgUrl: '/static/home/restaurant/icon/Group17.png',
          iconFont: '支付'
        },
        {
          imgUrl: '/static/home/restaurant/icon/Group18.png',
          iconFont: '远程选桌'
        },
        {
          imgUrl: '/static/home/restaurant/icon/Group19.png',
          iconFont: '餐厅360°'
        },
        {
          imgUrl: '/static/home/restaurant/icon/Group20.png',
          iconFont: '70+技能云'
        }
      ]
    }
  },
  components: {
    ResTitle
  }
}
</script>

<style lang="scss" scoped>
.cont-div {
  width: 90%;
  margin: 0 auto;
  background: #FFFFFF;
  box-shadow: 0 20px 20px 0 rgba(117,117,117,0.10);
  border-radius: 10px;
}
.restaurant {
  display: flex;
  align-items: center;
}
.cont-div-img {
  background: url('/static/home/restaurant/Group13.png') no-repeat;
  background-size: cover;
}
.div-bg {
  background: #4592FF url('/static/home/restaurant/Group11.png') no-repeat;
  padding-bottom: 6.3rem;
  border-radius: 10px;
  padding-right: 1.25rem;
  padding-left: 1.25rem;
  background-size: cover;
}
.ul-img {
  display: flex;
  justify-content: space-around;
  margin-top: 2.13rem;
  padding: 0;
  li {
    text-align: center;
    list-style: none;
    img {
      width: 6.06rem;
      height: 6.06rem;
    }
    p {
      font-family: PingFangSC-Regular;
      font-size: 1rem;
      color: #203152;
      letter-spacing: 0.92px;
      text-align: center;
      line-height: 1.69rem;
      margin-top: 1.2rem;
    }
  }
}
@media (max-width: 1000px) {

}
</style>
