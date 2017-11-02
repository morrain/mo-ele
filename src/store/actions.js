import axios from 'axios'
import types from './types'

export default {
  async getCurrentPositionInfo({ commit }, position) {
    let ret = await axios.get('/openapi/getCurrentPositionInfo', {
      params: position
    })
    commit(types.SET_ADDRESS, ret.data);
  },

  async getCurrentPositionWeather({ commit }, params) {
    let ret = await axios.get('openapi/getCurrentPositionWeather', {
      params: Object.assign({
        productKey: '7lvc9Ar09deccf1ea7cc56fc8d555b42c9ea2692cc0bb4a'
      }, params)
    })
    commit(types.SET_WEATHER, ret.data.result);
  }
}
