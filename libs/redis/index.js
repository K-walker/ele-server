const redis = require('redis');

function Redis () {
	this.client = redis.createClient(6379 , '127.0.0.1');
}

Redis.prototype.get = function (key) {
	return new Promise( (resolve , reject) => {
		this.client.get(key , (err , reply) => {
			if(err) reject(err) ;
			else resolve(reply)
		})
	}) 
}
 
Redis.prototype.set = function (key , value) {
	return new Promise( (resolve , reject) => {
		this.client.set(key , value ,  (err , reply) => {
			if(err) reject(err) ;
			else resolve(reply)
		})
	})
}

Redis.prototype.setObj = function (key , obj) {
	return this.set(key , JSON.stringify(obj));
}

Redis.prototype.getObj = function (key) {
	return this.get(key).then( data => {
		if(data) data = JSON.parse(data);
		return Promise.resolve(data);
	})
}

Redis.prototype.hmget = function (key) {
	return new Promise( (resolve , reject) => {
		this.client.hgetall(key , (err , replies) => {
			if(err) reject(err) ;
			else resolve(replies)
		})
	})
}

/**
 * @params{obj} obj's key and value will be coerced to strings
 */
Redis.prototype.hmset = function (key , obj) {
	return new Promise( (resolve , reject) => {
		this.client.hmset(key , obj ,  (err , replies) => {
			if(err) reject(err) ;
			else resolve(replies)
		})
	})
}

/**
 * 给key设置过期时间
 */
Redis.prototype.setWithExpire = function (key , value , times) {
	return new Promise( (resolve , reject) => {
		this.client.set( key , value , 'EX' , times , function (err , replies) {
			if(err) reject(err) ;
			else resolve(replies);
		});
	})
}



module.exports = new Redis ();