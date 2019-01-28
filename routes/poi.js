var express = require('express');
var router = express.Router();
const poiService = require('../service/poi/index');

router.get('/search_nearby', function(req , res) {
	poiService.search(req.query).then( result => {
		res.send(result)
	}).catch (e => {
		res.send(e)
	})
});

router.get('/city_list' , function (req , res) {
	poiService.getCityList(req.originalUrl).then(result => {
		res.send(result)
	}).catch( e => {
		res.send(e)
	})
})

module.exports = router;
