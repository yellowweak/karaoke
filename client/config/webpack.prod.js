const commonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css",
});

module.exports = merge(commonConfig, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    // bundleAnalyzerPlugin,
    miniCssExtractPlugin
  ]
});
