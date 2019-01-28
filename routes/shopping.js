var express = require('express');
var router = express.Router();
const shoppingService = require('../service/shopping/index');

router.get('/entries', function(req , res) {
	shoppingService.getEntries(req.originalUrl).then( data => {
        res.send(data)
    }).catch (e => {
        res.send(e)
    })
});

router.get('/banners', function(req , res) {
	shoppingService.getBanners(req.originalUrl).then( data => {
        res.send(data)
    }).catch (e => {
        res.send(e)
    })
});

router.get('/restaurants', function(req , res) {
    let {offset , limit} = req.query ;
    offset = parseInt(offset)
    limit = parseInt(limit)
	shoppingService.getRestaurants(req.originalUrl , {offset , limit}).then( data => {
        res.send(data)
    }).catch (e => {
        res.send(e)
    })
});

// 饭店详情
router.get('/detail/:id', function(req , res) {
    let {id} = req.params ;
	shoppingService.getDetail(req.originalUrl , id).then( data => {
        res.send(data)
    }).catch (e => {
        res.send(e)
    })
});

module.exports = router;
