const path = require('path');

module.exports = {

	mode: 'development',

	entry: {
		app: './app/app.js'
	},

	output: {
		path: path.resolve(__dirname, '../public'),

		filename: '[name].js'
	},

	//loader:解析css,img, less, sass, html...
	module: {

		rules:[
            
            //每一个解析对象都是一个解析规则 都是一个loader
            {
            	//解析正则表达式 文件的后缀名
            	test: /\.css$/,

            	//应用loader
            	use: [
            	    {loader: 'style-loader'},
            	    {loader: 'css-loader'}

            	]
            }


		]
	}
}