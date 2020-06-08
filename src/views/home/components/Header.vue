<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe617;</span>
    </div>
    <div class="header-input" placeholder="">
      <span class="iconfont">&#xe633;</span>
      输入城市/景点/游玩/主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont icon-menu">&#xe615;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader"
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/varibles";
// 或者
// @import "~@/assets/styles/varibles";
.header {
  display: flex;
  height: 0.86rem;
  line-height: 0.86rem;
  background-color: $myBgColor;
  color: #fff;
  .header-left {
    width: 0.64rem;
    .icon-back {
      text-align: center;
      font-size: 0.4rem;
      display: block;
    }
  }
  .header-input {
    flex: 1;
    background-color: #fff;
    border-radius: 0.1rem;
    height: 0.62rem;
    line-height: 0.62rem;
    margin: 0.12rem 0.2rem 0.12rem 0;
    color: #ccc;
    padding-left: 0.2rem;
  }
  .header-right {
    width: 1.24rem;
    .icon-menu {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>
