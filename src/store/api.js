/**
 * 封装系统所有的接口
 */

import axios from 'axios'
import _ from 'lodash'

export default {
  async getHotWords(params) {
    return (await axios.get('/openapi/ele/getHotWords', {
      params: params
    })).data;
  },
  /**
   * [根据地理位置和关键字获取附近的店]
   * @param  {Object} params 参数
   * @param {Number} [params.offset] [偏移]
   * @param {Number} [params.limit] [查询条数]
   * @param {String} [params.keyword] [关键字]
   * @param {Number} [params.longitude] [经纬度]
   * @param {Number} [params.latitude] [经纬度]
   * @return Promise result
   */
  async getNearby(params) {
    var ret = await axios.get('/openapi/ele/getNearby', {
      params: params
    });

    return ret.data;
  },
  /**
   * 获取当前经纬度的位置信息
   * @param  {[type]} params [description]
   * @param {Number} [params.longitude] [description]
   * @param {Nubmer} [params.latitude] [description]
   * @return Promise result
   */
  async getCurrentPositionInfo(params) {
    let ret = await axios.get('/openapi/ele/getCurrentPositionInfo', {
      params: params
    });

    return ret.data;
  },

  /**
   * 获取当前经度的天气信息
   * @param  {[type]} params [description]
   * @param {Number} [params.productKey] [使用eolinker的接口，这里是识别id]
   * @param {Number} [params.from] [eolinker要求的参数]
   * @param {Number} [params.lat] [纬度]
   * @param {Number} [params.lng] [经度]
   * @return {[type]}        [description]
   */
  async getCurrentPositionWeather(params) {
    let ret = await axios.get('/openapi/eolinker/getCurrentPositionWeather', {
      params: _.assign({
        productKey: '7lvc9Ar09deccf1ea7cc56fc8d555b42c9ea2692cc0bb4a'
      }, params)
    })

    return ret.data.result
  }
}
