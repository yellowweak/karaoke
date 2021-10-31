const commonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const bundleAnalyzerPlugin = new BundleAnalyzerPlugin();


const mergedCfg = merge(commonConfig, {
  mode: "development",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  // plugins: [bundleAnalyzerPlugin]
});

module.exports = mergedCfg;
// console.log(JSON.stringify(mergedCfg, undefined, 2));