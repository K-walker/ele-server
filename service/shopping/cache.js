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
    id = 'E12468818927622248669';  // 暂时只用这家的菜单来测试
    let result  = await cache.getObj(url);
    if(!result) {
        let menuGroup = await db.query('select * from ?? where rst_id = ?' , ['tb_menu_group', id]);
        let foods = await db.query('select * from ?? where restaurant_id = ?' , ['tb_menu',id]);
        result = {
            menus:menuGroup,
            foods:foods
        }
        await cache.setObj(url , result);
    }
    return Promise.resolve(result);
}

/**
 * 获取商家详情
 */
ShoppingCache.prototype.getRstInfo = async function (url , id) {
    let result  = await cache.getObj(url);
    if(!result) {
        result = await db.query('select * from ?? where id = ?' , ['tb_rst', id]);
        await cache.setObj(url , result);
    }
    return Promise.resolve(result);
}


module.exports = new ShoppingCache();