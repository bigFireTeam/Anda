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
</style>
