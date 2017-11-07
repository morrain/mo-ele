<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app'
}

</script>
<style src='normalize.css'></style>
<style src='./style/mo-fonts.css'></style>
<style src='mint-ui/lib/style.css'></style>
<style lang='scss'>
//引入项目图标库，使用http://iconfont.cn/  托管
[class^="mo-ele-iconfont"],
[class*="mo-ele-iconfont"] {
  font-family: "mo-ele-iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale
}

* {
  font-weight: 100
}

</style>
