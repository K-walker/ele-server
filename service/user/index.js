const util = require('util')
const BaseService = require('../BaseService');
const cache = require('./cache');

function UserService () {
    
}

util.inherits(UserService , BaseService)

UserService.prototype.login = async function ({userId}) {
    return cache.getToken(userId);
}

UserService.prototype.checkToken = function ({userId}) {
    return cache.getToken(userId);
}

module.exports = new UserService() ;