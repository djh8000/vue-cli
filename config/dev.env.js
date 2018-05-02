'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  URL: {
    api: '"http://tiku.dev.zejicert.cn/"',
    ws: '"ws://edutest.zejicert.cn:8888"',
    http: '"http://dev.mbbs.zejicert.cn/"',
    uc: '"http://dev.api.uc.zejicert.cn/"',
    uchttp: '"http://dev.uc.zejicert.cn/"',
    faceurl: '"http://source.dev.zejicert.cn/static/face/"'
  }
})
