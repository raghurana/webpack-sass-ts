const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'site.css'
});

module.exports = {

  entry: './scripts/index.ts',

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
 
  output: {
    filename: 'app-bundle.js',
    path: path.resolve(__dirname, 'dist')    
  }, 

  devServer: {    
    contentBase: '.',
    watchContentBase: true
  },

  plugins: [

    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
        title: 'Custom template',        
        template: 'index.html'  
    }), 
    
    extractPlugin
  ]
};

