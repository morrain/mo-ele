import Vue from 'vue'

//使用vuex管理全局的状态

import Vuex from 'vuex'
Vue.use(Vuex)

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = {
  islocating: true, //当前是否正在定位
  weather: null, //当前天气
  address: null, //当前位置信息
  latitude: 0, //当前位置纬度
  longitude: 0 //当前位置经度
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});
