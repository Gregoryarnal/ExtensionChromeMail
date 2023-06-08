const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    content: './src/content.js',
    background: './src/background.js',
    // manifest: './manifest.json',
    // icons: './icons/*'
  },  // Chemin du fichier d'entrée de votre extension
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/src/'),
    clean: true,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'),'.js', '.json']
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
        { from: './icons', to: '../icons/[name][ext]' }
      ]
    })
  ]

};
