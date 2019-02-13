const orderService = require('../../service/order/index')

module.exports = {
    orderList (req , res) {
        orderService.getList(req.query).then( result => {
            res.send(result)
        }).catch(e => {
            res.send(e)
        }) 
    },
}