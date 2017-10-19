const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const paths = {
    build: path.resolve(__dirname, 'build'),
    index: path.join(path.resolve(__dirname, 'src'), 'app.js')
};

module.exports = {
    entry: paths.index,
    devtool: 'hidden-source-map',
    output: {
        filename: 'bundle.js',
        path: paths.build
    },
    module: {
        rules: [
            { // js, es6 => es5
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader'
                }]
            },
            { // css, postCss => css
                test: /\.styl|.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                sourceMap: true,
                                ctx:  { modules: true, package: 'spa' }
                            },
                        },
                        'postcss-loader',
                    ],
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']), // очистка директории
        new HtmlWebpackPlugin({ // штука, чтобы присрать мой bundle.js в index.html
            template: './src/index.html',
            title: 'Development',
            inject: 'body'
        }),
        new ExtractTextPlugin('[name].bundle.css'), // штука, чтобы css не присерался инлайном в html
    	new webpack.optimize.UglifyJsPlugin({ // шакалю js
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            "PRODUCTION": true,
            "process.env": {
                NODE_ENV: JSON.stringify("production"), // вместо set NODE_ENV=production
                PLATFORM_ENV: JSON.stringify("web")
            }
        })
    ]
};
