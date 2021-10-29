const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(process.cwd(), "./public/index.html"),
  filename: "./index.html"
});

module.exports = {
  entry: path.resolve(process.cwd(), "./src/index.js"),
  devtool: "source-map",
  output: {
    path: path.resolve(process.cwd(), "./bundle"),
    filename: './bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        resolve: { extensions: [".js", ".jsx"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.svg$/,
        use: ["file-loader"]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
}; 