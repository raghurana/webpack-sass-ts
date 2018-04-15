const path                = require('path');
const HtmlWebpackPlugin   = require('html-webpack-plugin');
const CleanWebpackPlugin  = require('clean-webpack-plugin');
const ExtractTextPlugin   = require('extract-text-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'site.css'
});

module.exports = {

  entry: './src/scripts/index.ts',

  module: {
    rules: [
      {
        test: /\.ts?$/,
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
    filename: 'site-bundle.js',
    path: path.resolve(__dirname, 'dist')    
  }, 

  devServer: {    
    contentBase: './src',
    watchContentBase: true
  },

  plugins: [

    new CleanWebpackPlugin(['dist']),

    new HtmlWebpackPlugin({
        title: 'Template for webpack sass and Typescript',        
        template: './src/index.html'  
    }), 
    
    extractPlugin
  ]
};

