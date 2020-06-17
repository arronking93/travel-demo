<template>
  <div>
    <home-header></home-header>
    <home-search></home-search>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSearch from "./components/Search";
// import axios from "axios";
export default {
  components: {
    HomeHeader,
    HomeSearch
  }
};
</script>

<style lang="scss" scoped></style>
