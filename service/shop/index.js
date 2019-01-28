const util = require('util')
const db = require('../../libs/db/index');
const BaseService = require('../BaseService');

function ShopService () {
	this.tbName = 'tb_rst';
}

util.inherits(ShopService , BaseService);

ShopService.prototype.getBanners = async function ({latitude , longitude}) {
	return await this.fetch('https://h5.ele.me/restapi/shopping/v2/banners' , {
		consumer:1,
		type:1,
		longitude ,
		latitude
	})
}

ShopService.prototype.getEntries = async function ({ latitude , longitude}) {
	return await this.fetch('https://h5.ele.me/restapi/shopping/v2/entries' , {
		'templates[]':'main_template',
		latitude,
		longitude
	});
}

ShopService.prototype.getHot = async function (params) {
	return await this.fetch('https://h5.ele.me/restapi/shopping/v3/hot_search_words' , params);
}

ShopService.prototype.getRestaurants = async function (params) {
	return await this.fetch('https://h5.ele.me/restapi/shopping/v3/restaurants' , params);
}

ShopService.prototype.getRestaurantDetail = async function (query) {
	let {id , cookie  , longitude , latitude} = query ;
	delete query.id ;
	delete query.cookie ;
	return await this.fetch(`https://h5.ele.me/pizza/shopping/restaurants/${id}/batch_shop` , query , 'GET' , {
		'x-shard':`shopid=${id};loc=${longitude},${latitude}`,
		cookie:cookie
	});
}

ShopService.prototype.getRestaurantComments = async function (query) {
	let {id , longitude , latitude , cookie} = query ;
	delete query.id ;
	delete query.cookie ;
	delete query.longitude ;
	delete query.latitude ;
	return await this.fetch(`https://h5.ele.me/pizza/ugc/restaurants/${id}/batch_comments`, query , 'GET' , {
		'x-shard':`shopid=${id};loc=${longitude},${latitude}`,
		cookie:cookie
	});
}



module.exports = new ShopService() ;