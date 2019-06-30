const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  resolve: {
    alias: {
      '@Services': path.resolve(__dirname, 'src/Services/'),
      '@Models': path.resolve(__dirname, 'src/Models/'),
      '@Controllers': path.resolve(__dirname, 'src/Controllers/'),
      '@config': path.resolve(__dirname, 'src/config/'),
      '@Utils': path.resolve(__dirname, 'src/Utils/'),
      '@Validations': path.resolve(__dirname, 'src/Validations/'),
      '@Types': path.resolve(__dirname, 'src/Types/'),
    },
    extensions: [
      '.js',
      '.json',
      '.ts',
      '.tsx'
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
  mode: 'development',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader'
          }
        ],
      }
    ]
  }
};