<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
export default {
  components: {
    HomeHeader,
    HomeSwiper
  }
};
</script>

<style lang="scss" scoped></style>
