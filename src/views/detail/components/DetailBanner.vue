<template>
  <div class="detail-banner">
    <img
      class="detail-banner-img"
      src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
    />
    <div class="detail-banner-info">
      <div class="detail-banner-tittle">
        大连圣亚海洋世界(AAAA景区)
      </div>
      <div class="detail-banner-number">
        <!-- <span class="iconfont detail-banner-icon">&#xe616;</span> -->
        <span class="iconfont detail-banner-icon">&#xe635;</span>
        39
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBanner"
};
</script>

<style lang="scss" scoped>
.detail-banner {
  width: 100%;
  height: 0;
  overflow: hidden;
  padding-bottom: 55%;
  background: pink;
  position: relative;
  .detail-banner-img {
    width: 100%;
    height: auto;
  }
  .detail-banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.8)
    );
    .detail-banner-tittle {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }
    .detail-banner-number {
      height: 0.32rem;
      line-height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);
      font-size: 0.24rem;
      .detail-banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
