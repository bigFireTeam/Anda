<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 div-logo">
          <div class="logo">
            <img src="/static/home/logo.png" class="logo-img">
            <img src="/static/home/timg.png" class="baidu-img">
          </div>
        </div>
        <div class="col-md-4">
          <hrader-nav></hrader-nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import HraderNav from './nav'
export default {
  components: {
    HraderNav
  }
}
</script>

<style lang="scss" scoped>
  header {
    .row {
      justify-content: space-between;
      .logo-img {
        margin-top: 3.88rem;
      }
      .baidu-img {
        margin-left: 4.38rem;
      }
    }
  }
</style>
