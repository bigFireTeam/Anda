<template>
  <div :class="[$style.team_container, 'js-team-container']" id="team">
    <h1 :class="$style.team_header">
      <strong>团队介绍</strong>
      <br><small>Team Introduction</small>
    </h1>
    <gallary :team="teams"></gallary>
  </div>
</template>
<script>
  import Gallary from 'common/gallary/Gallary'

  export default {
    name: 'team',
    data(){
      return {
        teams: [{ img: '/static/home/home-team-1.png',
                  name: `David
                  Richards`,
                  position: 'CEO & Founde'},
                  { img: '/static/home/home-team-1.png',
                  name: `David
                  Richards`,
                  position: 'CEO & Founde'},
                  { img: '/static/home/home-team-1.png',
                  name: `David
                  Richards`,
                  position: 'CEO & Founde'}]
      }
    },
    components: {
      Gallary
    },
    mounted () {
      this.$methodFn.pageHeight('.js-team-container')
    }
  }
</script>

<style module>
  .team_header {
    margin-top: 6.5rem;
    margin-bottom: 2.8rem;
    line-height: 2.5rem;
    font-size: 2.5rem;
    color: #203152;
    letter-spacing: .625rem;
    text-align: center;
  }

  .team_header small {
    margin-top: 1rem;
    font-size: 2rem;
  }
</style>