var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: isProduction ?
      config.build.productionSourceMap : config.dev.cssSourceMap,
    extract: isProduction
  }),
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  },
  postcss: [require('autoprefixer')(), require('postcss-px-to-viewport')({
    viewportWidth: 750, //根据视觉稿设置屏幕宽高 750px 是iphone 6 的尺寸。https://www.w3cplus.com/css/vw-for-layout.html
    viewportHeight: 1334
  })]
}
