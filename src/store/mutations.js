import types from './types'

export default {
  [types.SET_ADDRESS](state, addr) {
    state.address = addr;
    state.islocating = false;
  },
  [types.SET_STATE](state, s) {
    state.islocating = s;
  },
  [types.SET_WEATHER](state, weather) {
    state.weather = weather;
  }
}
