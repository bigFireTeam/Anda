<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4 div-logo">
          <div class="logo">
            <img src="" alt="">
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
    HraderNav,
  }
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    .row { 
      
    }
  }
</style>
