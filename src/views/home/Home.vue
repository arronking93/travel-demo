<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :hotList="hotList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      hotList: [],
      weekendList: []
    };
  },
  methods: {
    getData() {
      axios
        .get(`${process.env.VUE_APP_BASE_API}/public/mock/index.json`)
        .then(this.successHandler);
    },
    successHandler(res) {
      if (res.status === 200) {
        console.log("get data sucessed");
        const data = res.data;
        if (data.ret) {
          const info = data.data;
          this.city = info.city;
          this.swiperList = info.swiperList;
          this.iconList = info.iconList;
          this.hotList = info.hotList;
          this.weekendList = info.weekendList;
        }
      } else {
        console.log("get data failed");
      }
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped></style>
