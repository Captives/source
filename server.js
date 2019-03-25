const SocketCluster = require('./socket/SocketCluster');
const TravelSocket = require('./socket/TravelSocket');
const SharedWorkerSocket = require('./socket/SharedWorkerSocket');
const httpServer = require('http').createServer();

const log4js = require('./config/Logger');
const console = log4js.getLogger('index');

const Router = require('./resource/Router');
httpServer.on('request', Router.handler)
  .on('clientError', (err, socket) => {
    //https://pv.sohu.com/cityjson
    socket.end('HTTP/1.1 400 Bad Request');
  }).listen(3000, () => {
    console.log('服务启动完成', httpServer.address().port);
    var socket = new TravelSocket(httpServer, '/trave');
    var cluster = new SocketCluster(httpServer, '/cluster');
    var sws = new SharedWorkerSocket(httpServer, '/sws');
  });

