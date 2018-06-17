<template>
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="javascript:void(0)" @click="handelClick(0)">HOME</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="javascript:void(0)" @click="handelClick(1)">PRODUCT</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="javascript:void(0)" @click="handelClick(9)">TEAM</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="javascript:void(0)" @click="handelClick(10)">CONTACT US</a>
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
      font-size: 1rem;
      color: #203152;
      opacity: .4;
      letter-spacing: .0625rem;
      line-height: 1.13rem;
      padding: 0;
      transition: all 0.5s cubic-bezier(0.48, 0.5, 0.2, 1);
      &:hover {
        opacity: 1;
      }
    }
    margin-left: 3rem;
    &:nth-of-type(1) {
      margin-left: 0rem;
    }
  }
}
</style>
