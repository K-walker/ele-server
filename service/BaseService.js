const node_fetch = require('node-fetch');

function BaseService () {

}

BaseService.prototype.fetch = async function (url , data , type , headers) {
	return await request(url , data , type , headers);
}

async function request (url = '' , data = {} , type = 'GET' , headers = {} ,resType = 'JSON') {
	type = type.toUpperCase();
	if(type === 'GET') {
		let params = [] ;
		Object.keys(data).forEach( key => {
			params.push(key+'='+data[key]);
		})
		url += '?' + params.join('&');
	}
	let requestConfig = {
		method:type,
		headers:{
			'Accept':'application/json',
			'Content-Type':'application/json'
		}
	}

	Object.assign(requestConfig.headers , headers);

	if(type === 'POST') {
		Object.defineProperty(requestConfig , 'body' , {
			value:JSON.stringify(data)
		})
	}
	const  response = await node_fetch(url , requestConfig);
	return response.json();
}

module.exports =  BaseService;
