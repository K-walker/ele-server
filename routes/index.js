var express = require('express');
var router = express.Router();
import ShopService from '../service/shop/index'


router.get('/shop', function(req, res) {

	let result = await ShopService.getRstList('' , req.query)
	
	res.send(result);
	// req.query.offset = parseInt(req.query.offset || 0 ) ;
	// req.query.limit  = parseInt(req.query.limit  || 20) ;

	// if(!req.query.latitude) {
	// 	res.send({
	// 		code:200,
	// 		msg:'1 error(s) decoding:\n\n* Required field \"Latitude\" not found'
	// 	})
	// }
	// if(!req.query.longitude) {
	// 	res.send({
	// 		code:200,
	// 		msg:'1 error(s) decoding:\n\n* Required field \"Longitude\" not found'
	// 	})
	// }

	// shopService.getRstList(req.originalUrl , req.query).then(result => {
	// 	res.send({
	// 		code:200,
	// 		data:result
	// 	})
	// }).catch ( e => {
	// 	res.send({
	// 		code:400,
	// 		msg:'',
	// 		data:e
	// 	});
	// })
});



module.exports = router;
