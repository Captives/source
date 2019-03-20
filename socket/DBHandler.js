const Redis = require('ioredis');
var redisClient = null;
module.exports = DBHandler;
function DBHandler(redis, namespace) {
  this.NAMESPACE = namespace ? namespace.toUpperCase() + "::" : "DEFAULT::";
  redisClient = new Redis(redis);
  redisClient.on('ready', function () {
    console.log('Redis ready success');
  });
}

DBHandler.bindKey = function (td, token) {
  return this.NAMESPACE + td + ":" + token;
};

/**
 * 添加用户
 * @param token
 * @param data
 */
DBHandler.prototype.addUser = function (td, token, data) {
  redisClient.set(DBHandler.bindKey(td, token), JSON.stringify(data));
};

/**
 * 移除指定的用户
 * @param td
 * @param token
 */
DBHandler.prototype.removeUser = function (td, token) {
  redisClient.del(DBHandler.bindKey(td, token));
};

/**
 * 查询用户
 * @param td
 * @param token
 * @param cb 查询结果回调
 */
DBHandler.prototype.findUser = function (td, token, cb) {
  //查询数据
  redisClient.get(DBHandler.bindKey(td, token), function (err, data) {
    if (err) {
      console.warn('session Error', err);
      cb && cb(null);
    } else {
      var json = JSON.parse(data);
      cb && cb(json);
    }
  });
};

