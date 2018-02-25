var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

var PROD = (process.env.NODE_ENV === 'production')

var clientPlugins = [
    new webpack.DefinePlugin({
        __isBrowser__: "true"
    })
];

if(PROD) {
    Array.prototype.push.apply(clientPlugins, [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            include: /.js$/,
            minimize: true,
            keep_classnames: true,
            keep_fnames: true,
        }),
    ]);
}


var browserConfig = {
  entry: './src/browser/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'client.js',
    publicPath: '/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: clientPlugins,
}

var serverConfig = {
  entry: './src/server/index.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: __dirname,
    filename: 'server.js',
    publicPath: '/'
  },
  module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      use: 'babel-loader'
    },
  ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      __isBrowser__: "false"
    })
  ]
}

module.exports = [browserConfig, serverConfig]