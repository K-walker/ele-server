var express = require('express');
var router = express.Router();
const OrderHandler = require('../controller/order/index')

router.get('/list' , OrderHandler.orderList);

module.exports = router;
