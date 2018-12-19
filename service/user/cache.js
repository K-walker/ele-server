//redis 缓存

function UserCache () {
	this.cache = require('../../libs/redis/index');
	this.toke_expire_time = 10 ; // 单位s
}

/**
 * 检查token是否过期
 */
UserCache.prototype.isExpire = function (key) {
	return this.cache.get(key).then( res => {
		return Promise.resolve(res != null);
	})
}

UserCache.prototype.setToken = function (key , value) {
	return this.cache.setWithExpire(key , value , this.toke_expire_time);
}

UserCache.prototype.update = function (key , value) {
	return this.cache.hmset(key , value);
}

UserCache.prototype.isExist = function (key) {
	return this.cache.hmget(key);
}


module.exports = new UserCache ();