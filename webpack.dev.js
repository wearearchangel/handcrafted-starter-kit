const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'source-map',
	devServer: {
		publicPath: './static/scripts/',
		contentBase: './dist',
		watchContentBase: true,
		compress: true
	}
});