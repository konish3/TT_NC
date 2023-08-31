const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

const copyFiles = [
	{
		from: './public/img',
		to: 'img',
	},
];

module.exports = {
	entry: "./src/index.tsx",
	output: {
		filename: 'js/[name].js',
		clean: true,
		path: path.join(process.cwd(), 'dist'),
	},
	plugins: [
		new CleanWebpackPlugin(),
		new CopyWebpackPlugin ({
			patterns: copyFiles,
		}),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "public", "index.html"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(ts|tsx)$/,
				loader: "ts-loader",
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", 
					{
					loader: "sass-loader",
					options: {
						// Prefer `dart-sass`
						implementation: require.resolve("sass"),
					}},]
			},
		],
	},
	resolve: {
		extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".css", ".scss"],
	},
	devServer: {
		static: {
			directory: path.join(process.cwd(), 'src'),
		},
		compress: true,
		port: 4000,
		hot: true,
		allowedHosts: 'all',
		client: {
			reconnect: true,
		},
	},
};