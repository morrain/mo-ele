import axios from 'axios'
import types from './types'

export default {

  getCurrentPosition({ commit, dispatch }) {
    commit(types.SET_STATE, true);
    getCurrentPosition(dispatch)
  },
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

function getCurrentPosition(dispatch) {
  var position = {
    timestamp: +new Date(),
    coords: {
      latitude: 30.191601799999994,
      longitude: 120.1890461
    }
  }

  function callback(position) {
    dispatch('getCurrentPositionInfo', {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    })

    dispatch('getCurrentPositionWeather', {
      from: 1,
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
  }
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(callback, (error) => {
        console.log(error);
        callback(position)
      }, {
        timeout: 10 * 1000,
        enableHighAccuracy: false,
        maximumAge: 5 * 60 * 1000
      });

      navigator.geolocation.watchPosition(callback);
    } else {
      console.log('浏览器不支持定位')
      callback(position)
    }
  });
}
