import types from './types'

export default {
  [types.mutations.ADDRESS](state, addr) {
    state.address = addr;
    state.islocating = false;
  },
  [types.mutations.STATE](state, s) {
    state.islocating = s;
  },
  [types.mutations.WEATHER](state, weather) {
    state.weather = weather;
  }
}
