<template>
  <div class="header-up">
    <router-link to="/" tag="div" class="header-left">
      <span class="iconfont icon-back">&#xe617;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: "CityHeader",
  props: {
    city: String
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/varibles";
// 或者
// @import "@/assets/styles/varibles";
.header-up {
  height: $headerHeight;
  line-height: $headerHeight;
  position: relative;
  background-color: $myBgColor;
  color: #fff;
  text-align: center;
  font-size: 0.32rem;
  .header-left {
    width: 0.64rem;
    position: absolute;
    .icon-back {
      text-align: center;
      font-size: 0.4rem;
      display: block;
    }
  }
}
</style>
