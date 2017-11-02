import axios from 'axios'
import types from './types'

export default {

  async getCurrentPosition({ commit, dispatch }) {
    let ret = await getCurrentPosition()

    dispatch('getCurrentPositionInfo', {
      latitude: ret.coords.latitude,
      longitude: ret.coords.longitude
    })

    dispatch('getCurrentPositionWeather', {
      from: 1,
      lat: ret.coords.latitude,
      lng: ret.coords.longitude
    })
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

function getCurrentPosition() {
  var position = {
    timestamp: +new Date(),
    coords: {
      latitude: 30.191601799999994,
      longitude: 120.1890461
    }
  }
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        resolve(position)
      }, (error) => {
        console.log(error);
        resolve(position)
      }, {
        timeout: 10 * 1000,
        enableHighAccuracy: false,
        maximumAge: 5 * 60 * 1000
      });

      navigator.geolocation.watchPosition(function(position) {
        resolve(position)
      });
    } else {
      console.log('浏览器不支持定位')
      resolve(position)
    }
  });
}
