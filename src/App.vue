<template>
  <div id="app">
    <home-index />
  </div>
</template>

<script>
import HomeIndex from './pages/home/index'
export default {
  name: 'App',
  components: {
    HomeIndex
  }
}
</script>

<style type="text/css">
    .icon {
       width: 1em; height: 1em;
       vertical-align: -0.15em;
       fill: currentColor;
       overflow: hidden;
    }

    html, body, #app {
      height: 100%;
    }

    #app {
      overflow: hidden;
    }

  .animate {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .animated.infinite {
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }
      
  @-webkit-keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInLeft {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .swiper-slide-active .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }

  @-webkit-keyframes fadeOutRight {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  @keyframes fadeOutRight {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  .swiper-slide-prev .fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
  }

</style>
