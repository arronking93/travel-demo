<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/Alphabet";
// import axios from "axios";
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  }
};
</script>

<style lang="scss" scoped></style>
