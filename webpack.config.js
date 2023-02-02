const path = require('path')
const webpack = require('webpack')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')

const devServer = {
  static: {
    directory: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    serveIndex: true
  },
  historyApiFallback: true,
  compress: true
}

const plugins = [
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env)
  }),
  new CopyPlugin({
    patterns: [
      'assets/manifest/**/*'
    ],
    options: {
      concurrency: 100
    }
  }),
  new MiniCssExtractPlugin({
    filename: 'styles/[name].css',
    chunkFilename: 'styles/[id].css'
  })
]

const configDefault = {
  context: path.join(__dirname, 'src'),
  entry: [
    './scripts/main.js',
    './styles/main.scss'
  ],
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/[name][ext]' }
      },
      {
        test: /\.(png|svg|jpe?g|webp|gif|ico)$/i,
        type: 'asset/resource',
        generator: { filename: 'assets/[name][ext]' }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        type: 'asset/resource',
        use: [
          process.env.NODE_ENV === 'development'
            ? 'style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  output: {
    clean: true,
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, 'dist/static')
  },
  target: 'web'
}

const config = {
  development: {
    mode: 'development',
    devtool: 'source-map',
    devServer,
    optimization: {},
    plugins: plugins.concat([])
  },
  staging: {
    mode: 'production',
    devtool: 'source-map',
    devServer,
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({})],
      usedExports: true
    }
  },
  production: {
    mode: 'production',
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({}), '...', new CssMinimizerPlugin()],
      usedExports: true
    },
    plugins: plugins.concat([
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      })
    ])
  }
}

module.exports = (env, argv) => ({
  ...configDefault,
  ...config[`${argv.mode}`]
})
