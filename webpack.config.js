const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        static: "./dist"
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname,'public/index.html')
    })],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                }
            }
        ]
    },
    output: {
        filename: "[name].bb.js",
        path: path.resolve(__dirname, 'dist'),
        clean: true
    }
}