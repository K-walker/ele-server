import fetch from 'node-fetch';

export default class BaseService {
	constructor () {

	}

	async fetch (url = '' , data = {} , type = 'GET' , resType = 'JSON') {
		type = type.toUpperCase();
		if(type === 'GET') {
			let params = [] ;
			for(key in data) {
				params.push(key+'='+params[key]);
			}
			url += '?' + params.join('&');
		}
		let requestConfig = {
			method:type,
			headers:{
				'Accept':'application/json',
				'Content-Type':'application/json'
			}
		}
		if(type === 'POST') {
			Object.defineProperty(requestConfig , 'body' , {
				value:JSON.stringify(data)
			})
		}

		const  response = await fetch(url , requestConfig);
		
		return response.json();
	}
}