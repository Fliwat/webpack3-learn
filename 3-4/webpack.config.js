module.exports = {
  entry: {
    app: './src/app.ts'
  },
  output: {
    filename: './dist/[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  }
}