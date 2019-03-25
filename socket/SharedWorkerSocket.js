var socketServer = null;
var io = require('socket.io');

const log4js = require('./../config/Logger');
const console = log4js.getLogger('SharedWorkerSocket');

class SharedWorkerSocket {
  constructor(server, path) {
    const that = this;
    this.connectedSockets = 0;
    socketServer = io().listen(server, { path: path });
    socketServer.on('connection', (socket) => {
      that.connectedSockets++;
      
      console.log('new socket.id', socket.id, that.connectedSockets);
      socket.emit('success', { id: socket.id, ua: socket.handshake.headers['user-agent'] });

      socket.on('broadcast', function (data) {
        socketServer.sockets.emit('broadcast', { id: socket.id, value: data });
      });

      socket.on('disconnect', data => {
        that.connectedSockets--;
        console.log("Socket disconnect! Conected sockets:", that.connectedSockets);
      });
    });
  }
  //END
}

module.exports = SharedWorkerSocket;