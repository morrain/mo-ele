import types from './types'

export default {
  [types.GET_WEATHER](state, getters) {
    var weather = {
      text: '晴天',
      temperature: 18,
      weather_pic: ''
    }

    if (state.weather && state.weather.now) {
      weather.text = state.weather.now.weather
      weather.temperature = state.weather.now.temperature
      weather.weather_pic = state.weather.now.weather_pic
    }

    return weather;
  },

  [types.GET_ADDRESS](state, getters) {
    if (state.address) return state.address.name;

    return '获取位置中...'
  }
}
