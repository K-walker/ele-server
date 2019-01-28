const db = require('../libs/db/index')
const util = require('util')

function InitData () {
    
}

InitData.prototype.saveRst = async function (data) {
    try {
        for(let i = 0 ; i < data.items.length ; i ++) {
            let item = data.items[i];
            let rst = {
                id:item.restaurant.id,
                name:item.restaurant.name,
                address:item.restaurant.address,
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
}

InitData.prototype.saveActivities = async function (data) {
    try {
        for(let i = 0 ; i < data.items.length ; i ++) {
            let item = data.items[i];
            let activity = {
                id:item.restaurant.id,
                rst_id:'',
                attribute:'',
                description:'',
                icon_name:'',
                icon_color:'',
                is_exclusive_with_food_activity:'',
                name:'',
                tips:'',
                type:'',
            }
            await db.add('tb_activities' , activity);
        }
        return Promise.resolve();
    } catch (e) {
        console.log(e)
        return Promise.reject(e);
    }
}

module.exports = new InitData() ;