const cache = require('../../libs/redis/index');
const fs = require('fs');
const path = require('path');

function PoiCache () {

}

PoiCache.prototype.getCityList = async function (url) {
    let result  = await cache.getObj(url);
    if(!result) {
        result = fs.readFileSync(path.join(__dirname , '../../public/lib/city_list.json') , {
            encoding:'utf8'
        });
        await cache.setObj(url , JSON.parse(result));
    }
    return Promise.resolve(result);
}

module.exports = new PoiCache();