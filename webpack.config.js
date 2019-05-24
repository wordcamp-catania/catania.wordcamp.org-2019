const path = require('path');
const webpack = require("webpack");
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
    entry: {
        style: [
            './src/base/2018-orlando.css',
            './src/main.less'
        ],
        script: [
            './src/js/main.js',
        ],
        sprite: glob.sync('./resources/icons/*.svg')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'build')
    },
    externals: /^(jquery|\$)$/i,
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', options: {
                            sourceMap: true,
                            url: false
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader', options: {
                        sourceMap: true,
                        url: false
                    }
                }, {
                    loader: 'less-loader', options: {
                        javascriptEnabled: true,
                        sourceMap: true
                    }
                }]
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                options: {
                    extract: true
                }
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.SourceMapDevToolPlugin({
            append: '\n//# sourceMappingURL=[url]',
            filename: '[file].map'
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            'window.jQuery': 'jquery'
        }),
        new SpriteLoaderPlugin()
    ]
};