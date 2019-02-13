const poiService = require('../../service/poi/index');

module.exports = {

    searchNearby (req , res) {
        poiService.search(req.query).then( result => {
            res.send(result)
        }).catch (e => {
            res.send(e)
        })
    },

    cityList (req , res) {
        poiService.getCityList(req.originalUrl).then(result => {
            res.send(result)
        }).catch( e => {
            res.send(e)
        })
    }
}