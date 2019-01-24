const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
    mode: 'development',
    entry: {
        index: './app/app.js',
        // another: './app/another-module.js'
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: ASSET_PATH,
        filename: '[name].[hash].js',
    },
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
                test: /\.styl$/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ],
    },
    devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
        hot: true
        // contentBase: path.join(__dirname, "dist"),
	},
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'vue test',
            filename: 'index.html',
            template: 'app/app.html',
            // inject: 'head'
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH)
        }),
    ]
};