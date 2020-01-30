const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const path = require('path');

module.exports = (env) => {
    console.log(env.mode);
    return {
        devtool: 'source-map',
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        mode: env.mode,
        //Enttry point of the app
        entry: {
            main: path.join(__dirname, 'src/main.ts'),
        },
        output: {
            filename: 'assets/js/app.js',
        },
        module: {
            rules: [
                {
                    test: /[\/\\]@angular[\/\\]core[\/\\].+\.js$/,
                    parser: { system: true },
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.ts(x?)$/,
                    //  use: ["awesome-typescript-loader", 'angular2-template-loader'],
                    use: ['@ngtools/webpack', 'awesome-typescript-loader'],
                    exclude: /node_modules/,
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true,
                            },
                        },
                    ],
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                name: '[name].[contenthash].[ext]',
                                outputPath: 'assets/img/',
                                //   publicPath: './assets/',
                            },
                        },
                    ],
                },
                {
                    test: /\.html$/,
                    use: [
                        {
                            loader: 'html-loader',
                            options: { minimize: false },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new webpack.ProgressPlugin(),
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'wpng app',
                template: './index.html',
                //      inject: "head"
            }),
            new MiniCssExtractPlugin({
                filename: 'assets/css/[name].css',
                chunkFilename: '[name].css',
            }),
            new AngularCompilerPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: './src/app/app.module#AppModule',
                sourceMap: true,
            }),
        ],
    };
};
