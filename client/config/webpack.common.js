const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: path.resolve(process.cwd(), "./public/index.html"),
  filename: "./index.html",
});

module.exports = {
  entry: {
    main: {
      import: path.resolve(process.cwd(), './src/index.js'),
      dependOn: ['vendors'],
    },
    vendors: ['react', 'react-dom', 'react-router-dom','lodash'],
    // vendors: ['react', 'react-dom', 'react-router-dom'],
    // tmp: ['lodash'],
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(process.cwd(), "./bundle"),
    filename: './[name]_[contenthash].js',
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