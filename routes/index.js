var express = require('express');
var router = express.Router();
const shopService = require('../service/shop/index');

router.get('/banners', function(req , res) {
	shopService.request().then( result => {
		res.send(result)
	}).catch (e => {
		res.send(e)
	})
});

module.exports = router;
