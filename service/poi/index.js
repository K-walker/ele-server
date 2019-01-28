const cache = require('./cache')
const BaseService  = require('../BaseService')
const util  = require('util')

function Poi () {

}

util.inherits(Poi , BaseService);

Poi.prototype.search = async function (params) {
    return await this.fetch('https://h5.ele.me/restapi/bgs/poi/search_poi_nearby_alipay' , params)
}

Poi.prototype.getCityList = async function (url) {
    return cache.getCityList(url);
}

module.exports = new Poi();