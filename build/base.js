const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

let webpackConfig = {
  target: 'web',
  profile: true,
  entry: {
    timeList: path.join(__dirname, '../src/business/index.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.vue', '.js', '.scss', '.css', '.html'],
    alias: {
      vue$: 'vue/dist/vue.common.js',
      jquery: path.resolve(__dirname, '../node_modules/jquery/src/jquery.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
         loader: 'babel-loader',
          options: {
            plugins: ['syntax-dynamic-import']
          }
        }

      },
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                use: 'css-loader!postcss-loader',
                fallback: 'vue-style-loader'
                // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
              }),
              scss: ExtractTextPlugin.extract({
                use: 'css-loader!postcss-loader!sass-loader?sourceMap',
                fallback: 'vue-style-loader'
              })
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader!postcss-loader!sass-loader?sourceMap',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: 'html-loader'
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        use: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: './images/[name].[ext]'
          }
        }
      },
      {
        test: /\.woff|\.woff2|\.svg|\.eot|\.ttf/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 2048,
            name: './fonts/[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../dist/index.html'),
      // favicon: path.join(__dirname, '../logo.png'),
      template: path.join(__dirname, '../src/business/timelist.html'),
      chunks: ['vendor', 'timeList'],
      inject: 'body',
      chunksSortMode: 'manual',
      hash: true
    }),
    new ExtractTextPlugin('[name].css')
  ]
}

module.exports = webpackConfig
