var express = require('express');
var history = require('connect-history-api-fallback');
var router = express.Router();

express().use(history())

router.get('/entries', function(req, res, next) {
    var data = [
        {
            "entries": [
                {
                    "activity_id": 10016665,
                    "activity_ids": [
                        10016665
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 1,
                    "description": "美食",
                    "id": 20004689,
                    "image_hash": "7d8a867c870b22bc74c87c348b75528djpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://restaurants?search_source=1&activity_id=10016665&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D%2C%22restaurant_category_id%22%3A%5B209%2C212%2C213%2C214%2C215%2C216%2C217%2C219%2C265%2C266%2C267%2C268%2C269%2C221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%2C218%2C234%2C235%2C236%2C237%2C238%2C211%2C229%2C230%2C264%5D%7D&navType=0&color_type=1&target_name=%E7%BE%8E%E9%A3%9F&entry_id=20004689&page_type=2&business_flag=1&animation_type=1",
                    "more": "{\"tags\":null}",
                    "name": "美食",
                    "name_color": "",
                    "position": 1,
                    "sub_entries": []
                },
                {
                    "activity_id": 10020785,
                    "activity_ids": [
                        10020785
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 17,
                    "description": "",
                    "id": 20008121,
                    "image_hash": "e89185f7259ebda19e16123884a60ef2jpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://restaurants?search_source=1&activity_id=10020785&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B209%2C212%2C213%2C214%2C215%2C219%2C265%2C221%2C263%2C218%2C234%2C237%2C240%2C241%2C211%2C229%5D%7D%2C%22restaurant_category_id%22%3A%5B209%2C212%2C213%2C214%2C215%2C219%2C265%2C221%2C263%2C218%2C234%2C237%2C240%2C241%2C211%2C229%5D%7D&navType=0&color_type=2&target_name=%E6%99%9A%E9%A4%90&entry_id=20008121&page_type=2&business_flag=17&animation_type=1",
                    "more": "{\"tags\":null}",
                    "name": "晚餐",
                    "name_color": "",
                    "position": 4,
                    "sub_entries": []
                },
                {
                    "activity_id": 10047913,
                    "activity_ids": [
                        10047913
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20033905,
                    "image_hash": "c7e76a23eb90dada42528bc41499d6f8jpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://offline?navColor=&title=&navType=0&target_name=&pluginId=bdwm.plugin.newretail&url=https%3A%2F%2Fh5-newretail.faas.ele.me%2Fstatic%2Fh5_newretail%2Fpages%2Fchannel.html%3Fchannel%3Dsupermarket&animation_type=1&pageName=channel&pageData=%7B%22channel%22%3A%22supermarket%22%7D",
                    "more": "{\"tags\":null}",
                    "name": "商超便利",
                    "name_color": "",
                    "position": 2,
                    "sub_entries": []
                },
                {
                    "activity_id": 10047905,
                    "activity_ids": [
                        10047905
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20033897,
                    "image_hash": "0d0dd7c960f08cdc756b1d3ad54978fdjpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://offline?navColor=&title=&navType=0&target_name=&pluginId=bdwm.plugin.newretail&url=https%3A%2F%2Fh5-newretail.faas.ele.me%2Fstatic%2Fh5_newretail%2Fpages%2Fchannel.html%3Fchannel%3Dfresh&animation_type=1&pageName=channel&pageData=%7B%22channel%22%3A%22fresh%22%7D",
                    "more": "{\"tags\":null}",
                    "name": "水果",
                    "name_color": "",
                    "position": 4,
                    "sub_entries": []
                },
                {
                    "activity_id": 10047897,
                    "activity_ids": [
                        10047897
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20033889,
                    "image_hash": "70aaf108e256ebc9f02db599592ae655jpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://offline?navColor=&title=&navType=0&target_name=&pluginId=bdwm.plugin.newretail&url=https%3A%2F%2Fh5-newretail.faas.ele.me%2Fstatic%2Fh5_newretail%2Fpages%2Fchannel.html%3Fchannel%3Dhealth&animation_type=1&pageName=channel&pageData=%7B%22channel%22%3A%22health%22%7D",
                    "more": "{\"tags\":null}",
                    "name": "医药健康",
                    "name_color": "",
                    "position": 5,
                    "sub_entries": []
                },
                {
                    "activity_id": 10047889,
                    "activity_ids": [
                        10047889
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20033881,
                    "image_hash": "301c888acb2c8ba9e0c813f36ec9e90ajpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://offline?navColor=&title=&navType=0&target_name=&pluginId=bdwm.plugin.newretail&url=https%3A%2F%2Fh5-newretail.faas.ele.me%2Fstatic%2Fh5_newretail%2Fpages%2Fchannel.html%3Fchannel%3Dflower&animation_type=1&pageName=channel&pageData=%7B%22channel%22%3A%22flower%22%7D",
                    "more": "{\"tags\":null}",
                    "name": "浪漫鲜花",
                    "name_color": "",
                    "position": 6,
                    "sub_entries": []
                },
                {
                    "activity_id": 10123801,
                    "activity_ids": [
                        10123801
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20091161,
                    "image_hash": "c21e42997b86b232161a5a16ab813ae8jpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://web?navColor=&target_name=&url=https%3A%2F%2Fh5.ele.me%2Fnewretail%2Fp%2Fchannel%2F%3Factivity_ids%3D%255B10123801%255D%26channel%3Dkitchen&title=&navType=0&animation_type=1",
                    "more": "{\"tags\":null}",
                    "name": "厨房生鲜",
                    "name_color": "",
                    "position": 7,
                    "sub_entries": []
                },
                {
                    "activity_id": 10123225,
                    "activity_ids": [
                        10123225
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20091217,
                    "image_hash": "e58bceb19258e3264e64fb856722c3c1jpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://web?navColor=&target_name=%E8%B7%91%E8%85%BF%E4%BB%A3%E8%B4%AD&url=https%3A%2F%2Fpt.ele.me%2Fpaotui%2Fh5%2Fh5index%3Factivity_ids%3D%255B10123225%255D&title=%E8%B7%91%E8%85%BF%E4%BB%A3%E8%B4%AD&navType=0&animation_type=1",
                    "more": "{\"tags\":null}",
                    "name": "跑腿代购",
                    "name_color": "",
                    "position": 9,
                    "sub_entries": []
                },
                {
                    "activity_id": 10021705,
                    "activity_ids": [
                        10021705
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20008569,
                    "image_hash": "7d66f2631288a44ec177204e05cbcb93jpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://restaurants?search_source=1&activity_id=10021705&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B234%2C235%2C237%5D%7D%2C%22restaurant_category_id%22%3A%5B234%2C235%2C237%5D%7D&navType=0&color_type=1&target_name=%E5%9C%B0%E6%96%B9%E5%B0%8F%E5%90%83&entry_id=20008569&page_type=1&business_flag=0&animation_type=1",
                    "more": "{\"tags\":null}",
                    "name": "地方小吃",
                    "name_color": "",
                    "position": 9,
                    "sub_entries": []
                },
                {
                    "activity_id": 10160889,
                    "activity_ids": [
                        10160889
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20113857,
                    "image_hash": "5debebe83947afee0b0f38257b0e3866jpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://web?navColor=&target_name=&url=https%3A%2F%2Fh5.ele.me%2Fdailybonus%2F%3Fsource%3Dailpay%2B%26activity_ids%3D%255B10160889%255D&title=&navType=0&animation_type=1",
                    "more": "{\"tags\":null}",
                    "name": "签到领红包",
                    "name_color": "",
                    "position": 6,
                    "sub_entries": []
                }
               
            ],
            "group_name": "main",
            "group_type": 1,
            "ranking_weight": 0,
            "template": "main_template"
        },
        {
            "entries": [
                {
                    "activity_id": 10021281,
                    "activity_ids": [
                        10021281
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20091225,
                    "image_hash": "a8aec21096d528b7cfd23cdd894f01c6jpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://restaurants?search_source=1&activity_id=10021281&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%5D%7D%2C%22restaurant_category_id%22%3A%5B221%2C222%2C223%2C224%2C225%2C226%2C227%2C228%2C231%2C232%2C263%5D%7D&navType=0&color_type=1&target_name=%E5%9C%B0%E6%96%B9%E8%8F%9C%E7%B3%BB&entry_id=20091225&page_type=1&business_flag=0&animation_type=1",
                    "more": "{\"tags\":null}",
                    "name": "地方菜系",
                    "name_color": "",
                    "position": 12,
                    "sub_entries": []
                },
                {
                    "activity_id": 10021297,
                    "activity_ids": [
                        10021297
                    ],
                    "background_color": "FF5D2F",
                    "business_flag": 0,
                    "description": "",
                    "id": 20091313,
                    "image_hash": "ec7b7ba9547aa700bd20d0420e1794a8jpeg",
                    "is_in_serving": true,
                    "is_need_bind_taobao": true,
                    "is_personalized": false,
                    "link": "eleme://restaurants?search_source=1&activity_id=10021297&target=%7B%22delivery_mode%22%3A%5B%5D%2C%22category_schema%22%3A%7B%22complex_category_ids%22%3A%5B214%5D%7D%2C%22restaurant_category_id%22%3A%5B214%5D%7D&navType=0&color_type=1&target_name=%E9%BA%BB%E8%BE%A3%E7%83%AB&entry_id=20091313&page_type=1&business_flag=0&animation_type=1",
                    "more": "{\"tags\":null}",
                    "name": "麻辣烫",
                    "name_color": "",
                    "position": 10,
                    "sub_entries": []
                }
            ],
            "group_name": "优惠专区类型",
            "group_type": 11,
            "ranking_weight": 0,
            "template": "favourable_template"
        }
  ]
  res.send(data);
});

router.get('/banners' , function (req, res) {
    var data = [
        {
            "banner_type": 1,
            "id": 20123465,
            "image_hash": "65c8fd61766106b4b1115ba272c00c9ajpeg",
            "is_ad_flag_visible": 0,
            "rank_id": "a5407b13d6df44dc9c99d8a06f0ce8d9",
            "url": "eleme://web?navColor=&target_name=&url=https%3A%2F%2Flemon.ele.me%2Fprod%2F5bc75bee783d1f004eb9c092.html%3Factivity_ids%3D%255B10167249%255D&title=&navType=0&animation_type=1"
        },
        {
            "banner_type": 1,
            "id": 20125233,
            "image_hash": "1cccbe57637d3f80493abef64329afbejpeg",
            "is_ad_flag_visible": 0,
            "rank_id": "a5407b13d6df44dc9c99d8a06f0ce8d9",
            "ranking_weight": 0,
            "url": "eleme://web?navColor=&target_name=%E7%88%86%E6%AC%BE%E4%B8%93%E4%BA%AB&url=https%3A%2F%2Flemon.ele.me%2Fprod%2F5bd130a79d2f2b004d75e1a1.html%3Factivity_ids%3D%255B10169913%255D&title=%E7%88%86%E6%AC%BE%E4%B8%93%E4%BA%AB&navType=0&animation_type=1"
        },
        {
            "banner_type": 2,
            "business_ad": {
                "extra_info": "{\"resolution_id\":441541988417608941}",
                "extras": "{\"resolution_id\":441541988417608941}",
                "id": 243570,
                "index": 3,
                "restaurant_id": 167522013
            },
            "id": 1,
            "image_hash": "b3de1a35019201746a543761ca9d0db8jpeg",
            "is_ad_flag_visible": 1,
            "url": "eleme://retail_store?re_store_id=167522013"
        },
        {
            "banner_type": 1,
            "id": 20128169,
            "image_hash": "a309fd00e1478b6f73743282495abb0cjpeg",
            "is_ad_flag_visible": 1,
            "rank_id": "a5407b13d6df44dc9c99d8a06f0ce8d9",
            "ranking_weight": 200,
            "url": "eleme://web?navColor=&target_name=&url=http%3A%2F%2Fopen.ximalaya.com%2Factivities%2Fexperience-vip%2F1010500100000301595%2F0533f8b16a80f0c290f0a7f436f51f48%3Factivity_ids%3D%255B10173225%255D&title=&navType=0&animation_type=1"
        },
        {
            "banner_type": 1,
            "id": 20125265,
            "image_hash": "f4b241fa37f87934dce88842adf57fb7jpeg",
            "is_ad_flag_visible": 0,
            "rank_id": "a5407b13d6df44dc9c99d8a06f0ce8d9",
            "ranking_weight": 0,
            "url": "eleme://web?navType=0&color_type=1&url=https%3A%2F%2Fh5.ele.me%2Franking%2F%23page_type%3Dlego%26activity_id%3D10168905%26entry_template%3D2%26banner_id%3D20125265&target_name=%E8%81%9A%E5%AE%9E%E6%83%A0-%E6%8A%98%E6%89%A35%E6%8A%98%E8%B5%B7&entry_id=20125265&page_type=1&business_flag=0&animation_type=1"
        },
        {
            "banner_type": 1,
            "id": 20127777,
            "image_hash": "1170cd6d34b96433f13e16c55c67b490jpeg",
            "is_ad_flag_visible": 0,
            "rank_id": "a5407b13d6df44dc9c99d8a06f0ce8d9",
            "ranking_weight": 0,
            "url": "eleme://web?navColor=&target_name=%E8%81%9A%E6%83%A0%E7%8B%82%E6%AC%A2%E8%8A%82&url=https%3A%2F%2Flemon.ele.me%2Fprod%2F5bdbea698f9f02004e368c91.html%3Factivity_ids%3D%255B10172937%255D&title=%E8%81%9A%E6%83%A0%E7%8B%82%E6%AC%A2%E8%8A%82&navType=0&animation_type=1"
        }
    ]
    res.send(data);
})

router.get('/menus' , function (req , res) {
    var data = {
        menu: [
            {
                "description": "大家喜欢吃，才叫真好吃。",
                "foods": [
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "12只/笼－选用新鲜、上好的夹心猪肉，以皮薄、肉嫩、汁多、味鲜、形美著称！12只／笼",
                        "image_path": "54bbd23b2bb2f42ec4c52c98e6231778jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426349284",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 339,
                        "name": "上海小笼包",
                        "photos": [
                            "54bbd23b2bb2f42ec4c52c98e6231778jpeg"
                        ],
                        "rating": 4.17,
                        "rating_count": 76,
                        "restaurant_id": 647728,
                        "satisfy_count": 73,
                        "satisfy_rate": 96,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56622200,
                                "is_essential": false,
                                "item_id": "17426349284",
                                "name": "上海小笼包",
                                "packing_fee": 1.5,
                                "pinyin_name": "shanghaixiaolongbao",
                                "price": 20.8,
                                "promotion_stock": -1,
                                "recent_popularity": 339,
                                "recent_rating": 4.17,
                                "restaurant_id": 647728,
                                "sku_id": "20659558628",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "12只/笼"
                                    }
                                ],
                                "stock": 3431,
                                "virtual_food_id": 21316436,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "12只/笼"
                                ]
                            }
                        ],
                        "tips": "76评价 月售339份",
                        "virtual_food_id": 21316436
                    },
                    {
                        "attributes": [
                            {
                                "icon_color": "ec9c68",
                                "icon_name": "招牌"
                            }
                        ],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "8只/笼－皮薄、肉嫩、一口下去香喷喷的、好吃极了！8只／笼",
                        "image_path": "35b3282ed99b936066731cada829d720jpeg",
                        "is_essential": false,
                        "is_featured": 1,
                        "item_id": "17426348260",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 266,
                        "name": "无锡小笼包",
                        "photos": [
                            "35b3282ed99b936066731cada829d720jpeg"
                        ],
                        "rating": 4.24,
                        "rating_count": 74,
                        "restaurant_id": 647728,
                        "satisfy_count": 74,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56621158,
                                "is_essential": false,
                                "item_id": "17426348260",
                                "name": "无锡小笼包",
                                "packing_fee": 1.5,
                                "pinyin_name": "wuxixiaolongbao",
                                "price": 28.8,
                                "promotion_stock": -1,
                                "recent_popularity": 266,
                                "recent_rating": 4.24,
                                "restaurant_id": 647728,
                                "sku_id": "20659557604",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "8只/笼"
                                    }
                                ],
                                "stock": 8122,
                                "virtual_food_id": 21316401,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "8只/笼"
                                ]
                            }
                        ],
                        "tips": "74评价 月售266份",
                        "virtual_food_id": 21316401
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "",
                        "image_path": "635473e748797f5d6f6f18aedd9fe6e7jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000182925493476",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 99,
                        "name": "宝鼎米醋",
                        "photos": [
                            "635473e748797f5d6f6f18aedd9fe6e7jpeg"
                        ],
                        "rating": 4.3,
                        "rating_count": 20,
                        "restaurant_id": 647728,
                        "satisfy_count": 20,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1404814064,
                                "is_essential": false,
                                "item_id": "200000182925493476",
                                "name": "宝鼎米醋",
                                "packing_fee": 0,
                                "pinyin_name": "baodingmicu",
                                "price": 0.5,
                                "promotion_stock": -1,
                                "recent_popularity": 99,
                                "recent_rating": 4.3,
                                "restaurant_id": 647728,
                                "sku_id": "200000209729601764",
                                "sold_out": false,
                                "specs": [],
                                "stock": 8996,
                                "virtual_food_id": 1378638190,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "20评价 月售99份",
                        "virtual_food_id": 1378638190
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "",
                        "image_path": "fe3a8c69a644be89f48134ce4c2a1139jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000244674409700",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 75,
                        "name": "无锡小笼包+鸭血汤",
                        "photos": [
                            "fe3a8c69a644be89f48134ce4c2a1139jpeg"
                        ],
                        "rating": 4.28,
                        "rating_count": 25,
                        "restaurant_id": 647728,
                        "satisfy_count": 25,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1476916615,
                                "is_essential": false,
                                "item_id": "200000244674409700",
                                "name": "无锡小笼包+鸭血汤",
                                "packing_fee": 2,
                                "pinyin_name": "wuxixiaolongbao+yaxuetang",
                                "price": 39.8,
                                "promotion_stock": -1,
                                "recent_popularity": 75,
                                "recent_rating": 4.28,
                                "restaurant_id": 647728,
                                "sku_id": "200000283562596580",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9770,
                                "virtual_food_id": 1438939825,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "25评价 月售75份",
                        "virtual_food_id": 1438939825
                    },
                    {
                        "activity": {
                            "activity_type": "",
                            "applicable_quantity": 1,
                            "applicable_quantity_detail_text": "每单限1份优惠，超出的份数按原价计算",
                            "applicable_quantity_text": "每单限1份优惠",
                            "applicable_quantity_text_color": "eb6551",
                            "benefit_text": "5.8折",
                            "description": "单品折扣",
                            "discount": 0.58,
                            "fixed_price": -1.0,
                            "icon_color": "eb6551",
                            "icon_name": "折",
                            "id": 1711097610,
                            "image_text": "5.8折，限1份",
                            "image_text_color": "f07373",
                            "is_exclusive": 0,
                            "is_price_changed": false,
                            "is_promotion_toast_popup": true,
                            "is_tied_selling": false,
                            "max_quantity": 1,
                            "minimum_delivery_rule": 1,
                            "must_super_vip": false,
                            "name": "单品折扣",
                            "quantity_condition": 1,
                            "quantity_text": "",
                            "sum_condition": 0
                        },
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "选用上好新鲜的鸭血制作而成，美味佳肴！",
                        "image_path": "7cec6c3bfe0f79495e67067dde424c04jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426364644",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 57,
                        "name": "鸭血汤",
                        "photos": [
                            "7cec6c3bfe0f79495e67067dde424c04jpeg"
                        ],
                        "rating": 4.17,
                        "rating_count": 12,
                        "restaurant_id": 647728,
                        "satisfy_count": 12,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750273,
                                "is_essential": false,
                                "item_id": "17426364644",
                                "name": "鸭血汤",
                                "original_price": 22.8,
                                "packing_fee": 1,
                                "pinyin_name": "yaxuetang",
                                "price": 13.22,
                                "promotion_stock": 4084,
                                "recent_popularity": 57,
                                "recent_rating": 4.17,
                                "restaurant_id": 647728,
                                "sku_id": "20659573988",
                                "sold_out": false,
                                "specs": [],
                                "stock": 4084,
                                "virtual_food_id": 19552869,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "12评价 月售57份",
                        "virtual_food_id": 19552869
                    },
                    {
                        "activity": {
                            "activity_type": "",
                            "applicable_quantity": 1,
                            "applicable_quantity_detail_text": "每单限1份优惠，超出的份数按原价计算",
                            "applicable_quantity_text": "每单限1份优惠",
                            "applicable_quantity_text_color": "eb6551",
                            "benefit_text": "5.9折",
                            "description": "单品折扣",
                            "discount": 0.59,
                            "fixed_price": -1.0,
                            "icon_color": "eb6551",
                            "icon_name": "折",
                            "id": 1698052378,
                            "image_text": "5.9折，限1份",
                            "image_text_color": "f07373",
                            "is_exclusive": 0,
                            "is_price_changed": false,
                            "is_promotion_toast_popup": true,
                            "is_tied_selling": false,
                            "max_quantity": 1,
                            "minimum_delivery_rule": 1,
                            "must_super_vip": false,
                            "name": "单品折扣",
                            "quantity_condition": 1,
                            "quantity_text": "",
                            "sum_condition": 0
                        },
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "",
                        "image_path": "af8980e65530d7ee7952849876430d7cjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426361572",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 56,
                        "name": "油豆腐粉丝汤",
                        "photos": [
                            "af8980e65530d7ee7952849876430d7cjpeg"
                        ],
                        "rating": 4.31,
                        "rating_count": 13,
                        "restaurant_id": 647728,
                        "satisfy_count": 13,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56749922,
                                "is_essential": false,
                                "item_id": "17426361572",
                                "name": "油豆腐粉丝汤",
                                "original_price": 10.8,
                                "packing_fee": 1,
                                "pinyin_name": "youdoufufensitang",
                                "price": 6.37,
                                "promotion_stock": 8198,
                                "recent_popularity": 56,
                                "recent_rating": 4.31,
                                "restaurant_id": 647728,
                                "sku_id": "20659570916",
                                "sold_out": false,
                                "specs": [],
                                "stock": 8198,
                                "virtual_food_id": 19515118,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "13评价 月售56份",
                        "virtual_food_id": 19515118
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "两只百叶包、两只油面筋塞肉（自制油面筋）好吃！",
                        "image_path": "911a939ce2e4ca22292de0efeb6391c3jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426362596",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 52,
                        "name": "双档汤",
                        "photos": [
                            "911a939ce2e4ca22292de0efeb6391c3jpeg"
                        ],
                        "rating": 4.22,
                        "rating_count": 18,
                        "restaurant_id": 647728,
                        "satisfy_count": 18,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750088,
                                "is_essential": false,
                                "item_id": "17426362596",
                                "name": "双档汤",
                                "packing_fee": 1,
                                "pinyin_name": "shuangdangtang",
                                "price": 20.8,
                                "promotion_stock": -1,
                                "recent_popularity": 52,
                                "recent_rating": 4.22,
                                "restaurant_id": 647728,
                                "sku_id": "20659571940",
                                "sold_out": false,
                                "specs": [],
                                "stock": 6212,
                                "virtual_food_id": 19553120,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "18评价 月售52份",
                        "virtual_food_id": 19553120
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "",
                        "image_path": "29c938ed10f69e277e42fdad10e219a4jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000244668118244",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 46,
                        "name": "上海小笼包+鸭血汤",
                        "photos": [
                            "29c938ed10f69e277e42fdad10e219a4jpeg"
                        ],
                        "rating": 4.42,
                        "rating_count": 12,
                        "restaurant_id": 647728,
                        "satisfy_count": 12,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1476907820,
                                "is_essential": false,
                                "item_id": "200000244668118244",
                                "name": "上海小笼包+鸭血汤",
                                "packing_fee": 2,
                                "pinyin_name": "shanghaixiaolongbao+yaxuetang",
                                "price": 33.8,
                                "promotion_stock": -1,
                                "recent_popularity": 46,
                                "recent_rating": 4.42,
                                "restaurant_id": 647728,
                                "sku_id": "200000283553629412",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9742,
                                "virtual_food_id": 1438933731,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "12评价 月售46份",
                        "virtual_food_id": 1438933731
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "",
                        "image_path": "d59da1dbda57f764d03e5b43c85f43cfjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000226955410660",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 40,
                        "name": "&干蒸荠菜小馄饨",
                        "photos": [
                            "d59da1dbda57f764d03e5b43c85f43cfjpeg"
                        ],
                        "rating": 4.46,
                        "rating_count": 13,
                        "restaurant_id": 647728,
                        "satisfy_count": 13,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1454767100,
                                "is_essential": false,
                                "item_id": "200000226955410660",
                                "name": "&干蒸荠菜小馄饨",
                                "packing_fee": 1.5,
                                "pinyin_name": "&ganzhengjicaixiaohuntun",
                                "price": 10,
                                "promotion_stock": -1,
                                "recent_popularity": 40,
                                "recent_rating": 4.46,
                                "restaurant_id": 647728,
                                "sku_id": "200000260881516772",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9856,
                                "virtual_food_id": 1421636141,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "13评价 月售40份",
                        "virtual_food_id": 1421636141
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589979,
                        "description": "10只/碗－小青菜与荠菜各取二分之一，去除了单单荠菜的干干的口感，既有了小青菜的新鲜、也有了荠菜的香味。",
                        "image_path": "cabaaa7daacfe55506750796f2272d61jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426356452",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 27,
                        "name": "菜肉大馄饨",
                        "photos": [
                            "cabaaa7daacfe55506750796f2272d61jpeg"
                        ],
                        "rating": 4.36,
                        "rating_count": 11,
                        "restaurant_id": 647728,
                        "satisfy_count": 11,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56749165,
                                "is_essential": false,
                                "item_id": "17426356452",
                                "name": "菜肉大馄饨",
                                "packing_fee": 1,
                                "pinyin_name": "cairoudahuntun",
                                "price": 18.8,
                                "promotion_stock": -1,
                                "recent_popularity": 27,
                                "recent_rating": 4.36,
                                "restaurant_id": 647728,
                                "sku_id": "20659565796",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "10只/碗"
                                    }
                                ],
                                "stock": 8484,
                                "virtual_food_id": 21324541,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "10只/碗"
                                ]
                            }
                        ],
                        "tips": "11评价 月售27份",
                        "virtual_food_id": 21324541
                    }
                ],
                "global_id": "-1",
                "grey_icon_url": "aba732b4ca103b2521c872442d7e5d4epng",
                "icon_url": "06a05b267f338acfeb8bd682d16e836dpng",
                "id": -1,
                "is_selected": true,
                "name": "热销",
                "type": 2
            },
            {
                "description": "美味又实惠，大家快来抢",
                "foods": [
                    {
                        "activity": {
                            "activity_type": "",
                            "applicable_quantity": 1,
                            "applicable_quantity_detail_text": "每单限1份优惠，超出的份数按原价计算",
                            "applicable_quantity_text": "每单限1份优惠",
                            "applicable_quantity_text_color": "eb6551",
                            "benefit_text": "5.8折",
                            "description": "单品折扣",
                            "discount": 0.58,
                            "fixed_price": -1.0,
                            "icon_color": "eb6551",
                            "icon_name": "折",
                            "id": 1711097610,
                            "image_text": "5.8折，限1份",
                            "image_text_color": "f07373",
                            "is_exclusive": 0,
                            "is_price_changed": false,
                            "is_promotion_toast_popup": true,
                            "is_tied_selling": false,
                            "max_quantity": 1,
                            "minimum_delivery_rule": 1,
                            "must_super_vip": false,
                            "name": "单品折扣",
                            "quantity_condition": 1,
                            "quantity_text": "",
                            "sum_condition": 0
                        },
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "选用上好新鲜的鸭血制作而成，美味佳肴！",
                        "image_path": "7cec6c3bfe0f79495e67067dde424c04jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426364644",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 57,
                        "name": "鸭血汤",
                        "photos": [
                            "7cec6c3bfe0f79495e67067dde424c04jpeg"
                        ],
                        "rating": 4.17,
                        "rating_count": 12,
                        "restaurant_id": 647728,
                        "satisfy_count": 12,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750273,
                                "is_essential": false,
                                "item_id": "17426364644",
                                "name": "鸭血汤",
                                "original_price": 22.8,
                                "packing_fee": 1,
                                "pinyin_name": "yaxuetang",
                                "price": 13.22,
                                "promotion_stock": 4084,
                                "recent_popularity": 57,
                                "recent_rating": 4.17,
                                "restaurant_id": 647728,
                                "sku_id": "20659573988",
                                "sold_out": false,
                                "specs": [],
                                "stock": 4084,
                                "virtual_food_id": 19552869,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "12评价 月售57份",
                        "virtual_food_id": 19552869
                    },
                    {
                        "activity": {
                            "activity_type": "",
                            "applicable_quantity": 1,
                            "applicable_quantity_detail_text": "每单限1份优惠，超出的份数按原价计算",
                            "applicable_quantity_text": "每单限1份优惠",
                            "applicable_quantity_text_color": "eb6551",
                            "benefit_text": "5.8折",
                            "description": "单品折扣",
                            "discount": 0.58,
                            "fixed_price": -1.0,
                            "icon_color": "eb6551",
                            "icon_name": "折",
                            "id": 1706616442,
                            "image_text": "5.8折，限1份",
                            "image_text_color": "f07373",
                            "is_exclusive": 0,
                            "is_price_changed": false,
                            "is_promotion_toast_popup": true,
                            "is_tied_selling": false,
                            "max_quantity": 1,
                            "minimum_delivery_rule": 1,
                            "must_super_vip": false,
                            "name": "单品折扣",
                            "quantity_condition": 1,
                            "quantity_text": "",
                            "sum_condition": 0
                        },
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590026,
                        "description": "多种配方精心熬制而成！",
                        "image_path": "e52feed11c7908633e749c27bc7524cejpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426381028",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 8,
                        "name": "自制特色酸梅汤",
                        "photos": [
                            "e52feed11c7908633e749c27bc7524cejpeg"
                        ],
                        "rating": 4.33,
                        "rating_count": 3,
                        "restaurant_id": 647728,
                        "satisfy_count": 3,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56772926,
                                "is_essential": false,
                                "item_id": "17426381028",
                                "name": "自制特色酸梅汤",
                                "original_price": 8.8,
                                "packing_fee": 0,
                                "pinyin_name": "zizhitesesuanmeitang",
                                "price": 5.1,
                                "promotion_stock": 9623,
                                "recent_popularity": 8,
                                "recent_rating": 4.33,
                                "restaurant_id": 647728,
                                "sku_id": "20659590372",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9623,
                                "virtual_food_id": 19543838,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "3评价 月售8份",
                        "virtual_food_id": 19543838
                    },
                    {
                        "activity": {
                            "activity_type": "",
                            "applicable_quantity": 1,
                            "applicable_quantity_detail_text": "每单限1份优惠，超出的份数按原价计算",
                            "applicable_quantity_text": "每单限1份优惠",
                            "applicable_quantity_text_color": "eb6551",
                            "benefit_text": "5.9折",
                            "description": "单品折扣",
                            "discount": 0.59,
                            "fixed_price": -1.0,
                            "icon_color": "eb6551",
                            "icon_name": "折",
                            "id": 1698052378,
                            "image_text": "5.9折，限1份",
                            "image_text_color": "f07373",
                            "is_exclusive": 0,
                            "is_price_changed": false,
                            "is_promotion_toast_popup": true,
                            "is_tied_selling": false,
                            "max_quantity": 1,
                            "minimum_delivery_rule": 1,
                            "must_super_vip": false,
                            "name": "单品折扣",
                            "quantity_condition": 1,
                            "quantity_text": "",
                            "sum_condition": 0
                        },
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "",
                        "image_path": "af8980e65530d7ee7952849876430d7cjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426361572",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 56,
                        "name": "油豆腐粉丝汤",
                        "photos": [
                            "af8980e65530d7ee7952849876430d7cjpeg"
                        ],
                        "rating": 4.31,
                        "rating_count": 13,
                        "restaurant_id": 647728,
                        "satisfy_count": 13,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56749922,
                                "is_essential": false,
                                "item_id": "17426361572",
                                "name": "油豆腐粉丝汤",
                                "original_price": 10.8,
                                "packing_fee": 1,
                                "pinyin_name": "youdoufufensitang",
                                "price": 6.37,
                                "promotion_stock": 8198,
                                "recent_popularity": 56,
                                "recent_rating": 4.31,
                                "restaurant_id": 647728,
                                "sku_id": "20659570916",
                                "sold_out": false,
                                "specs": [],
                                "stock": 8198,
                                "virtual_food_id": 19515118,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "13评价 月售56份",
                        "virtual_food_id": 19515118
                    }
                ],
                "global_id": "-2",
                "grey_icon_url": "f8ddec5b7355581faa2bf4e24942dcc2png",
                "icon_url": "b918cf4f67e0e8223931cd595dc932fepng",
                "id": -2,
                "is_selected": false,
                "name": "优惠",
                "type": 3
            },
            {
                "description": "",
                "foods": [
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1245316085,
                        "description": "",
                        "image_path": "2ce716b97b7a707979f98b1c48daad27jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000264080840932",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 0,
                        "name": "扫二维码领20元红包，亲！赶紧扫一扫哦",
                        "photos": [
                            "2ce716b97b7a707979f98b1c48daad27jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1498689392,
                                "is_essential": false,
                                "item_id": "200000264080840932",
                                "name": "扫二维码领20元红包，亲！赶紧扫一扫哦",
                                "packing_fee": 0,
                                "pinyin_name": "saoerweimaling20yuanhongbao，qin！ganjinsaoyisaoe",
                                "price": 0,
                                "promotion_stock": -1,
                                "recent_popularity": 0,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "200000305857914084",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9987,
                                "virtual_food_id": 1457891461,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售0份",
                        "virtual_food_id": 1457891461
                    }
                ],
                "global_id": "200000046403654884",
                "grey_icon_url": "",
                "icon_url": "",
                "id": 1245316085,
                "is_activity": false,
                "is_selected": false,
                "name": "扫二维码领20红包",
                "type": 1
            },
            {
                "description": "",
                "foods": [
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "绝配商品，👍️👍️👍️",
                        "image_path": "fe3a8c69a644be89f48134ce4c2a1139jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000239302203620",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 8,
                        "name": "半笼荠菜小笼+半笼笋丁小笼+鸭血汤",
                        "photos": [
                            "fe3a8c69a644be89f48134ce4c2a1139jpeg"
                        ],
                        "rating": 4.25,
                        "rating_count": 4,
                        "restaurant_id": 647728,
                        "satisfy_count": 4,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1469999397,
                                "is_essential": false,
                                "item_id": "200000239302203620",
                                "name": "半笼荠菜小笼+半笼笋丁小笼+鸭血汤",
                                "packing_fee": 2,
                                "pinyin_name": "banlongjicaixiaolong+banlongsundingxiaolong+yaxuetang",
                                "price": 35.8,
                                "promotion_stock": -1,
                                "recent_popularity": 8,
                                "recent_rating": 4.25,
                                "restaurant_id": 647728,
                                "sku_id": "200000276479384804",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9940,
                                "virtual_food_id": 1433693551,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "4评价 月售8份",
                        "virtual_food_id": 1433693551
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "",
                        "image_path": "c0b8fb34a0c60cdd68b4b1f5008a8358jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000255760274660",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 1,
                        "name": "笋丁小笼+北京信远斋酸梅汤",
                        "photos": [
                            "c0b8fb34a0c60cdd68b4b1f5008a8358jpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 1,
                        "restaurant_id": 647728,
                        "satisfy_count": 1,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1489631004,
                                "is_essential": false,
                                "item_id": "200000255760274660",
                                "name": "笋丁小笼+北京信远斋酸梅汤",
                                "packing_fee": 2,
                                "pinyin_name": "sundingxiaolong+beijingxinyuanzhaisuanmeitang",
                                "price": 31.8,
                                "promotion_stock": -1,
                                "recent_popularity": 1,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "200000296582148324",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9999,
                                "virtual_food_id": 1449765897,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "1评价 月售1份",
                        "virtual_food_id": 1449765897
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "",
                        "image_path": "a43dde003a3aab47b78cea9fd1f57316jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000251608802532",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 5,
                        "name": "无锡小笼+北京信远斋酸梅汁",
                        "photos": [
                            "a43dde003a3aab47b78cea9fd1f57316jpeg"
                        ],
                        "rating": 4.33,
                        "rating_count": 3,
                        "restaurant_id": 647728,
                        "satisfy_count": 3,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1484996564,
                                "is_essential": false,
                                "item_id": "200000251608802532",
                                "name": "无锡小笼+北京信远斋酸梅汁",
                                "packing_fee": 2,
                                "pinyin_name": "wuxixiaolong+beijingxinyuanzhaisuanmeizhi",
                                "price": 35.8,
                                "promotion_stock": -1,
                                "recent_popularity": 5,
                                "recent_rating": 4.33,
                                "restaurant_id": 647728,
                                "sku_id": "200000291836508388",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9980,
                                "virtual_food_id": 1445711754,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "3评价 月售5份",
                        "virtual_food_id": 1445711754
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "",
                        "image_path": "fe3a8c69a644be89f48134ce4c2a1139jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "247795877092",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 4,
                        "name": "上海小笼包+酸梅汤",
                        "photos": [
                            "fe3a8c69a644be89f48134ce4c2a1139jpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 1,
                        "restaurant_id": 647728,
                        "satisfy_count": 1,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 670605081,
                                "is_essential": false,
                                "item_id": "247795877092",
                                "name": "上海小笼包+酸梅汤",
                                "packing_fee": 2,
                                "pinyin_name": "shanghaixiaolongbao+suanmeitang",
                                "price": 28.8,
                                "promotion_stock": -1,
                                "recent_popularity": 4,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "287059602660",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9831,
                                "virtual_food_id": 645525599,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "1评价 月售4份",
                        "virtual_food_id": 645525599
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "",
                        "image_path": "29c938ed10f69e277e42fdad10e219a4jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000244668118244",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 46,
                        "name": "上海小笼包+鸭血汤",
                        "photos": [
                            "29c938ed10f69e277e42fdad10e219a4jpeg"
                        ],
                        "rating": 4.42,
                        "rating_count": 12,
                        "restaurant_id": 647728,
                        "satisfy_count": 12,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1476907820,
                                "is_essential": false,
                                "item_id": "200000244668118244",
                                "name": "上海小笼包+鸭血汤",
                                "packing_fee": 2,
                                "pinyin_name": "shanghaixiaolongbao+yaxuetang",
                                "price": 33.8,
                                "promotion_stock": -1,
                                "recent_popularity": 46,
                                "recent_rating": 4.42,
                                "restaurant_id": 647728,
                                "sku_id": "200000283553629412",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9742,
                                "virtual_food_id": 1438933731,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "12评价 月售46份",
                        "virtual_food_id": 1438933731
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "",
                        "image_path": "fe3a8c69a644be89f48134ce4c2a1139jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000244674409700",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 75,
                        "name": "无锡小笼包+鸭血汤",
                        "photos": [
                            "fe3a8c69a644be89f48134ce4c2a1139jpeg"
                        ],
                        "rating": 4.28,
                        "rating_count": 25,
                        "restaurant_id": 647728,
                        "satisfy_count": 25,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1476916615,
                                "is_essential": false,
                                "item_id": "200000244674409700",
                                "name": "无锡小笼包+鸭血汤",
                                "packing_fee": 2,
                                "pinyin_name": "wuxixiaolongbao+yaxuetang",
                                "price": 39.8,
                                "promotion_stock": -1,
                                "recent_popularity": 75,
                                "recent_rating": 4.28,
                                "restaurant_id": 647728,
                                "sku_id": "200000283562596580",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9770,
                                "virtual_food_id": 1438939825,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "25评价 月售75份",
                        "virtual_food_id": 1438939825
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "",
                        "image_path": "6d685dce797370f8d1b7f0215c723027jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000251027948772",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 1,
                        "name": "上海小笼+杨梅汁",
                        "photos": [
                            "6d685dce797370f8d1b7f0215c723027jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1484281696,
                                "is_essential": false,
                                "item_id": "200000251027948772",
                                "name": "上海小笼+杨梅汁",
                                "packing_fee": 2,
                                "pinyin_name": "shanghaixiaolong+yangmeizhi",
                                "price": 34.8,
                                "promotion_stock": -1,
                                "recent_popularity": 1,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "200000291104424164",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9995,
                                "virtual_food_id": 1445144504,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售1份",
                        "virtual_food_id": 1445144504
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "10只",
                        "image_path": "29c938ed10f69e277e42fdad10e219a4jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000146524078308",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 10,
                        "name": "笋丁小笼+鸭血汤",
                        "photos": [
                            "29c938ed10f69e277e42fdad10e219a4jpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 2,
                        "restaurant_id": 647728,
                        "satisfy_count": 2,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1363193471,
                                "is_essential": false,
                                "item_id": "200000146524078308",
                                "name": "笋丁小笼+鸭血汤",
                                "packing_fee": 2,
                                "pinyin_name": "sundingxiaolong+yaxuetang",
                                "price": 33.8,
                                "promotion_stock": -1,
                                "recent_popularity": 10,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "200000167110137060",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9935,
                                "virtual_food_id": 1343089927,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "2评价 月售10份",
                        "virtual_food_id": 1343089927
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 1244000433,
                        "description": "",
                        "image_path": "29c938ed10f69e277e42fdad10e219a4jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000226954356964",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 3,
                        "name": "荠菜小笼+鸭血汤",
                        "photos": [
                            "29c938ed10f69e277e42fdad10e219a4jpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 2,
                        "restaurant_id": 647728,
                        "satisfy_count": 2,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1454765895,
                                "is_essential": false,
                                "item_id": "200000226954356964",
                                "name": "荠菜小笼+鸭血汤",
                                "packing_fee": 2,
                                "pinyin_name": "jicaixiaolong+yaxuetang",
                                "price": 33.8,
                                "promotion_stock": -1,
                                "recent_popularity": 3,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "200000260880282852",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9987,
                                "virtual_food_id": 1421635112,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "2评价 月售3份",
                        "virtual_food_id": 1421635112
                    }
                ],
                "global_id": "200000045056444644",
                "grey_icon_url": "",
                "icon_url": "",
                "id": 1244000433,
                "is_activity": false,
                "is_selected": false,
                "name": "经典套餐",
                "type": 1
            },
            {
                "description": "",
                "foods": [
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "",
                        "image_path": "635473e748797f5d6f6f18aedd9fe6e7jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000182925493476",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 99,
                        "name": "宝鼎米醋",
                        "photos": [
                            "635473e748797f5d6f6f18aedd9fe6e7jpeg"
                        ],
                        "rating": 4.3,
                        "rating_count": 20,
                        "restaurant_id": 647728,
                        "satisfy_count": 20,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1404814064,
                                "is_essential": false,
                                "item_id": "200000182925493476",
                                "name": "宝鼎米醋",
                                "packing_fee": 0,
                                "pinyin_name": "baodingmicu",
                                "price": 0.5,
                                "promotion_stock": -1,
                                "recent_popularity": 99,
                                "recent_rating": 4.3,
                                "restaurant_id": 647728,
                                "sku_id": "200000209729601764",
                                "sold_out": false,
                                "specs": [],
                                "stock": 8996,
                                "virtual_food_id": 1378638190,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "20评价 月售99份",
                        "virtual_food_id": 1378638190
                    },
                    {
                        "attributes": [
                            {
                                "icon_color": "ec9c68",
                                "icon_name": "招牌"
                            }
                        ],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "8只/笼－皮薄、肉嫩、一口下去香喷喷的、好吃极了！8只／笼",
                        "image_path": "35b3282ed99b936066731cada829d720jpeg",
                        "is_essential": false,
                        "is_featured": 1,
                        "item_id": "17426348260",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 266,
                        "name": "无锡小笼包",
                        "photos": [
                            "35b3282ed99b936066731cada829d720jpeg"
                        ],
                        "rating": 4.24,
                        "rating_count": 74,
                        "restaurant_id": 647728,
                        "satisfy_count": 74,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56621158,
                                "is_essential": false,
                                "item_id": "17426348260",
                                "name": "无锡小笼包",
                                "packing_fee": 1.5,
                                "pinyin_name": "wuxixiaolongbao",
                                "price": 28.8,
                                "promotion_stock": -1,
                                "recent_popularity": 266,
                                "recent_rating": 4.24,
                                "restaurant_id": 647728,
                                "sku_id": "20659557604",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "8只/笼"
                                    }
                                ],
                                "stock": 8122,
                                "virtual_food_id": 21316401,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "8只/笼"
                                ]
                            }
                        ],
                        "tips": "74评价 月售266份",
                        "virtual_food_id": 21316401
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "12只/笼－选用新鲜、上好的夹心猪肉，以皮薄、肉嫩、汁多、味鲜、形美著称！12只／笼",
                        "image_path": "54bbd23b2bb2f42ec4c52c98e6231778jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426349284",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 339,
                        "name": "上海小笼包",
                        "photos": [
                            "54bbd23b2bb2f42ec4c52c98e6231778jpeg"
                        ],
                        "rating": 4.17,
                        "rating_count": 76,
                        "restaurant_id": 647728,
                        "satisfy_count": 73,
                        "satisfy_rate": 96,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56622200,
                                "is_essential": false,
                                "item_id": "17426349284",
                                "name": "上海小笼包",
                                "packing_fee": 1.5,
                                "pinyin_name": "shanghaixiaolongbao",
                                "price": 20.8,
                                "promotion_stock": -1,
                                "recent_popularity": 339,
                                "recent_rating": 4.17,
                                "restaurant_id": 647728,
                                "sku_id": "20659558628",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "12只/笼"
                                    }
                                ],
                                "stock": 3431,
                                "virtual_food_id": 21316436,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "12只/笼"
                                ]
                            }
                        ],
                        "tips": "76评价 月售339份",
                        "virtual_food_id": 21316436
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "10只/笼－一整颗大虾仁、配以新鲜的夹心猪肉作馅、再加上鲜美的皮冻汤汁，美味可口呀！10只／笼",
                        "image_path": "d932308cc0760515cc04ad0fd6838815jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426350308",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 11,
                        "name": "虾仁小笼包",
                        "photos": [
                            "d932308cc0760515cc04ad0fd6838815jpeg"
                        ],
                        "rating": 4.5,
                        "rating_count": 6,
                        "restaurant_id": 647728,
                        "satisfy_count": 6,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56623633,
                                "is_essential": false,
                                "item_id": "17426350308",
                                "name": "虾仁小笼包",
                                "packing_fee": 1.5,
                                "pinyin_name": "xiarenxiaolongbao",
                                "price": 35.8,
                                "promotion_stock": -1,
                                "recent_popularity": 11,
                                "recent_rating": 4.5,
                                "restaurant_id": 647728,
                                "sku_id": "20659559652",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "10只/笼"
                                    }
                                ],
                                "stock": 9174,
                                "virtual_food_id": 21316468,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "10只/笼"
                                ]
                            }
                        ],
                        "tips": "6评价 月售11份",
                        "virtual_food_id": 21316468
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "10只/笼－以皮薄、馅嫩、味鲜、不腻而著称，于制蟹油、皮汤、做馅、擀皮、捏包、火蒸等工序均有严格要求。10只／笼",
                        "image_path": "ce37a99041637e3947d50e0db4ec5006jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426351332",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 7,
                        "name": "蟹黄小笼汤包",
                        "photos": [
                            "ce37a99041637e3947d50e0db4ec5006jpeg"
                        ],
                        "rating": 4.67,
                        "rating_count": 3,
                        "restaurant_id": 647728,
                        "satisfy_count": 3,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56748909,
                                "is_essential": false,
                                "item_id": "17426351332",
                                "name": "蟹黄小笼汤包",
                                "packing_fee": 1.5,
                                "pinyin_name": "xiehuangxiaolongtangbao",
                                "price": 45.8,
                                "promotion_stock": -1,
                                "recent_popularity": 7,
                                "recent_rating": 4.67,
                                "restaurant_id": 647728,
                                "sku_id": "20659560676",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "10只/笼"
                                    }
                                ],
                                "stock": 8218,
                                "virtual_food_id": 21316502,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "10只/笼"
                                ]
                            }
                        ],
                        "tips": "3评价 月售7份",
                        "virtual_food_id": 21316502
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "一笼10只－10只／笼",
                        "image_path": "b6ec0a37d9560a26c8a373517f63449ajpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "247267116260",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 4,
                        "name": "荠菜鲜肉小笼包",
                        "photos": [
                            "b6ec0a37d9560a26c8a373517f63449ajpeg"
                        ],
                        "rating": 4.5,
                        "rating_count": 2,
                        "restaurant_id": 647728,
                        "satisfy_count": 2,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 670004374,
                                "is_essential": false,
                                "item_id": "247267116260",
                                "name": "荠菜鲜肉小笼包",
                                "packing_fee": 1.5,
                                "pinyin_name": "jicaixianrouxiaolongbao",
                                "price": 26,
                                "promotion_stock": -1,
                                "recent_popularity": 4,
                                "recent_rating": 4.5,
                                "restaurant_id": 647728,
                                "sku_id": "286444478692",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "一笼10只"
                                    }
                                ],
                                "stock": 9921,
                                "virtual_food_id": 645009231,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "一笼10只"
                                ]
                            }
                        ],
                        "tips": "2评价 月售4份",
                        "virtual_food_id": 645009231
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "",
                        "image_path": "29c938ed10f69e277e42fdad10e219a4jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000226609439972",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 16,
                        "name": "笋丁小笼包",
                        "photos": [
                            "29c938ed10f69e277e42fdad10e219a4jpeg"
                        ],
                        "rating": 4.43,
                        "rating_count": 7,
                        "restaurant_id": 647728,
                        "satisfy_count": 7,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1454273505,
                                "is_essential": false,
                                "item_id": "200000226609439972",
                                "name": "笋丁小笼包",
                                "packing_fee": 1.5,
                                "pinyin_name": "sundingxiaolongbao",
                                "price": 26.8,
                                "promotion_stock": -1,
                                "recent_popularity": 16,
                                "recent_rating": 4.43,
                                "restaurant_id": 647728,
                                "sku_id": "200000260376072420",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9908,
                                "virtual_food_id": 1421298280,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "7评价 月售16份",
                        "virtual_food_id": 1421298280
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589971,
                        "description": "",
                        "image_path": "d59da1dbda57f764d03e5b43c85f43cfjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000226955410660",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 40,
                        "name": "&干蒸荠菜小馄饨",
                        "photos": [
                            "d59da1dbda57f764d03e5b43c85f43cfjpeg"
                        ],
                        "rating": 4.46,
                        "rating_count": 13,
                        "restaurant_id": 647728,
                        "satisfy_count": 13,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1454767100,
                                "is_essential": false,
                                "item_id": "200000226955410660",
                                "name": "&干蒸荠菜小馄饨",
                                "packing_fee": 1.5,
                                "pinyin_name": "&ganzhengjicaixiaohuntun",
                                "price": 10,
                                "promotion_stock": -1,
                                "recent_popularity": 40,
                                "recent_rating": 4.46,
                                "restaurant_id": 647728,
                                "sku_id": "200000260881516772",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9856,
                                "virtual_food_id": 1421636141,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "13评价 月售40份",
                        "virtual_food_id": 1421636141
                    }
                ],
                "global_id": "2872390884",
                "grey_icon_url": "",
                "icon_url": "",
                "id": 5589971,
                "is_activity": false,
                "is_selected": false,
                "name": "小笼汤包系列",
                "type": 1
            },
            {
                "description": "",
                "foods": [
                    {
                        "activity": {
                            "activity_type": "",
                            "applicable_quantity": 1,
                            "applicable_quantity_detail_text": "每单限1份优惠，超出的份数按原价计算",
                            "applicable_quantity_text": "每单限1份优惠",
                            "applicable_quantity_text_color": "eb6551",
                            "benefit_text": "5.8折",
                            "description": "单品折扣",
                            "discount": 0.58,
                            "fixed_price": -1.0,
                            "icon_color": "eb6551",
                            "icon_name": "折",
                            "id": 1711097610,
                            "image_text": "5.8折，限1份",
                            "image_text_color": "f07373",
                            "is_exclusive": 0,
                            "is_price_changed": false,
                            "is_promotion_toast_popup": true,
                            "is_tied_selling": false,
                            "max_quantity": 1,
                            "minimum_delivery_rule": 1,
                            "must_super_vip": false,
                            "name": "单品折扣",
                            "quantity_condition": 1,
                            "quantity_text": "",
                            "sum_condition": 0
                        },
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "选用上好新鲜的鸭血制作而成，美味佳肴！",
                        "image_path": "7cec6c3bfe0f79495e67067dde424c04jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426364644",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 57,
                        "name": "鸭血汤",
                        "photos": [
                            "7cec6c3bfe0f79495e67067dde424c04jpeg"
                        ],
                        "rating": 4.17,
                        "rating_count": 12,
                        "restaurant_id": 647728,
                        "satisfy_count": 12,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750273,
                                "is_essential": false,
                                "item_id": "17426364644",
                                "name": "鸭血汤",
                                "original_price": 22.8,
                                "packing_fee": 1,
                                "pinyin_name": "yaxuetang",
                                "price": 13.22,
                                "promotion_stock": 4084,
                                "recent_popularity": 57,
                                "recent_rating": 4.17,
                                "restaurant_id": 647728,
                                "sku_id": "20659573988",
                                "sold_out": false,
                                "specs": [],
                                "stock": 4084,
                                "virtual_food_id": 19552869,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "12评价 月售57份",
                        "virtual_food_id": 19552869
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "12元/碗",
                        "image_path": "cefd34dd79f5e5f4b43f24b46b3aa747jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426359524",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 6,
                        "name": "包心鱼丸汤",
                        "photos": [
                            "cefd34dd79f5e5f4b43f24b46b3aa747jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56749688,
                                "is_essential": false,
                                "item_id": "17426359524",
                                "name": "包心鱼丸汤",
                                "packing_fee": 1,
                                "pinyin_name": "baoxinyuwantang",
                                "price": 14.8,
                                "promotion_stock": 9231,
                                "recent_popularity": 6,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659568868",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "12元/碗"
                                    }
                                ],
                                "stock": 9231,
                                "virtual_food_id": 19514635,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "12元/碗"
                                ]
                            }
                        ],
                        "tips": "0评价 月售6份",
                        "virtual_food_id": 19514635
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "自己制作的百叶包、味道美、分量足！",
                        "image_path": "dd94d10aae019c6afd4f1fef5db97202jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426360548",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 21,
                        "name": "百叶包粉丝汤",
                        "photos": [
                            "dd94d10aae019c6afd4f1fef5db97202jpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 3,
                        "restaurant_id": 647728,
                        "satisfy_count": 3,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56749742,
                                "is_essential": false,
                                "item_id": "17426360548",
                                "name": "百叶包粉丝汤",
                                "packing_fee": 1,
                                "pinyin_name": "baiyebaofensitang",
                                "price": 16.8,
                                "promotion_stock": -1,
                                "recent_popularity": 21,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659569892",
                                "sold_out": false,
                                "specs": [],
                                "stock": 8644,
                                "virtual_food_id": 19553041,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "3评价 月售21份",
                        "virtual_food_id": 19553041
                    },
                    {
                        "activity": {
                            "activity_type": "",
                            "applicable_quantity": 1,
                            "applicable_quantity_detail_text": "每单限1份优惠，超出的份数按原价计算",
                            "applicable_quantity_text": "每单限1份优惠",
                            "applicable_quantity_text_color": "eb6551",
                            "benefit_text": "5.9折",
                            "description": "单品折扣",
                            "discount": 0.59,
                            "fixed_price": -1.0,
                            "icon_color": "eb6551",
                            "icon_name": "折",
                            "id": 1698052378,
                            "image_text": "5.9折，限1份",
                            "image_text_color": "f07373",
                            "is_exclusive": 0,
                            "is_price_changed": false,
                            "is_promotion_toast_popup": true,
                            "is_tied_selling": false,
                            "max_quantity": 1,
                            "minimum_delivery_rule": 1,
                            "must_super_vip": false,
                            "name": "单品折扣",
                            "quantity_condition": 1,
                            "quantity_text": "",
                            "sum_condition": 0
                        },
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "",
                        "image_path": "af8980e65530d7ee7952849876430d7cjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426361572",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 56,
                        "name": "油豆腐粉丝汤",
                        "photos": [
                            "af8980e65530d7ee7952849876430d7cjpeg"
                        ],
                        "rating": 4.31,
                        "rating_count": 13,
                        "restaurant_id": 647728,
                        "satisfy_count": 13,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56749922,
                                "is_essential": false,
                                "item_id": "17426361572",
                                "name": "油豆腐粉丝汤",
                                "original_price": 10.8,
                                "packing_fee": 1,
                                "pinyin_name": "youdoufufensitang",
                                "price": 6.37,
                                "promotion_stock": 8198,
                                "recent_popularity": 56,
                                "recent_rating": 4.31,
                                "restaurant_id": 647728,
                                "sku_id": "20659570916",
                                "sold_out": false,
                                "specs": [],
                                "stock": 8198,
                                "virtual_food_id": 19515118,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "13评价 月售56份",
                        "virtual_food_id": 19515118
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "两只百叶包、两只油面筋塞肉（自制油面筋）好吃！",
                        "image_path": "911a939ce2e4ca22292de0efeb6391c3jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426362596",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 52,
                        "name": "双档汤",
                        "photos": [
                            "911a939ce2e4ca22292de0efeb6391c3jpeg"
                        ],
                        "rating": 4.22,
                        "rating_count": 18,
                        "restaurant_id": 647728,
                        "satisfy_count": 18,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750088,
                                "is_essential": false,
                                "item_id": "17426362596",
                                "name": "双档汤",
                                "packing_fee": 1,
                                "pinyin_name": "shuangdangtang",
                                "price": 20.8,
                                "promotion_stock": -1,
                                "recent_popularity": 52,
                                "recent_rating": 4.22,
                                "restaurant_id": 647728,
                                "sku_id": "20659571940",
                                "sold_out": false,
                                "specs": [],
                                "stock": 6212,
                                "virtual_food_id": 19553120,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "18评价 月售52份",
                        "virtual_food_id": 19553120
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589985,
                        "description": "",
                        "image_path": "393e448e2521767226716c242a4ea587jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426363620",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 14,
                        "name": "酸辣粉",
                        "photos": [
                            "393e448e2521767226716c242a4ea587jpeg"
                        ],
                        "rating": 3.83,
                        "rating_count": 6,
                        "restaurant_id": 647728,
                        "satisfy_count": 5,
                        "satisfy_rate": 83,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750207,
                                "is_essential": false,
                                "item_id": "17426363620",
                                "name": "酸辣粉",
                                "packing_fee": 1,
                                "pinyin_name": "suanlafen",
                                "price": 14.8,
                                "promotion_stock": -1,
                                "recent_popularity": 14,
                                "recent_rating": 3.83,
                                "restaurant_id": 647728,
                                "sku_id": "20659572964",
                                "sold_out": false,
                                "specs": [],
                                "stock": 7921,
                                "virtual_food_id": 19515424,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "6评价 月售14份",
                        "virtual_food_id": 19515424
                    }
                ],
                "global_id": "2872392932",
                "grey_icon_url": "",
                "icon_url": "",
                "id": 5589985,
                "is_activity": false,
                "is_selected": false,
                "name": "汤品系列",
                "type": 1
            },
            {
                "description": "",
                "foods": [
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589979,
                        "description": "10只/碗－小青菜与荠菜各取二分之一，去除了单单荠菜的干干的口感，既有了小青菜的新鲜、也有了荠菜的香味。",
                        "image_path": "cabaaa7daacfe55506750796f2272d61jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426356452",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 27,
                        "name": "菜肉大馄饨",
                        "photos": [
                            "cabaaa7daacfe55506750796f2272d61jpeg"
                        ],
                        "rating": 4.36,
                        "rating_count": 11,
                        "restaurant_id": 647728,
                        "satisfy_count": 11,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56749165,
                                "is_essential": false,
                                "item_id": "17426356452",
                                "name": "菜肉大馄饨",
                                "packing_fee": 1,
                                "pinyin_name": "cairoudahuntun",
                                "price": 18.8,
                                "promotion_stock": -1,
                                "recent_popularity": 27,
                                "recent_rating": 4.36,
                                "restaurant_id": 647728,
                                "sku_id": "20659565796",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "10只/碗"
                                    }
                                ],
                                "stock": 8484,
                                "virtual_food_id": 21324541,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "10只/碗"
                                ]
                            }
                        ],
                        "tips": "11评价 月售27份",
                        "virtual_food_id": 21324541
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589979,
                        "description": "10只/碗－新鲜的河虾、鲜嫩的猪肉、独家的配方，使得口感美味、嫩滑，很受欢迎！",
                        "image_path": "c7dc557e94e517e584703735b0529568jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426357476",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 21,
                        "name": "虾仁大馄饨",
                        "photos": [
                            "c7dc557e94e517e584703735b0529568jpeg"
                        ],
                        "rating": 4.5,
                        "rating_count": 6,
                        "restaurant_id": 647728,
                        "satisfy_count": 6,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56749426,
                                "is_essential": false,
                                "item_id": "17426357476",
                                "name": "虾仁大馄饨",
                                "packing_fee": 1,
                                "pinyin_name": "xiarendahuntun",
                                "price": 20.8,
                                "promotion_stock": -1,
                                "recent_popularity": 21,
                                "recent_rating": 4.5,
                                "restaurant_id": 647728,
                                "sku_id": "20659566820",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "10只/碗"
                                    }
                                ],
                                "stock": 9056,
                                "virtual_food_id": 19514124,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "10只/碗"
                                ]
                            }
                        ],
                        "tips": "6评价 月售21份",
                        "virtual_food_id": 19514124
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589979,
                        "description": "10只/碗－选用新鲜上等的开洋以及新鲜的猪肉搭配而成、给你一种不一样的味道。",
                        "image_path": "1f11fccabd05314328db6e1963128d73jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426358500",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 6,
                        "name": "开洋大馄饨",
                        "photos": [
                            "1f11fccabd05314328db6e1963128d73jpeg"
                        ],
                        "rating": 4.67,
                        "rating_count": 3,
                        "restaurant_id": 647728,
                        "satisfy_count": 3,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56749560,
                                "is_essential": false,
                                "item_id": "17426358500",
                                "name": "开洋大馄饨",
                                "packing_fee": 1,
                                "pinyin_name": "kaiyangdahuntun",
                                "price": 20.8,
                                "promotion_stock": -1,
                                "recent_popularity": 6,
                                "recent_rating": 4.67,
                                "restaurant_id": 647728,
                                "sku_id": "20659567844",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "10只/碗"
                                    }
                                ],
                                "stock": 9547,
                                "virtual_food_id": 21329679,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "10只/碗"
                                ]
                            }
                        ],
                        "tips": "3评价 月售6份",
                        "virtual_food_id": 21329679
                    }
                ],
                "global_id": "2872391908",
                "grey_icon_url": "",
                "icon_url": "",
                "id": 5589979,
                "is_activity": false,
                "is_selected": false,
                "name": "熟  馄饨系列",
                "type": 1
            },
            {
                "description": "",
                "foods": [
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590026,
                        "description": "",
                        "image_path": "ac4cc71b25fd051b55f7c2e381392db5jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426384100",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 1,
                        "name": "百岁山矿泉水",
                        "photos": [
                            "ac4cc71b25fd051b55f7c2e381392db5jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56774146,
                                "is_essential": false,
                                "item_id": "17426384100",
                                "name": "百岁山矿泉水",
                                "packing_fee": 0,
                                "pinyin_name": "baisuishankuangquanshui",
                                "price": 4,
                                "promotion_stock": -1,
                                "recent_popularity": 1,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659593444",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9634,
                                "virtual_food_id": 19545662,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售1份",
                        "virtual_food_id": 19545662
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590026,
                        "description": "果蔬汁饮料 （抖音网红 超级好喝）口感独特！",
                        "image_path": "dfd11498da9f62ec806fb804c83d1bd2jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000214522112228",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 5,
                        "name": "冰杨梅",
                        "photos": [
                            "dfd11498da9f62ec806fb804c83d1bd2jpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 1,
                        "restaurant_id": 647728,
                        "satisfy_count": 1,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1440275425,
                                "is_essential": false,
                                "item_id": "200000214522112228",
                                "name": "冰杨梅",
                                "packing_fee": 0,
                                "pinyin_name": "bingyangmei",
                                "price": 18,
                                "promotion_stock": -1,
                                "recent_popularity": 5,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "200000246042045668",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9955,
                                "virtual_food_id": 1409494244,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "1评价 月售5份",
                        "virtual_food_id": 1409494244
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590026,
                        "description": "",
                        "image_path": "733644986a571a09310e5a1cacae6d9fjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426385124",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 11,
                        "name": "可口可乐",
                        "photos": [
                            "733644986a571a09310e5a1cacae6d9fjpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 2,
                        "restaurant_id": 647728,
                        "satisfy_count": 2,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56774307,
                                "is_essential": false,
                                "item_id": "17426385124",
                                "name": "可口可乐",
                                "packing_fee": 0,
                                "pinyin_name": "kekoukele",
                                "price": 5,
                                "promotion_stock": -1,
                                "recent_popularity": 11,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659594468",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9608,
                                "virtual_food_id": 19688456,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "2评价 月售11份",
                        "virtual_food_id": 19688456
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590026,
                        "description": "低温发酵、口感纯正、绝对美味！",
                        "image_path": "61f8e2311bcf345e9e164bf2bf211028jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426378980",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 7,
                        "name": "上海老酸奶",
                        "photos": [
                            "61f8e2311bcf345e9e164bf2bf211028jpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 1,
                        "restaurant_id": 647728,
                        "satisfy_count": 1,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56772364,
                                "is_essential": false,
                                "item_id": "17426378980",
                                "name": "上海老酸奶",
                                "packing_fee": 0,
                                "pinyin_name": "shanghailaosuannai",
                                "price": 15,
                                "promotion_stock": -1,
                                "recent_popularity": 7,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659588324",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9674,
                                "virtual_food_id": 19688943,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "1评价 月售7份",
                        "virtual_food_id": 19688943
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590026,
                        "description": "抖音网红 超级好喝 口感独特！",
                        "image_path": "f6464b93438cd6ffd5840fd1eb911785jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000214512903396",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 1,
                        "name": "@冰杨梅",
                        "photos": [
                            "f6464b93438cd6ffd5840fd1eb911785jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1440280504,
                                "is_essential": false,
                                "item_id": "200000214512903396",
                                "name": "@冰杨梅",
                                "packing_fee": 0,
                                "pinyin_name": "@bingyangmei",
                                "price": 18,
                                "promotion_stock": -1,
                                "recent_popularity": 1,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "200000246047242468",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9979,
                                "virtual_food_id": 1409485254,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售1份",
                        "virtual_food_id": 1409485254
                    },
                    {
                        "activity": {
                            "activity_type": "",
                            "applicable_quantity": 1,
                            "applicable_quantity_detail_text": "每单限1份优惠，超出的份数按原价计算",
                            "applicable_quantity_text": "每单限1份优惠",
                            "applicable_quantity_text_color": "eb6551",
                            "benefit_text": "5.8折",
                            "description": "单品折扣",
                            "discount": 0.58,
                            "fixed_price": -1.0,
                            "icon_color": "eb6551",
                            "icon_name": "折",
                            "id": 1706616442,
                            "image_text": "5.8折，限1份",
                            "image_text_color": "f07373",
                            "is_exclusive": 0,
                            "is_price_changed": false,
                            "is_promotion_toast_popup": true,
                            "is_tied_selling": false,
                            "max_quantity": 1,
                            "minimum_delivery_rule": 1,
                            "must_super_vip": false,
                            "name": "单品折扣",
                            "quantity_condition": 1,
                            "quantity_text": "",
                            "sum_condition": 0
                        },
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590026,
                        "description": "多种配方精心熬制而成！",
                        "image_path": "e52feed11c7908633e749c27bc7524cejpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426381028",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 8,
                        "name": "自制特色酸梅汤",
                        "photos": [
                            "e52feed11c7908633e749c27bc7524cejpeg"
                        ],
                        "rating": 4.33,
                        "rating_count": 3,
                        "restaurant_id": 647728,
                        "satisfy_count": 3,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56772926,
                                "is_essential": false,
                                "item_id": "17426381028",
                                "name": "自制特色酸梅汤",
                                "original_price": 8.8,
                                "packing_fee": 0,
                                "pinyin_name": "zizhitesesuanmeitang",
                                "price": 5.1,
                                "promotion_stock": 9623,
                                "recent_popularity": 8,
                                "recent_rating": 4.33,
                                "restaurant_id": 647728,
                                "sku_id": "20659590372",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9623,
                                "virtual_food_id": 19543838,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "3评价 月售8份",
                        "virtual_food_id": 19543838
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590026,
                        "description": "非常好喝，我们小时候的味道，?️?️?️",
                        "image_path": "dad4631ec800abc66da984c522542e0cjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "200000182957263076",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 7,
                        "name": "桂花酸梅汤饮料",
                        "photos": [
                            "dad4631ec800abc66da984c522542e0cjpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 2,
                        "restaurant_id": 647728,
                        "satisfy_count": 2,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 1404811539,
                                "is_essential": false,
                                "item_id": "200000182957263076",
                                "name": "桂花酸梅汤饮料",
                                "packing_fee": 0,
                                "pinyin_name": "guihuasuanmeitangyinliao",
                                "price": 8.8,
                                "promotion_stock": -1,
                                "recent_popularity": 7,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "200000209727034596",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9959,
                                "virtual_food_id": 1378669129,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "2评价 月售7份",
                        "virtual_food_id": 1378669129
                    }
                ],
                "global_id": "2872396004",
                "grey_icon_url": "",
                "icon_url": "",
                "id": 5590026,
                "is_activity": false,
                "is_selected": false,
                "name": "特色饮品系列",
                "type": 1
            },
            {
                "description": "",
                "foods": [
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589993,
                        "description": "24只/蓝－水烧开后放入  再大火蒸5分钟即可。",
                        "image_path": "2f86059d130e0bcc0760d0e8761f7883jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426365668",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 2,
                        "name": "无锡小笼包外卖  礼篮",
                        "photos": [
                            "2f86059d130e0bcc0760d0e8761f7883jpeg"
                        ],
                        "rating": 5.0,
                        "rating_count": 1,
                        "restaurant_id": 647728,
                        "satisfy_count": 1,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750393,
                                "is_essential": false,
                                "item_id": "17426365668",
                                "name": "无锡小笼包外卖  礼篮",
                                "packing_fee": 0,
                                "pinyin_name": "wuxixiaolongbaowaimai  lilan",
                                "price": 90.8,
                                "promotion_stock": -1,
                                "recent_popularity": 2,
                                "recent_rating": 5.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659575012",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "24只/蓝"
                                    }
                                ],
                                "stock": 9840,
                                "virtual_food_id": 19688147,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "24只/蓝"
                                ]
                            }
                        ],
                        "tips": "1评价 月售2份",
                        "virtual_food_id": 19688147
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589993,
                        "description": "8只/笼－水烧开后放入  再大火蒸5分钟即可。",
                        "image_path": "fd206748f19c0cc93dfc66254c5b6adejpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426366692",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 16,
                        "name": "半成品冷的  无锡小笼汤包",
                        "photos": [
                            "fd206748f19c0cc93dfc66254c5b6adejpeg"
                        ],
                        "rating": 3.8,
                        "rating_count": 5,
                        "restaurant_id": 647728,
                        "satisfy_count": 4,
                        "satisfy_rate": 80,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750509,
                                "is_essential": false,
                                "item_id": "17426366692",
                                "name": "半成品冷的  无锡小笼汤包",
                                "packing_fee": 1.5,
                                "pinyin_name": "banchengpinlengde  wuxixiaolongtangbao",
                                "price": 28.8,
                                "promotion_stock": -1,
                                "recent_popularity": 16,
                                "recent_rating": 3.8,
                                "restaurant_id": 647728,
                                "sku_id": "20659576036",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "8只/笼"
                                    }
                                ],
                                "stock": 9206,
                                "virtual_food_id": 21316575,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "8只/笼"
                                ]
                            }
                        ],
                        "tips": "5评价 月售16份",
                        "virtual_food_id": 21316575
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589993,
                        "description": "12只/笼－水烧开后放入  再大火蒸3分钟即可。",
                        "image_path": "888a5909e6fb114d202bed4b862fb26bjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426367716",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 6,
                        "name": "半成品冷的  上海小笼汤包",
                        "photos": [
                            "888a5909e6fb114d202bed4b862fb26bjpeg"
                        ],
                        "rating": 4.5,
                        "rating_count": 2,
                        "restaurant_id": 647728,
                        "satisfy_count": 2,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750648,
                                "is_essential": false,
                                "item_id": "17426367716",
                                "name": "半成品冷的  上海小笼汤包",
                                "packing_fee": 1.5,
                                "pinyin_name": "banchengpinlengde  shanghaixiaolongtangbao",
                                "price": 20.8,
                                "promotion_stock": -1,
                                "recent_popularity": 6,
                                "recent_rating": 4.5,
                                "restaurant_id": 647728,
                                "sku_id": "20659577060",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "12只/笼"
                                    }
                                ],
                                "stock": 8876,
                                "virtual_food_id": 21316633,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "12只/笼"
                                ]
                            }
                        ],
                        "tips": "2评价 月售6份",
                        "virtual_food_id": 21316633
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589993,
                        "description": "10只/笼－水烧开后放入  再大火蒸4分钟即可。",
                        "image_path": "d932308cc0760515cc04ad0fd6838815jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426368740",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 1,
                        "name": "半成品冷的  虾仁小笼汤包",
                        "photos": [
                            "d932308cc0760515cc04ad0fd6838815jpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 1,
                        "restaurant_id": 647728,
                        "satisfy_count": 1,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750766,
                                "is_essential": false,
                                "item_id": "17426368740",
                                "name": "半成品冷的  虾仁小笼汤包",
                                "packing_fee": 1.5,
                                "pinyin_name": "banchengpinlengde  xiarenxiaolongtangbao",
                                "price": 35.8,
                                "promotion_stock": -1,
                                "recent_popularity": 1,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659578084",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "10只/笼"
                                    }
                                ],
                                "stock": 9928,
                                "virtual_food_id": 21316668,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "10只/笼"
                                ]
                            }
                        ],
                        "tips": "1评价 月售1份",
                        "virtual_food_id": 21316668
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5589993,
                        "description": "10只/笼－水烧开后放入  再大火蒸分钟即可。",
                        "image_path": "ce37a99041637e3947d50e0db4ec5006jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426369764",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 2,
                        "name": "冷的  蟹黄汤包",
                        "photos": [
                            "ce37a99041637e3947d50e0db4ec5006jpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 1,
                        "restaurant_id": 647728,
                        "satisfy_count": 1,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750859,
                                "is_essential": false,
                                "item_id": "17426369764",
                                "name": "冷的  蟹黄汤包",
                                "packing_fee": 1.5,
                                "pinyin_name": "lengde  xiehuangtangbao",
                                "price": 45.8,
                                "promotion_stock": -1,
                                "recent_popularity": 2,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659579108",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "10只/笼"
                                    }
                                ],
                                "stock": 9897,
                                "virtual_food_id": 21316720,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "10只/笼"
                                ]
                            }
                        ],
                        "tips": "1评价 月售2份",
                        "virtual_food_id": 21316720
                    }
                ],
                "global_id": "2872393956",
                "grey_icon_url": "",
                "icon_url": "",
                "id": 5589993,
                "is_activity": false,
                "is_selected": false,
                "name": "生的  小笼汤包系列",
                "type": 1
            },
            {
                "description": "",
                "foods": [
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590020,
                        "description": "40只/盒",
                        "image_path": "759c6a7dfeda278e1ce3a0de1b86960fjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426373860",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 20,
                        "name": "生的  鲜肉小馄饨",
                        "photos": [
                            "759c6a7dfeda278e1ce3a0de1b86960fjpeg"
                        ],
                        "rating": 4.57,
                        "rating_count": 7,
                        "restaurant_id": 647728,
                        "satisfy_count": 7,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56751560,
                                "is_essential": false,
                                "item_id": "17426373860",
                                "name": "生的  鲜肉小馄饨",
                                "packing_fee": 1.5,
                                "pinyin_name": "shengde  xianrouxiaohuntun",
                                "price": 16.8,
                                "promotion_stock": -1,
                                "recent_popularity": 20,
                                "recent_rating": 4.57,
                                "restaurant_id": 647728,
                                "sku_id": "20659583204",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "40只/盒"
                                    }
                                ],
                                "stock": 8850,
                                "virtual_food_id": 19518075,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "40只/盒"
                                ]
                            }
                        ],
                        "tips": "7评价 月售20份",
                        "virtual_food_id": 19518075
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590020,
                        "description": "12只/盒",
                        "image_path": "39e90b9eee0666b9e75aef913d2040eajpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426372836",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 4,
                        "name": "生的  开洋大馄饨",
                        "photos": [
                            "39e90b9eee0666b9e75aef913d2040eajpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 1,
                        "restaurant_id": 647728,
                        "satisfy_count": 1,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56751412,
                                "is_essential": false,
                                "item_id": "17426372836",
                                "name": "生的  开洋大馄饨",
                                "packing_fee": 1.5,
                                "pinyin_name": "shengde  kaiyangdahuntun",
                                "price": 20.8,
                                "promotion_stock": -1,
                                "recent_popularity": 4,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659582180",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "12只/盒"
                                    }
                                ],
                                "stock": 9857,
                                "virtual_food_id": 19542360,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "12只/盒"
                                ]
                            }
                        ],
                        "tips": "1评价 月售4份",
                        "virtual_food_id": 19542360
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590020,
                        "description": "14只/盒",
                        "image_path": "32dc8b9a20db9658a45433c3e710728fjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426370788",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 10,
                        "name": "生的  菜肉大馄饨",
                        "photos": [
                            "32dc8b9a20db9658a45433c3e710728fjpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 1,
                        "restaurant_id": 647728,
                        "satisfy_count": 1,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56750994,
                                "is_essential": false,
                                "item_id": "17426370788",
                                "name": "生的  菜肉大馄饨",
                                "packing_fee": 1.5,
                                "pinyin_name": "shengde  cairoudahuntun",
                                "price": 18.8,
                                "promotion_stock": -1,
                                "recent_popularity": 10,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659580132",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "14只/盒"
                                    }
                                ],
                                "stock": 9294,
                                "virtual_food_id": 19516975,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "14只/盒"
                                ]
                            }
                        ],
                        "tips": "1评价 月售10份",
                        "virtual_food_id": 19516975
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590020,
                        "description": "12只/盒",
                        "image_path": "004c7a21623437adeae09be765574d1djpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426371812",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 2,
                        "name": "生的  虾仁大馄饨",
                        "photos": [
                            "004c7a21623437adeae09be765574d1djpeg"
                        ],
                        "rating": 4.0,
                        "rating_count": 2,
                        "restaurant_id": 647728,
                        "satisfy_count": 2,
                        "satisfy_rate": 100,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56751210,
                                "is_essential": false,
                                "item_id": "17426371812",
                                "name": "生的  虾仁大馄饨",
                                "packing_fee": 1.5,
                                "pinyin_name": "shengde  xiarendahuntun",
                                "price": 20.8,
                                "promotion_stock": -1,
                                "recent_popularity": 2,
                                "recent_rating": 4.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659581156",
                                "sold_out": false,
                                "specs": [
                                    {
                                        "name": "规格",
                                        "value": "12只/盒"
                                    }
                                ],
                                "stock": 9743,
                                "virtual_food_id": 19517446,
                                "weight": 0
                            }
                        ],
                        "specifications": [
                            {
                                "name": "规格",
                                "values": [
                                    "12只/盒"
                                ]
                            }
                        ],
                        "tips": "2评价 月售2份",
                        "virtual_food_id": 19517446
                    }
                ],
                "global_id": "2872394980",
                "grey_icon_url": "",
                "icon_url": "",
                "id": 5590020,
                "is_activity": false,
                "is_selected": false,
                "name": "生  馄饨系列",
                "type": 1
            },
            {
                "description": "",
                "foods": [
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590042,
                        "description": "",
                        "image_path": "826b531ca03fd40a5ac098f3bba8c404jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426391268",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 0,
                        "name": "上海小笼汤包成品展示（南翔小笼）",
                        "photos": [
                            "826b531ca03fd40a5ac098f3bba8c404jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56777015,
                                "is_essential": false,
                                "item_id": "17426391268",
                                "name": "上海小笼汤包成品展示（南翔小笼）",
                                "packing_fee": 0,
                                "pinyin_name": "shanghaixiaolongtangbaochengpinzhanshi（nanxiangxiaolong）",
                                "price": 0,
                                "promotion_stock": -1,
                                "recent_popularity": 0,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659600612",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9975,
                                "virtual_food_id": 19549207,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售0份",
                        "virtual_food_id": 19549207
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590042,
                        "description": "",
                        "image_path": "407d8847f0624b6650f43fbf00baefe1jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426392292",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 0,
                        "name": "无锡小笼汤包成品展示",
                        "photos": [
                            "407d8847f0624b6650f43fbf00baefe1jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56777230,
                                "is_essential": false,
                                "item_id": "17426392292",
                                "name": "无锡小笼汤包成品展示",
                                "packing_fee": 0,
                                "pinyin_name": "wuxixiaolongtangbaochengpinzhanshi",
                                "price": 0,
                                "promotion_stock": -1,
                                "recent_popularity": 0,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659601636",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9998,
                                "virtual_food_id": 19549624,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售0份",
                        "virtual_food_id": 19549624
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590042,
                        "description": "",
                        "image_path": "874745c331c00e9fc558561677db510ejpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426393316",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 0,
                        "name": "现包鲜肉小馄饨",
                        "photos": [
                            "874745c331c00e9fc558561677db510ejpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56777418,
                                "is_essential": false,
                                "item_id": "17426393316",
                                "name": "现包鲜肉小馄饨",
                                "packing_fee": 0,
                                "pinyin_name": "xianbaoxianrouxiaohuntun",
                                "price": 0,
                                "promotion_stock": -1,
                                "recent_popularity": 0,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659602660",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9993,
                                "virtual_food_id": 19549939,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售0份",
                        "virtual_food_id": 19549939
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590042,
                        "description": "",
                        "image_path": "bd3af2682162764bfb7de3da0b4b8233jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426394340",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 0,
                        "name": "无锡小笼现场制作",
                        "photos": [
                            "bd3af2682162764bfb7de3da0b4b8233jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56777662,
                                "is_essential": false,
                                "item_id": "17426394340",
                                "name": "无锡小笼现场制作",
                                "packing_fee": 0,
                                "pinyin_name": "wuxixiaolongxianchangzhizuo",
                                "price": 0,
                                "promotion_stock": -1,
                                "recent_popularity": 0,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659603684",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9998,
                                "virtual_food_id": 19550332,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售0份",
                        "virtual_food_id": 19550332
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590042,
                        "description": "",
                        "image_path": "980ed24658d50d604b1194549e558e46jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426395364",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 0,
                        "name": "获奖",
                        "photos": [
                            "980ed24658d50d604b1194549e558e46jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56777799,
                                "is_essential": false,
                                "item_id": "17426395364",
                                "name": "获奖",
                                "packing_fee": 0,
                                "pinyin_name": "huojiang",
                                "price": 0,
                                "promotion_stock": -1,
                                "recent_popularity": 0,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659604708",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9997,
                                "virtual_food_id": 19550602,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售0份",
                        "virtual_food_id": 19550602
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590042,
                        "description": "",
                        "image_path": "4930bc4176f07cc468ef7972962fbcc3jpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426396388",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 0,
                        "name": "堂吃",
                        "photos": [
                            "4930bc4176f07cc468ef7972962fbcc3jpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56777945,
                                "is_essential": false,
                                "item_id": "17426396388",
                                "name": "堂吃",
                                "packing_fee": 0,
                                "pinyin_name": "tangchi",
                                "price": 0,
                                "promotion_stock": -1,
                                "recent_popularity": 0,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659605732",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9998,
                                "virtual_food_id": 19550885,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售0份",
                        "virtual_food_id": 19550885
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590042,
                        "description": "",
                        "image_path": "6d32cb05ba1e277ecf3f3a40641155dajpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426397412",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 0,
                        "name": "店堂",
                        "photos": [
                            "6d32cb05ba1e277ecf3f3a40641155dajpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56778072,
                                "is_essential": false,
                                "item_id": "17426397412",
                                "name": "店堂",
                                "packing_fee": 0,
                                "pinyin_name": "diantang",
                                "price": 0,
                                "promotion_stock": -1,
                                "recent_popularity": 0,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659606756",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9997,
                                "virtual_food_id": 19551137,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售0份",
                        "virtual_food_id": 19551137
                    },
                    {
                        "attributes": [],
                        "attrs": [],
                        "category_id": 5590042,
                        "description": "",
                        "image_path": "c3298c7c4d776b014715749cad3cf45fjpeg",
                        "is_essential": false,
                        "is_featured": 0,
                        "item_id": "17426398436",
                        "limitation": {},
                        "min_purchase": 1,
                        "month_sales": 0,
                        "name": "门头",
                        "photos": [
                            "c3298c7c4d776b014715749cad3cf45fjpeg"
                        ],
                        "rating": 0,
                        "rating_count": 0,
                        "restaurant_id": 647728,
                        "satisfy_count": 0,
                        "satisfy_rate": 0,
                        "specfoods": [
                            {
                                "checkout_mode": 1,
                                "food_id": 56778198,
                                "is_essential": false,
                                "item_id": "17426398436",
                                "name": "门头",
                                "packing_fee": 0,
                                "pinyin_name": "mentou",
                                "price": 0,
                                "promotion_stock": -1,
                                "recent_popularity": 0,
                                "recent_rating": 0.0,
                                "restaurant_id": 647728,
                                "sku_id": "20659607780",
                                "sold_out": false,
                                "specs": [],
                                "stock": 9998,
                                "virtual_food_id": 19551357,
                                "weight": 0
                            }
                        ],
                        "specifications": [],
                        "tips": "0评价 月售0份",
                        "virtual_food_id": 19551357
                    }
                ],
                "global_id": "2872398052",
                "grey_icon_url": "",
                "icon_url": "",
                "id": 5590042,
                "is_activity": false,
                "is_selected": false,
                "name": "品牌无锡小笼原材料及门店展示",
                "type": 1
            }
        ]
    }
    res.send(data);
})

router.get('/category' , function (req , res) {
    var data = [{"count":3103,"ids":[-100,207,220,260,233,-102,244,252,275,276,-103,-104,-105,-107,-106],"image_url":"","level":1,"name":"全部商家"},{"count":2996,"id":-100,"ids":[-100,1,8,2,7,4,5,3,6],"level":1,"name":"美食","sub_categories":[{"count":2996,"id":-100,"image_url":"8644e1323e3a11137d7478d2c83095d4png","level":1,"name":"全部"},{"count":1021,"id":1,"image_url":"d8515995a32586701f3c184f422cf66apng","level":1,"name":"简餐便当"},{"count":571,"id":8,"image_url":"6f8c0289b217b04fffd70c5f1f397103png","level":1,"name":"地方菜系"},{"count":547,"id":2,"image_url":"af571d2ac336d2bde99a2f2b7be97505png","level":1,"name":"面食粥点"},{"count":530,"id":7,"image_url":"18eedac58bbcfd59e4a2805abfe11ff2jpeg","level":1,"name":"小吃炸串"},{"count":145,"id":4,"image_url":"f36695c9aab9774acbf5ba7e553b8a99jpeg","level":1,"name":"香锅冒菜"},{"count":85,"id":5,"image_url":"ce8b3161428d69729cdeb8095946326bjpeg","level":1,"name":"日韩料理"},{"count":50,"id":3,"image_url":"808fc83b1b9fe47e04219466b269c3bapng","level":1,"name":"汉堡披萨"},{"count":47,"id":6,"image_url":"a5766bbe0b3ce5c74d81b63e06b614e1png","level":1,"name":"轻食西餐"}]},{"count":1245,"id":207,"ids":[207],"level":1,"name":"快餐便当","sub_categories":[{"count":1245,"id":207,"image_url":"44545a0518aab93817cfe611e88bb702png","level":1,"name":"全部"},{"count":780,"id":265,"image_url":"be84bc4d7cf12deee9115b16eb099302png","level":2,"name":"简餐"},{"count":268,"id":213,"image_url":"02e6c9e3bf338ec0ba0d923717b9f8acpng","level":2,"name":"米粉面馆"},{"count":168,"id":209,"image_url":"66b78c0e7099c278977298d7c6042c80png","level":2,"name":"盖浇饭"},{"count":119,"id":215,"image_url":"af6ab89041b3e77fe115d1e4b72d69f0png","level":2,"name":"包子粥店"},{"count":105,"id":217,"image_url":"65b575c2278a3f6e5c70af45b578cbeepng","level":2,"name":"饺子馄饨"},{"count":89,"id":214,"image_url":"4d347d0dc65dd75fb2911256aabf2327png","level":2,"name":"麻辣烫"},{"count":56,"id":219,"image_url":"eddd9dc7e5d21debe2fb278ae01fefe9png","level":2,"name":"香锅砂锅"},{"count":55,"id":216,"image_url":"4c6af48f68284ad91c6d95d2bd3f4aa6png","level":2,"name":"生煎锅贴"},{"count":40,"id":267,"image_url":"79637dc36d67de4fe48d121ea77b3eddpng","level":2,"name":"黄焖鸡米饭"},{"count":30,"id":212,"image_url":"7d47af01fccc46fc3621865a9cc07c93png","level":2,"name":"汉堡"},{"count":22,"id":269,"image_url":"180cb951c2d4eb2e220debf4571bf83apng","level":2,"name":"煲仔饭"},{"count":7,"id":266,"image_url":"c09d1ff71384e2e1664f72e0a928810dpng","level":2,"name":"烧腊饭"},{"count":4,"id":268,"image_url":"cdf208b399b854e456f23d28b1972e97png","level":2,"name":"咖喱饭"}]},{"count":502,"id":220,"ids":[220],"level":1,"name":"特色菜系","sub_categories":[{"count":502,"id":220,"image_url":"6f8c0289b217b04fffd70c5f1f397103png","level":1,"name":"全部"},{"count":254,"id":221,"image_url":"43b0e4694f8ebc393cce6723d5df5222png","level":2,"name":"川湘菜"},{"count":75,"id":263,"image_url":"94ac841e2c3e27f8eeeaa917574ed574png","level":2,"name":"其他菜系"},{"count":69,"id":231,"image_url":"c03d81f550eb849ed2d4d0290ced9099png","level":2,"name":"火锅烤鱼"},{"count":66,"id":225,"image_url":"2d098842683548f9626cf0a8c879257dpng","level":2,"name":"江浙菜"},{"count":37,"id":232,"image_url":"a33f1ec0044ddd4d282fbc8b1f0a946fpng","level":2,"name":"海鲜"},{"count":25,"id":222,"image_url":"e320bf1ab9762cb1faad27d79f51219cpng","level":2,"name":"粤菜"},{"count":23,"id":223,"image_url":"aa4de1e9b54170cf495d8052407658c5png","level":2,"name":"东北菜"},{"count":11,"id":226,"image_url":"741d15270496d7699dd2e7804fccc7a1png","level":2,"name":"西北菜"},{"count":6,"id":228,"image_url":"a7e6d9cf1993fa4fe0bd02d74d40c9c2png","level":2,"name":"新疆菜"},{"count":4,"id":224,"image_url":"54dabf93116f4a336fcc91431be43828png","level":2,"name":"云南菜"},{"count":1,"id":227,"image_url":"e19bf59188a157dfc372b3d254fc986dpng","level":2,"name":"鲁菜"}]},{"count":145,"id":260,"ids":[260],"level":1,"name":"异国料理","sub_categories":[{"count":145,"id":260,"image_url":"754c5c2ad1b01668a7186ec5f0fb0e59png","level":1,"name":"全部"},{"count":85,"id":229,"image_url":"cf8c84a2fe5ecf27b21bcbddc1724d36png","level":2,"name":"日韩料理"},{"count":39,"id":230,"image_url":"78c45200d58e5c02cb70fb8287df732dpng","level":2,"name":"西餐"},{"count":20,"id":211,"image_url":"bb7eb2afe778ba9afbe54f9d282818d1png","level":2,"name":"披萨意面"},{"count":8,"id":264,"image_url":"614053401fddc171eed0436f3cd1f7dcpng","level":2,"name":"东南亚菜"}]},{"count":530,"id":233,"ids":[233],"level":1,"name":"小吃夜宵","sub_categories":[{"count":530,"id":233,"image_url":"7d714540b1590552d991fd731e8772a3png","level":1,"name":"全部"},{"count":249,"id":237,"image_url":"90483b16d9598aec798263220eb3a821png","level":2,"name":"地方小吃"},{"count":155,"id":218,"image_url":"3c6e2763cf4ee56f18fd1b7360585fb3png","level":2,"name":"烧烤"},{"count":110,"id":234,"image_url":"71164ef684e8a13b5e66a20a1c55671cpng","level":2,"name":"炸鸡炸串"},{"count":97,"id":236,"image_url":"d049fb617edcea921185258d1675db83png","level":2,"name":"小龙虾"},{"count":17,"id":235,"image_url":"efdba78945f83ed1e8e6e838718b4c65png","level":2,"name":"鸭脖卤味"},{"count":14,"id":238,"image_url":"d7e0be7e5420e213ea42e4fa3efa762bpng","level":2,"name":"零食"}]},{"count":837,"id":-102,"ids":[-102,9,12,11,10],"level":1,"name":"甜品饮品","sub_categories":[{"count":837,"id":-102,"image_url":"cac2f06034f8e73eb7793b08c1987049png","level":1,"name":"全部"},{"count":290,"id":9,"image_url":"213cbac0242d4845d1d28af0fa5fe35epng","level":1,"name":"甜品"},{"count":248,"id":12,"image_url":"ac94b005c97ef158282326cb49389893png","level":1,"name":"面包蛋糕"},{"count":221,"id":11,"image_url":"62c31de0a7f41231e4c6934dea621a33png","level":1,"name":"奶茶果汁"},{"count":78,"id":10,"image_url":"c2f05ef82a7ee44b7848b7fb598d42e3png","level":1,"name":"咖啡"}]},{"count":237,"id":244,"ids":[244],"level":1,"name":"果蔬生鲜","sub_categories":[{"count":237,"id":244,"image_url":"1ce198f37a81285f4afa2aaf826a558fpng","level":1,"name":"全部"},{"count":116,"id":246,"image_url":"a0491106bd35ae2dfdf4902d2d54b200jpeg","level":2,"name":"蔬菜豆品"},{"count":65,"id":270,"image_url":"a2ab438ee4ac09e6e53b3f96694bac81png","level":2,"name":"海鲜水产"},{"count":64,"id":245,"image_url":"a831a37ec670ca93cd35a8a6b5a20e62png","level":2,"name":"水果"},{"count":26,"id":247,"image_url":"14e5ef2c311b6a8eb9727a4e0d34ae54png","level":2,"name":"肉禽蛋品"}]},{"count":276,"id":252,"ids":[252],"level":1,"name":"商店超市","sub_categories":[{"count":276,"id":252,"image_url":"df21b511f287ccb402e68285d2653caepng","level":1,"name":"全部"},{"count":102,"id":254,"image_url":"92ae70438be9a3adfc5a560c1e6ae818png","level":2,"name":"大型超市"},{"count":85,"id":271,"image_url":"841d136b17fa4cb871a296c9e4997cfapng","level":2,"name":"便利店"},{"count":56,"id":346,"image_url":"efdba78945f83ed1e8e6e838718b4c65png","level":2,"name":"卤味鸭脖"},{"count":28,"id":274,"image_url":"7df84232aebbb5ffb53e564c9e328d31png","level":2,"name":"名酒坊"},{"count":19,"id":273,"image_url":"c2b0e2b27ea55a9a7211f14ad95dcd0apng","level":2,"name":"休闲零食"},{"count":18,"id":255,"image_url":"825031dc99e1f99c26feb7186b6cf3a6png","level":2,"name":"水站"},{"count":13,"id":282,"image_url":"c28c16653a037261f47eec43f5a7adc6png","level":2,"name":"饮料冰品"},{"count":7,"id":257,"image_url":"b435af6662fd0b3e9fb6537474753f72png","level":2,"name":"粮油副食"},{"count":6,"id":272,"image_url":"f7e32a289deca477c286362e3a1bc2bcpng","level":2,"name":"美妆母婴"},{"count":3,"id":256,"image_url":"f6460e330d25dabd4fd8db07cf53f039png","level":2,"name":"奶站"},{"count":3,"id":290,"image_url":"337f30d05887289cf1ea0dc67133896bpng","level":2,"name":"冷冻速食"},{"count":1,"id":258,"image_url":"54b7ce87994d6770f1ead57b0038c569png","level":2,"name":"茶行"},{"count":1,"id":298,"image_url":"e2b9d3e00a2cc80c95389206b681558bpng","level":2,"name":"宠物超市"}]},{"count":370,"id":275,"ids":[275],"level":1,"name":"鲜花绿植","sub_categories":[{"count":370,"id":275,"image_url":"49e9cad976ae50274ec36fcf911505e2png","level":1,"name":"全部"},{"count":309,"id":330,"image_url":"4080dde0a257591ecb6294d31f938b48png","level":2,"name":"鲜花"},{"count":95,"id":338,"image_url":"c5ec07778f90bae26b042d3cec2106e2png","level":2,"name":"绿植"}]},{"count":33,"id":276,"ids":[276],"level":1,"name":"医药健康","sub_categories":[{"count":33,"id":276,"image_url":"e72b62bec62175b8a57cbdc4a95c5f2bpng","level":1,"name":"全部"},{"count":26,"id":306,"image_url":"cece178a0e243f6b95847c8875ff612cpng","level":2,"name":"药店"},{"count":7,"id":314,"image_url":"a09977cd2fe2355b4dd078fb4218d5depng","level":2,"name":"成人用品"}]},{"count":862,"id":-103,"ids":[-103,-5,-9,-6,-8,-11,-7,-4],"level":1,"name":"早餐","sub_categories":[{"count":862,"id":-103,"image_url":"f2c5870ff4c3f9fd702346ae907ab038png","level":1,"name":"全部"},{"count":268,"id":-5,"image_url":"02e6c9e3bf338ec0ba0d923717b9f8acpng","level":1,"name":"米粉面馆"},{"count":221,"id":-9,"image_url":"62c31de0a7f41231e4c6934dea621a33png","level":1,"name":"奶茶果汁"},{"count":119,"id":-6,"image_url":"af6ab89041b3e77fe115d1e4b72d69f0png","level":1,"name":"包子粥店"},{"count":105,"id":-8,"image_url":"65b575c2278a3f6e5c70af45b578cbeepng","level":1,"name":"饺子馄饨"},{"count":64,"id":-11,"image_url":"512232422a83e25a2c0a5588b7b6e730png","level":1,"name":"面包"},{"count":55,"id":-7,"image_url":"4c6af48f68284ad91c6d95d2bd3f4aa6png","level":1,"name":"生煎锅贴"},{"count":30,"id":-4,"image_url":"7d47af01fccc46fc3621865a9cc07c93png","level":1,"name":"汉堡"}]},{"count":1097,"id":-104,"ids":[-104,-15,-12,-14,-13],"level":1,"name":"午餐","sub_categories":[{"count":1097,"id":-104,"image_url":"b0c0d7e523251cec33b96953d72c0348jpeg","level":1,"name":"全部"},{"count":780,"id":-15,"image_url":"be84bc4d7cf12deee9115b16eb099302png","level":1,"name":"简餐"},{"count":168,"id":-12,"image_url":"66b78c0e7099c278977298d7c6042c80png","level":1,"name":"盖浇饭"},{"count":119,"id":-14,"image_url":"af6ab89041b3e77fe115d1e4b72d69f0png","level":1,"name":"包子粥店"},{"count":30,"id":-13,"image_url":"7d47af01fccc46fc3621865a9cc07c93png","level":1,"name":"汉堡"}]},{"count":1277,"id":-105,"ids":[-105,-21,-17,-20,-16,-18,-19,-22],"level":1,"name":"下午茶","sub_categories":[{"count":1277,"id":-105,"image_url":"eb63a10e117d6ec35d6ceed2df72eadapng","level":1,"name":"全部"},{"count":359,"id":-21,"image_url":"71164ef684e8a13b5e66a20a1c55671cpng","level":1,"name":"炸鸡小吃"},{"count":290,"id":-17,"image_url":"213cbac0242d4845d1d28af0fa5fe35epng","level":1,"name":"甜品"},{"count":248,"id":-20,"image_url":"ac94b005c97ef158282326cb49389893png","level":1,"name":"面包蛋糕"},{"count":221,"id":-16,"image_url":"62c31de0a7f41231e4c6934dea621a33png","level":1,"name":"奶茶果汁"},{"count":78,"id":-18,"image_url":"c2f05ef82a7ee44b7848b7fb598d42e3png","level":1,"name":"咖啡"},{"count":64,"id":-19,"image_url":"a831a37ec670ca93cd35a8a6b5a20e62png","level":1,"name":"水果"},{"count":17,"id":-22,"image_url":"efdba78945f83ed1e8e6e838718b4c65png","level":1,"name":"鸭脖卤味"}]},{"count":2189,"id":-107,"ids":[-107,-31,-33,-34,-35,-37,-32,-38,-36,-39,-40],"level":1,"name":"晚餐","sub_categories":[{"count":2189,"id":-107,"image_url":"07af2e54dddf2d82a05ecd1f2a194e13png","level":1,"name":"全部"},{"count":780,"id":-31,"image_url":"be84bc4d7cf12deee9115b16eb099302png","level":1,"name":"简餐"},{"count":268,"id":-33,"image_url":"02e6c9e3bf338ec0ba0d923717b9f8acpng","level":1,"name":"米粉面馆"},{"count":254,"id":-34,"image_url":"43b0e4694f8ebc393cce6723d5df5222png","level":1,"name":"川湘菜"},{"count":249,"id":-35,"image_url":"90483b16d9598aec798263220eb3a821png","level":1,"name":"地方小吃"},{"count":221,"id":-37,"image_url":"62c31de0a7f41231e4c6934dea621a33png","level":1,"name":"奶茶果汁"},{"count":168,"id":-32,"image_url":"66b78c0e7099c278977298d7c6042c80png","level":1,"name":"盖浇饭"},{"count":110,"id":-38,"image_url":"71164ef684e8a13b5e66a20a1c55671cpng","level":1,"name":"炸鸡炸串"},{"count":89,"id":-36,"image_url":"4d347d0dc65dd75fb2911256aabf2327png","level":1,"name":"麻辣烫"},{"count":30,"id":-39,"image_url":"7d47af01fccc46fc3621865a9cc07c93png","level":1,"name":"汉堡"},{"count":20,"id":-40,"image_url":"bb7eb2afe778ba9afbe54f9d282818d1png","level":1,"name":"披萨意面"}]},{"count":998,"id":-106,"ids":[-106,-24,-29,-26,-27,-28,-25,-23],"level":1,"name":"夜宵","sub_categories":[{"count":998,"id":-106,"image_url":"d763d496b0454edd5ddb7eb5d796b56bpng","level":1,"name":"全部"},{"count":268,"id":-24,"image_url":"02e6c9e3bf338ec0ba0d923717b9f8acpng","level":1,"name":"米粉面馆"},{"count":249,"id":-29,"image_url":"90483b16d9598aec798263220eb3a821png","level":1,"name":"地方小吃"},{"count":155,"id":-26,"image_url":"3c6e2763cf4ee56f18fd1b7360585fb3png","level":1,"name":"烧烤"},{"count":110,"id":-27,"image_url":"71164ef684e8a13b5e66a20a1c55671cpng","level":1,"name":"炸鸡炸串"},{"count":97,"id":-28,"image_url":"d049fb617edcea921185258d1675db83png","level":1,"name":"小龙虾"},{"count":89,"id":-25,"image_url":"4d347d0dc65dd75fb2911256aabf2327png","level":1,"name":"麻辣烫"},{"count":30,"id":-23,"image_url":"7d47af01fccc46fc3621865a9cc07c93png","level":1,"name":"汉堡"}]}];
    res.send(data);
})
module.exports = router;




