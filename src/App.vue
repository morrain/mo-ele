<template>
  <div id="app">
    <header>
      <span>Vue.js PWA</span>
      <router-link to="/hello/abc/profile">abc</router-link>
      <router-link to="/hello/efg/post">efg</router-link>
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
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  margin-top: 40px;
  display: flex;
  justify-content: center;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
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
