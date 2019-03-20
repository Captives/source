var redis = require('redis');
var conf = require('./../config/index');
var log4js = require('./../conf/Logger');
var console = log4js.getLogger('other');
var RedisClient = {
  create:(options) => {
    return new Promise((resolve, reject)=>{
      var client = redis.createClient(options || conf.redis);
      client.connected = false;
      client.isEmpty = function (data) {
        return JSON.stringify(data) == '[null]' ? true : false;
      };

      //监听订阅成功事件
      client.on('subscribe', (channel, message) => {
        console.log('订阅', channel, '消息', message);
      });

      //监听取消订阅事件
      client.on("unsubscribe", (channel, count) => {
        console.log('退订', channel, '消息', count);
      });

      client.on('ready',()=>{
        client.connected = true;
        console.log('Redis :: ready ----', JSON.stringify(options));
        resolve(client);
      });

      client.on('error', (err)=>{
        client.connected = false;
        console.log('Redis :: error ----', JSON.stringify(options));
        reject(err);
      });
    });
  }
};
module.exports = {
  create:RedisClient.create
};
