const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(process.cwd(), "./public/index.html"),
  filename: "./index.html"
});

// TODO: dynamic assign bundled js filename
module.exports = {
  entry: path.resolve(process.cwd(), "./src/index.js"),
  output: {
    path: path.resolve(process.cwd(), "./bundle"),
    filename: './[name].bundle.js',
    publicPath: '/',
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
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
        test: /\.svg$/,
        use: ["file-loader"]
      },
    ]
  },
  plugins: [htmlWebpackPlugin]
}; 