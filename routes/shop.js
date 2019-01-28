var express = require('express');
var router = express.Router();
const shopService = require('../service/shop/index');
const init = require('../service/initData');

router.get('/banners', function(req , res) {
	shopService.getBanners(req.query).then( result => {
		res.send(result)
	}).catch (e => {
		res.send(e)
	})
});

router.get('/entries', function(req , res) {
	shopService.getEntries(req.query).then( result => {
		res.send(result)
	}).catch (e => {
		res.send(e)
	})
});

router.get('/restaurants', function(req , res) {
	shopService.getRestaurants(req.query)
	.then( result => {
		res.send(result);
	}).catch (e => {
		res.send(e)
	})
});

/******************分割线以上API都已ok*************************/

router.get('/hot_search', function(req , res) {
	shopService.getHot(req.query).then( result => {
		res.send(result)
	}).catch (e => {
		res.send(e)
	})
});


/**
 * 获取饭店详情（菜单）
 */
router.get('/restaurants/:id/menus', function(req , res) {
	shopService.getRestaurantMenu(req.params.id , req.query).then( result => {
		res.send(result)
	}).catch (e => {
		res.send(e)
	})
});

/**
 * 获取饭店详情（评论）抓取数据存入本地数据库
 */
router.get('/restaurants/:id/comments', function(req , res) {
	shopService.getRestaurantComments(req.params.id , req.query , {
		'x-shard':'shopid='+req.params.id
	}).then( result => {
		res.send(result)
	}).catch (e => {
		res.send(e)
	})
});




module.exports = router;
