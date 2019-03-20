var events = require('events');
var socketServer = null;
var io = require('socket.io');

const log4js = require('./../config/Logger');
const console = log4js.getLogger('TravelSocket');
function TravelSocket(server, path) {
  socketServer = io().listen(server, {path: path});
  socketServer.on('connection', function (socket) {
    console.log('new socket.id', socket.id);
    socket.emit('success', {id: socket.id, ua: socket.handshake.headers['user-agent']});

    socket.on('broadcast', function (data) {
      socketServer.sockets.emit('broadcast', data);
    });
  });

  this.startTask();
}

TravelSocket.prototype.startTask = function () {
  function filter(list, count) {
    var result = [];
    count = list.length > count ? count : list.length;
    list.forEach(function (item) {
      if (Math.ceil(Math.random() * 10) % 2 > 0 && result.length < count) {
        result.push(item);
      }
    });
    return result;
  }

  var data = require('../mock/data/index.json');
  //定时推送
  setInterval(function () {
    socketServer.sockets.emit('index', {
      swiperlist: filter(data['swiperlist'], 3),
      likelist: filter(data['likelist'], 2),
      iconlist: filter(data['iconlist'], 10),
      hotlist: filter(data['hotlist'], 3),
      weeklist: filter(data['weeklist'], 2)
    });
  }, 1000 * 60);
};
module.exports = TravelSocket;
