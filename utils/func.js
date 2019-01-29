
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

// 表情符号转字符串
exports.utf16toEntities = function (str) { 
    var patt=/[\ud800-\udbff][\udc00-\udfff]/g; // 检测utf16字符正则 
    str = str.replace(patt, function(char){ 
        var H, L, code; 
        if (char.length===2) { 
            H = char.charCodeAt(0); // 取出高位 
            L = char.charCodeAt(1); // 取出低位 
            code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00; // 转换算法 
            return "&#" + code + ";"; 
        } else { 
            return char; 
        } 
    }); 
    return str; 
}

// 表情字符串转表情符号
exports.uncodeUtf16 = function (str) {
    var reg = /\&#.*?;/g;
    var result = str.replace(reg,function(char){
        var H,L,code;
        if(char.length == 9 ){
            code = parseInt(char.match(/[0-9]+/g));
            H = Math.floor((code-0x10000) / 0x400)+0xD800;
            L = (code - 0x10000) % 0x400 + 0xDC00;
            return unescape("%u"+H.toString(16)+"%u"+L.toString(16));
        }else{
            return char;
        }
    });
    return result;
}


exports.isEmpty = function (value) {
	let type = this.getType(value);
	if(type === 'Undefined' || type === 'Null') return true ;
	if(type === 'Array') return  value.length == 0 ;
	if(type === 'String') return value.replace(/\s/g,'') === '' ;
	if(type === 'Object') return Object.keys(value).length === 0 ;
	return false ;
}

exports.getType = function (obj) {
	let type = Object.prototype.toString.call(obj);
	if(type === '[object String]') return 'String' ;
	if(type === '[object Number]') return 'Number' ;
	if(type === '[object Null]') return 'Null' ;
	if(type === '[object Boolean]') return 'Boolean' ;
	if(type === '[object Object]') return 'Object' ;
	if(type === '[object Array]') return 'Array' ;
	if(type === '[object Undefined]') return 'Undefined' ;
	if(type === '[object Date]') return 'Date' ;
}