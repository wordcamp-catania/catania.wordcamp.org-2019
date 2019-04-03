const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        style: './src/main.less'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', options: {
                            sourceMap: true
                        }
                    },
                    "postcss-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: 'css-loader', options: {
                        sourceMap: true
                    }
                }, {
                    loader: 'less-loader', options: {
                        javascriptEnabled: true,
                        sourceMap: true
                    }
                }]
            },
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
    ]
};