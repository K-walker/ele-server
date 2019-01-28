const db = require('../../libs/db/index')
const util = require('util')
const BaseService = require('../BaseService');
const utils = require('../../utils/func');

function TestService () {
    
}

util.inherits(TestService , BaseService)

TestService.prototype.initEntry = async function (data) {
    try {
        for(let i = 0 ; i < data.length ; i ++) {
            let item = data[i];
            let entry = {
                id:item.id ,
                image_hash:item.image_hash ,
                name:item.name ,
                link:item.link ,
                group_name:item.group_name ,
                group_type:item.group_type ,
                rank_id:item.rank_id ,
                template:item.template
            }
            await db.add('tb_entry' , entry);
        }
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e);
    } 
}

TestService.prototype.initBanner = async function (data) {
    try {
        for(let i = 0 ; i < data.length ; i ++) {
            let item = data[i];
            let banner = {
                id:item.id ,
                image_hash:item.image_hash ,
                is_ad_flag_visible:item.is_ad_flag_visible ,
                url:item.url ,
                banner_type:item.banner_type ,
                rank_id:item.rank_id ,
            }
            await db.add('tb_banner' , banner);
        }
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e);
    } 
}

TestService.prototype.initShop = async function (data) {
    try {
        for(let i = 0 ; i < data.items.length ; i ++) {
            let item = data.items[i];
            let rst = {
                id:item.restaurant.id,
                name:item.restaurant.name,
                address:item.restaurant.address,
                flavors:JSON.stringify(item.restaurant.flavors),
                description:item.restaurant.description,
                delivery_fee_discount:item.restaurant.delivery_fee_discount,
                distance:item.restaurant.distance,
                float_delivery_fee:item.restaurant.float_delivery_fee,
                float_minimum_order_amount:item.restaurant.float_minimum_order_amount,
                image_path:item.restaurant.image_path,
                latitude:item.restaurant.latitude,
                longitude:item.restaurant.longitude,
                order_lead_time:item.restaurant.order_lead_time,
                phone:item.restaurant.phone,
                rating:item.restaurant.rating,
                rating_count:item.restaurant.rating_count,
                recent_order_num:item.restaurant.recent_order_num,
                status:item.restaurant.status,
                type:item.restaurant.type,
                support_tags:JSON.stringify(item.restaurant.support_tags),
                supports:JSON.stringify(item.restaurant.supports),
                activities:item.restaurant.activities ? JSON.stringify(item.restaurant.activities) : null,
                delivery_mode: item.restaurant.delivery_mode ? item.restaurant.delivery_mode.text : '',
                opening_hours:item.restaurant.opening_hours[0],
            }
            await db.add('tb_rst' , rst);
        }
        return Promise.resolve();
    } catch (e) {
        console.log(e)
        return Promise.reject(e);
    }


    return await this.fetch('https://h5.ele.me/restapi/eus/login/login_by_mobile' , params , 'POST')
}

TestService.prototype.initMenu = async function (data) {
    try {
        for(let i = 0 ; i < data.length ; i++) {
            let item = data[i];
            let menuGroup = {
                id:item.id,
                description:item.description ,
                icon_url:item.icon_url ,
                is_selected:item.is_selected ,
                name:item.name ,
                type:item.type ,
                sort_id:item.id ,
            }

            await db.add('tb_menu_group' , menuGroup);

            for(let j = 0 ; j < item.foods.length ; j ++) {
                let food = item.foods[j];
                let menu = {
                    item_id:food.item_id,
                    image_path:food.image_path,
                    description:food.description,
                    name:food.name,
                    rating:food.rating,
                    rating_count:food.rating_count,
                    restaurant_id:food.restaurant_id,
                    satisfy_count:food.satisfy_count,
                    satisfy_rate:food.satisfy_rate,
                    tips:food.tips,
                    month_sales:food.month_sales,
                    category_id:food.category_id,
                }
                await db.add('tb_menu' , menu);
            }
        }
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e.message);
    }
}

TestService.prototype.initComments = async function (data) {
    try {
        for (let index = 0; index < data.length; index++) {
            const item = data[index];
            let comment = {
                avatar:item.avatar,
                order_id:item.order_id,
                rated_at:item.rated_at,
                rating:item.rating,
                rating_text:utils.utf16toEntities(item.rating_text),
                username:item.username,
                order_image:item.order_images ? item.order_images[0].image_hash :'',
                reply:item.reply ? item.reply.content : '',
            }
            await db.add('tb_comment' , comment);
        }
        return Promise.resolve();
    } catch (e) {
        return Promise.reject(e)
    }
}
module.exports = new TestService() ;