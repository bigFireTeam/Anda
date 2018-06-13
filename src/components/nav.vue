<template>
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="javascript:void(0)" @click="handelClick(0)">home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="javascript:void(0)">product</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="javascript:void(0)" @click="handelClick(10)">team</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#pricing">pricing</a>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    handelClick(index) {
      this.$eventHub.$emit('navClick', index)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  margin-top: 3.44rem;
  .nav-item {
    a {
      font-family: AppleSystemUIFont;
      font-size: 1rem;
      color: #203152;
      letter-spacing: .0625rem;
      line-height: 1.13rem;
      padding: 0;
    }
    margin-left: 3rem;
    &:nth-of-type(1) {
      margin-left: 0rem;
    }
  }
}
</style>
