<template>
  <div class="search">
    <input
      type="text"
      class="header-input"
      placeholder="输入城市或拼音"
      v-model="keyWord"
    />
    <div class="filter-content" v-show="keyWord" ref="searchList">
      <ul class="filter-list">
        <li
          class="filter-item border-bottom"
          v-for="item in filterCityList"
          :key="item.id"
        >
          {{ item.name }}
        </li>
        <li class="filter-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "CitySearch",
  props: {
    city: String,
    citiesList: Object
  },
  data() {
    return {
      keyWord: "",
      scroll: null
    };
  },
  computed: {
    filterCityList() {
      const target = [];
      if (!this.keyWord) {
        return target;
      }
      Object.values(this.citiesList).forEach(group => {
        group.forEach(item => {
          if (
            item.name.includes(this.keyWord) ||
            item.spell.includes(this.keyWord)
          ) {
            target.push(item);
          }
        });
      });
      return target;
    },
    hasNoData() {
      return !this.filterCityList.length;
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.searchList);
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/varibles";
// 或者
// @import "@/assets/styles/varibles";
.search {
  height: 0.72rem;
  background-color: $myBgColor;
  padding: 0 0.1rem;
  .header-input {
    background-color: #fff;
    color: #666;
    border-radius: 0.06rem;
    height: 0.62rem;
    line-height: 0.62rem;
    font-size: 0.3rem;
    width: 100%;
    padding: 0 0.2rem;
    box-sizing: border-box;
    text-align: center;
  }
  .filter-content {
    position: absolute;
    left: 0;
    right: 0;
    top: 1.58rem;
    bottom: 0;
    background: #eee;
    z-index: 1;
    overflow: hidden;
    .filter-list {
      background: #fff;
      .filter-item {
        line-height: 0.76rem;
        text-indent: 0.2rem;
      }
    }
  }
}
</style>
