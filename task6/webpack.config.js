const webpack = require('webpack');

module.exports = {
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true
    },
    entry: './src/index.js',
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.(js|jsx)$/,
                use: ['babel-loader']
            }
        ]
    },
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [
            '*',
            '.js',
            '.jsx'
        ]
    }
};
