<template>
  <ul class="alph-list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @click="alphaClickHandler"
      @touchstart="alphaTouchStartHandler"
      @touchmove="alphaTouchMoveHandler"
      @touchend="alphaTouchEndHandler"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    citiesList: Object,
    cityHeaderHeight: Number
  },
  data() {
    return {
      touchStatus: false,
      touchStartY: null,
      alphaHeight: null,
      touchTimer: null
    };
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
  },
  methods: {
    alphaClickHandler(e) {
      this.$emit("alphaChange", e.target.innerHTML.trim());
    },
    alphaTouchStartHandler() {
      this.touchStatus = true;
      // this.touchStartY = e.target.offsetTop;
    },
    alphaTouchMoveHandler(e) {
      if (!this.touchStatus) {
        return;
      }
      if (this.touchTimer) {
        clearTimeout(this.touchTimer);
      }
      this.touchTimer = setTimeout(() => {
        const touchDis = e.touches[0].clientY - this.touchStartY;
        const index = Math.floor(touchDis / this.alphaHeight);
        if (index >= 0 && index < this.letters.length) {
          this.$emit("alphaChange", this.letters[index]);
        }
      }, 16);
    },
    alphaTouchEndHandler() {
      this.touchStatus = false;
    }
  },
  updated() {
    const el = this.$refs["A"][0];
    this.touchStartY = el.offsetTop + this.cityHeaderHeight;
    this.alphaHeight = el.offsetHeight;
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
