const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const devServer = {
	proxy: {
		'/handcrafted': '?'
	},
	static: {
		directory: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		serveIndex: true,
		watch: true
	},
	historyApiFallback: true
};

const config = {
	default: {
		mode: 'none',
		entry: [
			'./src/scripts/main.js',
			'./src/styles/main.scss'
		],
		plugins: [],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: '/node_modules/',
					use: []
				},
				{
					test: /\.scss$/,
					type: 'asset/resource',
					generator: {
						filename: 'static/styles/[name].css'
					},
					use: ['sass-loader']
				}
			]
		},
		output: {
			filename: 'static/scripts/[name].js',
			path: path.resolve(__dirname, 'dist')
		},
		target: 'web'
	},
	development: {
		mode: 'development',
		devtool: 'source-map',
		devServer: devServer
	},
	staging: {
		mode: 'production',
		devtool: 'source-map',
		devServer: devServer,
		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin({})]
		}
	},
	production: {
		mode: 'production',
		optimization: {
			minimize: true,
			minimizer: [new TerserPlugin({})]
		}
	}
};

module.exports = (env, argv) => ({...config.default, ...config[`${argv.mode}`]});