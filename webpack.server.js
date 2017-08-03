#!/usr/bin/env node

const WebpackDevServer = require('webpack-dev-server')

const webpack = require('webpack')
const webpackConfig = require('./webpack.development')

const { identity } = require('ramda')

const server = new WebpackDevServer(webpack(webpackConfig), {
  hot: true,
  inline: true,
  noInfo: true,
  stats: {
    colors: true,
    stats: 'errors-only',
    chunks: false
  },
  headers: {
    'Access-Control-Allow-Origin': '*'
  },
  publicPath: '/',
  proxy: {
    '/api/**': {
      target: 'http://www.recipepuppy.com',
      secure: false,
      changeOrigin: true
    }
  }
})

server.listen(4000, '0.0.0.0', identity)
