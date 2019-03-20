const SocketCluster = require('./socket/SocketCluster');
const TravelSocket = require('./socket/TravelSocket');
const httpServer = require('http').createServer();

const log4js = require('./config/Logger');
const console = log4js.getLogger('index');

const Router = require('./resource/Router');
httpServer.on('request', Router.handler)
.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request');
}).listen(3000, () => {
  console.log('服务启动完成');
  var socket = new TravelSocket(httpServer, '/trave');
  var cluster = new SocketCluster(httpServer, '/cluster');
});

