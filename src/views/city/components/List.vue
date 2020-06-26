<template>
  <div class="city-list" ref="cityListContainer">
    <div class="city-scroll">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-box">
            <div class="button-item">{{ curCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-box" v-for="item in hotCitiesList" :key="item.id">
            <div class="button-item" @click="handleCityClick(item.name)">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div
        class="area border-topbottom"
        v-for="(items, key) in citiesList"
        :key="key"
        :ref="key"
      >
        <div class="title">{{ key }}</div>
        <div class="addr-list">
          <div
            class="addr-item border-bottom"
            v-for="item in items"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BScroll from "better-scroll";
export default {
  name: "CityList",
  props: {
    hotCitiesList: Array,
    citiesList: Object,
    curAlpha: String
  },
  data() {
    return {
      scroll: null
    };
  },
  computed: {
    ...mapState(["curCity"])
  },
  methods: {
    ...mapMutations(["changeCurCity"]),
    handleCityClick(city) {
      this.changeCurCity(city);
    }
  },
  watch: {
    curAlpha(newVal) {
      if (newVal) {
        const el = this.$refs[newVal][0];
        this.scroll.scrollToElement(el);
      }
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.cityListContainer);
  }
};
</script>

<style lang="scss" scoped>
.border-topbottom {
  &::before {
    border-color: #ccc;
  }
  &::end {
    border-color: #ccc;
  }
}
.border-bottom {
  &::before {
    border-color: #ccc;
  }
}
.city-list {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.58rem;
  bottom: 0;
  .title {
    overflow: hidden;
    line-height: 0.54rem;
    text-indent: 0.2rem;
    background: #eee;
    color: #666;
    font-size: 0.26rem;
  }
  .button-list {
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;
    .button-box {
      float: left;
      width: 33.33%;
      .button-item {
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
        text-align: center;
        padding: 0.1rem;
        margin: 0.1rem;
      }
    }
  }
  .addr-list {
    .addr-item {
      line-height: 0.76rem;
      text-indent: 0.2rem;
    }
  }
}
</style>
