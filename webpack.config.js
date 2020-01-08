module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
      rules: [
        { test: /.css/, use: ['style-loader', 'css-loader'] }
      ]
    }
}
