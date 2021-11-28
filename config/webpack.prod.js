const commonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const bundleAnalyzerPlugin = new BundleAnalyzerPlugin({
  openAnalyzer: false,
});

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name]_[contenthash].css",
  chunkFilename: "[id].css",
});

module.exports = merge(commonConfig, {
  mode: "production",
  devServer:{
    port: 5000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      }
    ],
  },
  optimization: {
    // runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor0: {
          test: /[\\/]node_modules[\\/]react|react-dom|react-router-dom[\\/]/,
          name: 'vendor_stuff',
          chunks: 'all',
          maxSize: 204800,
        },
      },
    },
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers
      // (i.e. `terser-webpack-plugin`)
      // (only works in optimization.minimizer)
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  performance: {
    hints: false
  },
  plugins: [
    // bundleAnalyzerPlugin,
    miniCssExtractPlugin,
  ],
});
