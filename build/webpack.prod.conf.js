const webpack = require('webpack')
const config = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

config.output.filename = 'vue-hotel-datepicker.js'
config.output.libraryTarget = 'umd'
config.output.library = 'HotelDatePicker'

config.entry = path.resolve(__dirname, '../src/components/DatePicker.vue')

config.devtool = '#source-map'

config.module.rules.push({
  test: /\.css$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader",
  }),
})

config.plugins = (config.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),

  new ExtractTextPlugin({
    filename: 'vue-hotel-datepicker.min.css',
  }),

  new webpack.optimize.OccurrenceOrderPlugin(),
])

module.exports = config
