const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    content: './src/content.js',
    background: './src/background.js',
    // popup: './src/popup.html',
  }, 
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/src/'),
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'),'.js', '.json'],
        fallback: {
    //   "dns": false,
    //   "net": require.resolve('net-browserify'),
    //   "tls": false,
    //   "fs": false,
    //   "util": require.resolve("util/"),
    //   "stream": require.resolve("stream-browserify"),
    //   "os": require.resolve("os-browserify/browser"),
    //   "buffer": require.resolve("buffer/"),
    //   "url": require.resolve("url/"),
      // "path": require.resolve("path-browserify"),
    //   "zlib": false,
    //   "http": false,
    //   "https": false,
    //   // "querystring": require.resolve("querystring-es3"),
    //   "child_process": false,
    //   // "async_hooks": false, 
    //   // "crypto": require.resolve("crypto-browserify"), //if you want to use this module also don't forget npm i crypto-browserify 
    } 
  },
  
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './*.json', to: '../[name][ext]' },
        { from: './icons', to: '../icons/[name][ext]' },
        { from: './build', to: '../build' },
        { from: './src/popup.html', to: '../src' },
      ]
    }),
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify("development"),
    // })
    new webpack.DefinePlugin({
      process: {env: {}}
    }),
    
  ]

};


// client id : 086dd8f9-7cc7-4a8a-9266-f1746776918a