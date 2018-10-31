const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

	mode: 'development',

	entry: {
		app: './app/app.js'
	},

	output: {
		path: path.resolve(__dirname, '../assets'),

		filename: '[name].js'
	},

	module: {
		rules: [

          {
          	test:/\.(sass|scss)$/,
            /*
            //不分离css
          	use: [

              {loader: 'style-loader'},
              {loader: 'css-loader'},
              {loader: 'sass-loader'}
          	]
            */
          	//分离css
          	use: [
              {loader: MiniCssExtractPlugin.loader},
              {loader: 'css-loader'},
              {loader: 'sass-loader'}
          	]
          }
		]
	},

	//插件
	plugins: [

      new MiniCssExtractPlugin({
      	filename: '[name].css'
      })

	]
}