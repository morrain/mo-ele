<template>
  <md-card md-with-hover>
    <md-card-header>
      <md-avatar>
        <img src="../assets/avatar.png" alt="People">
      </md-avatar>
      <div class="md-title">{{ username }}</div>
      <div class="md-subhead">Subtitle here</div>
    </md-card-header>
    <md-card-media>
      <img src="../assets/card-image-1.jpg" alt="People">
    </md-card-media>
    <router-view></router-view>
    <md-card-actions>
      <md-button>Action</md-button>
      <md-button>Action</md-button>
    </md-card-actions>
  </md-card>
</template>
<script>
export default {
  name: 'hello',
  props: ['username'],
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('to:', to, 'from:', from);
    next();
  },
  methods: {
    test: function(event) {
      this.$axios.post('/api/login').then(res => { console.log(res) });
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>

/*https://www.w3cplus.com/css/vw-for-layout.html*/
/*绘制上下边框，通过border-image参数控制绘制上或者下 或者上下边框*/
@svg 1px-border-top-bottom {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}

/*绘制左右边框，通过border-image参数控制绘制左或者右 或者左右边框*/
@svg 1px-border-left-right {
  width: 2px;
  @rect {
    fill: var(--color, black);
    width: 50%;
    height: 100%;
  }
}

.md-subhead {
  border: 1px solid transparent;
  border-image: svg(1px-border-top-bottom param(--color red)) 2 0 2 0 stretch; //上下边框
  border-image: svg(1px-border-top-bottom param(--color red)) 2 0 0 0 stretch; //上边框
  border-image: svg(1px-border-top-bottom param(--color red)) 0 0 2 0 stretch; //下边框
  border-image: svg(1px-border-left-right param(--color red)) 0 2 0 2 stretch; //左右边框
  border-image: svg(1px-border-left-right param(--color red)) 0 0 0 2 stretch; //左边框
  border-image: svg(1px-border-left-right param(--color red)) 0 2 0 0 stretch; //右边框
}

</style>
