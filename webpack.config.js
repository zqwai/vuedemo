const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    mode: 'production',
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        filename: 'bundle.js',
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
    plugins: [
      new VueLoaderPlugin()
    ]
};