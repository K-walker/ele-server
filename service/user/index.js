const util = require('util')
const BaseService = require('../BaseService');

function UserService () {
    this.tbName = 'tb_user';
}

util.inherits(UserService , BaseService)

UserService.prototype.getCode = async function (params) {
    return await this.fetch('https://h5.ele.me/restapi/eus/login/mobile_send_code' , params , 'POST')
}

UserService.prototype.login = async function (params) {
    return await this.fetch('https://h5.ele.me/restapi/eus/login/login_by_mobile' , params , 'POST')
}

// function createUser (user) {
//     var current_date = user.create_time || new Date() ;
//     return {
//         user_id:uuidv1().replace(/-/g ,''),
//         user_name:utils.randomName(user.mobile),
//         mobile:user.mobile,
//         password:user.password,
//         create_time:utils.dateFormat(current_date),
//         modify_time:utils.dateFormat(current_date)
//     }
// }

// function createToken () {
//     return 'usertoken434343fdfsdfsdf4324324'
// }

// /**
//  * 注册
//  * @param {*object} userInfo 
//  */
// UserService.prototype.register = function (userInfo) {
//     return this.isExist(userInfo).then( result => {
//         // 未注册
//         if(!result) {
//             let newUser = createUser(userInfo);
//             return db.add(this.tbName , newUser).then( res => {
//                 return this.cahce(newUser)
//             });
//         } else {
//             return Promise.resolve();
//         }
//     });
// }


// /**
//  * 1  登录成功 
//  * 0  账号或密码错误 
//  * -1 账号不存在
//  * @param {*object} userInfo 
//  */
// UserService.prototype.login = function (userInfo) {
//     return this.isExist(userInfo).then( result => {
//         let status = -1 ;
//         if(result) {
//             status = result.password == userInfo.password ? 1 : 0 ;
//         }
//         return Promise.resolve({
//             status:status,
//             data:result
//         });
//     });
// }

// /**
//  * 缓存用户信息(token 和用户信息)
//  */
// UserService.prototype.cahce = function (userInfo) {
//     let loginToken = createToken();
//     return cache.setToken(userInfo.user_id , createToken()).then( () => {
//         return cache.update(userInfo.mobile , userInfo);
//     })
// }

// /**
//  * 更新用户信息
//  */
// UserService.prototype.update = function (userInfo) {  
//     let user = {...userInfo};
//     delete user.user_id ;
//     return db.update(this.tbName , user , userInfo.user_id).then( res => {
//         return cache.update(userInfo.user_id , user);
//     })
// }

// /**
//  * 获取用户信息
//  */
// UserService.prototype.getUserInfo = function (userInfo) {
//     let sql = 'select * from ?? where mobile=?' ;
//      return db.query( sql , [this.tbName , userInfo.mobile]);
// }

// /**
//  * 判断用户是否存在(先查询缓存，如果不存在，则查询数据库)
//  * @param {*userInfo} 用户信息 
//  */
// UserService.prototype.isExist = function (userInfo) {
//     return cache.isExist(userInfo.mobile).then( res => {
//         if(res) { 
//             // 检查token是否过期，如果token过期，则需要重新保存生成token并保存
//             // if(res.user_id) 
//             return Promise.resolve(res); 
//         } else {
//             return this.getUserInfo(userInfo).then( res => {
//                 if(res.length > 0) {
//                     this.cache(res[0]);
//                 } 
//                 return Promise.resolve(res.length > 0 ? res[0] : null); 
//             })
//         }
//     });
// }

module.exports = new UserService() ;