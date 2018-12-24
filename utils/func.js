
exports.getKeysAndValues = function (obj) {
    let result = {
        keys:[],
        values:[]
    }
    for(let key in obj) {
        result.keys.push(key);
        result.values.push(obj[key]);
    }
    return result;
}

exports.addProperty = function (obj , property , value) {
    Object.defineProperty(obj , property , {
        value:value,
        configurable:true,
        enumerable:true,
        writable:true
    });
} 

// 随机生成用户名
exports.randomName = function (mobile) {
    return 'E'+mobile;
} 

exports.dateFormat = function (dateVal , format) {
    var date = Object.prototype.toString.call(dateVal) === "[object Date]" ? dateVal : new Date() ;
    var o = {
        "M+":date.getMonth() + 1 ,
        "d+":date.getDate(),
        "h+":date.getHours(),
        "m+":date.getMinutes(),
        "s+":date.getSeconds(),
        "q+":Math.floor(date.getMonth() / 3 + 1), //季度
        "S+":date.getMilliseconds()
    }
    if(!format) { format = 'yyyy-MM-dd hh:mm:ss' }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return format ;
}