'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT:{
    // lunbo: 'http://127.0.0.1:8990/static/data/' // 本地接口配置
  // }
})
