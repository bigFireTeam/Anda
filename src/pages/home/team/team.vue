<template>
  <div :class="[$style.team_container, 'js-team-container']" id="team">
    <div :class="$style.bg_team" ref="divHeight">
      <h1 :class="[$style.team_header,'animate fadeInLeft fadeOutRight']">
        <strong>团队介绍</strong>
        <br><small>Team Introduction</small>
      </h1>
      <gallary :team="teams"></gallary>
    </div>
  </div>
</template>
<script>
  import Gallary from 'common/gallary/Gallary'

  export default {
    name: 'team',
    data(){
      return {
        teams: [{ img: '/static/home/home-team-1.jpg',
                  name: `David
                  Richards`,
                  position: 'CEO & Founde'},
                  { img: '/static/home/home-team-1.jpg',
                  name: `David
                  Richards`,
                  position: 'CEO & Founde'},
                  { img: '/static/home/home-team-1.jpg',
                  name: `David
                  Richards`,
                  position: 'CEO & Founde'}]
      }
    },
    components: {
      Gallary
    },
    mounted () {
      this.$methodFn.pagesHeight('.js-team-container')
      this.$refs.divHeight.style.height = window.innerHeight + 'px'
    }
  }
</script>

<style module>
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
</style>