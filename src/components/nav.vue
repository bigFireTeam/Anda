<template>
  <ul class="nav">
    <li class="nav-item">
      <a class="nav-link" href="#home">home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#product">product</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#team">team</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#pricing">pricing</a>
    </li>
  </ul>
</template>

<script>
export default {
  
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
