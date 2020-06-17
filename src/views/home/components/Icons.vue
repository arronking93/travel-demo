<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(pageData, index) in pagesData" :key="index">
        <div class="icon" v-for="item in pageData" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" class="icon-img-content" />
          </div>
          <div class="icon-name">{{ item.title }}</div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    pagesData() {
      const list = [];
      this.iconList.forEach((item, index) => {
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
