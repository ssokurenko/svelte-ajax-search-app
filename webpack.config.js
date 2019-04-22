const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const prod = mode === 'production';

module.exports = {
	entry: {
		app: ['./src/main.js']
	},
	resolve: {
		extensions: ['.js', '.html']
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		chunkFilename: '[name].[id].js'
	},
	module: {
		rules: [
			{
				test: /\.html$/,
				exclude: /node_modules/,
				use: {
					loader: 'svelte-loader',
					options: {
						skipIntroByDefault: true,
						nestedTransitions: true,
						emitCss: true,
						hotReload: true
					}
				}
			},
			{
				test: /\.css$/,
				use: [
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
				]
			},
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: 'svelte-loader'
      },
      {
        test: /\.hbs$/,
        exclude: /node_modules/,
        use: 'handlebars-loader'
      }
		]
	},
	mode,
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new HtmlWebpackPlugin({
			inject: false,
			isDevelopment: mode === 'development',
			isProduction: mode === 'production',
      template: './src/index.hbs'
    })
	],
	devtool: false
};
