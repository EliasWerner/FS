const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const isDev = process.env.NODE_ENV === 'development';
const isProd = process.env.NODE_ENV === 'production';

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const config = {
    mode: isDev ? 'development' : 'production',
    entry: './server/client.tsx',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
   
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json']
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './server/views/client.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/assets'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new CleanWebpackPlugin(),
    ],

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },

    devServer: {
        port: 4200,
        hot: isDev
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eof)$/,
                use: ['file-loader']
            },
            {
                test: /\.xml$/,
                use: ['xml-loader']
            },
            {
                test: /\.(ts|tsx)$/,
                use: [
                  {
                    loader: 'babel-loader',
                    options: {
                      babelrc: true,
                      plugins: ['react-hot-loader/babel'],
                    },
                  },
                  {
                    loader: 'ts-loader',
                    options: {
                      compilerOptions: {
                        module: 'esnext',
                        target: 'esnext',
                      },
                    },
                  },
                ],
              },
        ],
    }
};

module.exports = config;