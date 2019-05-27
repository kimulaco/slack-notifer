const path = require('path')

module.exports = {
  mode: 'production',
  target: 'node',
  entry: './src/slack-notifer.ts',
  output: {
    library: 'SlackNotifer',
    libraryTarget: 'commonjs2',
    filename: 'slack-notifer.js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ts-loader',
          'eslint-loader'
        ],
        exclude: /(node_modules|dist|test)/
      }
    ]
  },
  resolve: {
    extensions: [
      '.ts',
      '.js'
    ]
  }
}
