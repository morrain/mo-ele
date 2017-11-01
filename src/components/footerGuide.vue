<template>
  <mt-tabbar class="footer" fixed>
    <mt-tab-item id="msite">
      <router-link class="grid-content" to="/" tag="div">
        <i class="el-icon-mo-eleme"></i>
        <span>外卖</span>
      </router-link>
    </mt-tab-item>
    <mt-tab-item id="discover">
      <router-link class="grid-content" to="/discover" tag="div">
        <i class="el-icon-mo-find"></i>
        <span>发现</span>
      </router-link>
    </mt-tab-item>
    <mt-tab-item id="order">
      <router-link class="grid-content" to="/order" tag="div">
        <i class="el-icon-mo-order"></i>
        <span>订单</span>
      </router-link>
    </mt-tab-item>
    <mt-tab-item id="mine">
      <router-link class="grid-content" to="/mine" tag="div">
        <i class="el-icon-mo-mine"></i>
        <span>我的</span>
      </router-link>
    </mt-tab-item>
  </mt-tabbar>
</template>
<script>
export default {

  name: 'footerGuide',

  data() {
    return {

    };
  }
};

</script>
<style lang="scss" scoped>
.mint-tabbar {
  background: #fff;
  .mint-tab-item {
    .grid-content {
      border-radius: 3px;
      min-height: 18px;
      text-align: center;
      color: #666;
      >i {
        font-size: 23px;
      }
      >span {
        display: block;
        font-size: 9px;
        line-height: 15px;
      }

      &.router-link-exact-active {
        color: #0089dc
      }
    }
  }
}

</style>
