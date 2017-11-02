import axios from 'axios'
import types from './types'

export default {
  async getCurrentPositionInfo({ commit }, position) {
    let a = await axios.get('/openapi/getCurrentPositionInfo', {
      params: position
    })
    commit(types.SET_ADDR_TITLE, a.data.name);
    console.log(a);
  }
}
