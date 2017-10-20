<template>
  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{ $route.params.username }}</h2>
    </div>
    <router-view></router-view>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" @click='test'>
        Get Started
      </a>
    </div>
    <div class="mdl-card__menu">
      <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">share</i>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'hello',
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
<style>
.demo-card-wide.mdl-card {
  width: 512px;
}

.demo-card-wide>.mdl-card__title {
  color: #fff;
  height: 176px;
  background: url('../assets/demo/welcome_card.jpg') center / cover;
}

.demo-card-wide>.mdl-card__menu {
  color: #fff;
}

</style>
