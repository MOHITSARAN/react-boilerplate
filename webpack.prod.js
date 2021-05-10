const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackCleanupPlugin = require("webpack-cleanup-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
      },
    ],
  },
  plugins: [
    new WebpackCleanupPlugin(), //Remove/clean build folders
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
});
