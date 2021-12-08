const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");

const mergedCfg = merge(commonConfig, {
  devServer: {
    port: 8080,
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
});

module.exports = mergedCfg;
// console.log(JSON.stringify(mergedCfg, undefined, 2));
