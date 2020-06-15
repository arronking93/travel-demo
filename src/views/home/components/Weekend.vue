<template>
  <div class="recommend">
    <div class="title">周末去哪儿</div>
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
            "//img1.qunarzz.com/sight/source/1505/da/d1287d53ded566.jpg_r_640x214_ded63e59.jpg",
          title: "宁波方特东方神话",
          desc: "宁波方特东方神话，浪漫的东方之旅"
        },
        {
          id: 2,
          imgUrl:
            "//img1.qunarzz.com/sight/source/1505/da/d1287d53ded566.jpg_r_640x214_ded63e59.jpg",
          title: "宁波方特东方神话",
          desc: "宁波方特东方神话，浪漫的东方之旅"
        },
        {
          id: 3,
          imgUrl:
            "//img1.qunarzz.com/sight/source/1505/da/d1287d53ded566.jpg_r_640x214_ded63e59.jpg",
          title:
            "宁波方特东方神话宁波方特东方神话宁波方特东方神话宁波方特东方神话宁波方特东方神话",
          desc:
            "宁波方特东方神话，浪漫的东方之旅宁波方特东方神话，浪漫的东方之旅宁波方特东方神话，浪漫的东方之旅宁波方特东方神话，浪漫的东方之旅宁波方特东方神话，浪漫的东方之旅宁波方特东方神话，浪漫的东方之旅"
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
    height: 4rem;
    .item-img {
      width: 100%;
    }
    .item-info {
      margin: 0.1rem;
      position: relative;
      .item-title {
        line-height: 0.54rem;
        font-size: 0.32rem;
        @include ellipsis;
      }
      .item-desc {
        color: #ccc;
        @include ellipsis;
      }
    }
  }
}
</style>
