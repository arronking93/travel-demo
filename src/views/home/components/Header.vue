<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont icon-back">&#xe617;</span>
    </div>
    <div class="header-input" placeholder="">
      <span class="iconfont">&#xe633;</span>
      <input
        class="header-input-content"
        type="text"
        placeholder="输入城市/景点/游玩/主题"
      />
    </div>
    <router-link to="/city" tag="div" class="header-right">
      {{ curCity }}
      <span class="iconfont icon-menu">&#xe615;</span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed: {
    ...mapState(["curCity"])
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/varibles";
// 或者
// @import "@/assets/styles/varibles";
.header {
  display: flex;
  height: $headerHeight;
  line-height: $headerHeight;
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
    padding: 0 0.2rem;
    display: flex;
    .header-input-content {
      flex: 1;
    }
  }
  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    .icon-menu {
      font-size: 0.24rem;
      margin-left: -0.04rem;
    }
  }
}
</style>
