importScripts('socket.io.js');

var list = [];
onconnect = function (e) {
    var port = e.ports[0];
    list.push(port);

    var socket = null;
    function addSocket(data) {
        socket = io.connect(data.uri, { path: '/sws' });
        port.postMessage('准备连接socket >> ' + data.uri);

        socket.on('connect', function () {
            port.postMessage(socket.id + " > 已经连接....");

            list.forEach(_port => {
                _port.postMessage(socket.id +" > 已经接入....");
            });
        });

        socket.on('disconnect', function () {
            list.forEach(_port => {
                _port.postMessage(socket.id + " > Socket 已经断开....");
            });

            port.postMessage(socket.id + " > Socket 已经断开...." );
        });

        socket.on('error', function () {
            port.postMessage(" > 连接失败");
        });

        socket.on('broadcast', function (data) {
            port.postMessage(data.id + " > " + data.value);
        });
    }

    port.onmessage = function ({ data }) {
        switch (data.event) {
            case "join":
                addSocket(data);
                break;
            case "chat":
                socket.emit('broadcast', data.value);
                break;
        }
    }
    port.start();
}