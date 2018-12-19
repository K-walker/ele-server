
const cache = require('../../libs/redis/index');
function ShopCache () {
	
}

ShopCache.prototype.getList = function (key) {
	return cache.get(key);
}

ShopCache.prototype.setList = function (key , value) {
	return cache.set(key , JSON.stringify(value));
}

module.exports = new ShopCache();