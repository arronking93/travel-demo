<template>
  <ul class="alph-list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
  </ul>
</template>

<script>
export default {
  name: "City",
  props: {
    city: String
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/varibles";
// 或者
// @import "@/assets/styles/varibles";
.alph-list {
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $myBgColor;
  }
}
</style>
