<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
      <router-link to="/hello/abc/profile">abc</router-link>
      <router-link to="/hello/efg/post">efg</router-link>
      <el-input icon="mo-eleme" />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <el-row>
        <el-col :span="6">
          <router-link class="grid-content" to="/hello/abc/profile" tag="div">
            <i class="el-icon-mo-eleme"></i>
            <span>外卖</span>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link class="grid-content" to="/hello/abc/post" tag="div">
            <i class="el-icon-mo-find"></i>
            <span>发现</span>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link class="grid-content" to="/hello/efg/profile" tag="div">
            <i class="el-icon-mo-order"></i>
            <span>订单</span>
          </router-link>
        </el-col>
        <el-col :span="6">
          <router-link class="grid-content" to="/hello/efg/post" tag="div">
            <i class="el-icon-mo-mine"></i>
            <span>我的</span>
          </router-link>
        </el-col>
      </el-row>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'app'
}

</script>
<style lang='scss'>
//引入项目图标库，使用http://iconfont.cn/  托管
[class^="el-icon-mo"],
[class*="el-icon-mo"] {
  font-family: "mo-ele-iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale
}

footer {

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: #fff;
  .el-row {
    padding: 12px 0;
    .el-col {
      border-radius: 4px;
      .grid-content {
        border-radius: 4px;
        min-height: 36px;
        text-align: center;
        color: #666;
        >i {
          font-size: 46px;
        }
        >span {
          display: block;
          font-size: 18px;
          line-height: 30px;
        }

        &.router-link-exact-active {
          color: #0089dc
        }
      }
    }
  }





  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}

</style>
