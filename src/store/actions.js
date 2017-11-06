import types from './types'
import api from './api'

export default {
  /**
   * 获取GEO地理位置，调用设备定位装置api获取
   */
  [types.actions.GEOLOCATION]({ commit, dispatch }) {
    //设置状态为正常获取位置
    commit(types.mutations.STATE, true);

    /**
     * 获取位置回调函数
     * @param  {[type]}   position [description]
     * @return {Function}          [description]
     */
    function callback(position) {
      //不能正常获取位置时，使用默认位置
      position = position || {
        timestamp: +new Date(),
        coords: {
          latitude: 30.191601799999994,
          longitude: 120.1890461
        }
      }

      //获取位置对应的地理信息
      dispatch(types.actions.POSITION, {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })

      //获取位置对应的天气信息
      dispatch(types.actions.WEATHER, {
        from: 1,
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    }

    //检查能力
    if (navigator.geolocation) {
      //调用系统的api，获取位置
      navigator.geolocation.getCurrentPosition(callback, (error) => {
        console.log(error);
        callback()
      }, {
        timeout: 10 * 1000,
        enableHighAccuracy: false,
        maximumAge: 5 * 60 * 1000
      });

      navigator.geolocation.watchPosition(callback);
    } else {
      console.log('浏览器不支持定位');
      callback()
    }
  },
  /**
   * 获取地理信息
   */
  async [types.actions.POSITION]({ commit }, position) {
    commit(types.mutations.ADDRESS, await api.getCurrentPositionInfo(position));
  },
  /**
   * 获取天气信息
   */
  async [types.actions.WEATHER]({ commit }, params) {
    commit(types.mutations.WEATHER, await api.getCurrentPositionWeather(params));
  }
}
