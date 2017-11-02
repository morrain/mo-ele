import types from './types'

export default {
  [types.SET_ADDRESS](state, addr) {
    state.address = addr;
  },
  [types.SET_WEATHER](state, weather) {
    state.weather = weather;
  }
}
