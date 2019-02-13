const userService = require('../../service/user/index')

module.exports = {
    login (req , res) {
        userService.login(req.body).then( result => {
            res.send(result)
        }).catch( e => {
            res.send(e);
        })
    },
}