const util = require('util')
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

ShoppingService.prototype.getDetail = async function (url , id) {
    let result = await cache.getMenus(url , id);
    let data = [] ;
    result.menu.forEach( menu => {
        let mGroup = result.menuGroup.find( group => group.id == menu.category_id);
        if(mGroup && !mGroup.menus) {
            mGroup.menus = [] ;
        }
        mGroup.menus.push(menu);
        data.push(mGroup)
    })
    return Promise.resolve(data);
}


module.exports = new ShoppingService();