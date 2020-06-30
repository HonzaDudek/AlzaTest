/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path'),
  glob = require('glob'),
  miniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction =
  typeof NODE_ENV !== 'undefined' && NODE_ENV === 'production';
const mode = isProduction ? 'production' : 'development';
const devtool = isProduction ? false : 'inline-source-map';

// Webpack clean plugin, which deletes all files in build folder before build
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const cleanOptions = {
  root: __dirname,
  verbose: true,
  dry: false,
  exclude: [],
};

module.exports = [
  {
    // This is getting entry points from /React/modules/ folder and compiling modules for each page
    entry: () => {
      const entries = glob
        .sync('./src/modules/*.{ts,tsx}')
        .reduce(function(obj, el) {
          obj[path.parse(el).name] = el;
          return obj;
        }, {});
      delete entries['base.module'];
      return entries;
    },
    target: 'web',
    mode,
    devtool: devtool,
    plugins: [
      new miniCssExtractPlugin({
        filename: isProduction ? '[name].[hash].css' : '[name].css',
        chunkFilename: isProduction ? '[id].[hash].css' : '[id].css',
      }),
      new CleanWebpackPlugin(cleanOptions),
      // new BundleAnalyzerPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            // babel-loader: converts javascript (es6) to javascript (es5)
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      targets: {
                        ie: 11,
                      },
                      useBuiltIns: 'usage',
                      debug: false,
                      corejs: 3,
                    },
                  ],
                ],
              },
            },
          ],
        },
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            !isProduction ? 'style-loader' : miniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: !isProduction,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction,
              },
            },
          ],
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          loader: [
            !isProduction ? 'style-loader' : miniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: !isProduction,
              },
            },
          ],
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader: 'svg-url-loader',
              options: {
                limit: 10000,
              },
            },
          ],
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.scss'],
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, '../built-webpack/React/'),
      library: ['React', '[name]'],
      libraryTarget: 'umd',
      jsonpFunction: 'webpackJsonpReact',
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            name: 'common',
            chunks: 'all',
            minChunks: 2,
            reuseExistingChunk: true,
            filename: 'react.[name].js',
          },
        },
      },
    },
  },
];
