const db = require('../../libs/db/index');
const cache = require('../../libs/redis/index');

function OrderCache () {

}

OrderCache.prototype.getOrderList = async function ({userId , orderId}) {
    let result = await cache.getObj(orderId) ;
    if(!result) {
        result = await db.query('select * from ?? where orderId = ?' , ['tb_order' , orderId])
        await cache.setObj(userId , result);
    }
    return Promise.resolve(result)
}

module.exports = new OrderCache();