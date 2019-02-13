var express = require('express');
var router = express.Router();
const POIHandler = require('../controller/poi/index')

router.get('/search_nearby' , POIHandler.searchNearby);
router.get('/city_list' , POIHandler.cityList);

module.exports = router;
