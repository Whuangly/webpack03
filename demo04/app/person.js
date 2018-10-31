

((w, doc) => {
    //导入product模块

    let product = require('./product.js');
    
    function createElement(element) {
    	return doc.createElement(element);
    }

    let box = doc.getElementById('box');

	w.onload = () => {
        
        product.forEach((v,i) => {
        	let ul = createElement('ul');

        	for (let key in v) {
        		let li = createElement('li');
        		li.setAttribute('name',key);
        		li.textContent = v[key];

        		ul.appenChild(li)
        	}

        	box.appenChild(ul);
        })



	}
})(window);