var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        app: [
            './src/app.js'
        ],
    },
    devtool: 'eval',
    output: {
        path: path.resolve('./prod'),
        library: '[name]',
        filename: '[name].js',
    },

    //Här ställer man in vilka filtyper webpack ska göra något med. Loaders installeras via npm
    //och används här. T.ex. bildfiler som inkluderas i jsx filerna med import lägger webpack i images
    //katalogen. Sass filer compileras till css och läggs in inline.
    module: {
        loaders: [{
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /(globalize|cldr-data)/,
            loader: 'imports?define=>false'
        }, {
            test: /\.(scss|sass)$/,
            loader: 'style!css!sass'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?name=/Assets/calendar/images/[name].[ext]',
                'image?optimizationLevel=7&interlaced=false']
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader?limit=10000&minetype=application/font-woff&name=[name].[ext]'
        }, {
            test: /\.(ttf|eot|svg|config)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader?name=[name].[ext]'
        }]
    },
    //Kolla på dessa filtyper (osäker på vad denna gör :) )
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    node: {
        fs: 'empty'
    },
    //Ladda plugins till webpack
    plugins: [
        // removes a lot of debugging code in React
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        // keeps hashes consistent between compilations
        new webpack.optimize.OccurenceOrderPlugin(),
        // minifies your code
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.NoErrorsPlugin(),
        new webpack.IgnorePlugin(/vertx/),
        new HtmlWebpackPlugin({
            title: 'Sogeti TV',
        })
    ]
};
