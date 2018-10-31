let product = [

    {id: 'AF001', name: '电脑1', price:100},
    {id: 'AF002', name: '电脑2', price:101},
    {id: 'AF003', name: '电脑3', price:102},
    {id: 'AF004', name: '电脑4', price:104},
];

console.log('product ==>', product);

//将对象暴露，是的其它脚本文件取得访问权
module.exports = product;