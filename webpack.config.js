const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    // 开发模式
    mode: 'development',
    // 入口
    entry: {
        index: './app/app.js',
        // another: './app/another-module.js'
      },
    // 输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: ASSET_PATH,
        filename: '[name].[hash].js',
    },
    // 解析模块
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
                // use: ExtractTextPlugin.extract({
                //     fallback: "style-loader",
                //     use: "css-loader"
                //   })
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                loader:'url-loader',
                options:{
                    limit:10000,
                    name:'img/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader:"url-loader",
                options:{
                    limit:10000,
                    name:'fonts/[name].[ext]?[hash]'
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader',
            },
            {
                test:/\.less$/,
                use:[
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
            test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ],
    },
    // 服务器配置
    devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
        hot: true
        // contentBase: path.join(__dirname, "dist"),
    },
    // 插件配置
    plugins: [
        new CleanWebpackPlugin(['dist']),   //清除dist文件夹
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({         //主页模版文件及生成主页文件
            title: 'vue test',
            filename: 'index.html',
            template: 'app/app.html',
            // inject: 'head'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),       //热加载
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
        
        // new Ex("【name】.css"),    // 提取css
    ]
};