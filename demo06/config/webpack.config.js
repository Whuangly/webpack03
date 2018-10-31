const path = require('path');

module.exports = {

	mode: 'development'

	//入口文件
	entry: {
      app: './app/app.js'
	},

	output: {
		path: path.resolve(__dirname, '../public'),

		filename: '[name].js'
	},

	module: {

      rules: [

        {
        	test: /\.less$/,


        	use: [
              {loader: 'style-loader'},
              {loader: 'css-loader'},
              {loader: 'less-loader'}
        	]
        }

      ]

	}
}