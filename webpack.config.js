const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.js'
  },
  plugins: [
    // Copy our app's index.html to the build folder.
    new CopyWebpackPlugin([
      { from: './app/index.html', to: "index.html" },
      { from: './app/controllers', to: "controllers" },
      { from: './app/partials', to: "partials" },
      { from: './app/javascripts', to: "javascripts" },

    ])
  ],
  module: {
    loaders: [
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
      { test: /\.json$/, use: 'json-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-runtime']
        }
      },
      {
          test: /\.(eot|ttf|woff|woff2)$/,
          loader: 'file-loader?name=fonts/[name].[ext]'
      },
      {
          test: /\.svg$/,
          loader: 'file-loader?name=images/[name].[ext]'
      },
    ]
  }
}