const path = require('path');
const webpack = require('webpack');
const providePlugins = new webpack.ProvidePlugin({
  // $: 'jquery',
  // jQuery: 'jquery'
});

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets/scripts'),
  },
  devtool: 'source-map',
  plugins: [providePlugins],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};