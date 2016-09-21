var webpack = require('webpack');

module.exports = {
  devtool: '#eval-source-map',
  entry: {
    index: './src/index.jsx'
  },
  output: {
    path: './dist',
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      loader: 'babel',
      exclude: /node_modules/,
    }, {
      test: /\.scss/,
      loaders: ['style', 'css', 'sass']
    }, {
      test: /\.(png|jpeg|jpg|gif)/,
      loader: 'url'
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    }),
    new webpack.NoErrorsPlugin()
  ]
};
