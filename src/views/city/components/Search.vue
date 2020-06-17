<template>
  <div class="search">
    <input type="text" class="header-input" placeholder="输入城市或拼音" />
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/varibles";
// 或者
// @import "@/assets/styles/varibles";
.search {
  height: 0.72rem;
  background-color: $myBgColor;
  padding: 0 0.1rem;
  .header-input {
    background-color: #fff;
    color: #666;
    border-radius: 0.06rem;
    height: 0.62rem;
    line-height: 0.62rem;
    font-size: 0.3rem;
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    text-align: center;
  }
}
</style>
