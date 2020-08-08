module.exports = {
    devServer: {
        contentBase: './dist'
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js)$/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    resolve: {
        extensions: [
            '*',
            '.js'
        ]
    }
};
