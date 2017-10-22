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
<style>

</style>
