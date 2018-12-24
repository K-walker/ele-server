// const cache = require('./cache')
// const db = require('../../libs/db/index')

import BaseService from '../BaseService';

export default class ShopService extends BaseService {

	constructor () {
		this.tbName = 'tb_rst';
	}

	async getRstList (url , params) {
		return await this.fetch(url , params);
	}
}



// function ShopService () {
// 	this.tbName = 'tb_rst';
// }

// function getListByDB (tbName , params) {
// 	let sql = 'select * from ?? where latitude=? and longitude=? order by distance limit ? , ?';
// 	return db.query(sql , [tbName , params.latitude , params.longitude , params.offset , params.limit]);
// }

// ShopService.prototype.getRstList = function (url , params) {
// 	return cache.getList(url).then( result => {
// 		if(!result) {
// 			return getListByDB(this.tbName , params).then( result => {
// 				if(result.length > 0) {
// 					cache.setList(url , result);
// 					return Promise.resolve(result);
// 				}
// 			})
// 		} else {
// 			return Promise.resolve(JSON.parse(result))
// 		}
// 	})
// }

// module.exports = new ShopService() ;