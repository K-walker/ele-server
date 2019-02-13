const db = require('../../libs/db/index');
const cache = require('../../libs/redis/index');

function UserCache () {

}

UserCache.prototype.getToken = async function (userId) {
    return cache.get(userId);
}

module.exports = new UserCache();