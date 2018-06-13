<template>
  <div class="pagesHeight">
    <big-bg :imgUrl="images[0]">
      <div class="centerText-10">
        <h1>AI芯片组M1000 强悍性能 超低能耗</h1>
        <p> 
            迄今为止最强悍的AI芯片。Ada-SMART-BOX大脑核心
            <br>4核64位，100NM制程工艺，采用旗舰架构，单核主频可达2.2GHz
            <br>高性能、低能耗，如虎添翼快上加快。
        </p>
      </div>
    </big-bg>
  </div>
</template>
<script>
  import bigBg from 'common/bigBg/BigBg'

  export default {
    name: 'team',
    data(){
      return {
        images: ['/static/home/home-10.png']
      }
    },
    components: {
      bigBg
    }
  }
</script>

<style scoped lang="scss">
  .centerText-10 {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    transform: translate(0, -100%);
    color: #fff;

    h1 {
      margin-bottom: 1.5rem;
      letter-spacing: .25rem;
      font-size: 2.5rem;
    }

    p {
      font-size: 1rem;
      letter-spacing: 0.1rem;
    }
  }
</style>