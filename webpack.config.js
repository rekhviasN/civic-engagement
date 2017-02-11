const webpack = require('webpack')
const path = require('path');
 
var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  }
  // ,
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       use: [
  //         'babel-loader',
  //       ],
  //     },
  //   ],
  // },
  // resolve: {
  //   modules: [
  //     path.join(__dirname, 'node_modules'),
  //   ],
  // },
};