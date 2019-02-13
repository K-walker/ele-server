const shoppingService = require('../../service/shopping/index');

module.exports = {

    entries (req , res) {
        shoppingService.getEntries(req.originalUrl).then( data => {
            res.send(data)
        }).catch (e => {
            res.send(e)
        })
    },

    banners (req , res) {
        shoppingService.getBanners(req.originalUrl).then( data => {
            res.send(data)
        }).catch (e => {
            res.send(e)
        })
    },

    restaurants (req , res) {
        let {offset , limit} = req.query ;
        offset = parseInt(offset)
        limit = parseInt(limit)
        shoppingService.getRestaurants(req.originalUrl , {offset , limit}).then( data => {
            res.send(data)
        }).catch (e => {
            res.send(e)
        })
    },
    detail (req , res) {
        let {id} = req.params ;
        shoppingService.getDetail(req.originalUrl , id).then( data => {
            res.send(data)
        }).catch (e => {
            res.send(e)
        })
    }
}