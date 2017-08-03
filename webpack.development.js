const Webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path')

const join = (...paths) => {
  return path.join(__dirname, ...paths)
}

module.exports = {
  context: join('src'),
  resolve: {
    extensions: [
      '.js',
      '.css'
    ],
    modules: [
      'src',
      'node_modules'
    ]
  },
  watch: true,
  devtool: '#eval-source-map',
  entry: [
    './index.js'
  ],
  output: {
    filename: 'index.js'
  },
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              singleton: true
            }
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[path][name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: join('postcss.config.js')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new Webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: true
    }),
    new Webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false
    }),
    new Webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      template: join('template.html')
    })
  ]
}
