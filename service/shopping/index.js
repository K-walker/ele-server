const utils = require('../../utils/func')
const cache = require('./cache');

function ShoppingService () {
    
}

ShoppingService.prototype.getEntries = async function (url) {
    return cache.getEntries(url).then( data => {
       return Promise.resolve(data);
    })
}

ShoppingService.prototype.getBanners = async function (url) {
    return cache.getBanners(url).then( data => {
       return Promise.resolve(data);
    })
}

ShoppingService.prototype.getRestaurants = async function (url , params) {
    return cache.getRestaurants(url , params).then( data => {
        data.map(item => {
            if(item.activities) item.activities = JSON.parse(item.activities)
            if(item.support_tags) item.support_tags = JSON.parse(item.support_tags)
            if(item.supports) item.supports = JSON.parse(item.supports)
            return item ;
        })
       return Promise.resolve(data);
    })
}

// 获取饭店详情
ShoppingService.prototype.getDetail = async function (url , id) {
    try {
        let menus = await cache.getMenus(url+'/menu' , id);
        let rstInfo  =  await cache.getRstInfo(url+'/rst'  , id);
        let rst = rstInfo[0];
        rst.activities = utils.isEmpty(rst.activities) ? [] : JSON.parse(rst.activities);
        rst.support_tags = utils.isEmpty(rst.support_tags) ? [] : JSON.parse(rst.support_tags);
        rst.supports = utils.isEmpty(rst.supports) ? [] : JSON.parse(rst.supports);
        rst.flavors = utils.isEmpty(rst.flavors) ? [] : JSON.parse(rst.flavors);
        return Promise.resolve({
            menu:menus,
            rst:rst
        })
    } catch (error) {
        return Promise.reject(error)
    }
}


module.exports = new ShoppingService();