var express = require('express');
var router = express.Router();
var UserHandler = require('../controller/user/index')

router.post('/login' , UserHandler.login)

module.exports = router;
