const path = require('path');
const merge = require('webpack-merge');
const baseConf = require('./base.config');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = merge(baseConf, {
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'tyler.api.bundle.js',
        path: path.resolve(__dirname, 'dist-dev')
    },
    // plugins: [
    //     new copyWebpackPlugin([
    //         {
    //             from: path.resolve('./emails/assets/css/*.css'),
    //             to: path.resolve(__dirname, 'dist-dev/css/[name].[ext]'),
    //             ignore: ['.*']
    //         },
    //         {
    //             from: path.resolve('./emails/assets/img/*.jpg'),
    //             to: path.resolve(__dirname, 'dist-dev/img/[name].[ext]'),
    //             ignore: ['.*']
    //         }
    //     ])
    // ]
    
});
