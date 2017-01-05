var path = require('path');
var webpack = require('webpack');
var glob = require('glob');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');
// var CleanPlugin = require('clean-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;


var prod = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
	entry: {
		index: './src/js/index.js',
		admin: './src/js/admin.js',
	},
	output: {
		path: path.join(__dirname, prod ? "./dist" : "./build"),
		filename: prod ? 'js/[name].min.js' : 'js/[name].js',
		chunkFilename: 'js/[name].chunk.js',
		publicPath: ''
	},
	resolve: {
		root: [],
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.(jpe?g|png|gif|svg)$/,
			loader: 'url?limit=8024&name=images/[name].[ext]'
		}, {
			test: /\.(woff2?|otf|eot|svg|ttf)$/i,
			loader: 'url?name=fonts/[name].[ext]'
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style', 'css')
		}, {
			test: /\.less$/,
			loader: ExtractTextPlugin.extract('style', 'css!less')
		}, {
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style', 'css!sass')
		}, {
			test: /\.js[x]?$/,
			exclude: /node_modules/,
			loader: 'babel?presets[]=es2015&presets[]=react'
		}, {
			test: /\.html$/,
			loader: 'html?attrs=img:src img:srcset'
		}]
	},
	babel: {
		presets: [
			["es2015", {
				"loose": true
			}], "react", "stage-0"
		],
		plugins: ["transform-runtime", "transform-class-properties"]
	},
	plugins: [
		// new HtmlWebpackPlugin({
		// 	filename: 'index.html',
		// 	template: './src/index/index.html'
		// }),
		// new CleanPlugin(['dist', 'build']),
		//启动热替换
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('css/[name].css', {
			allChunks: true
		}),
		// new webpack.NoErrorsPlugin(),
		// new OpenBrowserPlugin({
		// 	url: 'http://localhost:8080'
		// }),
		/* 公共库 */
		new CommonsChunkPlugin({
			name: 'common',
			minChunks: Infinity
		}),
	]
};
// 判断开发环境还是生产环境,添加uglify等插件
if (process.env.NODE_ENV === 'production') {
	module.exports.plugins = (module.exports.plugins || [])
		.concat([
			new webpack.DefinePlugin({
				'process.env': {
					NODE_ENV: JSON.stringify('production')
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
			new webpack.optimize.OccurenceOrderPlugin(),
		]);
} else {
	module.exports.devtool = 'source-map';
	module.exports.devServer = {
		port: 8080,
		contentBase: './build',
		hot: true,
		historyApiFallback: true,
		publicPath: "",
		stats: {
			colors: true
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	};
}