
//paht: nodejs核心模块，不需要额外安装，专门处理路径
//导入path模块
const path = require('path');

console.log('__dirname ==>', __dirname);

module.exports = {
	//入口文件配置

	entry: {
		app: './app/app.js'
	},

	//打包输出路径
	output: {
		//__dirname：当前文件的文件夹路径（不包含文件名称）
		path: path.resolve(__dirname, '../public')

        //[name].js: 原始文件是什么名称，输出就是什么名称
		//filename: '[name].js'
	}
}