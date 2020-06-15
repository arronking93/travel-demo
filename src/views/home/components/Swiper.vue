<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swipe-img" :src="item.url" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      list: [
        {
          id: 1001,
          url:
            "//img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_600x330_8db87481.jpg"
        },
        {
          id: 1002,
          url:
            "//img1.qunarzz.com/sight/p0/1508/5a/9a1e5c492dec4945ff05f24025323a44.water.jpg_600x330_84ffcd8f.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper ::v-deep .swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  width: 100%;
  height: 0;
  padding-bottom: 55%;
  overflow: hidden;
  .swipe-img {
    width: 100%;
  }
}
</style>
