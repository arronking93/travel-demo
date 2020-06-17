<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in hotList" :key="item.id">
        <img :src="item.imgUrl" :alt="item.title" class="item-img" />
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.price }}</div>
          <div class="item-button">查看详情</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    hotList: Array
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/mixins";
.recommend {
  margin-top: 0.2rem;
  .title {
    overflow: hidden;
    height: 0.68rem;
    line-height: 0.68rem;
    text-indent: 0.2rem;
    background: #eee;
  }
  .item {
    overflow: hidden;
    height: 1.9rem;
    display: flex;
    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      margin: 0.1rem;
    }
    .item-info {
      margin: 0.1rem;
      flex: 1;
      position: relative;
      min-width: 0;
      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        @include ellipsis;
      }
      .item-desc {
        color: #ccc;
        // @include ellipsis;
      }
      .item-button {
        position: absolute;
        bottom: 0;
        background: #ff9300;
        color: #fff;
        border-radius: 0.06rem;
        padding: 0.1rem;
        font-size: 0.2rem;
      }
    }
  }
}
</style>
