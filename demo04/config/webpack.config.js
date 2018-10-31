let path = require('path');

module.exports = {
	//模式
	mode: 'development',//开发模式

	//mode: 'production',//生产模式

	entry: {
		//person: './app/person.js'

		//依赖图
		person: './app/person.js'
	},

	output: {
		path: path.resolve(__dirname, '../public'),

		filename: 'bundle.js'
	}
}