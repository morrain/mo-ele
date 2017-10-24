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
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple"></div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple-light"></div>
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
  height: 120px;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}

</style>
