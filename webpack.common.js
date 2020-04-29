const path = require('path');
const webpack = require('webpack');

const providePlugins = new webpack.ProvidePlugin({
	// $: 'jquery',
	// jQuery: 'jquery'
});

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist/static/scripts/')
	},
	plugins: [providePlugins]
};