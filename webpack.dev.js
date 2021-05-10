const { merge } = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //Extract CSS into separate files

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "bundle"),
    port: 8800,
    hot: true,
    open: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
});
