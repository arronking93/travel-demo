<template>
  <ul class="alph-list">
    <li class="item" v-for="item in letters" :key="item">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    citiesList: Object
  },
  computed: {
    letters() {
      // const letters = [];
      // for (let i in this.citiesList) {
      //   if (this.citiesList.hasOwnProperty(i)) {
      //     this.letters.push(i);
      //   }
      // }
      // return letters;
      return Object.keys(this.citiesList);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/varibles";
// 或者
// @import "@/assets/styles/varibles";
.alph-list {
  position: absolute;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  width: 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .item {
    line-height: 0.4rem;
    text-align: center;
    color: $myBgColor;
  }
}
</style>
