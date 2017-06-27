module.exports = {
    entry: ['./app/index.js'],
    output: {
        publicPath: 'public/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.js/, loaders: ['babel-loader']},
            {test: /\.(sass|scss)/, loaders: ['style-loader', 'css-loader', 'sass-loader']}
        ]
    },
    devServer: {
        historyApiFallback: true
    }
}
