const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Try the environment variable, otherwise use root
const NODE_ENV = process.env.NODE_ENV;
const PUBLIC_PATH = process.env.PUBLIC_PATH || "/";

const devMode = NODE_ENV === "development";
const staticPath = path.resolve(__dirname, devMode ? ".cache" : "dist");
const staticFilename = devMode ? "[name]" : "[name]-[contenthash]";
const staticChunkFilename = `chunk-${devMode ? "[id]" : "[id]-[contenthash]"}`;

const plugins = [
  // new webpack.DefinePlugin({
  //   "process.env": JSON.stringify(process.env)
  // }),
  new CopyPlugin({
    patterns: [
      {
        from: "../public",
        globOptions: {
          ignore: ["**/*.html"]
        }
      }
    ],
    options: {
      concurrency: 100
    }
  }),
  new MiniCssExtractPlugin({
    filename: `styles/${staticFilename}.css`,
    chunkFilename: `styles/${staticChunkFilename}.css`
  }),
  new HtmlWebpackPlugin({
    compress: true,
    filename: `index.html`,
    template: "./index.html.js"
  })
];

const Terser = () => new TerserPlugin({
  parallel: true,
  terserOptions: {
    format: {
      comments: false
    },
    mangle: false,
    keep_classnames: true,
    keep_fnames: true,
    // browser fixes
    ie8: true,
    safari10: true
  },
  extractComments: false
});

const entryPoints = [
  "./scripts/main.js",
  "./styles/main.scss"
];

const configDefault = {
  context: path.join(__dirname, "src"),
  entry: entryPoints,
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: { filename: `fonts/${staticFilename}[ext]` }
      },
      {
        test: /\.(png|svg|jpe?g|webp|gif|ico)$/i,
        type: "asset/resource",
        generator: { filename: `images/${staticFilename}[ext]` }
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        generator: { filename: `styles/${staticFilename}[ext]` },
        use: [
          process.env.NODE_ENV === "development"
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: Boolean(devMode),
    minimizer: devMode ? [] : [Terser(), new CssMinimizerPlugin()],
    usedExports: devMode
  },
  output: {
    filename: `scripts/${staticFilename}.js`,
    chunkFilename: `scripts/${staticChunkFilename}.js`,
    path: staticPath,
    publicPath: PUBLIC_PATH
  },
  watch: devMode && (watch || serve)
  target: "browserslist"
};

const config = {
  development: {
    mode: "development",
    devtool: "cheap-module-source-map",
    plugins: plugins.concat([])
  },
  production: {
    mode: "production",
    plugins: plugins.concat([
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true
      })
    ])
  }
};

module.exports = {
  ...configDefault,
  ...config[NODE_ENV || "production"]
};
