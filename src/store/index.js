import Vue from 'vue'

//使用vuex管理全局的状态

import Vuex from 'vuex'
Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'

const state = {
  address: '获取地址中...',
  latitude: 0, //当前位置纬度
  longitude: 0 //当前位置经度
}

export default new Vuex.Store({
  state,
  actions,
  mutations
});
