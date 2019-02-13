var express = require('express');
var router = express.Router();
const ShoppingHandler = require('../controller/shopping/index');

router.get('/entries' , ShoppingHandler.entries);
router.get('/banners' , ShoppingHandler.banners);
router.get('/restaurants' , ShoppingHandler.restaurants);
router.get('/detail/:id' , ShoppingHandler.detail);

module.exports = router;
