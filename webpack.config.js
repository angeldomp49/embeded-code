var path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module:{
    rules:[
      {
        test: /\.js$/, 
        exclude: /node-modules/,
        use: {
          loader: 'babel-loader',
          options:{
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
          ],
          plugins:[
          '@babel/plugin-transform-flow-strip-types',
          '@babel/plugin-proposal-class-properties',
        ]
          }
        }}
    ]
  }
};