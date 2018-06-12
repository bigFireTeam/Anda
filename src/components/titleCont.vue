<template>
  <div class="col-md-5 div-bg">
    <h1 class="title" :style="{color: $color}">
      {{h1Titel}}
    </h1>
    <p :style="{color: $color}" class="line-style line-p-style">
      {{pTitle}}
    </p>
    <p class="line-style line-span-style">
      <span :style="{color: $color}">
        {{spanTitle}}
      </span>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    h1Titel: {
      type: String
    },
    pTitle: {
      type: String
    },
    spanTitle: {
      type: String
    },
    $color: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 2.5rem;
  font-family: PingFangSC-Semibold;
  color: #FFFFFF;
  letter-spacing: 2.5px;
  line-height: 3.75rem;
  white-space: pre-line;
}
.line-p-style {
  font-family: PingFangSC-Regular;
  font-size: 1rem;
  color: #FFFFFF;
  letter-spacing: 1.6px;
  text-align: justify;
}
.line-style {
  white-space: pre-line;
  line-height: 1.88rem;
}
.line-span-style {
  font-family: PingFangSC-Semibold;
  font-size: 1.25rem;
  color: #FFFFFF;
  letter-spacing: 2px;
  line-height: 2.5rem;
}
</style>
