var path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname + './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
      rules: [
          {
            test: /.js$/,
            exclude:/(node_modules)/,
            // include: path.resolve(__dirname, 'src'), (If we need to apply in particular directory)
            use:{
                loader: 'babel-loader',
                options:{
                    presents: ['es2015']
                }
            }
        },
        { test: /.css/, use: ['style-loader', 'css-loader'] }
      ]
    }
}
