const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const env = process.env.NODE_ENV || 'development';
const isDev = env === 'development';
const isProd = env === 'production';
const extractCss = new ExtractTextPlugin({
	filename: 'index.css',
	disable: isDev
});

module.exports = {
	entry: {
		build: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'build.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /(\.css|\.scss|\.sass)$/,
				exclude: /node_modules/,
				use: extractCss.extract({
					 use: [{ loader: 'css-loader' }, { loader: 'sass-loader' }],
					 fallback: 'style-loader'
				})
			},
		],
	},
	plugins: [new HtmlWebpackPlugin(), extractCss],
};
