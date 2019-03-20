const DBHandler = require('../socket/DBHandler');
const config = require('./../config/index');
const uuid = require('uuid/v4');

const log4js = require('../config/Logger');
const console= log4js.getLogger('index');

module.exports = POSTHandler;
var db = null;
function POSTHandler() {
  db = new DBHandler(config.redis);
}

POSTHandler.prototype.checkLogin = function (data, res) {
  console.log(data, JSON.stringify(data));
  var result = {success: false, info: null};
  // 设置响应头部信息及编码
  res.writeHead(200, {'Content-Type': 'text/json; charset=utf8'});
  if (data.td && data.token) {
    db.findUser(data.td, data.token, function (json) {
      result.success = true;
      result.info = json;
      res.end(JSON.stringify(result));
    });
  } else {
    result.info = '请重新登录';
    res.end(JSON.stringify(result));
  }
};

POSTHandler.prototype.login = function (data, res) {
  var result = {};
  // 设置响应头部信息及编码
  res.writeHead(200, {'Content-Type': 'text/json; charset=utf8'});
  if (data.td && data.userName) {
    var token = uuid();
    token = token.split('-').join('');
    db.addUser(data.td, token, data);
    result.success = true;
    result.info = token;
  } else {
    result.success = false;
    result.info = '区域和用户名不能为空';
  }
  res.end(JSON.stringify(result));
};
