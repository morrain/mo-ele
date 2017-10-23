<template>
  <md-card-content>
    User Post for {{username}}
    <md-spinner md-indeterminate class="md-warn" v-if="loading"></md-spinner>
    <md-table v-if="citys">
      <md-table-header>
        <md-table-row>
          <md-table-head>Name</md-table-head>
          <md-table-head md-numeric>Id</md-table-head>
          <md-table-head>Abbr</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="city in citys">
          <md-table-cell>{{city.name}}</md-table-cell>
          <md-table-cell>{{city.id}}</md-table-cell>
          <md-table-cell>{{city.abbr}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-card-content>
</template>
<script>
export default {

  name: 'UserPost',
  props: ['username'],

  data() {
    return {
      loading: false,
      citys: null
    };
  },

  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.getfriends();
  },

  watch: {
    '$route': 'getfriends'
  },

  methods: {
    getfriends() {
      this.loading = true;
      this.$axios.get('/api/location/citys', { name: this.username }).then(res => {
        this.loading = false;
        this.citys = res.data.result;
      });
    }
  }
};

</script>
<style lang="css" scoped>


</style>
