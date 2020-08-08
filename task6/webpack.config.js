module.exports = {
    devServer: {
        contentBase: './dist'
    },
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist',
        publicPath: '/'
    }
};
