const webpack = require("webpack");
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = ['js', 'css']
// const isProduction  = process.env.NODE_ENV === 'production'
module.exports = {
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default']
            }),
            // Ignore all locale files of moment.js
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            // new UglifyJsPlugin({
            //     uglifyOptions: {
            //         compress: {
            //             drop_debugger: true,
            //             drop_console: true
            //         }
            //     },
            //     sourceMap: false,
            //     parallel: true
            // }),
            // 配置compression-webpack-plugin压缩
            new CompressionWebpackPlugin({
                algorithm: 'gzip',
                test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
                threshold: 10240,
                minRatio: 0.8
            })
        ]
    },
    publicPath: './'
}