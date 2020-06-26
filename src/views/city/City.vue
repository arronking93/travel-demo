<template>
  <div class="city-page" ref="cityPage">
    <city-header></city-header>
    <city-search :citiesList="citiesList"></city-search>
    <city-list
      :hotCitiesList="hotCitiesList"
      :citiesList="citiesList"
      :curAlpha="curAlpha"
    ></city-list>
    <city-alphabet
      :citiesList="citiesList"
      :cityHeaderHeight="cityHeaderHeight"
      @alphaChange="alphaChange"
    ></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
import axios from "axios";

export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCitiesList: [],
      citiesList: {},
      curAlpha: "",
      cityHeaderHeight: -1
    };
  },
  methods: {
    getData() {
      axios
        .get(`${process.env.VUE_APP_BASE_API}/public/mock/city.json`)
        .then(this.successHandler);
    },
    successHandler(res) {
      if (res.status === 200) {
        console.log("get data sucessed");
        const data = res.data;
        if (data.ret) {
          const info = data.data;
          this.hotCitiesList = info.hotCities;
          this.citiesList = info.cities;
        }
      } else {
        console.log("get data failed");
      }
    },
    alphaChange(data) {
      this.curAlpha = data;
    }
  },
  created() {
    this.getData();
  },
  mounted() {
    this.cityHeaderHeight = this.$refs.cityPage.clientHeight;
  }
};
</script>

<style lang="scss" scoped></style>
