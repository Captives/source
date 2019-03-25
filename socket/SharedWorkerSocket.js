var events = require('events');
var socketServer = null;
var io = require('socket.io');

const log4js = require('./../config/Logger');
const console = log4js.getLogger('SharedWorkerSocket');

class SharedWorkerSocket {
  connectedSockets = 0;
  constructor(server, path) {
    socketServer = io().listen(server, { path: path });
    socketServer.on('connection', function (socket) {
      connectedSockets++;

      console.log('new socket.id', socket.id, connectedSockets);
      socket.emit('success', { id: socket.id, ua: socket.handshake.headers['user-agent'] });

      socket.on('broadcast', function (data) {
        socketServer.sockets.emit('broadcast', { id: socket.id, value: data });
      });

      socket.on('disconnect', data => {
        connectedSockets--;
        console.log("Socket disconnect! Conected sockets:", connectedSockets);
      });
    });
  }
  //END
}

module.exports = SharedWorkerSocket;