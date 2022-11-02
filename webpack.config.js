const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'food-service.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
       use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, 
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: { 
    port: 9000,
    open: true,
  }
};
