var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require("vue-loader");

var plugins = [
    //压缩js
    //new webpack.optimize.UglifyJsPlugin({minimize: true}),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin("style.css", {
        allChunks: true
    }),
    // 使用 ProvidePlugin 加载使用率高的依赖库
    new webpack.ProvidePlugin({
        $: 'webpack-zepto'
    })
];
module.exports = {
    entry : './src/main.js',
    output : {
        path : './build',
        publicPath : 'build/',
        filename : 'build.js',
        chunkFilename: '[id].build.[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue',
            },
            {
                test: /\.css$/,
                //loader : "style!css"
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            // 转化ES6 语法
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                // "include" is commonly used to match the directories
                /*include: [
                 path.resolve(__dirname, "static/js"),
                 ],*/
            },
        ]
    },
    vue: {
        css: ExtractTextPlugin.extract("css"),
    },
    plugins: plugins
};