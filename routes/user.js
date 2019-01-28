var express = require('express');
var router = express.Router();
var userService = require('../service/user/index')

router.post('/get_code' , function (req , res) {
	userService.getCode(req.body).then( result => {
		res.send(result)
	}).catch( e => {
		res.send(e);
	})
})

router.post('/login' , function (req , res) {
	userService.login(req.body).then( result => {
		res.send(result)
	}).catch( e => {
		res.send(e);
	})
})

module.exports = router;
