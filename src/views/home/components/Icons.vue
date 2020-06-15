<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(pageData, index) in pagesData" :key="index">
        <div class="icon" v-for="item in pageData" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="icon-img-content" />
          </div>
          <div class="icon-name">{{ item.name }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  data() {
    return {
      listData: [
        {
          id: 1,
          name: "景点门票景点门票景点门票景点门票景点门票",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: 2,
          name: "滑雪季",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: 3,
          name: "泡温泉",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: 4,
          name: "动植物园",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: 5,
          name: "一日游",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: 6,
          name: "必游榜单",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: 7,
          name: "自然风光",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: 8,
          name: "全部",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: 9,
          name: "自然风光2",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        },
        {
          id: 10,
          name: "全部2",
          imgUrl: "//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png"
        }
      ],
      swiperOption: {
        pagination: ".swiper-pagination"
      }
    };
  },
  computed: {
    pagesData() {
      const list = [];
      this.listData.forEach((item, index) => {
        const i = Math.floor(index / 8);
        if (typeof list[i] === "undefined") {
          list[i] = [];
        }
        list[i].push(item);
      });
      return list;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/varibles";
@import "~@/assets/styles/mixins";
.icons {
  height: 0;
  padding-bottom: 50%;
  .icon {
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    float: left;
    position: relative;
    .icon-img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0.12rem;
      bottom: 0.32rem;
      text-align: center;
      .icon-img-content {
        width: 80%;
      }
    }
    .icon-name {
      position: absolute;
      bottom: 0;
      height: 0.32rem;
      line-height: 0.32rem;
      left: 0;
      right: 0;
      text-align: center;
      color: $myTextColor;
      @include ellipsis;
    }
  }
}
</style>
