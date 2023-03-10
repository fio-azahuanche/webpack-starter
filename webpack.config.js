const HtmlWebpack = require('html-webpack-plugin');
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    mode: 'development',

    output:{
        clean:true
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader, "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                use: 'file-loader',
            }
        ]
    },

    optimization: {

    },

    plugins: [
        new HtmlWebpack({
            title:'Mi Webpack App',
            //filename: 'index.html',
            template: './src/index.html'
        }),
        new MiniCssExtract({
            //* fullhash crea un nuevo hash con cada cambio y 
            //* ayuda a que no mantenga en cache el archivo
            //filename: '[name].[fullhash].css',
            filename: '[name].css',
            ignoreOrder: false
        }),
        new CopyPlugin({
            patterns: [
              { from: "src/assets/", to: "assets/" },
            ],
          }),
    ],

}