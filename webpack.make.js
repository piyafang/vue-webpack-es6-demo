var webpack = require('webpack'),
    path = require('path');

module.exports = function webpackMake(options) {
    var DEV = !!options.DEV,
        TEST = !!options.DEV,
        BUILD = !!options.DEV,
        config = {};

    config.entry = {
        app: path.join(__dirname, 'src/app.js')
    };

    config.output = {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    };

    config.resolve = {
        alias: {
            'components': path.join(__dirname, 'src/components')
        }
    };

    config.module = {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                // edit this for additional asset file types
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=[name].[ext]?[hash]'
            }
        ]
    };

    config.babel = {
        // enable stage-0 features, make sure to install
        // babel-presets-stage-0
        presets: ['es2015'],
        plugins: ['transform-runtime']
    };

    return config;
};