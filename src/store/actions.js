import axios from 'axios'

export default {
  async getCurrentPositionInfo({ commit }, position) {
    let a = await axios.get('/restapi/getCurrentPositionInfo', {
      params: position
    })
    commit('setAddress', a.data.name);
    console.log(a);
  }
}
