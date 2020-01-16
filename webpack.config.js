module.exports = {
    entry: __dirname + '/app/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: false,
        contentBase: "./dist",
    },
}