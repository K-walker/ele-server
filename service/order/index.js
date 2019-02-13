const cache = require('./cache');

function OrderService () {
    
}

OrderService.prototype.getList = function (params) {
    return cache.getOrderList(params);
}

module.exports = new OrderService() ;