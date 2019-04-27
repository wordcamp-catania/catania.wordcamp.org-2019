const path = require('path');
const webpack = require("webpack");
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

module.exports = {
    entry: {
        style: [
            './src/base/2018-orlando.css',
            './src/main.less'
        ]
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
        new SVGSpritemapPlugin('./resources/icons/*.svg', {
            output: {
                svg: {
                    // Disable `width` and `height` attributes on the root SVG element
                    // as these will skew the sprites when using the <view> via fragment identifiers
                    sizes: false
                },
                svg4everybody: true
            },
            sprite: {
                generate: {
                    // Generate <use> tags within the spritemap as the <view> tag will use this
                    use: true,

                    // Generate <view> tags within the svg to use in css via fragment identifier url
                    // and add -fragment suffix for the identifier to prevent naming colissions with the symbol identifier
                    view: '-fragment',

                    // Generate <symbol> tags within the SVG to use in HTML via <use> tag
                    symbol: true
                },
            },
            styles: {
                // Specifiy that we want to use URLs with fragment identifiers in a styles file as well
                format: 'fragment'
            }
        })
    ]
};