<template>
  <div class="recommend">
    <div class="title">热门推荐</div>
    <ul>
      <li
        class="item border-bottom"
        v-for="item in recommendList"
        :key="item.id"
      >
        <img :src="item.imgUrl" :alt="item.title" class="item-img" />
        <div class="item-info">
          <div class="item-title">{{ item.title }}</div>
          <div class="item-desc">{{ item.desc }}</div>
          <div class="item-button">查看详情</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  data() {
    return {
      recommendList: [
        {
          id: 1,
          imgUrl:
            "//img1.qunarzz.com/sight/p0/1701/6c/6c5e1f8fa365adada3.img.png_200x200_d4ece7be.png",
          title: "宁波方特东方神话",
          desc: "宁波方特东方神话，浪漫的东方之旅"
        },
        {
          id: 2,
          imgUrl:
            "//img1.qunarzz.com/sight/p0/1701/6c/6c5e1f8fa365adada3.img.png_200x200_d4ece7be.png",
          title: "宁波方特东方神话",
          desc: "宁波方特东方神话，浪漫的东方之旅"
        },
        {
          id: 3,
          imgUrl:
            "//img1.qunarzz.com/sight/p0/1701/6c/6c5e1f8fa365adada3.img.png_200x200_d4ece7be.png",
          title:
            "宁波方特东方神话宁波方特东方神话宁波方特东方神话宁波方特东方神话宁波方特东方神话",
          desc: "宁波方特东方神话，浪漫的东方之旅宁波方特东方神话，浪漫的东..."
        }
      ]
    };
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
