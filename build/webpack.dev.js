const { merge } = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const webpackBase = require('./webpack.base')

module.exports = merge(webpackBase, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        port: '2000',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            // {
            //     test:
            // }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})