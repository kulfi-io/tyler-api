const path = require('path');
const merge = require('webpack-merge');
const baseConf = require('./base.config');

module.exports = merge(baseConf, {
    mode: 'production',
    devtool: 'source-map',
    output: {
        filename: 'tyler.api.bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
});
