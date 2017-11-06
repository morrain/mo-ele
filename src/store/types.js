/**
 * 命名常量
 */

export default {
  /**
   * 所有getter的名称
   */
  getters: {
    ADDRESS: 'getAddress',
    WEATHER: 'getWeather'
  },
  /**
   * 所有mutations的名称
   */
  mutations: {
    ADDRESS: 'setAddress',
    WEATHER: 'setWeather',
    STATE: 'setState'
  },
  /**
   * 所有actions的名称
   */
  actions: {
    POSITION: 'doGetPosition',
    WEATHER: 'doGetWeather',
    GEOLOCATION: 'doGetGeoPosition'
  }
}
