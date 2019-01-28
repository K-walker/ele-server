const express = require('express');
const router = express.Router();
const testService = require('../service/test/index');
const shopService = require('../service/shop/index');

router.get('/shop/entries', function(req , res) {
    var data = [
        {
            "id": 20004689,
            "image_hash": "7d8a867c870b22bc74c87c348b75528djpeg",
            "link": "eleme://restaurants?search_source=1&activity_id=10016665&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D%2C%22restaurant_category_id%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D&navType=0&color_type=1&target_name=%E7%BE%8E%E9%A3%9F&entry_id=20004689&page_type=2&business_flag=1&animation_type=1",
            "name": "美食",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
           
            "id": 20008121,
            "image_hash": "e89185f7259ebda19e16123884a60ef2jpeg",
            "link": "eleme://restaurants?search_source=1&activity_id=10020785&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B209%2C212%2C213%2C214%2C215%2C219%2C265%2C221%2C263%2C218%2C234%2C237%2C240%2C241%2C211%2C229%5D%7D%2C%22restaurant_category_id%22%3A%5B209%2C212%2C213%2C214%2C215%2C219%2C265%2C221%2C263%2C218%2C234%2C237%2C240%2C241%2C211%2C229%5D%7D&navType=0&color_type=2&target_name=%E6%99%9A%E9%A4%90&entry_id=20008121&page_type=2&business_flag=17&animation_type=1",
            "name": "晚餐",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            
            "id": 20033905,
            "image_hash": "c7e76a23eb90dada42528bc41499d6f8jpeg",
            "link": "eleme://offline?navColor=&title=&navType=0&target_name=&pluginId=bdwm.plugin.newretail&url=https%3A%2F%2Fh5-newretail.faas.ele.me%2Fstatic%2Fh5_newretail%2Fpages%2Fchannel.html%3Fchannel%3Dsupermarket&animation_type=1&pageName=channel&pageData=%7B%22channel%22%3A%22supermarket%22%7D",
            "name": "商超便利",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            "id": 20033897,
            "image_hash": "0d0dd7c960f08cdc756b1d3ad54978fdjpeg",
            "link": "eleme://offline?navColor=&title=&navType=0&target_name=&pluginId=bdwm.plugin.newretail&url=https%3A%2F%2Fh5-newretail.faas.ele.me%2Fstatic%2Fh5_newretail%2Fpages%2Fchannel.html%3Fchannel%3Dfresh&animation_type=1&pageName=channel&pageData=%7B%22channel%22%3A%22fresh%22%7D",
            "name": "水果",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            "id": 20033889,
            "image_hash": "70aaf108e256ebc9f02db599592ae655jpeg",
            "link": "eleme://offline?navColor=&title=&navType=0&target_name=&pluginId=bdwm.plugin.newretail&url=https%3A%2F%2Fh5-newretail.faas.ele.me%2Fstatic%2Fh5_newretail%2Fpages%2Fchannel.html%3Fchannel%3Dhealth&animation_type=1&pageName=channel&pageData=%7B%22channel%22%3A%22health%22%7D",
            "name": "医药健康",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            "id": 20033881,
            "image_hash": "301c888acb2c8ba9e0c813f36ec9e90ajpeg",
            "link": "eleme://offline?navColor=&title=&navType=0&target_name=&pluginId=bdwm.plugin.newretail&url=https%3A%2F%2Fh5-newretail.faas.ele.me%2Fstatic%2Fh5_newretail%2Fpages%2Fchannel.html%3Fchannel%3Dflower&animation_type=1&pageName=channel&pageData=%7B%22channel%22%3A%22flower%22%7D",
            "name": "浪漫鲜花",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            "id": 20091161,
            "image_hash": "c21e42997b86b232161a5a16ab813ae8jpeg",
            "link": "eleme://web?navColor=&target_name=&url=https%3A%2F%2Fh5.ele.me%2Fnewretail%2Fp%2Fchannel%2F%3Factivity_ids%3D%255B10123801%255D%26channel%3Dkitchen&title=&navType=0&animation_type=1",
            "name": "厨房生鲜",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            "id": 20091217,
            "image_hash": "e58bceb19258e3264e64fb856722c3c1jpeg",
            "link": "eleme://web?navColor=&target_name=%E8%B7%91%E8%85%BF%E4%BB%A3%E8%B4%AD&url=https%3A%2F%2Fpt.ele.me%2Fpaotui%2Fh5%2Fh5index%3Factivity_ids%3D%255B10123225%255D&title=%E8%B7%91%E8%85%BF%E4%BB%A3%E8%B4%AD&navType=0&animation_type=1",
            "name": "跑腿代购",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            "id": 20008569,
            "image_hash": "7d66f2631288a44ec177204e05cbcb93jpeg",
            "link": "eleme://restaurants?search_source=1&activity_id=10021705&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B234%2C235%2C237%5D%7D%2C%22restaurant_category_id%22%3A%5B234%2C235%2C237%5D%7D&navType=0&color_type=1&target_name=%E5%9C%B0%E6%96%B9%E5%B0%8F%E5%90%83&entry_id=20008569&page_type=1&business_flag=0&animation_type=1",
            "name": "地方小吃",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            "id": 20113857,
            "image_hash": "5debebe83947afee0b0f38257b0e3866jpeg",
            "link": "eleme://web?navColor=&target_name=&url=https%3A%2F%2Fh5.ele.me%2Fdailybonus%2F%3Fsource%3Dailpay%2B%26activity_ids%3D%255B10160889%255D&title=&navType=0&animation_type=1",
            "name": "签到领红包",
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            
            "id": 20091225,
            "image_hash": "a8aec21096d528b7cfd23cdd894f01c6jpeg",
            "link": "eleme://restaurants?search_source=1&activity_id=10021281&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%5D%7D%2C%22restaurant_category_id%22%3A%5B221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%5D%7D&navType=0&color_type=1&target_name=%E5%9C%B0%E6%96%B9%E8%8F%9C%E7%B3%BB&entry_id=20091225&page_type=1&business_flag=0&animation_type=1",
            "name": "地方菜系",
            "group_name": "优惠专区类型",
            "group_type": 11,
            "ranking_weight": 0,
            "template": "favourable_template"
        },
        {
            "id": 20091313,
            "image_hash": "ec7b7ba9547aa700bd20d0420e1794a8jpeg",
            "link": "eleme://restaurants?search_source=1&activity_id=10021297&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B214%5D%7D%2C%22restaurant_category_id%22%3A%5B214%5D%7D&navType=0&color_type=1&target_name=%E9%BA%BB%E8%BE%A3%E7%83%AB&entry_id=20091313&page_type=1&business_flag=0&animation_type=1",
            "name": "麻辣烫",
            "group_name": "优惠专区类型",
            "group_type": 11,
            "ranking_weight": 0,
            "template": "favourable_template"
        } 
    ]
    testService.initEntry(data).then( () => {
        res.send('Entry 初始化成功');
    }).catch ( e => {
        res.send(e)
    })
});

router.get('/shop/banners', function(req , res) {
    shopService.getBanners(req.query).then( result => {
		return testService.initBanner(result);
    }).then( () => {
        res.send('Banner 数据初始化成功');
    }).catch (e => {
		res.send(e)
	})
});

router.get('/shop/restaurants', function(req , res) {
    shopService.getRestaurants(req.query).then( result => {
		return testService.initShop(result);
    }).then( () => {
        res.send('Restaurants 数据初始化成功');
    }).catch (e => {
		res.send(e)
	})
});

router.get('/shop/menus', function(req , res) {
    shopService.getRestaurantDetail(req.query)
    .then( detail => {
        return testService.initMenu(detail.menu)
    }).then( () => {
        res.send('Menu 数据初始化成功');
    }).catch (e => {
        res.send(e)
    });
});

router.get('/shop/comments', function(req , res) {
    shopService.getRestaurantComments(req.query)
    .then( result => {
        return testService.initComments(result.comments)
    }).then( () => {
        res.send('Comment 数据初始化成功');
    }).catch (e => {
        res.send(e)
    });
});
module.exports = router;
