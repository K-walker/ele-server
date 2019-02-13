const express = require('express');
const router = express.Router();
const shoppingRouter = require('./shopping');
const poiRouter = require('./poi');
const userRouter = require('./user');
const orderRouter = require('./order');

router.use('/poi' , poiRouter);
router.use('/shopping' , shoppingRouter);
router.use('/order' , orderRouter);
router.use('/user' , userRouter);

module.exports = router;




