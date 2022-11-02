const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const HandlebarsPlugin = require("handlebars-webpack-plugin");

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
        test: /\.css$/i,
       use: ["style-loader", "css-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }, 
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[path][name].[ext]',
              limit: 8192,
              esModule: false,
            },
          },
          'img-loader',
        ],
      },
      
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,        
      //   use: 'raw-loader',
      // },
      
      {
        test: /\.hbs$/,
        use: 'handlebars-loader',
      },
    
      
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' }),
    // new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
   
    
  ],
  devServer: { 
    port: 9000,
    open: true,
  }
};
