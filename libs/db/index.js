var db = require('./config');

function DBUtils () {}

/**
 * 查询
 * @param {*string} sql 
 */
DBUtils.prototype.query = function (sql , params) {
    return new Promise(function(resolve , reject) {
        db.query(sql , params , function (err , result) {
            if(err) reject(err) ;
            else resolve(result);
        });
    });
};

/**
 * 插入
 * @param {*string} tbName 
 * @param {*object} addParams 
 */
DBUtils.prototype.add = function (tbName , addParams) {
    let sql = ' INSERT INTO ?? SET ? ' ;
    return this.query(sql , [tbName , addParams]);
};

/**
 * 更新
 * @param {*string} tbName 
 * @param {*object} updateParams 
 * @param {*string} where 
 * @param {*array} whereParams 
 */
DBUtils.prototype.update = function (tbName , updateParams , where , whereParams) {
    let sql = ' UPDATE ?? SET ? ' ;
    let params = [tbName] ;
    params = params.concat(updateParams);
    if(where && where != '') sql = sql.concat("where " , where);
    if(whereParams && whereParams.length > 0) params = params.concat(whereParams);
    return this.query(sql , params);
};

/**
 * 删除
 * @param {*string} tbName 
 * @param {*string} where 
 * @param {*array}  whereParams 
 */
DBUtils.prototype.delete = function (tbName , where , whereParams) {
    let sql = ' DELETE FROM ?? ';
    let params = [tbName] ;
    if(where && where != '') sql = sql.concat("where " , where);
    if(whereParams && whereParams.length > 0) params = params.concat(whereParams);
    return this.query(sql , params);
};

DBUtils.prototype.getConnection = function () {
    return db ;
}

module.exports = new DBUtils ();