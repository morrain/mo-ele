import types from './types'

export default {
  [types.GET_WEATHER](state, getters) {
    var weather = {
      text: state.weather.now.weather,
      temperature: state.weather.now.temperature,
      weather_pic: state.weather.now.weather_pic
    }
    return weather;
  },

  [types.GET_ADDRESS](state, getters) {
    if (state.islocating) return '获取位置中...';
    return state.address.name;
  }
}
