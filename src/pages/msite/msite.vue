<template>
  <div id="msite">
    <header>
      <span>Vue.js PWA</span>
      <router-link to="/hello/abc/profile">abc</router-link>
      <router-link to="/hello/efg/post">efg</router-link>
      <el-input icon="mo-eleme" />
    </header>
    <main>
    </main>
    <footer-guide></footer-guide>
  </div>
</template>
<script>
import footerGuide from '@/components/footerGuide'

export default {

  name: 'msite',

  components: {
    footerGuide
  },

  data() {
    return {

    };
  }
};

</script>
<style lang="css" scoped>


</style>
