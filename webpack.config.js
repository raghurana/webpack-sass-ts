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
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
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
        template: './src/index.html'  
    }), 
    
    extractPlugin
  ]
};

