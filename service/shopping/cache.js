const db = require('../../libs/db/index');
const cache = require('../../libs/redis/index');

function ShoppingCache () {

}

ShoppingCache.prototype.getEntries = async function (url) {
    let result  = await cache.getObj(url);
    if(!result) {
        result = await db.query('select * from ??' , ['tb_entry']);
        await cache.setObj(url , result);
    }
    return Promise.resolve(result);
}

ShoppingCache.prototype.getBanners = async function (url) {
    let result  = await cache.getObj(url);
    if(!result) {
        result = await db.query('select * from ??' , ['tb_banner']);
        await cache.setObj(url , result);
    }
    return Promise.resolve(result);
}

ShoppingCache.prototype.getRestaurants = async function (url , {offset , limit}) {
    let result  = await cache.getObj(url);
    if(!result) {
        result = await db.query('select * from ?? limit ? , ?' , ['tb_rst' , offset , limit]);
        await cache.setObj(url , result);
    }
    return Promise.resolve(result);
}

ShoppingCache.prototype.getMenus = async function (url , id) {
    let result  = await cache.getObj(url);
    if(!result) {
        let menuGroup = await db.query('select * from ?? where rst_id = ?' , ['tb_menu_group', id]);
        let menu = await db.query('select * from ?? where restaurant_id = ?' , ['tb_menu',id]);
        await cache.setObj(url , {
            menuGroup:menuGroup,
            menu:menu
        });
    }
    return Promise.resolve(result);
}

module.exports = new ShoppingCache();