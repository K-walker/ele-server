var express = require('express');
var router = express.Router();
var userService = require('../service/user/index')

/* 用户登录 */
router.post('/login', function(req, res) {
	userService.login(req.body).then( result => {
		let msg = result.status == -1 ? '用户不存在' : 
				  result.status == 0  ? '账号或密码错误' : '登录成功';
	 	res.send({
	 		code:200,
	 		msg:msg,
	 		data:result.data
	 	})
	}).catch( e => {
		res.send({
			code:400,
			msg:'登录失败',
			data:e
		})
	})
});

router.post('/register' , function (req , res) {
	userService.register(req.body).then( result => {
		res.send({
			code:200,
			msg: result ? '注册成功' : '手机号已存在'
		})
	}).catch( e => {
		res.send({
			code:400,
			msg:'注册失败',
			data:e
		})
	})
})

module.exports = router;
