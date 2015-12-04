var webpack = require('webpack'),
    path = require('path'); // nodejs path 模块

/**
 * 生成webpack设置
 * @param  {object} options [环境选项]
 * @return {object} config
 */

module.exports = function webpackMake(options) {
    var DEV = !!options.DEV,  // 开发环境
        TEST = !!options.TEST,  // 测试环境
        BUILD = !!options.BUILD,  //生产环境
        config = {};

    // 入口文件
    config.entry = {
        app: path.join(__dirname, 'src/app.js')
    };

    // 输出配置
    config.output = {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js',
        publicPath:'/'
    };

    // 预设
    config.resolve = {
        alias: {
            'components': path.join(__dirname, 'src/components')
        }
    };

    // 模块
    config.module = {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    };

    // babel设置
    config.babel = {
        // enable stage-0 features, make sure to install
        // babel-presets-stage-0
        presets: ['es2015'],
        plugins: ['transform-runtime']
    };

    return config;
};
